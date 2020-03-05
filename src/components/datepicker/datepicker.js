import 'air-datepicker';

$('.datepicker-here').datepicker(
    {   
        showButtonPanel: true,
        clearButton: true,
        range: true,
        toggleSelected: false,
        minDate: new Date(),
        navTitles: {
            days: 'MM <i>yyyy</i>',
            months: 'yyyy',
            years: 'yyyy1 - yyyy2'
        },
        prevHtml: '<i class="material-icons">arrow_back</i>',
        nextHtml: '<i class="material-icons">arrow_forward</i>',
        onShow: function (dp, animationCompleted) {
            if (!animationCompleted) {
                dp.$datepicker.appendTo('.date-dropdown');
                dp.$datepicker.appendTo('.filter-date-dropdown');
                dp.$datepicker.css("top", "70px");
                dp.$datepicker.css("left", "0");
                if (dp.$datepicker.find('.apply--button').html()===undefined) {
                    dp.$datepicker.children('.datepicker--buttons').append('<span class="apply--button">Применить</span></div>')
                }
                dp.$datepicker.find('.apply--button').click(function(event) {
                    dp.hide();
                 });
            }
        },
        // onHide: function(dp, animationCompleted){
        //     if (!animationCompleted) {
        //         dp.$datepicker.appendTo('.datepickers-container');
        //     } 
        // }
    }
);

