class Checkbox {
  constructor(outerContainerElement) {
    this.outerContainerElement = outerContainerElement;
    this.render();
  }

  initialize() {
    this.checkboxBtn = this.outerContainerElement.querySelector('.js-checkbox-list__titleBtn');
    this.checkboxItems = this.outerContainerElement.querySelector('.js-checkbox-list__items');
  }

  handleCheckboxClick = () => {
    this.checkboxItems.classList.toggle('checkbox-list__items_show');
    this.checkboxBtn.classList.toggle('checkbox-list__titleBtn_rotate');
  }

  setEventHandlers() {
    this.checkboxBtn.addEventListener('click', this.handleCheckboxClick);
  }

  render() {
    this.initialize();
    this.setEventHandlers();
  }
}

$(() => {
  if (document.querySelector('.js-checkbox-list')) {
    document.querySelectorAll('.js-checkbox-list').forEach((element) => new Checkbox(element));
  }
});

export default Checkbox;
