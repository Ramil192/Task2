import '../../../fonts/fonts.scss';
import Slider from '../../../components/slide/slide'
import Calendar from '../../../components/calendar/calendar';
import './cards.scss';

document.querySelectorAll('.rev').forEach(element => new Slider(element));
document.querySelectorAll('.js-calendar').forEach(element => new Calendar(element));

