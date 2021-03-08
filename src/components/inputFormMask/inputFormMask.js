$(function () {
  const inputMask = document.querySelector('.inputFormMasked__input')
  let prevLength = 0;

  if(inputMask){
    inputMask.addEventListener('input', (event) => {
      const currentLength = event.target.value.length
      let cursorEnd = event.target.selectionEnd;
      event.target.value = event.target.value.replace(/[^+\d]/g, '')
  
      event.target.value = event.target.value.split('').map((e, index) => {
        if (index === 1 || index === 3) {
          e += '.'
        }
        return e;
      }).join('');
  
      if (prevLength < currentLength) {
        if (cursorEnd === 2 || cursorEnd === 3 || cursorEnd === 5 || cursorEnd === 6) {
          cursorEnd++;
        }
      } else {
        if (cursorEnd === 3 || cursorEnd === 6) {
          cursorEnd--;
        }
      }
      event.target.selectionEnd = cursorEnd;
      prevLength = currentLength;
    }, false)
  }
})

