document.querySelectorAll('.js-expanded-checkbox__selection').forEach((el) => {
  function expandCheckbox(event) {
    event.target.closest('.js-expanded-checkbox').classList.toggle('show');
  }
  el.addEventListener('click', expandCheckbox);
});
