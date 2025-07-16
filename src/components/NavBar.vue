<template>
  <nav class="navbar">
    <div class="font-bold flex items-center gap-2">
      <span class="font-bold">The Homepage of</span>
      <span class="dark:text-black" style="font-size: 20px;">
        <TextHighlight class="bg-gradient-to-r from-indigo-100 to-purple-300">
          Ivan Qin
        </TextHighlight>
      </span>
    </div>
    <span class="font-bold text-1xl">🥳 Welcome to My Homepage!! 🤩</span>
    <div class="flex items-center gap-4 black">
      <a href="https://github.com/Emdiso717" target="_blank" class="github-link">
        <img class="black" :src="github" alt="GitHub" width="28" height="28" />
      </a>
      <div @click="toggleTheme" class="theme-toggle" style="cursor:pointer;">
        <img :src="themeIcon" alt="toggle theme" width="28" height="28" />
      </div>
    </div>
  </nav>
</template>

<script setup>
import TextHighlight from './sub_componets/TextHightLigth.vue'
import { useColorMode } from "@vueuse/core";
import { computed } from "vue";

const colorMode = useColorMode()
function toggleTheme() {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
}

const themeIcon = computed(() =>
  colorMode.value === 'dark'
    ? new URL('../assets/ci--moon.svg', import.meta.url).href
    : new URL('../assets/ci-sun.svg', import.meta.url).href
)
const github = computed(() =>
  colorMode.value === 'dark'
    ? new URL('../assets/ci--github.svg', import.meta.url).href
    : new URL('../assets/ci--github-2.svg', import.meta.url).href
)
</script>

<style scoped>
.navbar {
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  /* 三块内容均匀分布 */
  align-items: center;
  padding: 0 32px;
  height: 64px;
  box-shadow: none;
  transition: background 0.25s, backdrop-filter 0.25s;
  overflow: hidden;
}
</style>
