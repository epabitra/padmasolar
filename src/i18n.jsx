import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'padma-lang'
const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'en' || saved === 'od') return saved
    } catch {
      /* ignore */
    }
    return 'od' // default language: Odia (site is focused on Odisha)
  })

  const setLang = (next) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }

  useEffect(() => {
    document.documentElement.lang = lang === 'od' ? 'or' : 'en'
  }, [lang])

  // tt({ en, od }) -> the right string for the active language
  const tt = (obj) => {
    if (obj == null) return ''
    if (typeof obj === 'string') return obj
    return lang === 'od' ? obj.od ?? obj.en ?? '' : obj.en ?? ''
  }

  // t(en, od) -> inline helper for one-off strings
  const t = (en, od) => (lang === 'od' && od ? od : en)

  return (
    <LangContext.Provider value={{ lang, setLang, tt, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
