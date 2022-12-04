<template>
  <section class="header__section">
    <span class="header__layer"></span>
    <swiper
      :modules="(Navigation, Pagination, Scrollbar, A11y)"
      :slides-per-view="1"
      :space-between="50"
      navigation
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :pagination="{ clickable: true }"
    >
      <swiper-slide>
        <header>
          <video id="video" autoplay muted loop>
            <source :src="video1" type="video/mp4" />
          </video>
          <div class="header__title">
            <div class="container">
              <div>
                <span class="header__line"></span>
                <h1>
                  Jasorat bilan o'rganing. <br />
                  Ilhom berish uchun yashang. <br />
                  Faqat ilmiy daraja emas, <br />
                  balki manfaat oling.
                </h1>
              </div>
            </div>
          </div>
        </header>
      </swiper-slide>
      <swiper-slide>
        <header>
          <video id="video" autoplay muted loop>
            <source :src="video1" type="video/mp4" />
          </video>
          <div class="header__title">
            <div class="container">
              <div>
                <span class="header__line"></span>
                <h1>
                  Jasorat bilan o'rganing. <br />
                  Ilhom berish uchun yashang. <br />
                  Faqat ilmiy daraja emas, <br />
                  balki manfaat oling.
                </h1>
              </div>
            </div>
          </div>
        </header>
      </swiper-slide>
    </swiper>
  </section>
</template>
<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import video1 from "@/assets/images/header_1.mp4";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
</script>
<style scoped>
.header__section {
  max-width: 1600px;
  min-height: 678px;
  position: relative;
  margin: 0 auto;
}
.header__layer {
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  z-index: 1;
  opacity: 0.4;
}

header video {
  width: 100%;
  height: 100%;
}
.header__title {
  position: absolute !important;
  z-index: 999 !important;
  left: 12.5%;
  top: 185px;
  color: #fff;
  width: 100%;
  height: 300px;
}
</style>
