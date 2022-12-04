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
  background: rgba(255, 255, 255, 0.4);
  filter: blur(0.5px);
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
</style>
