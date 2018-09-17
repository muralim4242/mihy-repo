'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _InputAdornment = require('../../ui-atoms/InputAdornment');

var _InputAdornment2 = _interopRequireDefault(_InputAdornment);

var _Text = require('../../ui-atoms/TextFields/Text');

var _Text2 = _interopRequireDefault(_Text);

var _Icon = require('../../ui-atoms/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InputWithIcon(props) {
  var label = props.label,
      iconObj = props.iconObj,
      rest = (0, _objectWithoutProperties3.default)(props, ['label', 'iconObj']);

  var extraProps = !(0, _isEmpty2.default)(iconObj) && (iconObj.position === "end" ? { InputProps: {
      endAdornment: _react2.default.createElement(
        _InputAdornment2.default,
        { position: 'end' },
        _react2.default.createElement(_Icon2.default, { iconName: iconObj.iconName })
      )
    } } : {
    InputProps: {
      startAdornment: _react2.default.createElement(
        _InputAdornment2.default,
        { position: 'end' },
        _react2.default.createElement(_Icon2.default, { iconName: iconObj.iconName })
      )
    }
  });

  return _react2.default.createElement(_Text2.default, (0, _extends3.default)({
    label: label
  }, extraProps, rest));
}

InputWithIcon.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = InputWithIcon;