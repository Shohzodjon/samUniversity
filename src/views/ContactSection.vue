<template>
  <section class="contact__section">
    <div class="contact__wrapp">
      <!-- <h2 class="contact__title">{{ $t("register") }}</h2> -->
      <div class="conatact__img">
        <div class="contact__info">
          <div class="contact__btns">
            <!-- <button class="contact__btn">
              <a href="#registr">{{ $t("register") }}</a>
            </button>
            <button class="contact__btn" @click="handleSubmitOne">
              {{ $t("contact") }}
            </button> -->
          </div>
        </div>
      </div>
      <!-- end  -->
    </div>
    <div
      class="contact__modal-one"
      :class="[openModalOne ? 'active__modal_one' : '']"
    >
      <div class="contact__us">
        <h2>{{ $t("contact") }}</h2>
        <form @submit.prevent="contactSubmit">
          <input
            type="text"
            placeholder="First name ..."
            v-model="contactData.user_name_val"
            :class="[contactData.user__name_check ? '' : 'error_warm']"
            class="contact__us-input"
          />
          <MazPhoneNumberInput
            v-model="contactData.phone_number"
            color="info"
            default-country-code="UZ"
            :only-countries="['UZ']"
            @update="results = $event"
            :success="results?.isValid"
            size="lg"
            style="width: 100%"
            :translations="{
              placeholder: 'Phone number',
              autocomplate: 'off',
            }"
          />
          <!-- class="contact__us-input" -->
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message ..."
          ></textarea>
          <button class="contact__submit">Submit</button>
        </form>
      </div>
    </div>

    <div class="registration" id="registr">
      <span class="circle-blue"></span>
      <span class="circle-yellow"></span>

      <form class="registration__form" @submit.prevent="handleSubmit">
        <ul class="registration__list">
          <li>
            <h3>{{ $t("register") }}</h3>
          </li>
          <li>
            <input
              type="text"
              :placeholder="$t('user_name')"
              class="user__name"
              v-model="userName.name"
              :class="[userName.checkName ? '' : 'error_warm']"
            />
            <input
              type="text"
              :placeholder="$t('user_lastname')"
              class="user__lastname"
              v-model="lastName.last_name"
              :class="[lastName.checkLastName ? '' : 'error_warm']"
            />
          </li>
          <li>
            <MazPhoneNumberInput
              v-model="userNumber.number"
              color="info"
              default-country-code="UZ"
              :only-countries="['UZ']"
              @update="results = $event"
              :success="results?.isValid"
              size="lg"
              style="width: 100%"
              :translations="{
                placeholder: 'Phone number',
                autocomplate: 'off',
              }"
            />

            <input
              type="email"
              placeholder="Email..."
              class="user__email"
              v-model="userEmail.email"
              :class="[userEmail.checkEmail ? '' : 'error_warm']"
            />
          </li>
          <li>
            <div
              class="choose__education"
              :class="[checkEdu ? '' : 'error_warm']"
            >
              <label for="type__education">
                <input
                  type="text"
                  class="education__value"
                  ref="educationInput"
                  :placeholder="$t('type_edu')"
                  readonly
                />
                <IconBase
                  name="down_icon"
                  class="down__icon"
                  :class="[chooseEducation ? 'open__modal' : '']"
                  @click="handleToggle"
                />
              </label>
              <div
                class="choose__education-list"
                :class="[chooseEducation ? 'open__education__list' : '']"
              >
                <span @click="handleToggle">Kunduzgi</span>
                <span @click="handleToggle">Kechgi</span>
              </div>
            </div>
            <div
              class="choose__faculty"
              :class="[checkFacul ? '' : 'error_warm']"
            >
              <label
                for="faculty__type"
                :class="[checkFacul ? '' : 'error_warm']"
              >
                <input
                  type="text"
                  id="faculty__type"
                  class="faculty__value"
                  ref="facultyInput"
                  :placeholder="$t('faculty')"
                  readonly
                />
                <IconBase
                  name="down_icon"
                  class="down__icon"
                  :class="[chooseFaculty ? 'open__modal' : '']"
                  @click="handleToggleTwo"
                />
              </label>
              <div
                class="choose__faculty-list"
                :class="[chooseFaculty ? 'faculty__list-active' : '']"
              >
                <span
                  v-for="item in faculties"
                  :key="item.id"
                  @click="handleToggleTwo"
                >
                  {{ item.faculty }}
                </span>
              </div>
            </div>
          </li>
          <li>
            <div class="atetsat__btn">
              <label for="fileId">
                <IconBase name="file_icon" />
                <span>Atestatsiyani yuklash</span>
              </label>
              <input
                type="file"
                name="attachment[]"
                id="fileId"
                @change="onFileChange"
              />
              <span class="file__name">{{ fileName1 }}</span>
            </div>
            <div class="atetsat__btn">
              <label for="fileId2">
                <IconBase name="file_icon" />
                <span>Pasport yuklash</span>
              </label>
              <input
                type="file"
                name="attachment[]"
                id="fileId2"
                @change="onFileChangeTwo"
              />
              <span class="file__name">{{ fileName2 }}</span>
            </div>
          </li>
          <li>
            <button class="register__btn" type="submit">
              {{ $t("register") }}
            </button>
            <button class="contact__btn" type="button" @click="handleSubmitOne">
              {{ $t("contact") }}
            </button>
          </li>
        </ul>
      </form>
    </div>
    <div
      class="contact__modal"
      :class="[openModal ? 'active__contact__modal' : '']"
    >
      <div class="success__wrap">
        <div class="success__modal">
          <h2>Successfully Registration</h2>
        </div>
        <div class="success__progress">
          <span
            class="progress"
            :class="[openModal ? 'active_progress' : '']"
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import contactImg from "@/assets/images/contact.jpg";
import logo from "@/assets/images/logo.svg";
import { RouterLink } from "vue-router";
import IconBase from "@/components/IconBase.vue";
import { reactive, ref } from "@vue/reactivity";
const educationInput = ref(null);
const facultyInput = ref(null);
const chooseEducation = ref(false);
const chooseFaculty = ref(false);
const fileName1 = ref("");
const fileName2 = ref("");
const userName = reactive({
  name: "",
  checkName: true,
});
const lastName = reactive({
  last_name: "",
  checkLastName: true,
});
const userEmail = reactive({
  email: "",
  checkEmail: true,
});
const userNumber = reactive({
  number: "",
  checkNum: true,
});
const checkEdu = ref(true);
const checkFacul = ref(true);
const openModal = ref(false);
const openModalOne = ref(false);
const contactData = reactive({
  user_name_val: "",
  user__name_check: false,
});
const handleSubmitOne = () => {
  openModalOne.value = true;
};
const contactSubmit = () => {
  let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  openModalOne.value = false;
};
const handleToggle = (e) => {
  chooseEducation.value = !chooseEducation.value;
  const targetEl = e.target;
  if (targetEl.tagName === "SPAN") {
    educationInput.value.value = targetEl.textContent;
  }
};
const handleToggleTwo = (e) => {
  chooseFaculty.value = !chooseFaculty.value;
  const targetEl = e.target;
  if (targetEl.tagName === "SPAN") {
    facultyInput.value.value = targetEl.textContent;
  }
};
const onFileChange = (event) => {
  let fileData = event.target.files[0].name;
  fileName1.value = fileData;
};
const onFileChangeTwo = (event) => {
  let fileData = event.target.files[0].name;
  fileName2.value = fileData;
};
const handleSubmit = () => {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (userName.name.trim() === "") {
    userName.checkName = false;
  } else {
    userName.checkName = true;
  }
  if (lastName.last_name.trim() === "") {
    lastName.checkLastName = false;
  } else {
    lastName.checkLastName = true;
  }
  if (userEmail.email.match(mailformat)) {
    userEmail.checkEmail = true;
  } else {
    userEmail.checkEmail = false;
  }
  if (educationInput.value.value === "") {
    checkEdu.value = false;
  } else {
    checkEdu.value = true;
  }
  if (facultyInput.value.value === "") {
    checkFacul.value = false;
  } else {
    checkFacul.value = true;
  }
  if (re.test(userNumber.number)) {
    userNumber.checkNum = true;
  } else {
    userNumber.checkNum = false;
  }

  if (
    userName.checkName === true &&
    lastName.checkLastName === true &&
    userEmail.checkEmail === true &&
    checkEdu.value === true &&
    checkFacul.value === true &&
    userNumber.checkNum === true
  ) {
    userName.name = "";
    lastName.last_name = "";
    userEmail.email = "";
    educationInput.value.value = "";
    facultyInput.value.value = "";
    userNumber.number = "";
    openModal.value = true;
    setTimeout(() => {
      openModal.value = false;
    }, 3000);
  }
};

const faculties = [
  {
    id: 1,
    faculty: "Tarix (mamlakatlar va yo’nalishlar bo’yicha) ",
  },
  {
    id: 2,
    faculty: "Psixologiya (faoliyat turlari bo’yicha) ",
  },
  {
    id: 3,
    faculty: "Boshlang’ich ta’lim ",
  },

  {
    id: 4,
    faculty: "Maktabgacha ta’lim",
  },
  {
    id: 6,
    faculty: "Filologiya va tillarni o’qitish: o’zbek tili ",
  },
  {
    id: 7,
    faculty: "Filologiya va tillarni o’qitish: rus tili ",
  },
];
</script>
<style scoped>
.contact__section {
  padding-top: 0rem;
}
.contact__wrapp {
  background: url("@/assets/images/contact.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 14rem;
  height: 700px;
}
.contact__modal {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  opacity: 0;
  transition: all 0.4s linear;
}
.active__contact__modal {
  transform: scale(1);
  opacity: 1;
}
.success__wrap {
  width: max-content;
}
.success__modal {
  background: #fff;
  padding: 14px;
  border-radius: 10px;
}
.success__modal h2 {
  font-size: 2rem;
  color: green;
}
.success__progress {
  width: 100%;
  height: 6px;
  border: 1px solid #fff;
  margin-top: 1.5rem;
  border-radius: 2px;
  display: flex;
}
.progress {
  width: 0%;
  height: 100%;
  display: inline-block;
  background: linear-gradient(90deg, #e73b50, #d430d4);
  transition: all linear 3s;
}

.active_progress {
  width: 100%;
}
/* contact us modal */
.contact__modal-one {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  opacity: 0;
  transition: all 0.4s linear;
}
.active__modal_one {
  transform: scale(1);
  opacity: 1;
}
.contact__us {
  min-width: 600px;
}
.contact__us h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: #fff;
}
.contact__us form {
  width: 80%;
  margin: 0 auto;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  padding: 2rem;
  border-radius: 10px;
}
.contact__us .contact__us-input,
.contact__us textarea {
  flex-grow: 1;
  border: 1px solid rgba(196, 191, 191, 0.5);
  padding: 10px 12px;
  border-radius: 4px;
  font-size: 1.4rem;
}
.contact__us textarea {
  outline: none;
}
.contact__us input:focus,
.contact__us textarea:focus {
  border-color: rgb(30, 186, 197);
}
.contact__submit {
  background: var(--main-blue);
  padding: 10px 18px;
  width: max-content;
  color: #fff;
  border-radius: 6px;
  align-self: flex-end;
  font-size: 1.3rem;
}

.contact__title {
  font-weight: 600;
  font-size: 4rem;
  line-height: 140%;
  color: #fff;
  position: relative;
  width: max-content;
  margin-bottom: 3rem;
}
.contact__title::after {
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--second-blue);
  border-radius: 4px;
  content: "";
  display: block;
}
.conatact__img {
  max-width: 850px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
}

.conatact__img img {
  width: 100%;
  border-radius: 12px;
}
.contact__info {
  width: 100%;
  height: 100%;
  height: 500px;
  padding: 3rem 2rem;
}
.contact__info-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.contact__info-header img {
  width: 100px !important;
  height: 100px !important;
}
.contact__info-header h2 {
  color: #000;
  font-size: 1.3rem;
  line-height: 150%;
  font-weight: 700;
  position: relative;
}
.logo__title::before {
  content: "";
  width: 2px;
  height: 100%;
  background: rgb(207, 172, 4);
  position: absolute;
  top: 0;
  left: -7px;
  display: block;
}
.contact__btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  margin-top: 10rem;
}
.contact__btn {
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  font-weight: 400;
  padding: 8px 14px;
  font-size: 1.3rem;
  border-radius: 6px;
  background: var(--main-blue);
  color: #fff;
  transition: all linear 0.4s;
}
.contact__btn:hover {
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
}

.registration {
  max-width: 100%;
  margin: 3rem auto;
  padding: 5rem 7rem;
  position: relative;
  min-height: 350px;
  overflow: hidden;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
}

.circle-blue {
  width: 300px;
  height: 250px;
  display: block;
  background: #5b87e57c;
  position: absolute;
  top: 3%;
  left: 3%;
  border-radius: 50%;
  filter: blur(22px);
  z-index: 1;
}
.circle-yellow {
  width: 300px;
  height: 250px;
  display: block;
  background: rgba(255, 95, 109, 0.5);
  position: absolute;
  bottom: -1%;
  right: -1%;
  border-radius: 50%;
  filter: blur(20px);
  z-index: 1;
}

.registration::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.6),
    rgba(237, 238, 222, 0.6)
  );
  filter: blur(10px);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}
.registration__form {
  border-radius: 12px;
  max-width: 850px;
  margin: 0 auto;
  position: relative;
  z-index: 5;
  border: 1px solid #999;
  padding: 1rem 2.5rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.registration__form h3 {
  text-align: center;
  font-size: 1.6rem;
  margin: 1rem 0;
  color: #777;
  letter-spacing: 0.06rem;
  text-transform: uppercase;
}
.registration__list {
  margin: 2rem 0;
}
.registration__list li:nth-child(1) {
  display: block;
}
.registration__list li {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}
.registration__list li:nth-child(3),
.registration__list li:nth-child(5) {
  margin: 2rem 0;
}
.user__name,
.user__number,
.user__email,
.user__lastname,
.choose__education,
.choose__faculty {
  width: 100%;
  padding: 8px;
  border: 1px solid rgba(153, 153, 153, 0.5);
  font-size: 1.4rem;
  border-radius: 4px;
}

.error_warm {
  border-color: red;
}
.user__lastname::placeholder,
.user__name::placeholder,
.user__email::placeholder,
.user__number::placeholder {
  color: #444;
}
.faculty__value,
.education__value {
  background: none;
  width: 100%;
  height: 100%;
  padding: 6px 8px;
}
.user__lastname:focus,
.user__email:focus,
.user__number:focus,
.user__name:focus {
  border-color: rgb(30, 186, 197);
}
.choose__education {
  padding: 0;
  padding-bottom: 0px;
}
.choose__education label {
  display: flex;
  align-items: center;
  padding-right: 3px;
}
.choose__education-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 0;
  overflow: hidden;
  transition: all 0.4s linear;
}
.open__education__list {
  height: 63px;
}

.choose__education-list span {
  padding: 4px 8px;
  transition: all linear 0.4s;
  border-bottom: 1px solid rgba(153, 153, 153, 0.5);
}
.choose__education-list span:last-child {
  border-bottom: none;
}
.choose__education-list span:hover {
  background: rgba(255, 95, 108, 0.329);
  cursor: pointer;
}
/*  choose faculty */
.choose__faculty {
  padding: 0;
  padding-bottom: 0;
}
.choose__faculty label {
  display: flex;
  align-items: center;
}
.choose__faculty-list {
  display: flex;
  flex-direction: column;
  gap: 3px;
  overflow: hidden;
  height: 0;
  transition: all 0.4s linear;
}
.faculty__list-active {
  height: 155px;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(86, 210, 219);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: var(--main-blue);
  border-radius: 10px;
}

.choose__faculty-list span {
  padding: 4px 8px;
  transition: all linear 0.4s;
  border-bottom: 1px solid rgba(153, 153, 153, 0.5);
}
.choose__faculty-list span:last-child {
  border-bottom: none;
}

.choose__faculty-list span:hover {
  background: rgba(255, 95, 108, 0.329);
  cursor: pointer;
}

/*  upload file */
#fileId,
#fileId2 {
  display: none;
}
.file__name {
  font-size: 1.1rem;
  margin-left: 5px;
}
.atetsat__btn {
  display: flex;
  align-items: center;
  width: 50%;
}
.atetsat__btn label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1.4rem;
  border: 1px solid #999;
  border-radius: 6px;
  padding: 4px 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all linear 0.4s;
}
.atetsat__btn label:hover {
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
}
.register__btn {
  padding: 8px 14px;
  background: var(--main-blue);
  width: max-content;
  font-size: 1.3rem;
  border-radius: 6px;
  align-self: flex-start;
  color: #fff;
  transition: all 0.4s linear;
  position: relative;
  z-index: 20;
}
.register__btn:hover {
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}
@media screen and (min-width: 300px) and (max-width: 350px) {
  .contact__btns {
    padding: 0 1.5rem;
    margin-top: 12rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
}
@media screen and (min-width: 300px) and (max-width: 576px) {
  .success__modal {
    padding: 18px 10px;
  }
  .contact__wrapp {
    background-size: 160% 100%;
  }
  .success__modal h2 {
    font-size: 1.7rem;
  }
  .contact__us {
    min-width: 90%;
  }
  .contact__us form {
    width: 96%;
    margin: 0 auto;
  }
  .contact__title {
    font-size: 2.8rem;
    width: max-content;
    margin: 0 auto;
    margin-bottom: 3rem;
  }
  .conatact__img {
    min-height: 300px;
  }
  .conatact__img img {
    height: 400px;
  }
  .contact__info {
    padding: 1rem;
  }
  .contact__info-header {
    padding-top: 2rem;
    gap: 1rem;
    align-items: flex-start;
    height: max-content;
  }
  .contact__info-header img {
    width: 60px;
    height: 60px;
  }
  .contact__info-header h2 {
    font-size: 1.2rem;
  }

  .contact__btn {
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 6px 12px;
    font-size: 1.8rem;
  }
  /* registration */
  .registration {
    max-width: 800px;
    padding: 2rem;
    border-radius: 12px;
    min-height: 350px;
  }
  .registration__form {
    padding: 1.5rem;
  }
  .registration__list li {
    flex-direction: column;
    gap: 1rem;
  }
  .user__name,
  .user__number,
  .user__email,
  .user__lastname {
    width: 100%;
    padding: 8px;
    font-size: 1.4rem;
    border-radius: 4px;
  }
  .choose__education,
  .choose__faculty {
    width: 100%;
    padding: 2px;
    font-size: 1.4rem;
    border-radius: 4px;
  }

  .atetsat__btn {
    display: flex;
    width: 100%;
  }
  .atetsat__btn label {
    width: 170px;
  }
}

@media screen and (min-width: 577px) and (max-width: 768px) {
  .contact__title {
    font-size: 2.8rem;
    width: max-content;
    margin: 0 auto;
    margin-bottom: 3rem;
  }
  .contact__wrapp {
    background-size: 140% 100%;
  }
  .conatact__img {
    min-height: 300px;
  }
  .conatact__img img {
    height: 400px;
  }
  .contact__info {
    padding: 1rem;
  }
  .contact__info-header {
    padding-top: 2rem;
    gap: 1rem;
    align-items: flex-start;
    height: max-content;
  }
  .contact__info-header img {
    width: 60px;
    height: 60px;
  }
  .contact__info-header h2 {
    font-size: 1.2rem;
  }
  .contact__btns {
    padding: 0 1.5rem;
    margin-top: 12rem;
  }
  .contact__btn {
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 6px 12px;
    font-size: 1.8rem;
  }
  /* registration */
  .registration {
    max-width: 800px;
    padding: 4rem;
    border-radius: 12px;
    min-height: 350px;
  }
  .registration__form {
    padding: 2.5rem;
  }
  .registration__list li {
    flex-direction: column;
    gap: 1rem;
  }
  .user__name,
  .user__number,
  .user__email,
  .user__lastname {
    width: 100%;
    padding: 8px;
    font-size: 1.4rem;
    border-radius: 4px;
  }
  .choose__education,
  .choose__faculty {
    width: 100%;
    padding: 2px;
    font-size: 1.4rem;
    border-radius: 4px;
  }

  .atetsat__btn {
    display: flex;
    width: 100%;
  }
  .atetsat__btn label {
    width: 170px;
  }
}
</style>
<style>
.down__icon {
  cursor: pointer;
  transition: all 0.4s linear;
  transform-origin: center;
}
.open__modal {
  transform: rotate(180deg);
}
.m-input-wrapper {
  display: flex;
  align-items: baseline;
}
.m-phone-number-input__input {
  background: #ffff !important;
  height: 100%;
}

.m-phone-number-input__country-flag {
  position: absolute !important;
  top: 30%;
  left: 4px !important;
}
.m-input-label {
  display: none !important;
}
</style>
