class RateBtn {
  constructor(outerContainerElement) {
    this.outerContainerElement = outerContainerElement;
    this.render();
  }

  initialize() {
    this.ratingItemsList = this.outerContainerElement.querySelectorAll('.js-rating__item');
    this.ratingItemsArray = Array.prototype.slice.call(this.ratingItemsList);
  }

  handleRateBtnClick(item) {
    const { itemValue } = item.dataset;
    item.parentNode.dataset.totalValue = itemValue;
  }

  setEventHandlers() {
    this.ratingItemsArray.forEach((item) => item.addEventListener('click', () => this.handleRateBtnClick(item)));
  }

  render() {
    this.initialize();
    this.setEventHandlers();
  }
}

$(() => {
  if (document.querySelector('.js-rating')) {
    document.querySelectorAll('.js-rating').forEach((element) => new RateBtn(element));
  }
});
