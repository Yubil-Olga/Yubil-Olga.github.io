import 'air-datepicker';

export default class Datepicker {
  constructor(htmlElement) {
    this.$anchor = $(htmlElement);
    this.init();
    this.createApplyButton();
    this.bindEventListeners();
  }

  init() {
    this.$anchor.datepicker({
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
      prevHtml: '<i class="datepicker--arrow">arrow_back</i>',
      nextHtml: '<i class="datepicker--arrow">arrow_forward</i>',
    });
    this.$calendar = this.$anchor.data('datepicker').$datepicker;
    this.$calendarInput = this.$anchor.data('datepicker').$el;
  }

  createApplyButton() {
    this.$buttonsContainer = this.$calendar.find('.datepicker--buttons');
    this.applyButtonText = 'Применить';
    this.$applyButton = $('<span>', {
      text: this.applyButtonText,
      class: 'apply--button',
    }).appendTo(this.$buttonsContainer);
  }

  bindEventListeners() {
    this.handleApplyButtonClick = this.handleApplyButtonClick.bind(this);
    this.$applyButton.on('click', this.handleApplyButtonClick);
    this.handleCalendarInputClick = this.handleCalendarInputClick.bind(this);
    this.$calendarInput.on('click', this.handleCalendarInputClick);
  }

  handleApplyButtonClick() {
    this.$calendar.hide();
  }

  handleCalendarInputClick() {
    this.$calendar.show();
  }
}
