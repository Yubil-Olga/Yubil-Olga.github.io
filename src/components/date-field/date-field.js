import Calendar from '../calendar/calendar';
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
    this.$calendar = new Calendar(this.$inputField, this.$container);
  }

  getElement() {
    return this.$inputField;
  }
}
