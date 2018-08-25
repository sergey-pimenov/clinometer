import setCSSVar from './../../utils/scripts/setCSSVar';

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

  init() {
    indicator.setListeners();
    indicator.update();
  },

  setListeners() {
    window.addEventListener('deviceorientation', (e) => {
      indicator.setDegreeY(e);
    });
  },

  setDegreeY(e) {
    indicator.degreeY = e.beta;
    indicator.degreeYRounded = Math.round(indicator.degreeY);
    indicator.degreeYAccurate = indicator.degreeY.toFixed(1);

    indicator.degreeX = e.gamma;
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