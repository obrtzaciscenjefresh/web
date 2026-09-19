import type { Metadata } from "next";
import { Raleway, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import Script from "next/script";
import CookieConsent from "./components/CookieConsent";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
  variable: "--font-raleway",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Fresh",
  image: "https://fresh-ciscenje.hr/fresh-logo.jpg",
  telephone: "+385922416743",
  email: "obrtzaciscenjefresh@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vaganačka ul. 31",
    addressLocality: "Zagreb",
    postalCode: "10000",
    addressCountry: "HR",
  },
  areaServed: "Zagreb",
  url: "https://fresh-ciscenje.hr",
  sameAs: [
    "https://www.instagram.com/fresh_obrt_za_ciscenje/",
    "https://www.facebook.com/profile.php?id=61554058824757",
  ],
  priceRange: "€€",
  description:
    "Profesionalno pranje tepiha, kemijsko čišćenje i usluge čišćenja namještaja i automobila u Zagrebu.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Fresh",
  url: "https://fresh-ciscenje.hr",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://fresh-ciscenje.hr/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      question: "Koje usluge pranja tepiha nudite u Zagrebu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pružamo profesionalno pranje tepiha, kemijsko čišćenje, čišćenje namještaja, madraca i automobila u Zagrebu i okolici.",
      },
    },
    {
      "@type": "Question",
      question: "Da li nudite dostavu i preuzimanje tepiha?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, pružamo besplatnu uslugu preuzimanja i dostave tepiha za naše klijente u Zagrebu.",
      },
    },
    {
      "@type": "Question",
      question: "Kako izgleda postupak čišćenja tepiha?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tepih se najprije istresa, zatim pere, centrifugira, suši i završno usisava kako bi bio potpuno čist i svjež.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Fresh | Pranje tepiha i čišćenje u Zagrebu",
  description:
    "Fresh - profesionalno pranje tepiha, kemijsko čišćenje, čišćenje namještaja i automobila u Zagrebu.",
  metadataBase: new URL("https://fresh-ciscenje.hr"),
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "pranje tepiha Zagreb",
    "kemijsko čišćenje Zagreb",
    "čišćenje tepiha",
    "kućni tepisi",
    "uredski tepisi",
    "Fresh",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Fresh - Pranje Tepiha i Kemijsko Čišćenje",
    description:
      "Vaš pouzdan partner za profesionalno pranje tepiha i kemijsko čišćenje. Brzo i efikasno čišćenje uz vrhunske rezultate.",
    url: "https://fresh-ciscenje.hr",
    siteName: "Fresh",
    locale: "hr_HR",
    type: "website",
    images: [
      {
        url: "/fresh-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Fresh logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body className={`${roboto.variable} ${raleway.variable}`}>
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <div className="flex flex-col min-h-screen relative bg-blue-50">
          <Header />
          <main className="flex flex-col flex-1 justify-center items-center xl:container w-full mx-auto mt-[80px] sm:mt-[176px]">
            {children}
          </main>
          <Footer />
        </div>
        <CookieConsent />
      </body>
    </html>
  );
}
