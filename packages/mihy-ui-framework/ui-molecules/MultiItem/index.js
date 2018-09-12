"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _Div = require("../../ui-atoms/HtmlElements/Div");

var _Div2 = _interopRequireDefault(_Div);

var _RenderScreen = require("../RenderScreen");

var _RenderScreen2 = _interopRequireDefault(_RenderScreen);

var _Container = require("../../ui-atoms/Layout/Container");

var _Container2 = _interopRequireDefault(_Container);

var _Item = require("../../ui-atoms/Layout/Item");

var _Item2 = _interopRequireDefault(_Item);

var _Button = require("../../ui-atoms/Button");

var _Button2 = _interopRequireDefault(_Button);

var _reactRedux = require("react-redux");

var _actions = require("../../ui-redux/screen-configuration/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MultiItem = function (_React$Component) {
  (0, _inherits3.default)(MultiItem, _React$Component);

  function MultiItem() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MultiItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MultiItem.__proto__ || Object.getPrototypeOf(MultiItem)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
      var _this$props = _this.props,
          addItem = _this$props.onFieldChange,
          scheama = _this$props.scheama,
          componentJsonpath = _this$props.componentJsonpath;

      addItem("", componentJsonpath, "props.items[0].item0", scheama);
    }, _this.addItem = function () {
      var _this$props2 = _this.props,
          addItem = _this$props2.onFieldChange,
          scheama = _this$props2.scheama,
          componentJsonpath = _this$props2.componentJsonpath;

      addItem("", componentJsonpath, "props.items[0].item1", scheama);
    }, _this.removeItem = function () {
      var _this$props3 = _this.props,
          addItem = _this$props3.onFieldChange,
          scheama = _this$props3.scheama,
          componentJsonpath = _this$props3.componentJsonpath;

      addItem("", componentJsonpath, "props.items[0].item1", scheama);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MultiItem, [{
    key: "render",
    value: function render() {
      console.log(this.props);
      var _props = this.props,
          items = _props.items,
          scheama = _props.scheama,
          addItemLabel = _props.addItemLabel,
          id = _props.id,
          uiFramework = _props.uiFramework,
          onFieldChange = _props.onFieldChange,
          onComponentClick = _props.onComponentClick;
      var addItem = this.addItem;

      return _react2.default.createElement(
        _Div2.default,
        null,
        items.length > 0 && items.map(function (item, key) {
          console.log(item);
          return _react2.default.createElement(_RenderScreen2.default, {
            key: key,
            components: item,
            uiFramework: uiFramework,
            onFieldChange: onFieldChange,
            onComponentClick: onComponentClick
          });
        }),
        _react2.default.createElement(
          _Container2.default,
          { style: { marginTop: "8px" } },
          _react2.default.createElement(
            _Item2.default,
            { xs: 12, align: "right" },
            _react2.default.createElement(
              _Button2.default,
              { onClick: function onClick(e) {
                  return addItem();
                }, color: "primary" },
              addItemLabel
            )
          )
        )
      );
    }
  }]);
  return MultiItem;
}(_react2.default.Component);

exports.default = MultiItem;