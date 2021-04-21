import {getResource} from '../services/services';

function cards() {

    //Используем классы для создание карточек меню 

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) { //из верстки то что нам нужно 
            this.src = src;     //свойства 
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector); //родительский DOM элемент 
            this.transfer = 27; //условный курс валют
            this.changeToUAH(); //вызов функции перевода денег (обмена валют)
        }
        changeToUAH() {
            this.price = this.price * this.transfer; 
        }
        render() {
            const element = document.createElement('div'); // копируем и правим штмл
//задаем значение по умолчанию что б не было пустых масивов и строк
            if (this.classes.length === 0) {               
                this.classes = "menu__item";
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = ` 
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
            `;
            this.parent.append(element);
        }
    }
    
    // const div = new MenuCard(); //много кода можно упростить, если используем ее олин раз 
    // div.render();

    //объект может существовать и без переменной когда он используется только на месте 
      
 
    
// первый вариант 
    getResource('http://localhost:3000/menu') //настраиваем связь - клиент/сервер
    .then(data => {     //деструктуризация объекта 
        data.forEach(({img, altimg, title, descr, price}) => {
            new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
        });
    });

//второй (без шаблонизации, на один раз)
//  getResource('http://localhost:3000/menu')
//         .then(data => createCard(data));

//     function createCard(data) {
//         data.forEach(({img, altimg, title, descr, price}) => {
//             const element = document.createElement('div');

//             element.classList.add("menu__item");

//             element.innerHTML = `
//                 <img src=${img} alt=${altimg}>
//                 <h3 class="menu__item-subtitle">${title}</h3>
//                 <div class="menu__item-descr">${descr}</div>
//                 <div class="menu__item-divider"></div>
//                 <div class="menu__item-price">
//                     <div class="menu__item-cost">Цена:</div>
//                     <div class="menu__item-total"><span>${price}</span> грн/день</div>
//                 </div>
//             `;
//             document.querySelector(".menu .container").append(element);
//         });
//     }

//третий вариант с библиотекой axios
// axios.get('http://localhost:3000/menu')
//     .then(data => {
//         data.data.forEach(({img, altimg, title, descr, price}) => {
//             new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
//         });
//     });  
}

export default cards;
