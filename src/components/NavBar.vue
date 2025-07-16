<template>
  <nav class="navbar" :style="{ background: `rgba(24,28,42,${navBarBgOpacity})`, backdropFilter: navBarBgOpacity > 0 ? 'blur(8px)' : 'none' }">
    <div class="navbar__logo">Ivan Qin's Homepage</div>
  </nav>
</template>

<script setup>
import { navBarBgOpacity } from '../store/scroll'
</script>

<style scoped>
.navbar {
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 32px;
  height: 64px;
  box-shadow: none;
  transition: background 0.25s, backdrop-filter 0.25s;
}
.navbar__logo {
  font-family: "Permanent Marker", cursive;
  font-weight: 800;
  font-size: 1.8rem;
  color: #776ae9;
  letter-spacing: 2px;
  text-shadow: 0 2px 8px rgba(30,34,54,0.18);
}
@media (max-width: 700px) {
  .navbar {
    flex-direction: column;
    height: auto;
    padding: 0 8px;
  }
  .navbar__logo {
    font-size: 1.1rem;
    margin: 8px 0 0 0;
  }
}
</style> 