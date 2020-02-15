import 'air-datepicker/dist/js/datepicker';
import '../input/input';

$('.datepicker-here').datepicker(
    {   
        showButtonPanel: true,
        clearButton: true,
        toggleSelected: true,
        navTitles: {
            days: 'MM <i>yyyy</i>',
            months: 'yyyy',
            years: 'yyyy1 - yyyy2'
        },
        prevHtml: '<i class="material-icons">arrow_back</i>',
        nextHtml: '<i class="material-icons">arrow_forward</i>',
        onShow: function (dp, animationCompleted) {
            if (!animationCompleted) {
                if (dp.$datepicker.find('.apply--button').html()===undefined) {
                    dp.$datepicker.children('.datepicker--buttons').append('<span class="apply--button">Применить</span></div>')
                }
                dp.$datepicker.find('.apply--button').click(function(event) {
                    dp.hide();
                 });
            }
        }
        //startDate: "01.01.2020"
    }
);
$('.dropdown-arrow').click(function() {
    $(this).siblings('input').datepicker().data('datepicker').show();
})



