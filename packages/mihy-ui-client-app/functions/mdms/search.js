const { Router } = require("express");

const search= ({ mdmsRef }) => {
  let api = Router();
  const set = require("lodash/set");
  const {getMdmsData} =require("./utils");

  api.post("/_search",async ({body}, res) => {
    try {
      let mdmsRes={}
      let results=[];
      const {mdmsCriteria={}}=body;
      const {path,moduleDetails=[]}=mdmsCriteria;
      if (path) {
        const pathRef=mdmsRef.child(path);
        console.log(path);
        if (moduleDetails.length>0) {
          for (var i = 0; i < moduleDetails.length; i++) {
            const {moduleName,masterDetails=[]}=moduleDetails[i];
            const moduleRef=pathRef.child(moduleName);
            console.log(moduleName);
            for (var j = 0; j < masterDetails.length; j++) {
              const {name}=masterDetails[j];
              const masterRef=moduleRef.child(name);
              console.log(name);
              results.push(getMdmsData(masterRef,moduleName,name));
            }
          }
        } else {
          return res.status(400).send("Module details is missing");
        }
        try {
          // console.log(await Promise.all(results));
          promiseData=await Promise.all(results);
          for (var k = 0; k < promiseData.length; k++) {
            const {path,data}=promiseData[k]
            set(mdmsRes,path,data);
          }
        } catch (e) {
          console.error(e);
          res.status(500).send(e);
        }
        return res.status(200).send({mdmsRes});
      } else {
        return res.status(400).send("Path is missing");
      }

    } catch (e) {
      return res.status(500).send(e);
    }
  });

  return api;
};

module.exports=search;
