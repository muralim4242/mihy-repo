"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLabelWithValue = exports.dispatchMultipleFieldChangeAction = exports.getDivider = exports.getCommonContainer = exports.getSelectTextField = exports.getTextField = exports.getLabel = exports.getBreak = exports.getCommonGrayCard = exports.getCommonCardWithHeader = exports.getCommonCard = exports.getCommonValue = exports.getCommonCaption = exports.getCommonParagraph = exports.getCommonSubHeader = exports.getCommonTitle = exports.getCommonHeader = exports.getStepperObject = undefined;

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
  return getCommonHeader(header, { variant: "title" });
};

var getCommonSubHeader = exports.getCommonSubHeader = function getCommonSubHeader(header) {
  return getCommonHeader(header, { variant: "subheading" });
};

var getCommonParagraph = exports.getCommonParagraph = function getCommonParagraph(paragraph) {
  return getCommonHeader(paragraph, { variant: "body1" });
};

var getCommonCaption = exports.getCommonCaption = function getCommonCaption(paragraph) {
  return getCommonHeader(paragraph, { variant: "caption" });
};

var getCommonValue = exports.getCommonValue = function getCommonValue(value) {
  return getCommonHeader(value, { variant: "body2" });
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
  return {
    uiFramework: "custom-atoms",
    componentPath: "Break"
  };
};

var getLabel = exports.getLabel = function getLabel(label) {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Label",
    props: {
      label: label
    }
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

var getCommonContainer = exports.getCommonContainer = function getCommonContainer(children) {
  return {
    componentPath: "Grid",
    props: {
      container: true
    },
    children: children
  };
};

var getDivider = exports.getDivider = function getDivider() {
  return {
    componentPath: "Divider"
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
  var _children2;

  return {
    uiFramework: "custom-atoms",
    componentPath: "Div",
    gridDefination: {
      xs: 6,
      sm: 3
    },
    children: (_children2 = {}, (0, _defineProperty3.default)(_children2, label, getCommonCaption(label)), (0, _defineProperty3.default)(_children2, value, getCommonValue(value)), _children2)
  };
};