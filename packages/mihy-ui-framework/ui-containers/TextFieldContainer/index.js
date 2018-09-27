"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _uiMolecules = require("../../ui-molecules");

var _MenuItem = require("@material-ui/core/MenuItem");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextFieldContainer = function (_React$Component) {
  (0, _inherits3.default)(TextFieldContainer, _React$Component);

  function TextFieldContainer() {
    (0, _classCallCheck3.default)(this, TextFieldContainer);
    return (0, _possibleConstructorReturn3.default)(this, (TextFieldContainer.__proto__ || Object.getPrototypeOf(TextFieldContainer)).apply(this, arguments));
  }

  (0, _createClass3.default)(TextFieldContainer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          label = _props.label,
          placeholder = _props.placeholder,
          jsonPath = _props.jsonPath,
          iconObj = _props.iconObj,
          value = _props.value,
          dropdownData = _props.dropdownData,
          data = _props.data,
          optionValue = _props.optionValue,
          optionLabel = _props.optionLabel,
          sourceJsonPath = _props.sourceJsonPath,
          rest = (0, _objectWithoutProperties3.default)(_props, ["label", "placeholder", "jsonPath", "iconObj", "value", "dropdownData", "data", "optionValue", "optionLabel", "sourceJsonPath"]);

      if (dropdownData.length > 0) {
        return _react2.default.createElement(
          _uiMolecules.TextfieldWithIcon,
          (0, _extends3.default)({
            label: label,
            placeholder: placeholder,
            iconObj: iconObj,
            value: value ? value : placeholder
          }, rest),
          _react2.default.createElement(
            _MenuItem2.default,
            { value: placeholder, disabled: true },
            placeholder
          ),
          dropdownData.map(function (option, key) {
            return _react2.default.createElement(
              _MenuItem2.default,
              { key: key, value: option.value },
              option.label
            );
          })
        );
      } else {
        return _react2.default.createElement(_uiMolecules.TextfieldWithIcon, (0, _extends3.default)({
          label: label,
          placeholder: placeholder,
          iconObj: iconObj,
          value: value
        }, rest));
      }
    }
  }]);
  return TextFieldContainer;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, ownprops) {
  var jsonPath = ownprops.jsonPath,
      value = ownprops.value,
      select = ownprops.select,
      data = ownprops.data,
      optionValue = ownprops.optionValue,
      optionLabel = ownprops.optionLabel,
      sourceJsonPath = ownprops.sourceJsonPath;
  var screenConfiguration = state.screenConfiguration;
  var preparedFinalObject = screenConfiguration.preparedFinalObject;

  console.log("first,,,", ownprops);
  var fieldValue = value ? value : (0, _get2.default)(preparedFinalObject, jsonPath);
  var dropdownData = [];
  if (select) {
    var constructDropdown = function constructDropdown(dt) {
      return dt.map(function (d) {
        return {
          value: d[optionValue],
          label: d[optionLabel]
        };
      });
    };
    if (data && data.length > 0) {
      dropdownData = constructDropdown(data || []);
    } else if (sourceJsonPath) {
      dropdownData = constructDropdown((0, _get2.default)(preparedFinalObject, sourceJsonPath, []));
    }
  }
  return { value: fieldValue, dropdownData: dropdownData };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {})(TextFieldContainer);