$(function(){
 let now = new Date();
 let endDate = new Date(now.getTime() + 365*24*60*60*1000)
 let $start = $('#start'),
      $end = $('#end');
 let $datepickers = $('.datepickers');
  
  $datepickers.datepicker({
      language: 'ru',
      navTitles: {
        days: '<i>yyyy</i> MM',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2'
      },
      minDate: now,
      maxDate: endDate,
      multipleDatesSeparator: "-",
      range: true,
        onSelect: function (fd, date) {
          $end.data('datepicker')
                  .update('selectedDates', $start.data('datepicker').selectedDates);
         let start = fd.split('-')[0]
         let end = fd.split('-')[1];
          if (end) {
            $start.val(start);
            $end.val(end);
          } else {
            $end.val('')
          }
          console.log($start.data('datepicker'));
      }
  })
})
