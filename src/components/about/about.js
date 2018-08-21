var closeButtonNode = document.querySelector('.closeButton');
var aboutNode = document.querySelector('.about');

var about = {
  init() {
    about.setListener();
  },

  setListener() {
    closeButtonNode.addEventListener('click', about.hide);
  },

  hide() {
    aboutNode.classList.remove('open');
  },

  show() {
    aboutNode.classList.add('open');
  }
}

export default about;