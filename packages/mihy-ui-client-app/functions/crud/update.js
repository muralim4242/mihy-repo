const { Router } = require("express");

const update= ({ mdmsRef }) => {
  let api = Router();
  const set = require("lodash/set");
  const omit=require("lodash/omit");
  const isEmpty = require("lodash/isEmpty");
  const {getMdmsData} =require("./utils");

  api.post("/_update", ({ body }, res) => {
    try {
      const { mdmsData = {} } = body;
      if (!isEmpty(mdmsData)) {
        const pathRef = mdmsRef.child(mdmsData.path);
        const { moduleName, masterName, data=[] } = mdmsData;
        if (moduleName) {
          const moduleRef = pathRef.child(moduleName);
          if (masterName) {
            const masterRef = moduleRef.child(masterName);
            if (data.length > 0) {
              for (var l = 0; l < data.length; l++) {
                  masterRef.child(data[l].value).update(omit(data[l],["value"]));
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
        return res.status(200).send("Updated successfully");
      } else {
        return res.status(400).send("Please send mdms data");
      }
    } catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
  });

  return api;
};

module.exports=update;
