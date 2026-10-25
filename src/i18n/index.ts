import { createI18n } from 'vue-i18n'
import { messages } from './messages'

function getInitialLocale(): 'en' | 'ar' {
  try {
    return window.localStorage.getItem('sama-portfolio-locale') === 'ar' ? 'ar' : 'en'
  } catch {
    return 'en'
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'en',
  messages,
})
