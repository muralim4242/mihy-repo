import React from "react";
import LinearProgress from '@material-ui/core/LinearProgress';

function LinearSpinner(props) {
  return (
    // <div></div>
    <LinearProgress {...props}/>
  );
}


export default LinearSpinner;


// <LinearProgress variant="query" {...props}/>
