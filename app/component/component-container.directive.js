const injectMap = new WeakMap();
const $inject = [];
class NavbarContainerDirective {
  constructor(injects) {
    NavbarContainerDirective.directiveFactory.$inject.forEach((item, index) => {
      NavbarContainerDirective[item] = injects[index];
      injectMap.set(NavbarContainerDirective[item], injects[index]);
    });
    this.restrict = 'EA';
    this.controller = 'NavbarContainerController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = {
      toggleSidebarCallback: '&onToggleSidebar',
      toggleNotificationCallback: '&onToggleNotification',
      logoutCallback: '&onLogout',
      toProfileCallback: '&toProfile',
      unreadCount: '='
    };
    this.template = `<sanji-navbar data="vm.data"
                    toggle-sidebar-callback="vm.toggleSidebarCallback()"
                    toggle-notification-callback="vm.toggleNotificationCallback()"
                    logout-callback="vm.logoutCallback()"
                    to-profile-callback="vm.toProfileCallback()"
                    unread-count="vm.unreadCount"></sanji-navbar>`;
  }

  static directiveFactory(...injects) {
    NavbarContainerDirective.instance = new NavbarContainerDirective(injects);
    return NavbarContainerDirective.instance;
  }
}
NavbarContainerDirective.directiveFactory.$inject = $inject;
export default NavbarContainerDirective;
