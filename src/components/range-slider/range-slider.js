import 'jquery';
import 'jquery-ui/ui/widgets/slider'

class RangeSlider {
  constructor(outerCountainerElement) {
    this.outerCountainerElement = outerCountainerElement;
    this.render();
  }
  
  initialize() {
    const $outerCountainerElement = $('html').find(this.outerCountainerElement);
    this.$element = $outerCountainerElement.find('.js-slider-range')
  }
  
  initializeSlider() {
    this.$element.slider({
      range: true,
      min: 1000,
      max: 16000,
      values: [5000, 10000],
      slide(event, ui) {
        $('#amount').val(`${ui.values[0]}₽ - ${ui.values[1]}₽`);
      },
    });
    $('#amount').val(`${this.$element.slider('values', 0)} ₽`
      + ` - ${this.$element.slider('values', 1)} ₽`);
  }

  render(){
    this.initialize();
    this.initializeSlider();
  }
}

export default RangeSlider;
