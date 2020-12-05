import LikeButton from './LikeButton';

$(() => {
  $('.js-like-button').each((_, val) => new LikeButton(val));
});
