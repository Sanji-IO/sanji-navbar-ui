const $inject = ['$mdDialog', '$ngRedux', 'navbarAction'];
class NotificationController {
  constructor(...injects) {
    NotificationController.$inject.forEach((item, index) => (this[item] = injects[index]));
  }

  $onInit() {}

  show(notification) {
    this.$mdDialog.show(notification.options).then(result => {
      if (result) this.$ngRedux.dispatch(this.navbarAction.removeNotifications(notification));
    });
  }
}
NotificationController.$inject = $inject;
export default NotificationController;
