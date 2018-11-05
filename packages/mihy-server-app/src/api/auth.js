import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import omit from "lodash/omit";

export default ({ config, db }) => {
  let api = Router();

  // perhaps expose some API metadata at the root
  api.post("/register", (req, res) => {
    db.firebase.fA
      .auth()
      .createUser({
        email: req.body.email,
        password: req.body.password,
        displayName: req.body.name
      })
      .then(function(userRecord) {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log("Successfully created new user:", userRecord.uid);
        var user = db.firebase.fC.auth().currentUser;

        user
          .sendEmailVerification()
          .then(function() {
            // Email sent.
            db.firebase.fC
              .auth()
              .signInWithEmailAndPassword(req.body.email, req.body.password)
              .then(function(userRecord) {
                // See the UserRecord reference doc for the contents of userRecord.
                console.log("Successfully logged in user:", userRecord.uid);
                res.status(200).send({ ...userRecord });
              })
              .catch(function(error) {
                console.log("Error logging user:", error);
                return res.status(500).send(error);
              });
          })
          .catch(function(error) {
            // An error happened.
            return res.status(500).send(error);
          });
      })
      .catch(function(error) {
        console.log("Error creating new user:", error);
        return res.status(500).send(error);
      });
  });

  api.post("/login", (req, res) => {
    db.firebase.fC
      .auth()
      .signInWithEmailAndPassword(req.body.email, req.body.password)
      .then(function(userRecord) {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log("Successfully logged in user:", userRecord.user.uid);
        res.status(200).send({ ...userRecord });
      })
      .catch(function(error) {
        console.log("Error logging user:", error);
        return res.status(500).send(error);
      });
  });

  api.post("/setCustomClaims", (req, res) => {
    // Get the ID token passed.
    const idToken = req.body.idToken;
    // Verify the ID token and decode its payload.
    db.firebase.fA
      .auth()
      .verifyIdToken(idToken)
      .then(claims => {
        // Verify user is eligible for additional privileges.
        if (
          typeof claims.email !== "undefined" &&
          typeof claims.email_verified !== "undefined" &&
          claims.email_verified &&
          claims.email.indexOf("@admin.example.com") != -1
        ) {
          // Add custom claims for additional privileges.
          db.firebase.fA
            .auth()
            .setCustomUserClaims(claims.sub, {
              admin: true
            })
            .then(function() {
              // Tell client to refresh token on user.
              res.end(
                JSON.stringify({
                  status: "success"
                })
              );
            });
        } else {
          // Return nothing.
          res.end(JSON.stringify({ status: "ineligible" }));
        }
      });
  });

  api.post("/giveRole", (req, res) => {
    db.firebase.fA
      .auth()
      .getUserByEmail(req.body.email)
      .then(user => {
        // Confirm user is verified.
        if (user.emailVerified) {
          // Add custom claims for additional privileges.
          // This will be picked up by the user on token refresh or next sign in on new device.
          return admin.auth().setCustomUserClaims(user.uid, {
            admin: true
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  });

  api.post("/logout", (req, res) => {
    db.firebase.fC
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
        res.status(200).send("Sign-out successful");
      })
      .catch(function(error) {
        // An error happened.
        return res.status(500).send(error);
      });
  });

  api.post("/send-password-reset-email", (req, res) => {
    var auth = db.firebase.fC.auth();
    var emailAddress = req.body.email;
    auth
      .sendPasswordResetEmail(emailAddress)
      .then(function() {
        // Email sent.
        res.status(200).send("Email sent");
      })
      .catch(function(error) {
        // An error happened.
        return res.status(500).send(error);
      });
  });

  api.put("/update-user", ({ body, uid }, res) => {
    db.firebase.fA
      .auth()
      .updateUser(uid, body.user)
      .then(function(userRecord) {
        // See the UserRecord reference doc for the contents of userRecord.
        //update rest of the user info
        res.status(200).send("Successfully updated user");
      })
      .catch(function(error) {
        return res.status(500).send(error);
      });
  });

  api.delete("/delete-user", ({ body, uid }, res) => {
    db.firebase.fA
      .auth()
      .deleteUser(uid)
      .then(function(userRecord) {
        // See the UserRecord reference doc for the contents of userRecord.
        //update rest of the user info
        res.status(200).send("Successfully deleted user");
      })
      .catch(function(error) {
        return res.status(500).send(error);
      });
  });

// api.get("/list-all-users", (req, res) => {
//   function listAllUsers(nextPageToken) {
//     // List batch of users, 1000 at a time.
//     db.firebase.fA
//       .auth()
//       .listUsers(1000, nextPageToken)
//       .then(function(listUsersResult) {
//         listUsersResult.users.forEach(function(userRecord) {
//           // console.log("user", userRecord.toJSON());
//           return res.status(200).send(userRecord.toJSON());
//         });
//         if (listUsersResult.pageToken) {
//           // List next batch of users.
//           listAllUsers(listUsersResult.pageToken);
//         }
//       })
//       .catch(function(error) {
//         return res.status(500).send(error);
//       });
//   }
//   // Start listing users from the beginning, 1000 at a time.
//   listAllUsers();
// });


  return api;
};
