import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./en";
import faTranslations from "./fa";

i18n.use(initReactI18next).init({
    resources: {
        en: enTranslations,
        fa: faTranslations,
    },
    lng: "en",
    fallbackLng: "en",
    // debug: process.env.NODE_ENV === 'development',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
