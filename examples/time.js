webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(218);


/***/ },

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DatePicker = __webpack_require__(187);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DatePicker).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	var _index = __webpack_require__(217);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _gregorianCalendarFormat = __webpack_require__(5);
	
	var _gregorianCalendarFormat2 = _interopRequireDefault(_gregorianCalendarFormat);
	
	var _gregorianCalendar = __webpack_require__(6);
	
	var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);
	
	var _zh_CN = __webpack_require__(13);
	
	var _zh_CN2 = _interopRequireDefault(_zh_CN);
	
	var _react = __webpack_require__(16);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactDom = __webpack_require__(47);
	
	var ReactDOM = _interopRequireWildcard(_reactDom);
	
	var _zh_CN3 = __webpack_require__(14);
	
	var _zh_CN4 = _interopRequireDefault(_zh_CN3);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /* eslint no-console:0 */
	
	
	var formatter = _gregorianCalendarFormat2.default.getDateTimeInstance(_gregorianCalendarFormat2.default.Style.FULL, _gregorianCalendarFormat2.default.Style.FULL, _zh_CN2.default);
	var getGregorianCalendar = function getGregorianCalendar() {
	    return new _gregorianCalendar2.default(_zh_CN4.default.calendar);
	};
	var minDate = getGregorianCalendar();
	minDate.set(2015, 8, 1, 2, 20, 0);
	var maxDate = getGregorianCalendar();
	maxDate.set(2018, 1, 1, 22, 0, 0);
	function format(v) {
	    return formatter.format(v);
	}
	var now = new _gregorianCalendar2.default(_zh_CN4.default.calendar);
	now.setTime(Date.now());
	
	var Demo = function (_React$Component) {
	    _inherits(Demo, _React$Component);
	
	    function Demo(props) {
	        _classCallCheck(this, Demo);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
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
	
	        return React.createElement(
	            'div',
	            { style: { margin: '10px 30px' } },
	            React.createElement(
	                'h2',
	                null,
	                'date picker'
	            ),
	            React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'span',
	                    null,
	                    date && format(date) || format(now)
	                ),
	                React.createElement(_index2.default, { defaultDate: date || now, mode: props.mode, locale: props.locale, maxDate: maxDate, minDate: minDate, onDateChange: this.onDateChange })
	            )
	        );
	    };
	
	    return Demo;
	}(React.Component);
	
	Demo.defaultProps = {
	    mode: 'time',
	    locale: _zh_CN4.default
	};
	ReactDOM.render(React.createElement(Demo, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=time.js.map