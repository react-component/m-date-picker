webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	/* eslint no-console:0 */
	
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	__webpack_require__(4);
	
	__webpack_require__(5);
	
	var _gregorianCalendarFormat = __webpack_require__(6);
	
	var _gregorianCalendarFormat2 = _interopRequireDefault(_gregorianCalendarFormat);
	
	var _gregorianCalendar = __webpack_require__(7);
	
	var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);
	
	var _gregorianCalendarFormatLibLocaleZh_CN = __webpack_require__(14);
	
	var _gregorianCalendarFormatLibLocaleZh_CN2 = _interopRequireDefault(_gregorianCalendarFormatLibLocaleZh_CN);
	
	var _rmcDatePickerSrcLocaleZh_CN = __webpack_require__(15);
	
	var _rmcDatePickerSrcLocaleZh_CN2 = _interopRequireDefault(_rmcDatePickerSrcLocaleZh_CN);
	
	// const zhCnCalendar = null;
	
	var _react = __webpack_require__(17);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(173);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rmcDatePickerSrcPopup = __webpack_require__(174);
	
	var _rmcDatePickerSrcPopup2 = _interopRequireDefault(_rmcDatePickerSrcPopup);
	
	var formatter = _gregorianCalendarFormat2['default'].getDateTimeInstance(_gregorianCalendarFormat2['default'].Style.FULL, _gregorianCalendarFormat2['default'].Style.FULL, _gregorianCalendarFormatLibLocaleZh_CN2['default']);
	
	function format(v) {
	  return formatter.format(v);
	}
	
	var now = new _gregorianCalendar2['default'](_rmcDatePickerSrcLocaleZh_CN2['default'].calendar);
	now.setTime(Date.now());
	
	var getGregorianCalendar = function getGregorianCalendar() {
	  return new _gregorianCalendar2['default'](_rmcDatePickerSrcLocaleZh_CN2['default'].calendar);
	};
	var minDate = getGregorianCalendar();
	minDate.set(2015, 8, 1, 0, 0, 0);
	var maxDate = getGregorianCalendar();
	maxDate.set(2018, 0, 1, 0, 0, 0);
	
	var Demo = _react2['default'].createClass({
	  displayName: 'Demo',
	
	  propTypes: {
	    mode: _react2['default'].PropTypes.string
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      mode: 'datetime',
	      locale: _rmcDatePickerSrcLocaleZh_CN2['default']
	    };
	  },
	  // locale: require('../src/locale/zh_CN'),
	  getInitialState: function getInitialState() {
	    return {
	      date: null
	    };
	  },
	  onOk: function onOk(date) {
	    console.log('onOk', format(date));
	    this.setState({
	      date: date
	    });
	  },
	  onDismiss: function onDismiss() {
	    console.log('onDismiss');
	  },
	  onDateChange: function onDateChange(date) {
	    console.log('onDateChange', format(date));
	  },
	  show: function show() {
	    console.log('my click');
	  },
	  render: function render() {
	    var props = this.props;
	    var date = this.state.date;
	
	    return _react2['default'].createElement(
	      'div',
	      { style: { margin: '10px 30px' } },
	      _react2['default'].createElement(
	        'h2',
	        null,
	        'popup date picker'
	      ),
	      _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          _rmcDatePickerSrcPopup2['default'],
	          { date: date || now,
	            minDate: minDate,
	            maxDate: maxDate,
	            mode: props.mode,
	            locale: props.locale,
	            onDateChange: this.onDateChange,
	            onDismiss: this.onDismiss,
	            onOk: this.onOk,
	            style: { left: 0, bottom: 0 } },
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

/***/ 4:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 5:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(17);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(173);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _DatePicker = __webpack_require__(175);
	
	var _DatePicker2 = _interopRequireDefault(_DatePicker);
	
	var _rmcModal = __webpack_require__(181);
	
	var _rmcModal2 = _interopRequireDefault(_rmcModal);
	
	var _gregorianCalendar = __webpack_require__(7);
	
	var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);
	
	var _localeEn_US = __webpack_require__(179);
	
	var _localeEn_US2 = _interopRequireDefault(_localeEn_US);
	
	function noop() {}
	
	var PopupPicker = _react2['default'].createClass({
	  displayName: 'PopupPicker',
	
	  propTypes: {
	    visible: _react.PropTypes.bool,
	    mode: _react.PropTypes.string,
	    onDateChange: _react.PropTypes.func,
	    onOk: _react.PropTypes.func,
	    onVisibleChange: _react.PropTypes.func,
	    locale: _react.PropTypes.object,
	    date: _react.PropTypes.object,
	    Modal: _react.PropTypes.func,
	    children: _react.PropTypes.element,
	    onDismiss: _react.PropTypes.func
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rmc-date-picker',
	      Modal: _rmcModal2['default'],
	      modalPrefix: 'rmc-modal',
	      onVisibleChange: noop,
	      mode: 'datetime',
	      locale: _localeEn_US2['default'],
	      okText: 'Ok',
	      dismissText: 'Dismiss',
	      style: {},
	      onOk: noop,
	      onDismiss: noop,
	      onDateChange: noop
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      pickerDate: null,
	      visible: this.props.visible || false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.popupContainer = document.createElement('div');
	    document.body.appendChild(this.popupContainer);
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if ('visible' in nextProps) {
	      this.setVisibleState(nextProps.visible);
	    }
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    if (this.state.visible) {
	      _reactDom2['default'].render(this.getModal(), this.popupContainer);
	    } else {
	      _reactDom2['default'].unmountComponentAtNode(this.popupContainer);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    _reactDom2['default'].unmountComponentAtNode(this.popupContainer);
	    document.body.removeChild(this.popupContainer);
	  },
	  onDateChange: function onDateChange(pickerDate) {
	    this.setState({
	      pickerDate: pickerDate
	    });
	    this.props.onDateChange(pickerDate);
	  },
	  onOk: function onOk() {
	    this.fireVisibleChange(false);
	    this.props.onOk(this.state.pickerDate);
	  },
	  onDismiss: function onDismiss() {
	    this.fireVisibleChange(false);
	    this.props.onDismiss();
	  },
	  onTriggerClick: function onTriggerClick() {
	    this.fireVisibleChange(!this.state.visible);
	    var child = _react2['default'].Children.only(this.props.children);
	    var childProps = child.props || {};
	    if (childProps.onClick) {
	      childProps.onClick();
	    }
	  },
	  setVisibleState: function setVisibleState(visible) {
	    this.setState({
	      visible: visible
	    });
	    if (!visible) {
	      this.setState({
	        pickerDate: null
	      });
	    }
	  },
	  getNow: function getNow(props) {
	    var date = this.getGregorianCalendar(props);
	    date.setTime(Date.now());
	    return date;
	  },
	  getGregorianCalendar: function getGregorianCalendar(props) {
	    return new _gregorianCalendar2['default']((props || this.props).locale.calendar);
	  },
	  getModal: function getModal() {
	    var props = this.props;
	    var ModalClass = props.Modal;
	
	    var dpProps = {};
	    if (props.minDate) {
	      dpProps.minDate = props.minDate;
	    }
	    if (props.maxDate) {
	      dpProps.maxDate = props.maxDate;
	    }
	    if (props.pickerPrefixCls) {
	      dpProps.pickerPrefixCls = props.pickerPrefixCls;
	    }
	    if (props.prefixCls) {
	      dpProps.prefixCls = props.prefixCls;
	    }
	    return _react2['default'].createElement(
	      ModalClass,
	      { className: props.className,
	        modalPrefix: props.modalPrefix,
	        visible: true,
	        style: props.style,
	        onDismiss: this.onDismiss },
	      _react2['default'].createElement(
	        'div',
	        { className: props.prefixCls + '-popup-header' },
	        _react2['default'].createElement(
	          'div',
	          { className: props.prefixCls + '-popup-item', onClick: this.onDismiss },
	          props.dismissText
	        ),
	        _react2['default'].createElement('div', { className: props.prefixCls + '-popup-item' }),
	        _react2['default'].createElement(
	          'div',
	          { className: props.prefixCls + '-popup-item', onClick: this.onOk },
	          props.okText
	        )
	      ),
	      _react2['default'].createElement(_DatePicker2['default'], _extends({ date: this.state.pickerDate || props.date,
	        mode: props.mode,
	        locale: props.locale,
	        onDateChange: this.onDateChange
	      }, dpProps))
	    );
	  },
	  fireVisibleChange: function fireVisibleChange(visible) {
	    if (!('visible' in this.props)) {
	      this.setVisibleState(visible);
	    }
	    this.props.onVisibleChange(visible);
	  },
	  render: function render() {
	    var props = this.props;
	    var children = props.children;
	    var child = _react2['default'].Children.only(children);
	    var newChildProps = {
	      onClick: this.onTriggerClick
	    };
	    return _react2['default'].cloneElement(child, newChildProps);
	  }
	});
	
	exports['default'] = PopupPicker;
	module.exports = exports['default'];

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	// export this package's api
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Modal = __webpack_require__(182);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	exports['default'] = _Modal2['default'];
	module.exports = exports['default'];

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _react = __webpack_require__(17);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(173);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(180);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var Modal = _react2['default'].createClass({
	  displayName: 'Modal',
	
	  propTypes: {
	    prefixCls: _react2['default'].PropTypes.string,
	    animated: _react2['default'].PropTypes.bool,
	    visible: _react2['default'].PropTypes.bool,
	    defaultVisible: _react2['default'].PropTypes.bool,
	    onDismiss: _react2['default'].PropTypes.func
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rmc-modal',
	      defaultVisible: false,
	      onDismiss: function onDismiss() {}
	    };
	  },
	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var defaultVisible = _props.defaultVisible;
	    var visible = _props.visible;
	
	    return {
	      visible: 'visible' in this.props ? visible : defaultVisible
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.container = document.createElement('div');
	    document.body.insertBefore(this.container, document.body.firstChild || null);
	    this.componentDidUpdate();
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var props = {};
	    if ('visible' in nextProps) {
	      props.visible = nextProps.visible;
	    }
	    this.setState(props);
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    _reactDom2['default'].unstable_renderSubtreeIntoContainer(this, this.getRender(), this.container);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    _reactDom2['default'].unmountComponentAtNode(this.container);
	    document.body.removeChild(this.container);
	  },
	  getRender: function getRender() {
	    var _wrapperCls, _maskCls;
	
	    var props = this.props;
	
	    var wrapperCls = (_wrapperCls = {}, _defineProperty(_wrapperCls, props.prefixCls + '-wrapper', true), _defineProperty(_wrapperCls, props.prefixCls + '-wrapper-open', this.state.visible), _wrapperCls);
	    var maskCls = (_maskCls = {}, _defineProperty(_maskCls, props.prefixCls + '-mask', true), _defineProperty(_maskCls, props.prefixCls + '-mask-open', this.state.visible), _maskCls);
	
	    return _react2['default'].createElement(
	      'div',
	      { className: (0, _classnames2['default'])(wrapperCls) },
	      _react2['default'].createElement(
	        'div',
	        { className: (0, _classnames2['default'])(props.className, '' + props.prefixCls), style: props.style },
	        props.children
	      ),
	      _react2['default'].createElement('div', { className: (0, _classnames2['default'])(maskCls), onClick: this.hide })
	    );
	  },
	  hide: function hide() {
	    if (!('visible' in this.props)) {
	      this.setState({
	        visible: false
	      });
	    }
	    this.props.onDismiss();
	  },
	  render: function render() {
	    return null;
	  }
	});
	exports['default'] = Modal;
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=popup.js.map