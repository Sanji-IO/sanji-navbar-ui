const $inject = ['$filter', '$ngRedux', 'auth', 'navbarAction', 'logger'];
class NavbarContainerController {
  constructor(...injects) {
    NavbarContainerController.$inject.forEach((item, index) => (this[item] = injects[index]));
  }

  $onInit() {
    this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis, this.navbarAction)(this);
    this.getNavbarStatus();
  }

  $onDestroy() {
    this.unsubscribe();
  }

  mapStateToThis(state) {
    return {
      data: state.navbar
    };
  }

  changeLang(event) {
    this.updateSelectedLang(event.data.key);
    this.logger.info(this.$filter('translate')('NAVBAR_LOGGER_CHANGE_LANGUAGE') + ': ' + event.data.label, event.data);
  }

  isAuthorized(event) {
    return this.auth.isAuthorized(event.roles);
  }
}
NavbarContainerController.$inject = $inject;
export default NavbarContainerController;
