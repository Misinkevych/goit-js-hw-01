'use strict';

const CHINA = 'Китай';

const CHILE = 'Чили';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';

const PRAISE_CHINA = 100;
const PRAISE_CHILE = 250;
const PRAISE_AUSTRALIA = 170;
const PRAISE_INDIA = 80;
const PRAISE_JAMAICA = 120;
const promLabel = 'Доставка: Китай, Ямайка, Чили, Австралия, Индия';

let userChoise = prompt(promLabel);
const inLowerCase = userChoise.toLowerCase();
const inUpperCase = userChoise.toUpperCase();

// let count = userChoise.toLowerCase();
// let userChoise.toLowerCase();

let message;

if (userChoise === null) {
  message = 'Очень жаль';
} else {
  //   userChoise = Number(userChoise);
  switch (userChoise) {
    case CHINA:
      message =
        'Доставка едит в ' +
        CHINA +
        'стщимость доставки' +
        PRAISE_CHINA +
        'кредитов';
      break;

    case JAMAICA:
      message =
        'Доставка едит в ' +
        JAMAIKA +
        'стщимость доставки' +
        PRAISE_JAMAICA +
        'кредитов';
      break;

    case AUSTRALIA:
      message = 'Доставка едит в Австралия';
      break;

    default:
      message = 'В вашей стране доставка не доступна';
  }
}
alert(message);
// alert(userChoise.toLowerCase());
// alert(userChoise.toUpperCase());
