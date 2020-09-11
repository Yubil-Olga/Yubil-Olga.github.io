import 'air-datepicker';

export default class Calendar {
  constructor(htmlElement, parentContainer) {
    this.$anchor = $(htmlElement);
    this.$parentContainer = $(parentContainer);
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
    this.calendarPluginInstance = this.$anchor.datepicker().data('datepicker');
    this.$calendarInput = this.$anchor.data('datepicker').$el;
    this.replaceCalendar();
  }

  replaceCalendar() {
    this.$calendarContainer = this.$parentContainer.find('.js-calendar');
    this.$calendarContainer.append(this.$calendar);
    this.handleWindowResize();
  }

  handleWindowResize() {
    const containerWidth = this.$parentContainer.width();
    this.$calendar.css('width', containerWidth);
  }

  createApplyButton() {
    this.$buttonsContainer = this.$calendar.find('.datepicker--buttons');
    this.applyButtonText = 'Применить';
    this.$applyButton = $('<span>', {
      text: this.applyButtonText,
      class: 'calendar__apply-button',
    }).appendTo(this.$buttonsContainer);
  }

  bindEventListeners() {
    this.handleApplyButtonClick = this.handleApplyButtonClick.bind(this);
    this.$applyButton.on('click', this.handleApplyButtonClick);
    this.handleCalendarInputClick = this.handleCalendarInputClick.bind(this);
    this.$calendarInput.on('click', this.handleCalendarInputClick);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    $(window).on('resize', this.handleWindowResize);
  }

  handleApplyButtonClick() {
    this.calendarPluginInstance.hide();
  }

  handleCalendarInputClick() {
    this.calendarPluginInstance.show();
  }
}
