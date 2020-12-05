import Field from './Field';

$(() => {
  $('.js-field').each((_, val) => new Field(val));
});
