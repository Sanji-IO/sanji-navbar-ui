import angular from 'angular';

import './navbar.tpl.html';
import './navbar.style.scss';
import i18nConfig from './component.i18n';
import {
  NavbarAction,
  navbar,
  lang,
  GET_NAVBAR_STATUS,
  UPDATE_NAVBAR_STATUS,
  UPDATE_NAVBAR_SELECTED_LANG,
  GET_NAVBAR_SELECTED_LANG,
  UPDATE_NAVBAR_UNREAD_COUNT
} from './navbar.state';
import NavbarContainerComponent from './container.component';
import NavbarComponent from './navbar.component';

const sjNavbar = angular
  .module('sanji.navbar', [])
  .config(i18nConfig)
  .factory('navbarAction', NavbarAction)
  .component('sanjiNavbarContainer', NavbarContainerComponent)
  .component('sanjiNavbar', NavbarComponent).name;
export {
  sjNavbar,
  navbar,
  lang,
  GET_NAVBAR_STATUS,
  UPDATE_NAVBAR_STATUS,
  UPDATE_NAVBAR_SELECTED_LANG,
  GET_NAVBAR_SELECTED_LANG,
  UPDATE_NAVBAR_UNREAD_COUNT
};
