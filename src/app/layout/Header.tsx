"use client";
import { useState } from "react";
import { MdPhone, MdEmail } from "react-icons/md";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-30 w-full border-b border-blue-100/80 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex h-20 w-full items-center justify-between px-4 sm:h-24 sm:px-6 lg:px-8">
          <Link href="/" className="flex h-full w-28 shrink-0 items-center sm:w-32 lg:w-40">
            <Image
              src="/fresh-logo.jpg"
              width={300}
              height={80}
              alt="Fresh"
              className="h-full w-full object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Header */}
          <div className="hidden items-center gap-3 min-[760px]:flex lg:gap-6">
            <div className="hidden items-center gap-4 text-xs text-slate-600 xl:flex">
              <a href="mailto:obrtzaciscenjefresh@gmail.com" className="flex items-center gap-1.5 transition-colors hover:text-primary">
                <MdEmail className="text-base text-primary" />
                obrtzaciscenjefresh@gmail.com
              </a>
              <a href="tel:+385922416743" className="flex items-center gap-1.5 transition-colors hover:text-primary">
                <MdPhone className="text-base text-primary" />
                +385 (92) 241-6743
              </a>
            </div>
            <nav>
              <ul className="flex items-center gap-0 text-sm font-bold text-primary lg:gap-2">
                <li><Link href="/" className="rounded-full px-2 py-2 transition-colors hover:bg-blue-50 lg:px-3">Početna</Link></li>
                <li><Link href="/#onama" className="rounded-full px-2 py-2 transition-colors hover:bg-blue-50 lg:px-3">O nama</Link></li>
                <li><Link href="/kucni-tepisi" className="rounded-full px-2 py-2 transition-colors hover:bg-blue-50 lg:px-3">Kućni tepisi</Link></li>
                <li><Link href="/uredski-tepisi" className="rounded-full px-2 py-2 transition-colors hover:bg-blue-50 lg:px-3">Uredski tepisi</Link></li>
                <li><Link href="/#kontakt" className="rounded-full px-2 py-2 transition-colors hover:bg-blue-50 lg:px-3">Kontakt</Link></li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-3 min-[760px]:hidden">
            <a href="tel:+385922416743" aria-label="Nazovi Fresh" className="rounded-full bg-blue-50 p-3 text-primary md:hidden">
              <MdPhone className="text-xl" />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Zatvori izbornik" : "Otvori izbornik"}
              aria-expanded={menuOpen}
              className="rounded-full bg-primary p-3 text-xl text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 border-t border-blue-50 px-4 py-2.5 text-primary md:px-8">
          <div className="hidden items-center gap-4 text-xs font-semibold text-slate-600 md:flex xl:hidden">
            <a href="mailto:obrtzaciscenjefresh@gmail.com" aria-label="Pošalji e-mail Freshu" title="E-mail" className="flex items-center gap-1.5 transition-colors hover:text-primary">
              <MdEmail className="text-base text-primary" />
              <span className="hidden lg:inline">obrtzaciscenjefresh@gmail.com</span>
            </a>
            <a href="tel:+385922416743" aria-label="Nazovi Fresh" title="Telefon" className="flex items-center gap-1.5 transition-colors hover:text-primary">
              <MdPhone className="text-base text-primary" />
              <span className="hidden lg:inline">+385 (92) 241-6743</span>
            </a>
          </div>
          <a href="https://api.whatsapp.com/send?phone=385922416743" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-lg text-[#25D366] transition-opacity hover:opacity-70"><FaWhatsapp /></a>
          <a href="https://www.instagram.com/fresh_obrt_za_ciscenje/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="instagram rounded-md p-1 text-lg text-white transition-opacity hover:opacity-70"><FaInstagram /></a>
          <a href="https://www.facebook.com/profile.php?id=61554058824757" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-lg text-[#4267B2] transition-opacity hover:opacity-70"><FaFacebook /></a>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="hidden border-t border-blue-100 bg-white text-primary shadow-md max-[759px]:block">
            <nav className="flex flex-col items-start px-6 py-4 text-base font-semibold">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="w-full border-b border-blue-50 py-3"
              >
                Početna
              </Link>
              <Link
                href="/#onama"
                onClick={() => setMenuOpen(false)}
                className="w-full border-b border-blue-50 py-3"
              >
                O nama
              </Link>
              <Link
                href="/kucni-tepisi"
                onClick={() => setMenuOpen(false)}
                className="w-full border-b border-blue-50 py-3"
              >
                Kućni tepisi
              </Link>
              <Link
                href="/uredski-tepisi"
                onClick={() => setMenuOpen(false)}
                className="w-full border-b border-blue-50 py-3"
              >
                Uredski tepisi
              </Link>
              <Link
                href="#kontakt"
                onClick={() => setMenuOpen(false)}
                className="w-full py-3"
              >
                Kontakt
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
