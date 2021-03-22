import menuTemplate from '../templates/menu-thumb.hbs';
import menuData from '../data/menu.json';

const menuList = document.querySelector('.js-menu');
menuList.innerHTML = menuTemplate(menuData);
