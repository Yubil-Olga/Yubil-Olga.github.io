export default class Ratebtn {
  constructor(htmlElement) {
    this.rateButton = htmlElement;
    this.findDOMElements();
    this.init();
  }

  findDOMElements() {
    this.stars = this.rateButton.querySelectorAll('.rate-btn__icon');
    this.inputs = this.rateButton.querySelectorAll('.rate-btn__input');
  }

  init() {
    this.handleRateButtonClick = this.handleRateButtonClick.bind(this);
    this.rateButton.addEventListener('click', this.handleRateButtonClick);
  }

  handleRateButtonClick(event) {
    const rating = event.target.value;
    this.clearStars();
    for (let i = 0; i < rating; i += 1) {
      this.stars[i].textContent = 'star';
    }
  }

  clearStars() {
    this.stars.forEach((el) => {
      el.textContent = 'star_border';
    });
  }
}
