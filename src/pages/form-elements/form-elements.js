import RateBtn from '../../components/rate-btn/rate-btn';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.form-elements .js-rate-btn').forEach((el) => new RateBtn(el));
});
