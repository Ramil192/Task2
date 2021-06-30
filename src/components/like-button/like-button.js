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
      this.count.innerHTML = parseInt(this.count.innerHTML, 10) - 1;
      this.likeBtn.classList.remove('like-button_action');
    } else {
      this.count.innerHTML = parseInt(this.count.innerHTML, 10) + 1;
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

document.querySelectorAll('.js-like-button').forEach((element) => new Like(element));
