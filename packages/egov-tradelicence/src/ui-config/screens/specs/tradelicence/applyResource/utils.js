export const getStepperObject = (
  stpperProps,
  stepsData,
  uiFramework = "material-ui"
) => {
  let stepperData = {};
  if (uiFramework === "carbon") {
    stepperData = {
      uiFramework: "carbon",
      componentPath: "ProgressIndicator",
      props: stpperProps.props,
      children: stepsData.reduce((map, obj, i) => {
        map[`step${i}`] = {
          uiFramework: "carbon",
          componentPath: "ProgressStep",
          props: {
            ...obj.props
          }
        };
        return map;
      }, {})
    };
  } else if (uiFramework === "material-ui") {
    stepperData = {
      componentPath: "Stepper",
      uiFramework: "custom-molecules",
      props: {
        steps: stepsData,
        ...stpperProps.props
      }
      //props: stpperProps.props,
      // children: stepsData.reduce((map, obj, i) => {
      //   map[`step${i}`] = {
      //     componentPath: "Step",
      //     children: {
      //       [`stepLabel${i}`]: {
      //         componentPath: "StepLabel",
      //         children: {
      //           [`stepLabelDiv${i}`]: getLabel(obj.label)
      //         }
      //       }
      //     }
      //   };
      //   return map;
      // }, {})
    };
  }
  return stepperData;
};

export const getCommonApplyHeader = header => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Label",
    props: {
      label: header,
      className: "apply-application-for-new"
    }
  };
};

export const getCommonApplySubHeader = header => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Label",
    props: {
      label: header,
      className: "mihy-subheader"
    }
  };
};

export const getCommonApplyParagraph = Paragraph => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Label",
    props: {
      label: Paragraph,
      className: "mihy-paragraph"
    }
  };
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

export const getCommonCard = children => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Div",
    props: {
      className: "common-card-css"
    },
    children
  };
};

export const getBreak = () => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Break"
  };
};

export const getLabel = label => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Label",
    props: {
      label
    }
  };
};

export const getTextField = (
  label,
  placeholder,
  required,
  pattern,
  gridDefination = {
    xs: 6
  }
) => {
  return {
    componentPath: "TextField",
    props: {
      label,
      InputLabelProps: {
        shrink: true
      },
      placeholder,
      fullWidth: true,
      required
    },
    gridDefination,
    required,
    pattern
  };
};
