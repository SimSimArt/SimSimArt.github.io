import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type { CreativeTool, NavigationItem, SocialLink } from '../types/portfolio'
import { portfolioByLocale } from '../i18n/portfolio'

const creativeTools = ref<CreativeTool[]>([
  { id: 'photoshop', name: 'Adobe Photoshop', mark: 'Ps', logoKind: 'adobe' },
  { id: 'premiere', name: 'Premiere Pro', mark: 'Pr', logoKind: 'adobe' },
  { id: 'illustrator', name: 'Adobe Illustrator', mark: 'Ai', logoKind: 'adobe' },
  { id: 'xd', name: 'Adobe XD', mark: 'Xd', logoKind: 'adobe' },
  { id: 'after-effects', name: 'After Effects', mark: 'Ae', logoKind: 'adobe' },
  { id: 'lightroom', name: 'Lightroom', mark: 'Lr', logoKind: 'adobe' },
  { id: 'capcut', name: 'CapCut', mark: 'Cc', logoKind: 'capcut' },
  { id: 'figma', name: 'Figma', mark: 'F', logoKind: 'figma' },
  { id: 'canva', name: 'Canva', mark: 'Canva', logoKind: 'canva' },
  { id: 'davinci', name: 'DaVinci Resolve', mark: 'DR', logoKind: 'davinci' },
  { id: 'office', name: 'Microsoft Office', mark: 'O', logoKind: 'office' },
])

const socialLinks = ref<SocialLink[]>([
  { label: 'whatsapp', shortLabel: 'WA', href: 'https://wa.me/+9647869657321' },
  { label: 'Instagram', shortLabel: 'IG', href: 'https://instagram.com/simsimdesignoneandonly' },
  { label: 'Behance', shortLabel: 'Be', href: 'https://www.behance.net/samafarmerssim' },
  { label: 'LinkedIn', shortLabel: 'in', href: 'https://www.linkedin.com/in/samsam-ph-0b272a414/' },
])

export function usePortfolioContent() {
  const { locale, t } = useI18n()
  const localizedContent = computed(() => portfolioByLocale[locale.value === 'ar' ? 'ar' : 'en'])
  const navigationItems = computed<NavigationItem[]>(() => [
    { label: t('nav.main'), to: '/' },
    { label: t('nav.about'), to: '/who-am-i' },
    { label: t('nav.work'), to: '/work' },
  ])

  return {
    navigationItems,
    creativeTools,
    journey: computed(() => localizedContent.value.journey),
    skillGroups: computed(() => localizedContent.value.skillGroups),
    creativePractices: computed(() => localizedContent.value.creativePractices),
    homeHighlights: computed(() => localizedContent.value.homeHighlights),
    socialLinks,
  }
}
