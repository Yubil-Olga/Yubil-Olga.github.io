export default class DropdownOption {
  constructor(htmlElement) {
    this._container = htmlElement;
    this._getHTMLElements();
    this.checkValue();
    this._bindEventListeners();
  }

  _getHTMLElements() {
    this.option = this._container.querySelector('.js-dropdown-option');
    this.name = this._container.querySelector('.js-dropdown-option__name').textContent;
    this.input = this._container.querySelector('.js-dropdown-option__input');
    this.value = Number(this.input.value);
    const signs = {
      increment: '+',
      decrement: '-',
    };
    this._container.querySelectorAll('.js-dropdown-option__button').forEach((el) => {
      if (el.textContent === signs.increment) {
        this._incrementButton = el;
      }
      if (el.textContent === signs.decrement) {
        this._decrementButton = el;
      }
    });
  }

  _bindEventListeners() {
    this._handlePlusButtonClick = this._handlePlusButtonClick.bind(this);
    this._incrementButton.addEventListener('click', this._handlePlusButtonClick);
    this._handleMinusButtonClick = this._handleMinusButtonClick.bind(this);
    this._decrementButton.addEventListener('click', this._handleMinusButtonClick);
  }

  _handlePlusButtonClick() {
    this.value += 1;
    this._displayResult();
    this._activateDecrementButton();
  }

  _handleMinusButtonClick() {
    if (this.value > 0) {
      this.value -= 1;
    }
    this._displayResult();
    this.checkValue();
  }

  _displayResult() {
    this.input.setAttribute('value', this.value);
    this.input.value = this.value;
    this.result = `${this.value} ${this.name} `;
  }

  checkValue() {
    if (this.value === 0) {
      this._deactivateDecrementButton();
    } else {
      this._activateDecrementButton();
    }
  }

  _activateDecrementButton() {
    if (this._decrementButton.classList.contains('dropdown-option__button_inactive')) {
      this._decrementButton.classList.remove('dropdown-option__button_inactive');
    }
  }

  _deactivateDecrementButton() {
    this._decrementButton.classList.add('dropdown-option__button_inactive');
  }
}
