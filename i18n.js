import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import { reactI18nextModule } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import backend from "i18next-http-backend";

import homepageTranslationEN from './locale/en/homepage.json'
import commonTranslationEN from './locale/en/common.json'
import loginFormTranslationEN from "./locale/en/login.json"
import registerFormTranslationEN from "./locale/en/register.json"
import emailTranslationEN from "./locale/en/email.json"
import page400TranslationEN from "./locale/en/400.json"
import profileTranslationEN from "./locale/en/profile.json"
import sitesTranslationEN from "./locale/en/sites.json"

import homepageTranslationFR from './locale/fr/homepage.json'
import commonTranslationFR from './locale/fr/common.json'
import loginFormTranslationFR from "./locale/fr/login.json"
import registerFormTranslationFR from "./locale/fr/register.json"
import emailTranslationFR from "./locale/fr/email.json"
import page400TranslationFR from "./locale/fr/400.json"
import profileTranslationFR from "./locale/fr/profile.json"
import sitesTranslationFR from "./locale/fr/sites.json"

const resources = {
  en: {
    homepage: homepageTranslationEN,
    common: commonTranslationEN,
    login: loginFormTranslationEN,
    register: registerFormTranslationEN,
    email: emailTranslationEN,
    page400: page400TranslationEN,
    profile: profileTranslationEN,
    site: sitesTranslationEN
  },
  fr: {
    homepage: homepageTranslationFR,
    common: commonTranslationFR,
    login: loginFormTranslationFR,
    register: registerFormTranslationFR,
    email: emailTranslationFR,
    page400: page400TranslationFR,
    profile: profileTranslationFR,
    site: sitesTranslationFR
  }
}
i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .use(backend)
  // .use(reactI18nextModule)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: true
    },
    resources,
    defaultNS: "homepage"
  });

export default i18n;