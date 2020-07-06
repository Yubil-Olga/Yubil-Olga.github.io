import 'ion-rangeslider';

$('.js-range-slider').ionRangeSlider({
  type: 'double',
  min: 0,
  max: 15000,
  hide_min_max: true,
  from: 5000,
  to: 10000,
  postfix: ' ₽',
  values_separator: '-',
});
