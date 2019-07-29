'use strict';

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
