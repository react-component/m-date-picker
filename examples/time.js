webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(317);


/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DatePicker = __webpack_require__(283);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DatePicker).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(3);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(72);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	__webpack_require__(80);
	
	__webpack_require__(81);
	
	var _index = __webpack_require__(316);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _react = __webpack_require__(83);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactDom = __webpack_require__(114);
	
	var ReactDOM = _interopRequireWildcard(_reactDom);
	
	var _moment = __webpack_require__(310);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _zh_CN = __webpack_require__(312);
	
	var _zh_CN2 = _interopRequireDefault(_zh_CN);
	
	var _en_US = __webpack_require__(311);
	
	var _en_US2 = _interopRequireDefault(_en_US);
	
	__webpack_require__(313);
	
	__webpack_require__(314);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint no-console:0 */
	var cn = location.search.indexOf('cn') !== -1;
	var minDate = (0, _moment2.default)();
	var maxDate = (0, _moment2.default)();
	var now = (0, _moment2.default)();
	if (cn) {
	    minDate.locale('zh-cn').utcOffset(8);
	    maxDate.locale('zh-cn').utcOffset(8);
	    now.locale('zh-cn').utcOffset(8);
	} else {
	    minDate.locale('en-gb').utcOffset(0);
	    maxDate.locale('en-gb').utcOffset(0);
	    now.locale('en-gb').utcOffset(0);
	}
	minDate.hour(10).minute(30);
	maxDate.hour(22).minute(49);
	now.hour(15).minute(49);
	function format(date) {
	    return date.format('YYYY-MM-DD HH:mm');
	}
	
	var Demo = function (_React$Component) {
	    (0, _inherits3.default)(Demo, _React$Component);
	
	    function Demo(props) {
	        (0, _classCallCheck3.default)(this, Demo);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));
	
	        _this.onDateChange = function (date) {
	            _this.setState({
	                date: date
	            });
	        };
	        _this.state = {
	            date: null
	        };
	        return _this;
	    }
	
	    Demo.prototype.render = function render() {
	        var props = this.props;
	        var date = this.state.date;
	
	        return React.createElement("div", { style: { margin: '10px 30px' } }, React.createElement("h2", null, "date picker"), React.createElement("div", null, React.createElement("span", null, date && format(date) || format(now)), React.createElement(_index2.default, { defaultDate: date || now, mode: props.mode, locale: props.locale, maxDate: maxDate, minDate: minDate, onDateChange: this.onDateChange })));
	    };
	
	    return Demo;
	}(React.Component);
	
	Demo.defaultProps = {
	    mode: 'time',
	    locale: cn ? _zh_CN2.default : _en_US2.default
	};
	ReactDOM.render(React.createElement(Demo, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=time.js.map