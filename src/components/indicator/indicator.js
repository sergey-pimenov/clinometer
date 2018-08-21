var rotateDataNode = document.querySelector('.rotateData');
var detailsRotateNode = document.querySelector('.detailsRotate');

var indicator = {
  degreeY : 0,
  degreeYRounded : 0,
  renderedDegreeYRounded : null,
  degreeYAccurate : 0,
  renderedDegreeYAccurate : null,

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
  },

  update() {
    requestAnimationFrame(indicator.update);

    if (indicator.renderedDegreeYRounded != indicator.degreeYRounded) {
      rotateDataNode.innerHTML = indicator.degreeYRounded;
    }

    if (indicator.renderedDegreeYAccurate != indicator.degreeYAccurate) {
      detailsRotateNode.innerHTML = indicator.degreeYAccurate;
    }

    indicator.renderedDegreeYRounded = indicator.degreeYRounded;
    indicator.renderedDegreeYAccurate = indicator.degreeYAccurate;
  }
}

export default indicator;