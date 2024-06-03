import Image from "next/image";
import {
  FaPersonBooth,
  FaPeopleCarry,
  FaPagelines,
  FaTools,
} from "react-icons/fa";
import { Proces } from "./components/Proces";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center w-full">
      <section
        id="hero"
        className="w-full h-[400px] sm:h-[800px] bg-hero bg-cover bg-no-repeat bg-center relative"
      >
        <div className="hidden sm:flex flex-col gap-10 items-center justify-center bg-white bg-opacity-60 h-full">
          <div className="bg-primary p-6 flex items-center gap-4 flex-col rounded-xl">
            <h1 className="text-white text-4xl font-bold">Dobrodošli</h1>
            <p className="text-white text-lg font-semibold">
              Najbolje usluge pranja tepiha u gradu
            </p>
          </div>
        </div>
        <div className="absolute px-8 sm:px-12 bottom-0 transform translate-y-[50%] w-full">
          <div className="flex flex-col items-center gap-4 rounded-xl p-4 text-white bg-primary">
            <h4 className="font-bold text-base sm:text-2xl">
              1.000+ zadovoljnih korisnika
            </h4>

            <p className="font-semibold text-sm sm:text-lg">
              Ponosni smo na naših preko 1 000 zadovoljnih korisnika, koji su
              nam ukazali povjerenje i preporučili nas svojim prijateljima i
              obitelji.
            </p>
          </div>
        </div>
      </section>
      <section
        id="onama"
        className="flex flex-col-reverse lg:flex-row bg-white gap-10 pt-32 pb-0 sm:py-40 px-8 sm:px-20"
      >
        <div className="flex-1  shadow-xl rounded-xl overflow-hidden">
          <Image
            src="/susenje.jpg"
            width={540}
            height={700}
            alt="Fresh"
            className="w-full h-full"
            priority
          />
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <h3 className="uppercase text-primary text-xl font-bold">
            Saznajte više o nama
          </h3>
          <h1 className="uppercase text-3xl font-extrabold">O nama</h1>
          <p className="">
            Naša firma je specijalizirana za profesionalno i dubinsko pranje
            tepiha, koristeći najnovije tehnike i ekološki prihvatljive
            proizvode. Ponosimo se brzom i efikasnom uslugom, osiguravajući da
            vaši tepisi budu čisti, svježi i suhi u najkraćem mogućem
            roku.Pružamo besplatnu uslugu preuzimanja i dostave tepiha, čineći
            cijeli proces pranja bezbrižnim i jednostavnim za naše klijente.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex gap-3 items-center">
              <FaPersonBooth className="text-3xl text-primary" />
              <p className="uppercase text-base font-bold">
                Posvećenost tepisima
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <FaPeopleCarry className="text-3xl text-primary" />
              <p className="uppercase text-base font-bold">
                profesionalno osoblje
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <FaTools className="text-3xl text-primary" />
              <p className="uppercase text-base font-bold">
                najmoderniji strojevi
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <FaPagelines className="text-3xl text-primary" />
              <p className="uppercase text-base font-bold">
                ekološki proizvodi
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*     <section className="relative w-full bg-kombi bg-cover bg-center">
        <div className="relative flex gap-2 py-14 px-8 items-center justify-between w-full h-full bg-primary/70">
          <h1 className="text-white text-7xl font-bold uppercase">
            Besplatna dostava
          </h1>
          <p className="text-white text-lg font-semibold">
            Besplatna usluga preuzimanja i dostave tepiha
          </p>
        </div>
      </section> */}

      <Proces />
    </div>
  );
}
