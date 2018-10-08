"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = function Label(_ref) {
  var label = _ref.label,
      rest = (0, _objectWithoutProperties3.default)(_ref, ["label"]);
  return _react2.default.createElement(
    "span",
    rest,
    label ? label : "NA"
  );
};

exports.default = Label;