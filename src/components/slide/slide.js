import jQuery from 'jquery';

import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const $ = jQuery;
global.jQuery = $;
global.$ = $;


$('.rev_slide').slick({dots: true});


