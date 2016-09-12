import NavbarController from './navbar.controller';

const NavbarComponent = {
  bindings: {
    data: '<',
    user: '<',
    unreadCount: '<',
    toggleSidebarCallback: '&',
    toggleNotificationCallback: '&',
    toggleControlPanelCallback: '&',
    logoutCallback: '&',
    toProfileCallback: '&',
    onAuthorized: '&'
  },
  templateUrl: 'sanji-navbar.tpl.html',
  controller: NavbarController
};
export default NavbarComponent;
