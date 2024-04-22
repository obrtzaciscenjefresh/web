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
        <div className="flex gap-3 items-center justify-between py-2">
          <div className="flex gap-2 items-center">
            {renderIcon(process.id)}
            <p className="uppercase text-base font-bold">{process.title}</p>
          </div>
          {activeProcess === process.id ? (
            <button onClick={() => setActiveProcess(0)}>
              <FaMinusCircle className="text-xl text-primary" />
            </button>
          ) : (
            <button onClick={() => setActiveProcess(process.id)}>
              <FaPlusCircle className="text-xl text-primary" />
            </button>
          )}
        </div>
        {activeProcess === process.id && (
          <p className="text-sm">{process.description}</p>
        )}
      </div>
    );
  });

  return (
    <section
      id="onama"
      className="flex flex-col sm:flex-row bg-white gap-10 py-20 px-20 w-full"
    >
      <div className="flex-1 flex flex-col gap-6">
        <h3 className="uppercase text-primary text-xl font-bold">
          Kako mi to radimo
        </h3>
        <h1 className="uppercase text-3xl font-extrabold">proces</h1>
        <div className="flex flex-col space-y-3 divide-y">{procesPreview}</div>
      </div>
      <Image
        src="/susenje.jpg"
        width={540}
        height={700}
        alt="Fresh"
        className="w-full h-full flex-1 shadow-xl rounded-xl"
        priority
      />
    </section>
  );
};
