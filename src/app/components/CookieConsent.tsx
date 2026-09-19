"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const consentKey = "fresh-cookie-consent";
const analyticsId = "AW-17350004003";

type Consent = "accepted" | "declined";

function enableAnalytics() {
  if (document.querySelector(`script[data-fresh-analytics="${analyticsId}"]`)) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", analyticsId);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;
  script.dataset.freshAnalytics = analyticsId;
  document.head.appendChild(script);
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(consentKey) as Consent | null;
    setConsent(savedConsent);

    if (savedConsent === "accepted") {
      enableAnalytics();
    }
  }, []);

  const chooseConsent = (choice: Consent) => {
    window.localStorage.setItem(consentKey, choice);
    setConsent(choice);

    if (choice === "accepted") {
      enableAnalytics();
    }
  };

  if (consent) {
    return null;
  }

  return (
    <aside
      role="dialog"
      aria-label="Postavke kolačića"
      className="fixed inset-x-0 bottom-0 z-50 border-t-4 border-primary bg-white shadow-[0_-8px_30px_rgba(15,23,42,0.14)]"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-lg text-primary" aria-hidden="true">
              ✓
            </span>
            <h2 className="text-lg font-bold text-gray-900">Vaša privatnost nam je važna</h2>
          </div>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Fresh koristi nužne kolačiće za pravilan rad stranice. Analitičke kolačiće
            uključujemo samo uz vaš pristanak. Svoje postavke možete promijeniti u bilo kojem
            trenutku brisanjem spremljenog pristanka u pregledniku. Više informacija pročitajte
            u{" "}
            <Link href="/pravila-privatnosti" className="font-semibold text-primary underline underline-offset-2">
              Pravilima privatnosti
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => chooseConsent("declined")}
          className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Samo nužni
        </button>
        <button
          type="button"
          onClick={() => chooseConsent("accepted")}
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Prihvati sve
        </button>
        </div>
      </div>
    </aside>
  );
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
