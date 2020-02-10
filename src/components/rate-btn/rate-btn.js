document.querySelectorAll('.rate-btn').forEach(el => {
    el.addEventListener('click', (e) => {
        if (el.querySelectorAll('.rate-btn__item_active').length>0) {
            el.querySelectorAll('.rate-btn__item_active').forEach((e) => {
                e.classList.remove('rate-btn__item_active');
            })
        }
        let rating = e.target.value;
        for (let i=0; i<rating; i++){
            el.querySelectorAll('.rate-btn__item')[i].classList.add('rate-btn__item_active');
        }
    })
})