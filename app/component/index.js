import angular from 'angular';
import sjCore from 'sanji-core-ui';

import './navbar.tpl.html';
import './navbar.style.scss';
import i18nConfig from './component.i18n';
import NavbarService from './navbar.service';
import NavbarContainerController from './container.controller';
import NavbarController from './navbar.controller';
import NavbarContainerComponent from './container.component';
import NavbarComponent from './navbar.component';

let app = angular.module('sanji.navbar', [sjCore]);
app.config(i18nConfig);
app.service('navbarService', NavbarService);
app.controller('NavbarContainerController', NavbarContainerController);
app.controller('NavbarController', NavbarController);
app.component('sanjiNavbarContainer', NavbarContainerComponent);
app.component('sanjiNavbar', NavbarComponent);
export default app = app.name;
