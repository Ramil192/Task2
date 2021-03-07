$(function(){
  const checkboxBtn = document.querySelector('#checkboxListBtn')
  const checkboxItems = document.querySelector('.checkboxList__items');
  if(checkboxBtn){
    checkboxBtn.addEventListener('click',()=>{
      checkboxItems.classList.toggle('checkboxList__items_show')
      checkboxBtn.classList.toggle('checkboxList__titleBtn_rotate')
    },false)
  } 
})