
import {data, info} from "./trainersData.js";

const swiper = new Swiper('.trainers__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop:true,

  breakpoints:{
    900 :{
      slidesPerView:3,
      spaceBetween:50,
    },

    501 :{
      slidesPerView:2,
      spaceBetween:30,
    },

    300 :{
      slidesPerView:1.5,
      spaceBetween:30,
    }
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const this_swiper = document.querySelector('.trainers__swiper').swiper;

document.querySelector('.swiper_button-next').onclick = 
() => this_swiper.slideNext();

document.querySelector('.swiper_button-prev').onclick = 
() => this_swiper.slidePrev();


//Modal_window

const modal_window = document.querySelector(".trainers__dialog");

//dialog__educaton-content   |||
const dialogContent = document.querySelectorAll('.dialog__education-content'); 

const dialogImage = document.querySelector('.dialog__header img');
const dialogName = document.querySelector('.dialog__header-info h3');
const dialogProf = document.querySelector('.dialog__header-info p');

for (let item of document.querySelectorAll(".trainers__person-detailed")){
  item.onclick = () => {

    let name_attr = item.attributes["name"].value;

    dialogImage.setAttribute("src", info[name_attr]["image"]);
    dialogName.innerHTML = info[name_attr]['name'];
    dialogProf.innerHTML = info[name_attr]['prof'];

    let index = 0;
    dialogContent.forEach(item => {
        item.innerHTML = data[name_attr][index++];
    })
    
    modal_window.classList.add("trainers__dialog-on");
  }
}

//BUTTONS EDUCATION EXPERIENCE  AWARDS

function deleteClassForAll(listEls, className){
    for (let item of listEls){
        item.classList.remove(className);
    }
}

function setStyleForAll(listEls, styleName, value){
    for (let item of listEls){
        item.style[styleName] = value;
    }
}

const btn_education = document.querySelector('.dialog__tabs-item.education');
const btn_exp = document.querySelector('.dialog__tabs-item.experience');
const btn_awards = document.querySelector('.dialog__tabs-item.awards');

const dialog_education = document.querySelector('.dialog__education');
const dialog_exp = document.querySelector('.dialog__experience');
const dialog_awards = document.querySelector('.dialog__awards');

const list_btns = [btn_education, btn_exp, btn_awards];
const list_dialog = [dialog_education, dialog_exp, dialog_awards];

//
btn_education.onclick = () => {
  deleteClassForAll(list_btns, "active");

  btn_education.classList.add("active");
  setStyleForAll(list_dialog, "display", "none");

  dialog_education.style.display = "block";
}

//
btn_exp.onclick = () => {
  deleteClassForAll(list_btns, "active");

  btn_exp.classList.add("active");
  setStyleForAll(list_dialog, "display", "none");

  dialog_exp.style.display = "block";
}
 
//
btn_awards.onclick = () => {
  deleteClassForAll(list_btns, "active");

  btn_awards.classList.add("active");
  setStyleForAll(list_dialog, "display", "none");

  dialog_awards.style.display = "block";
}

//close modal_window

document.querySelector(".dialog__header-close").onclick = () =>{
    modal_window.classList.remove("trainers__dialog-on");

    setTimeout(() => {
      deleteClassForAll(list_btns, "active");

      btn_education.classList.add("active");
      setStyleForAll(list_dialog, "display", "none");

      dialog_education.style.display = "block";
    }, 700);
}

document.querySelector(".dialog__header-cross").onclick = () =>{
    modal_window.classList.remove("trainers__dialog-on");

    setTimeout(() => {
      
      setStyleForAll(list_dialog, "display", "none");
      dialog_education.style.display = "block";

      document.querySelectorAll(".dropdown__item").forEach((i) => {i.classList.remove("chosen");});
      document.querySelector(".dropdown__item").classList.add("chosen");

      document.querySelector(".dropdown__select").textContent = "Образование";
    }, 700);
}

//course__form input hover

const input = document.querySelectorAll('.course__form input')[1];

input.addEventListener('mouseover', () => {
  input.placeholder = '8___ ___ __ __';
});

input.addEventListener('mouseout', () => {
  input.placeholder = "Телефон";
});


//header__button-other соединяем с popup window

const button__other = document.querySelector('.header__button-other');
const popup__window = document.querySelector('.header-popup_window');
const header_close = document.querySelector('.header-close');

button__other.addEventListener("click",function() { 
    popup__window.classList.toggle("actived");
});

header_close.addEventListener("click", function() { 

    popup__window.style.transition = "transform 0.5s ease"; 
    
    popup__window.classList.toggle("actived");
    
    setTimeout(() => {  
      popup__window.style.transition = "";
    }, 500);
});

//подключение навигации в popup-window

document.querySelectorAll(".popup-nav").forEach(function(item){
    item.addEventListener("click", () => {
        popup__window.classList.toggle("actived");
    });
});

//Скролл до footer из Price

document.querySelectorAll(".packet__items button").forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector(".footer").scrollIntoView();
    });
});

//Подключение input-ов к кнопке course__form  ВАЛИДАЦИЯ

const form_name = document.querySelector(".course__form-name");
const form_phone = document.querySelector(".course__form-phone");
const form_gmail = document.querySelector(".course__form-gmail");

const regExp_name = /^[а-яёА-ЯЁ]+$/;
const regExp_phone = /^^8\d{10}$/;
const regExp_gmail = /^.+@.+\..+$/;

const form_button = document.querySelector(".course__form-button");

form_button.addEventListener("click", () => {
  
    let hasError = false;

    if (regExp_name.test(form_name.value)){
        
        if (regExp_phone.test(form_phone.value)){

            if (regExp_gmail.test(form_gmail.value)){

                alert("Ваша заявка успешно принята!")
            }
        }
    }
    
});

