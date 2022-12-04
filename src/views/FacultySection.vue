<template>
  <section class="faculty__section">
    <div class="container">
      <h2 class="faculty__title">Fakultetlar</h2>
      <div class="faculty__grid">
        <div v-for="item in facultyData" :key="item.id">
          <FacultyCard
            :title="item.title"
            :icon_name="item.icon"
            class="grid_item"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import FacultyCard from "@/components/cards/FacultyCard.vue";
import facultyData from "@/fake-data/faculty.js";
</script>
<style scoped>
.faculty__section {
  width: 100%;
  background: url(../assets/images/faculty.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-top: 80px;
  padding-bottom: 120px;
  max-width: 1600px;
  margin: 0 auto;
}
.faculty__section::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: linear-gradient(
    89.44deg,
    rgba(80, 221, 240, 0.3) 4.68%,
    rgba(245, 244, 244, 0.2) 93.66%
  );
}
.faculty__section .container {
  position: relative;
  z-index: 23;
}
.faculty__title {
  font-weight: 700;
  font-size: 4rem;
  line-height: 120%;
  color: #fff;
  position: relative;
  width: max-content;
}
.faculty__title::after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 1.5px;
  background: #fece02;
  bottom: -2px;
  left: 0;
}
.faculty__grid {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 32px;
  column-gap: 30px;
}
.faculty__grid .grid_item {
  height: 200px !important;
  transition: all linear 0.4s;
  max-width: 400px;
}
.faculty__grid .grid_item:hover {
  background: rgba(255, 255, 255, 0.8);
  cursor: pointer;
}
</style>
