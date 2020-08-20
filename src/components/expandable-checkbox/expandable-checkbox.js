export default class ExpandableCheckbox {
  constructor(htmlElement) {
    this.expandCheckbox = htmlElement;
    this.findHTMLElements();
    this.bindEventListeners();
  }

  findHTMLElements() {
    this.activeStatus = 'expandable-checkbox_active';
    this.toggle = this.expandCheckbox.querySelector('.js-expandable-checkbox__selection');
  }

  bindEventListeners() {
    this.toggle.addEventListener('click', this.toggleCheckbox.bind(this));
  }

  toggleCheckbox() {
    this.expandCheckbox.classList.toggle(this.activeStatus);
  }
}
