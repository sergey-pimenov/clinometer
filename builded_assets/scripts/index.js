/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var closeButtonNode = document.querySelector('.closeButton');
var aboutNode = document.querySelector('.about');

var about = {
  init: function init() {
    about.setListener();
  },
  setListener: function setListener() {
    closeButtonNode.addEventListener('click', about.hide);
  },
  hide: function hide() {
    aboutNode.classList.remove('open');
  },
  show: function show() {
    aboutNode.classList.add('open');
  }
};

exports.default = about;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var closeNode = document.querySelector('.iosInstruction .close');
var iosMessageNode = document.querySelector('.iosMessage');

var iosMessage = {
  init: function init() {
    iosMessage.setListeners();
  },
  setListeners: function setListeners() {
    closeNode.addEventListener('click', iosMessage.close);

    iosMessageNode.addEventListener('click', function (e) {
      if (e.currentTarget === e.target) {
        iosMessage.close();
      }
    });
  },
  show: function show() {
    document.body.classList.add('showInstruction');
  },
  close: function close(e) {
    document.body.classList.remove('showInstruction');
  }
};

exports.default = iosMessage;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _about = __webpack_require__(0);

var _about2 = _interopRequireDefault(_about);

var _iosMessage = __webpack_require__(1);

var _iosMessage2 = _interopRequireDefault(_iosMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var aboutButtonNode = document.querySelector('.aboutButton');
var iosInstallButtonNode = document.querySelector('.iosInstallButton');

var bottomBar = {
  init: function init() {
    bottomBar.setListers();
  },
  setListers: function setListers() {
    aboutButtonNode.addEventListener('click', _about2.default.show);
    iosInstallButtonNode.addEventListener('click', _iosMessage2.default.show);
  }
};

exports.default = bottomBar;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var rotateDataNode = document.querySelector('.rotateData');
var detailsRotateNode = document.querySelector('.detailsRotate');

var indicator = {
  degreeY: 0,
  degreeYRounded: 0,
  renderedDegreeYRounded: null,
  degreeYAccurate: 0,
  renderedDegreeYAccurate: null,

  init: function init() {
    indicator.setListeners();
    indicator.update();
  },
  setListeners: function setListeners() {
    window.addEventListener('deviceorientation', function (e) {
      indicator.setDegreeY(e);
    });
  },
  setDegreeY: function setDegreeY(e) {
    indicator.degreeY = e.beta;
    indicator.degreeYRounded = Math.round(indicator.degreeY);
    indicator.degreeYAccurate = indicator.degreeY.toFixed(1);
  },
  update: function update() {
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
};

exports.default = indicator;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  // iOS Safari
  var ua = window.navigator.userAgent;
  var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
  var webkit = !!ua.match(/WebKit/i);
  var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

  if (iOSSafari) {
    document.body.classList.add('safari');
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _detectPlatform = __webpack_require__(4);

var _detectPlatform2 = _interopRequireDefault(_detectPlatform);

var _indicator = __webpack_require__(3);

var _indicator2 = _interopRequireDefault(_indicator);

var _about = __webpack_require__(0);

var _about2 = _interopRequireDefault(_about);

var _bottomBar = __webpack_require__(2);

var _bottomBar2 = _interopRequireDefault(_bottomBar);

var _iosMessage = __webpack_require__(1);

var _iosMessage2 = _interopRequireDefault(_iosMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Components
(0, _detectPlatform2.default)(); // Utils


_indicator2.default.init();
_bottomBar2.default.init();
_about2.default.init();
_iosMessage2.default.init();

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function () {
//     navigator.serviceWorker.register('/sw.js').then(function (registration) {
//       // Registration was successful
//       console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }, function (err) {
//       // registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//     });
//   });
// }

/***/ })
/******/ ]);