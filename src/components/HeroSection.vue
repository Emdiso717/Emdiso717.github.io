<!-- <template>
  <section class="hero" id="about">
    <video class="hero__bg" src="/src/assets/wallpaper.mp4" autoplay loop muted playsinline></video>
    <div class="hero__mask" :style="{ opacity: maskOpacity }"></div>
    <div class="hero__content" :style="{ opacity: contentOpacity }">
      <h1 class="hero__title">你好，我是你的名字</h1>
      <p class="hero__desc">一名前端开发者，热爱技术与设计，追求极致体验。</p>
      <div class="hero__btns">
        <a href="#about-detail" class="hero__btn hero__btn--primary">了解我</a>
        <a href="#contact" class="hero__btn">联系我</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { contentOpacity, maskOpacity, handleScroll} from '../store/scroll'
import { onMounted, onUnmounted } from 'vue'
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.hero {
  position: relative;
  width: 100vw;
  height: 100vh;  
  overflow: hidden;
  display: flex;
}
.hero__bg {
  position: absolute;
  left: 0; top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  filter: brightness(0.85) saturate(1.1) blur(0.5px);
  pointer-events: none;
  user-select: none;
}
.hero__mask {
  position: absolute;
  left: 0; top: 0; width: 100%; height: 100%;
  background: #181c2a;
  pointer-events: none;
  z-index: 2;
  transition: opacity 0.2s;
}
.hero__content {
  position: absolute;
  left: 5vw;
  bottom: 8vh;
  z-index: 3;
  color: #fff;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: rgba(30,34,54,0.32);
  border-radius: 18px;
  padding: 48px 40px 40px 40px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
  backdrop-filter: blur(6px);
  transition: opacity 0.2s;
}
.hero__title {
  font-size: 2.8rem;
  font-weight: 900;
  margin-bottom: 12px;
  letter-spacing: 2px;
  text-shadow: 0 4px 24px #23294644;
}
.hero__desc {
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 8px;
  color: #e0e7ef;
  text-shadow: 0 2px 8px #23294633;
}
.hero__btns {
  display: flex;
  gap: 24px;
}
.hero__btn {
  display: inline-block;
  padding: 12px 32px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  background: rgba(64,158,255,0.18);
  border: 2px solid #fff2;
  box-shadow: 0 2px 12px #409eff22;
  transition: background 0.18s, color 0.18s, box-shadow 0.18s, transform 0.18s;
}
.hero__btn--primary {
  background: #e94f7c;
  color: #fff;
  border: none;
  box-shadow: 0 4px 24px #e94f7c44;
}
.hero__btn:hover {
  background: #409EFF;
  color: #fff;
  transform: translateY(-2px) scale(1.06);
  box-shadow: 0 8px 32px #409eff33;
}
.hero__btn--primary:hover {
  background: #d12c5b;
  color: #fff;
}
@media (max-width: 900px) {
  .hero__content {
    left: 4vw;
    right: 4vw;
    padding: 32px 16px 24px 16px;
    max-width: 90vw;
    gap: 18px;
  }
  .hero__title {
    font-size: 2rem;
  }
}
@media (max-width: 600px) {
  .hero {
    min-height: 400px;
    height: 80vh;
  }
  .hero__content {
    left: 2vw;
    right: 2vw;
    bottom: 4vh;
    padding: 18px 8px 12px 8px;
    border-radius: 10px;
    gap: 10px;
    max-width: 96vw;
  }
  .hero__title {
    font-size: 1.2rem;
  }
  .hero__desc {
    font-size: 0.95rem;
  }
  .hero__btn {
    padding: 8px 16px;
    font-size: 0.95rem;
  }
}
</style>  -->



<template>
    <div
      class="flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-white dark:bg-black"
    >
      <h1
        class="relative z-20 text-center text-3xl font-bold text-black lg:text-9xl md:text-7xl dark:text-white"
      >
        Inspira UI
      </h1>
      <div class="relative h-40 w-[40rem]">
        <div
          class="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
        />
        <div
          class="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
        />
        <div
          class="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm"
        />
        <div
          class="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent"
        />
  
        <Sparkles
          background="transparent"
          :min-size="0.4"
          :max-size="1.4"
          :particle-density="1200"
          class="size-full"
          :particle-color="particlesColor"
        />
  
        <div
          class="absolute inset-0 size-full bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)] dark:bg-black"
        ></div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import { computed } from "vue";
  import { useColorMode } from "@vueuse/core";
  import Sparkles from "./Sparkles.vue";
  
  const particlesColor = computed(() => (useColorMode().value === "dark" ? "#FFFFFF" : "#000000"));
  </script>

<style scoped>

</style>