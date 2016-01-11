webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* eslint no-console:0 */
	
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rmc-date-picker/assets/index.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(3);
	
	__webpack_require__(4);
	
	var _rmcDatePicker = __webpack_require__(5);
	
	var _rmcDatePicker2 = _interopRequireDefault(_rmcDatePicker);
	
	var _gregorianCalendarFormat = __webpack_require__(199);
	
	var _gregorianCalendarFormat2 = _interopRequireDefault(_gregorianCalendarFormat);
	
	var _gregorianCalendar = __webpack_require__(167);
	
	var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);
	
	var _gregorianCalendarFormatLibLocaleZh_CN = __webpack_require__(202);
	
	var _gregorianCalendarFormatLibLocaleZh_CN2 = _interopRequireDefault(_gregorianCalendarFormatLibLocaleZh_CN);
	
	var _gregorianCalendarLibLocaleZh_CN = __webpack_require__(203);
	
	var _gregorianCalendarLibLocaleZh_CN2 = _interopRequireDefault(_gregorianCalendarLibLocaleZh_CN);
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(174);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var PopPicker = _rmcDatePicker2['default'].PopPicker;
	
	var formatter = _gregorianCalendarFormat2['default'].getDateTimeInstance(_gregorianCalendarFormat2['default'].Style.FULL, _gregorianCalendarFormat2['default'].Style.FULL, _gregorianCalendarFormatLibLocaleZh_CN2['default']);
	
	function format(v) {
	  return formatter.format(v);
	}
	
	var now = new _gregorianCalendar2['default'](_gregorianCalendarLibLocaleZh_CN2['default']);
	now.setTime(Date.now());
	
	var Demo = _react2['default'].createClass({
	  displayName: 'Demo',
	
	  propTypes: {
	    mode: _react2['default'].PropTypes.string
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      mode: 'datetime',
	      locale: __webpack_require__(204)
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      date: null
	    };
	  },
	  onOk: function onOk(date) {
	    this.setState({
	      date: date || now
	    });
	  },
	  show: function show() {
	    console.log('my click');
	  },
	  onDismiss: function onDismiss() {
	    console.log('onDismiss');
	  },
	  render: function render() {
	    var _this = this;
	
	    var props = this.props;
	    var date = this.state.date;
	
	    var getGregorianCalendar = function getGregorianCalendar() {
	      return new _gregorianCalendar2['default'](_this.props.locale.calendar);
	    };
	    var minDate = getGregorianCalendar();
	    minDate.set(2015, 1, 1, 0, 0, 0);
	    var maxDate = getGregorianCalendar();
	    maxDate.set(2018, 1, 1, 0, 0, 0);
	
	    return _react2['default'].createElement(
	      'div',
	      { style: { margin: '10px 30px' } },
	      _react2['default'].createElement(
	        'h2',
	        null,
	        'date picker'
	      ),
	      _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          PopPicker,
	          { date: date || now, minDate: minDate, maxDate: maxDate,
	            mode: props.mode,
	            locale: props.locale,
	            onDateChange: this.onDateChange,
	            onDismiss: this.onDismiss,
	            onOk: this.onOk,
	            style: { left: 0, bottom: 0 }
	          },
	          _react2['default'].createElement(
	            'button',
	            { onClick: this.show },
	            date && format(date) || 'open'
	          )
	        )
	      )
	    );
	  }
	});
	
	_reactDom2['default'].render(_react2['default'].createElement(Demo, null), document.getElementById('__react-content'));

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);
//# sourceMappingURL=pop.js.map