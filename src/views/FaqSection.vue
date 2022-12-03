<template>
  <section class="faq__section">
    <div class="container relative">
      <h2 class="faq__title">Eng ko’p beriladigan savollar</h2>
      <div class="acardion__wrapp">
        <AcardionComp
          v-for="(item, i) in faqData"
          :key="i"
          :title="item.title"
          :desc="item.desc"
        />
      </div>
      <img :src="inteligent" alt="think and rich" class="faq__img" />
    </div>
  </section>
</template>
<script setup>
import AcardionComp from "@/components/cards/AcardionComp.vue";
import faqData from "@/fake-data/faq-data.js";
import inteligent from "@/assets/images/inteligent.svg";
</script>
<style scoped>
.faq__section {
  background: #fff;
  padding: 6rem 0 5.8rem;
}
.relative {
  position: relative;
}
.faq__title {
  width: max-content;
  position: relative;
  font-weight: 700;
  font-size: 4rem;
  line-height: 120%;
  color: #3d3a3a;
  margin-bottom: 5.4rem;
}
.faq__title::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background: #fece02;
  bottom: -10px;
  left: 0;
}
.acardion__wrapp {
  position: relative;
  z-index: 23;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.faq__img {
  position: absolute;
  max-width: 442px;
  max-height: 559px;
  right: 10%;
  top: 5rem;
  z-index: 1;
}
</style>
