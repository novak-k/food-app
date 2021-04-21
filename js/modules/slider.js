function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter,wrapper, field}){
    //Slider

    const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container), //для точек перебора слайдов 
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        total = document.querySelector(totalCounter),           //отображает изменение цифр слайдов 
        current = document.querySelector(currentCounter),       //id from HTML
        slidesWrapper = document.querySelector(wrapper), //обертка
        slidesField = document.querySelector(field), //окно для слайда
        width = window.getComputedStyle(slidesWrapper).width; //ширина слайда

        let slideIndex = 1;
        let offset = 0;         //отступ для прокрутки слайда 

        function formatText () {
            if (slides.length < 10) {
                current.textContent =  `0${slideIndex}`;
            } else {
                current.textContent =  slideIndex;
            }
        }

        const renderDots = () => {
            dots.forEach(dot => dot.style.opacity = ".5");
            dots[slideIndex-1].style.opacity = 1;
        };
        

        if (slides.length < 10) {                   //меняем цифри слайдов и текущее значение 
            total.textContent = `0${slides.length}`;
            //current.textContent =  `0${slideIndex}`;
        } else {
            total.textContent = slides.length;
            //current.textContent =  slideIndex;
        }

        formatText();

        slidesField.style.width = 100 * slides.length + '%'; //задаем длину всех слайдов 
        slidesField.style.display = "flex";
        slidesField.style.transition = "0.5s all";

        slidesWrapper.style.overflow = 'hidden';

        slides.forEach(slides =>{
            slides.style.width = width;             //фиксированная ширина слайда
        });

        slider.style.position = 'relative'; //элементы внутри слайдов будут нормально отображаться 

        const indicators = document.createElement('ol'), //для точек слайда
             dots = [];
        indicators.classList.add('carousel-indicators');
        //прописываем свойства тут из CSS
        indicators.style.cssText = ` 
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 15;
            display: flex;
            justify-content: center;
            margin-right: 15%;
            margin-left: 15%;
            list-style: none;
        `; 
        slider.append(indicators); //применяем стили

        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('li'); //создаем точки
            dot.setAttribute('data-slide-to', i + 1); //добавляем им атрибут и стили из CSS
            dot.style.cssText = `
                box-sizing: content-box;
                flex: 0 1 auto;
                width: 30px;
                height: 6px;
                margin-right: 3px;
                margin-left: 3px;
                cursor: pointer;
                background-color: #fff;
                background-clip: padding-box;
                border-top: 10px solid transparent;
                border-bottom: 10px solid transparent;
                opacity: .5;
                transition: opacity .6s ease;
            `;
            if (i == 0) {
                dot.style.opacity = 1;
            }
            indicators.append(dot);
            dots.push(dot);
        }
        function deleteNotDigits (str) {
            return +str.replace(/\D/g, '');
        }

        //кнопки стрелки 
        next.addEventListener('click', () => { //незабываем что width - это строка и меняем ее на число
            if (offset == deleteNotDigits(width) * (slides.length - 1)) {
                offset = 0;
            } else {
                offset += deleteNotDigits(width); 
            }
            slidesField.style.transform = `translateX(-${offset}px)`; //исходное положение меняется 

            if (slideIndex == slides.length) {
                slideIndex = 1;
            } else {
                slideIndex++;
            }
    
            // if (slides.length < 10) {
            //     current.textContent =  `0${slideIndex}`;
            // } else {
            //     current.textContent =  slideIndex;
            // }
            formatText();

            // dots.forEach(dot => dot.style.opacity = ".5");
            // dots[slideIndex-1].style.opacity = 1;
            renderDots();

        });

        prev.addEventListener('click', () => { //незабываем что width - это строка и меняем ее на число
            if (offset == 0) {
                offset = deleteNotDigits(width) * (slides.length - 1);
            } else {
                offset -= deleteNotDigits(width); 
            }
            slidesField.style.transform = `translateX(-${offset}px)`; //исходное положение меняется

            if (slideIndex == 1) {
                slideIndex = slides.length;
            } else {
                slideIndex--;
            }
    
            // if (slides.length < 10) {
            //     current.textContent =  `0${slideIndex}`;
            // } else {
            //     current.textContent =  slideIndex;
            // }
            formatText();

            // dots.forEach(dot => dot.style.opacity = ".5");
            // dots[slideIndex-1].style.opacity = 1;
            renderDots();
        });    

            dots.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    const slideTo = e.target.getAttribute('data-slide-to');
        
                    slideIndex = slideTo;
                    offset = deleteNotDigits(width) * (slideTo - 1);
        
                    slidesField.style.transform = `translateX(-${offset}px)`;
        
                    // if (slides.length < 10) {
                    //     current.textContent =  `0${slideIndex}`;
                    // } else {
                    //     current.textContent =  slideIndex;
                    // }
                    formatText();
        
                    // dots.forEach(dot => dot.style.opacity = ".5");
                    // dots[slideIndex-1].style.opacity = 1;
                    renderDots();
                });
            });

       
        //ДОМАШНЕЕ ЗАДАНИЕ - УБРАТЬ ПОВТОРЯЮЩИЙСЯ КОД - перезаписать В Ф-ЦИИ 

     
 //Slider(1)

        
        // showSlides(slideIndex);                         //запуск слайдов(ф-ции) - инициализация

        // if (slides.length < 10) {                   //меняет коллич-во слайдов и подставляет 0 если меньше 10
        //     total.textContent = `0${slides.length}`;
        // } else {
        //     total.textContent = slides.length;
        // }

        // function showSlides(n) {                        // n колличество слайдов 
        //     if (n > slides.length) {
        //         slideIndex = 1;
        //     }
        //     if (n < 1) {
        //         slideIndex = slides.length;
        //     }
    
            // slides.forEach((item) => item.style.display = 'none'); //скрыли все слайды 
            //-1  потому что изначально установили 1 
            // slides[slideIndex - 1].style.display = 'block'; //показываем тот слайд который нужно ?!!

          
            // Как ваша самостоятельная работа - переписать на использование классов show/hide
            // slides.forEach((item) => {
            //     item.classList.add('hide');
            // });
            // slides[slideIndex - 1].classList.remove('hide');


        //     if (slides.length < 10) {                      //меняет коллич-во слайдов и подставляет 0 если меньше 10
        //         current.textContent =  `0${slideIndex}`;
        //     } else {
        //         current.textContent =  slideIndex;
        //     }
        // }

        // function plusSlides (n) {
        //     showSlides(slideIndex += n);
        // }

        // prev.addEventListener('click', function(){
        //     plusSlides(-1);
        // });
    
        // next.addEventListener('click', function(){
        //     plusSlides(1);
        // });

}
export default slider;