<template>
  <section class="books__section">
    <div class="container">
      <div class="book__sidebar">
        <div class="search__bar">
          <label for="book__search">
            <input
              type="text"
              id="book__search"
              placeholder="Book searching ..."
              v-model="searchVal"
            />
            <icon-base name="search_icon" class="search__icon" />
          </label>
        </div>
        <div class="book__menu">
          <icon-base
            name="book_menu"
            class="book__menu_icon"
            @click="showMenu"
          />
        </div>

        <div class="left__sidebar" :class="[show ? 'active__leftside' : '']">
          <ul>
            <icon-base
              name="close_book"
              class="colse__book"
              @click="showMenu"
            />
            <li @click="filterBookIlmiy('ilmiy')">
              <icon-base name="bookshelf" class="bookshelf" />
              <span>Ilmiy adabiyotlar</span>
            </li>
            <li @click="filterBookOquv('oquv')">
              <icon-base name="bookshelf" class="bookshelf" />
              <span>O'quv adabiyotlari</span>
            </li>
            <li @click="filterBookPre('pre')">
              <icon-base name="bookshelf" class="bookshelf" />
              <span>Prezident asarlari</span>
            </li>
            <li @click="filterBookJahon('jahon')">
              <icon-base name="bookshelf" class="bookshelf" />
              <span>Jahon adabiyotlari</span>
            </li>
          </ul>
        </div>
        <!-- end of left sidebar -->
        <div class="right__sidebar">
          <div class="book__grid">
            <div v-for="item in bookData" :key="item.id" class="book__item">
              <BookCard :book_title="item.title" />
            </div>
          </div>
        </div>
        <!-- end of right-sidebar -->
      </div>
    </div>
  </section>
</template>
<script setup>
import BookCard from "@/components/cards/BookCard.vue";
// import bookData from "@/fake-data/librery-data.js";
import IconBase from "@/components/IconBase.vue";
import { ref, computed } from "vue";
const show = ref(false);
const searchVal = ref("");
const bookData = ref([
  {
    id: Math.random() * 1000,
    title: "Johon Doe",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "jahon",
  },
  {
    id: Math.random() * 1000,
    title: "Joh Erik",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "ilmiy",
  },
  {
    id: Math.random() * 1000,
    title: "Mike Mikel",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "pre",
  },
  {
    id: Math.random() * 1000,
    title: "Math",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "oquv",
  },
  {
    id: Math.random() * 1000,
    title: "Rich dad and Poor dad",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "jahon",
  },
  {
    id: Math.random() * 1000,
    title: "Js",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "jahon",
  },
  {
    id: Math.random() * 1000,
    title: "React JS",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "oquv",
  },
  {
    id: Math.random() * 1000,
    title: "Python",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "ilmiy",
  },
  {
    id: Math.random() * 1000,
    title: "Angular",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "oquv",
  },
  {
    id: Math.random() * 1000,
    title: "Vue JS",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "pre",
  },
  {
    id: Math.random() * 1000,
    title: "Go",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "pre",
  },
  {
    id: Math.random() * 1000,
    title: "Johon Doe",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "oquv",
  },
  {
    id: Math.random() * 1000,
    title: "HTML",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "ilmiy",
  },
  {
    id: Math.random() * 1000,
    title: "CSS3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "oquv",
  },
  {
    id: Math.random() * 1000,
    title: "Tailwindcss",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "ilmiy",
  },
]);
const showMenu = () => {
  show.value = !show.value;
};
const filterBookIlmiy = (id) => {
  let newArr = bookData.value.filter((item) => item.filter == id);
  bookData.value = newArr;
  show.value = false;
};
bookData.value = bookData.value;
const filterBookOquv = (id) => {
  let newArr = bookData.value.filter((item) => item.filter == id);
  bookData.value = newArr;
  show.value = false;
};
const filterBookJahon = (id) => {
  let newArr = bookData.value.filter((item) => item.filter == id);
  bookData.value = newArr;
  show.value = false;
};
const filterBookPre = (id) => {
  let newArr = bookData.value.filter((item) => item.filter == id);
  bookData.value = newArr;
  show.value = false;
};

const ddd = computed(() => {
  if (!searchVal.value) {
    return bookData.value;
  } else {
    let searched = bookData.value.filter((item) =>
      item.title.toLowerCase().includes(searchVal.value.toLowerCase())
    );
  }
});
</script>
<style scoped>
.books__section {
  padding-top: 8rem;
}
.book__sidebar {
  padding-top: 1rem;
  display: flex;
  max-height: 700px;
  overflow-y: scroll;
  min-height: 600px;
  gap: 1.5rem;
  position: relative;
}
.book__sidebar::-webkit-scrollbar {
  width: 8px;
}
.book__sidebar::-webkit-scrollbar-track {
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}
.book__sidebar::-webkit-scrollbar-thumb {
  background: var(--main-blue);
  border-radius: 10px;
}
.search__bar {
  border: 1px solid #999;
  overflow: hidden;
  position: absolute;
  left: 50%;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  padding: 1rem 1.5rem;
  transform: translateX(-50%);
  width: 300px;
  top: 2rem;
}
.search__bar label {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.search__bar input {
  flex-grow: 1;
  background: none;
  font-size: 1.4rem;
  font-weight: 600;
}
.search__bar input::placeholder {
  font-style: italic;
}
.search__bar i {
  cursor: pointer;
}
.book__menu {
  width: max-content;
  position: fixed;
  top: 10.5rem;
  left: 2.5rem;
  display: none;
  cursor: pointer;
}
.left__sidebar {
  width: 250px;
  background: var(--main-blue);
  position: sticky;
  top: 0;
  left: 0;
  bottom: 0;
  padding-top: 2rem;
  padding-left: 1rem;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  transition: all linear 0.4s;
}
.left__sidebar ul {
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1.5rem;
}
.left__sidebar li {
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all linear 0.4s;
  padding: 10px 0 10px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all linear 0.4s;
}
.left__sidebar li:hover {
  background: rgba(255, 255, 255, 0.9);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.left__sidebar span {
  color: #fff;
  font-size: 1.5rem;
  transition: all linear 0.4s;
  font-weight: 600;
}
.left__sidebar li:hover span {
  color: var(--main-blue);
}
/*  right side bar */
.right__sidebar {
  width: calc(100%-250px);
  padding-top: 6rem;
}
.book__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  width: max-content;
  margin: 0 auto;
}
.colse__book {
  display: none;
}
.book__item:nth-child(5) > div {
  width: 180px;
  height: 264px;
  overflow: hidden;
}

@media screen and (min-width: 300px) and (max-width: 576px) {
  .books__section {
    padding-top: 8rem;
  }
  .book__sidebar {
    flex-direction: column;
    overflow-x: hidden;
  }
  .book__sidebar::-webkit-scrollbar {
    width: 5px;
  }
  .search__bar {
    width: 250px;
    left: 53%;
  }
  .right__sidebar {
    width: 100%;
  }
  .book__grid {
    grid-template-columns: repeat(1, 290px);
    gap: 2rem;
  }
  .book__item {
    margin: 0 auto;
  }

  .left__sidebar {
    display: block;
    position: fixed;
    width: 65%;
    top: 8rem;
    padding-top: 20px;
    clip-path: polygon(0 0, 0 0, 0 99%, 0 99%);
    z-index: 40;
  }
  .active__leftside {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  .book__menu {
    display: block;
    top: 95px;
    left: 13px;
  }
  .left__sidebar ul {
    gap: 1rem;
  }
  .left__sidebar li {
    gap: 8px;
    padding: 8px 0 8px 8px;
    border-radius: 5px;
    cursor: pointer;
    transition: all linear 0.4s;
  }
  .colse__book {
    display: block;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .books__section {
    padding-top: 8rem;
  }
  .book__sidebar {
    flex-direction: column;
  }
  .book__sidebar::-webkit-scrollbar {
    width: 5px;
  }
  .right__sidebar {
    width: 100%;
  }
  .book__grid {
    grid-template-columns: repeat(2, 200px);
    row-gap: 2.5rem;
  }
  .book__item {
    margin: 0 auto;
    width: max-content;
  }
  .left__sidebar {
    display: block;
    position: fixed;
    width: 35%;
    top: 9.8rem;
    padding-top: 20px;
    clip-path: polygon(0 0, 0 0, 0 99%, 0 99%);
    z-index: 40;
  }
  .active__leftside {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  .book__menu {
    display: block;
  }
  .left__sidebar ul {
    gap: 1rem;
  }
  .left__sidebar li {
    gap: 8px;
    padding: 8px 0 8px 8px;
    border-radius: 5px;
    cursor: pointer;
    transition: all linear 0.4s;
  }
  .colse__book {
    display: block;
  }
}
@media screen and (min-width: 769px) and (max-width: 899px) {
  .books__section {
    padding-top: 9rem;
  }
  .container {
    padding-left: 0 !important;
  }
  .book__sidebar {
    flex-direction: row;
  }
  .search__bar {
    left: 60%;
    transform: translateX(-50%);
  }
  .book__sidebar::-webkit-scrollbar {
    width: 5px;
  }
  .right__sidebar {
    width: max-content;
    margin-left: 2rem;
  }
  .book__grid {
    grid-template-columns: repeat(2, 220px);
    gap: 1rem;
  }
  .book__item {
    margin: 0 auto;
    width: max-content;
  }
  .book__item div {
    padding: 1rem 0.5rem;
  }
}
@media screen and (min-width: 900px) and (max-width: 991px) {
  .books__section {
    padding-top: 9rem;
  }
  .container {
    padding-left: 0 !important;
  }
  .book__sidebar {
    flex-direction: row;
  }
  .search__bar {
    left: 55%;
    transform: translateX(-50%);
  }
  .book__sidebar::-webkit-scrollbar {
    width: 5px;
  }
  .right__sidebar {
    width: 100%;
  }
  .book__grid {
    grid-template-columns: repeat(3, 220px);
    gap: 1rem;
  }
  .book__item {
    width: max-content;
  }
  .book__item div {
    padding: 1rem 0.6rem;
  }
}
@media screen and (min-width: 992px) and (max-width: 1100px) {
  .books__section {
    padding-top: 9rem;
  }
  .container {
    padding-left: 0 !important;
  }
  .book__sidebar {
    flex-direction: row;
  }
  .search__bar {
    left: 60%;
    transform: translateX(-50%);
  }
  .book__sidebar::-webkit-scrollbar {
    width: 5px;
  }
  .right__sidebar {
    width: 90%;
  }
  .left__sidebar {
    width: 30%;
  }
  .book__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .book__item div {
    padding: 1rem 0.6rem;
  }
}
@media screen and (min-width: 1101px) and (max-width: 1250px) {
  .books__section {
    padding-top: 9rem;
  }
  .container {
    padding-left: 0 !important;
  }
  .book__sidebar {
    flex-direction: row;
  }
  .search__bar {
    left: 55%;
    transform: translateX(-50%);
  }
  .book__sidebar::-webkit-scrollbar {
    width: 5px;
  }
  .right__sidebar {
    width: 100%;
  }
  .left__sidebar {
    width: 30%;
  }
  .book__grid {
    grid-template-columns: repeat(4, 220px);
    gap: 1.3rem;
  }
  .book__item {
    width: max-content;
    margin: 0 auto;
  }
  .book__item div {
    padding: 1rem 0.5rem;
  }
  .book__item div img {
    width: 100px !important;
  }
}
@media screen and (min-width: 1251px) and (max-width: 1399px) {
  .container {
    padding-left: 0 !important;
  }
}
</style>
<style>
.bookshelf svg path {
  fill: rgb(230, 224, 224);
  transition: all linear 0.4s;
}
.search__icon svg {
  width: 18px;
}
.bookshelf svg {
  width: 30px;
}
.colse__book svg {
  width: 13px;
  position: absolute;
  right: 20px;
  top: -110px;
  cursor: pointer;
}
.colse__book svg path {
  fill: #fff;
}
.book__menu_icon svg {
  width: 20px;
}
.book__menu_icon svg path {
  fill: #3d639d;
}
.left__sidebar li:hover .bookshelf svg path {
  fill: #3d639d;
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .bookshelf svg {
    width: 25px;
  }
}
</style>
