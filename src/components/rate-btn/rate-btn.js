export default class Ratebtn {
  constructor(htmlElement) {
    this.rateButton = htmlElement
    this.stars = htmlElement.querySelectorAll('.rate-btn__icon')
    this.inputs = htmlElement.querySelectorAll('.rate-btn__input')
    this.init()
  }
  init() {   
    this.rateButton.addEventListener('click', this.star.bind(this))
  }
  star(event) {
    const rating = event.target.value;
    this.clearStars()
    for (let i = 0; i < rating; i += 1) {
      this.stars[i].textContent = 'star'
    }
  }
  clearStars() {
    this.stars.forEach(el => {
      el.textContent = 'star_border'
    })
  }
}
