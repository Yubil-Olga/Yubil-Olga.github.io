import DropdownOption from '../dropdown-option/DropdownOption';

export default class Dropdown {
  constructor(htmlElement, optionCases) {
    this._dropdown = htmlElement;
    this._titleCases = optionCases;
    this._dropdownActiveClassName = 'dropdown_active';
    this._findHTMLElements();
    this._setOptions();
    this._bindEventListeners();
  }

  _findHTMLElements() {
    this._toggle = this._dropdown.querySelector('.js-dropdown__selection');
    this._question = this._dropdown.querySelector('.js-dropdown__title').textContent;
    this._title = this._dropdown.querySelector('.js-dropdown__title');
    this._menu = this._dropdown.querySelector('.js-dropdown__menu');
    this._options = this._dropdown.querySelectorAll('.js-dropdown__option');
    this._values = Array.from(this._options).map((el) => new DropdownOption(el));
    this._acceptButton = this._dropdown.querySelector('.js-dropdown__accept-button') || null;
    this._cleanButton = this._dropdown.querySelector('.js-dropdown__clean-button') || null;
  }

  _setOptions() {
    this._selected = [];
    this._values.forEach((el) => {
      const group = {
        name: el.option.getAttribute('data-group'),
        value: el.value,
      };
      group.collection = this._titleCases[group.name] ? this._titleCases[group.name] : null;

      const index = this._selected.findIndex((elem) => elem.name === group.name);
      if (index >= 0) {
        this._selected[index].value += el.value;
      } else {
        this._selected.push(group);
      }
    });

    this._updateTitle();
  }

  _bindEventListeners() {
    this._handleSelectionClick = this._handleSelectionClick.bind(this);
    this._handleOptionClick = this._handleOptionClick.bind(this);
    this._handleAcceptButtonClick = this._handleAcceptButtonClick.bind(this);
    this._handleCleanButtonClick = this._handleCleanButtonClick.bind(this);
    this._handleDocumentClick = this._handleDocumentClick.bind(this);
    this._toggle.addEventListener('click', this._handleSelectionClick);
    this._options.forEach((el) => el.addEventListener('click', this._handleOptionClick));
    if (this._acceptButton) this._acceptButton.addEventListener('click', this._handleAcceptButtonClick);
    if (this._cleanButton) this._cleanButton.addEventListener('click', this._handleCleanButtonClick);
    document.addEventListener('click', this._handleDocumentClick);
  }

  _handleSelectionClick() {
    this._toggle.classList.toggle('dropdown__selection_active');
    this._menu.classList.toggle('dropdown__menu_active');
  }

  _handleDocumentClick(event) {
    if (event.target.closest('.js-dropdown') !== this._dropdown) {
      this._closeDropdown();
    }
  }

  _closeDropdown() {
    const isDropdownClosed = this._toggle.classList.contains('dropdown__selection_active')
      && this._menu.classList.contains('dropdown__menu_active');
    if (isDropdownClosed) {
      this._toggle.classList.remove('dropdown__selection_active');
      this._menu.classList.remove('dropdown__menu_active');
    }
  }

  _handleAcceptButtonClick(event) {
    event.preventDefault();
    this._closeDropdown();
  }

  _handleCleanButtonClick(event) {
    event.preventDefault();
    this._values.forEach((el) => {
      el.input.value = 0;
      el.value = 0;
      el.checkValue();
    });
    this._cleanButtonVisibility();
    this._title.textContent = this._question;
  }

  _handleOptionClick() {
    if (this._cleanButton) {
      this._cleanButtonVisibility();
    }
    this._setOptions();
  }

  _cleanButtonVisibility() {
    const selection = this._values.filter((option) => option.value > 0);
    const visibilityStyle = 'dropdown__clean-button_visible';
    const isCleanButtonVisible = (selection.length > 0)
      && (!this._cleanButton.classList.contains(visibilityStyle));
    const isCleanButtonHidden = (selection.length < 1)
      && (this._cleanButton.classList.contains(visibilityStyle));
    if (isCleanButtonVisible) {
      this._cleanButton.classList.add(visibilityStyle);
    }
    if (isCleanButtonHidden) {
      this._cleanButton.classList.remove(visibilityStyle);
    }
  }

  _updateTitle() {
    const selected = this._selected.filter((el) => el.value > 0);
    if (selected.length > 0) {
      selected.forEach((el) => {
        if (el.collection) {
          let index = 0;
          const value = el.value > 20 ? el.value % 10 : el.value;
          switch (value) {
            case 1:
              index = 0;
              break;
            case 2:
            case 3:
            case 4:
              index = 1;
              break;
            default:
              index = 2;
          }
          el.word = el.collection[index];
        } else {
          el.word = el.name;
        }
      });

      this._title.textContent = selected.map((el) => `${el.value} ${el.word}`).join(', ');
    } else {
      this._title.textContent = this._question;
    }
  }
}
