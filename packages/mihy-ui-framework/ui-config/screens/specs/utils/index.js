"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPattern = exports.getTranslatedLabel = exports.transformById = exports.getTab = exports.getTabs = exports.getLabelWithValue = exports.dispatchMultipleFieldChangeAction = exports.getDivider = exports.getCommonContainer = exports.getRadiobuttonGroup = exports.getRadiobuttonwithLabel = exports.getCheckBoxwithLabel = exports.getSelectTextField = exports.getTextField = exports.getLabel = exports.getBreak = exports.getCommonGrayCard = exports.getCommonCardWithHeader = exports.getCommonCard = exports.getCommonValue = exports.getCommonCaption = exports.getCommonParagraph = exports.getCommonSubHeader = exports.getCommonTitle = exports.getCommonHeader = exports.getStepperObject = undefined;

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _actions = require("../../../../ui-redux/screen-configuration/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appCardHeaderStyle = function appCardHeaderStyle() {
  var colorOne = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "#ec407a";
  var colorTwo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#d81b60";

  return {
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "50px",
    padding: "15px",
    marginTop: "-36px",
    borderRadius: "3px",
    background: "linear-gradient(60deg," + colorOne + " ," + colorTwo + " )",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)"
  };
};

var getStepperObject = exports.getStepperObject = function getStepperObject(stpperProps, stepsData) {
  var uiFramework = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "material-ui";

  var stepperData = {};
  if (uiFramework === "material-ui") {
    stepperData = {
      componentPath: "Stepper",
      uiFramework: "custom-molecules",
      props: (0, _extends3.default)({
        steps: stepsData
      }, stpperProps.props)
    };
  }
  return stepperData;
};

var getCommonHeader = exports.getCommonHeader = function getCommonHeader(header, props) {
  return {
    componentPath: "Typography",
    props: (0, _extends3.default)({
      variant: "headline"
    }, props),
    children: (0, _defineProperty3.default)({}, header, getLabel(header))
  };
};

var getCommonTitle = exports.getCommonTitle = function getCommonTitle(header) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return getCommonHeader(header, (0, _extends3.default)({ variant: "title" }, props));
};

var getCommonSubHeader = exports.getCommonSubHeader = function getCommonSubHeader(header) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return getCommonHeader(header, (0, _extends3.default)({ variant: "subheading" }, props));
};

var getCommonParagraph = exports.getCommonParagraph = function getCommonParagraph(paragraph) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return getCommonHeader(paragraph, (0, _extends3.default)({ variant: "body1" }, props));
};

var getCommonCaption = exports.getCommonCaption = function getCommonCaption(paragraph) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return getCommonHeader(paragraph, (0, _extends3.default)({ variant: "caption" }, props));
};

var getCommonValue = exports.getCommonValue = function getCommonValue(value) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return getCommonHeader(value, (0, _extends3.default)({ variant: "body2" }, props));
};

var getCommonCard = exports.getCommonCard = function getCommonCard(children) {
  var cardProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return {
    componentPath: "Card",
    props: (0, _extends3.default)({}, cardProps),
    children: {
      cardContent: {
        componentPath: "CardContent",
        children: children
      }
    }
  };
};

var getCommonCardWithHeader = exports.getCommonCardWithHeader = function getCommonCardWithHeader(children) {
  var header = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var cardProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

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
          children: children,
          gridDefination: {
            xs: 12
          }
        }
      }
    }
  });
};

var getCommonGrayCard = exports.getCommonGrayCard = function getCommonGrayCard(children) {
  return getCommonCard(children, {
    style: {
      backgroundColor: "rgb(242, 242, 242)",
      boxShadow: "none",
      borderRadius: 0
    }
  });
};

var getBreak = exports.getBreak = function getBreak() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return {
    uiFramework: "custom-atoms",
    componentPath: "Break",
    props: props
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

var getLabel = exports.getLabel = function getLabel(label, labelKey) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return {
    uiFramework: "custom-molecules",
    componentPath: "LabelContainer",
    props: (0, _extends3.default)({
      label: label,
      labelKey: labelKey
    }, props)
  };
};

var getTextField = exports.getTextField = function getTextField(label, placeholder, required, pattern) {
  var jsonPath = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
  var iconObj = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var gridDefination = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {
    xs: 12,
    sm: 6
  };

  return {
    uiFramework: "custom-molecules",
    componentPath: "TextfieldWithIcon",
    props: {
      label: label,
      InputLabelProps: {
        shrink: true
      },
      placeholder: placeholder,
      fullWidth: true,
      required: required,
      iconObj: iconObj
    },
    gridDefination: gridDefination,
    required: required,
    pattern: pattern,
    jsonPath: jsonPath
  };
};

var getSelectTextField = exports.getSelectTextField = function getSelectTextField(label, placeholder, required, pattern) {
  var jsonPath = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
  var iconObj = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var gridDefination = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {
    xs: 12,
    sm: 6
  };

  return {
    uiFramework: "material-ui",
    componentPath: "TextField",
    props: {
      select: true,
      label: label,
      InputLabelProps: {
        shrink: true
      },
      placeholder: placeholder,
      fullWidth: true,
      required: required
    },
    gridDefination: gridDefination,
    required: required,
    pattern: pattern
  };
};

var getCheckBoxwithLabel = exports.getCheckBoxwithLabel = function getCheckBoxwithLabel(label) {
  var gridDefination = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    xs: 12,
    sm: 12
  };
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return {
    uiFramework: "custom-atoms",
    componentPath: "Div",
    gridDefination: gridDefination,
    props: props,
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

var getRadiobuttonwithLabel = exports.getRadiobuttonwithLabel = function getRadiobuttonwithLabel(label) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return {
    uiFramework: "custom-atoms",
    componentPath: "Div",
    props: props,
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

var getRadiobuttonGroup = exports.getRadiobuttonGroup = function getRadiobuttonGroup(labels) {
  var gridDefination = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    xs: 12,
    sm: 12
  };

  return {
    uiFramework: "custom-atoms",
    componentPath: "Container",
    gridDefination: gridDefination,
    children: labels && labels.map(function (label) {
      return getRadiobuttonwithLabel(label);
    })
  };
};

var getCommonContainer = exports.getCommonContainer = function getCommonContainer(children) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return {
    componentPath: "Grid",
    props: (0, _extends3.default)({
      container: true
    }, props),
    children: children
  };
};

var getDivider = exports.getDivider = function getDivider() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return {
    componentPath: "Divider",
    props: props
  };
};

var dispatchMultipleFieldChangeAction = exports.dispatchMultipleFieldChangeAction = function dispatchMultipleFieldChangeAction(screenKey) {
  var actionDefination = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var dispatch = arguments[2];

  for (var i = 0; i < actionDefination.length; i++) {
    var _actionDefination$i = actionDefination[i],
        path = _actionDefination$i.path,
        property = _actionDefination$i.property,
        value = _actionDefination$i.value;

    dispatch((0, _actions.handleScreenConfigurationFieldChange)(screenKey, path, property, value));
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

var getLabelWithValue = exports.getLabelWithValue = function getLabelWithValue(label, value) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return {
    uiFramework: "custom-atoms",
    componentPath: "Div",
    gridDefination: {
      xs: 6,
      sm: 3
    },
    props: (0, _extends3.default)({
      style: {
        marginBottom: "16px"
      }
    }, props),
    children: {
      label: getCommonCaption(label),
      value: getCommonValue(value)
    }
  };
};

var getTabs = exports.getTabs = function getTabs(list) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return {
    uiFramework: "material-ui",
    componentPath: "Tabs",
    props: props,
    children: list && list.map(function (element) {
      return getTab(element);
    })
  };
};

var getTab = exports.getTab = function getTab(label) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return {
    uiFramework: "material-ui",
    componentPath: "Tab",
    props: (0, _extends3.default)({
      label: label
    }, props)
  };
};

//Localization utils

var transformById = exports.transformById = function transformById(payload, id) {
  return payload && payload.reduce(function (result, item) {
    result[item[id]] = (0, _extends3.default)({}, item);

    return result;
  }, {});
};

var getTranslatedLabel = exports.getTranslatedLabel = function getTranslatedLabel(labelKey, localizationLabels) {
  var translatedLabel = null;
  if (localizationLabels && localizationLabels.hasOwnProperty(labelKey)) {
    translatedLabel = localizationLabels[labelKey];
    if (translatedLabel && (typeof translatedLabel === "undefined" ? "undefined" : (0, _typeof3.default)(translatedLabel)) === "object" && translatedLabel.hasOwnProperty("message")) translatedLabel = translatedLabel.message;
  }
  return translatedLabel || labelKey;
};

var getPattern = exports.getPattern = function getPattern(type) {
  switch (type) {
    case "Name":
      return (/^[a-zA-Z\s]{1,50}$/i
      );
    case "MobileNo":
      return (/^[6789][0-9]{9}$/i
      );
    case "Email":
      return (/^(?=^.{1,64}$)((([^<>()\[\]\\.,;:\s$*@'"]+(\.[^<>()\[\]\\.,;:\s@'"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))$/i
      );
    case "Address":
      return (/^[<>()\-+_\|\[\]\\.,;:\s$*@'"\/#%& 0-9A-Za-z]{1,500}$/i
      );
    case "PAN":
      return "/^[A-Za-z]{5}d{4}[A-Za-z]{1}$/i";
    case "TradeName":
      return (/^[a-zA-Z0-9\s()-@#&.,?/]{1,100}$/i
      );
    case "Date":
      return (/(^(((0[1-9]|1[0-9]|2[0-8])[/](0[1-9]|1[012]))|((29|30|31)[/](0[13578]|1[02]))|((29|30)[/](0[4,6,9]|11)))[/](19|[2-9][0-9])dd$)|(^29[/]02[/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/i
      );
    case "UOMValue":
      return (/^[1-9][0-9]{0,3}$/i
      );
    case "OperationalArea":
      return (/^[1-9][0-9]{0,6}$/i
      );
    case "NoOfEmp":
      return (/^[1-9][0-9]{0,2}$/i
      );
    case "GSTNo":
      return (/^d{2}[A-Z]{5}d{4}[A-Z]{1}d[Z]{1}[A-Zd]{1}$/i
      );
    case "DoorHouseNo":
      return (/^[a-zA-Z0-9\s]{1,10}$/i
      );
    case "BuildingStreet":
      return (/^[a-zA-Z0-9\s()-@#&.,?/]{1,100}$/i
      );
    case "Pincode":
      return (/^[1-9][0-9]{5}$/i
      );
    case "PropertyID":
      return (/^[a-zA-z0-9\s\\/\-]$/i
      );
    case "ElectricityConnNo":
      return (/^[0-9]{15}$/i
      );
  }
};