$(function(){
  const checkboxBtn = document.querySelector('.checkboxList__titleBtn')
  const checkboxItems = document.querySelector('.checkboxList__items')
  console.log(checkboxBtn); 
  checkboxBtn.addEventListener('click',()=>{
    checkboxItems.classList.toggle('checkboxList__items_show')
    checkboxBtn.classList.toggle('checkboxList__titleBtn_rotate')
  },false)
})