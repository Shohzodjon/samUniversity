<template>
  <section>
    <Navbar />
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
    <Footer />
  </section>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from "@/views/Footer.vue";
import Navbar from "@/views/Navbar.vue";
</script>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0.2;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}
</style>
