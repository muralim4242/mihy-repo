const functions = require('firebase-functions');
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

var adaRef = admin.database().ref("murali/test");

exports.getStates = functions.https.onRequest(async(request, response) => {
  console.log("test");
  const snapshot = await adaRef.child('/messages').push({data: "test"});
  console.log(snapshot);
 response.send("Hello from Firebase!");
});
