import '../../../fonts/fonts.scss';
import Calendar from '../../../components/calendar/calendar';
import './form-elements.scss';
import DropDown from '../../../components/drop-down/drop-down';
import DropDownBed from '../../../components/drop-down-bed/drop-down-bed';
import Checkbox from '../../../components/checkbox-list/checkbox-list';
import Like from '../../../components/like-button/like-button';
import RangeSlider from '../../../components/range-slider/range-slider';


document.querySelectorAll('.js-drop-down').forEach(element => new DropDown(element));
document.querySelectorAll('.js-drop-down-bed').forEach(element => new DropDownBed(element));
document.querySelectorAll('.js-checkbox-list').forEach(element => new Checkbox(element));
document.querySelectorAll('.js-like-button').forEach(element => new Like(element));
document.querySelectorAll('.js-calendar').forEach(element => new Calendar(element));
document.querySelectorAll('.js-range-slider').forEach(element => new RangeSlider(element));

