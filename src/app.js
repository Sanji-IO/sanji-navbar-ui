import 'angular-material.css';
import 'angular-material-icons.css';
import 'toastr.css';
import './app.scss';
import angular from 'angular';
import { sjCore } from 'sanji-core-ui';
import { sjNavbar, navbar, lang } from './component';

const app = angular.module('webapp', [sjCore, sjNavbar]);
app
  .config((restProvider, reduxHelperProvider) => {
    restProvider.configure({ basePath: '/api/v1' });
    reduxHelperProvider.configure(
      { navbar, lang },
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  })
  .config($translateProvider => {
    /** This is test example for multiple language */
    $translateProvider.translations('en', {
      NOTIFICATIONS_CHANGE_PASSWORD: 'You need to change your password.',
      NOTIFICATIONS_CHANGE_TOKEN: 'You need to change your default Token.'
    });

    $translateProvider.translations('zh-tw', {
      NOTIFICATIONS_CHANGE_PASSWORD: '請修改您的預設密碼',
      NOTIFICATIONS_CHANGE_TOKEN: '請修改您的預設Token'
    });
  });

class AppController {
  constructor(logger, $ngRedux, LANG_KEYS, navbarAction) {
    this.logger = logger;
    this.navbarAction = navbarAction;
    this.toggleLeft = false;
    this.toggleRight = false;
    this.user = {
      name: 'zack yang',
      email: 'zackcf.yang@moxa.com'
    };
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
