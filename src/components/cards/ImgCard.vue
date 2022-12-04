<template>
  <div>
    <img :src="card__img" alt="img-card" />
  </div>
</template>
<script setup>
defineProps({
  card__img: String,
});
</script>
<style scoped>
.img__card {
  max-width: 396px;
  max-height: 376px;
  border-radius: 20px;
}
.img__card img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
</style>
