import MaterialIcon from '../material-icon/material-icon';

export default class RateButton {
  constructor(htmlElement) {
    this.rateButton = htmlElement;
    this.findDOMElements();
    this.init();
  }

  findDOMElements() {
    this.starsContainer = this.rateButton.querySelectorAll('.rate-button__icon');
    this.stars = Array.from(this.starsContainer).map((el) => new MaterialIcon(el));
    this.inputs = this.rateButton.querySelectorAll('.rate-button__input');
  }

  init() {
    this.handleRateButtonClick = this.handleRateButtonClick.bind(this);
    this.rateButton.addEventListener('click', this.handleRateButtonClick);
  }

  handleRateButtonClick(event) {
    const rating = event.target.value;
    this.clearStars();
    for (let i = 0; i < rating; i += 1) {
      this.stars[i].setTextContent('star');
    }
  }

  clearStars() {
    this.stars.forEach((el) => {
      el.setTextContent('star_border');
    });
  }
}
