"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { mainNav, site } from "@/lib/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Zatvori izbornik" : "Otvori izbornik"}
        className="flex h-11 w-11 items-center justify-center rounded-full text-xl text-primary transition-colors hover:bg-primary-50"
      >
        {open ? <FaXmark /> : <FaBars />}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Glavna navigacija"
          className="absolute inset-x-0 top-full border-b border-slate-200 bg-white shadow-xl shadow-slate-900/5"
        >
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
            <li>
              <Link
                href="/"
                onClick={close}
                className="block rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-primary-50"
              >
                Početna
              </Link>
            </li>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="block rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-primary-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 border-t border-slate-100 pt-3">
              <a
                href={`tel:${site.phone}`}
                className="block rounded-xl px-3 py-3 text-base font-semibold text-primary hover:bg-primary-50"
              >
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
