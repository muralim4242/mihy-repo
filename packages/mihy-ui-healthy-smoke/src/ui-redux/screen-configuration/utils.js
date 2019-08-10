import set from "lodash/set";

export const validateField = field => {
  const {
    required,
    pattern,
    minLength,
    maxLength,
    minValue,
    maxValue,
    visible,
    isDOB
  } = field;

  if (visible !== undefined && !visible) {
    return { isFieldValid: true, errorText: "" };
  }

  const value = field.value
    ? typeof field.value === "string"
      ? field.value.trim()
      : field.value
    : null;
  let errorText = "",
    isFieldValid = true,
    fieldLength = 0;

  if (required && !value) {
    isFieldValid = false;
    errorText = field.requiredMessage || "Required";
  }

  if (value) {
    fieldLength = value.length;
  }

  if (
    isFieldValid &&
    fieldLength &&
    pattern &&
    !new RegExp(pattern).test(value)
  ) {
    isFieldValid = false;
  }
  if (
    isFieldValid &&
    minLength &&
    maxLength &&
    !(fieldLength >= minLength && fieldLength <= maxLength)
  ) {
    isFieldValid = false;
  }
  if (
    isFieldValid &&
    minValue &&
    maxValue &&
    !(value >= minValue && value <= maxValue)
  ) {
    isFieldValid = false;
  }

  if (isDOB) {
    if (value) {
      let currentDate = new Date().getTime();
      let ownerDOB = new Date(value).getTime();
      if (ownerDOB > currentDate) {
        isFieldValid = false;
      }
    }
  }

  errorText = !isFieldValid
    ? errorText.length
      ? errorText
      : field.errorMessage || "Invalid field"
    : "";

  return { isFieldValid, errorText };
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

export const prepareFinalObject = (preparedFinalOject, jsonPath, value) => {
  set(preparedFinalOject, jsonPath, value);
  return preparedFinalOject;
};
