"use client";
import { useState } from "react";
import {
  FaDiceOne,
  FaPlusCircle,
  FaDiceTwo,
  FaDiceThree,
  FaDiceFour,
  FaDiceFive,
  FaDiceSix,
  FaMinusCircle,
} from "react-icons/fa";
import Image from "next/image";

export const Proces = () => {
  const [activeProcess, setActiveProcess] = useState(0);

  const processes = [
    {
      id: 1,
      title: "Istresanje tepiha",
      description:
        "Tepih se pažljivo istresa kako bi se uklonila prašina, krupne nečistoće i čestice koje se zadržavaju dublje u vlaknima. Ovaj korak osigurava temeljitu pripremu tepiha za daljnje čišćenje.",
    },
    {
      id: 2,
      title: "Pranje tepiha",
      description:
        "Tepih se obrađuje profesionalnim strojem za pranje, koristeći odabrane deterdžente ili sredstva za čišćenje. Strojno pranje tepiha omogućava dubinsko čišćenje vlakana tepiha, uklanjanje mrlja i osvježavanje boja.",
    },
    {
      id: 3,
      title: "Centrifugiranje tepiha",
      description:
        "Nakon pranja, tepih se stavlja u centrifugu kako bi se uklonio višak vode. Ovaj korak pomaže u smanjenju vremena sušenja i osigurava brže vraćanje tepiha u upotrebu.",
    },
    {
      id: 4,
      title: "Sušenje tepiha u komori",
      description:
        "Tepih se postavlja u sušionicu gdje je kontrolirana temperatura i vlažnost zraka. Ovaj proces omogućuje da su vaši tepisi u potpunosti suhi u vrlo kratkom vremenskom periodu.",
    },
    {
      id: 5,
      title: "Završno usisavanje i mirisni osvježivač",
      description:
        "Tepih se pažljivo usisava kako bi se uklonile preostale nečistoće i osiguralo da je tepih potpuno suh. Nakon toga, tepih se osvježava mirisnim osvježivačem koji ostavlja ugodan miris.",
    },
    {
      id: 6,
      title: "Pakiranje i dostava tepiha",
      description:
        "Konačno, čist tepih pažljivo se pakira kako bi se očuvala njegova svježina i spriječila nečistoća tijekom transporta. Pakiranje osigurava da tepih bude spreman za vraćanje u savršeno čistome stanju.",
    },
  ];

  const renderIcon = (index: number) => {
    switch (index) {
      case 1:
        return <FaDiceOne className="text-3xl text-primary" />;
      case 2:
        return <FaDiceTwo className="text-3xl text-primary" />;
      case 3:
        return <FaDiceThree className="text-3xl text-primary" />;
      case 4:
        return <FaDiceFour className="text-3xl text-primary" />;
      case 5:
        return <FaDiceFive className="text-3xl text-primary" />;
      case 6:
        return <FaDiceSix className="text-3xl text-primary" />;
      default:
        return null;
    }
  };

  const procesPreview = processes.map((process, index) => {
    return (
      <div className="flex flex-col gap-2" key={process.id}>
        <div className="flex items-center justify-between gap-4 py-3">
          <div className="flex min-w-0 items-center gap-3">
            {renderIcon(process.id)}
            <p className="text-sm font-bold text-slate-800 sm:text-base">{process.title}</p>
          </div>
          {activeProcess === process.id ? (
            <button
              onClick={() => setActiveProcess(0)}
              aria-label={`Zatvori ${process.title}`}
              aria-expanded="true"
              className="shrink-0 rounded-full p-1 text-primary transition-colors hover:bg-blue-50"
            >
              <FaMinusCircle className="text-xl" />
            </button>
          ) : (
            <button
              onClick={() => setActiveProcess(process.id)}
              aria-label={`Otvori ${process.title}`}
              aria-expanded="false"
              className="shrink-0 rounded-full p-1 text-primary transition-colors hover:bg-blue-50"
            >
              <FaPlusCircle className="text-xl" />
            </button>
          )}
        </div>
        {activeProcess === process.id && (
          <p className="max-w-2xl pb-2 text-sm leading-6 text-slate-600">{process.description}</p>
        )}
      </div>
    );
  });

  return (
    <section
      id="process"
      className="section-shell grid gap-10 bg-white lg:grid-cols-[1fr_0.9fr] lg:items-center"
    >
      <div className="flex flex-col gap-5">
        <p className="eyebrow">
          Kako mi to radimo
        </p>
        <h2 className="font-raleway text-3xl font-extrabold text-slate-900 sm:text-4xl">Proces čišćenja</h2>
        <div className="divide-y divide-blue-100">{procesPreview}</div>
      </div>
      <div className="overflow-hidden rounded-2xl shadow-xl shadow-primary/10">
        <Image
          src="/centrifuga.jpg"
          width={540}
          height={700}
          alt="Fresh"
          className="w-full h-full"
          priority
        />
      </div>
    </section>
  );
};
