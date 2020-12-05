import 'ion-rangeslider';

export default class RangeSlider {
  constructor(htmlElement) {
    this.$rangeSlider = $(htmlElement);
    this._init();
  }

  _init() {
    this.$rangeSlider.ionRangeSlider({
      type: 'double',
      min: 0,
      max: 15000,
      hide_min_max: true,
      from: 5000,
      to: 10000,
      postfix: ' ₽',
      values_separator: '-',
    });
  }
}
