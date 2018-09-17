import { appCategories } from "./dashboardResources/appCategories";
import { appCardsWithIcons } from "../utils";

const screenConfig = {
  uiFramework: "material-ui",
  name: "mihyDashboard",
  components: {
    mihyDashboardAppCards: appCardsWithIcons(appCategories)
  }
};

export default screenConfig;
