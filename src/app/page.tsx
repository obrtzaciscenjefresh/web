import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center w-full">
      <section
        id="hero"
        className="w-full h-[400px] sm:h-[800px] bg-hero bg-cover bg-no-repeat bg-center relative"
      >
        <div className="flex flex-col gap-10 items-center justify-center bg-white bg-opacity-60 h-full">
          <div className="bg-primary p-6 flex items-center gap-4 flex-col rounded-xl">
            <h1 className="text-white text-4xl font-bold">Dobrodošli</h1>
            <p className="text-white text-lg font-semibold">
              Najbolje usluge pranja tepiha u gradu
            </p>
          </div>
        </div>
        <div className="absolute px-10 bottom-0 transform translate-y-[50%] w-full">
          <div className="flex flex-col items-center gap-4 rounded-xl p-4 text-white bg-primary">
            <h4 className="font-bold text-2xl">1.000+ zadovoljnih korisnika</h4>

            <p className="font-semibold text-lg">
              Ponosni smo na naših preko 1 000 zadovoljnih korisnika, koji su
              nam ukazali povjerenje i preporučili nas svojim prijateljima i
              obitelji.
            </p>
          </div>
        </div>
      </section>
      <section id="onama" className="flex flex-col sm:flex-row bg-white">
        <div></div>
        <div></div>
      </section>
    </div>
  );
}
