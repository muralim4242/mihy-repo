import { handleScreenConfigurationFieldChange as handleField } from "../../../../ui-redux/screen-configuration/actions";

const appCardHeaderStyle = (colorOne = "#ec407a", colorTwo = "#d81b60") => {
  return {
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "50px",
    padding: "15px",
    marginTop: "-36px",
    borderRadius: "3px",
    background: `linear-gradient(60deg,${colorOne} ,${colorTwo} )`,
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)"
  };
};

export const getStepperObject = (
  stpperProps,
  stepsData,
  uiFramework = "material-ui"
) => {
  let stepperData = {};
  if (uiFramework === "material-ui") {
    stepperData = {
      componentPath: "Stepper",
      uiFramework: "custom-molecules",
      props: {
        steps: stepsData,
        ...stpperProps.props
      }
    };
  }
  return stepperData;
};

export const getCommonHeader = (header, props) => {
  return {
    componentPath: "Typography",
    props: {
      variant: "headline",
      ...props
    },
    children: {
      [header]: getLabel(header)
    }
  };
};

export const getCommonTitle = header => {
  return getCommonHeader(header, { variant: "title" });
};

export const getCommonSubHeader = header => {
  return getCommonHeader(header, { variant: "subheading" });
};

export const getCommonParagraph = paragraph => {
  return getCommonHeader(paragraph, { variant: "body1" });
};

export const getCommonCaption = paragraph => {
  return getCommonHeader(paragraph, { variant: "caption" });
};

export const getCommonValue = value => {
  return getCommonHeader(value, { variant: "body2" });
};

export const getCommonCard = (children, cardProps = {}) => {
  return {
    componentPath: "Card",
    props: {
      ...cardProps
    },
    children: {
      cardContent: {
        componentPath: "CardContent",
        children
      }
    }
  };
};

export const getCommonCardWithHeader = (
  children,
  header = {},
  cardProps = {}
) => {
  return getCommonCard({
    cardContainer: {
      uiFramework: "custom-atoms",
      componentPath: "Container",
      children: {
        header: {
          uiFramework: "custom-atoms",
          componentPath: "Div",
          props: {
            style: appCardHeaderStyle()
          },
          children: header,
          gridDefination: {
            xs: 12
          }
        },
        body: {
          uiFramework: "custom-atoms",
          componentPath: "Div",
          children,
          gridDefination: {
            xs: 12
          }
        }
      }
    }
  });
};

export const getCommonGrayCard = children => {
  return getCommonCard(children, {
    style: {
      backgroundColor: "rgb(242, 242, 242)",
      boxShadow: "none",
      borderRadius: 0
    }
  });
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
  jsonPath = "",
  iconObj={},
  gridDefination = {
    xs: 12,
    sm: 6
  },
) => {
  return {
    uiFramework:"custom-molecules",
    componentPath: "TextfieldWithIcon",
    props: {
      label,
      InputLabelProps: {
        shrink: true
      },
      placeholder,
      fullWidth: true,
      required,
      iconObj
    },
    gridDefination,
    required,
    pattern,
    jsonPath
  };
};

export const getSelectTextField = (
  label,
  placeholder,
  required,
  pattern,
  jsonPath = "",
  iconObj={},
  gridDefination = {
    xs: 12,
    sm: 6
  }
) => {
  return {
    uiFramework: "material-ui",
    componentPath: "TextField",
    props: {
      select: true,
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

export const getCommonContainer = children => {
  return {
    componentPath: "Grid",
    props: {
      container: true
    },
    children
  };
};

export const getDivider = () => {
  return {
    componentPath: "Divider"
  };
};

export const dispatchMultipleFieldChangeAction = (
  screenKey,
  actionDefination = [],
  dispatch
) => {
  for (var i = 0; i < actionDefination.length; i++) {
    const { path, property, value } = actionDefination[i];
    dispatch(handleField(screenKey, path, property, value));
  }
};

// export const getDarkSubHeader = header => {
//   return {
//     uiFramework: "custom-atoms",
//     componentPath: "Label",
//     props: {
//       label: header,
//       className: "review-dark-text"
//     },
//     fullWidth: true
//   };
// };

// export const getLightSubHeader = header => {
//   return {
//     uiFramework: "custom-atoms",
//     componentPath: "Label",
//     props: {
//       label: header,
//       className: "review-light-text"
//     },
//     fullWidth: true
//   };
// };

export const getLabelWithValue = (label, value) => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Div",
    gridDefination: {
      xs: 6,
      sm: 3
    },
    children: {
      [label]: getCommonCaption(label),
      [value]: getCommonValue(value)
    }
  };
};
