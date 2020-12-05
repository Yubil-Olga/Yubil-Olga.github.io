import Calendar from './Calendar';

$(() => {
  $('.js-calendar_open').each((_, val) => new Calendar(val, val));
});
