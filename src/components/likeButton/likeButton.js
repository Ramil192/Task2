$(function () {
  const likeBtn = document.querySelector('.likeButton');
  
  if(likeBtn){
    const countLick = likeBtn.firstElementChild;
    likeBtn.addEventListener('click', () => {
      if (likeBtn.classList.contains('likeButton_action')) {
        countLick.innerHTML--;
        likeBtn.classList.remove('likeButton_action');
      } else {
        countLick.innerHTML++;
        likeBtn.classList.add('likeButton_action');
      }
    })
  }
})