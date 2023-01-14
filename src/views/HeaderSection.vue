<template>
  <section class="header__section">
    <span class="header__layer"></span>
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      v-bind="settings"
      :autoplay="false"
      :navigation="{
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      }"
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
            <source :src="video2" type="video/mp4" />
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
    <div class="swiper__btns">
      <button class="swiper-next" aria-label="button">
        <icon-base name="shape1" class="shape" />
        <icon-base name="next_icon" class="arrow__icon" />
      </button>
      <button class="swiper-prev" aria-label="button">
        <icon-base name="shape1" class="prev__shape shape" />
        <icon-base name="prev_icon" class="arrow__icon" />
      </button>
    </div>
  </section>
</template>
<script setup>
import { Navigation, Pagination, Autoplay } from "swiper";
import IconBase from "@/components/IconBase.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import video1 from "@/assets/images/header_1.mp4";
import video2 from "@/assets/images/header_2.mp4";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const modules = [Pagination, Navigation, Autoplay];
const settings = {
  loop: true,
};
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
</script>
<style scoped>
.header__section {
  min-height: 678px;
  max-height: 1000px;
  max-width: 100%;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
}

header video {
  width: 100%;
  height: 100% !important;
  /* max-height: 1000px !important; */
}
.header__title {
  position: absolute !important;
  z-index: 999 !important;
  left: 0;
  top: 185px;
  color: #fff;
  width: 100%;
  height: 300px;
}
.header__title h1 {
  font-weight: 600;
  font-size: 5.4rem;
  line-height: 120%;
  color: #ffffff;
  margin-left: 30px;
  position: relative;
}
.header__title h1::before {
  content: "";
  display: block;
  position: absolute;
  left: -15px;
  width: 4px;
  height: 100%;
  background: var(--second-blue);
}
.swiper__btns {
  display: flex;
  flex-direction: column;
  gap: 0;
  position: absolute;
  transform: translateY(-50%);
  top: 40%;
  z-index: 222;
  right: 10%;
}
.swiper__btns button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  height: max-content;
}
.arrow__icon {
  position: absolute;
  left: 20%;
  top: 20%;
}
.prev__shape {
  transform: rotate(180deg);
}

/* media query */
@media screen and (min-width: 300px) and (max-width: 576px) {
  .header__section {
    min-height: 200px;
  }
  header video {
    width: 100%;
    height: 200% !important;
  }
  .header__title {
    left: 0;
    top: 47%;
    height: 50px;
  }
  .header__title h1::before {
    left: -10px;
    width: 3px;
  }
  .header__title h1 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 120%;
    margin-left: 25px;
  }
  .swiper__btns {
    top: 60%;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .header__section {
    min-height: 330px;
  }
  header video {
    width: 100%;
    height: 200% !important;
  }
  .header__title {
    left: 0;
    top: 120px;
    height: 100px;
  }
  .header__title h1::before {
    left: -10px;
    width: 3px;
  }
  .header__title h1 {
    font-size: 3.4rem;
    font-weight: 600;
    line-height: 120%;
    margin-left: 25px;
  }
  .swiper__btns {
    top: 50%;
  }
}
@media screen and (min-width: 769px) and (max-width: 991px) {
  .header__section {
    min-height: 450px;
  }
  header video {
    width: 100%;
    height: 200% !important;
  }
  .header__title {
    left: 0;
    top: 140px;
    height: 100px;
  }
  .header__title h1::before {
    width: 4px;
  }
  .header__title h1 {
    font-size: 4rem;
  }
}

@media screen and (min-width: 992px) and (max-width: 1100px) {
  .header__section {
    min-height: 550px;
  }
  header video {
    width: 100%;
    height: 100% !important;
  }
  .header__title {
    left: 0;
    top: 160px;
    height: 300px;
  }
  .header__title h1::before {
    width: 4px;
  }
  .header__title h1 {
    font-size: 4rem;
  }
}
@media screen and (min-width: 1101px) and (max-width: 1200px) {
  .header__section {
    min-height: 580px;
  }
}
</style>

<style>
.shape svg {
  transition: all linear 0.4s;
}

.arrow__icon svg path {
  fill: rgb(85, 169, 218);
}
@media screen and (min-width: 300px) and (max-width: 576px) {
  .shape svg {
    width: 24px;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .shape svg {
    width: 28px;
  }
}
@media screen and (min-width: 767px) and (max-width: 991px) {
  .shape svg {
    width: 30px;
  }
}
@media screen and (min-width: 992px) and (max-width: 1100px) {
  .shape svg {
    width: 33px;
  }
}
@media screen and (min-width: 1101px) and (max-width: 1600px) {
  .shape svg {
    width: 38px;
  }
}
</style>
