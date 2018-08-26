import indicator from './../indicator/indicator';

var notSupported = {
  show() {
    document.body.classList.add('notSupportedState');
  }
}

export default notSupported;