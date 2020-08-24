import RateBtn from '../../components/rate-btn/rate-btn';

$(() => {
  $('.js-form-elements .js-rate-btn').each((i, val) => new RateBtn(val));
});
