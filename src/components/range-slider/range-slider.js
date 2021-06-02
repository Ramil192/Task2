$(() => {
  const $element = $('.js-slider-range');
  $element.slider({
    range: true,
    min: 1000,
    max: 16000,
    values: [5000, 10000],
    slide(event, ui) {
      $('#amount').val(`${ui.values[0]}₽ - ${ui.values[1]}₽`);
    },
  });
  $('#amount').val(`${$element.slider('values', 0)} ₽`
    + ` - ${$element.slider('values', 1)} ₽`);
});
