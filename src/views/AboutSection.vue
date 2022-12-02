<template>
  <section>
    <div class="container">
      <div class="section__two">
        <div class="section__title">
          <h2>Biz haqimizda</h2>
          <span class="line"></span>
        </div>
        <ul>
          <li>Osiyo Innovatsion Universiteti 2022-yil ________________</li>
          <li>asosida o’z faoliyati boshladi.</li>
          <li>
            Ushbu OTM ga asos solinishidan asosiy maqsad, yurtimizga sifatli va
            salohiyatli kadrlarni yetkazib berishdan iborat.
          </li>
          <li>Adminstratsiya ______________________</li>
          <li>Umumiy yo’nalish va kafedralar ____________________________</li>
          <li>Ta’lim shakllari va tili ____________</li>
          <li>
            Bizning oliygohda xalqaro miqyosdagi professorlar va fan nomzodlari
            o’z bilim va ko’nikmalarini talabalarimiz bilan bo’lishadilar
          </li>
        </ul>

        <a href="#" class="section__btn">
          <span>Ro‘yxatdan o‘tish </span>
          <span> <IconBase name="small_arrow" /></span>
        </a>
      </div>
    </div>
  </section>
</template>
<script setup>
import IconBase from "@/components/IconBase.vue";
</script>
<style scoped>
section {
  width: 100%;
}
.section__two {
  background: url(../assets/images/section_img.png);
  background-repeat: no-repeat;
  background-size: cover;
  /* max-width: 1200px; */
  width: 100%;
  min-height: 652px;
  border-radius: 12px;
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
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #fece02;
}
.section__two li {
  font-weight: 400;
  font-size: 2rem;
  line-height: 140%;
  color: #ffffff;
}
.section__two ul {
  margin-bottom: 51px;
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
</style>
