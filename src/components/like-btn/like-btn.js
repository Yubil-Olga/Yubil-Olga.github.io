document.querySelectorAll('.like-btn input').forEach(el => {
    el.addEventListener('click', () => {
        let likes=el.parentNode.getAttribute('data-count');
        if (el.parentNode.classList.contains('like-btn_active')) {
            likes--;
        }
        if (!el.parentNode.classList.contains('like-btn_active')) {
            likes++;
        }
        el.parentNode.classList.toggle('like-btn_active');
        el.parentNode.setAttribute('data-count', likes);
    })
})