<template>
  <div v-if="appearanceStore.modeId === 'easter'" class="easter-decor" aria-hidden="true">
    <div class="easter-glow easter-glow--left"></div>
    <div class="easter-glow easter-glow--right"></div>
  </div>
</template>

<script setup lang="ts">
import { useAppearanceStore } from 'src/appearance/store'

const appearanceStore = useAppearanceStore()
</script>

<style scoped>
.easter-decor {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.easter-glow {
  position: absolute;
  width: 38vw;
  height: 38vw;
  border-radius: 999px;
  filter: blur(14px);
  opacity: 0.55;
}

.easter-glow--left {
  left: -10vw;
  top: -8vw;
  background: radial-gradient(circle, rgba(244, 211, 94, 0.48) 0%, rgba(244, 211, 94, 0) 70%);
}

.easter-glow--right {
  right: -12vw;
  bottom: -10vw;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.32) 0%, rgba(236, 72, 153, 0) 72%);
}
</style>
