import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

const limits = {
  ime: 100,
  email: 200,
  telefon: 40,
  adresa: 200,
  kat: 100,
  napomena: 2000,
} as const;

type Field = keyof typeof limits;

const required: Field[] = ["ime", "email", "telefon", "adresa"];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
// Per-instance memory, so this is best-effort throttling rather than a hard limit.
const recentRequests = new Map<string, number[]>();

function isRateLimited(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  const now = Date.now();
  const timestamps = (recentRequests.get(ip) ?? []).filter((time) => now - time < RATE_WINDOW_MS);
  if (timestamps.length >= RATE_MAX) {
    recentRequests.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  recentRequests.set(ip, timestamps);
  if (recentRequests.size > 1000) {
    for (const [key, times] of recentRequests) {
      if (times.every((time) => now - time >= RATE_WINDOW_MS)) recentRequests.delete(key);
    }
  }
  return false;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function badRequest(error: string) {
  return NextResponse.json({ error }, { status: 400 });
}

export async function POST(request: Request) {
  if (isRateLimited(request)) {
    return NextResponse.json(
      { error: "Previše upita u kratkom vremenu. Pokušajte ponovno kasnije ili nas nazovite." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return badRequest("Neispravan zahtjev.");
  }

  if (typeof body?.web === "string" && body.web.trim() !== "") {
    return NextResponse.json({ success: true });
  }

  const values = {} as Record<Field, string>;
  for (const field of Object.keys(limits) as Field[]) {
    const raw = body?.[field];
    const value = typeof raw === "string" ? raw.trim() : "";
    if (value.length > limits[field]) {
      return badRequest("Jedno od polja je predugačko.");
    }
    values[field] = value;
  }

  if (required.some((field) => !values[field]) || body?.prihvacam !== true) {
    return badRequest("Sva obavezna polja moraju biti popunjena.");
  }

  if (!emailPattern.test(values.email)) {
    return badRequest("Unesite ispravnu e-mail adresu.");
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form error: RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Slanje trenutno nije moguće. Nazovite nas ili pišite na WhatsApp." },
      { status: 500 }
    );
  }

  const row = (label: string, value: string) =>
    `<p><strong>${label}:</strong> ${value ? escapeHtml(value).replace(/\n/g, "<br>") : "-"}</p>`;

  const html = [
    "<h2>Nova prijava s kontakt forme</h2>",
    row("Ime", values.ime),
    row("Email", values.email),
    row("Telefon", values.telefon),
    row("Adresa prikupa", values.adresa),
    row("Kat / lokacija", values.kat),
    row("Napomena", values.napomena),
    row("Prihvaćanje uvjeta", "Da"),
  ].join("\n");

  try {
    const result = await new Resend(apiKey).emails.send({
      from: "Fresh <onboarding@resend.dev>",
      to: [site.email],
      replyTo: values.email,
      subject: "Novi upit za pranje tepiha",
      html,
    });

    if (result.error) {
      throw new Error(result.error.message);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Došlo je do pogreške prilikom slanja. Pokušajte ponovno ili nas nazovite." },
      { status: 500 }
    );
  }
}
