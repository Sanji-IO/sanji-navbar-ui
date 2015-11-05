const $inject = ['navbarService'];
class NavbarContainerController {
  constructor(...injects) {
    NavbarContainerController.$inject.forEach((item, index) => this[item] = injects[index]);

    let navbarService = this.navbarService;

    this.data = navbarService.get(this.options);
  }
}
NavbarContainerController.$inject = $inject;
export default NavbarContainerController;
