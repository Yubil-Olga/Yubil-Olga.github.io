import Calendar from './calendar';

$(() => {
  $('.js-calendar_open').each((i, val) => new Calendar(val));
});
