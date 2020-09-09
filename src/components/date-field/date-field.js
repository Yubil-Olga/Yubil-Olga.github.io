import Field from '../field/field';

export default class DateField {
  constructor(htmlElement) {
    this.$container = $(htmlElement);
    this.findHTMLElements();
  }

  findHTMLElements() {
    this.$inputContainer = this.$container.find('.js-date-field__input');
    this.$field = new Field(this.$inputContainer);
    this.$inputField = this.$field.getElement();
  }

  getElement() {
    return this.$inputField;
  }
}
