import 'angular-material.css';
import 'angular-material-icons.css';
import 'toastr.css';
import './app.scss';
import angular from 'angular';
import {sjCore} from 'sanji-core-ui';
import {sjNavbar} from './component';

const app = angular.module('webapp', [sjNavbar, sjCore]);
app.config(restProvider => {
  restProvider.configure({basePath: '/api/v1'});
});

class AppController {
  constructor(logger) {
    this.logger = logger;
    this.toggleLeft = false;
    this.toggleRight = false;
    this.unreadCount = 10;
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

  changeLang(lang) {
    this.$translate.use(lang);
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
