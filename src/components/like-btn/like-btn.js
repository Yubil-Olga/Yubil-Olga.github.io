document.querySelectorAll('.js-like-btn').forEach(el => {
    el.addEventListener('change', liked)
    function liked(event) {
        let likes = event.currentTarget.getAttribute('data-count');
            if (event.currentTarget.querySelector('input').checked) {
                likes++;
                event.currentTarget.querySelector('.material-icons').textContent = 'favorite';
                event.currentTarget.classList.add('like-btn_active');
            }
            else {
                likes--; 
                event.currentTarget.querySelector('.material-icons').textContent = 'favorite_border';
                event.currentTarget.classList.remove('like-btn_active');
            }
            event.currentTarget.setAttribute('data-count', likes);
    }
})

