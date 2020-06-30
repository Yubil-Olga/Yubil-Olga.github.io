document.querySelectorAll('.js-rate-btn').forEach((el) => {
  function star(event) {
    event.currentTarget.querySelectorAll('.material-icons').forEach((e) => {
      e.textContent = 'star_border';
    });
    const rating = event.target.value;
    for (let i = 0; i < rating; i += 1) {
      event.currentTarget.querySelectorAll('.rate-btn__item')[i].querySelector('.material-icons').textContent = 'star';
    }
  }
  el.addEventListener('click', star);
});
