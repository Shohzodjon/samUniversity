<template>
  <a :href="link" class="section__btn">
    <span>Ro‘yxatdan o‘tish </span>
    <span> <IconBase name="small_arrow" /></span>
  </a>
</template>
<script setup>
import { RouterLink } from "vue-router";
import IconBase from "@/components/IconBase.vue";
defineProps({
  link: String,
});
</script>

<style scoped>
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
  cursor: pointer;
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

@media screen and (min-width: 370px) and (max-width: 576px) {
  .section__btn {
    padding: 13px;
    font-size: 1.9rem;
    line-height: 120%;
  }
  .section__btn span:nth-child(2) {
    width: 18px;
    height: 18px;
  }
  .section__btn::after {
    right: 40px;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .section__btn {
    padding: 15px;
    font-size: 2rem;
  }
  .section__btn::after {
    right: 45px;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .section__btn {
    padding: 15px;
    font-size: 2rem;
  }
}
@media screen and (min-width: 767px) and (max-width: 991px) {
  .section__btn {
    padding: 19px;
  }
}
@media screen and (min-width: 992px) and (max-width: 1100px) {
  .section__btn {
    padding: 22px;
  }
}
</style>
