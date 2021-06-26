class DropDown {
  constructor(outerContainerElement) {
    this.outerContainerElement = outerContainerElement;
    this.countAdult = 0;
    this.countBaby = 0;
    this.title = 'Сколько гостей';
    this.render();
  }

  initialize() {
    this.titleBtn = this.outerContainerElement.querySelector('.js-drop-down__title-btn');
    this.body = this.outerContainerElement.querySelector('.js-drop-down__body');
    this.btnClean = this.outerContainerElement.querySelector('.js-drop-down__bodyItem-btns-control-clean');
    this.btnOk = this.outerContainerElement.querySelector('.js-drop-down__bodyItem-btns-control-ok');
  }

  handleBtnTitleClick = () => {
    this.body.classList.toggle('drop-down__body_show');
  }

  handleBtnCleanClick = () => {
    this.body.querySelectorAll('.js-drop-down__bodyItem-btns-count').forEach((element) => { element.innerHTML = 0; });
    this.body.querySelectorAll('.js-drop-down__bodyItem-btns-inc').forEach((element) => element.classList.remove('drop-down__bodyItem-btns-inc_active'));
    this.btnClean.classList.remove('drop-down__bodyItem-btns-control-clean_show');
    this.titleBtn.innerHTML = this.title;
  }

  handleBtnOkClick = () => {
    this.body.classList.remove('drop-down__body_show');
  }

  handleBodyClick = (e) => {
    const element = e.target;
    if (element.id) {
      const count = element.parentElement.querySelector('.js-drop-down__bodyItem-btns-count');
      const btnInc = element.parentElement.querySelector('.js-drop-down__bodyItem-btns-inc');
      const guestName = element.parentElement.previousElementSibling.innerHTML;

      let newTitle = this.title;

      let adultWord = 'гостей';
      let babytWord = 'младенец';

      if (element.id === 'dec') {
        count.innerHTML = +count.innerHTML + 1;
        guestName === 'младенцы' ? this.countBaby += 1 : this.countAdult += 1;
      } else if (count.innerHTML >= '1') {
        count.innerHTML = +count.innerHTML - 1;
        guestName === 'младенцы' ? this.countBaby -= 1 : this.countAdult -= 1;
      }

      adultWord = (this.countAdult === 1) ? 'гость' : (this.countAdult > 1 && this.countAdult < 4) ? 'гостья' : adultWord;

      babytWord = (this.countBaby > 1 && this.countBaby < 4) ? 'младенецa' : (this.countBaby > 4) ? 'младенецв' : babytWord;

      if (this.countAdult > 0 || this.countBaby > 0) {
        newTitle = `${this.countAdult} ${adultWord}`;
        if (this.countBaby > 0) {
          newTitle += `, ${this.countBaby} ${babytWord}`;
        }
      }

      if (count.innerHTML > 0) {
        btnInc.classList.add('drop-down__bodyItem-btns-inc_active');
        this.btnClean.classList.add('drop-down__bodyItem-btns-control-clean_show');
      } else {
        btnInc.classList.remove('drop-down__bodyItem-btns-inc_active');
        this.btnClean.classList.remove('drop-down__bodyItem-btns-control-clean_show');
      }
      this.titleBtn.innerHTML = newTitle;
    }
  }

  setEventHandlers() {
    this.titleBtn.addEventListener('click', this.handleBtnTitleClick);
    this.body.addEventListener('click', this.handleBodyClick);
    this.btnClean.addEventListener('click', this.handleBtnCleanClick);
    this.btnOk.addEventListener('click', this.handleBtnOkClick);
  }

  render() {
    this.initialize();
    this.setEventHandlers();
  }
}
export default DropDown;

