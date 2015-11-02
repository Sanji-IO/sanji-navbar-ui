import 'angular-material.css';
import 'toastr.scss';
import './app.scss';
import 'angular';
import component from './component';

let app = angular.module('webapp', [component]);
app.config(restProvider => {
  restProvider.configure({basePath: '/api/v1'});
});

class AppController {
  constructor(logger) {
    this.logger = logger;
    this.toggleLeft = false;
    this.toggleRight = false;
    this.unreadCount = 10;
  }

  onToggleSidebar() {
    this.toggleLeft = !this.toggleLeft;
    this.logger.info('User toggle sidebar.', this.toggleLeft);
  }

  onToggleNotification() {
    this.toggleRight = !this.toggleRight;
    this.logger.info('User toggle notification.', this.toggleRight);
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
app.controller('AppController', AppController);
