import setCSSVar from './../../utils/scripts/setCSSVar';
import notSupported from './../notSupported/notSupported';
import inaccurate from './../inaccurate/inaccurate';

var rotateDataYNode = document.querySelector('.rotateDataY');
var rotateDataXNode = document.querySelector('.rotateDataX');
var detailsRotateYNode = document.querySelector('.detailsRotateY');
var detailsRotateXNode = document.querySelector('.detailsRotateX');
var cubeNode = document.querySelector('.cube');

var indicator = {
  degreeY : 0,
  degreeYRounded : 0,
  renderedDegreeYRounded : null,
  degreeYAccurate : 0,
  renderedDegreeYAccurate : null,
  degreeX: 0,
  degreeXRounded: 0,
  renderedDegreeXRounded: null,
  degreeXAccurate: 0,
  renderedDegreeXAccurate: null,
  API: null,

  init() {
    indicator.chooseApi();
  },

  checkDevicemotion() {
    if (window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', (e) => {
        onOrientation(e);
      }, true);
    }

    function onOrientation(e) {
      if (!(e.acceleration.x == null &&
        e.acceleration.y == null &&
        e.acceleration.z == null &&
        e.accelerationIncludingGravity.x == null &&
        e.accelerationIncludingGravity.y == null &&
        e.accelerationIncludingGravity.z == null &&
        e.rotationRate.alpha == null &&
        e.rotationRate.beta == null &&
        e.rotationRate.gamma == null)) {
        indicator.API = 'deviceMotion';
      }
    }
  },

  checkDeviceOrientation() {
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', onOrientation, true);
    }

    function onOrientation(e) {
      if (!(e.alpha == null && e.beta == null && e.gamma == null)) {
        indicator.API = 'deviceOrientation';
      }
    }
  },

  chooseApi() {
    indicator.checkDevicemotion();
    indicator.checkDeviceOrientation();

    setTimeout(() => {
      if (indicator.API != null) {
        indicator.setListeners();
        indicator.update();
      } else {
        notSupported.show();
      }

      if (indicator.API == 'deviceMotion') {
        inaccurate.show();
      }
    }, 500);
  },

  setListeners() {
    if (indicator.API == 'deviceOrientation') {
      window.addEventListener('deviceorientation', (e) => {
        indicator.setByOrientationAPI(e);
      }, true);
    }

    if (indicator.API == 'deviceMotion') {
      window.addEventListener('devicemotion', (e) => {
        indicator.setByMotionAPI(e);
      }, true);
    }
  },

  setByOrientationAPI(e) {
    indicator.degreeY = e.beta;
    indicator.degreeYRounded = Math.round(indicator.degreeY);
    indicator.degreeYAccurate = indicator.degreeY.toFixed(1);

    indicator.degreeX = e.gamma;
    indicator.degreeXRounded = Math.round(indicator.degreeX);
    indicator.degreeXAccurate = indicator.degreeX.toFixed(1);
  },

  setByMotionAPI(e) {
    var magicConvertingNumber = 9.155645981688708;
    indicator.degreeY = e.accelerationIncludingGravity.y * magicConvertingNumber;
    indicator.degreeYRounded = Math.round(indicator.degreeY);
    indicator.degreeYAccurate = indicator.degreeY.toFixed(1);

    indicator.degreeX = e.accelerationIncludingGravity.x * -magicConvertingNumber;
    indicator.degreeXRounded = Math.round(indicator.degreeX);
    indicator.degreeXAccurate = indicator.degreeX.toFixed(1);
  },

  update() {
    requestAnimationFrame(indicator.update);

    if (indicator.renderedDegreeYRounded != indicator.degreeYRounded) {
      rotateDataYNode.innerHTML = indicator.degreeYRounded;
      setCSSVar(cubeNode, 'y', -indicator.degreeYRounded + 'deg');
    }

    if (indicator.renderedDegreeXRounded != indicator.degreeXRounded) {
      rotateDataXNode.innerHTML = indicator.degreeXRounded;
      setCSSVar(cubeNode, 'x', indicator.degreeXRounded + 'deg');
    }

    if (indicator.renderedDegreeYAccurate != indicator.degreeYAccurate) {
      detailsRotateYNode.innerHTML = indicator.degreeYAccurate;
    }

    if (indicator.renderedDegreeXAccurate != indicator.degreeXAccurate) {
      detailsRotateXNode.innerHTML = indicator.degreeXAccurate;
    }

    indicator.renderedDegreeYRounded = indicator.degreeYRounded;
    indicator.renderedDegreeYAccurate = indicator.degreeYAccurate;

    indicator.renderedDegreeXRounded = indicator.degreeXRounded;
    indicator.renderedDegreeXAccurate = indicator.degreeXAccurate;
  }
}

export default indicator;