const functions = require("firebase-functions");
const firebase = require("../utils/firebase");
const { fA, fC } = firebase;
const app = require("../utils/express-instance");
const moment = require("moment");

app.post("/_register", async (req, res) => {
  try {
    const createResponse = await fA.auth().createUser({
      email: req.body.email,
      password: req.body.password,
      displayName: req.body.name
    });
    const creationTime = moment(new Date().getTime());
    const year = creationTime.format("YYYY");
    const month = creationTime.format("MM");
    const day = creationTime.format("DD");

    const dayCount = fA
      .database()
      .ref(`/admin/user_registrations_per_day/${year}/${month}/${day}`)
      .transaction(current => (current || 0) + 1);

    const monthCount = fA
      .database()
      .ref(`/admin/user_registrations_per_month/${year}/${month}`)
      .transaction(current => (current || 0) + 1);

    const usersCount = fA
      .database()
      .ref(`/admin/users_count`)
      .transaction(current => (current || 0) + 1);

    // var user = fC.auth().currentUser;
    // await user.sendEmailVerification();
    // const userResponse = await fC
    //   .auth()
    //   .signInWithEmailAndPassword(req.body.email, req.body.password);
    return res.status(200).send(createResponse);
  } catch (e) {
    return res.status(500).send(e);
  }
});

app.post("/_login", async (req, res) => {
  try {
    const userRecord = await fC
      .auth()
      .signInWithEmailAndPassword(req.body.email, req.body.password);
    return res.status(200).send(userRecord);
  } catch (e) {
    return res.status(500).send(e);
  }
});

exports = module.exports = functions.https.onRequest(app);
