var firebase = require("firebase");
var admin = require("firebase-admin");
var serviceAccount = require("./mihy-all-firebase-adminsdk-0oao0-0489310984.json");

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

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mihy-all.firebaseio.com"
});

// admin.auth().getUser("32sgW2hmPJUyUj9k7woDrGXwMqX2")
//   .then(function(userRecord) {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log("Successfully fetched user data:", userRecord.toJSON());
//   })
//   .catch(function(error) {
//     console.log("Error fetching user data:", error);
//   });

// admin.auth().createUser({
//   email: "user@example.com",
//   emailVerified: false,
//   phoneNumber: "+11234567890",
//   password: "secretPassword",
//   displayName: "John Doe",
//   photoURL: "http://www.example.com/12345678/photo.png",
//   disabled: false
// })
//   .then(function(userRecord) {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log("Successfully created new user:", userRecord.uid);
//   })
//   .catch(function(error) {
//     console.log("Error creating new user:", error);
//   });

// admin.auth().deleteUser(uid)
//   .then(function() {
//     console.log("Successfully deleted user");
//   })
//   .catch(function(error) {
//     console.log("Error deleting user:", error);
//   });

// function listAllUsers(nextPageToken) {
//   // List batch of users, 1000 at a time.
//   admin.auth().listUsers(1000, nextPageToken)
//     .then(function(listUsersResult) {
//       listUsersResult.users.forEach(function(userRecord) {
//         console.log("user", userRecord.toJSON());
//       });
//       if (listUsersResult.pageToken) {
//         // List next batch of users.
//         listAllUsers(listUsersResult.pageToken)
//       }
//     })
//     .catch(function(error) {
//       console.log("Error listing users:", error);
//     });
// }
// // Start listing users from the beginning, 1000 at a time.
// listAllUsers();

module.exports = {
  fA: admin,
  fC: firebase
  // auth,
  // firebaseRef,
  // googleAuthProviderId,
  // phoneAuthProviderID,
  // facebookAuthProviderId,
  // twitterAuthProviderId,
  // githubAuthProviderId
};
