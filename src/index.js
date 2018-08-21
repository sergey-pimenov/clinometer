// Utils
import detectPlatform from './utils/scripts/detectPlatform';


// Components
import notSupported from './components/notSupported/notSupported';
import indicator from './components/indicator/indicator';
import about from './components/about/about';
import bottomBar from './components/bottomBar/bottomBar';
import iosMessage from './components/iosMessage/iosMessage';


detectPlatform();


notSupported.init();
indicator.init();
bottomBar.init();
about.init();
iosMessage.init();


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