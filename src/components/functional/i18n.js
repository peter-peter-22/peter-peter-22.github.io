import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import hu from '../../assets/locales/hu';
import en from '../../assets/locales/en';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: { translation: en },
            hu: { translation: hu }
        }
    });

export default i18n;