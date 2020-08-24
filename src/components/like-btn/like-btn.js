export default class LikeBtn {
  constructor(htmlElement) {
    this.button = htmlElement;
    this.findDOMElements();
    this.bindEventListener();
  }

  findDOMElements() {
    this.likes = parseInt(this.button.getAttribute('data-count'), 10);
    this.activeStatus = 'like-btn_active';
    this.icon = this.button.querySelector('.js-like-btn__icon');
    this.input = this.button.querySelector('.js-like-btn__input');
  }

  bindEventListener() {
    this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
    this.input.addEventListener('click', this.handleLikeBtnClick);
  }

  handleLikeBtnClick() {
    if (this.button.classList.contains(this.activeStatus)) {
      this.setUnactive();
    } else {
      this.setActive();
    }
    this.button.setAttribute('data-count', this.likes);
  }

  setActive() {
    this.likes += 1;
    this.icon.textContent = 'favorite';
    this.button.classList.add(this.activeStatus);
    this.input.setAttribute('checked', true);
  }

  setUnactive() {
    this.likes -= 1;
    this.icon.textContent = 'favorite_border';
    this.button.classList.remove(this.activeStatus);
    this.input.removeAttribute('checked');
  }
}
