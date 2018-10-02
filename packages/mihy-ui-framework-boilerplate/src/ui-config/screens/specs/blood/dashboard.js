import { dashBoardOption } from "./dashboard-utils";
import {
  getLabel
} from "mihy-ui-framework/ui-config/screens/specs/utils";

const screenConfig = {
  uiFramework: "material-ui",
  name: "mihyBloodDashboard",
  components: {
    mihyBloodDashboard: {
      uiFramework: "custom-atoms",
      componentPath: "Div",
      children: {
        // mihyBloodDashboardAppCarosel:{
        //   uiFramework:"custom-molecules",
        //   componentPath:"AppCarosel",
        //   props:{
        //
        //   }
        // },
        mihyBloodDashboardAppCards: {
          uiFramework: "custom-molecules",
          componentPath: "AppCards",
          props: {
            appCards: dashBoardOption
          }
        }
      }
    },
    popup: {
      componentPath: "Dialog",
      props: {
        open: true
      },
      children: {
        dialogContent: {
          componentPath: "DialogContent",
          children: {
            popup: getLabel("test")
          }
        }
      }
    }
  }
};

export default screenConfig;
