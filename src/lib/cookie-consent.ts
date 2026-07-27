import { useSyncExternalStore } from "react";

export const COOKIE_CONSENT_KEY = "esm-cookie-consent";
export const COOKIE_CONSENT_EVENT = "esm-cookie-consent-change";

export type CookieConsent = "accepted" | "declined";

export function setCookieConsent(choice: CookieConsent) {
  localStorage.setItem(COOKIE_CONSENT_KEY, choice);
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}

function subscribe(callback: () => void) {
  window.addEventListener(COOKIE_CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(COOKIE_CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): CookieConsent | null {
  return localStorage.getItem(COOKIE_CONSENT_KEY) as CookieConsent | null;
}

function getServerSnapshot(): CookieConsent | null {
  return null;
}

export function useCookieConsent(): CookieConsent | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
