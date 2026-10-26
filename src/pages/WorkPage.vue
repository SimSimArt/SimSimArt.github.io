<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import EyebrowLabel from '../components/EyebrowLabel.vue'
import PageHeading from '../components/PageHeading.vue'
import SectionKicker from '../components/SectionKicker.vue'
import TextLink from '../components/TextLink.vue'
import ToolLogo from '../components/ToolLogo.vue'
import { usePortfolioContent } from '../composables/usePortfolioContent'

const { creativeTools, journey, skillGroups } = usePortfolioContent()
const { t } = useI18n()
const certificateImageMissing = ref(false)
const certificateImageSrc = `${import.meta.env.BASE_URL}images/makers-of-baghdad-certificate.jpg`
const adVideoSrc = `${import.meta.env.BASE_URL}videos/sama-burger.mp4`
const toolsById = computed(() => new Map(creativeTools.value.map((tool) => [tool.id, tool])))

const timelineEntries = computed(() => journey.value.map((entry) => ({
  ...entry,
  tools: entry.toolIds.map((id) => toolsById.value.get(id)).filter((tool) => tool !== undefined),
})))

const skillSections = computed(() => skillGroups.value.map((group) => ({
  ...group,
  tools: group.toolIds.map((id) => toolsById.value.get(id)).filter((tool) => tool !== undefined),
})))
</script>

<template>
  <section class="page page--inner page--work">
    <PageHeading
      :eyebrow="t('work.eyebrow')"
      :description="t('work.description')"
    >
      {{ t('work.titleStart') }} <span class="serif-accent">{{ t('work.titleAccent') }}</span>
    </PageHeading>

    <section class="journey-section">
      <SectionKicker number="01" :label="t('work.timelineKicker')" />
      <div class="section-heading-row timeline-heading">
        <h2>{{ t('work.timelineTitleStart') }}<br /><span class="serif-accent">{{ t('work.timelineTitleAccent') }}</span></h2>
        <p>{{ t('work.timelineIntro') }}</p>
      </div>

      <div class="journey-timeline">
        <article v-for="(entry, index) in timelineEntries" :key="entry.id" class="journey-entry">
          <span class="journey-marker" aria-hidden="true">0{{ index + 1 }}</span>
          <div class="journey-period">{{ entry.period }}</div>
          <div class="journey-content">
            <h3>{{ entry.title }}</h3>
            <p>{{ entry.description }}</p>
            <div v-if="entry.tools.length" class="journey-tools" :aria-label="`${t('work.toolsLabel')}: ${entry.tools.map((tool) => tool.name).join(', ')}`">
              <div v-for="tool in entry.tools" :key="tool.id" class="journey-tool" :title="tool.name">
                <ToolLogo :tool="tool" />
                <span>{{ tool.name }}</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="skills-section section-block">
      <SectionKicker number="02" :label="t('work.skillsKicker')" />
      <div class="section-heading-row skills-heading">
        <h2>{{ t('work.skillsTitleStart') }}<br /><span class="serif-accent">{{ t('work.skillsTitleAccent') }}</span><br />{{ t('work.skillsTitleEnd') }}</h2>
        <p>{{ t('work.skillsIntro') }}</p>
      </div>

      <div class="skill-groups-grid">
        <article v-for="group in skillSections" :key="group.id" class="skill-group-card">
          <p class="skill-group-kicker">{{ group.title }}</p>
          <p class="skill-group-description">{{ group.description }}</p>
          <div v-if="group.tools.length" class="skill-tool-list">
            <div v-for="tool in group.tools" :key="tool.id" class="skill-tool">
              <ToolLogo :tool="tool" />
              <span>{{ tool.name }}</span>
            </div>
          </div>
          <div v-if="group.practices.length" class="practice-tags">
            <span v-for="practice in group.practices" :key="practice">{{ practice }}</span>
          </div>
        </article>
      </div>
      <p class="office-note">{{ t('work.officeNote') }}</p>
    </section>

    <section class="video-highlights section-block">
      <SectionKicker number="03" :label="t('work.videoKicker')" />
      <div class="video-feature-grid">
        <article class="video-feature-card">
          <EyebrowLabel :label="t('work.educationKicker')" />
          <h2>{{ t('work.educationTitle') }}</h2>
          <p>{{ t('work.educationDescription') }}</p>
          <div class="instagram-embed">
            <iframe
              src="https://www.instagram.com/p/Dc1n5CfNT0U/embed/"
              :title="t('work.instagramLabel')"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <a class="text-link" href="https://www.instagram.com/p/Dc1n5CfNT0U/" target="_blank" rel="noreferrer">
            {{ t('work.instagramLabel') }} <span aria-hidden="true">↗</span>
          </a>
        </article>

        <article class="video-feature-card">
          <EyebrowLabel :label="t('work.adKicker')" />
          <h2>{{ t('work.adTitle') }}</h2>
          <p>{{ t('work.adDescription') }}</p>
          <div class="instagram-embed">
            <video
              :src="adVideoSrc"
              :aria-label="t('work.adInstagramLabel')"
              controls
              preload="metadata"
              playsinline
            ></video>
          </div>
        </article>
      </div>
    </section>

    <section class="certificate-section section-block">
      <SectionKicker number="04" :label="t('work.certificateKicker')" />
      <div class="certificate-layout">
        <figure class="certificate-photo">
          <img
            v-if="!certificateImageMissing"
            :src="certificateImageSrc"
            :alt="t('work.certificateAlt')"
            loading="lazy"
            @error="certificateImageMissing = true"
          />
          <div v-else class="certificate-placeholder">
            <span class="certificate-placeholder-mark">MB</span>
            <p>{{ t('work.certificateImagePlaceholder') }}</p>
          </div>
          <figcaption>Makers of Baghdad · Make Your Passion</figcaption>
        </figure>
        <div class="certificate-copy">
          <EyebrowLabel :label="t('work.certificateKicker')" />
          <h2>{{ t('work.certificateTitle') }}</h2>
          <p>{{ t('work.certificateDescription') }}</p>
        </div>
      </div>
    </section>

    <section class="work-cta">
      <EyebrowLabel :label="t('work.contactEyebrow')" />
      <h2>{{ t('work.contactTitleStart') }}<br /><span class="serif-accent">{{ t('work.contactTitleAccent') }}</span></h2>
      <TextLink href="mailto:simsimq05@gmail.com">{{ t('work.contactLink') }}</TextLink>
    </section>
  </section>
</template>
