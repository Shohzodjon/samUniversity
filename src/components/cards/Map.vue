<template>
  <section class="max-w-[1350px] mx-auto h-[800px]">
    <div style="position: relative; overflow: hidden">
      <yandex-map
        style="height: 800px; width: 100%"
        :coords="coords"
        :scroll-zoom="false"
        :zoom="16"
        :clickable="true"
      >
        <ymap-marker />
      </yandex-map>
      <div class="absolute left-[5%] top-[10%]">
        <div></div>

        <div class="bg-[#fff] rounded-lg mt-2">
          <div
            class="max-w-[300px] bg-[#fff] md:hidden lg:hidden rounded-lg wrapp m-1 max-h-[300px]"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
//  v-for="(item, i) in details"
//       :marker-id="i"
//       :coords="item.lang"
//       :icon="item.markerIcon"
import { yandexMap, ymapMarker } from "vue-yandex-maps";
const coords = [41.31359, 69.283732];
const details = [
  {
    lang: [41.31309, 69.278347],
    markerIcon: {
      layout: "default#imageWithContent",
      imageHref:
        "https://img.icons8.com/ios-glyphs/60/21D5CF/tesla-supercharger-pin.png",
      imageSize: [60, 60],
    },
    name: "A5478",
  },
  {
    lang: [41.31428, 69.284004],
    markerIcon: {
      layout: "default#imageWithContent",
      imageHref:
        "https://img.icons8.com/ios-glyphs/60/21D5CF/tesla-supercharger-pin.png",
      imageSize: [60, 60],
    },
    name: "B5480",
  },
  {
    lang: [41.316456, 69.27797],
    markerIcon: {
      layout: "default#imageWithContent",
      imageHref:
        "https://img.icons8.com/ios-glyphs/60/21D5CF/tesla-supercharger-pin.png",
      imageSize: [60, 60],
    },
    name: "C5478",
  },
];
</script>
<style>
.ymaps-2-1-79-float-button {
  display: none !important;
}
.ymaps-2-1-79-gotoymaps__container {
  display: none !important;
}
.ymaps-2-1-79-map-copyrights-promo {
  display: none !important;
}
.ymaps-2-1-79-listbox__button {
  display: none !important;
}
.ymaps-2-1-79-searchbox__normal-layout {
  display: none !important;
}
.ymaps-2-1-79-zoom {
  display: none !important;
}
</style>
