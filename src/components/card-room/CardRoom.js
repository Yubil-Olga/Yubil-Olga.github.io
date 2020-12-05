import 'slick-carousel';
import 'slick-carousel/slick/slick.scss';

export default class CardRoom {
  constructor(htmlElement) {
    this._$container = $(htmlElement);
    this._findDOMElements();
    this._initSlickCarousel();
  }

  _findDOMElements() {
    this._$gallery = this._$container.find('.js-card-room__gallery');
  }

  _initSlickCarousel() {
    this._$gallery.slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
    });
  }
}
