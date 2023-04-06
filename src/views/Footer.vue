<template>
  <footer>
    <div class="container">
      <div class="footer__flex">
        <ul>
          <li class="footer__logo">
            <RouterLink to="/">
              <img :src="logo" alt="logo" class="logo"
            /></RouterLink>
          </li>
          <li class="contact__flex">
            <IconBase name="location_icon" class="social_icon" />
            <span class="footer__link">
              {{ $t("university_location") }}
            </span>
          </li>
          <li class="contact__flex">
            <IconBase name="phone_icon" class="social_icon" />
            <a href="tel:+998712078989" class="footer__link">+998712078989</a>
          </li>
          <li class="contact__flex">
            <IconBase name="phone_icon" class="social_icon" />
            <a href="tel:+998712078989" class="footer__link">+998712078989</a>
          </li>
          <li class="contact__flex">
            <IconBase name="envelop_icon" class="social_icon" />
            <a href="mailto:osiyouniver@gmail.com" class="footer__link"
              >osiyouniver@gmail.com</a
            >
          </li>
        </ul>
        <!-- footer right -->
        <div>
          <ul class="footer__navlink">
            <li>
              <RouterLink to="/">{{ $t("home") }}</RouterLink>
            </li>
            <!-- <li>
              <RouterLink to="/#about_us">
                {{ $t("about_us") }}
              </RouterLink>
            </li> -->
            <li>
              <RouterLink to="/faculty">{{ $t("faculty") }} </RouterLink>
            </li>
            <li>
              <RouterLink to="/news">{{ $t("news") }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/contact">
                {{ $t("register") }}
              </RouterLink>
            </li>
            <li>
              <router-link to="/librery">{{ $t("librery") }}</router-link>
            </li>
          </ul>
          <div class="footer__map">
            <div style="position: relative; overflow: hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24565.97318769996!2d66.91465860818862!3d39.677913300000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d1968bdb08207%3A0x3704dc07592f8fd3!2z0KLQtdC70LXQutC-0L3RgtCw0LrRgg!5e0!3m2!1sru!2s!4v1680801932088!5m2!1sru!2s"
                width="600"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span class="footer__line"></span>
    <div class="container footer__bottom">
      <div></div>
      <span>© All rights reserved 2022</span>
      <ul class="social__media">
        <li class="social__media__link">
          <a href="#">
            <icon-base name="telegram_icon" class="social_icon2" />
          </a>
        </li>
        <li class="social__media__link">
          <a href="#">
            <icon-base name="inst_icon" class="social_icon2" />
          </a>
        </li>
        <li class="social__media__link">
          <a href="#">
            <icon-base name="youtube_icon" class="social_icon2" />
          </a>
        </li>
        <li class="social__media__link">
          <a href="#">
            <icon-base name="facebook_icon" class="social_icon2" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script setup>
import { RouterLink } from "vue-router";
import IconBase from "@/components/IconBase.vue";
import logo from "@/assets/images/new_logo.png";
</script>

<style scoped>
footer {
  background: var(--main-blue);
  padding-top: 8.2rem;
  color: #ffff;
  padding-bottom: 30px;
  max-width: 100%;
  margin: 0 auto;
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
  width: auto;
  height: 80px;
  transform: scale(0.6);
  margin-left: -35px;
}

.contact__flex {
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 10px 0;
  padding-left: 1rem;
}
.footer__link {
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 130%;
}
.router-link-active {
  color: var(--dark-blue);
}
.footer__map {
  width: 600px;
  border-radius: 12px;
  overflow: hidden;
}
.footer__map iframe {
  border-radius: 12px;
  border: none;
}

.footer__navlink {
  position: relative;
  margin: 23px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}
.footer__navlink::after {
  content: "";
  width: 100%;
  height: 2px;
  background: var(--second-blue);
  position: absolute;
  left: 0;
  top: -10px;
}
.footer__navlink::before {
  content: "";
  width: 100%;
  height: 2px !important;
  background: var(--second-blue);
  position: absolute;
  left: 0;
  bottom: -10px;
}
.footer__navlink li {
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 24px;
  transition: all linear 0.4s;
}
.footer__navlink li:hover {
  color: var(--dark-blue);
}

.footer__line {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--second-blue);
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
  height: max-content;
}

.social__media__link {
  position: relative;
  width: 37px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.social__media__link a {
  position: relative;
  z-index: 4;
  display: inline-block;
  margin-top: 1px;
}
.social__media__link::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  background: linear-gradient(
    90deg,
    rgb(231, 59, 80) 0%,
    rgb(212, 48, 212) 100%
  );
  top: 0;
  left: 0;
  z-index: 1;
  border-radius: 50%;
  transition: all linear 0.4s;
}
.social__media__link:hover::after {
  transform: scale(0);
}
.footer__bottom span {
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 19px;
  color: #fff;
  display: block;
  height: max-content;
}

/* media query */
@media screen and (min-width: 300px) and (max-width: 576px) {
  footer {
    padding-top: 5.2rem;
  }
  .footer__flex {
    flex-direction: column;
    gap: 10px;
  }
  .footer__logo {
    align-items: center;
    justify-content: center;
  }

  .footer__logo img {
    width: auto;
    height: 6rem;
    margin-left: 10px;
  }
  .contact__flex {
    gap: 5px;
    align-items: center;
    justify-content: center;
    margin: 3px 0;
  }
  .footer__link {
    font-size: 0.9rem;
    line-height: 100%;
  }
  .footer__navlink {
    margin: 20px 0;
  }
  .footer__navlink li {
    font-size: 1rem;
    line-height: 20px;
  }
  .footer__map {
    margin-top: 30px;
    max-width: 100%;
  }
  .footer__bottom {
    align-items: center;
  }
  .footer__bottom div {
    display: none;
  }
  .footer__line {
    margin: 3.7rem 0 2.5rem;
  }
  .footer__bottom span {
    font-size: 1rem;
    line-height: 18px;
    display: block;
  }
  .social__media {
    gap: 2rem;
  }
  .social__media__link {
    width: 27px;
    height: 27px;
  }
}

@media screen and (min-width: 577px) and (max-width: 768px) {
  footer {
    padding-top: 6.2rem;
  }
  .footer__flex {
    flex-direction: column;
    gap: 30px;
  }
  .footer__logo {
    align-items: center;
    justify-content: center;
  }
  .footer__logo img {
    width: auto;
    height: 70px;
    transform: scale(0.6);
  }
  .contact__flex {
    gap: 8px;
    align-items: center;
    justify-content: center;
  }
  .footer__link {
    font-size: 1.6rem;
    line-height: 130%;
  }
  .footer__navlink {
    margin: 20px 0;
  }
  .footer__navlink li {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 22px;
  }
  .footer__map {
    max-width: 100%;
    max-height: 300px;
    margin-top: 30px;
  }
  .footer__map img {
    height: 300px;
  }
  .footer__bottom {
    align-items: center;
  }
  .footer__bottom div {
    display: none;
  }
  .footer__line {
    margin: 3.7rem 0 2.5rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 991px) {
  footer {
    padding-top: 7.2rem;
  }
  .footer__flex {
    flex-direction: row;
    gap: 50px;
  }
  .footer__logo {
    align-items: center;
  }
  .footer__logo img {
    width: 75px;
    height: 75px;
  }
  .footer__logo h4 {
    font-size: 1.6rem;
    line-height: 120%;
  }
  .contact__flex {
    gap: 8px;
    align-items: center;
  }
  .footer__link {
    font-size: 1.4rem;
    line-height: 130%;
  }
  .footer__navlink {
    margin: 20px 0;
  }
  .footer__navlink li {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 22px;
  }
  .footer__map {
    max-width: 500px;
    margin-top: 30px;
  }
  .footer__bottom {
    align-items: center;
  }
  .footer__bottom div {
    display: none;
  }
  .footer__line {
    margin: 3.7rem 0 2.5rem;
  }
}
</style>
<style>
.social_icon svg {
  transition: all linear 0.6s;
  cursor: pointer;
}
.social_icon2 svg path {
  fill: #fff;
  transition: all linear 0.4s;
  cursor: pointer;
}
.social_icon2 svg {
  transition: all linear 0.4s;
  transform: scale(0.9);
}
.social__media__link:hover .social_icon2 svg {
  transform: scale(1.2);
}
.social__media__link:hover .social_icon2 svg path {
  fill: #fff;
}

.social_icon svg path {
  fill: #fff;
}
.gm-style .directions-card-medium-large {
  height: 61px;
  padding: 10px 11px;
  display: none;
}
.gm-control-active {
  display: none;
}
@media screen and (min-width: 300px) and (max-width: 576px) {
  .social_icon svg {
    width: 14px;
  }
  .social_icon2 svg {
    width: 16px;
  }
}
</style>
