import Inputmask from 'inputmask';

export default class Field {
  constructor(htmlElement) {
    const isInput = $(htmlElement).hasClass('js-field');
    this._$field = isInput ? $(htmlElement) : $(htmlElement).find('.js-field');
    this._maskedStatus = 'field_masked';
    this._init();
  }

  _init() {
    if (this._$field.hasClass(this._maskedStatus)) {
      const im = new Inputmask('datetime', {
        inputFormat: 'dd.mm.yyyy',
        placeholder: 'ДД.ММ.ГГГГ',
        min: '01.01.1900',
        max: '01.01.2020',
      });
      im.mask(this._$field);
    }
  }

  getElement() {
    return this._$field;
  }
}
