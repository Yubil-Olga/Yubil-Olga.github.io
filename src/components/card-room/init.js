import CardRoom from './card-room';

$(() => {
  $('.js-card-room').each((i, val) => new CardRoom(val));
});
