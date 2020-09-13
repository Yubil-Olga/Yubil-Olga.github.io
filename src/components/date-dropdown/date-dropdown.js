import DateField from '../date-field/date-field';
import Calendar from '../calendar/calendar';

export default class DateDropdown {
  constructor(htmlElement) {
    this.$dateDropdown = $(htmlElement);
    this.init();
  }

  init() {
    this.$inputContainer = this.$dateDropdown.find('.js-date-dropdown__input');
    this.$inputs = this.$inputContainer.map((i, val) => new DateField(val).getElement()[0]);
    this.isRange = !!(this.$inputs.length > 1);
    this.$startInput = this.$inputs.first();
    this.$endInput = this.isRange ? this.$inputs.last() : null;
    this.calendar = new Calendar(this.$startInput, this.$dateDropdown);
    if (this.isRange) {
      const startInput = this.$startInput;
      const endInput = this.$endInput;
      this.$startInput.datepicker({
        onSelect(fd) {
          const inputValues = fd.split('-');
          const [startValue, endValue] = inputValues;
          startInput.val(startValue);
          endInput.val(endValue);
        },
      });
      this.initEndInput();
    }
  }

  initEndInput() {
    this.handleEndInputClick = this.handleEndInputClick.bind(this);
    this.$endInput.on('click', this.handleEndInputClick);
  }

  handleEndInputClick() {
    this.calendar.calendarPluginInstance.show();
  }
}
