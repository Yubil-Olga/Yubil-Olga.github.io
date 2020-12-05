import MaterialIcon from '../material-icon/MaterialIcon';

export default class LikeButton {
  constructor(htmlElement) {
    this._button = htmlElement;
    this._likeButtonActiveClassName = 'like-button_active';
    this._findDOMElements();
    this._bindEventListener();
  }

  _findDOMElements() {
    this._likes = parseInt(this._button.getAttribute('data-count'), 10);
    this._iconContainer = this._button.querySelector('.js-like-button__icon');
    this._icon = new MaterialIcon(this._iconContainer);
    this._input = this._button.querySelector('.js-like-button__input');
  }

  _bindEventListener() {
    this._handleLikeBtnClick = this._handleLikeBtnClick.bind(this);
    this._input.addEventListener('click', this._handleLikeBtnClick);
  }

  _handleLikeBtnClick() {
    if (this._button.classList.contains(this._likeButtonActiveClassName)) {
      this._setInactive();
    } else {
      this._setActive();
    }
    this._button.setAttribute('data-count', this._likes);
  }

  _setActive() {
    this._likes += 1;
    this._icon.setTextContent('favorite');
    this._button.classList.add(this._likeButtonActiveClassName);
    this._input.setAttribute('checked', true);
  }

  _setInactive() {
    this._likes -= 1;
    this._icon.setTextContent('favorite_border');
    this._button.classList.remove(this._likeButtonActiveClassName);
    this._input.removeAttribute('checked');
  }
}
