export const site = {
  name: "Fresh",
  legalName: "Fresh, obrt za čišćenje, vl. Filip Domitrović",
  registrationNumber: "98694103",
  activity: "96.01 Pranje i kemijsko čišćenje tekstila i krznenih proizvoda",
  url: "https://fresh-ciscenje.hr",
  phone: "+385922416743",
  phoneDisplay: "+385 92 241 6743",
  email: "obrtzaciscenjefresh@gmail.com",
  address: {
    street: "Vaganačka ulica 31",
    postalCode: "10000",
    city: "Zagreb",
    country: "HR",
  },
  areaServed: "Zagreb i okolica",
  mapsUrl: "https://maps.app.goo.gl/pM4NHvgmiiixGoRu5",
  googleBusinessUrl: "https://maps.app.goo.gl/dMqQMo3riXKtRHDE6",
  googleRating: { value: "5,0", count: 6 },
  social: {
    whatsapp: `https://wa.me/385922416743?text=${encodeURIComponent("Pozdrav, zanima me pranje tepiha.")}`,
    instagram: "https://www.instagram.com/fresh_obrt_za_ciscenje/",
    facebook: "https://www.facebook.com/profile.php?id=61554058824757",
  },
  // Used in machine-readable price list file names (NN 101/2026); PP1 is provisional until confirmed from fiscal receipts.
  premises: {
    type: "USLUZNI_OBJEKT",
    code: "PP1",
  },
} as const;

export const fullAddress = `${site.address.street}, ${site.address.postalCode} ${site.address.city}`;

export const mainNav = [
  { href: "/kucni-tepisi", label: "Kućni tepisi" },
  { href: "/uredski-tepisi", label: "Uredski tepisi" },
  { href: "/#usluge", label: "Cjenik" },
  { href: "/#onama", label: "O nama" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const legalNav = [
  { href: "/opci-uvjeti-poslovanja", label: "Opći uvjeti poslovanja" },
  { href: "/pravila-privatnosti", label: "Pravila privatnosti" },
  { href: "/cjenik", label: "Cjenik (CSV / XML)" },
] as const;
