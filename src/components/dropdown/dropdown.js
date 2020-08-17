import DropdownOption from '../dropdown-option/dropdown-option'

export default class Dropdown {
  constructor(htmlElement, optionCases) {
    this.dropdown = htmlElement
    this.activeStatus = 'dropdown_active'
    this.question = htmlElement.querySelector('.js-dropdown__title').textContent
    this.title = htmlElement.querySelector('.js-dropdown__title')
    this.titleCases = optionCases
    this.toggle = htmlElement.querySelector('.js-dropdown__selection')
    this.options = htmlElement.querySelectorAll('.js-dropdown__option')
    this.acceptBtn = htmlElement.querySelector('.js-dropdown__accept-btn') ? htmlElement.querySelector('.js-dropdown__accept-btn') : null
    this.cleanBtn = htmlElement.querySelector('.js-dropdown__clean-btn') ? htmlElement.querySelector('.js-dropdown__clean-btn') : null
    
    this.setOptions()
    this.bindEventListeners()
    
  }

  setOptions() {
    this.values = Array.from(this.options).map((el) => new DropdownOption(el))
  }

  bindEventListeners() {
    this.toggle.addEventListener('click', this.toggleDropdown.bind(this))
    this.options.forEach((el) => {
      el.addEventListener('click', this.changeOptions.bind(this))
    })
    if (this.acceptBtn) {
      this.acceptBtn.addEventListener('click', this.acceptChanges.bind(this))
    }
    if (this.cleanBtn) {
      this.cleanBtn.addEventListener('click', this.cleanChanges.bind(this))
    }
    this.documentClick = this.closeDropdown.bind(this)
    document.addEventListener('click', this.documentClick)
  }

  toggleDropdown() {
    this.dropdown.classList.toggle(this.activeStatus)
  }

  closeDropdown() {
    if (this.toBeClosed()) {
      this.dropdown.classList.remove(this.activeStatus)
    }
  }

  toBeClosed() {
    return (event.target.closest('.js-dropdown') !== this.dropdown && this.dropdown.classList.contains(this.activeStatus))
  }

  acceptChanges() {
    event.preventDefault();
    this.toggleDropdown()
  }

  cleanChanges() {
    event.preventDefault();
    for (let i=0; i< this.values.length; i++) {
      this.values[i].input.value = 0
      this.values[i].value = 0
    }
    this.cleanBtnVisibility()
    this.title.textContent = this.question
  }

  changeOptions() {
    if (this.cleanBtn) {
      this.cleanBtnVisibility()
    }
    this.selected = []
    this.values.forEach((el) => {
      const group = {
        name: el.container.getAttribute('data-group'),
        value: el.value
      }
      group.collection = this.titleCases[group.name] ? this.titleCases[group.name] : null
      
      const index = this.selected.findIndex(el => el.name === group.name)
      if ( index >= 0 ) {
        this.selected[index].value += el.value
      }
      else {
        this.selected.push(group)
      }
      
    })
    
    this.updateTitle()
  }

  cleanBtnVisibility() {
    const selection = this.values.filter(option => option.value > 0)
    const visibilityStyle = 'dropdown__clean-btn_visible'
    if (selection.length > 0 && !this.cleanBtn.classList.contains(visibilityStyle)) {
      this.cleanBtn.classList.add(visibilityStyle)
    } 
    if (selection.length < 1 && this.cleanBtn.classList.contains(visibilityStyle)) {
      this.cleanBtn.classList.remove(visibilityStyle)
    }
  }

  updateTitle() {
    const selected = this.selected.filter(el => el.value > 0)
    if (selected.length > 0) {
      selected.forEach(el => {
        if(el.collection) {
          switch(el.value.toString()) {
            case '1':
              el.name = el.collection[0];
              break;
            case '2':
            case '3':
            case '4':
              el.name = el.collection[1];
              break;
            default:
              el.name = el.collection[2];
          }
        }
      })
      
      this.title.textContent = selected.map(el => `${el.value} ${el.name}`).join(', ')
    } else {
      this.title.textContent = this.question
    }
  }
}