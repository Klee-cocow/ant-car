import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translation from "./translation";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: translation,
    fallbackLng: "en",
    lng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
