const functions = require("firebase-functions");
const firebase = require("./utils/firebase");
const { fA, fC } = firebase;
const db = fA.database();
const mdmsRef = process.env.FUNCTIONS_EMULATOR
  ? db.ref("covid19_dev")
  : db.ref("covid19_prod");

var rp = require("request-promise");
var querybase = require("querybase");
// CORS Express middleware to enable CORS Requests.
const cors = require("cors")({
  origin: true
});


// console.log("env-test", process.env.GCLOUD_PROJECT);
console.log("function emulator", process.env.FUNCTIONS_EMULATOR);
// The Firebase Admin SDK to access the Firebase Realtime Database.
// const admin = require('firebase-admin');
// admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions



//get current state data
exports.get_state_wise_status = functions.https.onRequest(async (req, res) => {
  return cors(req, res, async () => {
    try {
      let dataFlag = true;
      var stateff,state;
      const { status_req, date_data, state_status } = req.body;

      if (status_req == "get all status") {
        mdmsRef.child("statewiseData/").once("value", snapshot => {
          res.send(snapshot);
        });

      }
      else if (state_status) {
       
        if (dataFlag == false) {
          await rp("https://api.covid19india.org/data.json")
            .then(function (result) {
              stateff = JSON.parse(result);
              state = stateff.statewise;
            })
            .catch(function (err) { });
        } else {
          state = state_status;
        }
        //upddate and insert
        state.forEach(ele => {
          var date = ele.lastupdatedtime
            .split(" ")[0]
            .split("/")
            .join("-");

          mdmsRef
            .child
            (`statewiseData/${ele.statecode}/${date}`)
            .update(ele);
        });
        res.send("Data Stored")

      }
      else {
        if (date_data) {
          let mainData = [];
          let day = new Date(date_data).getDate();
          let month = new Date(date_data).getMonth() + 1;
          let year = new Date(date_data).getFullYear();

          //current state data
          mdmsRef.child("statewiseData/").once("value", snapshot => {
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
        } else {
          res.send("Please give valid input")
        }
      }
    } catch (e) {
      console.error(e);
      return res.status(500).send(e);
    }
  })

});


//get all district data
exports.get_district_wise_status = functions.https.onRequest(async (req, res) => {
  return cors(req, res, async () => {
    try {
      const { status_req, date_data, district_status } = req.body;
      let dataFlag = true;
      if (status_req == "get all district data") {
        mdmsRef.child(`districtWise/`).once("value", s => {
          res.send(s.val());
        });
      } else if (district_status) {
        let districtDate = {};
        if (dataFlag == true) {
          districtDate = district_status;
        }
        else {
          await rp("https://api.covid19india.org/state_district_wise.json")
            .then(function (result) {
              districtDate = JSON.parse(result);
            })
            .catch(function (err) { });

        }
        //upddate and insert\
        let _date;
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
                if (k === "Y.S.R. Kadapa") {
                  flag2 = true;
                  ca = andhraPradesh[k];
                  delete andhraPradesh[k];
                }

                if (flag1) {
                  andhraPradesh["Sri Potti Sriramulu Nellore"] = ac;
                }
                if (flag2) {
                  andhraPradesh["YSR Kadapa"] = ca;
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

          let d = new Date().getDate();
          let month = new Date().getMonth() + 1;
          let year = new Date().getFullYear();
          let date = `${d}-${month}-${year}`;

          await mdmsRef
            .child(`districtWise/${keystate}/${date}`)
            .update(newdata[0]);
        }
        res.send("Data Stored")
      } else {
        if (date_data) {
          let actual_date = `${new Date(date_data).getDate()}-${new Date(date_data).getMonth() + 1}-${new Date(date_data).getFullYear()}`;
          console.log("actual_date", actual_date);

          let districtResponse = [];
          await mdmsRef.child("districtWise/").once("value", snapshot => {
            snapshot.forEach(s => {
              let obj, cur_date;

              s.forEach(d1 => {
                let day = parseInt(d1.key.split("-")[0]);
                let month_ = parseInt(d1.key.split("-")[1]);
                let year_ = parseInt(d1.key.split("-")[2]);
                let date_ = `${day}-${month_}-${year_}`;
                cur_date = actual_date;

                if (date_ == actual_date) {
                  obj = d1;
                }
              });
              obj2 = { [s.key]: { [cur_date]: obj } };
              districtResponse.push(obj2);
            });
          });
          res.send(districtResponse);

        } else {
          res.send("Please input a valid input");
        }
      }
    } catch (e) {
      console.error(e);
      return res.status(500).send(e);
    }
  })

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
      state: state,
      district: district,
      service_type: service_type,
      frequency: frequency,
      email: email,
      phone: phone,
      from_date: from_date,
      to_date: to_date,
      additional_info: additional_info
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
    const { state, district, service_type } = req.body;
    console.log(`'${state}'`);

    let databaseRef = mdmsRef.child("service/Location_details");
    let queryDbRef = querybase.ref(databaseRef, ["state", "district"]);
    queryDbRef
      .where({ state: "Kerala", district: "Alappuzha" })
      .on("value", snapshot => {
        res.send(snapshot);
      });
  } catch (e) {
    console.error(e);
    return res.status(500).send(e);
  }
});


//get world status
exports.get_world_wise_status = functions.https.onRequest(async (req, res) => {
  return cors(req, res, async () => {
    try {
      let dataFlag = true;
      let { status_req, date_data, world_status } = req.body;



      //all status
      if (status_req == "get all status") {
        mdmsRef.child(`worldStatusData/`).once("value", s => {
          res.send(s.val());
        });
      } else if (world_status) { //if world data is coming in reqbody from https://corona.lmao.ninja/v2/all api
        let world_data = [];

        if (dataFlag == false) { // it should never execute
          await rp("https://corona.lmao.ninja/v2/all")
            .then(function (result) {
              world_data = JSON.parse(result);
            })
            .catch(function (err) { });
        } else {
          //assigning world status data 
          world_data = world_status;
        }
        let d = new Date(world_data.updated).getDate();
        let month = new Date(world_data.updated).getMonth() + 1;
        let year = new Date(world_data.updated).getFullYear();
        let date = `${d}-${month}-${year}`;
        // storing data in db
        await mdmsRef
          .child(`worldStatusData/worldStatus/${date}`)
          .update(world_data);
        res.send("Data stored")
      }
      else {
        //returning given date data
        if (date_data) {
          let actual_date = new Date(date_data);
          await mdmsRef.child("worldStatusData/").once("value", snapshot => {
            let temp, obj, l_date;
            let date = actual_date;
            let count = 0;
            snapshot.forEach(ele => {
              ele.forEach(ee => {
                let current_time = ee.key;
                let d_current_time = parseInt(current_time.split("-")[0]);
                let m_current_time = parseInt(current_time.split("-")[1]);
                let y_current_time = parseInt(current_time.split("-")[2]);
                let d1 = new Date(y_current_time, m_current_time, d_current_time);
                //console.log(ee.update);
                count++;
                l_date = ee.key;
                let temp2 = date.getTime() - d1.getTime();
                if (count == 1) {
                  temp = temp2;
                  obj = ee;
                }
                if (temp2 < temp) {
                  temp = temp2;
                  obj = ee;
                }
              });
              let latest_world_data = {
                worldStatus: {
                  [l_date]: obj
                }
              };
              res.send(latest_world_data);

            });
          });

        }
        else {
          // if nothing is coming in reqqbody
          res.send("Please give valid input")
        }
      }

    } catch (e) {
      console.error(e);
      return res.status(500).send(e);
    }
  })

});

exports.get_countries_wise_status = functions.https.onRequest(async (req, res) => {
  return cors(req, res, async () => {
    try {
      let { status_req, date_data, country_status } = req.body;
      let dataFlag = true;
      if (status_req == "get all status") {
        mdmsRef.child(`countryWiseData/`).once("value", s => {
          res.send(s.val());
        });
      } else if (country_status) {
        let country_data = [];
        if (dataFlag == false) {
          await rp("https://corona.lmao.ninja/v2/countries")
            .then(function (result) {
              country_data = JSON.parse(result);
            })
            .catch(function (err) { });
        } else {
          country_data = country_status;
        }
        country_data.forEach(ele => {
          let r_d = new Date(ele.updated).getDate();
          let r_m = new Date(ele.updated).getMonth() + 1;
          let r_y = new Date(ele.updated).getFullYear();
          var date = `${r_d}-${r_m}-${r_y}`;

          mdmsRef
            .child(`countryWiseData/${ele.countryInfo.iso3}/${date}`)
            .update(ele);
        });
        res.send("Data Stored")
      }
      else {
        if (date_data) {
          let actual_date = new Date(date_data);
          await mdmsRef.child("countryWiseData/").once("value", snapshot => {
            let countryResponse = [];
            let temp, obj, current_time;
            let date = actual_date;
            let count = 0;
            snapshot.forEach(snap => {
              let country_code = snap.key;
              snap.forEach(s => {
                current_time = s.key;
                console.log("current_timeqqq", s.key);
                let d_current_time = parseInt(current_time.split("-")[0]);
                let m_current_time = parseInt(current_time.split("-")[1]);
                let y_current_time = parseInt(current_time.split("-")[2]);
                let d1 = new Date(y_current_time, m_current_time, d_current_time);
                count++;
                let temp2 = date.getTime() - d1.getTime();
                if (count == 1) {
                  temp = temp2;
                  obj = s;
                }
                if (temp2 < temp) {
                  temp = temp2;
                  obj = s;
                }
              });

              let obje = { [country_code]: { [current_time]: obj } };

              countryResponse.push(obje);
            });

            res.send(countryResponse);
          });
        } else {
          res.send("Please give a valid input")
        }
      }
    } catch (e) {
      console.error(e);
      return res.status(500).send(e);
    }
  })

});

//Service_create done
exports.createFeedback = functions.https.onRequest(async (req, res) => {
  return cors(req, res, async () => {
    try {
      console.log(req.body.name);

      const { name, stars, feedback } = req.body;
      if (!name || !stars || stars < 0 || stars > 5) {
        res.send("Please enter correct name and ratings");
      }
      let current_time = new Date().getTime();
      let obj = {
        name: name,
        stars: stars,
        feedback: feedback,
        created_date: current_time
      };

      await mdmsRef.child("feedback/").push(obj);
      res.send(`Thanks for your valuable Feedback ${name}`);
    } catch (e) {
      console.error(e);
      return res.status(500).send(e);
    }
  });
});

// get Service
exports.getFeedback = functions.https.onRequest(async (req, res) => {
  return cors(req, res, async () => {
    try {
      const { rate } = req.body;

      const querybaseRef = querybase.ref(mdmsRef.child("feedback/"), []);
      if (rate == -4) {
        querybaseRef
          .where("stars")
          .between(1, 3)
          .once("value", snap => {
            res.send(snap.val());
          });
      } else {
        if (rate == 4) {
          querybaseRef
            .where("stars")
            .between(4, 5)
            .once("value", snap => {
              res.send(snap);
            });
        } else {
          return "Please input a rating 4 or -4";
        }
      }

      // mdmsRef.child('service/').orderByChild(`Location_details/state`).equalTo(`${state}`).once('value', (snapshot) => {

      //       res.send(snapshot.val())
      //     })

      // let databaseRef=  mdmsRef.child('service/Location_details');
      // let queryDbRef=querybase.ref(databaseRef,['state'])
      // queryDbRef.where('state').startsWith('K').once('value', (snapshot) => {

      //      res.send(snapshot.val())
      //    })
    } catch (e) {
      console.error(e);
      return res.status(500).send(e);
    }
  })

});

// temp =1; obj= res1 da
// take current date
// res1 date{ cur - res} 21-20=1.. temp=1
//next res date {cur -res} 21-18=3 if(temp<3)  update temp update obj else ..fine

//   let obj2 = { [keystate]: newdata[0] };
//   obj = {
//     ...obj,
//     ...obj2
//   };
