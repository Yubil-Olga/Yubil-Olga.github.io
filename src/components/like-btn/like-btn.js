document.querySelectorAll('.js-like-btn').forEach((el) => {
  function liked(event) {
    let likes = parseInt(event.currentTarget.getAttribute('data-count'), 10);
    if (event.currentTarget.querySelector('input').checked) {
      likes += 1;
      event.currentTarget.querySelector('.material-icons').textContent = 'favorite';
      event.currentTarget.classList.add('like-btn_active');
    } else {
      likes -= 1;
      event.currentTarget.querySelector('.material-icons').textContent = 'favorite_border';
      event.currentTarget.classList.remove('like-btn_active');
    }
    event.currentTarget.setAttribute('data-count', likes);
  }
  el.addEventListener('change', liked);
});
