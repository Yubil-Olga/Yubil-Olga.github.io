export default class Header {
  constructor(htmlElement) {
    this.header = htmlElement;
    this.activeStatus = 'header__menu_active';
    this.findHTMLElements();
    this.bindEventListeners();
  }

  findHTMLElements() {
    this.burger = this.header.querySelector('.js-header__burger');
    this.menu = this.header.querySelector('.js-header__menu');
  }

  bindEventListeners() {
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
    this.burger.addEventListener('click', this.handleBurgerClick);
  }

  handleBurgerClick() {
    this.menu.classList.toggle(this.activeStatus);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    window.addEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize(event) {
    if (event.target.innerWidth > 1000 && this.menu.classList.contains(this.activeStatus)) {
      this.menu.classList.remove(this.activeStatus);
      window.removeEventListener('resize', this.handleWindowResize);
    }
  }
}
