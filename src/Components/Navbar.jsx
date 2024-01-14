import React from 'react'
import { useTranslation } from 'react-i18next';
import { languageOptions } from '../Constants/languangesOptions';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) =>{
    i18n.changeLanguage(e.target.value);
  }

  return (
    <div>
      <div>{t('greeting')}</div>
      <div className="px-2">
        <select
          id="languageSelector"
          onChange={handleLanguageChange}
          value={i18n.language}
          className='p-1 rounded bg-transparent'
        >
          {languageOptions.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="flex items-center text-white font-[800] text-md bg-black">
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Navbar