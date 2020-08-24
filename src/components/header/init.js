import Header from './header';

$(() => {
  $('.js-header').each((i, val) => new Header(val));
});
