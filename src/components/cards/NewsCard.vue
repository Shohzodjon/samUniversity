<template>
  <div class="news__card">
    <div class="news__img">
      <img :src="news__img" alt="new-img" />
    </div>
    <div class="news__info">
      <h3>{{ news__title }}</h3>
      <div class="news__footer">
        <span class="news__date">{{ news__create }}</span>
        <button>
          <router-link :to="news__link"> Batafsil</router-link>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});
defineProps({
  news__img: String,
  news__title: String,
  news__create: String,
  news__link: String,
});
</script>
<style scoped>
.news__card {
  max-width: 400px;
  min-height: 420px;
  max-height: 430px;
  border: 1px solid #e6e6e6;
  border-radius: 12px;
  padding: 15px 15px 30px 15px;
  cursor: pointer;
  transition: all linear 0.5s;
}
.news__card:hover {
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
}
.news__img {
  max-width: 380px;
  max-height: 228px;
  overflow: hidden;
  margin: 0 auto;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
}
.news__img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.news__info {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.news__info h3 {
  font-weight: 500;
  flex-basis: 1;
  font-size: 1.8rem;
  line-height: 120%;
  color: #0f0f0f;
  word-break: break-word !important;
  overflow: hidden !important;
  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  -webkit-line-clamp: 3;
}
.news__footer {
  flex-basis: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
}
.news__date {
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 120%;
  color: #a4a4a4;
}
.news__footer button {
  background: none;
  border: none;
}
.news__footer a {
  padding: 8px 23px;
  border: 1px solid #0eaf6c;
  border-radius: 12px;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 140%;
  color: #5c5757;
  transition: all linear 0.4s;
}
.news__footer a:hover {
  box-shadow: rgba(41, 190, 183, 0.4) 0px 5px 10px,
    rgba(41, 190, 183, 0.4) 0px 6px 6px;
}

@media screen and (min-width: 300px) and (max-width: 576px) {
  .news__card {
    max-width: 400px;
    min-height: 350px;
    max-height: 430px;
    padding: 15px 15px 30px;
  }
  .news__info h3 {
    flex-basis: 1;
    font-size: 1.5rem;
    word-break: break-word !important;
    overflow: hidden !important;
    display: -webkit-box !important;
    -webkit-box-orient: vertical !important;
    -webkit-line-clamp: 2;
  }
  .news__footer a {
    padding: 8px 18px;
    font-size: 1.4rem;
    line-height: 120%;
  }
  .news__date {
    font-size: 1.4rem;
    line-height: 120%;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .news__card {
    max-width: 400px;
    min-height: 300px;
    max-height: 380px !important;
    padding: 15px 15px 30px;
  }
  .news__info h3 {
    flex-basis: 1;
    font-size: 1.5rem;
    word-break: break-word !important;
    overflow: hidden !important;
    display: -webkit-box !important;
    -webkit-box-orient: vertical !important;
    -webkit-line-clamp: 2;
  }
  .news__footer a {
    padding: 8px 18px;
    font-size: 1.4rem;
    line-height: 120%;
  }
  .news__date {
    font-size: 1.4rem;
    line-height: 120%;
  }
}
@media screen and (min-width: 769px) and (max-width: 991px) {
  .news__info h3 {
    flex-basis: 1;
    word-break: break-word !important;
    overflow: hidden !important;
    display: -webkit-box !important;
    -webkit-box-orient: vertical !important;
    -webkit-line-clamp: 2;
  }
}
</style>
