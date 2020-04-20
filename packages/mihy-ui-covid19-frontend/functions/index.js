const functions = require("firebase-functions");
const firebase = require("./utils/firebase");
const { fA } = firebase;
const db = fA.database();
const isEmulator=process.env.FUNCTIONS_EMULATOR;
const mdmsRef = db.ref(isEmulator?"covid19_dev":"covid19_prod");
var rp = require("request-promise");

console.log("env-test",process.env.GCLOUD_PROJECT);
console.log("function emulator",process.env.FUNCTIONS_EMULATOR);
// The Firebase Admin SDK to access the Firebase Realtime Database.
// const admin = require('firebase-admin');
// admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// var adaRef = admin.database().ref("neha/test");

// exports.getStates = functions.https.onRequest(async(req, res) => {
//   try {
//     console.log("test");
//     mdmsRef.child("statewise/").set(
//       {
//             statecode:{
//               "17-04-2020":{
//                 "confirmed":"12"
//               }
//             }
//           }
//     ); //creating
//     let snapshot = await mdmsRef.once("value"); //getting
//     let data = snapshot.val(); //getting data from snapshot
//     console.log(data); //log the data
//     return res.send(data);
//   } catch (e) {
//     console.error(e);
//     return res.status(500).send(e);
//   }
// //   console.log("test");
// //   const snapshot = await mdmsRef.child('/messages').push({data: "test"});
// //   console.log(snapshot);
// //  response.send("Hello from Firebase!");
// });

//get current state data
exports.get_state_wise_status = functions.https.onRequest(async (req, res) => {
  try {
    var stateff;
    var state = [];

    await rp("https://api.covid19india.org/data.json")
      .then(function(result) {
        stateff = JSON.parse(result);
        state = stateff.statewise;
      })
      .catch(function(err) {});
    //upddate and insert
    state.forEach(ele => {
      var date = ele.lastupdatedtime
        .split(" ")[0]
        .split("/")
        .join("-");

      //  var path = `statewise/${ele.statecode}/${date}`
      let obj = {
        [ele.statecode]: {
          [date]: ele
        }
      };
      mdmsRef.child("stateWiseStatus/").update(obj);
    });

    let mainData = [];
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getUTCFullYear();

    //current state data
    mdmsRef.child("stateWiseStatus/").once("value", snapshot => {
      snapshot.forEach(element => {
        let yd = year;
        let md = month;
        let dd = day;
        let state_code = element.key;
        let stateobj;
        element.forEach(ee => {
          let flag = false;

          let current_time = ee.key;

          let day_current_time = parseInt(current_time.split("-")[0]);
          let month_current_time = parseInt(current_time.split("-")[1]);
          let year_current_time = parseInt(current_time.split("-")[2]);

          let yd1 = year - year_current_time;
          let md1 = month - month_current_time;
          let dd1 = day - day_current_time;

          if (yd1 <= yd) {
            if (md1 <= md) {
              if (dd1 < dd) {
                yd = yd1;
                md = md1;
                dd = dd1;
                flag = true;
              }
            }
          }

          if (flag === true) {
            let stateObject = {
              [state_code]: {
                [current_time]: ee
              }
            };

            stateobj = stateObject;
          }
        });

        mainData.push(stateobj);
      });
      res.send(mainData);
    });
  } catch (e) {
    console.error(e);
    return res.status(500).send(e);
  }
});

// get all data of state
exports.getAllState = functions.https.onRequest(async (req, res) => {
  try {
    mdmsRef.child("stateWiseStatus/").once("value", snapshot => {
      res.send(snapshot);
    });
  } catch (e) {
    console.error(e);
    return res.status(500).send(e);
  }
});

//get all district data
exports.getallDistrict = functions.https.onRequest(async (req, res) => {
  try {
    let districtDate = [];
    await rp("https://api.covid19india.org/state_district_wise.json")
      .then(function(result) {
        districtDate = JSON.parse(result);
      })
      .catch(function(err) {});

    //upddate and insert
    for (let x in districtDate) {
      if (x === "Punjab") {
        let a = districtDate[x];
        let ac;
        for (let y in a) {
          let punjabData = a[y];
          for (let k in punjabData) {
            if (k === "S.A.S. Nagar") {
              console.log(k);
              k.replace(".", "");
              ac = punjabData[k];
              delete punjabData[k];
            }
            punjabData["Sahibzada Ajit Singh Nagar"] = ac;
          }
        }
      }
    }

    for (let x in districtDate) {
      if (x === "Andhra Pradesh") {
        let flag1 = false;
        let flag2 = false;
        let a = districtDate[x];
        let ac, ca;

        for (let y in a) {
          let andhraPradesh = a[y];
          for (let k in andhraPradesh) {
            if (k === "S.P.S. Nellore") {
              flag1 = true;
              ac = andhraPradesh[k];
              delete andhraPradesh[k];
            }
            if (k === "Y.S.R.") {
              flag2 = true;
              ca = andhraPradesh[k];
              delete andhraPradesh[k];
            }

            if (flag1) {
              andhraPradesh["Sri Potti Sriramulu Nellore"] = ac;
            }
            if (flag2) {
              andhraPradesh["YSR"] = ca;
            }
          }
        }
      }
    }
    let newdata;
    let obj = {};
    for (let x in districtDate) {
      let keystate = x;

      let data = districtDate[x];
      newdata = Object.values(data);

      delete districtDate[x];
      let obj2 = { [keystate]: newdata[0] };
      obj = {
        ...obj,
        ...obj2
      };
    }

    await mdmsRef.child("district_wise/").update(obj);
    await mdmsRef.child("district_wise/").once("value", snapshot => {
      res.send(snapshot);
    });
  } catch (e) {
    console.error(e);
    return res.status(500).send(e);
  }
});

//Service_create
exports.createService = functions.https.onRequest(async (req, res) => {
  try {
    const {
      state,
      district,
      service_type,
      frequency,
      email,
      phone,
      from_date,
      to_date,
      additional_info
    } = req.body;
    let obj = {
      Location_details: {
        state: state,
        district: district
      },
      Service_details: {
        service_type: service_type,
        frequency: frequency,
        email: email,
        phone: phone,
        from_date: from_date,
        to_date: to_date,
        additional_info: additional_info
      }
    };

    await mdmsRef.child("service/").push(obj);
    await mdmsRef.child("service/").once("value", snapshot => {
      res.send(snapshot);
    });
  } catch (e) {
    console.error(e);
    return res.status(500).send(e);
  }
});

// get Service
exports.getService = functions.https.onRequest(async (req, res) => {
  try {
    const { state } = req.body;
    console.log(`'${state}'`);

    mdmsRef
      .child("service/")
      .orderByChild(`Location_details/state`)
      .equalTo(`${state}`)
      .once("value", snapshot => {
        res.send(snapshot.val());
      });
  } catch (e) {
    console.error(e);
    return res.status(500).send(e);
  }
});
