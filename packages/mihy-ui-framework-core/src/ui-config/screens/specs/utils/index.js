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

export const getCommonTitle = (header, props = {}) => {
  return getCommonHeader(header, { variant: "title", ...props });
};

export const getCommonSubHeader = (header, props = {}) => {
  return getCommonHeader(header, { variant: "subheading", ...props });
};

export const getCommonParagraph = (paragraph, props = {}) => {
  return getCommonHeader(paragraph, { variant: "body1", ...props });
};

export const getCommonCaption = (paragraph, props = {}) => {
  return getCommonHeader(paragraph, { variant: "caption", ...props });
};

export const getCommonValue = (value, props = {}) => {
  return getCommonHeader(value, { variant: "body2", ...props });
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

export const getBreak = (props = {}) => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Break",
    props
  };
};

// export const getLabel = (label, props = {}) => {
//   return {
//     uiFramework: "custom-atoms",
//     componentPath: "Label",
//     props: {
//       label,
//       ...props
//     }
//   };
// };

export const getLabel = (label, labelKey, props = {}) => {
  return {
    uiFramework: "custom-molecules",
    componentPath: "LabelContainer",
    props: {
      label,
      labelKey,
      ...props
    }
  };
};

export const getTextField = (
  label,
  placeholder,
  required,
  pattern,
  jsonPath = "",
  iconObj = {},
  gridDefination = {
    xs: 12,
    sm: 6
  }
) => {
  return {
    uiFramework: "custom-molecules",
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
  iconObj = {},
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

export const getCheckBoxwithLabel = (
  label,
  gridDefination = {
    xs: 12,
    sm: 12
  },
  props = {}
) => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Div",
    gridDefination,
    props,
    children: {
      div: {
        uiFramework: "material-ui",
        componentPath: "Checkbox",
        props: {
          color: "primary"
        }
      },
      label: getLabel(label)
    }
  };
};

export const getRadiobuttonwithLabel = (label, props = {}) => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Div",
    props,
    children: {
      div: {
        uiFramework: "material-ui",
        componentPath: "Radio",
        props: {
          color: "primary"
        }
      },
      label: getLabel(label)
    }
  };
};

export const getRadiobuttonGroup = (
  labels,
  gridDefination = {
    xs: 12,
    sm: 12
  }
) => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Container",
    gridDefination,
    children:
      labels &&
      labels.map(label => {
        return getRadiobuttonwithLabel(label);
      })
  };
};

export const getCommonContainer = (children, props = {}) => {
  return {
    componentPath: "Grid",
    props: {
      container: true,
      ...props
    },
    children
  };
};

export const getDivider = (props = {}) => {
  return {
    componentPath: "Divider",
    props
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

export const getLabelWithValue = (label, value, props = {}) => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Div",
    gridDefination: {
      xs: 6,
      sm: 3
    },
    props: {
      style: {
        marginBottom: "16px"
      },
      ...props
    },
    children: {
      [label]: getCommonCaption(label),
      [value]: getCommonValue(value)
    }
  };
};

export const getTabs = (list, props = {}) => {
  return {
    uiFramework: "material-ui",
    componentPath: "Tabs",
    props,
    children:
      list &&
      list.map(element => {
        return getTab(element);
      })
  };
};

export const getTab = (label, props = {}) => {
  return {
    uiFramework: "material-ui",
    componentPath: "Tab",
    props: {
      label,
      ...props
    }
  };
};

//Localization utils

export const transformById = (payload, id) => {
  return (
    payload &&
    payload.reduce((result, item) => {
      result[item[id]] = {
        ...item
      };

      return result;
    }, {})
  );
};

export const getTranslatedLabel = (labelKey, localizationLabels) => {
  let translatedLabel = null;
  if (localizationLabels && localizationLabels.hasOwnProperty(labelKey)) {
    translatedLabel = localizationLabels[labelKey];
    if (
      translatedLabel &&
      typeof translatedLabel === "object" &&
      translatedLabel.hasOwnProperty("message")
    )
      translatedLabel = translatedLabel.message;
  }
  return translatedLabel || labelKey;
};

export const getPattern = type => {
  switch (type) {
    case "Name":
      return /^[a-zA-Z\s]{1,50}$/i;
    case "MobileNo":
      return /^[6789][0-9]{9}$/i;
    case "Email":
      return /^(?=^.{1,64}$)((([^<>()\[\]\\.,;:\s$*@'"]+(\.[^<>()\[\]\\.,;:\s@'"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))$/i;
    case "Address":
      return /^[<>()\-+_\|\[\]\\.,;:\s$*@'"\/#%& 0-9A-Za-z]{1,500}$/i;
    case "PAN":
      return "/^[A-Za-z]{5}d{4}[A-Za-z]{1}$/i";
    case "TradeName":
      return /^[a-zA-Z0-9\s()-@#&.,?/]{1,100}$/i;
    case "Date":
      return /(^(((0[1-9]|1[0-9]|2[0-8])[/](0[1-9]|1[012]))|((29|30|31)[/](0[13578]|1[02]))|((29|30)[/](0[4,6,9]|11)))[/](19|[2-9][0-9])dd$)|(^29[/]02[/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/i;
    case "UOMValue":
      return /^[1-9][0-9]{0,3}$/i;
    case "OperationalArea":
      return /^[1-9][0-9]{0,6}$/i;
    case "NoOfEmp":
      return /^[1-9][0-9]{0,2}$/i;
    case "GSTNo":
      return /^d{2}[A-Z]{5}d{4}[A-Z]{1}d[Z]{1}[A-Zd]{1}$/i;
    case "DoorHouseNo":
      return /^[a-zA-Z0-9\s]{1,10}$/i;
    case "BuildingStreet":
      return /^[a-zA-Z0-9\s()-@#&.,?/]{1,100}$/i;
    case "Pincode":
      return /^[1-9][0-9]{5}$/i;
    case "PropertyID":
      return /^[a-zA-z0-9\s\\/\-]$/i;
    case "ElectricityConnNo":
      return /^[0-9]{15}$/i;
  }
};
