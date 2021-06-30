import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.css';

class Calendar {
  constructor(outerContainerElement) {
    this.outerContainerElement = outerContainerElement;
    this.initialize();
    this.selectDatepicker();
  }

  initialize() {
    const $outerContainerElement = $('html').find(this.outerContainerElement);
    this.$containerElement = $outerContainerElement;
    this.$dateInputs = this.$containerElement.find('.js-calendar__input');
    this.isDouble = this.$containerElement.hasClass('js-calendar_double');
    this.isWithRange = this.$containerElement.hasClass('js-calendar_range');
  }

  selectDatepicker() {
    if (this.isDouble) {
      this.doubleDatepicker();
    } else if (this.isWithRange) {
      this.oneDatepickerWithRange();
    } else {
      this.oneDatepicker();
    }
  }

  oneDatepicker() {
    this.$targetInput = this.$dateInputs.eq(0);
    this.$targetInput.datepicker({
      // inline: true,
      onShow: this.handleDatepickerShow,
      onSelect: this._handleDoubleInputSelectRange,
    });
  }

  doubleDatepicker() {
    this.$oneInput = this.$dateInputs.eq(0);
    this.$twoInput = this.$dateInputs.eq(1);

    this.datepickerInstance = this.$oneInput.datepicker({
      range: true,
      minDate: new Date(),
      onShow: this.handleDatepickerShow,
      onSelect: this._handleDoubleInputSelectRange,
    }).data('datepicker');
    this.datepickerInstance.show();
    this.datepickerInstance.hide();
  }

  oneDatepickerWithRange() {
    this.$targetInput = this.$dateInputs.eq(0);
    this.$targetInput.datepicker({
      range: true,
      dateFormat: 'dd M',
      multipleDatesSeparator: ' - ',
      onShow: this.handleDatepickerShow,
      onSelect: this._handleDoubleInputSelectRange,
    });
  }

  handleDatepickerShow = (inst, animationCompleted) => {
    if (!animationCompleted && !inst.$datepicker.find('.calendar__buttons').html()) {
      inst.$datepicker.append(
        `<div class="calendar__buttons">
            <p class="calendar__clear-button js-calendar__clear-button">очистить</p>
            <p class="calendar__apply-button js-calendar__apply-button">применить</p>
          </div>`,
      );
      this.clearButton = inst.$datepicker.find('.js-calendar__clear-button');
      this.clearButton.click(this.handleClearButtonClick.bind(this, inst));

      this.applyButton = inst.$datepicker.find('.js-calendar__apply-button');
      this.applyButton.click(this.handleApplyButtonClick.bind(this, inst));

      if (this.$twoInput) {
        this.$twoInput.bind('click', inst.show.bind(inst));
      }
    }
  }

  _handleDoubleInputSelectRange = (formattedDate) => {
    this.clearButton.show();
    const addDate = formattedDate.split(',');
    if (addDate.length === 2) {
      this.$oneInput.val(addDate[0]);
      this.$twoInput.val(addDate[1]);
    }
  }

  handleApplyButtonClick(inst) {
    inst.hide();
  }

  handleClearButtonClick(inst) {
    inst.clear();
    this.$dateInputs.each((_, element) => { element.value = ''; });
    this.clearButton.hide();
  }
}

document.querySelectorAll('.js-calendar').forEach((element) => new Calendar(element));
