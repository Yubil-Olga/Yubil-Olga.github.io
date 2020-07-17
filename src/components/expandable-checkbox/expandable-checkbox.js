document.querySelectorAll('.js-expandable-checkbox__selection').forEach((el) => {
  function expandCheckbox(event) {
    event.target.closest('.js-expandable-checkbox').classList.toggle('expandable-checkbox_open');
  }
  el.addEventListener('click', expandCheckbox);
});
