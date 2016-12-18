const $inject = ['navbarService'];
class NavbarContainerController {
  constructor(...injects) {
    NavbarContainerController.$inject.forEach((item, index) => this[item] = injects[index]);
    this.data = this.navbarService.get(this.options);
  }

  isAuthorized(event) {
    return this.navbarService.isAuthorized(event.roles);
  }
}
NavbarContainerController.$inject = $inject;
export default NavbarContainerController;
