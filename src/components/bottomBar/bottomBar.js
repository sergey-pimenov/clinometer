import about from './../about/about';
import iosMessage from './../iosMessage/iosMessage';

var aboutButtonNode = document.querySelector('.aboutButton');
var installButtonNode = document.querySelector('.installButton');

var bottomBar = {
  init() {
    bottomBar.setListers();
  },

  setListers() {
    aboutButtonNode.addEventListener('click', about.show);

    if(document.body.classList.contains('safari')) {
      installButtonNode.addEventListener('click', iosMessage.show);
    } else {
      var installPromptEvent;

      window.addEventListener('beforeinstallprompt', (event) => {
        // Prevent Chrome <= 67 from automatically showing the prompt
        event.preventDefault();
        // Stash the event so it can be triggered later.
        installPromptEvent = event;
        alert('wrk')
        // Update the install UI to notify the user app can be installed
        // document.querySelector('#install-button').disabled = false;
      });

      installButtonNode.addEventListener('click', () => {
        // Update the install UI to remove the install button
        // document.querySelector('#install-button').disabled = true;
        // Show the modal add to home screen dialog
        installPromptEvent.prompt();
        // Wait for the user to respond to the prompt
        installPromptEvent.userChoice.then((choice) => {
          if (choice.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          // Clear the saved prompt since it can't be used again
          installPromptEvent = null;
        });
      });
    }
  }
}

export default bottomBar;