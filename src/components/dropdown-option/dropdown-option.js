export default class DropdownOption {
  constructor(htmlElement) {
    this.container = htmlElement;
    this.value = 0;
    this.getHTMLElements();
    this.bindEventListeners();
  }

  getHTMLElements() {
    this.option = this.container.querySelector('.js-dropdown-option');
    this.name = this.container.querySelector('.js-dropdown-option__name').textContent;
    this.input = this.container.querySelector('.js-dropdown-option__input');
    const signs = {
      increment: '+',
      decrement: '-',
    };
    this.container.querySelectorAll('.js-dropdown-option__button').forEach((el) => {
      if (el.textContent === signs.increment) {
        this.incrementButton = el;
      }
      if (el.textContent === signs.decrement) {
        this.decrementButton = el;
      }
    });
  }

  bindEventListeners() {
    this.handlePlusButtonClick = this.handlePlusButtonClick.bind(this);
    this.incrementButton.addEventListener('click', this.handlePlusButtonClick);
    this.handleMinusButtonClick = this.handleMinusButtonClick.bind(this);
    this.decrementButton.addEventListener('click', this.handleMinusButtonClick);
  }

  handlePlusButtonClick() {
    if (this.value < 4) {
      this.value += 1;
    }
    this.displayResult();
  }

  handleMinusButtonClick() {
    if (this.value > 0) {
      this.value -= 1;
    }
    this.displayResult();
  }

  displayResult() {
    this.input.setAttribute('value', this.value);
    this.input.value = this.value;
    this.result = `${this.value} ${this.name} `;
  }
}
