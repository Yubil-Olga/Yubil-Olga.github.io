import 'air-datepicker';

export default class Calendar {
  constructor(htmlElement, parentContainer) {
    this._$anchor = $(htmlElement);
    this._$parentContainer = $(parentContainer);
    this._init();
    this._createApplyButton();
    this._bindEventListeners();
  }

  _init() {
    this._$anchor.datepicker({
      showButtonPanel: true,
      clearButton: true,
      range: true,
      toggleSelected: false,
      multipleDatesSeparator: ' - ',
      navTitles: {
        days: 'MM <i>yyyy</i>',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2',
      },
      prevHtml: '<i class="datepicker--arrow">arrow_back</i>',
      nextHtml: '<i class="datepicker--arrow">arrow_forward</i>',
      offset: 5,
    });
    this._$calendar = this._$anchor.data('datepicker').$datepicker;
    this.calendarPluginInstance = this._$anchor.datepicker().data('datepicker');
    this._$calendarInput = this._$anchor.data('datepicker').$el;
    this._replaceCalendar();
  }

  _replaceCalendar() {
    this._$calendarContainer = this._$parentContainer.find('.js-calendar');
    this._$calendarContainer.append(this._$calendar);
    this._handleWindowResize();
  }

  _handleWindowResize() {
    const containerWidth = this._$parentContainer.width();
    this._$calendar.css('width', containerWidth);
    if (containerWidth < 280) {
      this._$calendar.addClass('datepicker_small');
    } else {
      this._$calendar.removeClass('datepicker_small');
    }
  }

  _createApplyButton() {
    this._$buttonsContainer = this._$calendar.find('.datepicker--buttons');
    this._$applyButton = $('<span>', {
      text: 'Применить',
      class: 'calendar__apply-button',
    }).appendTo(this._$buttonsContainer);
  }

  _bindEventListeners() {
    this._handleApplyButtonClick = this._handleApplyButtonClick.bind(this);
    this._$applyButton.on('click', this._handleApplyButtonClick);
    this._handleCalendarInputClick = this._handleCalendarInputClick.bind(this);
    this._$calendarInput.on('click', this._handleCalendarInputClick);
    this._handleWindowResize = this._handleWindowResize.bind(this);
    $(window).on('resize', this._handleWindowResize);
  }

  _handleApplyButtonClick() {
    this.calendarPluginInstance.hide();
  }

  _handleCalendarInputClick() {
    this.calendarPluginInstance.show();
  }
}
