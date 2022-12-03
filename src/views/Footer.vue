<template>
  <footer>
    <div class="container">
      <div class="footer__flex">
        <ul>
          <li class="footer__logo">
            <RouterLink to="/">
              <img :src="logo" alt="logo" class="logo"
            /></RouterLink>
            <h4>
              OSIYO INNOVATSION <br />
              UNIVERSITET
            </h4>
          </li>
          <li class="contact__flex">
            <IconBase name="location_icon" />
            <span class="footer__link">
              Samarqand Shahri, Labzak ko’chasi
            </span>
          </li>
          <li class="contact__flex">
            <IconBase name="phone_icon" />
            <a href="tel:+998712078989" class="footer__link">+998712078989</a>
          </li>
          <li class="contact__flex">
            <IconBase name="phone_icon" />
            <a href="tel:+998712078989" class="footer__link">+998712078989</a>
          </li>
          <li class="contact__flex">
            <IconBase name="envelop_icon" />
            <a href="mailto:osiyouniver@gmail.com" class="footer__link"
              >osiyouniver@gmail.com</a
            >
          </li>
        </ul>
        <!-- footer right -->
        <div>
          <ul class="footer__navlink">
            <li v-for="(item, i) in linkData" :key="i">
              <RouterLink :to="item.link">{{ item.page }}</RouterLink>
            </li>
          </ul>
          <div class="footer__map">
            <img :src="map" alt="footer map" />
          </div>
        </div>
      </div>
    </div>
    <span class="footer__line"></span>
    <div class="container footer__bottom">
      <div></div>
      <span>© All rights reserved 2022</span>
      <ul class="social__media">
        <li>
          <a href="#">
            <icon-base name="telegram_icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <icon-base name="inst_icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <icon-base name="youtube_icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <icon-base name="facebook_icon" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script setup>
import { RouterLink } from "vue-router";
import IconBase from "@/components/IconBase.vue";
import logo from "@/assets/images/logo.svg";
import map from "@/assets/images/map.png";
const linkData = [
  {
    page: "Bosh sahifa",
    link: "/",
  },
  {
    page: "Haqida",
    link: "/",
  },
  {
    page: "Fakultetlar",
    link: "/faculty",
  },
  {
    page: "Yangiliklar",
    link: "/news",
  },
  {
    page: "Ro‘yxatdan o’tish ",
    link: "/",
  },
];
</script>
<style scoped>
/* #50c9c3 */
footer {
  background: #96deda;
  padding-top: 8.2rem;
  color: #5f5f5f;
}
.footer__flex {
  display: flex;
  gap: 150px;
}
.footer__logo {
  display: flex;
  align-items: center;
  gap: 10px;
}
.footer__logo img {
  width: 100px;
  height: 100px;
}
.footer__logo h4 {
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
}
.contact__flex {
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 10px 0;
}
.footer__link {
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 130%;
}
.footer__map {
  max-width: 539px;
}
.footer__map img {
  width: 100%;
}
.footer__navlink {
  position: relative;
  margin: 23px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer__navlink::after {
  content: "";
  width: 100%;
  height: 2px;
  background: #fece02;
  position: absolute;
  left: 0;
  top: -10px;
}
.footer__navlink::before {
  content: "";
  width: 100%;
  height: 2px;
  background: #fece02;
  position: absolute;
  left: 0;
  bottom: -10px;
}
.footer__navlink li {
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 24px;
}
.footer__line {
  display: block;
  width: 100%;
  height: 2px;
  background: #fece02;
  margin: 6.7rem 0 3rem;
}
.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.social__media {
  display: flex;
  align-items: center;
  gap: 2.4rem;
  margin-bottom: 30px;
}
.footer__bottom span {
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 19px;
  color: #73737c;
}
</style>
