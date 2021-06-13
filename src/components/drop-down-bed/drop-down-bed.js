class DropDownBed {
  constructor(outerContainerElement) {
    this.outerContainerElement = outerContainerElement;
    this.countBed = 0;
    this.countBedRoomes = 0;
    this.countBathrooms = 0;
    this.title = 'Сколько комнат';
    this.render();
  }

  initialize() {
    this.titleBtn = this.outerContainerElement.querySelector('.js-drop-down-bed__titleBtn');
    this.body = this.outerContainerElement.querySelector('.js-drop-down-bed__body');
  }

  handleBtnTitleClick = () => {
    this.body.classList.toggle('drop-down-bed__body_show');
  }

  isCount() {
    return (this.countBedRoomes > 0) || (this.countBed > 0) || (this.countBathrooms > 0);
  }

  handleBodyClick = (e) => {
    const element = e.target;
    if (element.id) {
      const count = element.parentElement.querySelector('.js-drop-down-bed__bodyItem-btns-count');
      const btnInc = element.parentElement.querySelector('.js-drop-down-bed__bodyItem-btns-inc');
      const guestName = element.parentElement.previousElementSibling.innerHTML;

      let newTitle = this.title;

      let bedRoomsWord = 'спален';
      let bedWord = 'кроватей';
      const bathoomsWord = '...';

      if (element.id === 'dec') {
        count.innerHTML = +count.innerHTML + 1;
        guestName === 'спальни' ? this.countBedRoomes += 1 : (guestName === 'кровати') ? this.countBed += 1 : this.countBathrooms += 1;
      } else if (count.innerHTML >= '1') {
        count.innerHTML = +count.innerHTML - 1;
        guestName === 'спальни' ? this.countBedRoomes -= 1 : (guestName === 'кровати') ? this.countBed -= 1 : this.countBathrooms -= 1;
      }

      bedRoomsWord = (this.countBedRoomes === 1) ? 'спальня' : (this.countBedRoomes > 1 && this.countBedRoomes < 4) ? 'спальни' : bedRoomsWord;
      bedWord = (this.countBed === 1) ? 'кровать ' : (this.countBed > 1 && this.countBed < 4) ? 'кровати' : bedWord;

      if (this.isCount()) {
        newTitle = `${this.countBedRoomes} ${bedRoomsWord} , ${this.countBed} ${bedWord} ${this.countBathrooms} ${bathoomsWord}`;
      }

      if (count.innerHTML > 0) {
        btnInc.classList.add('drop-down-bed__bodyItem-btns-inc_active');
      } else {
        btnInc.classList.remove('drop-down-bed__bodyItem-btns-inc_active');
      }
      this.titleBtn.innerHTML = newTitle;
    }
  }

  setEventHandlers() {
    this.titleBtn.addEventListener('click', this.handleBtnTitleClick);
    this.body.addEventListener('click', this.handleBodyClick);
  }

  render() {
    this.initialize();
    this.setEventHandlers();
  }
}

export default DropDownBed
