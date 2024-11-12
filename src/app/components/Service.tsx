"use client";
import { useState } from "react";

type Service = {
  id: number;
  name: string;
  price: string | Record<string, string>;
  category: string;
};

const services: Service[] = [
  { id: 1, name: "Tepisi", price: "4 € po m²", category: "Tepisi" },
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
    price: { Jednostrano: "20 €", Obostrano: "30 €" },
    category: "Madraci",
  },
  {
    id: 9,
    name: "Bračni madrac",
    price: { Jednostrano: "30 €", Obostrano: "45 €" },
    category: "Madraci",
  },
  { id: 10, name: "Autosjedala", price: "90 €", category: "Vozila" },
  { id: 11, name: "Auto", price: "od 130 €", category: "Vozila" },
  {
    id: 12,
    name: "Poslovni tepisi",
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
        {Object.entries(price).map(([option, cost], index) => (
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
      className="bg-blue-100 py-12 sm:py-20 px-8 sm:px-20 w-full flex flex-col gap-10"
    >
      <div className="flex-1 flex flex-col gap-6">
        <h1 className="uppercase text-primary text-xl font-bold">
          Naše usluge i cijene čišćenja
        </h1>
        <h2 className="uppercase text-3xl font-extrabold">usluge i cijene</h2>
      </div>

      <div className="flex justify-start mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-2 py-1 sm:px-4 sm:py-2 mx-1 sm:mx-2 font-semibold rounded-lg text-sm sm:text-base ${
              activeTab === category
                ? "bg-primary text-white"
                : "bg-white text-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        {services
          .filter((service) => service.category === activeTab)
          .map((service, index, filteredServices) => (
            <div
              key={service.id}
              className={`flex flex-col ${
                index === filteredServices.length - 1 ? "" : "border-b"
              } py-4`}
            >
              <div className="flex justify-between text-base sm:text-lg font-medium">
                <span>{service.name}</span>
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
    </section>
  );
};
