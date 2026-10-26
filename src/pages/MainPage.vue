<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import EyebrowLabel from '../components/EyebrowLabel.vue'
import SectionKicker from '../components/SectionKicker.vue'
import TextLink from '../components/TextLink.vue'
import { usePortfolioContent } from '../composables/usePortfolioContent'

const { homeHighlights, socialLinks } = usePortfolioContent()
const { t } = useI18n()
</script>

<template>
  <section class="page page--home">
    <div class="hero-layout">
      <div class="hero-copy">
        <EyebrowLabel :label="t('home.eyebrow')" />
        <h1>{{ t('home.titleStart') }}<br />{{ t('home.titleMiddle') }} <span class="serif-accent">{{ t('home.titleAccent') }}</span><br />{{ t('home.titleEnd') }}</h1>
        <p class="hero-intro">{{ t('home.intro') }}</p>
        <div class="hero-actions">
          <v-btn class="button-primary" color="primary" rounded="pill" size="large" to="/work" append-icon="mdi-arrow-top-right">{{ t('home.journeyButton') }}</v-btn>
          <TextLink href="mailto:simsimq05@gmail.com">{{ t('home.contactButton') }}</TextLink>
        </div>
        <div class="hero-note"><span>01</span><span class="note-line"></span><span>{{ t('home.scrollNote') }}</span></div>
      </div>

      <div class="hero-art">
        <div class="hero-image-frame">
          <img
            class="hero-image"
            src="/public/images/main-page.jpeg"
            :alt="t('home.portraitAlt')"
          />
        </div>
        <div class="hero-sticker"><span>{{ t('home.sticker') }}</span><span class="sticker-star">✳</span></div>
        <div class="hero-caption"><span class="caption-dot"></span> {{ t('home.portraitCaption') }}</div>
      </div>

      <div class="hero-index" aria-hidden="true">{{ t('home.index') }}</div>
    </div>

    <section class="home-intro section-block">
      <SectionKicker number="01" :label="t('home.noteKicker')" />
      <div class="intro-columns">
        <h2>{{ t('home.noteTitleStart') }}<br /><span class="serif-accent">{{ t('home.noteTitleAccent') }}</span><br />{{ t('home.noteTitleEnd') }}</h2>
        <div class="intro-body">
          <p>{{ t('home.noteBodyOne') }}</p>
          <p>{{ t('home.noteBodyTwo') }}</p>
          <TextLink to="/who-am-i">{{ t('home.aboutLink') }}</TextLink>
        </div>
      </div>
    </section>

    <section class="home-highlights section-block">
      <div class="section-heading-row">
        <div>
          <SectionKicker number="02" :label="t('home.highlightsKicker')" />
          <h2>{{ t('home.highlightsTitleStart') }}<br /><span class="serif-accent">{{ t('home.highlightsTitleAccent') }}</span></h2>
        </div>
        <TextLink class="desktop-link" to="/work">{{ t('home.timelineLink') }}</TextLink>
      </div>
      <div class="highlights-grid">
        <article v-for="highlight in homeHighlights" :key="highlight.label" class="highlight-card">
          <span class="highlight-label">{{ highlight.label }}</span>
          <h3>{{ highlight.value }}</h3>
          <p>{{ highlight.detail }}</p>
        </article>
      </div>
      <TextLink class="mobile-link" to="/work">{{ t('home.highlightsMobileLink') }}</TextLink>
    </section>

    <section class="home-contact section-block">
      <SectionKicker number="03" :label="t('home.contactKicker')" />
      <div class="contact-card">
        <div><EyebrowLabel :label="t('home.contactEyebrow')" /><h2>{{ t('home.contactTitleStart') }}<br /><span class="serif-accent">{{ t('home.contactTitleAccent') }}</span></h2></div>
        <a class="contact-arrow" href="mailto:simsimq05@gmail.com" :aria-label="t('home.emailLabel')">↗</a>
        <p class="contact-email">{{ t('home.email') }}</p>
      </div>
      <div class="home-socials"><span>{{ t('home.social') }}</span><a v-for="social in socialLinks" :key="social.label" :href="social.href" target="_blank" rel="noreferrer">{{ social.label }} ↗</a></div>
    </section>
  </section>
</template>
