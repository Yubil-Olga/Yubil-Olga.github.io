import '../datepicker/datepicker';

$('.date-dropdown .datepicker-here').datepicker(
    {   
        onSelect: function (fd, d, picker) {
            let container = picker.$el.closest('.date-dropdown');
            container.find('.datepicker-start').val(fd.split("-")[0]);
            container.find('.datepicker-end').val(fd.split("-")[1]);
          }
    }
);
$('.datepicker-end').datepicker(
    {   
        position: "bottom right"
    }
);
