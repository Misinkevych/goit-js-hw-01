'use strict';
// const credits = 23580;
// const pricePerDroid = 3000;
// // const user = credits - pricePerDroid * totalPrice;
// let totalPrice = prompt('введите количество заказа');
// let masegge;
// let res;

// if (totalPrice === null) {
//   alert('Отменено пользователем!');
// } else if (
//   (res =
//     pricePerDroid * totalPrice < credits &&
//     pricePerDroid * totalPrice > credits)
// ) {
//   alert(
//     'Вы купили ' +
//       totalPrice +
//       'дроидов,на счету осталось' +
//       user +
//       'кредитов.',
//   );
// } else if ((user = credits % pricePerDroid)) {
//   alert('отенено');
// } else {
//   totalPrice = Number(user);
// }

// // console.log(credits - pricePerDroid * totalPrice);

let credits = 23580;
let pricePerDroid = 3000;
let count;
let totalPrice;
let message;

do {
  message = prompt('Сколько роботов вы хотите купить?', 'Укажи число!');
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
