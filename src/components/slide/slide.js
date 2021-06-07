import jQuery from 'jquery';

import 'slick-carousel';
import 'slick-carousel/slick/slick.css';

const $ = jQuery;
global.jQuery = $;
global.$ = $;

class Slider {
  constructor(outerContainerElement) {
    this.outerContainerElement = outerContainerElement;
    this.render();
  }

  initialize() {
    const $outerContainerElement = $('html').find(this.outerContainerElement);
    this.$element = $outerContainerElement.find('.rev_slide')
  }
  initializeSlick() {
    this.$element.slick({ dots: true });
  }
  render(){
    this.initialize();
    this.initializeSlick();
  }
}

export default Slider;

