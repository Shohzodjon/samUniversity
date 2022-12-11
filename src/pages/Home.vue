<template>
  <section class="home__page">
    <HeaderSection />
    <AboutSection />
    <section class="news__section">
      <div class="container">
        <h2 class="news__title">Yangiliklar</h2>
        <div class="news__grid">
          <div v-for="news in newsData" :key="news.id" class="news__item">
            <NewsCard
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="500"
              :news__img="news.img"
              :news__title="news.title"
              :news__create="news.date"
              news__link="/news"
              class="news__card-home"
            />
          </div>
        </div>
        <div class="arrow__wrapp">
          <IconBase name="big_arrow" class="arrow__left" />
          <IconBase name="big_arrow" class="arrow__right" />
        </div>
      </div>
    </section>
    <FacultySection />
    <ImgSection />
    <ContactSection />
    <FaqSection />
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
import ContactSection from "@/views/ContactSection.vue";
</script>
<style scoped>
.news__section {
  background: #fff;
  margin-top: 160px;
  padding-bottom: 80px;
  overflow: hidden;
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
  background: #085078;
  height: 3px;
  border-radius: 4px;
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
@media screen and (min-width: 300px) and (max-width: 450px) {
  .news__grid {
    grid-template-columns: repeat(1, 250px);
    gap: 1rem;
    justify-content: center;
  }
  .news__item {
    max-width: 280px;
    padding: 3rem 0;
    border: 1px solid red;
    height: 360px !important;
  }
}
@media screen and (min-width: 451px) and (max-width: 576px) {
  .news__grid {
    grid-template-columns: repeat(1, 350px);
    gap: 3rem;
    justify-content: center;
  }
  .news__item {
    max-width: 300px;
    padding: 1rem 0;
    height: 360px !important;
  }
}

@media screen and (min-width: 300px) and (max-width: 576px) {
  .news__section {
    margin-top: 50px;
    padding-bottom: 30px;
  }
  .news__title {
    font-size: 2.8rem;
    line-height: 120%;
    margin: 0 auto;
    margin-bottom: 4rem;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .news__section {
    margin-top: 70px;
    padding-bottom: 40px;
  }
  .news__title {
    font-size: 3rem;
    line-height: 120%;
    margin: 0 auto;
    margin-bottom: 4rem;
  }
  .news__grid {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
    column-gap: 20px;
  }
  .news__card-home {
    min-height: 330px;
  }
}
@media screen and (min-width: 769px) and (max-width: 900px) {
  .news__section {
    margin-top: 70px;
    padding-bottom: 40px;
  }
  .news__title {
    font-size: 3.5rem;
    line-height: 120%;
    margin-bottom: 4rem;
  }
  .news__grid {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
    column-gap: 20px;
  }
}
@media screen and (min-width: 901px) and (max-width: 1024px) {
  .news__section {
    margin-top: 100px;
    padding-bottom: 60px;
  }
  .news__title {
    font-size: 4rem;
    line-height: 120%;
    margin-bottom: 4rem;
  }
  .news__grid {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
    column-gap: 20px;
  }
  .news__card-home {
    min-height: 380px;
  }
}
</style>
<style>
.arrow__left svg path {
  fill: #5f5f5f;
}
.arrow__right svg path {
  fill: #085078;
}
.arrow__left {
  transform: rotate(-180deg);
}
@media screen and (min-width: 370px) and (max-width: 576px) {
  .arrow__wrapp svg {
    width: 30px;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .arrow__wrapp svg {
    width: 40px;
  }
}
</style>
