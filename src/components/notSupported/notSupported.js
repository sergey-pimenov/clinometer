import indicator from './../indicator/indicator';

var notSupported = {
  init() {
    notSupported.detect();
  },

  detect() {
    setTimeout(() => {
      if (indicator.degreeY == null) {
        document.body.classList.add('notSupportedState');
      }
    }, 700);
  }
}

export default notSupported;