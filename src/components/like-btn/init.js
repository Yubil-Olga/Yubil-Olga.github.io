import LikeBtn from './like-btn';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-like-btn').forEach((el) => new LikeBtn(el))
});

