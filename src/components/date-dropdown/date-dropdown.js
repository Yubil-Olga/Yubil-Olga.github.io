import DateField from '../date-field/date-field';

export default class DateDropdown {
  constructor(htmlElement) {
    this.$dateDropdown = $(htmlElement);
    this.init();
  }

  init() {
    this.$inputContainer = this.$dateDropdown.find('.js-date-dropdown__input');
    this.$inputs = this.$inputContainer.map((i, val) => new DateField(val).getElement()[0]);
    if (this.$inputs.length > 1) {
      const startInput = this.$inputs.first();
      const secondInput = this.$inputs.last();
      this.$inputs.datepicker({
        onSelect(fd) {
          const inputValues = fd.split('-');
          const [startValue, secondValue] = inputValues;
          startInput.val(startValue);
          secondInput.val(secondValue);
        },
      });
      secondInput.datepicker({
        position: 'bottom right',
      });
    }
  }
}
