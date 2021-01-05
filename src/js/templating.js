import menuData from '../menu.json';
import template from '../templates/menu.hbs';

const markup = template(menuData)

const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('beforeend', markup)