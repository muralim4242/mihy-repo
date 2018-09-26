import { donationProcessOptions } from "./donationProcessResources/donationProcessOptions";
import { appOptionsCardsWithIcons } from "../utils";

const screenConfig = {
  uiFramework: "material-ui",
  name: "mihyBloodDashboard",
  components: {
    mihyBloodDashboardAppCards: appOptionsCardsWithIcons(donationProcessOptions)
  }
};

export default screenConfig;
