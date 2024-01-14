import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import english from '../Languages/english.json'
import french from '../Languages/french.json'
import swahili from '../Languages/kiswahili.json'

const resources = {
    en: {
        translation:english
    },
    fr: {
        translation:french
    },
    sw: {
        translation:swahili
    }
}

i18n
.use(initReactI18next)
.use(LanguageDetector)
.init({
    resources,
    fallbackLng:'fr',
    keySeparator: false,
    interpolation: {
        escapeValue: false
    }
})

export default i18n