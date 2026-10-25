<script setup lang="ts">
defineProps<{
  number: string
  label: string
}>()
</script>

<template>
  <div class="section-kicker">
    <span>{{ number }}</span>
    <span class="kicker-line"></span>
    <span>{{ label }}</span>
  </div>
</template>
