var inaccurateNode = document.querySelector('.inaccurate');
var continueNode = document.querySelector('.continue');

var inaccurate = {
  init() {
    inaccurate.setListeners();
  },

  setListeners() {
    continueNode.addEventListener('click', inaccurate.hide);
  },

  show() {
    if (localStorage.getItem('inaccurateWarning') == 'closed') {
      return;
    }

    inaccurate.init();
    inaccurateNode.classList.add('show');
  },

  hide() {
    inaccurateNode.classList.remove('show');
    localStorage.setItem('inaccurateWarning', 'closed');
  }
}

export default inaccurate;