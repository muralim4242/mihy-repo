import set from "lodash/set";
export const validateField = (field) => {
  const { required, pattern, minLength, maxLength, minValue, maxValue,hideField } = field;

  if (hideField) {
    return { isFieldValid:true, errorText:"" };
  }

  const value = field.value ? (typeof field.value === "string" ? field.value.trim() : field.value) : null;
  let errorText = "",
    isFieldValid = true,
    fieldLength = 0;

  if (required && !value) {
    isFieldValid = false;
    errorText = field.requiredmessage;
  }

  if (value) {
    fieldLength = value.length;
  }

  if (isFieldValid && fieldLength && pattern && !new RegExp(pattern).test(value)) {
    isFieldValid = false;
  }
  if (isFieldValid && minLength && maxLength && !(fieldLength >= minLength && fieldLength <= maxLength)) {
    isFieldValid = false;
  }
  if (isFieldValid && minValue && maxValue && !(value >= minValue && value <= maxValue)) {
    isFieldValid = false;
  }

  errorText = !isFieldValid ? (errorText.length ? errorText : field.errorMessage) : "";

  return { isFieldValid, errorText };
};

export const validateForm = (form) => {
  let isFormValid = true;
  const formFields = getFormFields(form);
  for (let key in formFields) {
    const field = formFields[key];
    if (!validateField(field, field.value).isFieldValid) {
      isFormValid = false;
      break;
    }
  }
  return isFormValid;
};

export const getFormFields = (form) => {
  return form.fields || {};
};

export const getFormField = (form, fieldKey) => {
  const fields = getFormFields(form);
  return fields[fieldKey];
};

export const updateObjectWithComponentJsonPath = (
  screenConfig,
  componentJsonpath,
  property,
  value
) => {
  set(screenConfig, `${componentJsonpath}.${property}`, value);
  return screenConfig;
};

export const prepareFinalObject = (preparedFinalOject,jsonPath, value) => {
  set(preparedFinalOject, jsonPath, value);
  return preparedFinalOject;
};
