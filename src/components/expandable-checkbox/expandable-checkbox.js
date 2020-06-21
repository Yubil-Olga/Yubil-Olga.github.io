document.querySelectorAll('.js-expanded-checkbox__selection').forEach(el => {
    el.addEventListener('click', expandCheckbox)
    function expandCheckbox(event) {
        event.target.closest('.js-expanded-checkbox').classList.toggle('show');
    }
})