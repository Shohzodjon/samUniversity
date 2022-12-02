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
          <router-link to=""> Batafsil</router-link>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
defineProps({
  news__img: String,
  news__title: String,
  news__create: String,
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
}
.news__img {
  max-width: 370px;
  max-height: 228px;
  overflow: hidden;
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
  padding: 10px 25px;
  border: 1px solid #fece02;
  border-radius: 12px;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 140%;
  color: #5c5757;
}
</style>
