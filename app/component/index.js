import sjCore from 'sanji-core-ui';

import './component.tpl.html';
import './component.style.scss';
import i18nConfig from './component.i18n';
import NavbarService from './component.service';
import NavbarContainerController from './component-container.controller';
import NavbarController from './component.controller';
import NavbarContainerDirective from './component-container.directive';
import NavbarDirective from './component.directive';

let app = angular.module('sanji.navbar', [sjCore]);
app.config(i18nConfig);
app.service('navbarService', NavbarService);
app.controller('NavbarContainerController', NavbarContainerController);
app.controller('NavbarController', NavbarController);
app.directive('sanjiNavbarContainer', NavbarContainerDirective.directiveFactory);
app.directive('sanjiNavbar', NavbarDirective.directiveFactory);
export default app = app.name
