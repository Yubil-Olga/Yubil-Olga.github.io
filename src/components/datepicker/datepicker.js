import 'air-datepicker';

function applyButton(dp) {
  function hideBtn() {
    dp.hide();
  }
  if (dp.$datepicker.find('.apply--button').html() === undefined) {
    dp.$datepicker.children('.datepicker--buttons').append('<span class="apply--button">Применить</span></div>');
  }
  dp.$datepicker.find('.apply--button').click(hideBtn);
}

$('.js-datepicker-here').datepicker(
  {
    showButtonPanel: true,
    clearButton: true,
    range: true,
    toggleSelected: false,
    minDate: new Date(),
    multipleDatesSeparator: ' - ',
    navTitles: {
      days: 'MM <i>yyyy</i>',
      months: 'yyyy',
      years: 'yyyy1 - yyyy2',
    },
    prevHtml: '<i class="material-icons">arrow_back</i>',
    nextHtml: '<i class="material-icons">arrow_forward</i>',
    onShow(dp, animationCompleted) {
      if (!animationCompleted) {
        applyButton(dp);
      }
    },
  },
);
