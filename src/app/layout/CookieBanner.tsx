"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const consentKey = "fresh-cookie-consent";

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!window.localStorage.getItem(consentKey));
  }, []);

  const saveConsent = (value: "accepted" | "declined") => {
    window.localStorage.setItem(consentKey, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-blue-100 bg-white p-4 shadow-2xl sm:p-5">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-3xl text-sm leading-6 text-slate-600">
          Koristimo nužne kolačiće za rad stranice. Analitiku uključujemo samo uz vašu privolu. Više informacija pročitajte u <Link href="/kolacici" className="font-bold text-primary underline">Politici kolačića</Link>.
        </p>
        <div className="flex shrink-0 gap-3">
          <button onClick={() => saveConsent("declined")} className="rounded-full border border-primary px-4 py-2 text-sm font-bold text-primary">Samo nužni</button>
          <button onClick={() => saveConsent("accepted")} className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-white">Prihvati sve</button>
        </div>
      </div>
    </div>
  );
};
