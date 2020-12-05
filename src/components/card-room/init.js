import CardRoom from './CardRoom';

$(() => {
  $('.js-card-room').each((_, val) => new CardRoom(val));
});
