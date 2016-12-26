import NavbarContainerController from './container.controller';

const NavbarContainerComponent = {
  bindings: {
    toggleSidebarCallback: '&onToggleSidebar',
    toggleNotificationCallback: '&onToggleNotification',
    toggleControlPanelCallback: '&onToggleControlPanel',
    logoutCallback: '&onLogout',
    toProfileCallback: '&toProfile',
    user: '<'
  },
  template: `<sanji-navbar data="$ctrl.data"
              on-authorized="$ctrl.isAuthorized($event)"
              on-change-lang="$ctrl.changeLang($event)"
              toggle-sidebar-callback="$ctrl.toggleSidebarCallback()"
              toggle-notification-callback="$ctrl.toggleNotificationCallback()"
              toggle-control-panel-callback="$ctrl.toggleControlPanelCallback()"
              logout-callback="$ctrl.logoutCallback()"
              to-profile-callback="$ctrl.toProfileCallback()"
              user="$ctrl.user"></sanji-navbar>`,
  controller: NavbarContainerController
};
export default NavbarContainerComponent;
