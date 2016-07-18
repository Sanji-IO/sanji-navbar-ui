import NavbarContainerController from './container.controller';

const NavbarContainerComponent = {
  bindings: {
    toggleSidebarCallback: '&onToggleSidebar',
    toggleNotificationCallback: '&onToggleNotification',
    toggleControlPanelCallback: '&onToggleControlPanel',
    logoutCallback: '&onLogout',
    toProfileCallback: '&toProfile',
    unreadCount: '<',
    user: '<',
    options: '<'
  },
  template: `<sanji-navbar data="vm.data"
              toggle-sidebar-callback="vm.toggleSidebarCallback()"
              toggle-notification-callback="vm.toggleNotificationCallback()"
              toggle-control-panel-callback="vm.toggleControlPanelCallback()"
              logout-callback="vm.logoutCallback()"
              to-profile-callback="vm.toProfileCallback()"
              unread-count="vm.unreadCount"
              user="vm.user"></sanji-navbar>`,
  controller: NavbarContainerController,
  controllerAs: 'vm'
};
export default NavbarContainerComponent;
