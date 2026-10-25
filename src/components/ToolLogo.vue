<script setup lang="ts">
import type { CreativeTool } from '../types/portfolio'

defineProps<{ tool: CreativeTool }>()
</script>

<template>
  <span class="tool-logo" :class="[`tool-logo--${tool.logoKind}`, `tool-logo--${tool.id}`]" aria-hidden="true">
    <span v-if="tool.logoKind === 'figma'" class="figma-mark">
      <i></i><i></i><i></i><i></i><i></i>
    </span>
    <span v-else-if="tool.logoKind === 'office'" class="office-mark">
      <i></i><i></i><i></i><i></i><b>O</b>
    </span>
    <span v-else-if="tool.logoKind === 'davinci'" class="davinci-mark"><i></i><i></i><i></i></span>
    <span v-else>{{ tool.mark }}</span>
  </span>
</template>
