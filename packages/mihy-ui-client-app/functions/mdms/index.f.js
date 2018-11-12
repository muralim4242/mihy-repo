const functions = require("firebase-functions");
const firebase = require("../utils/firebase");
const { fA } = firebase;
const app = require("../utils/express-instance");
const moment = require("moment");
const db = fA.database();
const mdmsRef = db.ref("admin/mdms");
const isEmpty = require("lodash/isEmpty");

app.post("/_search",async ({body}, res) => {
  try {
    let mdmsRes={}
    const {mdmsCriteria={}}=body;
    const {path,moduleDetails=[]}=mdmsCriteria;
    if (path) {
      const pathRef=mdmsRef.child(path);
      if (moduleDetails.length>0) {
        for (var i = 0; i < moduleDetails.length; i++) {
          const {moduleName,masterDetails=[]}=moduleDetails[i];
          const moduleRef=pathRef.child(moduleName);
          mdmsRes[moduleName]={};
          for (var j = 0; j < masterDetails.length; j++) {
            const {name}=masterDetails[j];
            const masterRef=pathRef.child(name);
            masterRef.once("value", (data)=> {
                mdmsRes[moduleName][name]=data;
            },(e)=>{
              mdmsRes[moduleName][name]=[];
            });
          }
        }
      } else {
        return res.status(400).send("Module details is missing");
      }
      return res.status(200).send({mdmsRes});
    } else {
      return res.status(400).send("Path is missing");
    }

  } catch (e) {
    return res.status(500).send(e);
  }
});

app.post("/_create-bulk-modules", ({ body }, res) => {
  try {
    const { mdmsData = {} } = body;
    if (!isEmpty(mdmsData)) {
      const pathRef = mdmsRef.child(mdmsData.path);
      const { moduleDetails = [] } = mdmsData;
      if (moduleDetails.length > 0) {
        for (var j = 0; j < moduleDetails.length; j++) {
          const moduleRef = pathRef.child(moduleDetails[j].moduleName);
          const { masterDetails = [] } = moduleDetails[j];
          if (masterDetails.length > 0) {
            for (var k = 0; k < masterDetails.length; k++) {
              const masterRef = moduleRef.child(masterDetails[j].masterName);
              const { data = [] } = masterDetails[k];
              if (data.length > 0) {
                for (var l = 0; l < data.length; l++) {
                  try {
                    masterRef.push(data[l]);
                  } catch (e) {
                    return res.status(500).send(e);
                  }
                }
              } else {
                return res.status(400).send("Please send master data");
              }
            }
          } else {
            return res.status(400).send("Please send master details");
          }
        }
      } else {
        return res.status(400).send("Please send module details");
      }
      return res.status(200).send("Created successfully");
    } else {
      return res.status(400).send("Please send mdms data");
    }
  } catch (e) {
    return res.status(500).send(e);
  }
});

app.post("/_create-bulk-masters", ({ body }, res) => {
  try {
    const { mdmsData = {} } = body;
    if (!isEmpty(mdmsData)) {
      const pathRef = mdmsRef.child(mdmsData.path);
      const { moduleName, masterDetails = [] } = mdmsData;
      if (moduleName) {
        const moduleRef = pathRef.child(moduleName);
        if (masterDetails.length > 0) {
          for (var k = 0; k < masterDetails.length; k++) {
            const masterRef = moduleRef.child(masterDetails[k].masterName);
            const { data = [] } = masterDetails[k];
            if (data.length > 0) {
              for (var l = 0; l < data.length; l++) {
                try {
                  masterRef.push(data[l]);
                } catch (e) {
                  return res.status(500).send(e);
                }
              }
            } else {
              return res.status(400).send("Please send master data");
            }
          }
        } else {
          return res.status(400).send("Please send master details");
        }
      } else {
        return res.status(400).send("Please send module name");
      }
      return res.status(200).send("Created successfully");
    } else {
      return res.status(400).send("Please send mdms data");
    }
  } catch (e) {
    return res.status(500).send(e);
  }
});

app.post("/_create", ({ body }, res) => {
  try {
    const { mdmsData = {} } = body;
    if (!isEmpty(mdmsData)) {
      const pathRef = mdmsRef.child(mdmsData.path);
      const { moduleName, masterName, data } = mdmsData;
      if (moduleName) {
        const moduleRef = pathRef.child(moduleName);
        if (masterName) {
          const masterRef = moduleRef.child(masterName);
          if (data.length > 0) {
            for (var l = 0; l < data.length; l++) {
              try {
                masterRef.push(data[l]);
              } catch (e) {
                return res.status(500).send(e);
              }
            }
          } else {
            return res.status(400).send("Please send master data");
          }
        } else {
          return res.status(400).send("Please send master name");
        }
      } else {
        return res.status(400).send("Please send module name");
      }
      return res.status(200).send("Created successfully");
    } else {
      return res.status(400).send("Please send mdms data");
    }
  } catch (e) {
    return res.status(500).send(e);
  }
});

exports = module.exports = functions.https.onRequest(app);

// {
//    "MdmsCriteria":{
//       "path":"default",
//       "moduleDetails":[
//          {
//             "moduleName":"blood",
//             "masterDetails":[
//                {
//                   "name":"bloodGrps"
//                }
//             ]
//          }
//       ]
//    }
// }
