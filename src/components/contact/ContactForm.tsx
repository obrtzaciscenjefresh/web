"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const initialForm = {
  ime: "",
  email: "",
  telefon: "",
  adresa: "",
  kat: "",
  napomena: "",
  prihvacam: false,
  web: "",
};

type Status = { type: "success" | "error"; message: string } | null;

const inputClass =
  "w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-ink outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10";

function Field({
  id,
  label,
  children,
  className,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (event.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(data?.error || "Slanje nije uspjelo. Pokušajte ponovno.");
      }

      setStatus({ type: "success", message: "Hvala! Upit je poslan, javit ćemo vam se uskoro." });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error ? error.message : "Došlo je do pogreške. Pokušajte ponovno.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      {/* Honeypot: hidden from people, bots fill it in. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="web">Web stranica</label>
        <input id="web" name="web" type="text" tabIndex={-1} autoComplete="off" value={form.web} onChange={handleChange} />
      </div>
      <Field id="ime" label="Ime i prezime">
        <input id="ime" name="ime" type="text" required maxLength={100} autoComplete="name" value={form.ime} onChange={handleChange} className={inputClass} />
      </Field>
      <Field id="email" label="E-mail">
        <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" value={form.email} onChange={handleChange} className={inputClass} />
      </Field>
      <Field id="telefon" label="Broj telefona">
        <input id="telefon" name="telefon" type="tel" required maxLength={40} autoComplete="tel" value={form.telefon} onChange={handleChange} className={inputClass} />
      </Field>
      <Field id="adresa" label="Adresa preuzimanja">
        <input id="adresa" name="adresa" type="text" required maxLength={200} autoComplete="street-address" value={form.adresa} onChange={handleChange} className={inputClass} />
      </Field>
      <Field id="kat" label="Kat / lokacija" className="sm:col-span-2">
        <input id="kat" name="kat" type="text" maxLength={100} placeholder="npr. 2. kat, bez lifta" value={form.kat} onChange={handleChange} className={inputClass} />
      </Field>
      <Field id="napomena" label="Napomena / količina / m²" className="sm:col-span-2">
        <textarea id="napomena" name="napomena" rows={5} maxLength={2000} placeholder="npr. 3 tepiha, ukupno 18 m², mrlje od kave" value={form.napomena} onChange={handleChange} className={inputClass} />
      </Field>

      <label className="flex items-start gap-3 text-sm leading-6 text-muted sm:col-span-2">
        <input
          name="prihvacam"
          type="checkbox"
          required
          checked={form.prihvacam}
          onChange={handleChange}
          className="mt-1 h-4 w-4 shrink-0 accent-primary"
        />
        <span>
          Prihvaćam{" "}
          <Link href="/opci-uvjeti-poslovanja" className="font-semibold text-primary underline underline-offset-2">
            Opće uvjete poslovanja
          </Link>{" "}
          i{" "}
          <Link href="/pravila-privatnosti" className="font-semibold text-primary underline underline-offset-2">
            Pravila privatnosti
          </Link>
          .
        </span>
      </label>

      {status && (
        <p
          role={status.type === "error" ? "alert" : "status"}
          className={
            status.type === "success"
              ? "rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800 sm:col-span-2"
              : "rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800 sm:col-span-2"
          }
        >
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="h-13 rounded-full bg-primary px-8 font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2 sm:w-fit"
      >
        {isSubmitting ? "Slanje..." : "Pošaljite upit"}
      </button>
    </form>
  );
}
