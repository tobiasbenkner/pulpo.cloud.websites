import { getOpenGraphLocale } from "./i18n/locales";
import { createResolver } from "./i18n/resolve";
import { type FlattenTranslation as BaseFlattenTranslation } from "./i18n/types";

export const languages = ["de", "en"] as const;
export const defaultLang = "de" as const;
export type Language = (typeof languages)[number];

export const openGraphLocales: Record<Language, string> = {
  de: getOpenGraphLocale("de"),
  en: getOpenGraphLocale("en"),
};

export const resolveTranslations = createResolver({ languages, defaultLang });

// Re-export with Language type bound
export type FlattenTranslation<T> = BaseFlattenTranslation<T, Language>;
