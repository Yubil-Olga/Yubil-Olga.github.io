import '../datepicker/datepicker';

$('.datepicker-here').datepicker(
    {   
        onSelect: function (fd, d, picker) { 
            $('.datepicker-start').val(d[0]);
            $('.datepicker-end').val(d[1]);
          }
    }
);

