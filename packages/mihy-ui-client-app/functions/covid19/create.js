const { Router } = require("express");

const create = ({ covid19Ref }) => {
  let api = Router();
  const isEmpty = require("lodash/isEmpty");

  api.post("/_create-bulk-modules", ({ body }, res) => {
    try {
      const { mdmsData = {} } = body;
      if (!isEmpty(mdmsData)) {
        const pathRef = covid19Ref.child(mdmsData.path);
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
                      masterRef.push(data[l]);
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
      console.error(e);
      return res.status(500).send(e);
    }
  });

  api.post("/_create-bulk-masters", ({ body }, res) => {
    try {
      const { mdmsData = {} } = body;
      if (!isEmpty(mdmsData)) {
        const pathRef = covid19Ref.child(mdmsData.path);
        const { moduleName, masterDetails = [] } = mdmsData;
        if (moduleName) {
          const moduleRef = pathRef.child(moduleName);
          if (masterDetails.length > 0) {
            for (var k = 0; k < masterDetails.length; k++) {
              const masterRef = moduleRef.child(masterDetails[k].masterName);
              const { data = [] } = masterDetails[k];
              if (data.length > 0) {
                for (var l = 0; l < data.length; l++) {
                    masterRef.push(data[l]);
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
      console.error(e);
      return res.status(500).send(e);
    }
  });

  api.post("/_create", ({ body }, res) => {
    try {
      const { mdmsData = {} } = body;
      if (!isEmpty(mdmsData)) {
        const pathRef = covid19Ref.child(mdmsData.path);
        const { moduleName, masterName, data=[] } = mdmsData;
        if (moduleName) {
          const moduleRef = pathRef.child(moduleName);
          if (masterName) {
            const masterRef = moduleRef.child(masterName);
            if (data.length > 0) {
              for (var l = 0; l < data.length; l++) {
                  masterRef.push(data[l]);
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
      console.error(e);
      return res.status(500).send(e);
    }
  });

  api.post("/v1",async ({ body }, res) => {
    try {
      console.log("test");
      covid19Ref.child("stateinfo").set(
          {
            "KAR":{
              "17-04-2020":{
                "confirmed":"12"
              }
            }
          }

      ); //creating
      let snapshot = await covid19Ref.once("value"); //getting
      let data = snapshot.val(); //getting data from snapshot
      console.log(data); //log the data
      return res.send(data);
    } catch (e) {
      console.error(e);
      return res.status(500).send(e);
    }
  });
  return api;
};

module.exports = create;
