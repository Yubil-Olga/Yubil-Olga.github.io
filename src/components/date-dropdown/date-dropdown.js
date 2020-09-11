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
      const secondInput = this.$endInput;
      this.$startInput.datepicker({
        onSelect(fd) {
          const inputValues = fd.split('-');
          const [startValue, secondValue] = inputValues;
          startInput.val(startValue);
          secondInput.val(secondValue);
        },
      });
      this.initEndInput();
    } else {
      this.setAdditionalClass();
    }
  }

  initEndInput() {
    this.handleEndInputClick = this.handleEndInputClick.bind(this);
    this.$endInput.on('click', this.handleEndInputClick);
  }

  handleEndInputClick() {
    this.calendar.calendarPluginInstance.show();
  }

  setAdditionalClass() {
    this.calendar.$calendar.addClass('datepicker_size_small');
  }
}
