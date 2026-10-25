import { computed, onMounted, ref } from 'vue'
import { useTheme } from 'vuetify'

export type PortfolioTheme = 'sama' | 'dark' | 'light'

export const portfolioThemes = ref<PortfolioTheme[]>([
  'sama',
  'dark',
  'light',
])

const STORAGE_KEY = 'sama-portfolio-theme'

export function usePortfolioTheme() {
  const theme = useTheme()
  const activeTheme = computed(() => theme.global.name.value as PortfolioTheme)

  function setTheme(name: PortfolioTheme) {
    theme.global.name.value = name
    try {
      window.localStorage.setItem(STORAGE_KEY, name)
    } catch {
      // The theme still works if browser storage is disabled.
    }
  }

  onMounted(() => {
    try {
      const savedTheme = window.localStorage.getItem(STORAGE_KEY)
      if (portfolioThemes.value.includes(savedTheme as PortfolioTheme)) {
        theme.global.name.value = savedTheme as PortfolioTheme
      }
    } catch {
      // Use the default theme when browser storage is unavailable.
    }
  })

  return { activeTheme, setTheme }
}
