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
            <router-link to="/news">Biz haqimizda</router-link>
          </li>
          <li>
            <router-link to="/faculty">Fakultetlar</router-link>
          </li>
          <li>
            <router-link to="/news">Yangiliklar</router-link>
          </li>
        </ul>
        <div class="nav__last">
          <div class="change__lang">
            <div @click="toggle">
              <IconBase name="lang_icon" class="lang__icon" />
              <sapn v-if="$i18n.locale === 'uz'" class="lang">UZ</sapn>
              <sapn v-if="$i18n.locale === 'ru'" class="lang">RU</sapn>
              <sapn v-if="$i18n.locale === 'en'" class="lang">UZ</sapn>
            </div>
            <ul class="lang__list" :class="[langChoose ? 'open' : 'close']">
              <li @click="uzLang">O'zbek</li>
              <li @click="engLang">English</li>
              <li @click="ruLang">Русский</li>
            </ul>
          </div>
          <div class="menu__wrap">
            <a href="" class="take__document">shartnoma olish</a>
            <icon-base
              :name="[showNav ? 'close_menu' : 'menu_icon']"
              class="menu__icon"
              @click="openNav"
            />
          </div>
        </div>
      </div>
    </div>
  </nav>

  <div class="responsive__nav" :class="[showNav ? 'show__res' : 'close__res']">
    <ul>
      <li>
        <router-link to="/">Bosh sahifa</router-link>
      </li>
      <li>
        <router-link to="/news">Biz haqimizda</router-link>
      </li>

      <li>
        <router-link to="/faculty">Fakultetlar</router-link>
      </li>
      <li>
        <router-link to="/news">Yangiliklar</router-link>
      </li>
      <li>
        <a href="" class="take__document res__document">shartnoma olish</a>
        <div class="change__lang res__change">
          <div @click="toggle">
            <IconBase name="lang_icon" class="lang__icon" />
            <sapn class="lang">UZ</sapn>
          </div>
          <ul
            class="lang__list res__lang"
            :class="[langChoose ? 'open' : 'close']"
          >
            <li>O'zbek</li>
            <li>English</li>
            <li>Русский</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import logo from "@/assets/images/logo.svg";
import { RouterLink } from "vue-router";
import IconBase from "@/components/IconBase.vue";
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import i18n from "@/language/i18n.js";
const langChoose = ref(false);
const showNav = ref(false);
const toggle = () => {
  langChoose.value = !langChoose.value;
};

const openNav = () => {
  showNav.value = !showNav.value;

  if (showNav.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};
const uzLang = () => {
  i18n.locale = "uz";
  console.log(useI18n);
  langChoose.value = false;
};
const ruLang = () => {
  // $i18n.locale = "ru";
  langChoose.value = false;
};
const engLang = () => {
  i18n.locale = "en";
  langChoose.value = false;
};

const headerRef = ref(null);
onMounted(() => {
  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.value.classList.add("red");
    } else {
      headerRef.value.classList.remove("red");
    }
    return () => window.removeEventListener("scroll");
  });
});
</script>
<style scoped>
.navbar {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4));
  padding: 2rem 0;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}
.red {
  background: linear-gradient(90deg, #085078, #85d8ce) !important;
}
.navbar__flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav__logo {
  display: flex;
  align-items: center;
  gap: 1rem;
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
.router-link-active {
  color: #fece02;
}
.nav__link li {
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 24px;
  color: #ffffff;
}
.nav__last {
  display: flex;
  align-items: center;
  gap: 3rem;
}
.change__lang {
  border: 1px solid #fff;
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
  border-bottom: #fff 1px solid;
  border-left: #fff 1px solid;
  border-right: #fff 1px solid;
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
.lang__list li:last-child {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
.menu__wrap {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.menu__icon {
  display: none;
}
.responsive__nav {
  background: #085078;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: fixed;
  top: 100px;
  left: 0;
  z-index: 9999 !important;
  width: 100%;
  transition: all linear 0.4s;
}
.responsive__nav ul:nth-child(1) {
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
}
.responsive__nav ul li {
  font-weight: 600;
  font-size: 1.6rem;
  color: #ffffff;
}
.responsive__nav .take__document {
  margin-bottom: 10px;
  display: block;
}
.responsive__nav .res__lang {
  top: 28px;
}

.responsive__nav .lang__list li {
  font-size: 1.3rem;
  font-weight: 600;
}
.open {
  height: 60px;
  overflow: hidden;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
.close {
  height: 0;
  overflow: hidden;
}

.show__res {
  width: 100%;
}
.close__res {
  width: 0%;
  overflow: hidden;
}

/*  media query  */

@media screen and (min-width: 370px) and (max-width: 576px) {
  .navbar {
    padding: 1rem 0;
  }
  .nav__logo img {
    width: 60px;
    height: 60px;
  }
  .nav__logo h2 {
    font-size: 1.2rem;
  }
  .nav__link {
    display: none;
  }
  .change__lang {
    display: none;
  }
  .take__document {
    display: none;
  }
  .res__change {
    display: block;
  }
  .res__document {
    display: block;
  }
  .menu__icon {
    display: block;
  }
  .responsive__nav {
    top: 14%;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .navbar {
    padding: 1rem 0;
  }
  .nav__logo img {
    width: 70px;
    height: 70px;
  }
  .nav__logo h2 {
    font-size: 1.3rem;
  }
  .nav__link {
    display: none;
  }
  .take__document {
    display: block;
  }
  .menu__icon {
    display: block;
  }
  .res__change {
    display: none;
  }
  .res__document {
    display: none !important;
  }
  .responsive__nav {
    top: 16.5%;
  }
}
@media screen and (min-width: 769px) and (max-width: 991px) {
  .navbar {
    padding: 1rem 0;
  }
  .nav__logo img {
    width: 80px;
    height: 80px;
  }
  .nav__link {
    display: none;
  }
  .menu__icon {
    display: block;
  }
  .take__document {
    display: block;
  }
  .res__change {
    display: none;
  }
  .res__document {
    display: none !important;
  }
}
@media screen and (min-width: 992px) and (max-width: 1100px) {
  .nav__logo img {
    width: 80px;
    height: 80px;
  }

  .nav__link {
    display: flex;
    gap: 1.5rem;
  }
  .menu__icon {
    display: none;
  }
  .take__document {
    display: block;
  }
  .res__change {
    display: none;
  }
  .res__document {
    display: none !important;
  }
}
@media screen and (min-width: 1101px) and (max-width: 2000px) {
  .res__change {
    display: none;
  }
  .res__document {
    display: none !important;
  }
}
</style>
<style>
.lang__icon svg path {
  stroke: #fff;
}
</style>
