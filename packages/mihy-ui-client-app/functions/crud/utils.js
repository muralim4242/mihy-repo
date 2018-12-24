const omit=require("lodash/omit");
const getMdmsData = async (masterRef, moduleName, masterName) => {
  let response = [];
  try {
    let snapshot = await masterRef.once("value");
    let data = snapshot.val();
    for (var variable in data) {
      if (data.hasOwnProperty(variable)) {
        response.push(Object.assign({},data[variable],{value:variable}));
      }
    }
  } catch (e) {
    response = [];
  }
  return {path:`${moduleName}.${masterName}`,data:response};
};

module.exports = {
  getMdmsData
};
