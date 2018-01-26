const $inject = [];
class NavbarController {
  constructor(...injects) {
    NavbarController.$inject.forEach((item, index) => (this[item] = injects[index]));
  }

  changeLang(lang) {
    this.onChangeLang({
      $event: {
        data: lang
      }
    });
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
