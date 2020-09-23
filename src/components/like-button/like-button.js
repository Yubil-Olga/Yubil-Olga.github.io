import MaterialIcon from '../material-icon/material-icon';

export default class LikeButton {
  constructor(htmlElement) {
    this.button = htmlElement;
    this.likeButtonActiveClassName = 'like-button_active';
    this.findDOMElements();
    this.bindEventListener();
  }

  findDOMElements() {
    this.likes = parseInt(this.button.getAttribute('data-count'), 10);
    this.iconContainer = this.button.querySelector('.js-like-button__icon');
    this.icon = new MaterialIcon(this.iconContainer);
    this.input = this.button.querySelector('.js-like-button__input');
  }

  bindEventListener() {
    this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
    this.input.addEventListener('click', this.handleLikeBtnClick);
  }

  handleLikeBtnClick() {
    if (this.button.classList.contains(this.likeButtonActiveClassName)) {
      this.setInactive();
    } else {
      this.setActive();
    }
    this.button.setAttribute('data-count', this.likes);
  }

  setActive() {
    this.likes += 1;
    this.icon.setTextContent('favorite');
    this.button.classList.add(this.likeButtonActiveClassName);
    this.input.setAttribute('checked', true);
  }

  setInactive() {
    this.likes -= 1;
    this.icon.setTextContent('favorite_border');
    this.button.classList.remove(this.likeButtonActiveClassName);
    this.input.removeAttribute('checked');
  }
}
