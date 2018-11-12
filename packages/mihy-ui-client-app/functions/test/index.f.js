const functions = require("firebase-functions");
const firebase = require("../utils/firebase");
const { fA } = firebase;
const app = require("../utils/express-instance");
const moment = require("moment");

app.post("/_search", (req, res) => {
  try {
    return res.status(200).send({test:"message"});
  } catch (e) {
    return res.status(500).send(e);
  }
});

exports = module.exports = functions.https.onRequest(app);

// {
//    "MdmsCriteria":{
//       "tenantId":"pb",
//       "moduleDetails":[
//          {
//             "moduleName":"TradeLicense",
//             "masterDetails":[
//                {
//                   "name":"TradeType"
//                },
//                {
//                   "name":"AccessoriesCategory"
//                }
//             ]
//          }
//       ]
//    }
// }
