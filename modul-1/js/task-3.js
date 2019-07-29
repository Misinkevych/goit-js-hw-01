'use strict';

// let password = '';

// do {
//   password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
// message = 'Добро пожаловать!';
// message = 'Доступ запрещен, неверный пароль!';

const pass = prompt('Пароль?', '');

if (pass === ADMIN_PASSWORD) {
  alert('Добро пожаловать!');
} else if (pass === null) {
  alert('Отменено пользователем!');
} else {
  alert('Доступ запрещен, неверный пароль!');
}
