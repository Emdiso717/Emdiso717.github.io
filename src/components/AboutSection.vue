<template>
  <section class="relative snap-start flex h-screen w-screen flex-col overflow-hidden rounded-md" id="about-detail">
    <div class="absolute left-0 top-0 w-full h-full z-0">
      <Sparkles background="transparent" :min-size="0.8" :max-size="2" :particle-density="1800" class="w-full h-full"
        speed="2" :particle-color="particlesColor" />
    </div>
    <div class="relative flex flex-row items-center gap-8 h-[20%] w-[100%] mt-[10%] ml-[10%] z-10">
      <CardSpotLight class="w-[30%] h-full p-8 rounded-2xl bg-white/80 shadow-2xl"
        :gradient-color="isDark ? '#363636' : '#C9C9C9'">
        <div class="flex flex-row items-center gap-4 w-full h-full">
          <img src="../assets/Q.png" alt="头像"
            class="w-28 h-28 rounded-full object-cover border-4 border-indigo-200 shadow-lg" />
          <h2 class="text-5xl ml-[30px] font-bold text-gray-900 dark:text-white">Ivan Qin</h2>
        </div>
      </CardSpotLight>
      <div class="grid place-content-center p-10 ml-[20%] h-full">
        <a href="/notebook">
          <Book size="sm" :whitecolor=BookColor shadowSize="md" class="cursor-pointer transition hover:scale-105">
            <BookHeader class="mb-[40%]">
              <p class="custom-title">Q-Note</p>
            </BookHeader>
            <BookTitle>
              <h1 class="text-black dark:text-white">Note Book</h1>
            </BookTitle>
            <BookDescription>
              <p class="text-black dark:text-white">Click to view</p>
            </BookDescription>
          </Book>
        </a>
      </div>
    </div>
    <div class="relative flex h-[28%] w-[40%] mt-[2%] ml-[10%] z-10 items-center justify-center">
      <CardSpotLight class="w-full h-full flex flex-col justify-center p-3 rounded-2xl bg-white/80  shadow-2xl"
        :gradient-color="isDark ? '#363636' : '#C9C9C9'">
        <p
          class="text-center font-bold text-gray-900 dark:text-gray-300 text-base mt-2 mb-2 leading-relaxed whitespace-pre-line">
          From Urumqi, currently studying software engineering at ZJU.<br />
          Will graduate in 2026 and continue to pursue a master's degree in ZJU CAD&CG Lab.<br />
        </p>
        <div
          class="absolute inset-x-0  h-[2px] w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
        <div class="absolute inset-x-0  h-px w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div
          class="absolute left-1/4 right-1/4  h-[5px] w-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
        <div
          class="absolute left-1/4 right-1/4  h-px w-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
        <p
          class="text-center font-bold text-gray-900 dark:text-gray-300 text-base mb-2 leading-relaxed whitespace-pre-line">
          <br />以一颗好奇之心注视这个世界，也在寻找自我！<br />心怀憧憬，希望能做出成绩！
        </p>
      </CardSpotLight>
    </div>
    <Dock class="flex gap-3 justify-center bg-white/80 dark:bg-neutral-900 shadow-2xl">
      <DockIcon class="mt-2">
        <a href="mailto:qinjizhou717@gmail.com" class="transition">
          <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"
            class="text-black dark:text-white">
            <rect x="2" y="4" width="20" height="16" rx="4" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
      </DockIcon>
      <DockIcon>
        <a href="https://github.com/Emdiso717" target="_blank" class="transition">
          <img :src="githubIcon" alt="GitHub" width="32" height="32" class="transition" />
        </a>
      </DockIcon>
    </Dock>
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
      <button @click="scrollToAbout" class="animate-bounce focus:outline-none">
        <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
import Sparkles from './sub_componets/Sparkles.vue';
import CardSpotLight from './sub_componets/CardSpotLight.vue';
import Dock from './sub_componets/Dock.vue';
import DockIcon from './sub_componets/DockIcon.vue';
import { computed } from "vue";
import { useColorMode } from "@vueuse/core";
import Book from "./sub_componets/Book/Book.vue"
import BookHeader from './sub_componets/Book/BookHeader.vue';
import BookTitle from './sub_componets/Book/BookTitle.vue';
import BookDescription from './sub_componets/Book/BookDescription.vue';
const particlesColor = computed(() => (useColorMode().value === "dark" ? "#FFFFFF" : "#000000"));
const BookColor = computed(() => (useColorMode().value === "dark" ? 'neutral' : 'purple'));
const colorMode = useColorMode()
const githubIcon = computed(() =>
  colorMode.value === 'dark'
    ? new URL('../assets/ci--github.svg', import.meta.url).href
    : new URL('../assets/ci--github-2.svg', import.meta.url).href
)
function scrollToAbout() {
  const about = document.getElementById('blog')
  if (about) {
    about.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.custom-title {
  font-family: 'Quotes Script';
  font-size: 2.6rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  color: rgb(244, 76, 168);
}
</style>