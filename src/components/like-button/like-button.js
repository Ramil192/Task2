class Like {
  constructor(likeBtn) {
    this.likeBtn = likeBtn;
    this.render();
  }

  initialize() {
    this.count = this.likeBtn.querySelector('.js-like-button__count');
  }

  handleBtnClick = () => {
    if (this.likeBtn.classList.contains('like-button_action')) {
      this.count.innerHTML = +this.count.innerHTML - 1;
      this.likeBtn.classList.remove('like-button_action');
    } else {
      this.count.innerHTML = +this.count.innerHTML + 1;
      this.likeBtn.classList.add('like-button_action');
    }
  }

  setEventHandlers() {
    this.likeBtn.addEventListener('click', this.handleBtnClick);
  }

  render() {
    this.initialize();
    this.setEventHandlers();
  }
}

$(() => {
  if (document.querySelectorAll('.js-like-button')) {
    document.querySelectorAll('.js-like-button').forEach((element) => new Like(element));
  }
});
