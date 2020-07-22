import '../datepicker/datepicker';

$('.js-datepicker-here').datepicker(
  {
    onSelect(fd, d, picker) {
      $('.js-date-dropdown__arrival .js-datepicker-here').val(fd.split('-')[0]);
      $('.js-date-dropdown__departure .js-datepicker-here').val(fd.split('-')[1]);

    },
  },
);
$('.js-date-dropdown__departure .js-datepicker-here').datepicker(
  {
    position: 'bottom right',
  },
);