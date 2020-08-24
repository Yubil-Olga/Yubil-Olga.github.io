import LikeBtn from './like-btn';

$(() => {
  $('.js-like-btn').each((i, val) => new LikeBtn(val));
});
