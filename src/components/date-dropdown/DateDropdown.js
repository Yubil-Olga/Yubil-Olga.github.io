import DateField from '../date-field/DateField';
import Calendar from '../calendar/Calendar';

export default class DateDropdown {
  constructor(htmlElement) {
    this._$dateDropdown = $(htmlElement);
    this._init();
  }

  _init() {
    this._$inputContainer = this._$dateDropdown.find('.js-date-dropdown__input');
    this._$inputs = this._$inputContainer.map((_, val) => new DateField(val).getElement()[0]);
    this._isRange = !!(this._$inputs.length > 1);
    this._$startInput = this._$inputs.first();
    this._$endInput = this._isRange ? this._$inputs.last() : null;
    this._calendar = new Calendar(this._$startInput, this._$dateDropdown);
    if (this._isRange) {
      const startInput = this._$startInput;
      const endInput = this._$endInput;
      this._$startInput.datepicker({
        onSelect(fd) {
          const inputValues = fd.split('-');
          const [startValue, endValue] = inputValues;
          startInput.val(startValue);
          endInput.val(endValue);
        },
      });
      this._initEndInput();
    }
  }

  _initEndInput() {
    this._handleEndInputClick = this._handleEndInputClick.bind(this);
    this._$endInput.on('click', this._handleEndInputClick);
  }

  _handleEndInputClick() {
    this._calendar.calendarPluginInstance.show();
  }
}
