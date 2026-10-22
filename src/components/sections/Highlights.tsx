import { FaGears, FaLeaf, FaTruckFast, FaUsers } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";

const items = [
  {
    Icon: FaTruckFast,
    title: "Besplatna dostava",
    text: "Preuzimamo i vraćamo tepih na vašu adresu u Zagrebu i okolici.",
  },
  {
    Icon: FaGears,
    title: "Profesionalni strojevi",
    text: "Strojno pranje, centrifuga i komora za sušenje za dubinski čist tepih.",
  },
  {
    Icon: FaLeaf,
    title: "Ekološka sredstva",
    text: "Koristimo ekološki prihvatljiva sredstva sigurna za dom i ured.",
  },
  {
    Icon: FaUsers,
    title: "1.000+ korisnika",
    text: "Preporučuju nas zadovoljni klijenti, njihovi prijatelji i obitelj.",
  },
];

export function Highlights() {
  return (
    <section aria-labelledby="zasto-fresh" className="pt-16 pb-8 sm:pt-20">
      <Container>
        <h2 id="zasto-fresh" className="sr-only">
          Zašto odabrati Fresh
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ Icon, title, text }) => (
            <li
              key={title}
              className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-slate-900/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-xl text-primary">
                <Icon aria-hidden />
              </span>
              <h3 className="text-lg font-bold text-ink">{title}</h3>
              <p className="text-sm leading-6 text-muted">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
