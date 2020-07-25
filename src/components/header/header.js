document.querySelectorAll('.header__burger').forEach((el) => {
  const menu = el.parentElement.querySelector('.header__menu');
  function checkWidth(event) {
    if (event.target.innerWidth > 1000 && menu.classList.contains('header__menu_active')) {
      menu.classList.remove('header__menu_active');
      window.removeEventListener('resize', checkWidth)
    }
  }
  function showMenu() {
    menu.classList.toggle('header__menu_active');
    window.addEventListener('resize', checkWidth)
  }
  el.addEventListener('click', showMenu)
})