import * as screenActionTypes from "./actionTypes";

export const prepareFinalObject = (jsonPath, value) => {
  return {
    type: screenActionTypes.PREPARE_FINAL_OBJECT,
    jsonPath,
    value
  };
};
