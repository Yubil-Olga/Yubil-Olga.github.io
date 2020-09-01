import LikeButton from './like-button';

$(() => {
  $('.js-like-button').each((i, val) => new LikeButton(val));
});
