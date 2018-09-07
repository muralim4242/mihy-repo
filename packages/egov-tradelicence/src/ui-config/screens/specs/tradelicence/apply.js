import {
  getStepperObject,
  getCommonApplyHeader,
  getCommonApplyFooter,
  getCommonCard,
  getCommonApplySubHeader,
  getCommonApplyParagraph,
  getBreak,
  getLabel,
  getTextField
} from "./applyResource/utils";

import { handleScreenConfigurationFieldChange as handleField } from "mihy-ui-framework/ui-redux/screen-configuration/actions";
import get from "lodash/get";
// import { tradeDetails } from "./applyResource/tradeDetails";

const stepsData = ["Trade Details", "Owner Details", "Documents", "Summary"];
const commonApplyFooter = getCommonApplyFooter({
  previousButton: {
    componentPath: "Button",
    props: {
      variant: "contained",
      style: {
        width: "200px",
        height: "48px",
        marginRight: "16px"
      }
    },
    children: {
      nextButtonLabel: getLabel("Previous Step")
    },
    onClickDefination: {
      action: "condition",
      callBack: (state, dispatch) => {
        let activeStep = get(
          state.screenConfiguration.screenConfig["apply"],
          "components.div.children.stepper.props.activeStep",
          0
        );
        dispatch(
          handleField(
            "apply",
            "components.div.children.stepper.props",
            "activeStep",
            activeStep - 1
          )
        );
      }
    }
  },
  nextButton: {
    componentPath: "Button",
    props: {
      variant: "contained",
      color: "secondary",
      style: {
        width: "200px",
        height: "48px",
        marginRight: "45px"
      }
    },
    children: {
      nextButtonLabel: getLabel("Next Step")
    },
    onClickDefination: {
      action: "condition",
      callBack: (state, dispatch) => {
        let activeStep = get(
          state.screenConfiguration.screenConfig["apply"],
          "components.div.children.stepper.props.activeStep",
          0
        );
        dispatch(
          handleField(
            "apply",
            "components.div.children.stepper.props",
            "activeStep",
            activeStep + 1
          )
        );
      }
    }
  }
});
const commonCardOne = getCommonCard({
  header: getCommonApplySubHeader("Please Provide Trade Details"),
  break: getBreak(),
  paragraph: getCommonApplyParagraph(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard."
  ),
  tradeDetailsForm: getTextField("label", "placeholder", true, ""),
  tradeDetailsForm2: getTextField("label", "placeholder", true, "")
});
const commonCardTwo = getCommonCard({
  header: getCommonApplySubHeader("Please Provide Trade Location Details"),
  break: getBreak(),
  paragraph: getCommonApplyParagraph(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard."
  )
});

const screenConfig = {
  uiFramework: "material-ui",
  name: "mihytradeliceceapply",
  components: {
    div: {
      uiFramework: "custom-atoms",
      componentPath: "Div",
      props: {
        className: "common-div-css"
      },
      children: {
        header: getCommonApplyHeader(
          "Application for New Trade License (2018-2019)"
        ),
        stepper: getStepperObject({ props: { activeStep: 1 } }, stepsData),
        ownerDetails: {
          uiFramework: "custom-atoms",
          componentPath: "Div",
          children: {
            tradeDetails: commonCardOne,
            tradeLocationDetails: commonCardTwo
          }
        },
        footer: commonApplyFooter
      }
    }
  }
};

export default screenConfig;
