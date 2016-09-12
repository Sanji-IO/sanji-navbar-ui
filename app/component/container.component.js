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
  template: `<sanji-navbar data="$ctrl.data"
              on-authorized="$ctrl.isAuthorized($event)"
              toggle-sidebar-callback="$ctrl.toggleSidebarCallback()"
              toggle-notification-callback="$ctrl.toggleNotificationCallback()"
              toggle-control-panel-callback="$ctrl.toggleControlPanelCallback()"
              logout-callback="$ctrl.logoutCallback()"
              to-profile-callback="$ctrl.toProfileCallback()"
              unread-count="$ctrl.unreadCount"
              user="$ctrl.user"></sanji-navbar>`,
  controller: NavbarContainerController
};
export default NavbarContainerComponent;
