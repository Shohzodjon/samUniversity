<template>
  <section id="about_us">
    <div
      class="container"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="500"
    >
      <div class="section__two">
        <div class="section__title">
          <h2>{{ $t("about_us") }}</h2>
          <span class="line"></span>
        </div>
        <ul>
          <li>
            Osiyo Innovatsion Universiteti 2022-yil asosida o’z faoliyati
            boshladi ________________
          </li>
          <li>
            Ushbu OTM ga asos solinishidan asosiy maqsad, yurtimizga sifatli va
            salohiyatli kadrlarni yetkazib berishdan iborat.
          </li>
          <li>
            Adminstratsiya , umumiy yo’nalish va kafedralar , ta’lim shakllari
            va tili ____________________________
          </li>
          <li>
            Bizning oliygohda xalqaro miqyosdagi professorlar va fan nomzodlari
            o’z bilim va ko’nikmalarini talabalarimiz bilan
            bo’lishadilar____________
          </li>
        </ul>
        <register-btn link="#registr" />
      </div>
    </div>
  </section>
</template>
<script setup>
import IconBase from "@/components/IconBase.vue";
import RegisterBtn from "@/components/cards/RegisterBtn.vue";
</script>
<style scoped>
section {
  width: 100%;
  /* max-width: ; */

  padding-top: 8rem;
  background: url(../assets/images/about.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.section__two {
  width: 100%;
  min-height: 652px;
  padding: 84px 50px 55px 50px;
}
.section__title {
  position: relative;
  margin-bottom: 52px;
  width: max-content;
}
.section__title h2 {
  font-weight: 600;
  font-size: 4rem;
  line-height: 140%;
  color: #ffffff;
}
.section__title .line {
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--second-blue);
  border-radius: 4px;
}
.section__two li {
  font-weight: 500;
  font-size: 2rem;
  line-height: 140%;
  color: #fff;
}
.section__two ul {
  margin-bottom: 51px;
}

@media screen and (min-width: 300px) and (max-width: 450px) {
  section {
    padding-top: 3rem;
    width: 100%;
    overflow: hidden;
  }
  .section__two {
    min-height: 452px;
    padding: 34px 25px 25px 25px;
    background-size: 180% 100%;
  }
  .section__title {
    margin-bottom: 30px;
    width: max-content;
  }
  .section__title h2 {
    font-size: 3rem;
    line-height: 100%;
  }
  .section__two li {
    font-size: 1.8rem;
    line-height: 120%;
  }
  .section__two ul {
    margin-bottom: 30px;
  }
}
@media screen and (min-width: 451px) and (max-width: 576px) {
  section {
    padding-top: 5rem;
    width: 100%;
    overflow: hidden;
  }
  .section__two {
    min-height: 452px;
    padding: 34px 25px 25px 25px;
    background-size: 180% 100%;
  }
  .section__title {
    margin-bottom: 30px;
    width: max-content;
  }
  .section__title h2 {
    font-size: 3rem;
    line-height: 100%;
  }
  .section__two li {
    font-size: 1.8rem;
    line-height: 120%;
  }
  .section__two ul {
    margin-bottom: 30px;
  }
}

@media screen and (min-width: 577px) and (max-width: 768px) {
  section {
    padding-top: 5rem;
  }
  .section__two {
    min-height: 450px;
    padding: 40px 30px;
    background-size: 150% 150%;
  }
  .section__title {
    margin-bottom: 40px;
    width: max-content;
  }
  .section__title h2 {
    font-size: 3.5rem;
    line-height: 100%;
  }
  .section__two li {
    font-size: 1.9rem;
    line-height: 140%;
  }
  .section__two ul {
    margin-bottom: 30px;
  }
}
@media screen and (min-width: 767px) and (max-width: 991px) {
  section {
    padding-top: 6rem;
  }
  .section__two {
    min-height: 500px;
    padding: 45px 35px;
    background-size: 140% 120%;
  }
  .section__title {
    margin-bottom: 40px;
    width: max-content;
  }
  .section__title h2 {
    font-size: 4rem;
    line-height: 100%;
  }
  .section__two li {
    font-size: 2rem;
    line-height: 140%;
  }
}
@media screen and (min-width: 1400px) and (max-width: 3000px) {
  section {
    margin-top: 5px;
  }
}
</style>
