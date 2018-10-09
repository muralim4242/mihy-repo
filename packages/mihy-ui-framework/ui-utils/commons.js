"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTranslatedLabel = exports.updatePFOforSearchResults = exports.getSearchResults = exports.transformById = exports.updateTradeDetails = exports.handleFileUpload = exports.acceptedFiles = exports.isFileValid = exports.getFileSize = exports.getImageUrlByFile = exports.getDateInEpoch = exports.trimObj = exports.fetchFromLocalStorage = exports.persistInLocalStorage = exports.slugify = exports.isFieldEmpty = exports.addQueryArg = exports.getQueryArg = exports.addComponentJsonpath = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _api = require("ui-utils/api");

var _actions = require("mihy-ui-framework/ui-redux/screen-configuration/actions");

var _actions2 = require("mihy-ui-framework/ui-redux/app/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addComponentJsonpath = exports.addComponentJsonpath = function addComponentJsonpath(components) {
  var jsonPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "components";

  for (var componentKey in components) {
    if (components.hasOwnProperty(componentKey)) {
      if (components[componentKey].children) {
        components[componentKey].componentJsonpath = jsonPath + "." + componentKey;
        var childJsonpath = components[componentKey].componentJsonpath + ".children";
        addComponentJsonpath(components[componentKey].children, childJsonpath);
      } else {
        components[componentKey].componentJsonpath = jsonPath + "." + componentKey;
      }
    }
  }
  return components;
};

var getQueryArg = exports.getQueryArg = function getQueryArg(url, name) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

var addQueryArg = exports.addQueryArg = function addQueryArg(url) {
  var queries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var urlParts = url.split("?");
  var path = urlParts[0];
  var queryParts = urlParts.length > 1 ? urlParts[1].split("&") : [];
  queries.forEach(function (query) {
    var key = query.key;
    var value = query.value;
    var newQuery = key + "=" + value;
    queryParts.push(newQuery);
  });
  var newUrl = path + "?" + queryParts.join("&");
  return newUrl;
};

var isFieldEmpty = exports.isFieldEmpty = function isFieldEmpty(field) {
  if (field === undefined || field === null) {
    return true;
  }
  if ((typeof field === "undefined" ? "undefined" : (0, _typeof3.default)(field)) !== "object") {
    field = field.toString().trim();
    return (0, _isEmpty2.default)(field);
  }
  return false;
};

var slugify = exports.slugify = function slugify(term) {
  return term.toLowerCase().replace(/\s+/, "-");
};

var persistInLocalStorage = exports.persistInLocalStorage = function persistInLocalStorage(obj) {
  Object.keys(obj).forEach(function (objKey) {
    var objValue = obj[objKey];
    window.localStorage.setItem(objKey, objValue);
  }, undefined);
};

var fetchFromLocalStorage = exports.fetchFromLocalStorage = function fetchFromLocalStorage(key) {
  return window.localStorage.getItem(key) || null;
};

var trimObj = exports.trimObj = function trimObj(obj) {
  if (!Array.isArray(obj) && (typeof obj === "undefined" ? "undefined" : (0, _typeof3.default)(obj)) !== "object") return obj;
  for (var key in obj) {
    obj[key.trim()] = typeof obj[key] === "string" ? obj[key].trim() : trimObj(obj[key]);
    if (key === "") delete obj[key];
  }
  return obj;
};

var getDateInEpoch = exports.getDateInEpoch = function getDateInEpoch() {
  return new Date().getTime();
};

var getImageUrlByFile = exports.getImageUrlByFile = function getImageUrlByFile(file) {
  return new Promise(function (resolve) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      var fileurl = e.target.result;
      resolve(fileurl);
    };
  });
};

var getFileSize = exports.getFileSize = function getFileSize(file) {
  var size = parseFloat(file.size / 1024).toFixed(2);
  return size;
};

var isFileValid = exports.isFileValid = function isFileValid(file, acceptedFiles) {
  var mimeType = file["type"];
  return mimeType && acceptedFiles && acceptedFiles.indexOf(mimeType.split("/")[1]) > -1 || false;
};

var acceptedFiles = exports.acceptedFiles = function acceptedFiles(acceptedExt) {
  var splitExtByName = acceptedExt.split(",");
  var acceptedFileTypes = splitExtByName.reduce(function (result, curr) {
    if (curr.includes("image")) {
      result.push("image");
    } else {
      result.push(curr.split(".")[1]);
    }
    return result;
  }, []);
  return acceptedFileTypes;
};

var handleFileUpload = exports.handleFileUpload = function handleFileUpload(event, handleDocument, props) {
  var S3_BUCKET = {
    endPoint: "filestore/v1/files"
  };
  var inputProps = props.inputProps,
      maxFileSize = props.maxFileSize;

  var input = event.target;
  if (input.files && input.files.length > 0) {
    var files = input.files;
    Object.keys(files).forEach(function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(key, index) {
        var file, fileValid, isSizeValid, imageUri, fileStoreId, _fileStoreId;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                file = files[key];
                fileValid = isFileValid(file, acceptedFiles(inputProps.accept));
                isSizeValid = getFileSize(file) <= maxFileSize;

                if (fileValid) {
                  _context.next = 6;
                  break;
                }

                alert("Only image or pdf files can be uploaded");
                return _context.abrupt("return");

              case 6:
                if (isSizeValid) {
                  _context.next = 9;
                  break;
                }

                alert("Maximum file size can be " + 5 + " MB");
                return _context.abrupt("return");

              case 9:
                if (!file.type.match(/^image\//)) {
                  _context.next = 19;
                  break;
                }

                _context.next = 12;
                return getImageUrlByFile(file);

              case 12:
                imageUri = _context.sent;
                _context.next = 15;
                return (0, _api.uploadFile)(S3_BUCKET.endPoint, "rainmaker-pgr", file, "pb");

              case 15:
                fileStoreId = _context.sent;

                handleDocument(file, fileStoreId);
                _context.next = 23;
                break;

              case 19:
                _context.next = 21;
                return (0, _api.uploadFile)(S3_BUCKET.endPoint, "RAINMAKER-PGR", file, "pb");

              case 21:
                _fileStoreId = _context.sent;

                handleDocument(file, _fileStoreId);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function (_x3, _x4) {
        return _ref.apply(this, arguments);
      };
    }());
  }
};

var updateTradeDetails = exports.updateTradeDetails = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(requestBody) {
    var payload;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _api.httpRequest)("post", "/tl-services/v1/_update", "", [], requestBody);

          case 3:
            payload = _context2.sent;
            return _context2.abrupt("return", payload);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);

            console.log(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 7]]);
  }));

  return function updateTradeDetails(_x5) {
    return _ref2.apply(this, arguments);
  };
}();

var transformById = exports.transformById = function transformById(payload, id) {
  return payload && payload.reduce(function (result, item) {
    result[item[id]] = (0, _extends3.default)({}, item);

    return result;
  }, {});
};

var getSearchResults = exports.getSearchResults = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(queryObject) {
    var response;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _api.httpRequest)("post", "/tl-services/v1/_search", "", queryObject);

          case 3:
            response = _context3.sent;
            return _context3.abrupt("return", response);

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);

            console.log(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 7]]);
  }));

  return function getSearchResults(_x6) {
    return _ref3.apply(this, arguments);
  };
}();

var updatePFOforSearchResults = exports.updatePFOforSearchResults = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(action, state, dispatch, queryValue) {
    var queryObject, payload;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            queryObject = [{ key: "tenantId", value: "pb.amritsar" }, { key: "applicationNumber", value: queryValue }];

            dispatch((0, _actions2.toggleSpinner)());
            _context4.next = 4;
            return getSearchResults(queryObject);

          case 4:
            payload = _context4.sent;

            dispatch((0, _actions2.toggleSpinner)());
            dispatch((0, _actions.prepareFinalObject)("Licenses[0]", payload.Licenses[0]));

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function updatePFOforSearchResults(_x7, _x8, _x9, _x10) {
    return _ref4.apply(this, arguments);
  };
}();

var getTranslatedLabel = exports.getTranslatedLabel = function getTranslatedLabel(labelKey, localizationLabels) {
  var translatedLabel = null;
  if (localizationLabels && localizationLabels.hasOwnProperty(labelKey)) {
    translatedLabel = localizationLabels[labelKey];
    if (translatedLabel && (typeof translatedLabel === "undefined" ? "undefined" : (0, _typeof3.default)(translatedLabel)) === "object" && translatedLabel.hasOwnProperty("message")) translatedLabel = translatedLabel.message;
  }
  return translatedLabel || labelKey;
};