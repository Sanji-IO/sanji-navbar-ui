const $inject = ['navbarService'];
class NavbarContainerController {
  constructor(...injects) {
    NavbarContainerController.$inject.forEach((item, index) => this[item] = injects[index]);
    this.data = this.navbarService.get(this.options);
  }
}
NavbarContainerController.$inject = $inject;
export default NavbarContainerController;
