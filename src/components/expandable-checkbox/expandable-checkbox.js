export default class ExpandableCheckbox {
  constructor(htmlElement) {
    this.expandCheckbox = htmlElement
    this.activeStatus = 'expandable-checkbox_active'
    this.toggle = htmlElement.querySelector('.js-expandable-checkbox__selection')

    this.bindEventListeners()
  }

  bindEventListeners() {
    this.toggle.addEventListener('click', this.toggleCheckbox.bind(this))
  }

  toggleCheckbox() {
    this.expandCheckbox.classList.toggle(this.activeStatus)
  }
}