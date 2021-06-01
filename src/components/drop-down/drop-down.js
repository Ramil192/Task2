class DropDown {
  constructor(outerContainerElement) {
    this.outerContainerElement = outerContainerElement;
    this.countAdult = 0;
    this.countBaby = 0;
    this.title = 'Сколько гостей';
    this.render();
  }
  initialize() {
    this.titleBtn = this.outerContainerElement.querySelector('.js-drop-down__titleBtn');
    this.body = this.outerContainerElement.querySelector('.js-drop-down__body');
    this.btnClean = this.outerContainerElement.querySelector('.js-drop-down__bodyItem-btns-control-clean');
    this.btnOk = this.outerContainerElement.querySelector('.js-drop-down__bodyItem-btns-control-ok');
  }
  handleBtnTitleClick() {
    this.body.classList.toggle('drop-down__body_show');
  }
  handleBtnCleanClick() {
    this.body.querySelectorAll('.js-drop-down__bodyItem-btns-count').forEach(e => e.innerHTML = 0);
    this.body.querySelectorAll('.js-drop-down__bodyItem-btns-inc').forEach(e => e.classList.remove('drop-down__bodyItem-btns-inc_active'));
    this.btnClean.classList.remove('drop-down__bodyItem-btns-control-clean_show');
    this.titleBtn.innerHTML = this.title;
  }
  handleBtnOkClick() {
    this.body.classList.remove('drop-down__body_show');
  }
  handleBodyClick(e) {
    const element = e.target;
    if (element.id) {
      const count = element.parentElement.querySelector('.js-drop-down__bodyItem-btns-count');
      const btnInc = element.parentElement.querySelector('.js-drop-down__bodyItem-btns-inc');
      const guestName = element.parentElement.previousElementSibling.innerHTML;

      let newTitle = this.title;

      let adultWord = 'гостей';
      let babytWord = 'младенец';

      if (element.id === 'dec') {
        count.innerHTML++;
        guestName === 'младенцы' ? this.countBaby++ : this.countAdult++;
      } else if (count.innerHTML >= '1') {
        count.innerHTML--;
        guestName === 'младенцы' ? this.countBaby-- : this.countAdult--;
      }

      adultWord = (this.countAdult === 1) ? 'гость' : (this.countAdult > 1 && this.countAdult < 4) ? 'гостья' : adultWord;

      babytWord = (this.countBaby > 1 && this.countBaby < 4) ? 'младенецa' : (this.countBaby > 4) ? 'младенецв' : babytWord;

      if (this.countAdult > 0 || this.countBaby > 0) {
        newTitle = `${this.countAdult} ${adultWord}`
        if (this.countBaby > 0) {
          newTitle = newTitle + `, ${this.countBaby} ${babytWord}`
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
    this.titleBtn.addEventListener('click', () => this.handleBtnTitleClick());
    this.body.addEventListener('click', (e) => this.handleBodyClick(e));
    this.btnClean.addEventListener('click', () => this.handleBtnCleanClick());
    this.btnOk.addEventListener('click', () => this.handleBtnOkClick());
  }
  render() {
    this.initialize();
    this.setEventHandlers();
  }
}

$(function () {
  if (document.querySelector('.js-drop-down')) {
    document.querySelectorAll('.js-drop-down').forEach(e => new DropDown(e));
  }
})

