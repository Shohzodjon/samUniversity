<template>
  <section class="img__section">
    <div class="container">
      <div class="img__grid">
        <div class="img__item" v-for="item in imgList" :key="item.id">
          <img :src="item.img" :alt="item.desc" />
        </div>
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

const imgList = [
  { id: 1, img: img1, desc: "img one" },
  { id: 2, img: img2, desc: "img two" },
  { id: 3, img: img3, desc: "img three" },
  { id: 4, img: img4, desc: "img four" },
  { id: 5, img: img5, desc: "img five" },
];
</script>
