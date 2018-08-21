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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _about = __webpack_require__(0);

var _about2 = _interopRequireDefault(_about);

var _iosMessage = __webpack_require__(2);

var _iosMessage2 = _interopRequireDefault(_iosMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var aboutButtonNode = document.querySelector('.aboutButton');
var installButtonNode = document.querySelector('.installButton');

var bottomBar = {
  init: function init() {
    bottomBar.setListers();
  },
  setListers: function setListers() {
    aboutButtonNode.addEventListener('click', _about2.default.show);

    if (document.body.classList.contains('safari')) {
      installButtonNode.addEventListener('click', _iosMessage2.default.show);
    } else {
      var installPromptEvent;

      window.addEventListener('beforeinstallprompt', function (event) {
        // Prevent Chrome <= 67 from automatically showing the prompt
        event.preventDefault();
        // Stash the event so it can be triggered later.
        installPromptEvent = event;
        alert('wrk');
        // Update the install UI to notify the user app can be installed
        // document.querySelector('#install-button').disabled = false;
      });

      installButtonNode.addEventListener('click', function () {
        // Update the install UI to remove the install button
        // document.querySelector('#install-button').disabled = true;
        // Show the modal add to home screen dialog
        installPromptEvent.prompt();
        // Wait for the user to respond to the prompt
        installPromptEvent.userChoice.then(function (choice) {
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
};

exports.default = bottomBar;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indicator = __webpack_require__(1);

var _indicator2 = _interopRequireDefault(_indicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notSupported = {
  init: function init() {
    notSupported.detect();
  },
  detect: function detect() {
    setTimeout(function () {
      if (_indicator2.default.degreeY == null) {
        document.body.classList.add('notSupportedState');
      }
    }, 700);
  }
};

exports.default = notSupported;

/***/ }),
/* 5 */
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

  function mobileAndTabletcheck() {
    var check = false;
    (function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };

  if (mobileAndTabletcheck()) {
    document.body.classList.add('mobile');
  } else {
    document.body.classList.add('notSupportedState');
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _detectPlatform = __webpack_require__(5);

var _detectPlatform2 = _interopRequireDefault(_detectPlatform);

var _notSupported = __webpack_require__(4);

var _notSupported2 = _interopRequireDefault(_notSupported);

var _indicator = __webpack_require__(1);

var _indicator2 = _interopRequireDefault(_indicator);

var _about = __webpack_require__(0);

var _about2 = _interopRequireDefault(_about);

var _bottomBar = __webpack_require__(3);

var _bottomBar2 = _interopRequireDefault(_bottomBar);

var _iosMessage = __webpack_require__(2);

var _iosMessage2 = _interopRequireDefault(_iosMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Utils
(0, _detectPlatform2.default)();

// Components


_notSupported2.default.init();
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