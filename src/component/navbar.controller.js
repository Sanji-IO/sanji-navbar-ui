const $inject = ['$filter', 'logger', 'navbarService'];
class NavbarController {
  constructor(...injects) {
    NavbarController.$inject.forEach((item, index) => this[item] = injects[index]);
  }

  changeLang(lang) {
    this.navbarService.changeLang(lang.key);
    this.logger.info(this.$filter('translate')('NAVBAR_LOGGER_CHANGE_LANGUAGE') + ': ' + lang.label, lang);
  }

  isAuthorized(roles) {
    return this.onAuthorized({
      $event: {
        roles: roles
      }
    });
  }
}
NavbarController.$inject = $inject;
export default NavbarController;
