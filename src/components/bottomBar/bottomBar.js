import about from './../about/about';
import iosMessage from './../iosMessage/iosMessage';

var aboutButtonNode = document.querySelector('.aboutButton');
var iosInstallButtonNode = document.querySelector('.iosInstallButton');

var bottomBar = {
  init() {
    bottomBar.setListers();
  },

  setListers() {
    aboutButtonNode.addEventListener('click', about.show);
    iosInstallButtonNode.addEventListener('click', iosMessage.show);
  }
}

export default bottomBar;