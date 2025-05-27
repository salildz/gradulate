import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './en/translation.json';
import translationTR from './tr/translation.json';

const resources = {
    "en-US": {
        translation: translationEN,
    },
    "en": {
        translation: translationEN,
    },
    "tr-TR": {
        translation: translationTR,
    },
    "tr": {
        translation: translationTR,
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en-US',
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage']
        }
    });

export default i18n;