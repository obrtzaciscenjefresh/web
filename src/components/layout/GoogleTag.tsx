import Script from "next/script";
import { analyticsId } from "@/lib/consent";

// Standardni Google snippet mora biti u poslužiteljskom HTML-u da ga Google Ads prepozna.
const init = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500
});
gtag('js', new Date());
gtag('config', '${analyticsId}');
`;

export function GoogleTag() {
  /* eslint-disable @next/next/no-before-interactive-script-outside-document -- App Router: dopušteno u root layoutu */
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
        strategy="beforeInteractive"
      />
      <Script id="google-tag" strategy="beforeInteractive">
        {init}
      </Script>
    </>
  );
  /* eslint-enable @next/next/no-before-interactive-script-outside-document */
}
