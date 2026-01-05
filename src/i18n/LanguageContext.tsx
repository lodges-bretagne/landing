import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Language, translations } from './translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.fr
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  
  const getLanguageFromUrl = (): Language => {
    const langParam = searchParams.get('lang')
    if (langParam && ['fr', 'en', 'es'].includes(langParam)) {
      return langParam as Language
    }
    // Fallback to localStorage or default to French
    const saved = localStorage.getItem('language') as Language
    return saved && ['fr', 'en', 'es'].includes(saved) ? saved : 'fr'
  }

  const [language, setLanguageState] = useState<Language>(getLanguageFromUrl)
  const [isUpdatingFromUrl, setIsUpdatingFromUrl] = useState(false)

  // Update language when URL param changes (but not when we're updating URL ourselves)
  useEffect(() => {
    if (isUpdatingFromUrl) return
    
    const langFromUrl = getLanguageFromUrl()
    if (langFromUrl !== language) {
      setLanguageState(langFromUrl)
    }
  }, [searchParams])

  // Update URL and localStorage when language changes (but not when updating from URL)
  useEffect(() => {
    if (isUpdatingFromUrl) {
      setIsUpdatingFromUrl(false)
      return
    }
    
    // Save to localStorage
    localStorage.setItem('language', language)
    
    // Update URL parameter
    const currentLang = searchParams.get('lang')
    const expectedLang = language === 'fr' ? null : language
    
    if (currentLang !== expectedLang) {
      setIsUpdatingFromUrl(true)
      const newSearchParams = new URLSearchParams(searchParams)
      if (language === 'fr') {
        // Remove lang param for French (default)
        newSearchParams.delete('lang')
      } else {
        newSearchParams.set('lang', language)
      }
      setSearchParams(newSearchParams, { replace: true })
    }
  }, [language, searchParams, setSearchParams])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}


