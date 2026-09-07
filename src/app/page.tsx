import Image from "next/image";
import { FaPersonBooth, FaPeopleCarry, FaPagelines, FaTools, FaArrowRight, FaCheck } from "react-icons/fa";
import { Proces } from "./components/Proces";
import { Usluge } from "./components/Service";

function MarketingProof() {
  return (
    <div className="flex w-full max-w-md flex-col rounded-2xl border border-white/30 bg-white/15 p-5 text-white backdrop-blur-md sm:p-6">
      <p className="text-3xl font-extrabold sm:text-4xl">1.000+</p>
      <p className="mt-2 text-sm leading-6 text-blue-50">zadovoljnih korisnika koji su nam povjerili svoje tepihe</p>
      <div className="mt-5 flex flex-col gap-3 border-t border-white/20 pt-4 text-sm font-semibold sm:mt-6 sm:pt-5">
        <span className="flex items-center gap-2"><FaCheck className="text-secondary" /> Besplatno preuzimanje i dostava</span>
        <span className="flex items-center gap-2"><FaCheck className="text-secondary" /> Ekološki prihvatljivi proizvodi</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center w-full">
      <section id="hero" className="relative flex min-h-[620px] w-full items-end overflow-hidden bg-hero bg-cover bg-center sm:min-h-[680px]">
        <div className="absolute inset-0 bg-primary/75 backdrop-blur-[1px] sm:bg-gradient-to-r sm:from-primary/90 sm:via-primary/75 sm:to-primary/55" />
        <div className="relative mx-auto grid w-full max-w-[1280px] gap-10 px-5 pb-16 pt-20 sm:px-8 md:pb-20 min-[1025px]:grid-cols-[1fr_auto] min-[1025px]:items-end lg:pb-24">
          <div className="max-w-2xl text-white">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-blue-100 sm:text-sm">Fresh obrt za čišćenje</p>
            <h1 className="max-w-xl font-raleway text-4xl font-extrabold leading-[1.08] sm:text-5xl md:text-6xl">Tepisi koji ponovno mirišu na dom.</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-blue-50 sm:text-lg">Profesionalno pranje, centrifugiranje i sušenje tepiha uz preuzimanje i dostavu na području Zagreba.</p>
            <div className="mt-7 min-[1025px]:hidden"><MarketingProof /></div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="tel:+385922416743" className="cta-sweep inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-6 py-3.5 font-bold shadow-xl"><span className="relative z-10">Nazovi i dogovori termin</span><FaArrowRight className="relative z-10" /></a>
              <a href="#usluge" className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/60 px-6 py-3.5 font-bold text-white transition-colors hover:bg-white/10">Pogledaj cijene</a>
            </div>
          </div>
          <div className="hidden min-[1025px]:block">
            <MarketingProof />
          </div>
        </div>
      </section>
      <section className="section-shell relative grid gap-12 bg-white lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <span id="onama" className="absolute -top-[100px]"></span>
        <div className="overflow-hidden rounded-2xl shadow-xl shadow-primary/10">
          <Image
            src="/susenje.jpg"
            width={540}
            height={700}
            alt="Fresh"
            className="w-full h-full"
            priority
          />
        </div>
        <div className="flex flex-col gap-6">
          <p className="eyebrow">Saznajte više o nama</p>
          <h2 className="font-raleway text-3xl font-extrabold text-slate-900 sm:text-4xl">Čisto, brzo i bez brige.</h2>
          <p className="leading-7 text-slate-600">
            Naša firma je specijalizirana za profesionalno i dubinsko pranje
            tepiha, koristeći najnovije tehnike i ekološki prihvatljive
            proizvode. Ponosimo se brzom i efikasnom uslugom, osiguravajući da
            vaši tepisi budu čisti, svježi i suhi u najkraćem mogućem
            roku.Pružamo besplatnu uslugu preuzimanja i dostave tepiha, čineći
            cijeli proces pranja bezbrižnim i jednostavnim za naše klijente.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4">
              <FaPersonBooth className="text-3xl text-primary" />
              <p className="uppercase text-base font-bold">
                Posvećenost tepisima
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4">
              <FaPeopleCarry className="text-3xl text-primary" />
              <p className="uppercase text-base font-bold">
                profesionalno osoblje
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4">
              <FaTools className="text-3xl text-primary" />
              <p className="uppercase text-base font-bold">
                najmoderniji strojevi
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4">
              <FaPagelines className="text-3xl text-primary" />
              <p className="uppercase text-base font-bold">
                ekološki proizvodi
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full bg-kombi bg-cover bg-center">
        <div className="relative flex flex-col items-start justify-between gap-6 bg-primary/85 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:px-[max(2rem,calc((100%_-_1240px)/2))]">
          <div><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-100">Jednostavno za vas</p><h2 className="font-raleway text-4xl font-extrabold text-white sm:text-5xl">Besplatno preuzimanje i dostava.</h2></div>
          <p className="max-w-md text-lg font-semibold leading-7 text-white">Vi spremite termin, mi preuzimamo tepih i vraćamo ga čistog, suhog i spremnog za dom.</p>
        </div>
      </section>

      <Proces />
      <Usluge />
    </div>
  );
}
