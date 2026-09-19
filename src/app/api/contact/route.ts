import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { ime, email, telefon, adresa, kat, datumPrikupa, napomena, prihvacam } = body;

    if (!ime || !email || !telefon || !adresa || !prihvacam) {
      return NextResponse.json(
        { error: "Sva obavezna polja moraju biti popunjena." },
        { status: 400 }
      );
    }

    const today = new Date().toISOString().split("T")[0];
    if (datumPrikupa && (!/^\d{4}-\d{2}-\d{2}$/.test(datumPrikupa) || datumPrikupa < today)) {
      return NextResponse.json(
        { error: "Odaberite valjani datum prikupa koji nije u prošlosti." },
        { status: 400 }
      );
    }

    const html = `
      <h2>Nova prijava s kontakt forme</h2>
      <p><strong>Ime:</strong> ${ime}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${telefon}</p>
      <p><strong>Adresa prikupa:</strong> ${adresa}</p>
      <p><strong>Kat / lokacija:</strong> ${kat || "-"}</p>
      <p><strong>Željeni dan prikupa:</strong> ${datumPrikupa}</p>
      <p><strong>Napomena:</strong> ${napomena || "-"}</p>
      <p><strong>Prihvaćanje uvjeta:</strong> Da</p>
    `;

    const result = await resend.emails.send({
      from: "Fresh <onboarding@resend.dev>",
      to: ["obrtzaciscenjefresh@gmail.com"],
      subject: "Novi upit za pranje tepiha",
      html,
    });

    if (result.error) {
      throw new Error(result.error.message || "Neuspješno slanje e-maila.");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Došlo je do pogreške prilikom slanja poruke.",
      },
      { status: 500 }
    );
  }
}
