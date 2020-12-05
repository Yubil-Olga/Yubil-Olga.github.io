import RateButton from './RateButton';

$(() => {
  $('.js-rate-button').each((_, val) => new RateButton(val));
});
