import React from "react";

const Label = ({ label, jsonPath, ...rest }) => (
  <span {...rest}>{label ? label : "NA"}</span>
);

export default Label;
