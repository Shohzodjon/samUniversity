<template>
  <div class="book__card">
    <div class="book__img">
      <img src="@/assets/images/book1.png" alt="book-img" />
    </div>
    <div class="book__info">
      <h3>{{ book_title }}</h3>
      <button class="book__btn">{{ $t("in_order") }}</button>
    </div>
  </div>
</template>
<script setup>
defineProps({
  book_title: String,
});
</script>
<style scoped>
.book__card {
  border: 1px solid rgba(24, 64, 83, 0.3);
  text-align: center;
  padding: 1rem;
  border-radius: 10px;
  width: max-content;
  cursor: pointer;
  transition: all linear 0.4s;
  overflow: hidden;
}
.book__card:hover {
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
}
.book__img {
  max-width: 200px;
}
.book__img img {
  width: 100%;
  height: 100%;
}
.book__info h3 {
  font-size: 1.7rem;
  font-weight: 600;
  font-style: italic;
  transition: 0.7s linear all;
  transform: translateX(-50%);
  text-align: center;
  opacity: 0;
  color: var(--dark-blue);
}
.book__card:hover .book__info h3 {
  transform: translateX(0);
  opacity: 1;
}
.book__btn {
  padding: 8px 10px;
  border: 2px solid rgba(24, 64, 83, 0.4);
  border-radius: 4px;
  width: 80%;
  margin: 10px auto;
  font-size: 1.3rem;
  font-weight: 600;
  transition: all linear 0.7s;
  opacity: 0;
  transform: translateX(80%);
}
.book__card:hover .book__btn {
  background: var(--main-blue);
  color: #fff;
  border-color: transparent;
  transform: translateX(0);
  opacity: 1;
}
</style>
