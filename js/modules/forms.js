import {openModal, closeModal} from './modal';
import {postData} from '../services/services';

function forms(formsSelector, modalTimerId) {


const forms = document.querySelectorAll(formsSelector);

const message = {                            // сообщение для пользователя
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
};

forms.forEach(item => {
    bindPostData(item);
});



function bindPostData(form) { 
    form.addEventListener('submit', (e) => { //форма которая будет отправляться по подтверждению 
    e.preventDefault();

    const statusMessage = document.createElement('img'); //выводим сообщение для пользователя
    statusMessage.src = message.loading;
    statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
    form.insertAdjacentElement('afterend', statusMessage);


    // const request = new XMLHttpRequest();               //привязка к серверу через пхп 
    // request.open('POST', 'server.php'); 

    // request.setRequestHeader('Content-type', 'multipart/form-data'); //лишнее для FormData
    // request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    
    const formData = new FormData(form);            //создаем форму

    const json = JSON.stringify(Object.fromEntries(formData.entries()));
//разобрали данные, собрали в массив обратно и перевели в формат джейсон (справа на лево)

    // const object = {};
    // formData.forEach(function(value, key){
    //     object[key] = value;
    // });
    // const json = JSON.stringify(object);
    
    postData('http://localhost:3000/requests', json)
    .then(data => {
        console.log(data);
        showThanksModal(message.success);
        statusMessage.remove();
    }).catch(() => {
        showThanksModal(message.failure);
    }).finally(() => {
        form.reset();
    });
});
}
function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal('.modal', modalTimerId);

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">${message}</div>
        </div>
    `;
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
        thanksModal.remove();
        prevModalDialog.classList.add('show');
        prevModalDialog.classList.remove('hide');
        closeModal('.modal');
    }, 4000);
}
// fetch('http://localhost:3000/menu')
//     .then(data => data.json())
//     .then(res=> console.log(res));

}

export default forms;
