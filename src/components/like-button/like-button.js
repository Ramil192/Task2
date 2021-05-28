$(function () {
  const likeBtn = document.querySelector('.like-button');
  
  if(likeBtn){
    const countLick = likeBtn.firstElementChild;
    likeBtn.addEventListener('click', () => {
      if (likeBtn.classList.contains('like-button_action')) {
        countLick.innerHTML--;
        likeBtn.classList.remove('like-button_action');
      } else {
        countLick.innerHTML++;
        likeBtn.classList.add('like-button_action');
      }
    })
  }
})