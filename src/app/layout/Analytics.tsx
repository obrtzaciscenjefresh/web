"use client";

import { useEffect, useState } from "react";

const consentKey = "fresh-cookie-consent";

export const Analytics = () => {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(window.localStorage.getItem(consentKey) === "accepted");
  }, []);

  useEffect(() => {
    if (!allowed || document.getElementById("fresh-analytics")) return;

    const script = document.createElement("script");
    script.id = "fresh-analytics";
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-17350004003";
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => window.dataLayer.push(args);
    window.gtag("js", new Date());
    window.gtag("config", "AW-17350004003");
  }, [allowed]);

  return null;
};