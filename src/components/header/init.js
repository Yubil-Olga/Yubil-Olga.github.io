import Header from './Header';

$(() => {
  $('.js-header').each((_, val) => new Header(val));
});
