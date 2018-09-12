import {
  getStepperObject,
  getCommonHeader,
  getCommonCard,
  getCommonGrayCard,
  getCommonTitle,
  getCommonSubHeader,
  getCommonParagraph,
  getTextField,
  getSelectTextField,
  getCommonContainer
} from "../utils";

const screenConfig = {
  uiFramework: "material-ui",
  name: "screenName",
  components: {
    stepper: getStepperObject({ props: { activeStep: 0 } }, [
      "Property Address",
      "Basic Information",
      "Owner information",
      "Review"
    ]),
    cardOne:getCommonCard({
      header:getCommonTitle("Property address details"),
      button:{
        componentPath:"Button",
        props:{
          variant:"contained"
        },
        // children:{
        //   buttonLabel:getLabel("Submit")
        // }

      }
    })
  }
};

export default screenConfig;
