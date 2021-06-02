class InputMask {
  constructor(outerContainerElement) {
    this.outerContainerElement = outerContainerElement;
    this.prevLength = 0;
    this.render();
  }

  initialize() {
    this.inputMask = this.outerContainerElement.querySelector('.js-input-form-masked__input');
  }

  isAddSpace(cursorEnd) {
    return (cursorEnd === 2) || (cursorEnd === 3) || (cursorEnd === 5) || (cursorEnd === 6);
  }

  hendleInputClick = (event) => {
    const currentLength = event.target.value.length;
    let cursorEnd = event.target.selectionEnd;
    event.target.value = event.target.value.replace(/[^+\d]/g, '');

    event.target.value = event.target.value.split('').map((e, index) => {
      if (index === 1 || index === 3) {
        e += '.';
      }
      return e;
    }).join('');

    if (this.prevLength < currentLength) {
      if (this.isAddSpace(cursorEnd)) {
        cursorEnd += 1;
      }
    } else if (cursorEnd === 3 || cursorEnd === 6) {
      cursorEnd -= 1;
    }
    event.target.selectionEnd = cursorEnd;
    this.prevLength = currentLength;
  }

  setEventHendlers() {
    this.inputMask.addEventListener('input', this.hendleInputClick);
  }

  render() {
    this.initialize();
    this.setEventHendlers();
  }
}

$(() => {
  if (document.querySelectorAll('.js-input-form-mask')) {
    document.querySelectorAll('.js-input-form-mask').forEach((element) => new InputMask(element));
  }
});
