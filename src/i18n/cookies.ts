"use server";

import { cookies } from "next/headers";

export type Language = "ko" | "en";

const COOKIE_NAME = "omo-tutorial-lang";

export async function getLanguageFromCookie(): Promise<Language> {
  "use server";
  
  const cookieStore = await cookies();
  const stored = cookieStore.get(COOKIE_NAME)?.value;

  if (stored === "ko" || stored === "en") {
    return stored;
  }

  const acceptLanguage = cookieStore.get("accept-language")?.value;
  if (acceptLanguage?.toLowerCase().startsWith("ko")) {
    return "ko";
  }

  return "en";
}

export async function setLanguageCookie(lang: Language): Promise<void> {
  "use server";
  
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, lang, {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });
}
