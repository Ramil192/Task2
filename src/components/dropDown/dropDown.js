$(function () {
  const dropDowenBody = document.querySelector('.dropDown__body');
  const dropDowen = document.querySelector('.dropDown__titleBtn');
  const dropDowenBodyTitle = document.querySelector('.dropDown__titleBtn');
  const dropBtnClean = document.querySelector('.dropDown__bodyItem-btns-control-clean');
  let dropCount = 0

  dropDowenBody.addEventListener('click', (event) => {
    if (event.target.className === 'dropDown__bodyItem-btns-dec') {
      const count = event.target.previousElementSibling;
      const incrementBtn = event.target.previousElementSibling.previousElementSibling;

      count.innerHTML++;
      if (!incrementBtn.classList.contains('dropDown__bodyItem-btns-inc_active')) {
        incrementBtn.classList.add('dropDown__bodyItem-btns-inc_active');
      }
      if (!dropBtnClean.classList.contains('dropDown__bodyItem-btns-control-clean_show')) {
        dropBtnClean.classList.add('dropDown__bodyItem-btns-control-clean_show');
      }
      dropCount++;
      dropDowenBodyTitle.innerHTML = dropCount + ' гостя'
    } else if (event.target.classList.contains('dropDown__bodyItem-btns-inc')) {
      if (event.target.nextElementSibling.innerHTML != 0) {
        const count = event.target.nextElementSibling;
        count.innerHTML--;
        dropCount--;
        dropDowenBodyTitle.innerHTML = dropCount + ' гостя'
      }
      if (event.target.nextElementSibling.innerHTML == 0) {
        event.target.classList.remove('dropDown__bodyItem-btns-inc_active');
      }
    }

    if (dropCount === 0) {
      dropDowenBodyTitle.innerHTML = 'Сколько гостей'
      dropBtnClean.classList.remove('dropDown__bodyItem-btns-control-clean_show');
    }

  });

  dropBtnClean.addEventListener('click', () => {
    const allCount = document.querySelectorAll('.dropDown__bodyItem-btns-count')
    for (let element of allCount) {
      if (element.innerHTML != 0) {
        element.innerHTML = 0;
        element.previousElementSibling.classList.remove('dropDown__bodyItem-btns-inc_active');
      }
    }
    dropDowenBodyTitle.innerHTML = 'Сколько гостей'
    dropBtnClean.classList.remove('dropDown__bodyItem-btns-control-clean_show');
  }, false);

  dropDowen.addEventListener('click', () => {
    dropDowenBody.classList.toggle('dropDown__body_show')
  }, false);
})

