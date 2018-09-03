!function(n){var o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.i=function(e){return e},i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=7)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=document.querySelector(".closeButton"),i=document.querySelector(".about"),r={init:function(){r.setListeners()},setListeners:function(){o.addEventListener("click",r.hide)},hide:function(){i.classList.remove("open")},show:function(){i.classList.add("open")}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=c(n(8)),i=c(n(3)),r=c(n(6));function c(e){return e&&e.__esModule?e:{default:e}}var d=document.querySelector(".rotateDataY"),a=document.querySelector(".rotateDataX"),u=document.querySelector(".detailsRotateY"),s=document.querySelector(".detailsRotateX"),l=document.querySelector(".cube"),g={degreeY:0,degreeYRounded:0,renderedDegreeYRounded:null,degreeYAccurate:0,renderedDegreeYAccurate:null,degreeX:0,degreeXRounded:0,renderedDegreeXRounded:null,degreeXAccurate:0,renderedDegreeXAccurate:null,APIDeviceMotion:!1,APIDeviceOrientation:!1,init:function(){g.chooseApi()},checkDevicemotion:function(){window.DeviceMotionEvent&&window.addEventListener("devicemotion",function(e){var t;null==(t=e).acceleration.x&&null==t.acceleration.y&&null==t.acceleration.z&&null==t.accelerationIncludingGravity.x&&null==t.accelerationIncludingGravity.y&&null==t.accelerationIncludingGravity.z&&null==t.rotationRate.alpha&&null==t.rotationRate.beta&&null==t.rotationRate.gamma||(g.APIDeviceMotion=!0)},!0)},checkDeviceOrientation:function(){window.DeviceOrientationEvent&&window.addEventListener("deviceorientation",function(e){null==e.alpha&&null==e.beta&&null==e.gamma||(g.APIDeviceOrientation=!0)},!0)},chooseApi:function(){g.checkDevicemotion(),g.checkDeviceOrientation(),setTimeout(function(){g.APIDeviceOrientation||g.APIDeviceMotion?(g.setListeners(),g.update()):i.default.show(),"deviceMotion"==g.API&&r.default.show()},500)},setListeners:function(){g.APIDeviceOrientation?window.addEventListener("deviceorientation",function(e){g.setByOrientationAPI(e)},!0):window.addEventListener("devicemotion",function(e){g.setByMotionAPI(e)},!0)},setByOrientationAPI:function(e){g.degreeY=e.beta,g.degreeYRounded=Math.round(g.degreeY),g.degreeYAccurate=g.degreeY.toFixed(1),g.degreeX=e.gamma,g.degreeXRounded=Math.round(g.degreeX),g.degreeXAccurate=g.degreeX.toFixed(1)},setByMotionAPI:function(e){var t=9.155645981688709;g.degreeY=e.accelerationIncludingGravity.y*t,g.degreeYRounded=Math.round(g.degreeY),g.degreeYAccurate=g.degreeY.toFixed(1),g.degreeX=e.accelerationIncludingGravity.x*-t,g.degreeXRounded=Math.round(g.degreeX),g.degreeXAccurate=g.degreeX.toFixed(1)},update:function(){requestAnimationFrame(g.update),g.renderedDegreeYRounded!=g.degreeYRounded&&(d.innerHTML=g.degreeYRounded,(0,o.default)(l,"y",-g.degreeYRounded+"deg")),g.renderedDegreeXRounded!=g.degreeXRounded&&(a.innerHTML=g.degreeXRounded,(0,o.default)(l,"x",g.degreeXRounded+"deg")),g.renderedDegreeYAccurate!=g.degreeYAccurate&&(u.innerHTML=g.degreeYAccurate),g.renderedDegreeXAccurate!=g.degreeXAccurate&&(s.innerHTML=g.degreeXAccurate),g.renderedDegreeYRounded=g.degreeYRounded,g.renderedDegreeYAccurate=g.degreeYAccurate,g.renderedDegreeXRounded=g.degreeXRounded,g.renderedDegreeXAccurate=g.degreeXAccurate}};t.default=g},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=document.querySelector(".iosInstruction .close"),i=document.querySelector(".iosMessage"),r={init:function(){r.setListeners()},setListeners:function(){o.addEventListener("click",r.close),i.addEventListener("click",function(e){e.currentTarget===e.target&&r.close()})},show:function(){document.body.classList.add("showInstruction")},close:function(e){document.body.classList.remove("showInstruction")}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=n(1);(o=i)&&o.__esModule;var r={show:function(){document.body.classList.add("notSupportedState")}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),i=r(n(2));function r(e){return e&&e.__esModule?e:{default:e}}var c=document.querySelector(".aboutButton"),d=document.querySelector(".installButton"),a={init:function(){a.setListeners()},setListeners:function(){var t;(c.addEventListener("click",o.default.show),document.body.classList.contains("safari"))?d.addEventListener("click",i.default.show):(localStorage.getItem("installable")&&document.body.classList.add("installable"),window.addEventListener("beforeinstallprompt",function(e){e.preventDefault(),t=e,document.body.classList.add("installApproved"),localStorage.setItem("installable",!0)}),d.addEventListener("click",function(){t.prompt(),t.userChoice.then(function(e){t=null})}))}};t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e,t,n=window.navigator.userAgent,o=!!n.match(/iPad/i)||!!n.match(/iPhone/i),i=!!n.match(/WebKit/i);o&&i&&!n.match(/CriOS/i)&&document.body.classList.add("safari"),t=!1,e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t&&document.body.classList.add("mobile")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=document.querySelector(".inaccurate"),i=document.querySelector(".continue"),r={init:function(){r.setListeners()},setListeners:function(){i.addEventListener("click",r.hide)},show:function(){"closed"!=localStorage.getItem("inaccurateWarning")&&(r.init(),o.classList.add("show"))},hide:function(){o.classList.remove("show"),localStorage.setItem("inaccurateWarning","closed")}};t.default=r},function(e,t,n){"use strict";var o=a(n(5)),i=(a(n(3)),a(n(1))),r=a(n(0)),c=a(n(4)),d=a(n(2));function a(e){return e&&e.__esModule?e:{default:e}}(0,o.default)(),i.default.init(),c.default.init(),r.default.init(),d.default.init(),"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("../../sw.js").then(function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)},function(e){console.log("ServiceWorker registration failed: ",e)})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if(null!=e)return e.style.setProperty("--"+t,n)}}]);