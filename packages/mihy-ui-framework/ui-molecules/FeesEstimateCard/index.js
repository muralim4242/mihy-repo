"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("@material-ui/core/styles");

var _Card = require("@material-ui/core/Card");

var _Card2 = _interopRequireDefault(_Card);

var _CardContent = require("@material-ui/core/CardContent");

var _CardContent2 = _interopRequireDefault(_CardContent);

var _Typography = require("@material-ui/core/Typography");

var _Typography2 = _interopRequireDefault(_Typography);

var _Grid = require("@material-ui/core/Grid");

var _Grid2 = _interopRequireDefault(_Grid);

var _Divider = require("@material-ui/core/Divider");

var _Divider2 = _interopRequireDefault(_Divider);

var _Tooltip = require("@material-ui/core/Tooltip");

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Icon = require("@material-ui/core/Icon");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  card: {
    backgroundColor: "rgb(242, 242, 242)",
    boxShadow: "none",
    borderRadius: 0
  },
  whiteCard: {
    padding: 18,
    marginTop: 24,
    boxShadow: "none",
    borderRadius: 0
  },
  whiteCardText: {
    padding: 8,
    color: "rgba(0, 0, 0, 0.6000000238418579)",
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: 0.65
  },
  toolTipIcon: {
    color: "rgba(0, 0, 0, 0.3799999952316284)",
    paddingLeft: 5,
    paddingTop: 1
  },
  bigheader: {
    color: "rgba(0, 0, 0, 0.8700000047683716)",
    fontFamily: "Roboto",
    fontSize: "34px",
    fontWeight: 500,
    letterSpacing: "1.42px",
    lineHeight: "41px"
  }
};

function totalAmount(arr) {
  return arr.map(function (item) {
    return item.value;
  }).reduce(function (prev, next) {
    return prev + next;
  }, 0);
}

function FeesEstimateCard(props) {
  var classes = props.classes,
      estimate = props.estimate;

  var total = totalAmount(estimate.fees);
  return _react2.default.createElement(
    _Card2.default,
    { className: classes.card, container: true },
    _react2.default.createElement(
      _Grid2.default,
      { container: true, spacing: 24 },
      _react2.default.createElement(
        _Grid2.default,
        { item: true, xs: 12, sm: 7 },
        _react2.default.createElement(
          _CardContent2.default,
          null,
          _react2.default.createElement(
            _Typography2.default,
            { variant: "subheading" },
            estimate.header
          )
        ),
        _react2.default.createElement(
          _CardContent2.default,
          { style: { maxWidth: 500 } },
          _react2.default.createElement(
            _Grid2.default,
            { container: true },
            _react2.default.createElement(
              _Grid2.default,
              { item: true, xs: 8 },
              estimate.fees.map(function (fee, key) {
                return _react2.default.createElement(
                  _Grid2.default,
                  { container: true },
                  _react2.default.createElement(
                    _Typography2.default,
                    { variant: "body1" },
                    fee.name
                  ),
                  _react2.default.createElement(
                    _Tooltip2.default,
                    { title: fee.info },
                    _react2.default.createElement(
                      _Icon2.default,
                      {
                        className: classes.toolTipIcon,
                        style: { fontSize: 18 }
                      },
                      "info_circle"
                    )
                  )
                );
              })
            ),
            _react2.default.createElement(
              _Grid2.default,
              { item: true, xs: 4, align: "right" },
              estimate.fees.map(function (fee, key) {
                return _react2.default.createElement(
                  _Typography2.default,
                  { variant: "body1" },
                  fee.value
                );
              })
            )
          ),
          _react2.default.createElement(_Divider2.default, null),
          _react2.default.createElement(
            _Grid2.default,
            { container: true },
            _react2.default.createElement(
              _Grid2.default,
              { item: true, xs: 6 },
              _react2.default.createElement(
                _Typography2.default,
                { variant: "body2" },
                "Total"
              )
            ),
            _react2.default.createElement(
              _Grid2.default,
              { item: true, xs: 6, align: "right" },
              _react2.default.createElement(
                _Typography2.default,
                { variant: "body2" },
                total
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        _Grid2.default,
        { item: true, xs: 12, sm: 5 },
        _react2.default.createElement(
          _CardContent2.default,
          null,
          _react2.default.createElement(
            _Typography2.default,
            { variant: "body2", align: "right" },
            "Total Amount"
          ),
          _react2.default.createElement(
            _Typography2.default,
            { className: classes.bigheader, align: "right" },
            "Rs ",
            total
          ),
          _react2.default.createElement(
            _Card2.default,
            { className: classes.whiteCard },
            estimate.extra.map(function (item, key) {
              return _react2.default.createElement(
                _Typography2.default,
                { variant: "body1" },
                item
              );
            })
          )
        )
      )
    )
  );
}

exports.default = (0, _styles.withStyles)(styles)(FeesEstimateCard);