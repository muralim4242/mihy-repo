import React from "react";
import Paper from "@material-ui/core/Paper";
import NumberSelector from "./component/NumberSelector";

class Dashboard extends React.Component {
  render()
  {
    return(
      <div>
        <Paper>
          <NumberSelector/>
        </Paper>
      </div>
    )
  }
}

export default Dashboard;
