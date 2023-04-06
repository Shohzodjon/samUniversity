<template>
  <section class="faculty__page">
    <div class="container">
      <h2 class="faculty__title">{{ $t("faculty") }}</h2>
      <div class="faculty__slug">
        <h3 class="slug__title">Boshlang’ich ta’lim</h3>
        <div class="slug__flex">
          <img :src="img" alt="img" />
          <div class="slug__block">
            <p><b> Ta‘lim yo‘nalishi(Mutaxassislik):</b>Boshlang’ich ta’lim</p>
            <p><b> Ixtisoslik(Kvalifikatsiya):</b> Pedagogik ta’lim</p>
            <p><b>O‘qish muddati:</b> 4 yil</p>
            <p>Ta‘lim shakli: kunduzgi</p>
            <p>Fakultet tarkibiga 4 ta kafedra kiradi:</p>
          </div>
        </div>

        <p class="slug__desc">
          Boshlangʻich taʼlim — umumiy oʻrta taʼlimning dastlabki bosqichi.
          OʻzRda Boshlangʻich taʼlim 1—4sinflarda bolalarga ilk taʼlim berish,
          ularni maʼnaviy kamol toptirishning boshlanish davri hisoblanadi. U
          1—4sinflarni oʻz ichiga oladi va oʻqish 6—7 yoshdan boshlanadi. Bunda
          taʼlim mazmunini belgilash muhim ahamiyatga ega. OʻzRning 1997-yil 29
          avgustda qabul qilingan „Taʼlim toʻgʻrisida“gi qonunida Boshlangʻich
          taʼlim umumiy oʻrta taʼlim olish uchun zarur boʻlgan savodxonlik,
          bilim va koʻnikma asoslarini shakllantirishga karatilgan.
        </p>
      </div>
    </div>
    <div class="grid__wrapp">
      <div class="container">
        <!-- <h2 class="faculty__info">{{ $t("go_on") }}</h2> -->
        <div class="slug__grid">
          <faculty-card
            v-for="i in facultyData"
            :key="i.id"
            :icon_name="i.icon"
            :title="i.title"
            class="grid__item"
          />
        </div>
        <div class="last__item"><register-btn link="/contact" /></div>
      </div>
    </div>
  </section>
</template>
<script setup>
import FacultyCard from "@/components/cards/FacultyCard.vue";
import facultyData from "@/fake-data/faculty.js";
import { reactive } from "@vue/reactivity";
import RegisterBtn from "@/components/cards/RegisterBtn.vue";
import img from "@/assets/images/boshlangich.jpg";
</script>
<style scoped>
.faculty__page {
  padding: 13rem 0 1rem;
}

.faculty__title {
  font-weight: 600;
  font-size: 4rem;
  line-height: 140%;
  color: #000000;
  position: relative;
  width: max-content;
  margin-bottom: 5rem;
}
.faculty__title::after {
  content: "";
  width: 100%;
  height: 3px;
  background: var(--second-blue);
  position: absolute;
  bottom: -4px;
  border-radius: 3px;
  left: 0;
  display: block;
}

.slug__title {
  font-weight: 600;
  font-size: 3.2rem;
  line-height: 120%;
  color: #000000;
  margin-bottom: 3rem;
}
.slug__flex {
  display: flex;
  gap: 30px;
}
.slug__flex img {
  max-width: 529px;
  max-height: 405px;
  border-radius: 6px;
}
.slug__block {
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 140%;
  color: #000000;
  position: relative;
}
.slug__block::before {
  content: "";
  width: 3px;
  background: var(--second-blue);
  height: 100%;
  position: absolute;
  left: -15px;
  top: 0;
  display: block;
}
.slug__desc {
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 140%;
  color: #000000;
  margin-top: 20px;
}
.faculty__info {
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 5.5rem;
  font-size: 4rem;
  line-height: 140%;
  color: #000000;
  position: relative;
  width: max-content;
}
.faculty__info::after {
  content: "";
  width: 100%;
  height: 3px;
  border-radius: 3px;
  background: var(--second-blue);
  position: absolute;
  bottom: -4px;
  left: 0;
  display: block;
}
.grid__wrapp {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(../assets/images/faculty.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2rem 1.5rem 3rem;
  max-width: 100%;
  margin: 3rem auto 0;
}
.slug__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  padding-top: 2rem;
}
.grid__item {
  border: 1px solid rgba(95, 95, 95, 0.5);
  cursor: pointer;
  transition: all linear 0.4s;
}
.grid__item:hover {
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
  background: rgba(255, 255, 255, 0.9);
}

.last__item {
  display: flex;
  justify-content: end;
  align-items: flex-end;
  margin-top: 4rem;
  margin-bottom: 1rem;
}
@media screen and (min-width: 300px) and (max-width: 450px) {
  .faculty__page {
    margin-bottom: -10px;
  }
  .slug__grid {
    grid-template-columns: repeat(1, 280px);
    gap: 3rem;
    justify-content: center;
  }
  .grid__item {
    max-width: 300px;
    padding: 3rem 0;
  }
}
@media screen and (min-width: 451px) and (max-width: 576px) {
  .faculty__page {
    margin-bottom: -10px;
  }
  .slug__grid {
    grid-template-columns: repeat(1, 350px);
    gap: 3rem;
    justify-content: center;
  }
  .grid__item {
    max-width: 350px;
    padding: 3rem 0;
  }
}

@media screen and (min-width: 300px) and (max-width: 576px) {
  .faculty__page {
    padding: 11rem 0 1rem;
  }
  .faculty__title {
    font-size: 2.8rem;
    line-height: 140%;
    margin: 0 auto;
    margin-bottom: 5rem;
  }
  .slug__title {
    font-size: 2.5rem;
    line-height: 120%;
    margin-bottom: 3rem;
  }
  .slug__flex {
    flex-direction: column;
    gap: 25px;
  }
  .slug__block::before {
    display: none;
  }
  .slug__block {
    font-size: 1.8rem;
    line-height: 130%;
  }
  .slug__desc {
    font-size: 1.8rem;
    line-height: 130%;
    margin-top: 20px;
  }
  .faculty__info {
    font-size: 2.8rem;
    margin: 2rem auto 5rem;
  }
}

@media screen and (min-width: 577px) and (max-width: 768px) {
  .faculty__page {
    padding: 12rem 0 1rem;
    margin-bottom: -10px;
  }
  .faculty__title {
    font-size: 3rem;
    line-height: 140%;
    margin: 0 auto;
    margin-bottom: 5rem;
  }
  .slug__title {
    font-size: 2.8rem;
    line-height: 120%;
    margin-bottom: 3rem;
  }
  .slug__flex {
    flex-direction: column;
    gap: 25px;
  }
  .slug__block::before {
    display: none;
  }
  .slug__block {
    font-size: 1.8rem;
    line-height: 140%;
  }
  .slug__desc {
    font-size: 1.8rem;
    line-height: 140%;
    margin-top: 20px;
  }
  .faculty__info {
    font-size: 3rem;
    margin: 2rem auto 5rem;
  }
  .slug__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    justify-content: center;
  }
  .grid__item {
    max-width: 400px;
  }
}
@media screen and (min-width: 769px) and (max-width: 991px) {
  .faculty__page {
    padding: 12rem 0 1rem;
    margin-bottom: -10px;
  }
  .faculty__title {
    font-size: 3.5rem;
    line-height: 140%;
    margin-bottom: 5rem;
  }
  .slug__title {
    font-size: 3.5rem;
    line-height: 130%;
    margin-bottom: 3rem;
  }
  .slug__flex {
    flex-direction: row;
    gap: 25px;
  }
  .slug__block::before {
    display: block;
    left: -10px;
  }
  .slug__block {
    font-size: 2rem;
    line-height: 140%;
  }
  .slug__desc {
    font-size: 2rem;
    line-height: 140%;
    margin-top: 20px;
  }
  .faculty__info {
    font-size: 3.5rem;
    margin: 2rem 0 5rem;
  }
  .slug__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    justify-content: center;
  }
}
@media screen and (min-width: 992px) and (max-width: 3000px) {
  .faculty__page {
    margin-bottom: -11px;
  }
}
</style>
