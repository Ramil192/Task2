$(function(){
  const checkboxBtn = document.querySelector('#checkbox-listBtn')
  const checkboxItems = document.querySelector('.checkbox-list__items');
  if(checkboxBtn){
    checkboxBtn.addEventListener('click',()=>{
      checkboxItems.classList.toggle('checkbox-list__items_show')
      checkboxBtn.classList.toggle('checkbox-list__titleBtn_rotate')
    },false)
  } 
})