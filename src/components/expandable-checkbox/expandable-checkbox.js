document.querySelectorAll('.expanded-checkbox .selection__button').forEach(el => {
    el.addEventListener('click', (e) => {
        e.target.closest('.expanded-checkbox').classList.toggle('show');
    })
})