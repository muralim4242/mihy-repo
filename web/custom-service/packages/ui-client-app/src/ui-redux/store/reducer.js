import app from "../app/reducer";
import auth from "../auth/reducer";
import screenConfiguration from "mihy-ui-framework/ui-redux/screen-configuration/reducer";

const rootReducer = {
  app,
  auth,
  screenConfiguration
};

export default rootReducer;
