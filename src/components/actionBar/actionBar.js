import about from './../about/about';
import iosMessage from './../iosMessage/iosMessage';

var aboutButtonNode = document.querySelector('.aboutButton');
var installButtonNode = document.querySelector('.installButton');

var actionBar = {
  init() {
    actionBar.setListeners();
  },

  setListeners() {
    aboutButtonNode.addEventListener('click', about.show);

    if(document.body.classList.contains('safari')) {
      installButtonNode.addEventListener('click', iosMessage.show);
    } else {
      var installPromptEvent;

      if (localStorage.getItem('installable')) {
        document.body.classList.add('installable');
      }

      window.addEventListener('beforeinstallprompt', (event) => {
        event.preventDefault();
        installPromptEvent = event;
        document.body.classList.add('installApproved');
        localStorage.setItem('installable', true);
      });

      installButtonNode.addEventListener('click', () => {
        installPromptEvent.prompt();
        installPromptEvent.userChoice.then((choice) => {
          installPromptEvent = null;
        });
      });
    }
  }
}

export default actionBar;