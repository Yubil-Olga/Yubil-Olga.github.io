document.querySelectorAll('.like-btn').forEach(el => {
    el.addEventListener('click', () => {
        let likes = el.getAttribute('data-count');
        if (el.querySelector('input').checked) {
            likes++; 
            el.querySelector('.material-icons').textContent = 'favorite';
            el.classList.add('like-btn_active');
        }
        else {
            likes--;
            el.querySelector('.material-icons').textContent = 'favorite_border';
            el.classList.remove('like-btn_active');
        }
        el.setAttribute('data-count', likes);
    })
})
