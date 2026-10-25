<script setup lang="ts">
defineProps<{
  to?: string
  href?: string
}>()
</script>

<template>
  <RouterLink v-if="to" class="text-link" :to="to">
    <slot /><span aria-hidden="true">↗</span>
  </RouterLink>
  <a v-else class="text-link" :href="href">
    <slot /><span aria-hidden="true">↗</span>
  </a>
</template>
