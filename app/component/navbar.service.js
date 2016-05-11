const $inject = ['LANG_KEYS', '$translate'];
const config = require('./component.resource.json');
class NavbarService {
  constructor(...injects) {
    NavbarService.$inject.forEach((item, index) => this[item] = injects[index]);
    this.data = {
      config: config,
      lang: this.LANG_KEYS
    };
    this.currentLang = this.$translate.use();
  }

  get(options) {
    Object.assign(this.data.config, options);
    return this.data;
  }

  changeLang(key) {
    this.$translate.use(key);
  }
}
NavbarService.$inject = $inject;
export default NavbarService;
