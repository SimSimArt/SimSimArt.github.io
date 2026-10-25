<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageHeading from '../components/PageHeading.vue'
import SectionKicker from '../components/SectionKicker.vue'
import TextLink from '../components/TextLink.vue'
import { usePortfolioContent } from '../composables/usePortfolioContent'

const { creativePractices } = usePortfolioContent()
const { t } = useI18n()
</script>

<template>
  <section class="page page--inner">
    <PageHeading
      :eyebrow="t('about.eyebrow')"
      :description="t('about.description')"
    >
      {{ t('about.titleStart') }} <span class="serif-accent">{{ t('about.titleAccent') }}</span>
    </PageHeading>

    <div class="about-intro-grid">
      <div class="about-photo-wrap">
        <img src="/public/images/sama2.jpg" :alt="t('about.portraitAlt')" />
        <span class="about-sparkle" aria-hidden="true">✳</span>
      </div>
      <div class="about-story">
        <p class="large-copy">{{ t('about.introTitle') }}</p>
        <p>{{ t('about.storyOne') }}</p>
        <p>{{ t('about.storyTwo') }}</p>
        <TextLink to="/work">{{ t('about.workLink') }}</TextLink>
      </div>
    </div>

    <section class="about-practices section-block">
      <SectionKicker number="01" :label="t('about.practicesKicker')" />
      <div class="section-heading-row about-practices-heading">
        <h2>{{ t('about.practicesTitleStart') }}<br /><span class="serif-accent">{{ t('about.practicesTitleAccent') }}</span></h2>
        <p>{{ t('about.practicesIntro') }}</p>
      </div>
      <div class="practices-grid">
        <article v-for="practice in creativePractices" :key="practice.mark" class="practice-card">
          <span class="skill-number">{{ practice.mark }}</span>
          <h3>{{ practice.title }}</h3>
          <p>{{ practice.description }}</p>
        </article>
      </div>
    </section>

    <div class="page-end-link">
      <span>{{ t('about.closing') }}</span>
      <TextLink to="/work">{{ t('about.closingLink') }}</TextLink>
    </div>
  </section>
</template>
