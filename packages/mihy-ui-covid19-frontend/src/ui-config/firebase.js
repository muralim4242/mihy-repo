var firebase = require("firebase");

try {
  var config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSANGING_SENDER_ID
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
} catch (e) {
  console.log(e);
}

var firebaseAuth = firebase.auth;
var googleAuthProviderId = firebase.auth.GoogleAuthProvider.PROVIDER_ID;
var phoneAuthProviderID = firebase.auth.PhoneAuthProvider.PROVIDER_ID;
var facebookAuthProviderId = firebase.auth.FacebookAuthProvider.PROVIDER_ID;
var twitterAuthProviderId = firebase.auth.TwitterAuthProvider.PROVIDER_ID;
var githubAuthProviderId = firebase.auth.GithubAuthProvider.PROVIDER_ID;

var firebaseRef = firebase.database().ref();

module.exports = {
  firebaseAuth,
  firebaseRef,
  googleAuthProviderId,
  phoneAuthProviderID,
  facebookAuthProviderId,
  twitterAuthProviderId,
  githubAuthProviderId
};
