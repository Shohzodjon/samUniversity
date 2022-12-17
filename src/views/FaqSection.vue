<template>
  <section class="faq__section">
    <div class="container relative">
      <h2
        class="faq__title"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        {{ $t("faq") }}
      </h2>
      <div
        class="acardion__wrapp"
        data-aos="fade-up-left"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
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
  width: 100%;
  overflow: hidden;
}
.relative {
  position: relative;
}
.faq__title {
  width: max-content;
  position: relative;
  font-weight: 600;
  font-size: 4rem;
  line-height: 120%;
  color: #3d3a3a;
  margin-bottom: 5.4rem;
}
.faq__title::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background: var(--second-blue);
  bottom: -9px;
  border-radius: 4px;
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

@media screen and (min-width: 300px) and (max-width: 576px) {
  .faq__title {
    font-size: 2.4rem;
    line-height: 120%;
    font-weight: 600;
    margin: 0 auto;
    margin-bottom: 5.4rem;
    word-break: break-all;
  }
  .acardion__wrapp {
    gap: 15px;
  }
  .faq__img {
    position: absolute;
    max-width: 300px;
    max-height: 300px;
    right: 10%;
    top: 8rem;
  }
}

@media screen and (min-width: 577px) and (max-width: 768px) {
  .faq__title {
    font-size: 3rem;
    line-height: 120%;
    font-weight: 600;
    margin: 0 auto;
    margin-bottom: 5.4rem;
  }
  .acardion__wrapp {
    gap: 15px;
  }
  .faq__img {
    position: absolute;
    max-width: 400px;
    max-height: 400px;
    right: 10%;
    top: 8rem;
  }
}
</style>
