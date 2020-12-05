import RangeSlider from './RangeSlider';

$(() => {
  $('.js-range-slider').each((_, val) => new RangeSlider(val));
});
