<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { portfolioThemes, usePortfolioTheme } from '../composables/usePortfolioTheme'
import { usePortfolioContent } from '../composables/usePortfolioContent'

const route = useRoute()
const { locale, t } = useI18n()
const mobileMenuOpen = ref(false)
const { activeTheme, setTheme } = usePortfolioTheme()
const { navigationItems, socialLinks } = usePortfolioContent()
const brandLogoSrc = `${import.meta.env.BASE_URL}favicon.ico`

function isCurrentRoute(path: string) {
  return route.path === path
}

function toggleLocale() {
  locale.value = locale.value === 'en' ? 'ar' : 'en'
  try {
    window.localStorage.setItem('sama-portfolio-locale', locale.value)
  } catch {
    // Language switching still works if browser storage is disabled.
  }
}
</script>

<template>
  <header class="site-header">
    <RouterLink class="brand" to="/" :aria-label="t('nav.brand')">
      <img class="brand-logo" :src="brandLogoSrc" alt="" />
      <span class="brand-name">SAMA<span class="brand-period">.</span></span>
    </RouterLink>

    <button
      class="mobile-menu-toggle"
      type="button"
      :aria-expanded="mobileMenuOpen"
      :aria-label="t('nav.toggle')"
      @click="mobileMenuOpen = !mobileMenuOpen"
    >
      <span></span><span></span>
    </button>

    <div class="sidebar-content" :class="{ 'sidebar-content--open': mobileMenuOpen }">
      <div>
        <p class="sidebar-label">{{ t('nav.intro') }}</p>
        <nav class="primary-nav" :aria-label="t('nav.label')">
          <RouterLink
            v-for="item in navigationItems"
            :key="item.to"
            :to="item.to"
            class="nav-link"
            :class="{ 'nav-link--active': isCurrentRoute(item.to) }"
            @click="mobileMenuOpen = false"
          >
            <span>{{ item.label }}</span>
            <span class="nav-arrow" aria-hidden="true">↗</span>
          </RouterLink>
        </nav>
      </div>

      <div class="sidebar-bottom">
        <div class="theme-control">
          <p class="sidebar-label">{{ t('nav.mood') }}</p>
          <div class="theme-options" role="group" :aria-label="t('nav.theme')">
            <button
              v-for="themeOption in portfolioThemes"
              :key="themeOption"
              class="theme-option"
              :class="[`theme-option--${themeOption}`, { 'theme-option--active': activeTheme === themeOption }]"
              type="button"
              :aria-label="t(`theme.${themeOption}`)"
              :aria-pressed="activeTheme === themeOption"
              :title="t(`theme.${themeOption}`)"
              @click="setTheme(themeOption)"
            ></button>
          </div>
          <span class="theme-caption">{{ t(`theme.${activeTheme}`) }}</span>
        </div>

        <button class="locale-toggle" type="button" :aria-label="t('nav.language')" @click="toggleLocale">
          {{ locale === 'en' ? 'العربية' : 'English' }} <span aria-hidden="true">↗</span>
        </button>

        <div class="sidebar-socials" :aria-label="t('nav.social')">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noreferrer"
            :aria-label="social.label"
          >{{ social.shortLabel }}</a>
        </div>
        <p class="copyright">© {{ new Date().getFullYear() }} Sama<br />{{ t('nav.made') }}</p>
      </div>
    </div>
  </header>
</template>
