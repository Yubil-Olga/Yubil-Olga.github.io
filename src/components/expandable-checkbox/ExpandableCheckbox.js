export default class ExpandableCheckbox {
  constructor(htmlElement) {
    this._expandCheckbox = htmlElement;
    this._findHTMLElements();
    this._bindEventListeners();
  }

  _findHTMLElements() {
    this._toggle = this._expandCheckbox.querySelector('.js-expandable-checkbox__selection');
  }

  _bindEventListeners() {
    this._handleSelectionClick = this._handleSelectionClick.bind(this);
    this._toggle.addEventListener('click', this._handleSelectionClick);
  }

  _handleSelectionClick() {
    this._expandCheckbox.classList.toggle('expandable-checkbox_active');
  }
}
