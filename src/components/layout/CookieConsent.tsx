"use client";

import Link from "next/link";
import { useEffect, useSyncExternalStore } from "react";
import { consentEvent, consentKey } from "@/lib/consent";

const consentTypes = ["ad_storage", "ad_user_data", "ad_personalization", "analytics_storage"] as const;

function consentState(value: "granted" | "denied") {
  return Object.fromEntries(consentTypes.map((type) => [type, value]));
}

function updateConsent(value: "granted" | "denied") {
  window.gtag?.("consent", "update", consentState(value));
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(consentEvent, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(consentEvent, onChange);
  };
}

const getSnapshot = () => window.localStorage.getItem(consentKey);
const getServerSnapshot = () => "pending";

export function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    if (consent === "accepted") {
      updateConsent("granted");
    } else if (consent === "declined") {
      updateConsent("denied");
    }
  }, [consent]);

  const choose = (choice: "accepted" | "declined") => {
    window.localStorage.setItem(consentKey, choice);
    window.dispatchEvent(new Event(consentEvent));
  };

  if (consent !== null) {
    return null;
  }

  return (
    <aside
      role="dialog"
      aria-label="Postavke kolačića"
      className="fixed inset-x-3 bottom-20 z-50 mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-900/15 sm:p-6 lg:bottom-6"
    >
      <h2 className="text-base font-bold text-ink">Vaša privatnost nam je važna</h2>
      <p className="mt-2 text-sm leading-6 text-muted">
        Koristimo nužne kolačiće za rad stranice. Analitičke i oglasne kolačiće uključujemo
        samo uz vaš pristanak. Više u{" "}
        <Link
          href="/pravila-privatnosti"
          className="font-semibold text-primary underline underline-offset-2"
        >
          Pravilima privatnosti
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => choose("declined")}
          className="h-11 rounded-full border border-slate-300 px-5 text-sm font-semibold text-ink transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
        >
          Samo nužni
        </button>
        <button
          type="button"
          onClick={() => choose("accepted")}
          className="h-11 rounded-full bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
        >
          Prihvati sve
        </button>
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
