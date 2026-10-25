<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <p class="eyebrow"><span class="eyebrow-dot"></span>{{ label }}</p>
</template>
