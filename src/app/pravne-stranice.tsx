import Link from "next/link";

type LegalPageProps = {
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export const LegalPage = ({ title, intro, sections }: LegalPageProps) => (
  <article className="section-shell max-w-4xl bg-white">
    <Link href="/" className="text-sm font-bold text-primary hover:underline">← Povratak na početnu</Link>
    <p className="eyebrow mt-10">Fresh obrt za čišćenje</p>
    <h1 className="mt-3 font-raleway text-4xl font-extrabold text-slate-900 sm:text-5xl">{title}</h1>
    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{intro}</p>
    <div className="mt-12 space-y-10">
      {sections.map((section) => (
        <section key={section.heading}>
          <h2 className="font-raleway text-2xl font-bold text-slate-900">{section.heading}</h2>
          <p className="mt-3 leading-8 text-slate-600">{section.body}</p>
        </section>
      ))}
    </div>
    <p className="mt-14 border-t border-blue-100 pt-5 text-sm text-slate-500">Napomena: ovaj predložak treba dopuniti stvarnim podacima obrta i potvrditi prije objave.</p>
  </article>
);