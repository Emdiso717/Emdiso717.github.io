<script setup>
import NavBar from './components/NavBar.vue'
import Homepage from './components/Homepage.vue'
import AboutSection from './components/AboutSection.vue'
import Blog from './components/blog.vue';
import FluidCursor from './components/sub_componets/Fluidcursor.vue';
</script>

<template>
  <div class="h-screen overflow-y-scroll snap-y snap-mandatory">
    <FluidCursor splatRadius="0.1" velocityDissipation="4" densityDissipation="5" />
    <NavBar />
    <Homepage />
    <AboutSection />
    <Blog />
  </div>
</template>

<style scoped>
/* 可根据需要自定义全局样式 */
</style>
