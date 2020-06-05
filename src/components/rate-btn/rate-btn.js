document.querySelectorAll('.js-rate-btn').forEach(el => {
    el.addEventListener('click', star)
    function star(event) {
        event.currentTarget.querySelectorAll('.material-icons').forEach(e => {
            e.textContent = "star_border";
        })
        const rating = event.target.value;
        for (let i=0; i<rating; i++) {
            event.currentTarget.querySelectorAll('.rate-btn__item')[i].querySelector('.material-icons').textContent = "star";
        }
    }
})
