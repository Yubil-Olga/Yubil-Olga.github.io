import Field from '../field/Field';

export default class DateField {
  constructor(htmlElement) {
    this._$container = $(htmlElement);
    this._findHTMLElements();
  }

  _findHTMLElements() {
    this._$inputContainer = this._$container.find('.js-date-field__input');
    this._$field = new Field(this._$inputContainer);
    this._$inputField = this._$field.getElement();
  }

  getElement() {
    return this._$inputField;
  }
}
