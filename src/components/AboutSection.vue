<template>
  <section class="relative snap-start flex h-screen w-screen flex-col overflow-hidden rounded-md" id="about-detail">
    <div class="absolute left-0 top-0 w-full h-full z-0">
      <Sparkles background="transparent" :min-size="0.8" :max-size="2" :particle-density="1800" class="w-full h-full"
        speed="2" :particle-color="particlesColor" />
    </div>
    <div class="relative flex h-[60%] w-[50%] flex-col mt-[10%] ml-[10%] z-10">
      <CardSpotLight
        class="w-full h-full flex flex-col justify-between items-center gap-4 p-8 rounded-2xl bg-white/80 dark:bg-[#232946]/80 shadow-2xl"
        :gradient-color="isDark ? '#363636' : '#C9C9C9'">
        <!-- 头像 -->
        <img src="../assets/Q.png" alt="头像"
          class="w-24 h-24 rounded-full object-cover border-4 border-indigo-200 shadow-lg mb-2" />
        <!-- 名字 -->
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Ivan Qin</h2>
        <!-- 简介 -->
        <p class="text-center text-gray-600 dark:text-gray-300 text-base mb-2">
          前端开发者，热爱技术与设计，追求极致体验。喜欢开源、分享和团队协作。
        </p>
        <!-- 联系方式，放在最后 -->
        <div class="flex gap-6 justify-center w-full mt-50">
          <a href="mailto:qinjizhou717@gmail.com" class="transition mt-1">
            <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"
              class="text-black dark:text-white">
              <rect x="2" y="4" width="20" height="16" rx="4" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
          <a href="https://github.com/Emdiso717" target="_blank" class="transition">
            <img :src="githubIcon" alt="GitHub" width="32" height="32" class="transition" />
          </a>
        </div>
      </CardSpotLight>
    </div>
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
import { computed } from "vue";
import { useColorMode } from "@vueuse/core";

const particlesColor = computed(() => (useColorMode().value === "dark" ? "#FFFFFF" : "#000000"));
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

<style scoped></style>