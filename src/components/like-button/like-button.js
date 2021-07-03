class Like {
  constructor(likeBtn) {
    this.likeBtn = likeBtn;
    this._render();
  }

  _initialize() {
    this.count = this.likeBtn.querySelector('.js-like-button__count');
  }

  _handleBtnClick = () => {
    if (this.likeBtn.classList.contains('like-button_action')) {
      this.count.innerHTML = parseInt(this.count.innerHTML, 10) - 1;
      this.likeBtn.classList.remove('like-button_action');
    } else {
      this.count.innerHTML = parseInt(this.count.innerHTML, 10) + 1;
      this.likeBtn.classList.add('like-button_action');
    }
  }

  _setEventHandlers() {
    this.likeBtn.addEventListener('click', this._handleBtnClick);
  }

  _render() {
    this._initialize();
    this._setEventHandlers();
  }
}

export default Like;
