class Checkbox {
  constructor(outerContainerElement) {
    this.outerContainerElement = outerContainerElement;
    this._render();
  }

  _initialize() {
    this.checkboxBtn = this.outerContainerElement.querySelector('.js-checkbox-list__title-btn');
    this.checkboxItems = this.outerContainerElement.querySelector('.js-checkbox-list__items');
  }

  _handleCheckboxClick = () => {
    this.checkboxItems.classList.toggle('checkbox-list__items_show');
    this.checkboxBtn.classList.toggle('checkbox-list__title-btn_rotate');
  }

  _setEventHandlers() {
    this.checkboxBtn.addEventListener('click', this._handleCheckboxClick);
  }

  _render() {
    this._initialize();
    this._setEventHandlers();
  }
}

export default Checkbox;
