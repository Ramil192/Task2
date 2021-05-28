$(function () {
  const dropDowenBody = document.querySelector('.drop-down-bed__body');
  const dropDowen = document.querySelector('.drop-down-bed__titleBtn');
  let incrementBtn = '';
  let bedCount = 0;
  let bedRoomsCount = 0;
  let count = '';

  if(dropDowenBody){
    dropDowenBody.addEventListener('click', (event) => {
      const btnDec = 'drop-down-bed__bodyItem-btns-dec';
      const btnInc = 'drop-down-bed__bodyItem-btns-inc'
      const incBtnBorderAct = 'drop-down-bed__bodyItem-btns-inc_active'
      const name = event.target.parentElement.parentElement.firstElementChild.innerHTML;
  
      if (event.target.className === btnDec) {
        count = event.target.previousElementSibling;
        incrementBtn = event.target.previousElementSibling.previousElementSibling;
        count.innerHTML++;
  
        if (!incrementBtn.classList.contains(incBtnBorderAct)) {
          incrementBtn.classList.add(incBtnBorderAct);
        }
  
      }
  
      if (event.target.classList.contains(btnInc)) {
        count = event.target.nextElementSibling;
        count.innerHTML != 0 ? count.innerHTML-- : count.innerHTML;
        incrementBtn = event.target;
      }
  
      if (name === 'спальни') {
        bedRoomsCount = count.innerHTML;
        dropDowen.innerHTML = `${bedRoomsCount} спальни, 2 кровати...`
      }
      if (name === 'кровати') {
        bedCount = count.innerHTML;
        dropDowen.innerHTML = `${bedRoomsCount} спальни, ${bedCount} кровати...`
      }
  
      if(+count.innerHTML===0){
        incrementBtn.classList.remove(incBtnBorderAct);
      }
  
    });
  
    dropDowen.addEventListener('click', () => {
      dropDowenBody.classList.toggle('drop-down-bed__body_show')
    }, false);
  }
 
})
