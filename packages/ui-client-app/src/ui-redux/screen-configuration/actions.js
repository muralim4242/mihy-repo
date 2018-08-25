import * as screenActionTypes from "./actionTypes";

export const initScreen = (screenKey,screenConfig) =>{
  return {
    type:screenActionTypes.INIT_SCREEN,
    screenKey,
    screenConfig
  }
}

export const handleScreenConfigurationFieldChange = (screenKey,componentJsonpath,property,value) =>{
  return {
    type:screenActionTypes.HANDLE_SCREEN_CONFIGURATION_FIELD_CHANGE,
    screenKey,
    componentJsonpath,
    property,
    value
  }
}

export const prepareFinalObject = (jsonPath,value)=>{
  return {
    type:screenActionTypes.PREPARE_FINAL_OBJECT,
    jsonPath,
    value
  }
}
