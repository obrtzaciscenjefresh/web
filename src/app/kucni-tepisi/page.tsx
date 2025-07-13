import Image from "next/image";

export default function KucniTepisi() {
  return (
    <div className="flex flex-col flex-1 items-center w-full">
      <section
        id="hero"
        className="w-full h-[400px] sm:h-[800px] bg-centrifuga bg-cover bg-no-repeat bg-center relative"
      >
        <div className="hidden sm:flex flex-col gap-10 items-center justify-center bg-white bg-opacity-60 h-full">
          <div className="bg-primary p-6 flex items-center gap-4 flex-col rounded-xl">
            <h1 className="text-white text-4xl font-bold">Kućni Tepisi</h1>
            <p className="text-white text-lg font-semibold">
              Profesionalno čišćenje vaših kućnih tepiha
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row bg-white gap-10 pt-12 sm:pt-24 md:pt-32 pb-20 sm:py-40 px-8 sm:px-20 relative">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="uppercase text-primary text-xl font-bold">
            Kućni Tepisi
          </h1>
          <h2 className="uppercase text-3xl font-extrabold">
            Čistoća i svježina
          </h2>
          <p>
            Strojno pranje tepiha je metoda temeljitog čišćenja tepiha pomoću profesionalnih strojeva.
          </p>
          <p>
            Ovim postupkom uklanjaju se sve nečistoće, prašina, alergeni i mrlje koje se ne mogu ukloniti standardnim i površinskim čišćenjem.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <h3 className="text-primary text-xl font-bold">Prije i Poslije</h3>
          <div className="flex gap-4">
            <div className="flex-1 shadow-xl rounded-xl overflow-hidden">
              <Image
                src="/kucni-prije.jpg"
                width={540}
                height={700}
                alt="Kućni Tepisi Prije"
                className="w-full h-full"
                priority
              />
              <p className="text-center text-sm mt-2">Prije čišćenja</p>
            </div>
            <div className="flex-1 shadow-xl rounded-xl overflow-hidden">
              <Image
                src="/kucni-poslije.jpg"
                width={540}
                height={700}
                alt="Kućni Tepisi Poslije"
                className="w-full h-full"
                priority
              />
              <p className="text-center text-sm mt-2">Poslije čišćenja</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}