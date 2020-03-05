import '../datepicker/datepicker';
import '../input/input';

$('.datepicker-here').datepicker(
    {   
        onSelect: function (fd, d, picker) { 
            $('.datepicker-start').val(d[0]);
            $('.datepicker-end').val(d[1]);
          }
    }
);

