import './cards.scss';
import '../../components/form-selection/form-selection';
import '../../components/form-registration/form-registration';
import '../../components/form-login/form-login';
import '../../components/form-booking/form-booking';
import '../../components/card-room/card-room';

$('.calendar').datepicker(
    {
        inline: true,
        range: true,
        showButtonPanel: true,
        clearButton: true,
        toggleSelected: false,
        navTitles: {
            days: 'MM <i>yyyy</i>',
            months: 'yyyy',
            years: 'yyyy1 - yyyy2'
        },
        prevHtml: '<i class="material-icons">arrow_back</i>',
        nextHtml: '<i class="material-icons">arrow_forward</i>'
})
$('.calendar .datepicker--buttons').append('<span class="button_simple">Применить</span></div>');
