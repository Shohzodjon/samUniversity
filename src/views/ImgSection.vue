<template>
  <section class="img__section">
    <div class="container">
      <div class="img__grid">
        <div class="img__item" v-for="item in imgList" :key="item.id">
          <img :src="item.img" :alt="item.desc" />
        </div>
      </div>
      <div class="arrow__wrapp">
        <IconBase name="big_arrow" class="arrow__left" />
        <IconBase name="big_arrow" />
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
  grid-row-gap: 7px;
  grid-column-gap: 2px;
}
.img__item img {
  width: 100%;
  border-radius: 20px;
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
</style>
<style>
.arrow__left svg path {
  fill: #5f5f5f;
}
.arrow__left {
  transform: rotate(-180deg);
}
</style>
