document.querySelectorAll('.js-rate-btn').forEach(el => {
    el.addEventListener('click', (e) => {
        el.querySelectorAll('.material-icons').forEach(e => {
            e.textContent = "star_border";
        })
        let rating = e.target.value;
        for (let i=0; i<rating; i++){
            el.querySelectorAll('.rate-btn__item')[i].querySelector('.material-icons').textContent = "star";
        }
    })
})