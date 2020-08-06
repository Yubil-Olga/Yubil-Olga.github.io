import '../datepicker/datepicker';

$('.js-datepicker-here').datepicker(
  {
    onSelect(fd, d, picker) {
      $('.date-dropdown__control .js-datepicker-here').first().val(fd.split('-')[0]);
      $('.date-dropdown__control .js-datepicker-here').last().val(fd.split('-')[1]);
    },
  },
);
$('.js-date-dropdown__departure .js-datepicker-here').datepicker(
  {
    position: 'bottom right',
  },
);