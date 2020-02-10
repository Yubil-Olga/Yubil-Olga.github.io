document.querySelectorAll('.toggle__btn_on').forEach((el) => {
    el.addEventListener('click', (e) => {
        e.target.classList.toggle('toggle__btn_off');
    })
})