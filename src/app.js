import 'angular-material.css';
import 'angular-material-icons.css';
import 'toastr.css';
import './app.scss';
import angular from 'angular';
import { sjCore } from 'sanji-core-ui';
import { sjNavbar, navbar, lang, UPDATE_NAVBAR_STATUS, UPDATE_NAVBAR_UNREAD_COUNT } from './component';

const app = angular.module('webapp', [sjCore, sjNavbar]);
app.config((restProvider, reduxHelperProvider) => {
  restProvider.configure({basePath: '/api/v1'});
  reduxHelperProvider.configure({navbar, lang} , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
});

class AppController {
  constructor(logger, $ngRedux, LANG_KEYS) {
    this.logger = logger;
    this.toggleLeft = false;
    this.toggleRight = false;
    this.user = {
      name: 'zack yang',
      email: 'zackcf.yang@moxa.com'
    };
    this.config = {
      logo: {
        url: 'https://angularjs.org/img/AngularJS-large.png',
        height: 18
      }
    };

    $ngRedux.dispatch({ type: UPDATE_NAVBAR_STATUS, payload: {config: this.config, lang: LANG_KEYS} });
    $ngRedux.dispatch({ type: UPDATE_NAVBAR_UNREAD_COUNT, payload: 6 });
  }

  onToggleSidebar() {
    this.toggleLeft = !this.toggleLeft;
    this.logger.info('User toggle sidebar.', this.toggleLeft);
  }

  onToggleNotification() {
    this.toggleRight = !this.toggleRight;
    this.logger.info('User toggle notification.', this.toggleRight);
  }

  onToggleControlPanel() {
    this.$rootScope.$broadcast('sj:on-toggle-control-panel');
    this.logger.info('User toggle control panel.');
  }

  toProfilePage() {
    this.logger.info('User want to show profile page.');
  }

  logout() {
    this.logger.info('User logout!');
  }
}
app.run(session => {
  session.create('token', 'test');
  session.setUserData({
    role: 'admin'
  });
});
app.controller('AppController', AppController);

angular.element(document).ready(() => {
  angular.bootstrap(document.body, ['webapp']);
});
