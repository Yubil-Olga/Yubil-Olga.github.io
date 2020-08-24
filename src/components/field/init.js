import Field from './field';

$(() => {
  $('.js-field').each((i, val) => new Field(val));
});
