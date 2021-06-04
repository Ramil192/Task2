import DropDown from '../drop-down/drop-down'

class RoomSearch {
  constructor(outerContainerElement) {
    this.outerContainerElement = outerContainerElement;
    
    this.initialize();
  }

  initialize(){
    const dropdownContainer = this.outerContainerElement.querySelector('.js-drop-down');
    this.dropdown = new DropDown(dropdownContainer);
  }
}

export default RoomSearch;
