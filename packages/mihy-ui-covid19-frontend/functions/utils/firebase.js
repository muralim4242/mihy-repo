//var firebase = require("firebase");
//console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");

var firebase = require('firebase');
//console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");

var admin = require("firebase-admin");
var serviceAccount = require("./service-account.json");

//console.log("check1111111111111111111111111111111111111111111111111111111111111");

try {
  var prodConfig = {
    // apiKey: process.env.DEV_API_KEY,
    // authDomain: process.env.DEV_AUTH_DOMAIN,
    // databaseURL: process.env.DEV_DATABASE_URL,
    // projectId: process.env.DEV_PROJECT_ID,
    // storageBucket:process.env.DEV_STORAGE_BUCKET,
    // messagingSenderId: process.env.DEV_MESSANGING_SENDER_ID
    apiKey: "AIzaSyAg_deBRc0hv16WYIseG6DhE8XxcQvJMZw",
    authDomain: "mihy-all.firebaseapp.com",
    databaseURL: "https://mihy-all.firebaseio.com",
    projectId: "mihy-all",
    storageBucket: "mihy-all.appspot.com",
    messagingSenderId: "734387907524"
  };

  var devConfig = {
    // apiKey: process.env.DEV_API_KEY,
    // authDomain: process.env.DEV_AUTH_DOMAIN,
    // databaseURL: process.env.DEV_DATABASE_URL,
    // projectId: process.env.DEV_PROJECT_ID,
    // storageBucket:process.env.DEV_STORAGE_BUCKET,
    // messagingSenderId: process.env.DEV_MESSANGING_SENDER_ID
    apiKey: "AIzaSyAg_deBRc0hv16WYIseG6DhE8XxcQvJMZw",
    authDomain: "mihy-all.firebaseapp.com",
    databaseURL: "https://mihy-all.firebaseio.com",
    projectId: "mihy-all",
    storageBucket: "mihy-all.appspot.com",
    messagingSenderId: "734387907524"
  };

  var config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
} catch (e) {
  console.log(e);
}
//console.log("check 222222222222222222222222222222222222222222222222222222222222222222");

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://mihy-all.firebaseio.com" 
   
    
  });
} catch (e) {
  console.log(e);
}


module.exports = {
  fA: admin,
  fC: firebase
};
