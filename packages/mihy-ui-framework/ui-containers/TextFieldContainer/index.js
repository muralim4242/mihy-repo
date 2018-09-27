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
          rest = (0, _objectWithoutProperties3.default)(_props, ["label", "placeholder", "jsonPath", "iconObj", "value"]);

      return _react2.default.createElement(_uiMolecules.TextfieldWithIcon, (0, _extends3.default)({
        label: label,
        placeholder: placeholder,
        jsonPath: jsonPath,
        iconObj: iconObj,
        value: value
      }, rest));
    }
  }]);
  return TextFieldContainer;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, ownprops) {
  var jsonPath = ownprops.jsonPath,
      value = ownprops.value;
  var screenConfiguration = state.screenConfiguration;
  var preparedFinalObject = screenConfiguration.preparedFinalObject;

  console.log("first,,,", ownprops);
  var fieldValue = value ? value : (0, _get2.default)(preparedFinalObject, jsonPath);
  return { value: fieldValue };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {})(TextFieldContainer);