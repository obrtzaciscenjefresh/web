"use client";
import { MdPhone, MdEmail, MdLocationPin } from "react-icons/md";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-primary shadow-md">
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
          <div className="flex flex-col gap-4">
            <nav className="bg-white">
              <ul className="flex space-x-4 text-primary font-semibold">
                <li className="px-3 py-2 hover:bg-blue-100 hover:text-primary">
                  <Link href="/">Početna</Link>
                </li>
                <li className="px-3 py-2 hover:bg-blue-100 hover:text-primary">
                  <Link href="/o-nama">O nama</Link>
                </li>
                <li className="px-3 py-2 hover:bg-blue-100 hover:text-primary">
                  <Link href="/kontakt">Kontakt</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-4 ">
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
                href="Tel:+385922416743"
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
              className="text-4xl text-[#25D366] hover:text-[#9cffba] hover:underline transition-colors"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/fresh_obrt_za_ciscenje/"
              target="_blank"
              className="text-[28px] instagram rounded-md text-white p-[4px] hover:text-opacity-75"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61554058824757"
              target="_blank"
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
