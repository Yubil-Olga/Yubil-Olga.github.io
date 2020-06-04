import '../datepicker/datepicker';

$('.js-date-dropdown .datepicker-here').datepicker(
    {   
        onSelect: function (fd, d, picker) {
            let container = picker.$el.closest('.js-date-dropdown');
            container.find('.js-datepicker-start').val(fd.split('-')[0]);
            container.find('.js-datepicker-end').val(fd.split('-')[1]);
          }
    }
);
$('.js-datepicker-end').datepicker(
    {   
        position: 'bottom right'
    }
);
