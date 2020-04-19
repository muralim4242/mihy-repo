const functions = require("firebase-functions");
const firebase = require("../utils/firebase");
const { fA, fC } = firebase;
const app = require("../utils/authorized-express-instance");
const moment = require("moment");

app.post("/_search", async (req, res) => {
  try {
    return res.status(200).send({});
  } catch (e) {
    return res.status(500).send(e);
  }
});

exports = module.exports = functions.https.onRequest(app);
