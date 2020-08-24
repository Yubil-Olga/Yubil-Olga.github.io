import RangeSlider from './range-slider';

$(() => {
  $('.js-range-slider').each((i, val) => new RangeSlider(val));
});
