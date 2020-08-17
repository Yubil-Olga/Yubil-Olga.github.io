export default class LikeBtn {
  constructor(htmlElement) {
    this.button = htmlElement;
    this.icon = htmlElement.querySelector('.js-like-btn__icon')
    this.input = htmlElement.querySelector('.js-like-btn__input')
    this.likes = parseInt(this.button.getAttribute('data-count'), 10);
    this.activeStatus = 'like-btn_active'
    this.bindEventListener()
  }

  bindEventListener() {
    this.input.addEventListener('click', this.toggleLikeBtn.bind(this))
  }
  toggleLikeBtn() {
    if (this.button.classList.contains(this.activeStatus)) {
      this.setUnactive()
    } else {
      this.setActive()
    }
    this.button.setAttribute('data-count', this.likes);
  }
  setActive() {
    this.likes += 1
    this.icon.textContent = 'favorite'
    this.button.classList.add(this.activeStatus)
    this.input.setAttribute('checked', true)
  }
  setUnactive() {
    this.likes -= 1
    this.icon.textContent = 'favorite_border'
    this.button.classList.remove(this.activeStatus)
    this.input.removeAttribute('checked')
  }
}