<template>
    <section
        class="relative snap-start flex h-screen w-screen flex-col items-center justify-center rounded-md bg-white dark:bg-black">
        <div class="flex text-4xl font-bold">
            <HyperText text="Hey there !~~~~" :duration="1000" :animate-on-load="true" />
            <span style="margin: 8px 8px">👋</span>
        </div>
        <div class=" flex text-2xl font-bold">
            <HyperText text="Come get to know about" :duration="1000" :animate-on-load="true" />
            <span style="margin: 8px 8px">👇</span>
        </div>
        <div class="flex items-center gap-6">
            <img src="../assets/Q.png" class="rounded-full" style="height: 110px; width: 110px; object-fit: cover;">
            <h1 class="font-bold text-black lg:text-9xl md:text-7xl dark:text-white">
                Ivan Q.
            </h1>
        </div>
        <div class="relative h-50 w-300">
            <div
                class="absolute inset-x-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
            <div
                class="absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            <div
                class="absolute left-1/4 right-1/4 top-0 h-[5px] w-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
            <div
                class="absolute left-1/4 right-1/4 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

            <Sparkles background="transparent" :min-size="0.4" :max-size="2" :particle-density="1900" class="size-full"
                :particle-color="particlesColor" />
            <div
                class="absolute inset-0 size-full bg-white [mask-image:radial-gradient(600px_400px_at_top,transparent_20%,white)] dark:bg-black">
            </div>
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
<script setup lang="ts">
import { computed } from "vue";
import { useColorMode } from "@vueuse/core";
import Sparkles from "./sub_componets/Sparkles.vue";
import HyperText from "./sub_componets/HypterText.vue";
const particlesColor = computed(() => (useColorMode().value === "dark" ? "#FFFFFF" : "#000000"));

function scrollToAbout() {
    const about = document.getElementById('about-detail')
    if (about) {
        about.scrollIntoView({ behavior: 'smooth' })
    }
}

</script>

<style></style>