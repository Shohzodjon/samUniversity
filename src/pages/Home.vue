<template>
  <section class="">
    <!-- <HeaderSection /> -->
    <AboutSection />
    <section class="news__section">
      <div class="container">
        <h2 class="news__title">Yangiliklar</h2>
        <div class="news__grid">
          <div v-for="news in newsData" :key="news.id">
            <NewsCard
              :news__img="news.img"
              :news__title="news.title"
              :news__create="news.date"
            />
          </div>
        </div>
        <div class="arrow__wrapp">
          <IconBase name="big_arrow" class="arrow__left" />
          <IconBase name="big_arrow" />
        </div>
      </div>
    </section>
    <FaqSection />
    <FacultySection />
    <ImgSection />
  </section>
</template>
<script setup>
import AboutSection from "@/views/AboutSection.vue";
import HeaderSection from "@/views/HeaderSection.vue";
import NewsCard from "@/components/cards/NewsCard.vue";
import newsData from "@/fake-data/news.js";
import IconBase from "@/components/IconBase.vue";
import FacultySection from "@/views/FacultySection.vue";
import ImgSection from "@/views/ImgSection.vue";
import FaqSection from "../views/FaqSection.vue";
</script>
<style scoped>
.news__section {
  background: #fff;
  margin-top: 160px;
  padding-bottom: 80px;
}
.news__title {
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 4rem;
  line-height: 140%;
  color: #000000;
  position: relative;
  width: max-content;
}
.news__title::after {
  content: "";
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -4px;
  background: #fece02;
  height: 2px;
}
.news__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
  column-gap: 45px;
}
.arrow__wrapp {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
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
