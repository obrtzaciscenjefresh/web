"use client";
import { useState } from "react";

type Service = {
  id: number;
  name: string;
  price: string | Record<string, string>;
  category: string;
};

const services: Service[] = [
  { id: 1, name: "Tepisi", price: "6 € po m²", category: "Tepisi" },
  {
    id: 2,
    name: "Kutna garnitura",
    price: { Mala: "60 €", Srednja: "75 €", XL: "85 €" },
    category: "Namještaj",
  },
  { id: 3, name: "Trosjed", price: "55 €", category: "Namještaj" },
  { id: 4, name: "Dvosjed", price: "45 €", category: "Namještaj" },
  { id: 5, name: "Fotelja", price: "25 €", category: "Namještaj" },
  { id: 6, name: "Tabure", price: "15 €", category: "Namještaj" },
  { id: 7, name: "Jastuk", price: "5 €", category: "Namještaj" },
  {
    id: 8,
    name: "Madrac",
    price: { Jednostrano: "30 €", Obostrano: "40 €" },
    category: "Madraci",
  },
  {
    id: 9,
    name: "Bračni madrac",
    price: { Jednostrano: "40 €", Obostrano: "55 €" },
    category: "Madraci",
  },
  { id: 10, name: "Autosjedala", price: "90 €", category: "Vozila" },
  { id: 11, name: "Auto", price: "od 130 €", category: "Vozila" },
  {
    id: 12,
    name: "Uredski tepisi",
    price: "Cijena po dogovoru",
    category: "Tepisi",
  },
];

const categories = Array.from(
  new Set(services.map((service) => service.category))
);

export const Usluge = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);

  const renderPrice = (price: string | Record<string, string>) => {
    if (typeof price === "string") {
      return (
        <p className="text-base sm:text-lg font-semibold text-primary">
          {price}
        </p>
      );
    }
    return (
      <ul className="space-y-1">
        {Object.entries(price).map(([option, cost]) => (
          <li key={option} className="flex justify-between text-gray-700">
            <span className="ml-4">{option}</span>
            <span className="text-base sm:text-lg font-semibold text-primary">
              {cost}
            </span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section
      id="usluge"
      className="w-full bg-blue-100"
    >
      <div className="section-shell flex flex-col gap-8">
        <div className="flex flex-col gap-3">
        <p className="eyebrow">
          Naše usluge i cijene čišćenja
        </p>
        <h2 className="font-raleway text-3xl font-extrabold text-slate-900 sm:text-4xl">Usluge i cijene</h2>
        <p className="max-w-2xl leading-7 text-slate-600">Transparentan pregled najčešćih usluga. Za veće površine i posebne materijale cijenu potvrđujemo nakon kratkog dogovora.</p>
        </div>

      <div className="-mx-1 flex max-w-full gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Kategorije usluga">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            role="tab"
            aria-selected={activeTab === category}
            className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-bold transition-colors sm:px-5 ${
              activeTab === category
                ? "bg-primary text-white"
                : "bg-white text-primary hover:bg-primary/10"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-primary/10">
        {services
          .filter((service) => service.category === activeTab)
          .map((service, index, filteredServices) => (
            <div
              key={service.id}
              className={`flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7 ${
                index === filteredServices.length - 1 ? "" : "border-b"
              }`}
            >
              <div className="flex min-w-0 justify-between gap-4 text-base font-medium sm:text-lg">
                <span className="break-words">{service.name}</span>
                {typeof service.price === "string" && (
                  <span className="text-primary font-semibold">
                    {service.price}
                  </span>
                )}
              </div>
              {typeof service.price !== "string" && renderPrice(service.price)}
            </div>
          ))}
      </div>
      </div>
    </section>
  );
};
