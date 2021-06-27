import DropDown from '../drop-down/drop-down'
import Calendar from '../calendar/calendar'

class RoomSearch {
  constructor(outerContainerElement) {
    this.outerContainerElement = outerContainerElement;
    
    this.initialize();
  }

  initialize(){
    const dropdownContainer = this.outerContainerElement.querySelector('.js-drop-down');
    this.dropdown = new DropDown(dropdownContainer);
    const calendarContainer = this.outerContainerElement.querySelector('.js-calendar');
    this.calendar = new Calendar(calendarContainer);
  }
}

export default RoomSearch;
