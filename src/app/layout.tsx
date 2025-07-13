import type { Metadata } from "next";
import Head from "next/head";
import { Raleway, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import Script from "next/script";

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

export const metadata: Metadata = {
  title: "Fresh",
  description: "Fresh - pranje tepiha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Link za favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Link za manifest datoteku */}
        <link rel="manifest" href="/manifest.json" />
        {/* Boja za status bar u mobilnim pretraživačima */}
        <meta name="theme-color" content="#000000" />
        {/* Open Graph Meta Tags for Facebook and Instagram */}
        <meta
          property="og:title"
          content="Fresh - Pranje Tepiha i Kemijsko Čišćenje"
        />
        <meta
          property="og:description"
          content="Vaš pouzdan partner za profesionalno pranje tepiha i kemijsko čišćenje. Brzo i efikasno čišćenje uz vrhunske rezultate."
        />
        <meta property="og:image" content="/fresh-logo.jpg" />
        <meta property="og:url" content="https://fresh-ciscenje.hr" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="hr_HR" />
      </Head>
      <body className={`${roboto.variable} ${raleway.variable}`}>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17350004003"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17350004003');
            `,
          }}
        />
        <main className="flex flex-col min-h-screen relative bg-blue-50">
          <Header />
          <main className="flex flex-col flex-1 justify-center items-center xl:container w-full mx-auto mt-[80px] sm:mt-[176px]">
            {children}
          </main>
          <Footer />
        </main>
      </body>
    </html>
  );
}
