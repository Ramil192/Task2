$(() => {
  const now = new Date();
  const endDate = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);
  const $start = $('#start');
  const $end = $('#end');
  const $datepickers = $('.datepickers');

  $datepickers.datepicker({
    language: 'ru',
    navTitles: {
      days: '<i>yyyy</i> MM',
      months: 'yyyy',
      years: 'yyyy1 - yyyy2',
    },
    minDate: now,
    maxDate: endDate,
    multipleDatesSeparator: '-',
    range: true,
    onSelect(fd) {
      $end.data('datepicker')
        .update('selectedDates', $start.data('datepicker').selectedDates);
      const start = fd.split('-')[0];
      const end = fd.split('-')[1];
      if (end) {
        $start.val(start);
        $end.val(end);
      } else {
        $end.val('');
      }
      console.log($start.data('datepicker'));
    },
  });
});
