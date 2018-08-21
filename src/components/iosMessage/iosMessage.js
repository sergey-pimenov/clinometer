var closeNode = document.querySelector('.iosInstruction .close');
var iosMessageNode = document.querySelector('.iosMessage');

var iosMessage = {
  init() {
    iosMessage.setListeners();
  },

  setListeners() {
    closeNode.addEventListener('click', iosMessage.close);

    iosMessageNode.addEventListener('click', (e) => {
      if (e.currentTarget === e.target) {
        iosMessage.close();
      }
    });
  },

  show() {
    document.body.classList.add('showInstruction');
  },

  close(e) {
    document.body.classList.remove('showInstruction');
  }
}

export default iosMessage;