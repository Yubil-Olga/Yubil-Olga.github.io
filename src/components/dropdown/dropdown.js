import DropdownOption from '../dropdown-option/dropdown-option';

export default class Dropdown {
  constructor(htmlElement, optionCases) {
    this.dropdown = htmlElement;
    this.titleCases = optionCases;
    this.activeStatus = 'dropdown_active';
    this.findHTMLElements();
    this.setOptions();
    this.bindEventListeners();
  }

  findHTMLElements() {
    this.toggle = this.dropdown.querySelector('.js-dropdown__selection');
    this.question = this.dropdown.querySelector('.js-dropdown__title').textContent;
    this.title = this.dropdown.querySelector('.js-dropdown__title');
    this.options = this.dropdown.querySelectorAll('.js-dropdown__option');
    this.acceptBtn = this.dropdown.querySelector('.js-dropdown__accept-button') || null;
    this.cleanBtn = this.dropdown.querySelector('.js-dropdown__clean-button') || null;
  }

  setOptions() {
    this.values = Array.from(this.options).map((el) => new DropdownOption(el));
  }

  bindEventListeners() {
    this.handleSelectionClick = this.handleSelectionClick.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.handleAcceptBtnClick = this.handleAcceptBtnClick.bind(this);
    this.handleCleanBtnClick = this.handleCleanBtnClick.bind(this);
    this.handleDocumentClick = this.closeDropdown.bind(this);
    this.toggle.addEventListener('click', this.handleSelectionClick);
    this.options.forEach((el) => el.addEventListener('click', this.handleOptionClick));
    if (this.acceptBtn) this.acceptBtn.addEventListener('click', this.handleAcceptBtnClick);
    if (this.cleanBtn) this.cleanBtn.addEventListener('click', this.handleCleanBtnClick);
    document.addEventListener('click', this.handleDocumentClick);
  }

  handleSelectionClick() {
    this.dropdown.classList.toggle(this.activeStatus);
  }

  closeDropdown(event) {
    if (this.toBeClosed(event)) {
      this.dropdown.classList.remove(this.activeStatus);
    }
  }

  toBeClosed(event) {
    return (event.target.closest('.js-dropdown') !== this.dropdown && this.dropdown.classList.contains(this.activeStatus));
  }

  handleAcceptBtnClick(event) {
    event.preventDefault();
    this.dropdown.classList.remove(this.activeStatus);
  }

  handleCleanBtnClick(event) {
    event.preventDefault();
    this.values.forEach((el) => {
      el.input.value = 0;
      el.value = 0;
    });
    this.cleanBtnVisibility();
    this.title.textContent = this.question;
  }

  handleOptionClick() {
    if (this.cleanBtn) {
      this.cleanBtnVisibility();
    }
    this.selected = [];
    this.values.forEach((el) => {
      const group = {
        name: el.option.getAttribute('data-group'),
        value: el.value,
      };
      group.collection = this.titleCases[group.name] ? this.titleCases[group.name] : null;

      const index = this.selected.findIndex((elem) => elem.name === group.name);
      if (index >= 0) {
        this.selected[index].value += el.value;
      } else {
        this.selected.push(group);
      }
    });

    this.updateTitle();
  }

  cleanBtnVisibility() {
    const selection = this.values.filter((option) => option.value > 0);
    const visibilityStyle = 'dropdown__clean-button_visible';
    if (selection.length > 0 && !this.cleanBtn.classList.contains(visibilityStyle)) {
      this.cleanBtn.classList.add(visibilityStyle);
    }
    if (selection.length < 1 && this.cleanBtn.classList.contains(visibilityStyle)) {
      this.cleanBtn.classList.remove(visibilityStyle);
    }
  }

  updateTitle() {
    const selected = this.selected.filter((el) => el.value > 0);
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

      this.title.textContent = selected.map((el) => `${el.value} ${el.word}`).join(', ');
    } else {
      this.title.textContent = this.question;
    }
  }
}
