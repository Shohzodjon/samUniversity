<template>
  <section class="app">
    <Navbar />
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
    <div class="loader_page" :style="[isLoading ? 'display:block' : '']">
      <p>Loading ...</p>
    </div>
    <Footer />
  </section>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from "@/views/Footer.vue";
import Navbar from "@/views/Navbar.vue";
import Loader from "@/pages/Loader.vue";
import { useRoute } from "vue-router";
import { watch } from "vue";
import { ref } from "vue";
const route = useRoute();
const isLoading = ref(false);

// watchEffect(() => (isLoading.value = true), console.log(route.path));
watch(route.path, (value) => {
  isLoading.value = true;
  console.log(isLoading);
  console.log(route.path);

  setTimeout(() => {
    isLoading.value = false;
  }, 5000);
});
</script>
<style scoped>
.loader_page {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99999 !important;
  font-size: 30px;
  color: #fff;
  display: none;
}
</style>

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
