<template>
  <section style="height: 300px; display: flex; align-items: center">
    <swiper
      :modules="(Navigation, Pagination, Scrollbar, A11y)"
      :slides-per-view="1"
      :space-between="50"
      navigation
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
    >
      <swiper-slide><div style="height: 200px">eqweqweqwe</div></swiper-slide>
      <swiper-slide><div style="height: 200px">eqweqweqwe</div></swiper-slide>
      <swiper-slide><div style="height: 200px">eqweqweqwe</div></swiper-slide>
      <swiper-slide><div style="height: 200px">eqweqweqwe</div></swiper-slide>
    </swiper>
  </section>
  <button @click="swiper.slideNext()">Slide to the next slide</button>
</template>
<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css/scrollbar";
import { computed } from "@vue/runtime-core";

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
// let modules =[Navigation, Pagination, Scrollbar, A11y],
</script>
