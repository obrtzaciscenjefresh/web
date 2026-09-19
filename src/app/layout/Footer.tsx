"use client";
import { MdPhone, MdEmail, MdLocationPin } from "react-icons/md";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-primary shadow-md z-20">
      <div className="max-w-[1536px] mx-auto py-10 px-10 flex flex-col sm:flex-row gap-10">
        <div className="flex-1 flex flex-col gap-10">
          <div className="w-full max-w-[40%] rounded-md overflow-hidden">
            <Image
              src="/fresh-logo.jpg"
              width={300}
              height={100}
              alt="Fresh"
              className="w-full h-full"
              priority
            />
          </div>
          <div className="pr-10">
            <p className="text-white text-base font-semibold ">
              Naša firma je specijalizirana za profesionalno i dubinsko pranje
              tepiha, koristeći najnovije tehnike i ekološki prihvatljive
              proizvode.Ponosimo se brzom i efikasnom uslugom, osiguravajući da
              vaši tepisi budu čisti, svježi i suhi u najkraćem mogućem
              roku.Pružamo besplatnu uslugu preuzimanja i dostave tepiha, čineći
              cijeli proces pranja bezbrižnim i jednostavnim za naše klijente.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10 flex-1">
          <div className="flex-col gap-4 hidden xs:flex">
            <nav className="bg-white">
              <ul className="flex flex-wrap items-center gap-2 px-2 text-primary font-semibold">
                <li className="list-none">
                  <Link
                    href="/"
                    className="block rounded-md px-2 py-2 text-xs transition-colors duration-200 hover:bg-blue-100 hover:text-primary md:text-base cursor-pointer"
                  >
                    Početna
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    href="#onama"
                    className="block rounded-md px-2 py-2 whitespace-nowrap text-xs transition-colors duration-200 hover:bg-blue-100 hover:text-primary md:text-base cursor-pointer"
                  >
                    O nama
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    href="/kucni-tepisi"
                    className="block rounded-md px-2 py-2 whitespace-nowrap text-xs transition-colors duration-200 hover:bg-blue-100 hover:text-primary md:text-base cursor-pointer"
                  >
                    Kućni tepisi
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    href="/uredski-tepisi"
                    className="block rounded-md px-2 py-2 whitespace-nowrap text-xs transition-colors duration-200 hover:bg-blue-100 hover:text-primary md:text-base cursor-pointer"
                  >
                    Uredski tepisi
                  </Link>
                </li>
                <li className="list-none hidden sm:block">
                  <Link
                    href="#usluge"
                    className="block rounded-md px-2 py-2 text-xs transition-colors duration-200 hover:bg-blue-100 hover:text-primary md:text-base cursor-pointer"
                  >
                    Usluge
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    href="/kontakt"
                    className="block rounded-md px-2 py-2 text-xs transition-colors duration-200 hover:bg-blue-100 hover:text-primary md:text-base cursor-pointer"
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold uppercase tracking-wide text-white">
              Pravni dokumenti
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-100">
              <li>
                <Link
                  href="/opci-uvjeti-poslovanja"
                  className="transition-colors hover:text-white hover:underline"
                >
                  Opći uvjeti poslovanja
                </Link>
              </li>
              <li>
                <Link
                  href="/opci-uvjeti-poslovanja-pranje-tepiha"
                  className="transition-colors hover:text-white hover:underline"
                >
                  Opći uvjeti poslovanja – pranje tepiha
                </Link>
              </li>
              <li>
                <Link
                  href="/pravila-privatnosti"
                  className="transition-colors hover:text-white hover:underline"
                >
                  Pravila privatnosti
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4" id="kontakt">
            <h2 className="text-white text-3xl">Kontakt informacije</h2>
            <div className="flex items-center space-x-2">
              <div className="text-white text-xl">
                <MdEmail />
              </div>

              <a
                href="mailto:obrtzaciscenjefresh@gmail.com"
                className="text-sm text-gray-100 hover:text-blue-500 hover:underline transition-colors"
              >
                obrtzaciscenjefresh@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-white text-xl">
                <MdPhone />
              </div>
              <a
                href="tel:+385922416743"
                className="text-sm text-gray-100 hover:text-blue-500 hover:underline transition-colors"
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
                rel="noreferrer"
                className="text-sm text-gray-100 hover:text-blue-500 hover:underline transition-colors"
              >
                Vaganačka ul. 31, 10000, Zagreb
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=385922416743"
              target="_blank"
              aria-label="whatsapp"
              className="text-4xl text-[#25D366] hover:text-[#9cffba] hover:underline transition-colors"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/fresh_obrt_za_ciscenje/"
              target="_blank"
              aria-label="instagram"
              className="text-[28px] instagram rounded-md text-white p-[4px] hover:text-opacity-75"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61554058824757"
              target="_blank"
              aria-label="facebook"
              className="text-4xl text-white hover:text-opacity-75 hover:underline transition-colors"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
