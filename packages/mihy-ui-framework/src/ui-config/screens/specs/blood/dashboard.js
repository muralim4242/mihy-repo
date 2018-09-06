import {dashBoardOption} from "./dashboard-utils";

const screenConfig = {
  uiFramework: "material-ui",
  name: "mihyBloodDashboard",
  components: {
    mihyBloodDashboard: {
      uiFramework: "custom-atoms",
      componentPath: "Div",
      children:{
        mihyBloodDashboardAppCarosel:{
          uiFramework:"custom-molecules",
          componentPath:"AppCarosel",
          props:{
            
          }
        },
        mihyBloodDashboardAppCards:{
          uiFramework:"custom-molecules",
          componentPath:"AppCards",
          props:{
            appCards:dashBoardOption
          }
        }
      }
    }
  }
};

export default screenConfig;
