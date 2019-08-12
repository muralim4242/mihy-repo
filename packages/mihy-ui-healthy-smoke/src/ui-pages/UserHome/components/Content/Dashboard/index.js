import React from "react";
import Typography from "@material-ui/core/Typography";
import Counter from "./components/Counter";
import BrandSelection from "./components/BrandSelection";
import Statitics from "./components/Statitics";

class Dashboard extends React.Component {
  render()
  {
    return(
      <div>
        <Typography variant="h6" gutterBottom>
         Dashboard
        </Typography>
        <BrandSelection/>
        <Counter/>
        <Statitics/>
      </div>
    )
  }
}

export default Dashboard;
