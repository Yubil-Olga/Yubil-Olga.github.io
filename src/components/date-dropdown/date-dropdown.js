import '../date-field/date-field';

export default class DateDropdown {
  constructor(htmlElement) {
    this.dateDropdown = htmlElement;
    this.init();
  }

  init() {
    this.inputs = this.dateDropdown.querySelectorAll('input');
    const startInput = $(this.inputs).first();
    const secondInput = $(this.inputs).last();
    $(this.inputs).datepicker({
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
