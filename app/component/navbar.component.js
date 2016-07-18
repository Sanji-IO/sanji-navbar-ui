import NavbarController from './navbar.controller';

const NavbarComponent = {
  bindings: {
    data: '<',
    user: '<',
    toggleSidebarCallback: '&',
    toggleNotificationCallback: '&',
    toggleControlPanelCallback: '&',
    logoutCallback: '&',
    toProfileCallback: '&'
  },
  templateUrl: 'sanji-navbar.tpl.html',
  controller: NavbarController,
  controllerAs: 'vm'
};
export default NavbarComponent;
