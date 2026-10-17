"use client";
import { useState } from "react";
import Link from "next/link";
import cjenik from "@/app/data/cjenik.json";

type PriceOption = {
  label?: string;
  price: number;
  anchorPrice: number;
  unit?: string;
  from?: boolean;
};

type Service = {
  id: number;
  name: string;
  category: string;
  note?: string;
  options: PriceOption[];
};

const { anchorDate, services } = cjenik as {
  anchorDate: string;
  services: Service[];
};

const categories = Array.from(
  new Set(services.map((service) => service.category))
);

const [anchorYear, anchorMonth, anchorDay] = anchorDate.split("-").map(Number);
const anchorLabel = `${anchorDay}. ${anchorMonth}. ${anchorYear}.`;

const formatAmount = (amount: number) =>
  `${amount.toFixed(2).replace(".", ",")} €`;

const formatPrice = (option: PriceOption, amount: number) =>
  `${option.from ? "od " : ""}${formatAmount(amount)}${
    option.unit ? ` po ${option.unit}` : ""
  }`;

const PriceBlock = ({ option }: { option: PriceOption }) => (
  <div className="text-right">
    <p className="text-base sm:text-lg font-semibold text-primary">
      {formatPrice(option, option.price)}
    </p>
    <p className="text-[11px] sm:text-[13px] text-gray-500/80">
      Cijena na dan {anchorLabel}: {formatPrice(option, option.anchorPrice)}
    </p>
  </div>
);

export const Usluge = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);

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
          .map((service, index, filteredServices) => {
            const isSingle =
              service.options.length === 1 && !service.options[0].label;

            return (
              <div
                key={service.id}
                className={`flex flex-col ${
                  index === filteredServices.length - 1 ? "" : "border-b"
                } py-4`}
              >
                <div className="flex justify-between items-start gap-4 text-base sm:text-lg font-medium">
                  <span>{service.name}</span>
                  {isSingle && <PriceBlock option={service.options[0]} />}
                  {service.options.length === 0 && (
                    <span className="text-primary font-semibold">
                      {service.note}
                    </span>
                  )}
                </div>
                {!isSingle && service.options.length > 0 && (
                  <ul className="space-y-2 mt-1">
                    {service.options.map((option) => (
                      <li
                        key={option.label}
                        className="flex justify-between items-start gap-4 text-gray-700"
                      >
                        <span className="ml-4">{option.label}</span>
                        <PriceBlock option={option} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
      </div>

      <p className="text-sm text-gray-600">
        Uz svaku cijenu navedena je i cijena na dan {anchorLabel} u skladu s
        Odlukom Vlade RH o isticanju dodatne cijene. Cjenik u strojno čitljivom
        obliku (CSV i XML) dostupan je na stranici{" "}
        <Link href="/cjenik" className="font-semibold text-primary underline">
          Cjenik usluga
        </Link>
        .
      </p>
    </section>
  );
};
