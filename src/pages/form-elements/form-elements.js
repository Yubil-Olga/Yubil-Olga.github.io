import RateButton from '../../components/rate-button/rate-button';

$(() => {
  $('.js-form-elements .js-rate-button').each((i, val) => new RateButton(val));
});
