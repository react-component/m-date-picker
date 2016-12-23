webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
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
	
	__webpack_require__(82);
	
	var _react = __webpack_require__(83);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactDom = __webpack_require__(114);
	
	var ReactDOM = _interopRequireWildcard(_reactDom);
	
	var _Popup = __webpack_require__(260);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	var _DatePicker = __webpack_require__(279);
	
	var _DatePicker2 = _interopRequireDefault(_DatePicker);
	
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
	
	/* tslint:disable:no-console */
	var cn = location.search.indexOf('cn') !== -1;
	var minDate = (0, _moment2.default)([2015, 8, 1, 0, 0, 0]);
	var maxDate = (0, _moment2.default)([2018, 1, 1, 22, 0, 0]);
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
	function format(date) {
	    return date.format('YYYY-MM-DD HH:mm');
	}
	
	var Demo = function (_React$Component) {
	    (0, _inherits3.default)(Demo, _React$Component);
	
	    function Demo(props) {
	        (0, _classCallCheck3.default)(this, Demo);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));
	
	        _this.onChange = function (date) {
	            console.log('onChange', format(date));
	            _this.setState({
	                date: date
	            });
	        };
	        _this.onDismiss = function () {
	            console.log('onDismiss');
	        };
	        _this.show = function () {
	            console.log('my click');
	        };
	        _this.state = {
	            date: null
	        };
	        return _this;
	    }
	
	    Demo.prototype.onPickerChange = function onPickerChange(date) {
	        console.log('onPickerChange', format(date));
	    };
	
	    Demo.prototype.render = function render() {
	        var props = this.props;
	        var date = this.state.date;
	
	        var datePicker = React.createElement(_DatePicker2.default, { rootNativeProps: { 'data-xx': 'yy' }, minDate: minDate, maxDate: maxDate, defaultDate: now, mode: props.mode, onDateChange: this.onPickerChange, locale: props.locale });
	        return React.createElement("div", { style: { margin: '10px 30px' } }, React.createElement("h2", null, "popup date picker"), React.createElement("div", null, React.createElement(_Popup2.default, { datePicker: datePicker, transitionName: "rmc-picker-popup-slide-fade", maskTransitionName: "rmc-picker-popup-fade", title: "Date picker", date: date, onDismiss: this.onDismiss, onChange: this.onChange }, React.createElement("button", { onClick: this.show }, date && format(date) || 'open'))));
	    };
	
	    return Demo;
	}(React.Component);
	
	Demo.defaultProps = {
	    mode: 'datetime',
	    locale: cn ? _zh_CN2.default : _en_US2.default
	};
	ReactDOM.render(React.createElement(Demo, null), document.getElementById('__react-content'));

/***/ },

/***/ 82:
80,

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(83);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Popup = __webpack_require__(261);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __assign = undefined && undefined.__assign || Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) {
	            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	    }
	    return t;
	};
	
	function noop() {}
	var PopupDatePicker = _react2.default.createClass({
	    displayName: 'PopupDatePicker',
	    getDefaultProps: function getDefaultProps() {
	        return {
	            onVisibleChange: noop,
	            prefixCls: 'rmc-picker-popup',
	            onChange: noop,
	            onDismiss: noop,
	            onPickerChange: noop
	        };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            pickerDate: null,
	            visible: this.props.visible || false
	        };
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        if ('visible' in nextProps) {
	            this.setVisibleState(nextProps.visible);
	        }
	    },
	    onPickerChange: function onPickerChange(pickerDate) {
	        this.setState({
	            pickerDate: pickerDate
	        });
	        if (this.props.datePicker.props.onDateChange) {
	            this.props.datePicker.props.onDateChange(pickerDate);
	        }
	    },
	    onOk: function onOk() {
	        var onChange = this.props.onChange;
	
	        if (onChange) {
	            onChange(this.datePicker.getDate());
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
	    saveRef: function saveRef(datePicker) {
	        this.datePicker = datePicker;
	    },
	    fireVisibleChange: function fireVisibleChange(visible) {
	        if (this.state.visible !== visible) {
	            if (!('visible' in this.props)) {
	                this.setVisibleState(visible);
	            }
	            var onVisibleChange = this.props.onVisibleChange;
	
	            if (onVisibleChange) {
	                onVisibleChange(visible);
	            }
	        }
	    },
	    render: function render() {
	        var dataPicker = _react2.default.cloneElement(this.props.datePicker, {
	            date: this.state.pickerDate || this.props.date,
	            onDateChange: this.onPickerChange,
	            ref: this.saveRef
	        });
	        return _react2.default.createElement(_Popup2.default, __assign({}, this.props, { onVisibleChange: this.fireVisibleChange, onOk: this.onOk, content: dataPicker, visible: this.state.visible }));
	    }
	});
	exports.default = PopupDatePicker;
	module.exports = exports['default'];

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(83);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcDialog = __webpack_require__(262);
	
	var _rcDialog2 = _interopRequireDefault(_rcDialog);
	
	var _PopupMixin = __webpack_require__(277);
	
	var _PopupMixin2 = _interopRequireDefault(_PopupMixin);
	
	var _rcTouchable = __webpack_require__(278);
	
	var _rcTouchable2 = _interopRequireDefault(_rcTouchable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var PopupPicker = _react2["default"].createClass({
	  displayName: 'PopupPicker',
	
	  mixins: [_PopupMixin2["default"]],
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rmc-picker-popup',
	      triggerType: 'onClick',
	      WrapComponent: 'span'
	    };
	  },
	  getModal: function getModal() {
	    var props = this.props;
	    if (!this.state.visible) {
	      return null;
	    }
	    var prefixCls = props.prefixCls;
	
	    return _react2["default"].createElement(
	      _rcDialog2["default"],
	      { prefixCls: '' + prefixCls, className: props.className || '', visible: true, closable: false, transitionName: props.transitionName || props.popupTransitionName, maskTransitionName: props.maskTransitionName, onClose: this.hide, style: props.style },
	      _react2["default"].createElement(
	        'div',
	        null,
	        _react2["default"].createElement(
	          'div',
	          { className: prefixCls + '-header' },
	          _react2["default"].createElement(
	            _rcTouchable2["default"],
	            { activeClassName: prefixCls + '-item-active' },
	            _react2["default"].createElement(
	              'div',
	              { className: prefixCls + '-item ' + prefixCls + '-header-left', onClick: this.onDismiss },
	              props.dismissText
	            )
	          ),
	          _react2["default"].createElement(
	            'div',
	            { className: prefixCls + '-item ' + prefixCls + '-title' },
	            props.title
	          ),
	          _react2["default"].createElement(
	            _rcTouchable2["default"],
	            { activeClassName: prefixCls + '-item-active' },
	            _react2["default"].createElement(
	              'div',
	              { className: prefixCls + '-item ' + prefixCls + '-header-right', onClick: this.onOk },
	              props.okText
	            )
	          )
	        ),
	        this.props.content
	      )
	    );
	  },
	  render: function render() {
	    return this.getRender();
	  }
	});
	exports["default"] = PopupPicker;
	module.exports = exports['default'];

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(83);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Dialog = __webpack_require__(263);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _getContainerRenderMixin = __webpack_require__(276);
	
	var _getContainerRenderMixin2 = _interopRequireDefault(_getContainerRenderMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var __assign = undefined && undefined.__assign || Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) {
	            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	    }
	    return t;
	};
	
	var DialogWrap = _react2["default"].createClass({
	    displayName: 'DialogWrap',
	
	    mixins: [(0, _getContainerRenderMixin2["default"])({
	        isVisible: function isVisible(instance) {
	            return instance.props.visible;
	        },
	
	        autoDestroy: false,
	        getComponent: function getComponent(instance, extra) {
	            return _react2["default"].createElement(_Dialog2["default"], __assign({}, instance.props, extra, { key: "dialog" }));
	        }
	    })],
	    getDefaultProps: function getDefaultProps() {
	        return {
	            visible: false
	        };
	    },
	    shouldComponentUpdate: function shouldComponentUpdate(_ref) {
	        var visible = _ref.visible;
	
	        return !!(this.props.visible || visible);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        if (this.props.visible) {
	            this.renderComponent({
	                afterClose: this.removeContainer,
	                onClose: function onClose() {},
	
	                visible: false
	            });
	        } else {
	            this.removeContainer();
	        }
	    },
	    getElement: function getElement(part) {
	        return this._component.getElement(part);
	    },
	    render: function render() {
	        return null;
	    }
	});
	exports["default"] = DialogWrap;
	module.exports = exports['default'];

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(83);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(114);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _KeyCode = __webpack_require__(264);
	
	var _KeyCode2 = _interopRequireDefault(_KeyCode);
	
	var _rcAnimate = __webpack_require__(265);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _LazyRenderBox = __webpack_require__(274);
	
	var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);
	
	var _getScrollBarSize = __webpack_require__(275);
	
	var _getScrollBarSize2 = _interopRequireDefault(_getScrollBarSize);
	
	var _objectAssign = __webpack_require__(86);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var __assign = undefined && undefined.__assign || Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) {
	            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	    }
	    return t;
	};
	
	var uuid = 0;
	var openCount = 0;
	/* eslint react/no-is-mounted:0 */
	function noop() {}
	function getScroll(w, top) {
	    var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	    var method = 'scroll' + (top ? 'Top' : 'Left');
	    if (typeof ret !== 'number') {
	        var d = w.document;
	        ret = d.documentElement[method];
	        if (typeof ret !== 'number') {
	            ret = d.body[method];
	        }
	    }
	    return ret;
	}
	function setTransformOrigin(node, value) {
	    var style = node.style;
	    ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
	        style[prefix + 'TransformOrigin'] = value;
	    });
	    style['transformOrigin'] = value;
	}
	function offset(el) {
	    var rect = el.getBoundingClientRect();
	    var pos = {
	        left: rect.left,
	        top: rect.top
	    };
	    var doc = el.ownerDocument;
	    var w = doc.defaultView || doc.parentWindow;
	    pos.left += getScroll(w);
	    pos.top += getScroll(w, true);
	    return pos;
	}
	var Dialog = _react2["default"].createClass({
	    displayName: 'Dialog',
	    getDefaultProps: function getDefaultProps() {
	        return {
	            afterClose: noop,
	            className: '',
	            mask: true,
	            visible: false,
	            keyboard: true,
	            closable: true,
	            maskClosable: true,
	            prefixCls: 'rc-dialog',
	            onClose: noop
	        };
	    },
	    componentWillMount: function componentWillMount() {
	        this.titleId = 'rcDialogTitle' + uuid++;
	    },
	    componentDidMount: function componentDidMount() {
	        this.componentDidUpdate({});
	    },
	    componentDidUpdate: function componentDidUpdate(prevProps) {
	        var props = this.props;
	        var mousePosition = this.props.mousePosition;
	        if (props.visible) {
	            // first show
	            if (!prevProps.visible) {
	                this.openTime = Date.now();
	                this.lastOutSideFocusNode = document.activeElement;
	                this.addScrollingEffect();
	                this.refs.wrap.focus();
	                var dialogNode = _reactDom2["default"].findDOMNode(this.refs.dialog);
	                if (mousePosition) {
	                    var elOffset = offset(dialogNode);
	                    setTransformOrigin(dialogNode, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px');
	                } else {
	                    setTransformOrigin(dialogNode, '');
	                }
	            }
	        } else if (prevProps.visible) {
	            if (props.mask && this.lastOutSideFocusNode) {
	                try {
	                    this.lastOutSideFocusNode.focus();
	                } catch (e) {
	                    this.lastOutSideFocusNode = null;
	                }
	                this.lastOutSideFocusNode = null;
	            }
	        }
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        if (this.props.visible) {
	            this.removeScrollingEffect();
	        }
	    },
	    onAnimateLeave: function onAnimateLeave() {
	        // need demo?
	        // https://github.com/react-component/dialog/pull/28
	        if (this.refs.wrap) {
	            this.refs.wrap.style.display = 'none';
	        }
	        this.removeScrollingEffect();
	        this.props.afterClose();
	    },
	    onMaskClick: function onMaskClick(e) {
	        // android trigger click on open (fastclick??)
	        if (Date.now() - this.openTime < 300) {
	            return;
	        }
	        if (e.target === e.currentTarget) {
	            this.close(e);
	        }
	    },
	    onKeyDown: function onKeyDown(e) {
	        var props = this.props;
	        if (props.keyboard && e.keyCode === _KeyCode2["default"].ESC) {
	            this.close(e);
	        }
	        // keep focus inside dialog
	        if (props.visible) {
	            if (e.keyCode === _KeyCode2["default"].TAB) {
	                var activeElement = document.activeElement;
	                var dialogRoot = this.refs.wrap;
	                var sentinel = this.refs.sentinel;
	                if (e.shiftKey) {
	                    if (activeElement === dialogRoot) {
	                        sentinel.focus();
	                    }
	                } else if (activeElement === this.refs.sentinel) {
	                    dialogRoot.focus();
	                }
	            }
	        }
	    },
	    getDialogElement: function getDialogElement() {
	        var props = this.props;
	        var closable = props.closable;
	        var prefixCls = props.prefixCls;
	        var dest = {};
	        if (props.width !== undefined) {
	            dest.width = props.width;
	        }
	        if (props.height !== undefined) {
	            dest.height = props.height;
	        }
	        var footer = void 0;
	        if (props.footer) {
	            footer = _react2["default"].createElement("div", { className: prefixCls + '-footer', ref: "footer" }, props.footer);
	        }
	        var header = void 0;
	        if (props.title) {
	            header = _react2["default"].createElement("div", { className: prefixCls + '-header', ref: "header" }, _react2["default"].createElement("div", { className: prefixCls + '-title', id: this.titleId }, props.title));
	        }
	        var closer = void 0;
	        if (closable) {
	            closer = _react2["default"].createElement("button", { onClick: this.close, "aria-label": "Close", className: prefixCls + '-close' }, _react2["default"].createElement("span", { className: prefixCls + '-close-x' }));
	        }
	        var style = (0, _objectAssign2["default"])({}, props.style, dest);
	        var transitionName = this.getTransitionName();
	        var dialogElement = _react2["default"].createElement(_LazyRenderBox2["default"], { key: "dialog-element", role: "document", ref: "dialog", style: style, className: prefixCls + ' ' + (props.className || ''), visible: props.visible }, _react2["default"].createElement("div", { className: prefixCls + '-content' }, closer, header, _react2["default"].createElement("div", __assign({ className: prefixCls + '-body', style: props.bodyStyle, ref: "body" }, props.bodyProps), props.children), footer), _react2["default"].createElement("div", { tabIndex: 0, ref: "sentinel", style: { width: 0, height: 0, overflow: 'hidden' } }, "sentinel"));
	        return _react2["default"].createElement(_rcAnimate2["default"], { key: "dialog", showProp: "visible", onLeave: this.onAnimateLeave, transitionName: transitionName, component: "", transitionAppear: true }, dialogElement);
	    },
	    getZIndexStyle: function getZIndexStyle() {
	        var style = {};
	        var props = this.props;
	        if (props.zIndex !== undefined) {
	            style.zIndex = props.zIndex;
	        }
	        return style;
	    },
	    getWrapStyle: function getWrapStyle() {
	        return (0, _objectAssign2["default"])({}, this.getZIndexStyle(), this.props.wrapStyle);
	    },
	    getMaskStyle: function getMaskStyle() {
	        return (0, _objectAssign2["default"])({}, this.getZIndexStyle(), this.props.maskStyle);
	    },
	    getMaskElement: function getMaskElement() {
	        var props = this.props;
	        var maskElement = void 0;
	        if (props.mask) {
	            var maskTransition = this.getMaskTransitionName();
	            maskElement = _react2["default"].createElement(_LazyRenderBox2["default"], __assign({ style: this.getMaskStyle(), key: "mask", className: props.prefixCls + '-mask', hiddenClassName: props.prefixCls + '-mask-hidden', visible: props.visible }, props.maskProps));
	            if (maskTransition) {
	                maskElement = _react2["default"].createElement(_rcAnimate2["default"], { key: "mask", showProp: "visible", transitionAppear: true, component: "", transitionName: maskTransition }, maskElement);
	            }
	        }
	        return maskElement;
	    },
	    getMaskTransitionName: function getMaskTransitionName() {
	        var props = this.props;
	        var transitionName = props.maskTransitionName;
	        var animation = props.maskAnimation;
	        if (!transitionName && animation) {
	            transitionName = props.prefixCls + '-' + animation;
	        }
	        return transitionName;
	    },
	    getTransitionName: function getTransitionName() {
	        var props = this.props;
	        var transitionName = props.transitionName;
	        var animation = props.animation;
	        if (!transitionName && animation) {
	            transitionName = props.prefixCls + '-' + animation;
	        }
	        return transitionName;
	    },
	    getElement: function getElement(part) {
	        return this.refs[part];
	    },
	    setScrollbar: function setScrollbar() {
	        if (this.bodyIsOverflowing && this.scrollbarWidth !== undefined) {
	            document.body.style.paddingRight = this.scrollbarWidth + 'px';
	        }
	    },
	    addScrollingEffect: function addScrollingEffect() {
	        openCount++;
	        if (openCount !== 1) {
	            return;
	        }
	        this.checkScrollbar();
	        this.setScrollbar();
	        document.body.style.overflow = 'hidden';
	        // this.adjustDialog();
	    },
	    removeScrollingEffect: function removeScrollingEffect() {
	        openCount--;
	        if (openCount !== 0) {
	            return;
	        }
	        document.body.style.overflow = '';
	        this.resetScrollbar();
	        // this.resetAdjustments();
	    },
	    close: function close(e) {
	        this.props.onClose(e);
	    },
	    checkScrollbar: function checkScrollbar() {
	        var fullWindowWidth = window.innerWidth;
	        if (!fullWindowWidth) {
	            var documentElementRect = document.documentElement.getBoundingClientRect();
	            fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
	        }
	        this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
	        if (this.bodyIsOverflowing) {
	            this.scrollbarWidth = (0, _getScrollBarSize2["default"])();
	        }
	    },
	    resetScrollbar: function resetScrollbar() {
	        document.body.style.paddingRight = '';
	    },
	    adjustDialog: function adjustDialog() {
	        if (this.refs.wrap && this.scrollbarWidth !== undefined) {
	            var modalIsOverflowing = this.refs.wrap.scrollHeight > document.documentElement.clientHeight;
	            this.refs.wrap.style.paddingLeft = (!this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '') + 'px';
	            this.refs.wrap.style.paddingRight = (this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : '') + 'px';
	        }
	    },
	    resetAdjustments: function resetAdjustments() {
	        if (this.refs.wrap) {
	            this.refs.wrap.style.paddingLeft = this.refs.wrap.style.paddingLeft = '';
	        }
	    },
	    render: function render() {
	        var props = this.props;
	        var prefixCls = props.prefixCls,
	            maskClosable = props.maskClosable;
	
	        var style = this.getWrapStyle();
	        // clear hide display
	        // and only set display after async anim, not here for hide
	        if (props.visible) {
	            style.display = null;
	        }
	        return _react2["default"].createElement("div", null, this.getMaskElement(), _react2["default"].createElement("div", __assign({ tabIndex: -1, onKeyDown: this.onKeyDown, className: prefixCls + '-wrap ' + (props.wrapClassName || ''), ref: "wrap", onClick: maskClosable ? this.onMaskClick : undefined, role: "dialog", "aria-labelledby": props.title ? this.titleId : null, style: style }, props.wrapProps), this.getDialogElement()));
	    }
	});
	exports["default"] = Dialog;
	module.exports = exports['default'];

/***/ },

/***/ 264:
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */
	
	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};
	
	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }
	
	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};
	
	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }
	
	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }
	
	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};
	
	module.exports = KeyCode;

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// export this package's api
	module.exports = __webpack_require__(266);

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(83);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ChildrenUtils = __webpack_require__(267);
	
	var _AnimateChild = __webpack_require__(268);
	
	var _AnimateChild2 = _interopRequireDefault(_AnimateChild);
	
	var _util = __webpack_require__(273);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var defaultKey = 'rc_animate_' + Date.now();
	
	
	function getChildrenFromProps(props) {
	  var children = props.children;
	  if (_react2["default"].isValidElement(children)) {
	    if (!children.key) {
	      return _react2["default"].cloneElement(children, {
	        key: defaultKey
	      });
	    }
	  }
	  return children;
	}
	
	function noop() {}
	
	var Animate = _react2["default"].createClass({
	  displayName: 'Animate',
	
	  propTypes: {
	    component: _react2["default"].PropTypes.any,
	    animation: _react2["default"].PropTypes.object,
	    transitionName: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.object]),
	    transitionEnter: _react2["default"].PropTypes.bool,
	    transitionAppear: _react2["default"].PropTypes.bool,
	    exclusive: _react2["default"].PropTypes.bool,
	    transitionLeave: _react2["default"].PropTypes.bool,
	    onEnd: _react2["default"].PropTypes.func,
	    onEnter: _react2["default"].PropTypes.func,
	    onLeave: _react2["default"].PropTypes.func,
	    onAppear: _react2["default"].PropTypes.func,
	    showProp: _react2["default"].PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      animation: {},
	      component: 'span',
	      transitionEnter: true,
	      transitionLeave: true,
	      transitionAppear: false,
	      onEnd: noop,
	      onEnter: noop,
	      onLeave: noop,
	      onAppear: noop
	    };
	  },
	  getInitialState: function getInitialState() {
	    this.currentlyAnimatingKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	    return {
	      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(this.props))
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var _this = this;
	
	    var showProp = this.props.showProp;
	    var children = this.state.children;
	    if (showProp) {
	      children = children.filter(function (child) {
	        return !!child.props[showProp];
	      });
	    }
	    children.forEach(function (child) {
	      if (child) {
	        _this.performAppear(child.key);
	      }
	    });
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var _this2 = this;
	
	    this.nextProps = nextProps;
	    var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
	    var props = this.props;
	    // exclusive needs immediate response
	    if (props.exclusive) {
	      Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
	        _this2.stop(key);
	      });
	    }
	    var showProp = props.showProp;
	    var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
	    // last props children if exclusive
	    var currentChildren = props.exclusive ? (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props)) : this.state.children;
	    // in case destroy in showProp mode
	    var newChildren = [];
	    if (showProp) {
	      currentChildren.forEach(function (currentChild) {
	        var nextChild = currentChild && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, currentChild.key);
	        var newChild = void 0;
	        if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
	          newChild = _react2["default"].cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
	        } else {
	          newChild = nextChild;
	        }
	        if (newChild) {
	          newChildren.push(newChild);
	        }
	      });
	      nextChildren.forEach(function (nextChild) {
	        if (!nextChild || !(0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, nextChild.key)) {
	          newChildren.push(nextChild);
	        }
	      });
	    } else {
	      newChildren = (0, _ChildrenUtils.mergeChildren)(currentChildren, nextChildren);
	    }
	
	    // need render to avoid update
	    this.setState({
	      children: newChildren
	    });
	
	    nextChildren.forEach(function (child) {
	      var key = child && child.key;
	      if (child && currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasPrev = child && (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	      if (showProp) {
	        var showInNext = child.props[showProp];
	        if (hasPrev) {
	          var showInNow = (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	          if (!showInNow && showInNext) {
	            _this2.keysToEnter.push(key);
	          }
	        } else if (showInNext) {
	          _this2.keysToEnter.push(key);
	        }
	      } else if (!hasPrev) {
	        _this2.keysToEnter.push(key);
	      }
	    });
	
	    currentChildren.forEach(function (child) {
	      var key = child && child.key;
	      if (child && currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasNext = child && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, key);
	      if (showProp) {
	        var showInNow = child.props[showProp];
	        if (hasNext) {
	          var showInNext = (0, _ChildrenUtils.findShownChildInChildrenByKey)(nextChildren, key, showProp);
	          if (!showInNext && showInNow) {
	            _this2.keysToLeave.push(key);
	          }
	        } else if (showInNow) {
	          _this2.keysToLeave.push(key);
	        }
	      } else if (!hasNext) {
	        _this2.keysToLeave.push(key);
	      }
	    });
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },
	  performEnter: function performEnter(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillEnter(this.handleDoneAdding.bind(this, key, 'enter'));
	    }
	  },
	  performAppear: function performAppear(key) {
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillAppear(this.handleDoneAdding.bind(this, key, 'appear'));
	    }
	  },
	  handleDoneAdding: function handleDoneAdding(key, type) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    if (!this.isValidChildByKey(currentChildren, key)) {
	      // exclusive will not need this
	      this.performLeave(key);
	    } else {
	      if (type === 'appear') {
	        if (_util2["default"].allowAppearCallback(props)) {
	          props.onAppear(key);
	          props.onEnd(key, true);
	        }
	      } else {
	        if (_util2["default"].allowEnterCallback(props)) {
	          props.onEnter(key);
	          props.onEnd(key, true);
	        }
	      }
	    }
	  },
	  performLeave: function performLeave(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillLeave(this.handleDoneLeaving.bind(this, key));
	    }
	  },
	  handleDoneLeaving: function handleDoneLeaving(key) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    // in case state change is too fast
	    if (this.isValidChildByKey(currentChildren, key)) {
	      this.performEnter(key);
	    } else {
	      var end = function end() {
	        if (_util2["default"].allowLeaveCallback(props)) {
	          props.onLeave(key);
	          props.onEnd(key, false);
	        }
	      };
	      /* eslint react/no-is-mounted:0 */
	      if (this.isMounted() && !(0, _ChildrenUtils.isSameChildren)(this.state.children, currentChildren, props.showProp)) {
	        this.setState({
	          children: currentChildren
	        }, end);
	      } else {
	        end();
	      }
	    }
	  },
	  isValidChildByKey: function isValidChildByKey(currentChildren, key) {
	    var showProp = this.props.showProp;
	    if (showProp) {
	      return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	    }
	    return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	  },
	  stop: function stop(key) {
	    delete this.currentlyAnimatingKeys[key];
	    var component = this.refs[key];
	    if (component) {
	      component.stop();
	    }
	  },
	  render: function render() {
	    var props = this.props;
	    this.nextProps = props;
	    var stateChildren = this.state.children;
	    var children = null;
	    if (stateChildren) {
	      children = stateChildren.map(function (child) {
	        if (child === null || child === undefined) {
	          return child;
	        }
	        if (!child.key) {
	          throw new Error('must set key for <rc-animate> children');
	        }
	        return _react2["default"].createElement(
	          _AnimateChild2["default"],
	          {
	            key: child.key,
	            ref: child.key,
	            animation: props.animation,
	            transitionName: props.transitionName,
	            transitionEnter: props.transitionEnter,
	            transitionAppear: props.transitionAppear,
	            transitionLeave: props.transitionLeave
	          },
	          child
	        );
	      });
	    }
	    var Component = props.component;
	    if (Component) {
	      var passedProps = props;
	      if (typeof Component === 'string') {
	        passedProps = {
	          className: props.className,
	          style: props.style
	        };
	      }
	      return _react2["default"].createElement(
	        Component,
	        passedProps,
	        children
	      );
	    }
	    return children[0] || null;
	  }
	});
	
	exports["default"] = Animate;
	module.exports = exports['default'];

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toArrayChildren = toArrayChildren;
	exports.findChildInChildrenByKey = findChildInChildrenByKey;
	exports.findShownChildInChildrenByKey = findShownChildInChildrenByKey;
	exports.findHiddenChildInChildrenByKey = findHiddenChildInChildrenByKey;
	exports.isSameChildren = isSameChildren;
	exports.mergeChildren = mergeChildren;
	
	var _react = __webpack_require__(83);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function toArrayChildren(children) {
	  var ret = [];
	  _react2["default"].Children.forEach(children, function (child) {
	    ret.push(child);
	  });
	  return ret;
	}
	
	function findChildInChildrenByKey(children, key) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (ret) {
	        return;
	      }
	      if (child && child.key === key) {
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}
	
	function findShownChildInChildrenByKey(children, key, showProp) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (child && child.key === key && child.props[showProp]) {
	        if (ret) {
	          throw new Error('two child with same key for <rc-animate> children');
	        }
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}
	
	function findHiddenChildInChildrenByKey(children, key, showProp) {
	  var found = 0;
	  if (children) {
	    children.forEach(function (child) {
	      if (found) {
	        return;
	      }
	      found = child && child.key === key && !child.props[showProp];
	    });
	  }
	  return found;
	}
	
	function isSameChildren(c1, c2, showProp) {
	  var same = c1.length === c2.length;
	  if (same) {
	    c1.forEach(function (child, index) {
	      var child2 = c2[index];
	      if (child && child2) {
	        if (child && !child2 || !child && child2) {
	          same = false;
	        } else if (child.key !== child2.key) {
	          same = false;
	        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
	          same = false;
	        }
	      }
	    });
	  }
	  return same;
	}
	
	function mergeChildren(prev, next) {
	  var ret = [];
	
	  // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	  var nextChildrenPending = {};
	  var pendingChildren = [];
	  prev.forEach(function (child) {
	    if (child && findChildInChildrenByKey(next, child.key)) {
	      if (pendingChildren.length) {
	        nextChildrenPending[child.key] = pendingChildren;
	        pendingChildren = [];
	      }
	    } else {
	      pendingChildren.push(child);
	    }
	  });
	
	  next.forEach(function (child) {
	    if (child && nextChildrenPending.hasOwnProperty(child.key)) {
	      ret = ret.concat(nextChildrenPending[child.key]);
	    }
	    ret.push(child);
	  });
	
	  ret = ret.concat(pendingChildren);
	
	  return ret;
	}

/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(83);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(114);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _cssAnimation = __webpack_require__(269);
	
	var _cssAnimation2 = _interopRequireDefault(_cssAnimation);
	
	var _util = __webpack_require__(273);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var transitionMap = {
	  enter: 'transitionEnter',
	  appear: 'transitionAppear',
	  leave: 'transitionLeave'
	};
	
	var AnimateChild = _react2["default"].createClass({
	  displayName: 'AnimateChild',
	
	  propTypes: {
	    children: _react2["default"].PropTypes.any
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.stop();
	  },
	  componentWillEnter: function componentWillEnter(done) {
	    if (_util2["default"].isEnterSupported(this.props)) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  },
	  componentWillAppear: function componentWillAppear(done) {
	    if (_util2["default"].isAppearSupported(this.props)) {
	      this.transition('appear', done);
	    } else {
	      done();
	    }
	  },
	  componentWillLeave: function componentWillLeave(done) {
	    if (_util2["default"].isLeaveSupported(this.props)) {
	      this.transition('leave', done);
	    } else {
	      // always sync, do not interupt with react component life cycle
	      // update hidden -> animate hidden ->
	      // didUpdate -> animate leave -> unmount (if animate is none)
	      done();
	    }
	  },
	  transition: function transition(animationType, finishCallback) {
	    var _this = this;
	
	    var node = _reactDom2["default"].findDOMNode(this);
	    var props = this.props;
	    var transitionName = props.transitionName;
	    var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	    this.stop();
	    var end = function end() {
	      _this.stopper = null;
	      finishCallback();
	    };
	    if ((_cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
	      var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
	      var activeName = name + '-active';
	      if (nameIsObj && transitionName[animationType + 'Active']) {
	        activeName = transitionName[animationType + 'Active'];
	      }
	      this.stopper = (0, _cssAnimation2["default"])(node, {
	        name: name,
	        active: activeName
	      }, end);
	    } else {
	      this.stopper = props.animation[animationType](node, end);
	    }
	  },
	  stop: function stop() {
	    var stopper = this.stopper;
	    if (stopper) {
	      this.stopper = null;
	      stopper.stop();
	    }
	  },
	  render: function render() {
	    return this.props.children;
	  }
	});
	
	exports["default"] = AnimateChild;
	module.exports = exports['default'];

/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _Event = __webpack_require__(270);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	var _componentClasses = __webpack_require__(271);
	
	var _componentClasses2 = _interopRequireDefault(_componentClasses);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var isCssAnimationSupported = _Event2["default"].endEvents.length !== 0;
	
	
	var capitalPrefixes = ['Webkit', 'Moz', 'O',
	// ms is special .... !
	'ms'];
	var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
	
	function getStyleProperty(node, name) {
	  var style = window.getComputedStyle(node);
	
	  var ret = '';
	  for (var i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}
	
	function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
	    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
	    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
	    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
	    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
	}
	
	function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
	}
	
	var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
	  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	  var className = nameIsObj ? transitionName.name : transitionName;
	  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
	  var end = endCallback;
	  var start = void 0;
	  var active = void 0;
	  var nodeClasses = (0, _componentClasses2["default"])(node);
	
	  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
	    end = endCallback.end;
	    start = endCallback.start;
	    active = endCallback.active;
	  }
	
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    nodeClasses.remove(className);
	    nodeClasses.remove(activeClassName);
	
	    _Event2["default"].removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional end is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (end) {
	      end();
	    }
	  };
	
	  _Event2["default"].addEndEventListener(node, node.rcEndListener);
	
	  if (start) {
	    start();
	  }
	  nodeClasses.add(className);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    nodeClasses.add(activeClassName);
	    if (active) {
	      setTimeout(active, 0);
	    }
	    fixBrowserByTimeout(node);
	    // 30ms for firefox
	  }, 30);
	
	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
	};
	
	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    _Event2["default"].removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  _Event2["default"].addEndEventListener(node, node.rcEndListener);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
	};
	
	cssAnimation.setTransition = function (node, p, value) {
	  var property = p;
	  var v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  capitalPrefixes.forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};
	
	cssAnimation.isCssAnimationSupported = isCssAnimationSupported;
	
	exports["default"] = cssAnimation;
	module.exports = exports['default'];

/***/ },

/***/ 270:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },
	
	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	      var baseEvents = EVENT_NAME_MAP[baseEventName];
	      for (var styleName in baseEvents) {
	        if (styleName in style) {
	          endEvents.push(baseEvents[styleName]);
	          break;
	        }
	      }
	    }
	  }
	}
	
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	  detectEvents();
	}
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	
	  endEvents: endEvents,
	
	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	exports["default"] = TransitionEvents;
	module.exports = exports['default'];

/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	try {
	  var index = __webpack_require__(272);
	} catch (err) {
	  var index = __webpack_require__(272);
	}
	
	/**
	 * Whitespace regexp.
	 */
	
	var re = /\s+/;
	
	/**
	 * toString reference.
	 */
	
	var toString = Object.prototype.toString;
	
	/**
	 * Wrap `el` in a `ClassList`.
	 *
	 * @param {Element} el
	 * @return {ClassList}
	 * @api public
	 */
	
	module.exports = function(el){
	  return new ClassList(el);
	};
	
	/**
	 * Initialize a new ClassList for `el`.
	 *
	 * @param {Element} el
	 * @api private
	 */
	
	function ClassList(el) {
	  if (!el || !el.nodeType) {
	    throw new Error('A DOM element reference is required');
	  }
	  this.el = el;
	  this.list = el.classList;
	}
	
	/**
	 * Add class `name` if not already present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.add = function(name){
	  // classList
	  if (this.list) {
	    this.list.add(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (!~i) arr.push(name);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	/**
	 * Remove class `name` when present, or
	 * pass a regular expression to remove
	 * any which match.
	 *
	 * @param {String|RegExp} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.remove = function(name){
	  if ('[object RegExp]' == toString.call(name)) {
	    return this.removeMatching(name);
	  }
	
	  // classList
	  if (this.list) {
	    this.list.remove(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (~i) arr.splice(i, 1);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	/**
	 * Remove all classes matching `re`.
	 *
	 * @param {RegExp} re
	 * @return {ClassList}
	 * @api private
	 */
	
	ClassList.prototype.removeMatching = function(re){
	  var arr = this.array();
	  for (var i = 0; i < arr.length; i++) {
	    if (re.test(arr[i])) {
	      this.remove(arr[i]);
	    }
	  }
	  return this;
	};
	
	/**
	 * Toggle class `name`, can force state via `force`.
	 *
	 * For browsers that support classList, but do not support `force` yet,
	 * the mistake will be detected and corrected.
	 *
	 * @param {String} name
	 * @param {Boolean} force
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.toggle = function(name, force){
	  // classList
	  if (this.list) {
	    if ("undefined" !== typeof force) {
	      if (force !== this.list.toggle(name, force)) {
	        this.list.toggle(name); // toggle again to correct
	      }
	    } else {
	      this.list.toggle(name);
	    }
	    return this;
	  }
	
	  // fallback
	  if ("undefined" !== typeof force) {
	    if (!force) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  } else {
	    if (this.has(name)) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return an array of classes.
	 *
	 * @return {Array}
	 * @api public
	 */
	
	ClassList.prototype.array = function(){
	  var className = this.el.getAttribute('class') || '';
	  var str = className.replace(/^\s+|\s+$/g, '');
	  var arr = str.split(re);
	  if ('' === arr[0]) arr.shift();
	  return arr;
	};
	
	/**
	 * Check if class `name` is present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.has =
	ClassList.prototype.contains = function(name){
	  return this.list
	    ? this.list.contains(name)
	    : !! ~index(this.array(), name);
	};


/***/ },

/***/ 272:
/***/ function(module, exports) {

	module.exports = function(arr, obj){
	  if (arr.indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },

/***/ 273:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var util = {
	  isAppearSupported: function isAppearSupported(props) {
	    return props.transitionName && props.transitionAppear || props.animation.appear;
	  },
	  isEnterSupported: function isEnterSupported(props) {
	    return props.transitionName && props.transitionEnter || props.animation.enter;
	  },
	  isLeaveSupported: function isLeaveSupported(props) {
	    return props.transitionName && props.transitionLeave || props.animation.leave;
	  },
	  allowAppearCallback: function allowAppearCallback(props) {
	    return props.transitionAppear || props.animation.appear;
	  },
	  allowEnterCallback: function allowEnterCallback(props) {
	    return props.transitionEnter || props.animation.enter;
	  },
	  allowLeaveCallback: function allowLeaveCallback(props) {
	    return props.transitionLeave || props.animation.leave;
	  }
	};
	exports["default"] = util;
	module.exports = exports['default'];

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(83);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(86);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var __assign = undefined && undefined.__assign || Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) {
	            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	    }
	    return t;
	};
	
	var LazyRenderBox = _react2["default"].createClass({
	    displayName: 'LazyRenderBox',
	    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	        return !!nextProps.hiddenClassName || !!nextProps.visible;
	    },
	    render: function render() {
	        var className = this.props.className;
	        if (!!this.props.hiddenClassName && !this.props.visible) {
	            className += ' ' + this.props.hiddenClassName;
	        }
	        var props = (0, _objectAssign2["default"])({}, this.props);
	        delete props.hiddenClassName;
	        delete props.visible;
	        props.className = className;
	        return _react2["default"].createElement("div", __assign({}, props));
	    }
	});
	exports["default"] = LazyRenderBox;
	module.exports = exports['default'];

/***/ },

/***/ 275:
/***/ function(module, exports) {

	'use strict';
	
	var cached = void 0;
	
	function getScrollBarSize(fresh) {
	  if (fresh || cached === undefined) {
	    var inner = document.createElement('div');
	    inner.style.width = '100%';
	    inner.style.height = '200px';
	
	    var outer = document.createElement('div');
	    var outerStyle = outer.style;
	
	    outerStyle.position = 'absolute';
	    outerStyle.top = 0;
	    outerStyle.left = 0;
	    outerStyle.pointerEvents = 'none';
	    outerStyle.visibility = 'hidden';
	    outerStyle.width = '200px';
	    outerStyle.height = '150px';
	    outerStyle.overflow = 'hidden';
	
	    outer.appendChild(inner);
	
	    document.body.appendChild(outer);
	
	    var widthContained = inner.offsetWidth;
	    outer.style.overflow = 'scroll';
	    var widthScroll = inner.offsetWidth;
	
	    if (widthContained === widthScroll) {
	      widthScroll = outer.clientWidth;
	    }
	
	    document.body.removeChild(outer);
	
	    cached = widthContained - widthScroll;
	  }
	  return cached;
	}
	
	module.exports = getScrollBarSize;

/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports["default"] = getContainerRenderMixin;
	
	var _reactDom = __webpack_require__(114);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function defaultGetContainer() {
	  var container = document.createElement('div');
	  document.body.appendChild(container);
	  return container;
	}
	
	function getContainerRenderMixin(config) {
	  var _config$autoMount = config.autoMount;
	  var autoMount = _config$autoMount === undefined ? true : _config$autoMount;
	  var _config$autoDestroy = config.autoDestroy;
	  var autoDestroy = _config$autoDestroy === undefined ? true : _config$autoDestroy;
	  var isVisible = config.isVisible;
	  var getComponent = config.getComponent;
	  var _config$getContainer = config.getContainer;
	  var getContainer = _config$getContainer === undefined ? defaultGetContainer : _config$getContainer;
	
	
	  var mixin = void 0;
	
	  function _renderComponent(instance, componentArg, ready) {
	    if (!isVisible || instance._component || isVisible(instance)) {
	      if (!instance._container) {
	        instance._container = getContainer(instance);
	      }
	      _reactDom2["default"].unstable_renderSubtreeIntoContainer(instance, getComponent(instance, componentArg), instance._container, function callback() {
	        instance._component = this;
	        if (ready) {
	          ready.call(this);
	        }
	      });
	    }
	  }
	
	  if (autoMount) {
	    mixin = _extends({}, mixin, {
	      componentDidMount: function componentDidMount() {
	        _renderComponent(this);
	      },
	      componentDidUpdate: function componentDidUpdate() {
	        _renderComponent(this);
	      }
	    });
	  }
	
	  if (!autoMount || !autoDestroy) {
	    mixin = _extends({}, mixin, {
	      renderComponent: function renderComponent(componentArg, ready) {
	        _renderComponent(this, componentArg, ready);
	      }
	    });
	  }
	
	  function _removeContainer(instance) {
	    if (instance._container) {
	      var container = instance._container;
	      _reactDom2["default"].unmountComponentAtNode(container);
	      container.parentNode.removeChild(container);
	      instance._container = null;
	    }
	  }
	
	  if (autoDestroy) {
	    mixin = _extends({}, mixin, {
	      componentWillUnmount: function componentWillUnmount() {
	        _removeContainer(this);
	      }
	    });
	  } else {
	    mixin = _extends({}, mixin, {
	      removeContainer: function removeContainer() {
	        _removeContainer(this);
	      }
	    });
	  }
	
	  return mixin;
	}
	module.exports = exports['default'];

/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(83);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function noop() {}
	exports["default"] = {
	    getDefaultProps: function getDefaultProps() {
	        return {
	            onVisibleChange: noop,
	            okText: 'Ok',
	            dismissText: 'Dismiss',
	            title: '',
	            onOk: noop,
	            onDismiss: noop
	        };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            visible: this.props.visible || false
	        };
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        if ('visible' in nextProps) {
	            this.setVisibleState(nextProps.visible);
	        }
	    },
	    setVisibleState: function setVisibleState(visible) {
	        this.setState({
	            visible: visible
	        });
	    },
	    fireVisibleChange: function fireVisibleChange(visible) {
	        if (this.state.visible !== visible) {
	            if (!('visible' in this.props)) {
	                this.setVisibleState(visible);
	            }
	            this.props.onVisibleChange(visible);
	        }
	    },
	    getRender: function getRender() {
	        var props = this.props;
	        var children = props.children;
	        if (!children) {
	            return this.getModal();
	        }
	        var _props = this.props,
	            WrapComponent = _props.WrapComponent,
	            disabled = _props.disabled;
	
	        var child = children;
	        var newChildProps = {};
	        if (!disabled) {
	            newChildProps[props.triggerType] = this.onTriggerClick;
	        }
	        return _react2["default"].createElement(
	            WrapComponent,
	            { style: props.wrapStyle },
	            _react2["default"].cloneElement(child, newChildProps),
	            this.getModal()
	        );
	    },
	    onTriggerClick: function onTriggerClick(e) {
	        var child = this.props.children;
	        var childProps = child.props || {};
	        if (childProps[this.props.triggerType]) {
	            childProps[this.props.triggerType](e);
	        }
	        this.fireVisibleChange(!this.state.visible);
	    },
	    onOk: function onOk() {
	        this.props.onOk();
	        this.fireVisibleChange(false);
	    },
	    onDismiss: function onDismiss() {
	        this.props.onDismiss();
	        this.fireVisibleChange(false);
	    },
	    hide: function hide() {
	        this.fireVisibleChange(false);
	    }
	};
	module.exports = exports['default'];

/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	// inspired by react-native
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(83);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(86);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _reactDom = __webpack_require__(114);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function keyMirror(obj) {
	    Object.keys(obj).forEach(function (k) {
	        return obj[k] = k;
	    });
	    return obj;
	}
	function copy(from, list) {
	    var to = {};
	    list.forEach(function (k) {
	        to[k] = from[k];
	    });
	    return to;
	}
	function extractSingleTouch(nativeEvent) {
	    var touches = nativeEvent.touches;
	    var changedTouches = nativeEvent.changedTouches;
	    var hasTouches = touches && touches.length > 0;
	    var hasChangedTouches = changedTouches && changedTouches.length > 0;
	    return !hasTouches && hasChangedTouches ? changedTouches[0] : hasTouches ? touches[0] : nativeEvent;
	}
	/**
	 * Touchable states.
	 */
	var States = keyMirror({
	    NOT_RESPONDER: null,
	    RESPONDER_INACTIVE_PRESS_IN: null,
	    RESPONDER_INACTIVE_PRESS_OUT: null,
	    RESPONDER_ACTIVE_PRESS_IN: null,
	    RESPONDER_ACTIVE_PRESS_OUT: null,
	    RESPONDER_ACTIVE_LONG_PRESS_IN: null,
	    RESPONDER_ACTIVE_LONG_PRESS_OUT: null,
	    ERROR: null
	});
	/**
	 * Quick lookup map for states that are considered to be "active"
	 */
	var IsActive = {
	    RESPONDER_ACTIVE_PRESS_OUT: true,
	    RESPONDER_ACTIVE_PRESS_IN: true
	};
	/**
	 * Quick lookup for states that are considered to be "pressing" and are
	 * therefore eligible to result in a "selection" if the press stops.
	 */
	var IsPressingIn = {
	    RESPONDER_INACTIVE_PRESS_IN: true,
	    RESPONDER_ACTIVE_PRESS_IN: true,
	    RESPONDER_ACTIVE_LONG_PRESS_IN: true
	};
	var IsLongPressingIn = {
	    RESPONDER_ACTIVE_LONG_PRESS_IN: true
	};
	/**
	 * Inputs to the state machine.
	 */
	var Signals = keyMirror({
	    DELAY: null,
	    RESPONDER_GRANT: null,
	    RESPONDER_RELEASE: null,
	    RESPONDER_TERMINATED: null,
	    ENTER_PRESS_RECT: null,
	    LEAVE_PRESS_RECT: null,
	    LONG_PRESS_DETECTED: null
	});
	/**
	 * Mapping from States x Signals => States
	 */
	var Transitions = {
	    NOT_RESPONDER: {
	        DELAY: States.ERROR,
	        RESPONDER_GRANT: States.RESPONDER_INACTIVE_PRESS_IN,
	        RESPONDER_RELEASE: States.ERROR,
	        RESPONDER_TERMINATED: States.ERROR,
	        ENTER_PRESS_RECT: States.ERROR,
	        LEAVE_PRESS_RECT: States.ERROR,
	        LONG_PRESS_DETECTED: States.ERROR
	    },
	    RESPONDER_INACTIVE_PRESS_IN: {
	        DELAY: States.RESPONDER_ACTIVE_PRESS_IN,
	        RESPONDER_GRANT: States.ERROR,
	        RESPONDER_RELEASE: States.NOT_RESPONDER,
	        RESPONDER_TERMINATED: States.NOT_RESPONDER,
	        ENTER_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_IN,
	        LEAVE_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_OUT,
	        LONG_PRESS_DETECTED: States.ERROR
	    },
	    RESPONDER_INACTIVE_PRESS_OUT: {
	        DELAY: States.RESPONDER_ACTIVE_PRESS_OUT,
	        RESPONDER_GRANT: States.ERROR,
	        RESPONDER_RELEASE: States.NOT_RESPONDER,
	        RESPONDER_TERMINATED: States.NOT_RESPONDER,
	        ENTER_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_IN,
	        LEAVE_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_OUT,
	        LONG_PRESS_DETECTED: States.ERROR
	    },
	    RESPONDER_ACTIVE_PRESS_IN: {
	        DELAY: States.ERROR,
	        RESPONDER_GRANT: States.ERROR,
	        RESPONDER_RELEASE: States.NOT_RESPONDER,
	        RESPONDER_TERMINATED: States.NOT_RESPONDER,
	        ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_IN,
	        LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_OUT,
	        LONG_PRESS_DETECTED: States.RESPONDER_ACTIVE_LONG_PRESS_IN
	    },
	    RESPONDER_ACTIVE_PRESS_OUT: {
	        DELAY: States.ERROR,
	        RESPONDER_GRANT: States.ERROR,
	        RESPONDER_RELEASE: States.NOT_RESPONDER,
	        RESPONDER_TERMINATED: States.NOT_RESPONDER,
	        ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_IN,
	        LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_OUT,
	        LONG_PRESS_DETECTED: States.ERROR
	    },
	    RESPONDER_ACTIVE_LONG_PRESS_IN: {
	        DELAY: States.ERROR,
	        RESPONDER_GRANT: States.ERROR,
	        RESPONDER_RELEASE: States.NOT_RESPONDER,
	        RESPONDER_TERMINATED: States.NOT_RESPONDER,
	        ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_IN,
	        LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_OUT,
	        LONG_PRESS_DETECTED: States.RESPONDER_ACTIVE_LONG_PRESS_IN
	    },
	    RESPONDER_ACTIVE_LONG_PRESS_OUT: {
	        DELAY: States.ERROR,
	        RESPONDER_GRANT: States.ERROR,
	        RESPONDER_RELEASE: States.NOT_RESPONDER,
	        RESPONDER_TERMINATED: States.NOT_RESPONDER,
	        ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_IN,
	        LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_OUT,
	        LONG_PRESS_DETECTED: States.ERROR
	    },
	    error: {
	        DELAY: States.NOT_RESPONDER,
	        RESPONDER_GRANT: States.RESPONDER_INACTIVE_PRESS_IN,
	        RESPONDER_RELEASE: States.NOT_RESPONDER,
	        RESPONDER_TERMINATED: States.NOT_RESPONDER,
	        ENTER_PRESS_RECT: States.NOT_RESPONDER,
	        LEAVE_PRESS_RECT: States.NOT_RESPONDER,
	        LONG_PRESS_DETECTED: States.NOT_RESPONDER
	    }
	};
	// ==== Typical Constants for integrating into UI components ====
	// const HIT_EXPAND_PX = 20;
	// const HIT_VERT_OFFSET_PX = 10;
	var HIGHLIGHT_DELAY_MS = 130;
	var PRESS_EXPAND_PX = 20;
	var LONG_PRESS_THRESHOLD = 500;
	var LONG_PRESS_DELAY_MS = LONG_PRESS_THRESHOLD - HIGHLIGHT_DELAY_MS;
	var LONG_PRESS_ALLOWED_MOVEMENT = 10;
	var lastClickTime = 0;
	var pressDelay = 200;
	function isAllowPress() {
	    // avoid click penetration
	    return Date.now() - lastClickTime >= pressDelay;
	}
	var Touchable = _react2["default"].createClass({
	    displayName: 'Touchable',
	    getDefaultProps: function getDefaultProps() {
	        return {
	            disabled: false,
	            delayPressIn: HIGHLIGHT_DELAY_MS,
	            delayLongPress: LONG_PRESS_DELAY_MS,
	            delayPressOut: 100,
	            pressRetentionOffset: {
	                left: PRESS_EXPAND_PX,
	                right: PRESS_EXPAND_PX,
	                top: PRESS_EXPAND_PX,
	                bottom: PRESS_EXPAND_PX
	            },
	            hitSlop: undefined,
	            longPressCancelsPress: true
	        };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            active: false
	        };
	    },
	    componentWillMount: function componentWillMount() {
	        this.touchable = { touchState: undefined };
	    },
	    componentDidMount: function componentDidMount() {
	        this.root = _reactDom2["default"].findDOMNode(this);
	    },
	    componentDidUpdate: function componentDidUpdate() {
	        this.root = _reactDom2["default"].findDOMNode(this);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        if (this.releaseLockTimer) {
	            clearTimeout(this.releaseLockTimer);
	        }
	        if (this.touchableDelayTimeout) {
	            clearTimeout(this.touchableDelayTimeout);
	        }
	        if (this.longPressDelayTimeout) {
	            clearTimeout(this.longPressDelayTimeout);
	        }
	        if (this.pressOutDelayTimeout) {
	            clearTimeout(this.pressOutDelayTimeout);
	        }
	    },
	    callChildEvent: function callChildEvent(event, e) {
	        var childHandle = this.props.children.props[event];
	        if (childHandle) {
	            childHandle(e);
	        }
	    },
	    onTouchStart: function onTouchStart(e) {
	        this.callChildEvent('onTouchStart', e);
	        this.lockMouse = true;
	        if (this.releaseLockTimer) {
	            clearTimeout(this.releaseLockTimer);
	        }
	        this.touchableHandleResponderGrant(e.nativeEvent);
	    },
	    onTouchMove: function onTouchMove(e) {
	        this.callChildEvent('onTouchMove', e);
	        this.touchableHandleResponderMove(e.nativeEvent);
	    },
	    onTouchEnd: function onTouchEnd(e) {
	        var _this = this;
	
	        this.callChildEvent('onTouchEnd', e);
	        this.releaseLockTimer = setTimeout(function () {
	            _this.lockMouse = false;
	        }, 300);
	        this.touchableHandleResponderRelease(e.nativeEvent);
	    },
	    onTouchCancel: function onTouchCancel(e) {
	        var _this2 = this;
	
	        this.callChildEvent('onTouchCancel', e);
	        this.releaseLockTimer = setTimeout(function () {
	            _this2.lockMouse = false;
	        }, 300);
	        this.touchableHandleResponderTerminate(e.nativeEvent);
	    },
	    onMouseDown: function onMouseDown(e) {
	        this.callChildEvent('onMouseDown', e);
	        if (this.lockMouse) {
	            return;
	        }
	        this.touchableHandleResponderGrant(e.nativeEvent);
	        document.addEventListener('mousemove', this.touchableHandleResponderMove, false);
	        document.addEventListener('mouseup', this.onMouseUp, false);
	    },
	    onMouseUp: function onMouseUp(e) {
	        document.removeEventListener('mousemove', this.touchableHandleResponderMove, false);
	        document.removeEventListener('mouseup', this.onMouseUp, false);
	        this.touchableHandleResponderRelease(e);
	    },
	    _remeasureMetricsOnInit: function _remeasureMetricsOnInit(e) {
	        var root = this.root;
	
	        var touch = extractSingleTouch(e);
	        var boundingRect = root.getBoundingClientRect();
	        this.touchable = {
	            touchState: this.touchable.touchState,
	            startMouse: {
	                pageX: touch.pageX,
	                pageY: touch.pageY
	            },
	            positionOnGrant: {
	                left: boundingRect.left + window.pageXOffset,
	                top: boundingRect.top + window.pageYOffset,
	                width: boundingRect.width,
	                height: boundingRect.height,
	                clientLeft: boundingRect.left,
	                clientTop: boundingRect.top
	            }
	        };
	    },
	    touchableHandleResponderGrant: function touchableHandleResponderGrant(e) {
	        var _this3 = this;
	
	        this.touchable.touchState = States.NOT_RESPONDER;
	        if (this.pressOutDelayTimeout) {
	            clearTimeout(this.pressOutDelayTimeout);
	            this.pressOutDelayTimeout = null;
	        }
	        if (!isAllowPress()) {
	            return;
	        }
	        this._remeasureMetricsOnInit(e);
	        this._receiveSignal(Signals.RESPONDER_GRANT, e);
	        var delayMS = this.props.delayPressIn;
	        if (delayMS) {
	            this.touchableDelayTimeout = setTimeout(function () {
	                _this3._handleDelay(e);
	            }, delayMS);
	        } else {
	            this._handleDelay(e);
	        }
	        var longDelayMS = this.props.delayLongPress;
	        this.longPressDelayTimeout = setTimeout(function () {
	            _this3._handleLongDelay(e);
	        }, longDelayMS + delayMS);
	    },
	    checkScroll: function checkScroll(e) {
	        var positionOnGrant = this.touchable.positionOnGrant;
	        // container or window scroll
	        var boundingRect = this.root.getBoundingClientRect();
	        if (boundingRect.left !== positionOnGrant.clientLeft || boundingRect.top !== positionOnGrant.clientTop) {
	            this._receiveSignal(Signals.RESPONDER_TERMINATED, e);
	            return false;
	        }
	    },
	    touchableHandleResponderRelease: function touchableHandleResponderRelease(e) {
	        if (!isAllowPress()) {
	            this._receiveSignal(Signals.RESPONDER_TERMINATED, e);
	            return;
	        }
	        var touch = extractSingleTouch(e);
	        if (Math.abs(touch.pageX - this.touchable.startMouse.pageX) > 30 || Math.abs(touch.pageY - this.touchable.startMouse.pageY) > 30) {
	            this._receiveSignal(Signals.RESPONDER_TERMINATED, e);
	            return;
	        }
	        if (this.checkScroll(e) === false) {
	            return;
	        }
	        this._receiveSignal(Signals.RESPONDER_RELEASE, e);
	    },
	    touchableHandleResponderTerminate: function touchableHandleResponderTerminate(e) {
	        this._receiveSignal(Signals.RESPONDER_TERMINATED, e);
	    },
	    checkTouchWithinActive: function checkTouchWithinActive(e) {
	        var positionOnGrant = this.touchable.positionOnGrant;
	        var _props = this.props,
	            pressRetentionOffset = _props.pressRetentionOffset,
	            hitSlop = _props.hitSlop;
	
	        var pressExpandLeft = pressRetentionOffset.left;
	        var pressExpandTop = pressRetentionOffset.top;
	        var pressExpandRight = pressRetentionOffset.right;
	        var pressExpandBottom = pressRetentionOffset.bottom;
	        if (hitSlop) {
	            pressExpandLeft += hitSlop.left;
	            pressExpandTop += hitSlop.top;
	            pressExpandRight += hitSlop.right;
	            pressExpandBottom += hitSlop.bottom;
	        }
	        var touch = extractSingleTouch(e);
	        var pageX = touch && touch.pageX;
	        var pageY = touch && touch.pageY;
	        return pageX > positionOnGrant.left - pressExpandLeft && pageY > positionOnGrant.top - pressExpandTop && pageX < positionOnGrant.left + positionOnGrant.width + pressExpandRight && pageY < positionOnGrant.top + positionOnGrant.height + pressExpandBottom;
	    },
	    touchableHandleResponderMove: function touchableHandleResponderMove(e) {
	        // Measurement may not have returned yet.
	        if (!this.touchable.dimensionsOnActivate || this.touchable.touchState === States.NOT_RESPONDER) {
	            return;
	        }
	        // Not enough time elapsed yet, wait for highlight -
	        // this is just a perf optimization.
	        if (this.touchable.touchState === States.RESPONDER_INACTIVE_PRESS_IN) {
	            return;
	        }
	        var touch = extractSingleTouch(e);
	        var pageX = touch && touch.pageX;
	        var pageY = touch && touch.pageY;
	        if (this.pressInLocation) {
	            var movedDistance = this._getDistanceBetweenPoints(pageX, pageY, this.pressInLocation.pageX, this.pressInLocation.pageY);
	            if (movedDistance > LONG_PRESS_ALLOWED_MOVEMENT) {
	                this._cancelLongPressDelayTimeout();
	            }
	        }
	        if (this.checkTouchWithinActive(e)) {
	            this._receiveSignal(Signals.ENTER_PRESS_RECT, e);
	            var curState = this.touchable.touchState;
	            if (curState === States.RESPONDER_INACTIVE_PRESS_IN) {
	                this._cancelLongPressDelayTimeout();
	            }
	        } else {
	            this._cancelLongPressDelayTimeout();
	            this._receiveSignal(Signals.LEAVE_PRESS_RECT, e);
	        }
	    },
	    touchableHandleActivePressIn: function touchableHandleActivePressIn(e) {
	        this.setActive(true);
	        if (this.props.onPressIn) {
	            this.props.onPressIn(e);
	        }
	    },
	    touchableHandleActivePressOut: function touchableHandleActivePressOut(e) {
	        this.setActive(false);
	        if (this.props.onPressOut) {
	            this.props.onPressOut(e);
	        }
	    },
	    touchableHandlePress: function touchableHandlePress(e) {
	        if (this.props.onPress) {
	            this.props.onPress(e);
	        }
	        lastClickTime = Date.now();
	    },
	    touchableHandleLongPress: function touchableHandleLongPress(e) {
	        if (this.props.onLongPress) {
	            this.props.onLongPress(e);
	        }
	    },
	    setActive: function setActive(active) {
	        if (this.props.activeClassName || this.props.activeStyle) {
	            this.setState({
	                active: active
	            });
	        }
	    },
	    _remeasureMetricsOnActivation: function _remeasureMetricsOnActivation() {
	        this.touchable.dimensionsOnActivate = this.touchable.positionOnGrant;
	    },
	    _handleDelay: function _handleDelay(e) {
	        this.touchableDelayTimeout = null;
	        this._receiveSignal(Signals.DELAY, e);
	    },
	    _handleLongDelay: function _handleLongDelay(e) {
	        this.longPressDelayTimeout = null;
	        var curState = this.touchable.touchState;
	        if (curState !== States.RESPONDER_ACTIVE_PRESS_IN && curState !== States.RESPONDER_ACTIVE_LONG_PRESS_IN) {
	            console.error('Attempted to transition from state `' + curState + '` to `' + States.RESPONDER_ACTIVE_LONG_PRESS_IN + '`, which is not supported. This is ' + 'most likely due to `Touchable.longPressDelayTimeout` not being cancelled.');
	        } else {
	            this._receiveSignal(Signals.LONG_PRESS_DETECTED, e);
	        }
	    },
	    _receiveSignal: function _receiveSignal(signal, e) {
	        var curState = this.touchable.touchState;
	        var nextState = Transitions[curState] && Transitions[curState][signal];
	        if (!nextState) {
	            return;
	        }
	        if (nextState === States.ERROR) {
	            return;
	        }
	        if (curState !== nextState) {
	            this._performSideEffectsForTransition(curState, nextState, signal, e);
	            this.touchable.touchState = nextState;
	        }
	    },
	    _cancelLongPressDelayTimeout: function _cancelLongPressDelayTimeout() {
	        if (this.longPressDelayTimeout) {
	            clearTimeout(this.longPressDelayTimeout);
	            this.longPressDelayTimeout = null;
	        }
	    },
	    _isHighlight: function _isHighlight(state) {
	        return state === States.RESPONDER_ACTIVE_PRESS_IN || state === States.RESPONDER_ACTIVE_LONG_PRESS_IN;
	    },
	    _savePressInLocation: function _savePressInLocation(e) {
	        var touch = extractSingleTouch(e);
	        var pageX = touch && touch.pageX;
	        var pageY = touch && touch.pageY;
	        this.pressInLocation = { pageX: pageX, pageY: pageY };
	    },
	    _getDistanceBetweenPoints: function _getDistanceBetweenPoints(aX, aY, bX, bY) {
	        var deltaX = aX - bX;
	        var deltaY = aY - bY;
	        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
	    },
	    _performSideEffectsForTransition: function _performSideEffectsForTransition(curState, nextState, signal, e) {
	        var curIsHighlight = this._isHighlight(curState);
	        var newIsHighlight = this._isHighlight(nextState);
	        var isFinalSignal = signal === Signals.RESPONDER_TERMINATED || signal === Signals.RESPONDER_RELEASE;
	        if (isFinalSignal) {
	            this._cancelLongPressDelayTimeout();
	        }
	        if (!IsActive[curState] && IsActive[nextState]) {
	            this._remeasureMetricsOnActivation();
	        }
	        if (IsPressingIn[curState] && signal === Signals.LONG_PRESS_DETECTED) {
	            this.touchableHandleLongPress(e);
	        }
	        if (newIsHighlight && !curIsHighlight) {
	            this._startHighlight(e);
	        } else if (!newIsHighlight && curIsHighlight) {
	            this._endHighlight(e);
	        }
	        if (IsPressingIn[curState] && signal === Signals.RESPONDER_RELEASE) {
	            var hasLongPressHandler = !!this.props.onLongPress;
	            var pressIsLongButStillCallOnPress = IsLongPressingIn[curState] && (!hasLongPressHandler || !this.props.longPressCancelsPress // or we're told to ignore it.
	            );
	            var shouldInvokePress = !IsLongPressingIn[curState] || pressIsLongButStillCallOnPress;
	            if (shouldInvokePress) {
	                if (!newIsHighlight && !curIsHighlight) {
	                    // we never highlighted because of delay, but we should highlight now
	                    this._startHighlight(e);
	                    this._endHighlight(e);
	                }
	                this.touchableHandlePress(e);
	            }
	        }
	        if (this.touchableDelayTimeout) {
	            clearTimeout(this.touchableDelayTimeout);
	            this.touchableDelayTimeout = null;
	        }
	    },
	    _startHighlight: function _startHighlight(e) {
	        this._savePressInLocation(e);
	        this.touchableHandleActivePressIn(e);
	    },
	    _endHighlight: function _endHighlight(e) {
	        var _this4 = this;
	
	        if (this.props.delayPressOut) {
	            this.pressOutDelayTimeout = setTimeout(function () {
	                _this4.touchableHandleActivePressOut(e);
	            }, this.props.delayPressOut);
	        } else {
	            this.touchableHandleActivePressOut(e);
	        }
	    },
	    render: function render() {
	        var _props2 = this.props,
	            children = _props2.children,
	            disabled = _props2.disabled,
	            activeStyle = _props2.activeStyle,
	            activeClassName = _props2.activeClassName;
	
	        var events = disabled ? undefined : copy(this, ['onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel', 'onMouseDown']);
	        var child = _react2["default"].Children.only(children);
	        if (this.state.active) {
	            var _child$props = child.props,
	                style = _child$props.style,
	                className = _child$props.className;
	
	            if (activeStyle) {
	                style = (0, _objectAssign2["default"])({}, style, activeStyle);
	            }
	            if (activeClassName) {
	                if (className) {
	                    className += ' ' + activeClassName;
	                } else {
	                    className = activeClassName;
	                }
	            }
	            return _react2["default"].cloneElement(child, (0, _objectAssign2["default"])({
	                className: className,
	                style: style
	            }, events));
	        }
	        return _react2["default"].cloneElement(child, events);
	    }
	});
	exports["default"] = Touchable;
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=popup.js.map