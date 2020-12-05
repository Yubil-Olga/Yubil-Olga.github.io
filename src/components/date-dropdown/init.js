import DateDropdown from './DateDropdown';

$(() => {
  $('.js-date-dropdown').each((_, val) => new DateDropdown(val));
});
