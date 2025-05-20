import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationES from "./locales/es/translation.json";
import translationDEU from "./locales/deu/translation.json";
import translationPT from "./locales/pt/translation.json";

// Los recursos de traducción
const resources = {
  en: { translation: translationEN },
  es: { translation: translationES },
  deu: { translation: translationDEU },
  pt: { translation: translationPT },
};

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Pasa i18n al contexto de React
  .init({
    resources,
    fallbackLng: "es", // Idioma por defecto si no detecta o falla
    interpolation: {
      escapeValue: false, // React ya hace el escape
    },
  });

export default i18n;




// El archivo i18n.js es responsable de la configuración de la internacionalización (i18n) en la aplicación React.
// Utiliza la biblioteca i18next para gestionar las traducciones y el idioma del usuario