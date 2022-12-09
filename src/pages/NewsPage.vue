<template>
  <section class="news__page">
    <div class="container">
      <h2 class="news__title">Yangiliklar</h2>
      <div>
        <h3 class="slug__title">Xalqaro talabalar kuni</h3>

        <div class="news__slug">
          <div>
            <img :src="img" alt="img" />
            <span>NOYABR 17 . 2022</span>
          </div>
          <p>
            17-noyabr kuni TShIUda “Xalqaro talabalar kuni” munosabati bilan
            Elektron hukumat loyihalarini boshqarish markazining talabalar bilan
            ucharshuvi bo’lib o’tdi.Dastur davomida talabalar Yagona
            identifikatsiya tizimi OneIDda ro’yxatdan o’tish tartibi, My.gov.uz
            da joriy etilgan xizmatlar bilan tanishtirildi. Shuningdek, Elektron
            hukumatning idoralararo integratsiya platformasi, ma’lumotlar bazasi
            bitta xizmat misolida tahlil qilindi. Uchrashuv so’ngida esa,
            talabalar bilan savol-javoblar o’tkazilib, ularga sovg’alar
            ulashildi.
          </p>
        </div>
        <register-btn link="/#registr" class="news__btn" />
      </div>
      <h2 class="news__info">Davomi ...</h2>
      <div class="news__grid">
        <NewsCard
          v-for="item in newsData"
          :key="item.id"
          :news__img="item.img"
          :news__title="item.title"
          :news__create="item.date"
          @click="fetch(item.id)"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
import img from "@/assets/images/news_slug.png";
import newsData from "@/fake-data/news.js";
import NewsCard from "@/components/cards/NewsCard.vue";
import IconBase from "@/components/IconBase.vue";
import newsSlug from "@/fake-data/news-data.js";
import RegisterBtn from "@/components/cards/RegisterBtn.vue";
import { computed, onMounted, reactive, ref } from "vue";

const apiNum = ref(1);
let apiData = reactive([]);

const fetch = (id) => {
  console.log(id);
  apiNum.value = id;
};
onMounted(() => {
  apiData = newsSlug.filter((item) => item.id === apiNum.value);
  console.log(apiData);
});
</script>
<style scoped>
.news__page {
  padding-top: 11rem;
  width: 100%;
  background: #fff;
  padding-bottom: 8rem;
}
.news__title {
  font-weight: 600;
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
  height: 3px;
  border-radius: 3px;
  background: #085078;
  position: absolute;
  bottom: -4px;
  left: 0;
  display: block;
}
.news__slug {
  display: flex;
  gap: 30px;
}
.slug__title {
  font-weight: 600;
  font-size: 3.5rem;
  line-height: 120%;
  color: #000000;
  margin-bottom: 3rem;
}
.news__slug img {
  max-width: 481px;
  max-height: 466px;
  min-width: 480px;
  object-fit: fill;
}
.news__slug span {
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 120%;
  margin-top: 10px;
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
  width: 3px;
  border-radius: 3px;
  height: 95%;
  background: #085078;
  position: absolute;
  top: 0;
  left: -10px;
}

.news__info {
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 5.5rem;
  font-size: 4rem;
  line-height: 140%;
  color: #000000;
  position: relative;
  width: max-content;
}
.news__info::before {
  content: "";
  width: 100%;
  height: 3px;
  border-radius: 3px;
  bottom: -5px;
  left: 0;
  background: #085078;
  position: absolute;
  display: block;
}
.news__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 4rem;
  column-gap: 3.5rem;
}
.news__grid div {
  max-width: 430px;
}
.news__btn {
  float: right;
  top: -50px;
}

@media screen and (min-width: 370px) and (max-width: 576px) {
  .news__page {
    padding-top: 11rem;
    padding-bottom: 6rem;
  }
  .news__title {
    font-size: 2.8rem;
    line-height: 120%;
    margin: 0 auto;
    margin-bottom: 5rem;
  }
  .slug__title {
    font-size: 2.5rem;
    line-height: 120%;
    margin-bottom: 3rem;
  }
  .news__slug {
    gap: 25px;
    flex-direction: column;
  }
  .news__slug img {
    max-width: 350px;
    max-height: 300px;
    min-width: 340px;
  }
  .news__slug span {
    font-size: 1.5rem;
    margin-top: 10px;
    display: block;
  }
  .news__slug p {
    font-size: 1.8rem;
    line-height: 130%;
  }
  .news__btn {
    float: none;
    top: 0;
    margin-top: 10px;
  }
  .news__info {
    font-size: 2.8rem;
    line-height: 130%;
    margin: 5rem auto 3rem;
    display: block;
  }
  .news__grid {
    grid-template-columns: repeat(1, 350px);
    row-gap: 2rem;
    justify-content: center;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .news__page {
    padding-top: 11rem;
    padding-bottom: 6rem;
  }
  .news__title {
    font-size: 3rem;
    line-height: 120%;
    margin: 0 auto;
    margin-bottom: 5rem;
  }
  .slug__title {
    font-size: 2.5rem;
    line-height: 120%;
    margin-bottom: 3rem;
  }
  .news__slug {
    gap: 25px;
    flex-direction: column;
  }
  .news__slug img {
    max-width: 350px;
    max-height: 300px;
    min-width: 340px;
  }
  .news__slug span {
    font-size: 1.5rem;
    margin-top: 10px;
    display: block;
  }
  .news__slug p {
    font-size: 1.8rem;
    line-height: 130%;
  }
  .news__btn {
    float: none;
    top: 0;
    margin-top: 10px;
  }
  .news__info {
    font-size: 3rem;
    line-height: 130%;
    margin: 2rem auto 3rem;
  }
  .news__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    justify-content: center;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .news__page {
    padding-top: 12rem;
    padding-bottom: 7rem;
  }
  .news__title {
    font-size: 3.5rem;
    line-height: 120%;
    margin-bottom: 5rem;
  }
  .slug__title {
    font-size: 2.8rem;
  }
  .news__slug {
    gap: 25px;
    flex-direction: row;
  }
  .news__slug img {
    max-width: 350px;
    max-height: 300px;
    min-width: 340px;
  }
  .news__slug span {
    font-size: 1.3rem;
    margin-top: 10px;
    display: block;
  }
  .news__slug p {
    font-size: 1.8rem;
    line-height: 130%;
  }
  .news__btn {
    float: right;
    top: -50px;
    margin-top: 10px;
    padding: 10px;
  }
  .news__info {
    font-size: 3.5rem;
    line-height: 130%;
    margin: 5rem 0 3rem;
  }
  .news__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }
  .news__grid div {
    min-height: 330px;
  }
}

@media screen and (min-width: 991px) and (max-width: 1100px) {
  .news__page {
    padding-top: 11rem;
    padding-bottom: 8rem;
  }
  .news__title {
    font-size: 4rem;
    margin-bottom: 5rem;
  }
  .slug__title {
    font-size: 3rem;
  }
  .news__slug {
    gap: 25px;
    flex-direction: row;
  }

  .news__slug span {
    font-size: 1.3rem;
    margin-top: 10px;
    display: block;
  }
  .news__slug p {
    font-size: 1.8rem;
    line-height: 130%;
  }
  .news__btn {
    float: right;
    top: -50px;
  }
  .news__info {
    font-size: 3.5rem;
    line-height: 130%;
    margin: 5rem 0 3rem;
  }
  .news__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}
</style>
