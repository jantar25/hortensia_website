import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import { store } from '../Redux/store.js'
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

i18next
  .use(initReactI18next)
  .init({
    resources,
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

  store.subscribe(() => {
  const language = store.getState().preferences.language
  i18next.changeLanguage(language.toLocaleLowerCase())
})

export default i18next