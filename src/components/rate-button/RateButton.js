import MaterialIcon from '../material-icon/MaterialIcon';

export default class RateButton {
  constructor(htmlElement) {
    this._rateButton = htmlElement;
    this._findDOMElements();
    this._bindEventListener();
  }

  _findDOMElements() {
    this._starsContainer = this._rateButton.querySelectorAll('.js-rate-button__icon');
    this._stars = Array.from(this._starsContainer).map((el) => new MaterialIcon(el));
    this._inputs = this._rateButton.querySelectorAll('.js-rate-button__input');
  }

  _bindEventListener() {
    this._handleRateButtonClick = this._handleRateButtonClick.bind(this);
    this._rateButton.addEventListener('click', this._handleRateButtonClick);
  }

  _handleRateButtonClick(event) {
    const rating = event.target.value;
    this.clearStars();
    for (let i = 0; i < rating; i += 1) {
      this._stars[i].setTextContent('star');
    }
  }

  clearStars() {
    this._stars.forEach((el) => {
      el.setTextContent('star_border');
    });
  }
}
