import { getLabel } from "../../utils";
import { handleScreenConfigurationFieldChange as handleField } from "mihy-ui-framework/ui-redux/screen-configuration/actions";
import get from "lodash/get";

export const callBackForNext = (state, dispatch) => {
  changeStep(state, dispatch);
};

const changeStep = (state, dispatch, mode = "next") => {
  let activeStep = get(
    state.screenConfiguration.screenConfig["apply"],
    "components.div.children.stepper.props.activeStep",
    0
  );
  activeStep = mode === "next" ? activeStep + 1 : activeStep - 1;
  const isPreviousButtonVisible = activeStep > 0 ? true : false;
  dispatch(
    handleField(
      "apply",
      "components.div.children.stepper.props",
      "activeStep",
      activeStep
    )
  );
  dispatch(
    handleField(
      "apply",
      "components.div.children.div.children.footer.previousButton",
      "visible",
      isPreviousButtonVisible
    )
  );
};

export const callBackForPrevious = (state, dispatch) => {
  changeStep(state, dispatch, "previous");
};

export const getCommonApplyFooter = children => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Div",
    props: {
      className: "apply-wizard-footer"
    },
    children
  };
};

export const footer = getCommonApplyFooter({
  previousButton: {
    componentPath: "Button",
    props: {
      variant: "outlined",
      color: "primary",
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
      callBack: callBackForPrevious
    },
    visible: true
  },
  nextButton: {
    componentPath: "Button",
    props: {
      variant: "contained",
      color: "primary",
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
      callBack: callBackForNext
    }
  }
});
