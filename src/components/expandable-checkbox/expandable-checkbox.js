export default class ExpandableCheckbox {
  constructor(htmlElement) {
    this.expandCheckbox = htmlElement;
    this.findHTMLElements();
    this.bindEventListeners();
  }

  findHTMLElements() {
    this.toggle = this.expandCheckbox.querySelector('.js-expandable-checkbox__selection');
  }

  bindEventListeners() {
    this.handleSelectionClick = this.handleSelectionClick.bind(this);
    this.toggle.addEventListener('click', this.handleSelectionClick);
  }

  handleSelectionClick() {
    this.expandCheckbox.classList.toggle('expandable-checkbox_active');
  }
}
