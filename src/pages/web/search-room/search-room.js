import '../../../fonts/fonts.scss';
import Calendar from '../../../components/calendar/calendar';
import Slider from '../../../components/slide/slide';
import DropDown from '../../../components/drop-down/drop-down';
import DropDownBed from '../../../components/drop-down-bed/drop-down-bed';
import RangeSlider from '../../../components/range-slider/range-slider';
import CheckboxList from '../../../components/checkbox-list/checkbox-list';
import './search-room.scss';

document.querySelectorAll('.rev').forEach(element => new Slider(element));
document.querySelectorAll('.drop-down').forEach(element => new DropDown(element));
document.querySelectorAll('.drop-down-bed').forEach(element => new DropDownBed(element));
document.querySelectorAll('.range-slider').forEach(element => new RangeSlider(element));
document.querySelectorAll('.js-checkbox-list').forEach(element => new CheckboxList(element));
document.querySelectorAll('.calendar').forEach(element => new Calendar(element));