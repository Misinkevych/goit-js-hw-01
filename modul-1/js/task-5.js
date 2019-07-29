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
const promLabel = 'Введите страну  доставки:';

let userChoise = prompt(promLabel);
const inLowerCase = userChoise.toLowerCase();
const inUpperCase = userChoise.toUpperCase();

// let count = userChoise.toLowerCase();
// let userChoise.toLowerCase();

let message;

if (userChoise === null) {
  message = 'Очень жаль';
} else {
  switch (userChoise) {
    case CHINA:
      message = `Доставка едит в ${CHINA} стоимость доставки ${PRAISE_CHINA}  кредитов`;
      break;

    case JAMAICA:
      message = `Доставка едит в ${JAMAICA} стоимость доставки ${PRAISE_JAMAICA}  кредитов`;

      break;

    case AUSTRALIA:
      message = `Доставка едит в ${AUSTRALIA} стоимость доставки ${PRAISE_AUSTRALIA}  кредитов`;

      break;

    case CHILE:
      message = `Доставка едит в ${CHILE} стоимость доставки ${PRAISE_CHILE}  кредитов`;

      break;

    case INDIA:
      message = `Доставка едит в ${INDIA} стоимость доставки ${PRAISE_INDIA}  кредитов`;

      break;

    default:
      message = 'В вашей стране доставка не доступна';
  }
}
alert(message);
// alert(userChoise.toLowerCase());
// alert(userChoise.toUpperCase());
