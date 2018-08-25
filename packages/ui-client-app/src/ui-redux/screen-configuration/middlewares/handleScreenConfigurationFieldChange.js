import * as screenActionTypes from "../actionTypes";
import { prepareFinalObject } from "../actions";
import get from "lodash/get";
// import { setFieldValidation } from "../actions";
// import { validateField, getFormField } from "../utils";

const handleScreenConfigurationFieldChange = (store) => (next) => (action) => {
  const { type} = action;
  if (type == screenActionTypes.HANDLE_SCREEN_CONFIGURATION_FIELD_CHANGE) {
    const { type,screenKey,componentJsonpath,property,value } = action;
    const dispatch = store.dispatch;
    const state = store.getState();
    if (property==="value") {
      const state = store.getState();
      const jsonPath=get(state,`screenConfiguration.screenConfig.${screenKey}.${componentJsonpath}.jsonPath`);
      if (jsonPath) {
        dispatch(prepareFinalObject(jsonPath,value));
      }
    }
    next(action);
    // const state = store.getState();
    // const form = state.form[formKey] || {};
    // const field = getFormField(form, fieldKey);
    // const { required, pattern, updateDependentFields } = field;
    // if (pattern || required) {
    //   const validationObject = validateField(field);
    //   const { errorText } = validationObject;
    //   dispatch(setFieldValidation(formKey, fieldKey, errorText));
    // }
    // dispatch(prepareFormData(field.jsonPath, field.value));
    // if (updateDependentFields) {
    //   updateDependentFields({ formKey, field, dispatch, state })
    // }
  } else {
    next(action);
  }
};

export default handleScreenConfigurationFieldChange;
