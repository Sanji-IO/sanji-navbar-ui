import angular from 'angular';

import './navbar.tpl.html';
import './navbar.style.scss';
import i18nConfig from './component.i18n';
import NavbarService from './navbar.service';
import NavbarContainerComponent from './container.component';
import NavbarComponent from './navbar.component';

const sjNavbar = angular.module('sanji.navbar', [])
  .config(i18nConfig)
  .service('navbarService', NavbarService)
  .component('sanjiNavbarContainer', NavbarContainerComponent)
  .component('sanjiNavbar', NavbarComponent)
  .name;
export {sjNavbar};
