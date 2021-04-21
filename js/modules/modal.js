
function closeModal (modalSelector) {
    const  modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function openModal (modalSelector, modalTimerId) {
    const  modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden'; //отменяет скрол страницы пока модальное окно открыто
    // clearInterval(modalTimerId); //если пользователь сам открывает мод_окно оно само по таймАуту не вылазит 
   console.log(modalTimerId);
    if (modalTimerId){
        clearInterval(modalTimerId); 
    }
}    


function modal(triggerSelector, modalSelector, modalTimerId){

    const modalTrigger = document.querySelectorAll(triggerSelector),  // ('[data-modal]') атрибут 
        modal = document.querySelector(modalSelector);
            // modalCloseBtn = document.querySelector('[data-close]');

        modalTrigger.forEach (btn => {
            btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
         });

        // modalCloseBtn.addEventListener('click', closeModal); // не вызываем а передаем 
           
        modal.addEventListener('click', (e) =>{   //закрываем модальное окно по клику на подложку 
            if (e.target === modal|| e.target.getAttribute('data-close') == "") {
                closeModal(modalSelector);                    //вызываем 
            }
        });

    document.addEventListener ('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')){
            closeModal(modalSelector); 
        }
    });

    function showModalByScroll (){  //вызываем м_окно когда доскролили до низа  страницы 
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
  
}

export default modal;
export {closeModal};
export {openModal};
