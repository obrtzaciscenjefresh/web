export const consentKey = "fresh-cookie-consent";
export const consentEvent = "fresh-cookie-consent-change";

export function openCookieSettings() {
  window.localStorage.removeItem(consentKey);
  window.dispatchEvent(new Event(consentEvent));
}
