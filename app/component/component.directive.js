const injectMap = new WeakMap();
const $inject = [];
class NavbarDirective {
  constructor(injects) {
    NavbarDirective.directiveFactory.$inject.forEach((item, index) => {
      NavbarDirective[item] = injects[index];
      injectMap.set(NavbarDirective[item], injects[index]);
    });
    this.templateUrl = 'sanji-navbar.tpl.html'
    this.restrict = 'EA';
    this.controller = 'NavbarController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = {
      data: '=',
      toggleSidebarCallback: '&',
      toggleNotificationCallback: '&',
      logoutCallback: '&',
      toProfileCallback: '&',
      user: '=',
      unreadCount: '='
    };
  }

  static directiveFactory(...injects) {
    NavbarDirective.instance = new NavbarDirective(injects);
    return NavbarDirective.instance;
  }
}
NavbarDirective.directiveFactory.$inject = $inject;
export default NavbarDirective;
