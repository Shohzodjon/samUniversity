<template>
  <nav class="navbar" ref="headerRef">
    <div class="container">
      <div class="navbar__flex">
        <div class="nav__logo">
          <router-link to="/"> <img :src="logo" alt="nav_logo" /> </router-link>
          <h2>
            OSIYO INNOVATSION <br />
            UNIVERSITET
          </h2>
        </div>
        <ul class="nav__link">
          <li>
            <router-link to="/">Bosh sahifa</router-link>
          </li>
          <li>
            <router-link to="/">Biz haqimizda</router-link>
          </li>
          <li>
            <router-link to="/">Fakultetlar</router-link>
          </li>
          <li>
            <router-link to="/">Fakultetlar</router-link>
          </li>
          <li>
            <router-link to="/">Yangiliklar</router-link>
          </li>
        </ul>

        <div class="nav__last">
          <div class="change__lang">
            <div @click="toggle">
              <IconBase name="lang_icon" class="lang__icon" />
              <sapn class="lang">UZ</sapn>
            </div>
            <ul class="lang__list" :class="[langChoose ? 'open' : 'close']">
              <li>O'zbek</li>
              <li>English</li>
              <li>Русский</li>
            </ul>
          </div>
          <div>
            <a href="">shartnoma olish</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import logo from "@/assets/images/logo.svg";
import { RouterLink } from "vue-router";
import IconBase from "@/components/IconBase.vue";
import { ref } from "vue";
const langChoose = ref(false);
const toggle = () => {
  langChoose.value = !langChoose.value;
};
const headerRef = ref(null);
// current.classList
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // headerRef.class("header__shrink");
    console.log("ssss");
  } else {
    // headerRef.current.classList.remove("header__shrink");
    console.log("bbbb");
  }
  return () => window.removeEventListener("scroll");
});
</script>
<style scoped>
.navbar {
  background: rgba(133, 147, 152, 0.451);
  /* background: linear-gradient(90deg, #085078, #85d8ce); */
  padding: 2rem 0;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}
.header__shrink {
  background: red;
}
.navbar__flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav__logo {
  display: flex;
  align-items: center;
  gap: 10px;
}
.nav__logo img {
  width: 80px;
  height: 80px;
}
.nav__logo h2 {
  color: #fff;
  font-size: 1.3rem;
}
.nav__link {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}
.nav__link li {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
}
.nav__last {
  display: flex;
  align-items: center;
  gap: 3rem;
}
.change__lang {
  border: 1px solid #5f5f5f;
  position: relative;
  padding: 6px 10px;
  width: 70px;
  border-radius: 6px;
  border-bottom: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  cursor: pointer;
}
.change__lang div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.change__lang .lang {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
}
.lang__list {
  margin-top: 5px;
  transition: all linear 0.3s;
  position: absolute;
  top: 25px;
  left: -1px;
  padding: 0 10px 4px;
  border-bottom: #5f5f5f 1px solid;
  border-left: #5f5f5f 1px solid;
  border-right: #5f5f5f 1px solid;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  width: 70px;
  overflow: hidden;
  color: #ffffff;
}
.lang__list li {
  font-size: 1.3rem;
  font-weight: 600;
}
.open {
  height: 60px;
}
.close {
  height: 0;
  overflow: hidden;
}
</style>
<style>
.lang__icon svg path {
  stroke: #fff;
}
</style>
