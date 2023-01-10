<template>
  <nav
    class="navbar"
    ref="headerRef"
    :class="[route.path == '/librery' ? 'red' : '']"
  >
    <div class="container">
      <div class="navbar__flex">
        <div class="nav__logo">
          <router-link to="/"> <img :src="logo" alt="nav_logo" /> </router-link>
          <h2>
            OSIYO <br />
            INNOVATSION <br />
            UNIVERSITET
          </h2>
        </div>
        <ul class="nav__link">
          <li>
            <router-link to="/">{{ $t("home") }}</router-link>
          </li>
          <li>
            <a href="/#about_us" ref="about">{{ $t("about_us") }}</a>
          </li>
          <li>
            <router-link to="/faculty">{{ $t("faculty") }}</router-link>
          </li>
          <li>
            <router-link to="/news">{{ $t("news") }}</router-link>
          </li>
          <li>
            <router-link to="/librery">{{ $t("librery") }}</router-link>
          </li>
        </ul>
        <div class="nav__last">
          <div class="change__lang">
            <div @click="toggle">
              <IconBase name="lang_icon" class="lang__icon" />
              <sapn v-if="i18n.global.locale === 'uz'" class="lang">UZ</sapn>
              <sapn v-if="i18n.global.locale === 'ru'" class="lang">RU</sapn>
              <sapn v-if="i18n.global.locale === 'en'" class="lang">EN</sapn>
            </div>
            <ul class="lang__list">
              <li @click="uzLang">UZ</li>
              <li @click="engLang">EN</li>
              <li @click="ruLang">RU</li>
            </ul>
          </div>
          <div class="menu__wrap">
            <a :href="document" class="take__document" download="document">
              <span>Shartnoma </span>
              <icon-base name="download_icon" class="download_icon" />
            </a>
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
    <ul class="responsive__list">
      <li>
        <router-link to="/" @click="openNav">{{ $t("home") }}</router-link>
      </li>
      <li>
        <a href="/#about_us" @click="openNav">{{ $t("about_us") }}</a>
      </li>

      <li>
        <router-link to="/faculty" @click="openNav">{{
          $t("faculty")
        }}</router-link>
      </li>
      <li>
        <router-link to="/news" @click="openNav">{{ $t("news") }}</router-link>
      </li>
      <li>
        <router-link to="/librery" @click="openNav">{{
          $t("librery")
        }}</router-link>
      </li>
      <li class="responsive__lang">
        <a :href="document" download="document" class="rest__document">
          <span>Shartnoma</span>
          <icon-base name="download_icon" class="download_responsive" />
        </a>
        <div class="responsive__lang__wrapp">
          <div @click="toggle" class="lang__icon__wrapp">
            <IconBase name="lang_icon" class="lang__icon" />
            <sapn v-if="i18n.global.locale === 'uz'" style="color: #fff"
              >UZ</sapn
            >
            <sapn v-if="i18n.global.locale === 'ru'" style="color: #fff"
              >RU</sapn
            >
            <sapn v-if="i18n.global.locale === 'en'" style="color: #fff"
              >ENG</sapn
            >
          </div>
          <div class="lang__dropdown" :class="[langChoose ? 'open' : 'close']">
            <span @click="uzLang">O'zbek</span>
            <span @click="engLang">English</span>
            <span @click="ruLang">Русский</span>
          </div>
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
import document from "@/assets/images/document.pdf";
import downloadIcon from "@/assets/images/download.svg";
import { watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const langChoose = ref(false);
const showNav = ref(false);
const toggle = () => {
  langChoose.value = !langChoose.value;
};
const about = ref(null);
const openNav = () => {
  showNav.value = !showNav.value;
};
const uzLang = () => {
  i18n.global.locale = "uz";
  langChoose.value = false;
};
const ruLang = () => {
  i18n.global.locale = "ru";
  langChoose.value = false;
};
const engLang = () => {
  i18n.global.locale = "en";
  langChoose.value = false;
};
const headerRef = ref(null);

onMounted(() => {
  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    if (scroll > 80) {
      if (route.path == "/librery") {
        headerRef.value.classList.add("ss");
      } else {
        headerRef.value.classList.add("red");
      }
    } else {
      if (route.path == "/librery") {
        headerRef.value.classList.add("red");
      } else {
        headerRef.value.classList.remove("red");
      }
    }
    return () => window.removeEventListener("scroll");
  });
});
</script>
<style scoped>
.navbar {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4));
  padding: 1rem 0;
  position: fixed;
  top: 0 !important;
  max-width: 1770px;
  left: 50%;
  transform: translateX(-50%);
  right: 0;
  z-index: 9999;
  width: 100%;
}
.red {
  background: var(--main-blue);
  top: 0 !important;
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
  width: 70px;
  height: 70px;
}
.nav__logo h2 {
  color: #fff;
  font-size: 1.1rem;
  line-height: 150%;
}
.nav__link {
  display: flex;
  align-items: center;
  gap: 6rem;
}
.router-link-active {
  color: var(--dark-blue);
}
.nav__link li {
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 24px;
  color: #ffffff;
  transition: all linear 0.3s;
}
.nav__link li:hover {
  color: var(--dark-blue);
}
.nav__last {
  display: flex;
  align-items: center;
  gap: 3rem;
}
.change__lang {
  border: 1px solid #fff;
  position: relative;
  border-left: none !important;
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  padding: 4px 10px;
  padding-left: 4px;
  width: 60px;
  border-radius: 6px;
  cursor: pointer;
}
.change__lang div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
}
.change__lang .lang {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
}
.lang__list {
  transition: all linear 0.3s;
  position: absolute;
  top: -1px;
  z-index: 999;
  left: -60px;
  height: 28px;
  padding: 5px 0;
  padding-left: 5px;
  border: 1px solid #fff;
  width: 60px;
  overflow: hidden;
  border-right: none !important;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  border-radius: 6px;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 4px;
  transform: translateX(55px);
}
.change__lang:hover .lang__list {
  transform: translateX(0px);
}
.lang__list li {
  font-size: 1.2rem;
  font-weight: 500;
  opacity: 0;
  display: none;
  transition: all linear 0.3s;
}
.change__lang:hover .lang__list li {
  opacity: 1;
  display: block;
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
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: flex-start;
  height: 100%;
  position: fixed;
  top: 100px;
  padding: 30px 0 0 20px;
  left: 0;
  z-index: 996 !important;
  width: 100%;
  transition: all linear 0.4s;
}
.responsive__list {
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  width: 100%;
}
.responsive__lang__wrapp {
  position: relative;
  width: 70px;
}
.responsive__lang__wrapp span {
  color: #fff;
}
.lang__icon__wrapp {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid rgba(153, 153, 153, 0.568);
  padding: 4px;
  border-radius: 4px;
}
.lang__icon__wrapp span {
  color: #fff !important;
}
.responsive__list li {
  font-weight: 600;
  font-size: 1.6rem;
  padding: 10px 12px;
  width: 200px;
  color: #ffff;
  background: rgba(214, 213, 213, 0.1);
  border: 1px solid #333;
  transition: all linear 0.4s;
  border-radius: 6px;
  cursor: pointer;
}
.responsive__list li:hover {
  background: rgba(255, 255, 255, 0.9);
  color: var(--dark-blue);
}

.responsive__lang:hover {
  background: transparent !important;
}
.responsive__lang {
  display: none;
}
.lang__dropdown {
  position: absolute;
  left: 10px;
  top: 25px;
  display: flex;
  flex-direction: column;
  transition: all linear 0.4s;
}
.lang__dropdown span {
  font-weight: 500 !important;
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
  border-top: none !important;
}

.show__res {
  width: 100%;
}
.close__res {
  width: 0% !important;
  padding-left: 0;
  overflow: hidden;
}
.take__document {
  display: flex;
  align-items: center;
  border: 1px solid #fff;
  padding: 4.5px 8px;
  gap: 8px;
  border-radius: 6px;
  font-size: 1.2rem;
  color: #fff;
}
.rest__document {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.2rem;
  color: #fff;
}
/*  media query  */

@media screen and (min-width: 300px) and (max-width: 576px) {
  .navbar {
    padding: 1rem 0;
    top: 0;
  }
  .nav__logo img {
    width: 5.8rem;
    height: 5.8rem;
  }
  .nav__logo h2 {
    font-size: 1rem;
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

  .menu__icon {
    display: block;
  }
  .responsive__nav {
    top: 70px;
  }
  .responsive__lang {
    display: flex;
    justify-content: space-between;
  }
  .rest__document {
    display: flex;
  }
  .responsive__list li {
    font-size: 1.4rem;
    padding: 1rem 12px;
  }
  .lang__icon__wrapp {
    padding: 2px;
  }
  .responsive__lang__wrapp {
    width: 55px;
  }
  .lang__icon__wrapp span {
    font-size: 1.2rem;
  }
  .download_responsive {
    width: 18px;
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
    display: flex;
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
    top: 84px;
  }
  .responsive__lang {
    display: none;
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
    display: flex;
  }
  .res__change {
    display: none;
  }
  .responsive__nav {
    top: 90px;
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
    gap: 3rem;
  }
  .menu__icon {
    display: none;
  }
  .take__document {
    display: flex;
  }
  .res__change {
    display: none;
  }
  .nav__last {
    gap: 2rem;
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
.lang__icon svg {
  width: 18px;
}
.download_icon svg {
  width: 17px;
}
.download_icon svg path {
  fill: #fff;
}
.download_responsive svg {
  width: 22px;
}
.download_responsive svg path {
  fill: #fff;
}
.menu__icon svg {
  width: 20px;
  cursor: pointer;
}
@media screen and (min-width: 300px) and (max-width: 576px) {
  .lang__icon svg {
    width: 15px;
  }
}
</style>
