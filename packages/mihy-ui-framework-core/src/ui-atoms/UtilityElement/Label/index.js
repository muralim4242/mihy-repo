import React from "react";

const Label = ({ label, ...rest }) => (
  <span {...rest}>{label ? label : "NA"}</span>
);

export default Label;
