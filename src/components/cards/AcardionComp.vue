<template>
  <div class="acardion__comp">
    <div class="acardion__header">
      <h3>{{ $t(title) }}</h3>
      <button @click="toggle()">
        <IconBase :name="[show ? 'close_icon' : 'plus_icon']" />
      </button>
    </div>
    <p class="acardion__desc" :class="[show ? 'avtive' : 'unactive']">
      {{ desc }}
    </p>
  </div>
</template>
<script setup>
import IconBase from "../IconBase.vue";
import { ref } from "vue";
defineProps({
  title: String,
  desc: String,
});
const show = ref(false);

const toggle = () => {
  show.value = !show.value;
};
</script>
<style scoped>
.acardion__comp {
  background: #fdfdfd;
  border: 1px solid #aeaeae;
  border-radius: 12px;
  max-width: 853px;
  padding: 30px 38.29px 20px 50px;
  transition: all 0.4s linear;
}
.acardion__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.acardion__header h3 {
  font-weight: 600;
  font-size: 3.2rem;
  line-height: 120%;
  color: #82001a;
}
.acardion__desc {
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 140%;
  color: #000000;
  transition: all linear 0.4s;
}
.unactive {
  height: 0;
  overflow: hidden;
}
.active {
  height: max-content;
}

@media screen and (min-width: 300px) and (max-width: 576px) {
  .acardion__comp {
    padding: 10px 20px;
  }
  .acardion__header {
    margin-bottom: 5px;
  }
  .acardion__header h3 {
    font-size: 2.2rem;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .acardion__comp {
    padding: 25px 28.29px 25px;
  }
  .acardion__header {
    margin-bottom: 10px;
  }
  .acardion__header h3 {
    font-size: 2.8rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 991px) {
  .acardion__comp {
    padding: 28px 28.29px;
  }
  .acardion__header {
    margin-bottom: 10px;
  }
  .acardion__header h3 {
    font-size: 3rem;
  }
}
</style>
