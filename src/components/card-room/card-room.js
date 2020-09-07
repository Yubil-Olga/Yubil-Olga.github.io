import 'slick-carousel';
import 'slick-carousel/slick/slick.scss';

export default class CardRoom {
  constructor(htmlElement) {
    this.$container = $(htmlElement);
    this.findDOMElements();
  }

  findDOMElements() {
    this.$gallery = this.$container.find('.js-card-room__gallery');
    this.$gallery.slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
    });
  }
}
