'use strict';

import tabs from './modules/tabs';
import modal,{ openModal } from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';
import calc from './modules/calc';


document.addEventListener('DOMContentLoaded',() => {

   const modalTimerId = setTimeout(() => openModal('.modal',modalTimerId),50000);

   tabs('.tabheader__item','.tabcontent','.tabheader__items','tabheader__item_active');
   modal('[data-modal]','.modal',modalTimerId);
   timer('.timer','2022-01-01');
   cards();
   forms('form',modalTimerId);
   slider({
      container: '.offer__slider',
      nextArrow: '.offer__slider-next',
      prevArrow: '.offer__slider-prev',
      totalCounter: '#total',
      currentCounter: '#current',
      wrapper: '.offer__slider-wrapper',
      field: '.offer__slider-inner',
      slide: '.offer__slide'

   });
   calc();

});