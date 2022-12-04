<template>
  <section class="news__page">
    <div class="container">
      <h2 class="news__title">Yangiliklar</h2>
      <h3>{{}}</h3>

      <div class="news__slug">
        <div>
          <img :src="img" alt="img" />
          <span>NOYABR 17 . 2022</span>
        </div>
        <p>
          17-noyabr kuni TShIUda “Xalqaro talabalar kuni” munosabati bilan
          Elektron hukumat loyihalarini boshqarish markazining talabalar bilan
          ucharshuvi bo’lib o’tdi.Dastur davomida talabalar Yagona
          identifikatsiya tizimi OneIDda ro’yxatdan o’tish tartibi, My.gov.uz da
          joriy etilgan xizmatlar bilan tanishtirildi. Shuningdek, Elektron
          hukumatning idoralararo integratsiya platformasi, ma’lumotlar bazasi
          bitta xizmat misolida tahlil qilindi. Uchrashuv so’ngida esa,
          talabalar bilan savol-javoblar o’tkazilib, ularga sovg’alar ulashildi.
        </p>
      </div>
      <a href="#" class="section__btn">
        <span>Ro‘yxatdan o‘tish </span>
        <span> <IconBase name="small_arrow" /></span>
      </a>
      <h2 class="news__info">Davomi ...</h2>
      <div class="news__grid">
        <NewsCard
          v-for="item in newsData"
          :key="item.id"
          :news__img="item.img"
          :news__title="item.title"
          :news__create="item.date"
          @click="fetch"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
import img from "@/assets/images/img_3.png";
import newsData from "@/fake-data/news.js";
import NewsCard from "@/components/cards/NewsCard.vue";
import IconBase from "@/components/IconBase.vue";
import { reactive } from "vue";
const fetch = () => {
  alert("Hi");
};
</script>
<style scoped>
.news__page {
  padding-top: 7.3rem;
  width: 100%;
  background: #fff;
  padding-bottom: 8rem;
}
.news__title {
  font-weight: 700;
  font-size: 4rem;
  line-height: 140%;
  color: #000000;
  position: relative;
  width: max-content;
  margin-bottom: 5rem;
}
.news__title::after {
  content: "";
  width: 100%;
  height: 2px;
  background: #fece02;
  position: absolute;
  bottom: -4px;
  left: 0;
  display: block;
}
.news__slug {
  display: flex;
  gap: 30px;
}
.news__slug img {
  max-width: 481px;
  max-height: 466px;
  min-width: 480px;
  object-fit: fill;
}
.news__slug span {
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 120%;
  color: #3d3a3a;
}
.news__slug p {
  font-weight: 400;
  font-size: 2.8rem;
  line-height: 140%;
  color: #000000;
  position: relative;
}
.news__slug p::before {
  content: "";
  width: 2px;
  height: 95%;
  background: #fece02;
  position: absolute;
  top: 0;
  left: -10px;
}
.section__btn {
  display: flex;
  width: max-content;
  gap: 29px;
  align-items: center;
  background: #fece02;
  border-radius: 10px;
  padding: 26px 19px 26px 30px;
  font-weight: 600;
  font-size: 2rem;
  line-height: 140%;
  color: #222222;
  position: relative;
  overflow: hidden;
  float: right;
  top: -50px;
}
.section__btn::after {
  content: "";
  width: 1px;
  height: 100%;
  position: absolute;
  right: 54px;
  display: block;
  top: 0;
  background: rgba(95, 95, 95, 0.5);
}
.section__btn span:nth-child(2) {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
}
.news__info {
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 5.5rem;
  font-size: 4rem;
  line-height: 140%;
  color: #000000;
}
.news__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 4rem;
  column-gap: 4.5rem;
}
</style>
