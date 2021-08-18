importScripts('https://www.gstatic.com/firebasejs/7.14.3/firebase-app.js'); 
importScripts('https://www.gstatic.com/firebasejs/7.14.3/firebase-messaging.js');

//importScripts('../plugins/API/Setting.js')

var config = {
    apiKey: 'AIzaSyBmQcPSDY0cyPMRTmNBjGALE57jKMCY5GU',
    authDomain: 'isafethailand-34cd9.firebaseapp.com',
    databaseURL: 'https://isafethailand-34cd9.firebaseio.com',
    projectId: 'isafethailand-34cd9',
    storageBucket: 'isafethailand-34cd9.appspot.com',
    messagingSenderId: '914852749359',
    appId: '1:914852749359:web:95a7c5455c08bbe74c66da',
    measurementId: 'G-DBE5CYQTWS'
  }

// var config = {
//   apiKey: "AIzaSyAhgD_DdODMwWfru78XkHoCSlCkSkK38Ck",
//   authDomain: "isafethailand-uat.firebaseapp.com",
//   databaseURL: "https://isafethailand-uat-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "isafethailand-uat",
//   storageBucket: "isafethailand-uat.appspot.com",
//   messagingSenderId: "584114132065",
//   appId: "1:584114132065:web:124e11a495bb88b3c18620",
//   measurementId: "G-RXY7E8E4PB"
//   }

  firebase.initializeApp(config);


  let messaging = firebase.messaging();
  // Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.setBackgroundMessageHandler` handler.
// messaging.onBackgroundMessage(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  

//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/images/logo.png'
//   };

//   return this.registration.showNotification(notificationTitle,
//     notificationOptions);
// });