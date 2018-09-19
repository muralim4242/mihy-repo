import { donationProcessOverviewOptions as steps } from "./donationProcessOverviewResources/donationProcessOverviewOptions";


const screenConfig = {
  uiFramework: "material-ui",
  name: "mihyBloodDonationProcessOptions",
  components: {
    mihyBloodDonationProcessOptionsAppCards: {
      uiFramework:"custom-molecules",
      componentPath:"StepperStaticVertical",
      props:{
        steps
      }
    }
  }
};

export default screenConfig;
