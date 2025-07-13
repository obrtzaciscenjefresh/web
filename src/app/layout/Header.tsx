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
    <header className="fixed top-0 left-0 w-full bg-primary shadow-md z-30">
      <div className="max-w-[1536px] mx-auto bg-white">
        <div className="flex w-full h-[80px] sm:h-[176px]">
          <div className="w-full max-w-[30%] lg:max-w-[25%] p-1 flex justify-center">
            <Image
              src="/fresh-logo.jpg"
              width={300}
              height={80}
              alt="Fresh"
              className="object-contain h-full w-full"
              priority
            />
          </div>

          {/* Desktop Header */}
          <div className="hidden sm:flex flex-col w-full max-w-[70%] lg:max-w-[75%]">
            <div className="flex justify-between items-center bg-blue-50 py-3 px-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex items-center space-x-2">
                  <div className="text-primary text-xl">
                    <MdEmail />
                  </div>
                  <a
                    href="mailto:obrtzaciscenjefresh@gmail.com"
                    className="text-sm hover:text-blue-500 hover:underline transition-colors"
                  >
                    obrtzaciscenjefresh@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-primary text-xl">
                    <MdPhone />
                  </div>
                  <a
                    href="Tel:+385922416743"
                    className="text-sm hover:text-blue-500 hover:underline transition-colors"
                  >
                    + 385 (92) 241-6743
                  </a>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href="https://api.whatsapp.com/send?phone=385922416743"
                  target="_blank"
                  aria-label="whatsapp"
                  className="text-3xl text-[#25D366] hover:text-[#075E54] hover:underline transition-colors"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.instagram.com/fresh_obrt_za_ciscenje/"
                  target="_blank"
                  aria-label="instagram"
                  className="text-[22px] instagram rounded-md text-white p-[4px] hover:text-opacity-75"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61554058824757"
                  target="_blank"
                  aria-label="facebook"
                  className="text-3xl text-[#4267B2] hover:text-opacity-75 hover:underline transition-colors"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>

            <div className="flex flex-row justify-between px-6 py-6 items-center h-full w-full bg-primary">
              <nav>
                <ul className="flex space-x-4 text-white font-semibold">
                  <li className="py-2 px-1 whitespace-nowrap hover:bg-blue-100 hover:text-primary rounded-lg text-sm md:text-base">
                    <Link href="/">Početna</Link>
                  </li>
                  <li className="py-2 px-1 whitespace-nowrap hover:bg-blue-100 hover:text-primary rounded-lg text-sm md:text-base">
                    <Link href="/#onama">O nama</Link>
                  </li>
                  <li className="py-2 px-1 whitespace-nowrap hover:bg-blue-100 hover:text-primary rounded-lg text-sm md:text-base">
                    <Link href="/kucni-tepisi">Kućni tepisi</Link>
                  </li>
                  <li className="py-2 px-1 whitespace-nowrap hover:bg-blue-100 hover:text-primary rounded-lg text-sm md:text-base">
                    <Link href="/uredski-tepisi">Uredski tepisi</Link>
                  </li>
                </ul>
              </nav>
              <div className="flex justify-end">
                <Link
                  href="#kontakt"
                  className="bg-blue-100 text-primary font-bold py-2 px-4 rounded-md"
                >
                  Kontakt
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="sm:hidden flex w-full justify-end items-center px-4 bg-primary text-white">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl focus:outline-none"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden bg-white text-primary w-full shadow-md">
            <nav className="flex flex-col items-start px-6 py-4">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="py-2"
              >
                Početna
              </Link>
              <Link
                href="/#onama"
                onClick={() => setMenuOpen(false)}
                className="py-2"
              >
                O nama
              </Link>
              <Link
                href="/kucni-tepisi"
                onClick={() => setMenuOpen(false)}
                className="py-2"
              >
                Kućni tepisi
              </Link>
              <Link
                href="/uredski-tepisi"
                onClick={() => setMenuOpen(false)}
                className="py-2"
              >
                Uredski tepisi
              </Link>
              <Link
                href="#kontakt"
                onClick={() => setMenuOpen(false)}
                className="py-2"
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
