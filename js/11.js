// const log = function(a, b, ...rest){ 
//     // rest обозначет остаток переменных сколько их не было б 
//     console.log(a, b, rest);
// };

// log('basic', 'rest', 'operator', 'usage');
// //выводит в консоль массив собирая в него отдельные сущности 
// //[Running] basic rest [ 'operator', 'usage' ]

// function calcOrDouble (number, basis = 2){
//     console.log(number * basis);
// }
// calcOrDouble(3);

'use strict';

// const person = {
//     name: 'Alex',
//     tel: '+46444444',
//     parents: {
//         mom: 'Olga',
//         dad: 'Mike'
//     }

// };

// const clon = JSON.parse(JSON.stringify(person));

// clon.parents.mom = 'Ann';

// console.log(person);
// console.log(clon);

//55
// console.log('Запрос данных...');

// const req = new Promise (function(resolve, reject){ // (правильно, ошибка) - это функции и аргументы промиса 
//     setTimeout (() =>{
//         console.log('Подготовка данных...');
    
//         const product = {
//             name: 'TV',
//             price: 2000 
//         };
    
//         resolve(product);                   //возвращает данные от сервера 
//     }, 2000);
// });

// req.then((product) =>{                     //обрабатывает положительный результат 
//     return new Promise ((resolve, reject) =>{
//         setTimeout (() =>{
//             product.status = 'order';
//             resolve(product);
//             // reject();       // 
//         }, 2000);
//     });
// }).then(data =>{
//     data.modife = true;
//     return data;
// }).then(data =>{
//     console.log(data);
// }).catch(() =>{             //они всегда в конце записываются 
//     console.error('Произошла ошибка');
// }).finally(()=>{
//     console.log('Finally');
// });

// const test = time =>{
//     return new Promise (resolve =>{
//         setTimeout(()=> resolve(), time);
//     });
// };

// // test(1000).then(() => console.log('1000 ms'));
// // test(2000).then(() => console.log('2000 ms'));

// // Promise.all([test(1000), test(2000)]).then(() => {
// //     console.log('All');
// // });

// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });
//68
// const person = {
//     name: 'Alex',
//     age: 27,

//     get userAge() {
//         return this.age;
//     },
//     set userAge(num) {
//         this.age = num;
//     }
// };
// console.log(person.userAge = 30);
// console.log(person.userAge);
//69
// class User {
//     constructor (name, age) {
//         this.name = name;
//         this._age = age;
//     }
//     #surname = 'Novak';
//     say() { //say = () => { 
//         console.log(`Имя пользователя ${this.name}${this.#surname}, возраст: ${this._age}`);
//     }

//    get age (){
//         return this._age;
//     }
//     set age (age){
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             this._age = age;
//         } else {
//             console.log('Недопустимое значение');
//         }
//     }

// }
// const ivan = new User ('Ivan', 27);
// console.log(ivan.surname);
// ivan.say();
//70 Modul
// const number = 1;
// (function(){
//     let number = 2;
//     console.log(number);
//     console.log(number + 3);
// }());

// console.log(number);


// const user = (function(){
//     const privat = function(){
//         console.log('I am privat');
//     };
//     return {
//         sayHello: privat
//     };
// }());
// user.sayHello();

// try {
//     console.log('normal');
//     console.log(a);
//     console.log('result');
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// } finally {
//     console.log('final'); //выполнится в любом случае 
// }

// console.log('still working');