"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPattern = exports.getTab = exports.getTabs = exports.getLabelWithValue = exports.getCommonValue = exports.getCommonCaption = exports.getCommonHeader = exports.getLabel = exports.dispatchMultipleFieldChangeAction = exports.getDivider = exports.getCommonContainer = exports.getRadiobuttonGroup = exports.getRadiobuttonwithLabel = exports.getCheckBoxwithLabel = exports.getSelectField = exports.getDateField = exports.getTextField = exports.getBreak = exports.getCommonGrayCard = exports.getCommonCardWithHeader = exports.getCommonCard = exports.getCommonParagraph = exports.getCommonSubHeader = exports.getCommonTitle = exports.getStepperObject = undefined;

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

// export const getCommonHeader = (header, props) => {
//   return {
//     componentPath: "Typography",
//     props: {
//       variant: "headline",
//       ...props
//     },
//     children: {
//       [header]: getLabel(header)
//     }
//   };
// };

var getCommonTitle = exports.getCommonTitle = function getCommonTitle(header) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return getCommonHeader({
    textLabel: { label: header, labelKey: "" },
    props: (0, _extends3.default)({ variant: "title" }, props)
  });
};

var getCommonSubHeader = exports.getCommonSubHeader = function getCommonSubHeader(header) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return getCommonHeader({
    textLabel: { label: header, labelKey: "" },
    props: (0, _extends3.default)({ variant: "subheading" }, props)
  });
};

var getCommonParagraph = exports.getCommonParagraph = function getCommonParagraph(paragraph) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return {
    uiFramework: "custom-atoms",
    componentPath: "Div",
    props: (0, _extends3.default)({
      style: {
        color: "rgba(0, 0, 0, 0.60)",
        fontFamily: "Roboto",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "20px",
        marginBottom: "12px"
      }
    }, props),
    children: (0, _defineProperty3.default)({}, paragraph, getLabel({ label: paragraph, labelKey: "" }))
  };
  // getCommonHeader(paragraph, { variant: "body1", ...props });
};

// export const getCommonCaption = (paragraph, props = {}) => {
//   return getCommonHeader(paragraph, { variant: "caption", ...props });
// };

// export const getCommonValue = (value, props = {}) => {
//   return getCommonHeader(value, { variant: "body2", ...props });
// };

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

// export const getLabel = (label, labelKey, props = {}) => {
//   return {
//     uiFramework: "custom-containers",
//     componentPath: "LabelContainer",
//     props: {
//       label,
//       labelKey,
//       ...props
//     }
//   };
// };

var getTextField = exports.getTextField = function getTextField(textScheama) {
  var _textScheama$label = textScheama.label,
      label = _textScheama$label === undefined ? {} : _textScheama$label,
      _textScheama$placehol = textScheama.placeholder,
      placeholder = _textScheama$placehol === undefined ? {} : _textScheama$placehol,
      required = textScheama.required,
      pattern = textScheama.pattern,
      _textScheama$jsonPath = textScheama.jsonPath,
      jsonPath = _textScheama$jsonPath === undefined ? "" : _textScheama$jsonPath,
      _textScheama$iconObj = textScheama.iconObj,
      iconObj = _textScheama$iconObj === undefined ? {} : _textScheama$iconObj,
      _textScheama$gridDefi = textScheama.gridDefination,
      gridDefination = _textScheama$gridDefi === undefined ? {
    xs: 12,
    sm: 6
  } : _textScheama$gridDefi,
      _textScheama$props = textScheama.props,
      props = _textScheama$props === undefined ? {} : _textScheama$props;

  return {
    uiFramework: "custom-containers",
    componentPath: "TextFieldContainer",
    props: (0, _extends3.default)({
      label: label,
      InputLabelProps: {
        shrink: true
      },
      placeholder: placeholder,
      fullWidth: true,
      required: required,
      iconObj: iconObj,
      jsonPath: jsonPath
    }, props),
    gridDefination: gridDefination,
    required: required,
    pattern: pattern,
    jsonPath: jsonPath
  };
};

var getDateField = exports.getDateField = function getDateField(dateScheama) {
  var label = dateScheama.label,
      placeholder = dateScheama.placeholder,
      required = dateScheama.required,
      pattern = dateScheama.pattern,
      _dateScheama$jsonPath = dateScheama.jsonPath,
      jsonPath = _dateScheama$jsonPath === undefined ? "" : _dateScheama$jsonPath,
      _dateScheama$iconObj = dateScheama.iconObj,
      iconObj = _dateScheama$iconObj === undefined ? {} : _dateScheama$iconObj,
      _dateScheama$gridDefi = dateScheama.gridDefination,
      gridDefination = _dateScheama$gridDefi === undefined ? {
    xs: 12,
    sm: 6
  } : _dateScheama$gridDefi,
      _dateScheama$props = dateScheama.props,
      props = _dateScheama$props === undefined ? {} : _dateScheama$props;

  return {
    uiFramework: "custom-containers",
    componentPath: "TextFieldContainer",
    props: (0, _extends3.default)({
      label: label,
      InputLabelProps: {
        shrink: true
      },
      placeholder: placeholder,
      fullWidth: true,
      required: required,
      iconObj: iconObj,
      jsonPath: jsonPath,
      type: "date"
    }, props),
    gridDefination: gridDefination,
    required: required,
    pattern: pattern,
    jsonPath: jsonPath
  };
};

var getSelectField = exports.getSelectField = function getSelectField(selectScheama) {
  var label = selectScheama.label,
      placeholder = selectScheama.placeholder,
      required = selectScheama.required,
      pattern = selectScheama.pattern,
      _selectScheama$jsonPa = selectScheama.jsonPath,
      jsonPath = _selectScheama$jsonPa === undefined ? "" : _selectScheama$jsonPa,
      _selectScheama$source = selectScheama.sourceJsonPath,
      sourceJsonPath = _selectScheama$source === undefined ? "" : _selectScheama$source,
      _selectScheama$data = selectScheama.data,
      data = _selectScheama$data === undefined ? [] : _selectScheama$data,
      _selectScheama$option = selectScheama.optionValue,
      optionValue = _selectScheama$option === undefined ? "code" : _selectScheama$option,
      _selectScheama$option2 = selectScheama.optionLabel,
      optionLabel = _selectScheama$option2 === undefined ? "code" : _selectScheama$option2,
      _selectScheama$iconOb = selectScheama.iconObj,
      iconObj = _selectScheama$iconOb === undefined ? {} : _selectScheama$iconOb,
      _selectScheama$gridDe = selectScheama.gridDefination,
      gridDefination = _selectScheama$gridDe === undefined ? {
    xs: 12,
    sm: 6
  } : _selectScheama$gridDe,
      _selectScheama$props = selectScheama.props,
      props = _selectScheama$props === undefined ? {} : _selectScheama$props;

  return {
    uiFramework: "custom-containers",
    componentPath: "TextFieldContainer",
    props: (0, _extends3.default)({
      select: true,
      label: label,
      InputLabelProps: {
        shrink: true
      },
      placeholder: placeholder,
      fullWidth: true,
      required: required,
      data: data,
      optionValue: optionValue,
      optionLabel: optionLabel,
      sourceJsonPath: sourceJsonPath,
      jsonPath: jsonPath
    }, props),
    gridDefination: gridDefination,
    required: required,
    pattern: pattern,
    jsonPath: jsonPath
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
      label: getLabel({ label: label })
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
      label: getLabel({ label: label })
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

// export const getLabelWithValue = (label, value, props = {}) => {
//   return {
//     uiFramework: "custom-atoms",
//     componentPath: "Div",
//     gridDefination: {
//       xs: 6,
//       sm: 3
//     },
//     props: {
//       style: {
//         marginBottom: "16px"
//       },
//       ...props
//     },
//     children: {
//       label: getCommonCaption(label),
//       value: getCommonValue(value)
//     }
//   };
// };

var getLabel = exports.getLabel = function getLabel(schema) {
  var label = schema.label,
      labelKey = schema.labelKey,
      jsonPath = schema.jsonPath,
      _schema$props = schema.props,
      props = _schema$props === undefined ? {} : _schema$props;

  return {
    uiFramework: "custom-containers",
    componentPath: "LabelContainer",
    props: (0, _extends3.default)({
      label: label,
      labelKey: labelKey,
      jsonPath: jsonPath
    }, props)
  };
};

var getCommonHeader = exports.getCommonHeader = function getCommonHeader(schema) {
  var _children2;

  var _schema$textLabel = schema.textLabel,
      textLabel = _schema$textLabel === undefined ? {} : _schema$textLabel,
      jsonPath = schema.jsonPath,
      props = schema.props;
  var label = textLabel.label,
      labelKey = textLabel.labelKey;

  return {
    componentPath: "Typography",
    props: (0, _extends3.default)({
      variant: "headline"
    }, props),
    children: (_children2 = {}, (0, _defineProperty3.default)(_children2, textLabel, getLabel({ label: label, labelKey: labelKey })), (0, _defineProperty3.default)(_children2, jsonPath, getLabel({ jsonPath: jsonPath })), _children2)
  };
};

var getCommonCaption = exports.getCommonCaption = function getCommonCaption(textScheama) {
  var _textScheama$textLabe = textScheama.textLabel,
      textLabel = _textScheama$textLabe === undefined ? {} : _textScheama$textLabe,
      _textScheama$props2 = textScheama.props,
      props = _textScheama$props2 === undefined ? {} : _textScheama$props2;

  return getCommonHeader({
    textLabel: textLabel,
    props: (0, _extends3.default)({ variant: "caption" }, props)
  });
};

var getCommonValue = exports.getCommonValue = function getCommonValue(textScheama) {
  var jsonPath = textScheama.jsonPath,
      _textScheama$props3 = textScheama.props,
      props = _textScheama$props3 === undefined ? {} : _textScheama$props3;

  return getCommonHeader({ jsonPath: jsonPath, props: (0, _extends3.default)({ variant: "body2" }, props) });
};

var getLabelWithValue = exports.getLabelWithValue = function getLabelWithValue(textScheama) {
  var _textScheama$textLabe2 = textScheama.textLabel,
      textLabel = _textScheama$textLabe2 === undefined ? {} : _textScheama$textLabe2,
      jsonPath = textScheama.jsonPath,
      _textScheama$props4 = textScheama.props,
      props = _textScheama$props4 === undefined ? {} : _textScheama$props4;

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
      label: getCommonCaption({ textLabel: textLabel }),
      value: getCommonValue({ jsonPath: jsonPath })
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
      return (/^[12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/i
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