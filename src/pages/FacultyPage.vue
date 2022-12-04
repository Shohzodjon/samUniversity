<template>
  <section class="faculty__page">
    <div class="container">
      <h2 class="faculty__title">Yangiliklar</h2>
      <div class="faculty__slug">
        <h3 class="slug__title">Davolash ishi</h3>
        <div class="slug__flex">
          <img :src="img" alt="img" />
          <div class="slug__block">
            <p><b> Ta‘lim yo‘nalishi(Mutaxassislik):</b> Davolash ishi</p>
            <p>
              <b> Ixtisoslik(Kvalifikatsiya):</b> yoʼnalishlar boʼyicha
              meditsina doktori (davolovchi vrach)
            </p>
            <p><b>O‘qish muddati:</b> 6 yil</p>
            <p>Ta‘lim shakli: kunduzgi</p>
            <p>Fakultet tarkibiga 17 ta kafedra kiradi:</p>
            <ul>
              <li>1-son ichki kasalliklar kafedrasi</li>
              <li>2-son ichki kasalliklar kafedrasi</li>
              <li>4-son ichki kasalliklar kafedrasi</li>
            </ul>
          </div>
        </div>

        <p class="slug__desc">
          Davolash fakulteti oʼz faoliyatini Samarqand Davlat meditsina
          instituti tashkil topgan vaqt - 1930 yildan boshlagan va 1963 yilgacha
          institutning yagona fakulteti boʼlgan. Fakultetning asosiy kafedralari
          1930-1935 yillarda tashkil topgan. Institutga 1947 yil ikkinchi, 1965
          yilda birinchi kategoriyali oliy oʼquv yurti darajasini berilishi
          munosabati bilan yangi kafedra va kurslar tashkil etilgan. Shunga
          koʼra, har bir kafedra malakali mutaxassislar tayyorlash boʼyicha boy
          tarix va bebaxo tajribalarga egadir. Fakultet bitiruvchilaridan
          boʼlgan: I. K. Musabaev (Oʼzbekiston fanlar akademiyasi Аkademigi,
          RMFА muxbir - aʼzosi, Oʼzbekiston Davlatining Beruniy nomidagi ilmiy
          mukofoti laureati, OʼzR. da Xizmat koʼrsatgan vrach, OʼzR. da Xizmat
          koʼrsatgan fan arbobi, meditsina fanlari doktori, professor), U. O.
          Oripov (Olim xirurg, meditsina fanlari doktori, professor. Oʼz SSR da
          Xizmat koʼrsatgan vrach, OʼzSSR da Xizmat koʼrsatgan fan arbobi. UzSSR
          FА va i Nyu – York akademiyasi Аkademigi. Zimmelveys nomidagi
          Budapesht meditsina universitetining faxriy doktori), M. G. Gulyamov
          (SSSR va Rossiya meditsina fanlari Аkademiyasi muxbir – aʼzosi, Аbu
          Аli ibn Sino nomidagi Davlat mukofoti laureati), R. M. Xaitov
          (Immunologiya sohasidagi sovet ittifoqi va Rossiyaning atoqli
          mutaxassisi. RFА va RMFА Аkademigi, meditsina fanlari doktori,
          professor, Rossiya FMBА immunologiya instituti direktori) kabi atoqli
          olimlar va institutlar rektorlari, xamda sogʼliqni saqlash tizimida
          faoliyat koʼrsatgan koʼplab nufuzli tashkilotchilari va boshqarma
          rahbarlari bilan faxirlanadi.
        </p>
      </div>

      <h2 class="faculty__info">Davomi ...</h2>

      <div class="slug__grid">
        <faculty-card
          v-for="i in data"
          :key="i.id"
          :icon_name="i.icon"
          :title="i.title"
          class="grid__item"
        />
        <div class="last__item"><register-btn link="/#div" /></div>
      </div>
    </div>
  </section>
</template>
<script setup>
import FacultyCard from "@/components/cards/FacultyCard.vue";
import facultyData from "@/fake-data/faculty.js";
import { reactive } from "@vue/reactivity";
import RegisterBtn from "@/components/cards/RegisterBtn.vue";
import img from "@/assets/images/nursery.png";
let data = reactive([]);

data = facultyData.slice(1, 9);
console.log(data);
</script>
<style scoped>
.faculty__page {
  padding: 7.3rem 0 8rem;
}

.faculty__title {
  font-weight: 700;
  font-size: 4rem;
  line-height: 140%;
  color: #000000;
  position: relative;
  width: max-content;
  margin-bottom: 5rem;
}
.faculty__title::after {
  content: "";
  width: 100%;
  height: 2px;
  background: #fece02;
  position: absolute;
  bottom: -4px;
  left: 0;
  display: block;
}

.slug__title {
  font-weight: 600;
  font-size: 3.8rem;
  line-height: 120%;
  color: #000000;
  margin-bottom: 3rem;
}
.slug__flex {
  display: flex;
  gap: 25px;
}
.slug__flex img {
  max-width: 529px;
  max-height: 405px;
}
.slug__block {
  font-weight: 400;
  font-size: 2.8rem;
  line-height: 140%;
  color: #000000;
  position: relative;
}
.slug__block::before {
  content: "";
  width: 4px;
  background: #fece02;
  height: 100%;
  position: absolute;
  left: -5px;
  top: 0;
  display: block;
}
.slug__desc {
  font-weight: 400;
  font-size: 2.8rem;
  line-height: 140%;
  color: #000000;
  margin-top: 20px;
}
.faculty__info {
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 5.5rem;
  font-size: 4rem;
  line-height: 140%;
  color: #000000;
  position: relative;
  width: max-content;
}
.faculty__info::after {
  content: "";
  width: 100%;
  height: 2px;
  background: #fece02;
  position: absolute;
  bottom: -4px;
  left: 0;
  display: block;
}
.slug__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}
.grid__item {
  border: 1px solid rgba(95, 95, 95, 0.5);
  cursor: pointer;
}

.last__item {
  display: flex;
  justify-content: end;
  align-items: flex-end;
}

@media screen and (min-width: 370px) and (max-width: 576px) {
  .faculty__page {
    padding: 5.3rem 0 6rem;
  }
  .faculty__title {
    font-size: 2.8rem;
    line-height: 140%;
    margin: 0 auto;
    margin-bottom: 5rem;
  }
  .slug__title {
    font-size: 2.5rem;
    line-height: 120%;
    margin-bottom: 3rem;
  }
  .slug__flex {
    flex-direction: column;
    gap: 25px;
  }
  .slug__block::before {
    display: none;
  }
  .slug__block {
    font-size: 1.8rem;
    line-height: 130%;
  }
  .slug__desc {
    font-size: 1.8rem;
    line-height: 130%;
    margin-top: 20px;
  }
  .faculty__info {
    font-size: 2.8rem;
    margin: 2rem auto 5rem;
  }
  .slug__grid {
    grid-template-columns: repeat(1, 350px);
    gap: 3rem;
    justify-content: center;
  }
  .grid__item {
    max-width: 400px;
  }
}

@media screen and (min-width: 577px) and (max-width: 768px) {
  .faculty__page {
    padding: 6.3rem 0 7rem;
  }
  .faculty__title {
    font-size: 3rem;
    line-height: 140%;
    margin: 0 auto;
    margin-bottom: 5rem;
  }
  .slug__title {
    font-size: 2.8rem;
    line-height: 120%;
    margin-bottom: 3rem;
  }
  .slug__flex {
    flex-direction: column;
    gap: 25px;
  }
  .slug__block::before {
    display: none;
  }
  .slug__block {
    font-size: 1.8rem;
    line-height: 140%;
  }
  .slug__desc {
    font-size: 1.8rem;
    line-height: 140%;
    margin-top: 20px;
  }
  .faculty__info {
    font-size: 3rem;
    margin: 2rem auto 5rem;
  }
  .slug__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    justify-content: center;
  }
  .grid__item {
    max-width: 400px;
  }
}
@media screen and (min-width: 769px) and (max-width: 991px) {
  .faculty__page {
    padding: 7.3rem 0 8rem;
  }
  .faculty__title {
    font-size: 3.5rem;
    line-height: 140%;
    margin-bottom: 5rem;
  }
  .slug__title {
    font-size: 3.5rem;
    line-height: 130%;
    margin-bottom: 3rem;
  }
  .slug__flex {
    flex-direction: row;
    gap: 25px;
  }
  .slug__block::before {
    display: block;
    left: -10px;
  }
  .slug__block {
    font-size: 2rem;
    line-height: 140%;
  }
  .slug__desc {
    font-size: 2rem;
    line-height: 140%;
    margin-top: 20px;
  }
  .faculty__info {
    font-size: 3.5rem;
    margin: 2rem 0 5rem;
  }
  .slug__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    justify-content: center;
  }
}
</style>
