import Datepicker from '../datepicker/datepicker';

$(() => {
  $('.js-date-field__input input').each((i, el) => new Datepicker(el));
});
