import DateDropdown from './date-dropdown';

$(() => {
  $('.js-date-dropdown').each((i, val) => new DateDropdown(val));
});
