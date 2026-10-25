<script setup lang="ts">
import EyebrowLabel from './EyebrowLabel.vue'

defineProps<{
  eyebrow: string
  description: string
}>()
</script>

<template>
  <div class="inner-page-heading">
    <EyebrowLabel :label="eyebrow" />
    <h1><slot /></h1>
    <p class="page-lede">{{ description }}</p>
  </div>
</template>
