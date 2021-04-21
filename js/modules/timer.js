function timer(id, deadline){
    //Timer 
    // const deadline = '2021-03-11T20:47:00';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()), //текст (строку) приводит в объекти типа дата 
            days = Math.max(0, Math.floor(t / (1000 * 60 * 60 * 24))),
            hours = Math.max(0, Math.floor((t / (1000 * 60 * 60) % 24))),  //получение остатка от целого числа (%)
            minutes = Math.max(0, Math.floor((t / 1000 / 60) % 60)),
            seconds = Math.max(0, Math.floor((t / 1000) % 60));
        return {                        //возвращает данные 
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };    
    }

    function getZero(num) {             //подставления ноля перед однозначной датой (09 дней)
        if (num >=0 && num < 10){
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000);   //повторение отсчет таймера 

            updateClock();          //что бы верстка не мигала при обновлении     

        function updateClock() {
            const t = getTimeRemaining(endtime);  // обновление таймера 

            days.innerHTML = getZero(t.days);  // меняем days.innerHTML=t.day что б работала ф-ция с нулем перед числом 
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock(id, deadline); 
}

export default timer;

