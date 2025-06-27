
const dropdown__button = document.querySelector('.dropdown__select');
const dropdown__items = document.querySelector('.dropdown__items');
const list__items = document.querySelectorAll('.dropdown__item');


const dialog_education = document.querySelector('.dialog__education');
const dialog_exp = document.querySelector('.dialog__experience');
const dialog_awards = document.querySelector('.dialog__awards');

const list_dialog = [dialog_education, dialog_exp, dialog_awards];


//Отображение / выключение dropdown

dropdown__button.addEventListener('click', function(e) {

    e.stopImmediatePropagation();
    dropdown__items.classList.toggle("actived");  
});

//Привязка dropdown__item к dropdown__select(кнопке)

list__items.forEach((item) =>{
    item.addEventListener("click", function() {

        dropdown__button.textContent = this.textContent;
        dropdown__items.classList.remove("actived");

        list_dialog.forEach((i) =>{
            i.style.display = "none";
        });  
        document.querySelector(this.attributes["value"].value).style.display = "block";
    
        list__items.forEach((i) => {i.classList.remove("chosen");});
        this.classList.add("chosen");
    });
});

//Эффект при наведении на dropdown__items

list__items.forEach( function(item) {
    item.addEventListener("mouseover", () => {
        item.classList.add("glowing");     
    });
});

list__items.forEach( function(item) {
    item.addEventListener("mouseout", () => {
        item.classList.remove("glowing");     
    });
});


//клик вне dropdown

document.addEventListener("click", function(e){
    
    if (e.target !== dropdown__items){
        dropdown__items.classList.remove("actived");
    }
});