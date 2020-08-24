import Header from './header';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-header').forEach((el) => new Header(el));
});
