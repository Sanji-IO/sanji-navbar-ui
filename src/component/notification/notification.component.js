import './notification.tpl.html';
import NotificationController from './notification.controller';

const NotificationComponent = {
  name: 'notificationContainer',
  bindings: {
    notifications: '<'
  },
  controller: NotificationController,
  templateUrl: 'sanji-navbar.notification.tpl.html'
};

export default NotificationComponent;
