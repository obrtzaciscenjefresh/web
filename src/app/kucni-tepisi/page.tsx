import Image from "next/image";

export default function KucniTepisi() {
  return (
    <div className="flex flex-col flex-1 items-center w-full">
      <section
        id="hero"
        className="relative flex min-h-[420px] w-full items-end overflow-hidden bg-centrifuga bg-cover bg-center sm:min-h-[540px]"
      >
        <div className="absolute inset-0 bg-primary/65 backdrop-blur-[1px]" />
        <div className="relative mx-auto w-full max-w-[1280px] px-5 pb-14 sm:px-8 sm:pb-20">
          <p className="eyebrow text-blue-100">Fresh usluge</p>
          <h1 className="mt-3 font-raleway text-4xl font-extrabold text-white sm:text-6xl">Kućni tepisi</h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-blue-50 sm:text-lg">Profesionalno čišćenje vaših kućnih tepiha, od preuzimanja do dostave.</p>
        </div>
      </section>
      <section className="section-shell grid gap-12 bg-white lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-6">
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
        <div className="flex flex-col gap-6">
          <h3 className="text-primary text-xl font-bold">Prije i Poslije</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-xl shadow-primary/10">
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
            <div className="overflow-hidden rounded-2xl shadow-xl shadow-primary/10">
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