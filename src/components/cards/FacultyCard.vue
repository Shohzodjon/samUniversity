<template>
  <div class="faculty__card">
    <div class="card__icon">
      <IconBase :name="icon_name" />
    </div>
    <h4>{{ title }}</h4>
  </div>
</template>
<script setup>
import IconBase from "@/components/IconBase.vue";
defineProps({
  title: String,
  icon_name: String,
});
</script>

<style>
.faculty__card {
  background: rgba(255, 255, 255, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 200px;
  border-radius: 12px;
  padding: 40px 22px 30px;
}
.card__icon {
  width: 74px;
  height: 74px;
}
.card__icon svg {
  width: 100%;
  height: 100%;
}
.faculty__card h4 {
  font-weight: 600;
  font-size: 3.2rem;
  line-height: 120%;
  text-align: center;
  color: #232323;
}

@media screen and (min-width: 370px) and (max-width: 576px) {
  .faculty__card {
    max-height: 200px;
    padding: 15px 10px;
  }
  .card__icon {
    width: 64px;
    height: 64px;
  }
  .faculty__card h4 {
    font-size: 2.2rem;
    line-height: 120%;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .faculty__card {
    max-height: 200px;
    padding: 25px 20px;
  }
  .card__icon {
    width: 68px;
    height: 68px;
  }
  .faculty__card h4 {
    font-size: 2.5rem;
    line-height: 120%;
  }
}
</style>
