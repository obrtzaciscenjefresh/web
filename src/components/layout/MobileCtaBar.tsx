import Link from "next/link";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { site } from "@/lib/site";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <a
          href={`tel:${site.phone}`}
          className="flex h-12 flex-col items-center justify-center rounded-2xl text-xs font-semibold text-primary hover:bg-primary-50"
        >
          <FaPhone aria-hidden className="text-base" />
          Nazovite
        </a>
        <a
          href={site.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 flex-col items-center justify-center rounded-2xl text-xs font-semibold text-[#075E54] hover:bg-emerald-50"
        >
          <FaWhatsapp aria-hidden className="text-lg" />
          WhatsApp
        </a>
        <Link
          href="/kontakt"
          className="flex h-12 items-center justify-center rounded-2xl bg-primary text-sm font-semibold text-white hover:bg-primary-700"
        >
          Naručite
        </Link>
      </div>
    </div>
  );
}
