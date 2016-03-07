webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(183);


/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	var _rmcDatePicker = __webpack_require__(184);
	
	var _rmcDatePicker2 = _interopRequireDefault(_rmcDatePicker);
	
	var _gregorianCalendarFormat = __webpack_require__(6);
	
	var _gregorianCalendarFormat2 = _interopRequireDefault(_gregorianCalendarFormat);
	
	var _gregorianCalendar = __webpack_require__(7);
	
	var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);
	
	var _zh_CN = __webpack_require__(14);
	
	var _zh_CN2 = _interopRequireDefault(_zh_CN);
	
	var _react = __webpack_require__(17);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(173);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _zh_CN3 = __webpack_require__(15);
	
	var _zh_CN4 = _interopRequireDefault(_zh_CN3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var formatter = _gregorianCalendarFormat2.default.getDateTimeInstance(_gregorianCalendarFormat2.default.Style.FULL, _gregorianCalendarFormat2.default.Style.FULL, _zh_CN2.default); /* eslint no-console:0 */
	
	var getGregorianCalendar = function getGregorianCalendar() {
	  return new _gregorianCalendar2.default(_zh_CN4.default.calendar);
	};
	var minDate = getGregorianCalendar();
	minDate.set(2015, 8, 1, 0, 0, 0);
	var maxDate = getGregorianCalendar();
	maxDate.set(2018, 1, 1, 22, 0, 0);
	
	function format(v) {
	  return formatter.format(v);
	}
	
	var now = new _gregorianCalendar2.default(_zh_CN4.default.calendar);
	now.setTime(Date.now());
	
	var Demo = _react2.default.createClass({
	  displayName: 'Demo',
	
	  propTypes: {
	    mode: _react2.default.PropTypes.string
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      mode: 'datetime',
	      locale: _zh_CN4.default
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      date: null
	    };
	  },
	  onDateChange: function onDateChange(date) {
	    this.setState({
	      date: date
	    });
	  },
	  render: function render() {
	    var props = this.props;
	    var date = this.state.date;
	
	
	    return _react2.default.createElement(
	      'div',
	      { style: { margin: '10px 30px' } },
	      _react2.default.createElement(
	        'h2',
	        null,
	        'date picker'
	      ),
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'span',
	          null,
	          date && format(date) || format(now)
	        ),
	        _react2.default.createElement(_rmcDatePicker2.default, {
	          defaultDate: date || now,
	          mode: props.mode,
	          locale: props.locale,
	          maxDate: maxDate,
	          minDate: minDate,
	          onDateChange: this.onDateChange
	        })
	      )
	    );
	  }
	});
	
	_reactDom2.default.render(_react2.default.createElement(Demo, null), document.getElementById('__react-content'));

/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DatePicker = __webpack_require__(175);

	var _DatePicker2 = _interopRequireDefault(_DatePicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _DatePicker2.default; // export this package's api

	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=simple.js.map