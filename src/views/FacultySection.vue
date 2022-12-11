<template>
  <section class="">
    <div class="container">
      <div class="faculty__section">
        <h2 class="faculty__title">Fakultetlar</h2>
        <div
          class="faculty__grid"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div v-for="item in facultyData" :key="item.id">
            <FacultyCard
              :title="$t(item.title)"
              :icon_name="item.icon"
              class="grid_item"
            />
          </div>
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
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(../assets/images/faculty.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 30px 45px;
  margin: 0 auto;
  border-radius: 12px;
}

.faculty__section .container {
  position: relative;
  z-index: 23;
}
.faculty__title {
  font-weight: 600;
  font-size: 4rem;
  line-height: 130%;
  color: #fff;
  position: relative;
  width: max-content;
}
.faculty__title::after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 3px;
  border-radius: 4px;
  background: #085078;
  bottom: -5px;
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
  background: rgba(255, 255, 255, 0.9);
  cursor: pointer;
}

@media screen and (min-width: 300px) and (max-width: 576px) {
  .faculty__section {
    background-size: cover;
    padding: 40px 20px;
  }
  .faculty__title {
    font-size: 2.8rem;
    line-height: 120%;
    margin: 0 auto;
  }
  .faculty__grid {
    margin-top: 40px;
    grid-template-columns: repeat(1, 280px);
    row-gap: 20px;
    justify-content: center;
  }
  .faculty__grid .grid_item {
    height: 150px !important;
    transition: all linear 0.4s;
    max-width: 280px;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .faculty__section {
    background-size: cover;
    padding: 40px 20px;
  }
  .faculty__title {
    font-size: 3rem;
    line-height: 120%;
    margin: 0 auto;
  }
  .faculty__grid {
    margin-top: 40px;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
  }
  .faculty__grid .grid_item {
    height: 170px !important;
    transition: all linear 0.4s;
    max-width: 400px;
  }
}
@media screen and (min-width: 769px) and (max-width: 991px) {
  .faculty__section {
    background-size: cover;
    padding: 40px 20px;
  }
  .faculty__title {
    font-size: 3.5rem;
    line-height: 120%;
  }
  .faculty__grid {
    margin-top: 40px;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
  }
  .faculty__grid .grid_item {
    height: 170px !important;
    transition: all linear 0.4s;
    max-width: 400px;
  }
}
@media screen and (min-width: 992px) and (max-width: 1100px) {
  .faculty__grid {
    margin-top: 40px;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }
  .faculty__grid .grid_item {
    height: 200px !important;
    transition: all linear 0.4s;
    max-width: 400px;
  }
}
</style>
<style>
@media screen and (min-width: 300px) and (max-width: 450px) {
  .grid_item svg {
  }
}
</style>
