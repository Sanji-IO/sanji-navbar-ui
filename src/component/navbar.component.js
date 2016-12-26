import NavbarController from './navbar.controller';

const NavbarComponent = {
  bindings: {
    data: '<',
    user: '<',
    toggleSidebarCallback: '&',
    toggleNotificationCallback: '&',
    toggleControlPanelCallback: '&',
    logoutCallback: '&',
    toProfileCallback: '&',
    onAuthorized: '&',
    onChangeLang: '&'
  },
  templateUrl: 'sanji-navbar.tpl.html',
  controller: NavbarController
};
export default NavbarComponent;
