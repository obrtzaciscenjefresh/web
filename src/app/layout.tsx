import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { JsonLd } from "@/components/ui/JsonLd";
import { currentPrices } from "@/data/pricing";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-jakarta",
});

const description =
  "Profesionalno strojno pranje tepiha u Zagrebu uz besplatno preuzimanje i dostavu. Kućni i uredski tepisi, kemijsko čišćenje namještaja, madraca i automobila.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Pranje tepiha Zagreb | Besplatna dostava | Fresh",
    template: "%s | Fresh pranje tepiha Zagreb",
  },
  description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "pranje tepiha Zagreb",
    "strojno pranje tepiha",
    "kemijsko čišćenje tepiha",
    "čišćenje uredskih tepiha",
    "čišćenje tapisona",
    "kemijsko čišćenje namještaja",
    "čišćenje madraca",
    "Fresh",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "hr_HR",
    siteName: site.name,
    url: site.url,
    title: "Pranje tepiha Zagreb | Fresh",
    description,
  },
  twitter: {
    card: "summary_large_image",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#2c549d",
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "DryCleaningOrLaundry",
  "@id": `${site.url}/#business`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/fresh-logo.jpg`,
  image: [`${site.url}/pakiranje.jpg`, `${site.url}/fresh-logo.jpg`],
  telephone: site.phone,
  email: site.email,
  description,
  priceRange: "€€",
  currenciesAccepted: "EUR",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: { "@type": "City", name: "Zagreb" },
  hasMap: site.googleBusinessUrl,
  sameAs: [site.social.instagram, site.social.facebook],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cjenik usluga čišćenja",
    itemListElement: currentPrices.map((item) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: item.name },
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "EUR",
        ...(item.priceFrom ? { minPrice: item.price } : { price: item.price }),
        unitText: item.unit,
      },
    })),
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  inLanguage: "hr",
  publisher: { "@id": `${site.url}/#business` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr" data-scroll-behavior="smooth" className={jakarta.variable}>
      {/* Browser extensions (e.g. Grammarly) inject attributes on <body> before hydration. */}
      <body className="flex min-h-dvh flex-col font-sans" suppressHydrationWarning>
        <JsonLd data={businessSchema} />
        <JsonLd data={websiteSchema} />
        <a
          href="#sadrzaj"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Preskoči na sadržaj
        </a>
        <Header />
        <main id="sadrzaj" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCtaBar />
        <CookieConsent />
      </body>
    </html>
  );
}
