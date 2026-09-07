"use client";
import { MdPhone, MdEmail, MdLocationPin } from "react-icons/md";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1">
          <div className="w-40 overflow-hidden rounded-md bg-white p-2">
            <Image
              src="/fresh-logo.jpg"
              width={300}
              height={100}
              alt="Fresh"
              className="h-auto w-full"
              priority
            />
          </div>
          <div className="pr-10">
            <p className="max-w-md text-sm leading-7 text-blue-50">
              Naša firma je specijalizirana za profesionalno i dubinsko pranje
              tepiha, koristeći najnovije tehnike i ekološki prihvatljive
              proizvode.Ponosimo se brzom i efikasnom uslugom, osiguravajući da
              vaši tepisi budu čisti, svježi i suhi u najkraćem mogućem
              roku.Pružamo besplatnu uslugu preuzimanja i dostave tepiha, čineći
              cijeli proces pranja bezbrižnim i jednostavnim za naše klijente.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Brzi linkovi</h2>
          <nav className="flex flex-col items-start gap-3 text-sm text-blue-50">
            <Link href="/" className="transition-colors hover:text-white">Početna</Link>
            <Link href="/#onama" className="transition-colors hover:text-white">O nama</Link>
            <Link href="/kucni-tepisi" className="transition-colors hover:text-white">Kućni tepisi</Link>
            <Link href="/uredski-tepisi" className="transition-colors hover:text-white">Uredski tepisi</Link>
            <Link href="/uvjeti-koristenja" className="transition-colors hover:text-white">Uvjeti korištenja</Link>
            <Link href="/privatnost" className="transition-colors hover:text-white">Politika privatnosti</Link>
            <Link href="/kolacici" className="transition-colors hover:text-white">Kolačići</Link>
          </nav>
        </div>
        <div className="flex flex-col gap-5" id="kontakt">
            <h2 className="text-lg font-bold">Kontakt informacije</h2>
            <div className="flex items-center space-x-2">
              <div className="text-white text-xl">
                <MdEmail />
              </div>

              <a href="mailto:obrtzaciscenjefresh@gmail.com" className="text-sm text-blue-50 transition-colors hover:text-white">
                obrtzaciscenjefresh@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-white text-xl">
                <MdPhone />
              </div>
              <a
                href="tel:+385922416743"
                className="text-sm text-blue-50 transition-colors hover:text-white"
              >
                + 385 (92) 241-6743
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-white text-xl">
                <MdLocationPin />
              </div>

              <a
                href="https://maps.app.goo.gl/pM4NHvgmiiixGoRu5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-50 transition-colors hover:text-white"
              >
                Vaganačka ul. 31, 10000, Zagreb
              </a>
            </div>
          <div className="flex gap-4 pt-2">
            <a
              href="https://api.whatsapp.com/send?phone=385922416743"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="whatsapp"
              className="text-4xl text-[#25D366] hover:text-[#9cffba] hover:underline transition-colors"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/fresh_obrt_za_ciscenje/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram"
              className="text-[28px] instagram rounded-md text-white p-[4px] hover:text-opacity-75"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61554058824757"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="facebook"
              className="text-4xl text-white hover:text-opacity-75 hover:underline transition-colors"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15 px-5 py-5 text-center text-xs text-blue-100 sm:px-8">
        © {new Date().getFullYear()} Fresh. Sadržaj je informativnog karaktera.
      </div>
    </footer>
  );
};
