"use client";

import { FormEvent, useState } from "react";

const initialForm = {
  ime: "",
  email: "",
  telefon: "",
  adresa: "",
  kat: "",
  datumPrikupa: "",
  napomena: "",
  prihvacam: false,
};

const getToday = () => new Date().toISOString().split("T")[0];

export default function KontaktPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
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
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const responseText = await response.text();
      let data: { error?: string } | null = null;

      try {
        data = responseText ? JSON.parse(responseText) : null;
      } catch {
        data = null;
      }

      if (!response.ok) {
        throw new Error(
          data?.error ||
            "Došlo je do pogreške prilikom slanja poruke. Provjerite postavke e-mail usluge i ponovno pokušajte."
        );
      }

      setStatus({
        type: "success",
        message: "Poruka je uspješno poslana. Hvala vam!",
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Došlo je do pogreške. Pokušajte ponovno.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex w-full flex-col items-center px-4 py-16 sm:px-8 lg:px-20">
      <div className="w-full max-w-5xl rounded-2xl bg-white p-6 shadow-xl sm:p-10">
        <div className="mb-8">
          <p className="text-xl font-bold uppercase text-primary">Kontakt</p>
          <h1 className="mt-2 text-3xl font-extrabold uppercase text-gray-900">
            Zatražite ponudu ili rezervirajte uslugu
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="ime" className="block text-sm font-semibold text-gray-700">
              Ime
            </label>
            <input
              id="ime"
              name="ime"
              type="text"
              required
              value={form.ime}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="telefon" className="block text-sm font-semibold text-gray-700">
              Broj Telefona
            </label>
            <input
              id="telefon"
              name="telefon"
              type="tel"
              required
              value={form.telefon}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="adresa" className="block text-sm font-semibold text-gray-700">
              Adresa Prikupa
            </label>
            <input
              id="adresa"
              name="adresa"
              type="text"
              required
              value={form.adresa}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="kat" className="block text-sm font-semibold text-gray-700">
              Kat / Lokacija
            </label>
            <input
              id="kat"
              name="kat"
              type="text"
              value={form.kat}
              onChange={handleChange}
              placeholder="npr. 2. kat, bez lifta"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="datumPrikupa" className="block text-sm font-semibold text-gray-700">
              Željeni Dan Prikupa
            </label>
            <input
              id="datumPrikupa"
              name="datumPrikupa"
              type="date"
              min={getToday()}
              value={form.datumPrikupa}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-primary"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label htmlFor="napomena" className="block text-sm font-semibold text-gray-700">
              Napomena / Količina / m2
            </label>
            <textarea
              id="napomena"
              name="napomena"
              rows={5}
              value={form.napomena}
              onChange={handleChange}
              placeholder="npr. 3 tepiha, ukupno 18 m2, plus detalji o mrljama ili vrsti tepiha"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-primary"
            />
          </div>

          <div className="md:col-span-2 flex flex-col gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4">
            <label className="flex items-start gap-3 text-sm leading-6 text-gray-700">
              <input
                name="prihvacam"
                type="checkbox"
                required
                checked={form.prihvacam}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span>
                Prihvaćam <a href="/uvjeti-poslovanja" className="font-semibold text-primary underline">Opće uvjete poslovanja za pranje tepiha</a>.
              </span>
            </label>

            {status.message && (
              <div
                className={`rounded-lg border px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border-green-200 bg-green-50 text-green-700"
                    : "border-red-200 bg-red-50 text-red-700"
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Slanje..." : "Pošalji upit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
