'use strict';

let credits = 23580;
let pricePerDroid = 3000;
let count;
let totalPrice;
let message;

do {
  message = prompt('Сколько дроидов вы хотите купить?');
} while (isNaN(message) || message === '');

if (message === null) {
  message = 'Отменено пользователем!';
} else {
  count = parseInt(message);
  totalPrice = count * pricePerDroid;
  if (totalPrice > credits) {
    message = 'Недостаточно средств на счету';
  } else {
    credits -= totalPrice;
    message = `Вы купили ${count} дроидов, на счету осталось ${credits} кредитов.`;
  }
}

alert(message);
