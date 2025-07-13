import Image from "next/image";

export default function UredskiTepisi() {
  return (
    <div className="flex flex-col flex-1 items-center w-full">
      <section
        id="hero"
        className="w-full h-[400px] sm:h-[800px] bg-strojevi bg-cover bg-no-repeat bg-center relative"
      >
        <div className="hidden sm:flex flex-col gap-10 items-center justify-center bg-white bg-opacity-60 h-full">
          <div className="bg-primary p-6 flex items-center gap-4 flex-col rounded-xl">
            <h1 className="text-white text-4xl font-bold">Uredski Tepisi</h1>
            <p className="text-white text-lg font-semibold">
              Dubinsko čišćenje za vaš ured
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row bg-white gap-10 pt-12 sm:pt-24 md:pt-32 pb-20 sm:py-40 px-8 sm:px-20 relative">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="uppercase text-primary text-xl font-bold">
            Uredski Tepisi
          </h1>
          <h2 className="uppercase text-3xl font-extrabold">
            Higijena i profesionalnost
          </h2>
          <p>
            Dubinski i strojno čistimo tepihe i tapisone većih površina. U kratkom roku, kroz svega nekoliko dana vaš će pod prekriven tapisonom biti strojno našamponiran, iščetkan, opran i osušen. Preko vikenda očistimo kompletnu površinu vašeg poslovnog prostora prekrivenog tapisonom tako da se vratite u čisti prostor u ponedjeljak.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <h3 className="text-primary text-xl font-bold">Prije i Poslije</h3>
          <div className="flex gap-4">
            <div className="flex-1 shadow-xl rounded-xl overflow-hidden">
              <Image
                src="/strojno-prije.jpg"
                width={540}
                height={700}
                alt="Uredski Tepisi Prije"
                className="w-full h-full"
                priority
              />
              <p className="text-center text-sm mt-2">Prije čišćenja</p>
            </div>
            <div className="flex-1 shadow-xl rounded-xl overflow-hidden">
              <Image
                src="/strojno-poslije.jpg"
                width={540}
                height={700}
                alt="Uredski Tepisi Poslije"
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