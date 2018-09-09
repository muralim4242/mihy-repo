import { dashBoardOption } from "./dashboardResources";

const screenConfig = {
  uiFramework: "material-ui",
  name: "mihyBloodDonationProcess",
  components: {
    mihyBloodDashboard: {
      uiFramework: "custom-atoms",
      componentPath: "Div",
      children: {
        mihyBloodDashboardAppCarosel: {
          uiFramework: "custom-molecules",
          componentPath: "AppCarosel",
          props: {
            item: {
              displayLabel: "Blood",
              displaySubLabel: "Only one file can be uploaded for one document.",
              itemImage:require("ui-assets/pp.jpeg")
            }
          }
        }
      }
    }
  }
};

export default screenConfig;
