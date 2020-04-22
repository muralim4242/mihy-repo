import React from "react";
import CountUp from 'react-countup';
import { Typography } from "@material-ui/core";

const Status = ({ status = {}, t }) => {
  return (
    <div>
      <Typography variant="h6"  align="center">
        {t(status.label)}
      </Typography>
      <Typography variant="h5"  align="center">
        {status.count && <CountUp formattingFn={(number)=>{
          return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number);
        }} end={parseInt(status.count)}/>}
      </Typography>
      <Typography variant="subtitle2"  align="center">
        {parseInt(status.delta)?status.label==="active"?`[-${status.delta}]`:`[+${status.delta}]`:<br/>}
      </Typography>
    </div>
  );
};

export default Status;
