<template>
  <section class="img__section">
    <div class="container">
      <div
        class="img__grid"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <div class="img__item" v-for="item in imgList" :key="item.id">
          <img :src="item.img" :alt="item.desc" />
        </div>
      </div>
      <div class="arrow__wrapp">
        <IconBase name="big_arrow" class="arrow__left" />
        <IconBase name="big_arrow" class="arrow__right" />
      </div>
    </div>
  </section>
</template>
<script setup>
import img1 from "@/assets/images/img_1.png";
import img2 from "@/assets/images/img_2.png";
import img3 from "@/assets/images/img_3.png";
import img4 from "@/assets/images/img_4.png";
import img5 from "@/assets/images/img_5.png";
import IconBase from "@/components/IconBase.vue";

const imgList = [
  { id: 1, img: img1, desc: "img one" },
  { id: 2, img: img3, desc: "img two" },
  { id: 3, img: img2, desc: "img three" },
  { id: 4, img: img4, desc: "img four" },
  { id: 5, img: img5, desc: "img five" },
];
</script>
<style scoped>
.img__section {
  background: #fff;
  padding-top: 120px;
  padding-bottom: 27px;
}
.img__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.img__item {
  overflow: hidden;
  border-radius: 20px;
}
.img__item img {
  width: 100%;
  border-radius: 20px;
  transition: all linear 0.3s;
}
.img__item img:hover {
  transform: scale(1.07);
}
.img__grid .img__item:nth-child(2) {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row: span 2;
}
.img__item:nth-child(2) img {
  height: 100%;
}
.arrow__wrapp {
  margin-top: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 30px;
}

@media screen and (min-width: 300px) and (max-width: 576px) {
  .img__section {
    padding-top: 80px;
    padding-bottom: 27px;
  }
  .img__grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
  .img__grid .img__item:nth-child(2) {
    display: none;
  }
  .img__item img {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    display: block;
    max-height: 250px;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .img__section {
    padding-top: 80px;
    padding-bottom: 27px;
  }
  .img__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .img__grid .img__item:nth-child(2) {
    display: none;
  }
  .img__item img {
    width: 100%;
    max-width: 400px;
    max-height: 200px;
    margin: 0 auto;
    display: block;
  }
}
@media screen and (min-width: 769px) and (max-width: 991px) {
  .img__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
}
</style>
<style>
.arrow__left svg path {
  fill: #5f5f5f;
}
.arrow__left {
  transform: rotate(-180deg);
}
</style>
