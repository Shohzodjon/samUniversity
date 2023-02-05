<template>
  <section class="app">
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
import Loader from "@/pages/Loader.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
const route = useRoute();
const isLoading = ref(false);
</script>

<style>
.app {
  width: 100%;
  overflow-x: hidden;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0.2;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}

.active_load {
  display: block;
}
</style>
