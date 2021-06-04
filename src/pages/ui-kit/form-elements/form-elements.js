import '../../../fonts/fonts.scss';
import './form-elements.scss';
import DropDown from '../../../components/drop-down/drop-down';
import DropDownBed from '../../../components/drop-down-bed/drop-down-bed';
import Checkbox from '../../../components/checkbox-list/checkbox-list';
import Like from '../../../components/like-button/like-button';

document.querySelectorAll('.js-drop-down').forEach(element => new DropDown(element));
document.querySelectorAll('.js-drop-down-bed').forEach(element => new DropDownBed(element));
document.querySelectorAll('.js-checkbox-list').forEach(element => new Checkbox(element));
document.querySelectorAll('.js-like-button').forEach(element => new Like(element));
