import type { Metadata } from "next";
import { Raleway, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { CookieBanner } from "./layout/CookieBanner";
import { Analytics } from "./layout/Analytics";

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
  title: "Fresh | Pranje tepiha Zagreb",
  description:
    "Profesionalno pranje i sušenje kućnih i uredskih tepiha u Zagrebu.",
  metadataBase: new URL("https://fresh-ciscenje.hr"),
  icons: { icon: "/favicon.ico" },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Fresh | Pranje tepiha Zagreb",
    description: "Dubinsko pranje, sušenje i dostava tepiha bez brige.",
    url: "https://fresh-ciscenje.hr",
    siteName: "Fresh",
    locale: "hr_HR",
    type: "website",
    images: ["/fresh-logo.jpg"],
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
        <div className="flex min-h-screen flex-col bg-blue-50">
          <Header />
          <main className="flex w-full flex-1 flex-col items-center pt-20 sm:pt-28">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
        <CookieBanner />
      </body>
    </html>
  );
}
