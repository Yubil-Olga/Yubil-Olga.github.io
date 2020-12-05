export default class MaterialIcon {
  constructor(htmlElement) {
    this._container = htmlElement;
    this._findHTMLElements();
  }

  _findHTMLElements() {
    this._icon = this._container.querySelector('.js-material-icon');
  }

  setTextContent(text) {
    this._icon.textContent = text;
  }
}
