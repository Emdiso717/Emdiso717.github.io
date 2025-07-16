<template>
    <section
        class="flex h-screen w-screen flex-col items-center justify-center overflow-hidden rounded-md bg-white dark:bg-black">
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
    </section>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useColorMode } from "@vueuse/core";
import Sparkles from "./sub_componets/Sparkles.vue";
import HyperText from "./sub_componets/HypterText.vue";
useColorMode().value = "light"
const particlesColor = computed(() => (useColorMode().value === "dark" ? "#FFFFFF" : "#000000"));
console.log(particlesColor.value);


</script>

<style></style>