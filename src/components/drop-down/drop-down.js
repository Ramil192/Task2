class DropDown {
  constructor(outerContainerElement) {
    this.outerContainerElement = outerContainerElement;
    this.countAdult = 0;
    this.countBaby = 0;
    this.title = 'Сколько гостей';
    this._render();
  }

  _initialize() {
    this.titleButton = this.outerContainerElement.querySelector('.js-drop-down__title-button');
    this.body = this.outerContainerElement.querySelector('.js-drop-down__items');
    this.buttonClean = this.outerContainerElement.querySelector('.js-drop-down__item-buttons-control-clean');
    this.buttonOk = this.outerContainerElement.querySelector('.js-drop-down__item-buttons-control-ok');
  }

  _handleButtonTitleClick = () => {
    this.body.classList.toggle('drop-down__items_show');
  }

  _handleButtonCleanClick = () => {
    this.body.querySelectorAll('.js-drop-down__item-buttons-count').forEach((element) => { element.innerHTML = 0; });
    this.body.querySelectorAll('.js-drop-down__item-buttons-increment').forEach((element) => element.classList.remove('drop-down__item-buttons-increment_active'));
    this.buttonClean.classList.remove('drop-down__item-buttons-control-clean_show');
    this.titleButton.innerHTML = this.title;
  }

  _handleButtonOkClick = () => {
    this.body.classList.remove('drop-down__items_show');
  }

  _handleBodyClick = (e) => {
    const element = e.target;
    if (element.id) {
      const count = element.parentElement.querySelector('.js-drop-down__item-buttons-count');
      const buttonIncrement = element.parentElement.querySelector('.js-drop-down__item-buttons-increment');
      const guestName = element.parentElement.previousElementSibling.innerHTML;

      let newTitle = this.title;

      let adultWord = 'гостей';
      let babyWord = 'младенец';

      if (element.id === 'decrement') {
        count.innerHTML = parseInt(count.innerHTML, 10) + 1;
        guestName === 'младенцы' ? this.countBaby += 1 : this.countAdult += 1;
      } else if (count.innerHTML >= '1') {
        count.innerHTML = parseInt(count.innerHTML, 10) - 1;
        guestName === 'младенцы' ? this.countBaby -= 1 : this.countAdult -= 1;
      }

      adultWord = (this.countAdult === 1) ? 'гость' : (this.countAdult > 1 && this.countAdult < 4) ? 'гостья' : adultWord;

      babyWord = (this.countBaby > 1 && this.countBaby < 4) ? 'младенца' : (this.countBaby > 4) ? 'младенцев' : babyWord;

      if (this.countAdult > 0 || this.countBaby > 0) {
        newTitle = `${this.countAdult} ${adultWord}`;
        if (this.countBaby > 0) {
          newTitle += `, ${this.countBaby} ${babyWord}`;
        }
      }

      if (count.innerHTML > 0) {
        buttonIncrement.classList.add('drop-down__item-buttons-increment_active');
        this.buttonClean.classList.add('drop-down__item-buttons-control-clean_show');
      } else {
        buttonIncrement.classList.remove('drop-down__item-buttons-increment_active');
        this.buttonClean.classList.remove('drop-down__item-buttons-control-clean_show');
      }
      this.titleButton.innerHTML = newTitle;
    }
  }

  _setEventHandlers() {
    this.titleButton.addEventListener('click', this._handleButtonTitleClick);
    this.body.addEventListener('click', this._handleBodyClick);
    this.buttonClean.addEventListener('click', this._handleButtonCleanClick);
    this.buttonOk.addEventListener('click', this._handleButtonOkClick);
  }

  _render() {
    this._initialize();
    this._setEventHandlers();
  }
}

export default DropDown;
