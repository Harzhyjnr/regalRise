<template>
  <div>
    <Navbar @toggleMenu="handleMenuToggle" />

    <div :class="['main-content', { blurred: isMenuOpen }]">
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "./components/layout-folder/Header.vue";
import Footer from "./components/layout-folder/Footer.vue";

const isMenuOpen = ref(false);

const handleMenuToggle = (state) => {
  isMenuOpen.value = state;
};
</script>

<style lang="scss" scoped>
.main-content {
  transition: filter 0.5s ease-in-out;
}
.blurred {
  filter: blur(6px);
  pointer-events: none; /* so user can’t click through */
}
</style>
