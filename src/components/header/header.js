export default class Header {
  constructor(htmlElement) {
    this._header = htmlElement;
    this._menuActiveClassName = 'header__menu_active';
    this._findHTMLElements();
    this._bindEventListeners();
  }

  _findHTMLElements() {
    this._burger = this._header.querySelector('.js-header__burger');
    this._menu = this._header.querySelector('.js-header__menu');
  }

  _bindEventListeners() {
    this._handleBurgerClick = this._handleBurgerClick.bind(this);
    this._burger.addEventListener('click', this._handleBurgerClick);
  }

  _handleBurgerClick() {
    this._menu.classList.toggle(this._menuActiveClassName);
    this._handleWindowResize = this._handleWindowResize.bind(this);
    window.addEventListener('resize', this._handleWindowResize);
  }

  _handleWindowResize(event) {
    if (this._isMenuClosed(event)) {
      this._menu.classList.remove(this._menuActiveClassName);
      window.removeEventListener('resize', this._handleWindowResize);
    }
  }

  _isMenuClosed(event) {
    return (event.target.innerWidth > 1000)
      && (this._menu.classList.contains(this._menuActiveClassName));
  }
}
