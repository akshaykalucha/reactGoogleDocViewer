module.exports =
(function(modules) {
var installedModules = {};

function __webpack_require__(moduleId) {

    if(installedModules[moduleId]) {
        return installedModules[moduleId].exports;
    }
    var module = installedModules[moduleId] = {
        i: moduleId,
        l: false,
        exports: {}
    };

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    module.l = true;

    return module.exports;
}
__webpack_require__.m = modules;

__webpack_require__.c = installedModules;

__webpack_require__.i = function(value) { return value; };

__webpack_require__.d = function(exports, name, getter) {
    if(!__webpack_require__.o(exports, name)) {
        Object.defineProperty(exports, name, {
            configurable: false,
            enumerable: true,
            get: getter
        });
    }
};

__webpack_require__.n = function(module) {
    var getter = module && module.__esModule ?
        function getDefault() { return module['default']; } :
        function getModuleExports() { return module; };
    __webpack_require__.d(getter, 'a', getter);
    return getter;
};

__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

__webpack_require__.p = "";

return __webpack_require__(__webpack_require__.s = 1);
})

([

 (function(module, exports) {
    
    module.exports = require("react");
    
 }),

 (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _react = __webpack_require__(0);
    
    var _react2 = _interopRequireDefault(_react);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    var GoogleDocsViewer = function (_Component) {
      _inherits(GoogleDocsViewer, _Component);
    
      function GoogleDocsViewer() {
        _classCallCheck(this, GoogleDocsViewer);
    
        return _possibleConstructorReturn(this, (GoogleDocsViewer.__proto__ || Object.getPrototypeOf(GoogleDocsViewer)).apply(this, arguments));
      }
    
      _createClass(GoogleDocsViewer, [{
        key: "render",
        value: function render() {
          var iframeSrc = "https://docs.google.com/viewer?url=" + this.props.fileUrl + "&embedded=true";
    
          var style = {
            width: this.props.width,
            height: this.props.height,
            border: 'none'
          };
    
          return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement("iframe", { src: iframeSrc,
              style: style })
          );
        }
      }]);
    
      return GoogleDocsViewer;
    }(_react.Component);
    
    exports.default = GoogleDocsViewer;
    
 })
     ]);
    
     var GoogleDocsViewer = function (_Component) {
        _inherits(GoogleDocsViewer, _Component);
      
        function GoogleDocsViewer() {
          _classCallCheck(this, GoogleDocsViewer);
      
          return _possibleConstructorReturn(this, (GoogleDocsViewer.__proto__ || Object.getPrototypeOf(GoogleDocsViewer)).apply(this, arguments));
        }