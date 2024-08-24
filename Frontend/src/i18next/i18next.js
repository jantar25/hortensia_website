import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import englishTranslation from './Languages/English/translation.json'
import frenchTranslation from './Languages/French/translation.json'

const resources = {
  english: {
    translation:englishTranslation
  },
  french: {
    translation:frenchTranslation
  }
}

const savedLanguage = localStorage.getItem('i18nextLng') || 'english';

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage.toLowerCase(),
    fallbackLng:'english',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: [],
      lookupLocalStorage: 'i18nextLng',
    }
  })

// store.subscribe(() => {
//   const language = localStorage.getItem('i18nextLng')
//   i18next.changeLanguage(language.toLocaleLowerCase())
// })

export default i18next