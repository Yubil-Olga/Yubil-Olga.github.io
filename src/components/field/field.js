import Inputmask from 'inputmask';

export default class Field {
  constructor(htmlElement) {
    this.field = htmlElement;
    this.maskedStatus = 'field_masked';
    this.init();
  }

  init() {
    if (this.field.classList.contains(this.maskedStatus)) {
      const im = new Inputmask('datetime', {
        inputFormat: 'dd.mm.yyyy',
        placeholder: 'ДД.ММ.ГГГГ',
        min: '01.01.1900',
        max: '01.01.2020',
      });
      im.mask(this.field);
    }
  }
}
