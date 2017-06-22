webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

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
	
	var _reactDom = __webpack_require__(116);
	
	var ReactDOM = _interopRequireWildcard(_reactDom);
	
	var _Popup = __webpack_require__(254);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	var _DatePicker = __webpack_require__(292);
	
	var _DatePicker2 = _interopRequireDefault(_DatePicker);
	
	var _moment = __webpack_require__(314);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _zh_CN = __webpack_require__(316);
	
	var _zh_CN2 = _interopRequireDefault(_zh_CN);
	
	var _en_US = __webpack_require__(315);
	
	var _en_US2 = _interopRequireDefault(_en_US);
	
	__webpack_require__(317);
	
	__webpack_require__(318);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* tslint:disable:no-console */
	var cn = location.search.indexOf('cn') !== -1;
	// const zhCnCalendar = null;
	
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

/***/ }),

/***/ 82:
80,

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(3);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(72);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(83);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Popup = __webpack_require__(255);
	
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
	/* tslint:disable: interface-name */
	
	function noop() {}
	
	var PopupDatePicker = function (_React$Component) {
	    (0, _inherits3.default)(PopupDatePicker, _React$Component);
	
	    function PopupDatePicker(props) {
	        (0, _classCallCheck3.default)(this, PopupDatePicker);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));
	
	        _this.onPickerChange = function (pickerDate) {
	            _this.setState({
	                pickerDate: pickerDate
	            });
	            if (_this.props.datePicker.props.onDateChange) {
	                _this.props.datePicker.props.onDateChange(pickerDate);
	            }
	        };
	        _this.onOk = function () {
	            var onChange = _this.props.onChange;
	
	            if (onChange) {
	                onChange(_this.datePicker.getDate());
	            }
	        };
	        _this.saveRef = function (datePicker) {
	            _this.datePicker = datePicker;
	        };
	        _this.fireVisibleChange = function (visible) {
	            if (_this.state.visible !== visible) {
	                if (!('visible' in _this.props)) {
	                    _this.setVisibleState(visible);
	                }
	                var onVisibleChange = _this.props.onVisibleChange;
	
	                if (onVisibleChange) {
	                    onVisibleChange(visible);
	                }
	            }
	        };
	        _this.state = {
	            pickerDate: null,
	            visible: _this.props.visible || false
	        };
	        return _this;
	    }
	
	    PopupDatePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if ('visible' in nextProps) {
	            this.setVisibleState(nextProps.visible);
	        }
	    };
	
	    PopupDatePicker.prototype.setVisibleState = function setVisibleState(visible) {
	        this.setState({
	            visible: visible
	        });
	        if (!visible) {
	            this.setState({
	                pickerDate: null
	            });
	        }
	    };
	
	    PopupDatePicker.prototype.render = function render() {
	        var dataPicker = _react2.default.cloneElement(this.props.datePicker, {
	            date: this.state.pickerDate || this.props.date,
	            onDateChange: this.onPickerChange,
	            ref: this.saveRef
	        });
	        return _react2.default.createElement(_Popup2.default, __assign({}, this.props, { onVisibleChange: this.fireVisibleChange, onOk: this.onOk, content: dataPicker, visible: this.state.visible }));
	    };
	
	    return PopupDatePicker;
	}(_react2.default.Component);
	
	exports.default = PopupDatePicker;
	
	PopupDatePicker.defaultProps = {
	    onVisibleChange: noop,
	    prefixCls: 'rmc-picker-popup',
	    onChange: noop,
	    onDismiss: noop,
	    onPickerChange: noop
	};
	module.exports = exports['default'];

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(256);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(3);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(72);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(83);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcDialog = __webpack_require__(260);
	
	var _rcDialog2 = _interopRequireDefault(_rcDialog);
	
	var _reactMixin = __webpack_require__(287);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _PopupMixin = __webpack_require__(289);
	
	var _PopupMixin2 = _interopRequireDefault(_PopupMixin);
	
	var _rcTouchable = __webpack_require__(290);
	
	var _rcTouchable2 = _interopRequireDefault(_rcTouchable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var PopupPicker = function (_React$Component) {
	  (0, _inherits3['default'])(PopupPicker, _React$Component);
	
	  function PopupPicker() {
	    (0, _classCallCheck3['default'])(this, PopupPicker);
	    return (0, _possibleConstructorReturn3['default'])(this, (PopupPicker.__proto__ || Object.getPrototypeOf(PopupPicker)).apply(this, arguments));
	  }
	
	  (0, _createClass3['default'])(PopupPicker, [{
	    key: 'getModal',
	    value: function getModal() {
	      var props = this.props;
	      if (!this.state.visible) {
	        return null;
	      }
	      var prefixCls = props.prefixCls;
	
	      return _react2['default'].createElement(
	        _rcDialog2['default'],
	        { prefixCls: '' + prefixCls, className: props.className || '', visible: true, closable: false, transitionName: props.transitionName || props.popupTransitionName, maskTransitionName: props.maskTransitionName, onClose: this.hide.bind(this), style: props.style },
	        _react2['default'].createElement(
	          'div',
	          null,
	          _react2['default'].createElement(
	            'div',
	            { className: prefixCls + '-header' },
	            _react2['default'].createElement(
	              _rcTouchable2['default'],
	              { activeClassName: prefixCls + '-item-active' },
	              _react2['default'].createElement(
	                'div',
	                { className: prefixCls + '-item ' + prefixCls + '-header-left', onClick: this.onDismiss.bind(this) },
	                props.dismissText
	              )
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: prefixCls + '-item ' + prefixCls + '-title' },
	              props.title
	            ),
	            _react2['default'].createElement(
	              _rcTouchable2['default'],
	              { activeClassName: prefixCls + '-item-active' },
	              _react2['default'].createElement(
	                'div',
	                { className: prefixCls + '-item ' + prefixCls + '-header-right', onClick: this.onOk.bind(this) },
	                props.okText
	              )
	            )
	          ),
	          this.getContent()
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.getRender();
	    }
	  }]);
	  return PopupPicker;
	}(_react2['default'].Component);
	
	PopupPicker.defaultProps = {
	  prefixCls: 'rmc-picker-popup',
	  triggerType: 'onClick',
	  WrapComponent: 'span'
	};
	_reactMixin2['default'].onClass(PopupPicker, _PopupMixin2['default']);
	exports['default'] = PopupPicker;
	module.exports = exports['default'];

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(83);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createReactClass = __webpack_require__(261);
	
	var _createReactClass2 = _interopRequireDefault(_createReactClass);
	
	var _Dialog = __webpack_require__(263);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _getContainerRenderMixin = __webpack_require__(286);
	
	var _getContainerRenderMixin2 = _interopRequireDefault(_getContainerRenderMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var __assign = undefined && undefined.__assign || Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) {
	            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	    }
	    return t;
	};
	
	var DialogWrap = (0, _createReactClass2['default'])({
	    displayName: 'DialogWrap',
	    mixins: [(0, _getContainerRenderMixin2['default'])({
	        isVisible: function isVisible(instance) {
	            return instance.props.visible;
	        },
	
	        autoDestroy: false,
	        getComponent: function getComponent(instance, extra) {
	            return _react2['default'].createElement(_Dialog2['default'], __assign({}, instance.props, extra, { key: "dialog" }));
	        },
	        getContainer: function getContainer(instance) {
	            if (instance.props.getContainer) {
	                return instance.props.getContainer();
	            }
	            var container = document.createElement('div');
	            document.body.appendChild(container);
	            return container;
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
	exports['default'] = DialogWrap;
	module.exports = exports['default'];

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var React = __webpack_require__(83);
	var factory = __webpack_require__(262);
	
	if (typeof React === 'undefined') {
	  throw Error(
	    'create-react-class could not find the React object. If you are using script tags, ' +
	      'make sure that React is being loaded before create-react-class.'
	  );
	}
	
	// Hack to grab NoopUpdateQueue from isomorphic React
	var ReactNoopUpdateQueue = new React.Component().updater;
	
	module.exports = factory(
	  React.Component,
	  React.isValidElement,
	  ReactNoopUpdateQueue
	);


/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(86);
	
	var emptyObject = __webpack_require__(101);
	var _invariant = __webpack_require__(90);
	
	if (process.env.NODE_ENV !== 'production') {
	  var warning = __webpack_require__(93);
	}
	
	var MIXINS_KEY = 'mixins';
	
	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}
	
	var ReactPropTypeLocationNames;
	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	} else {
	  ReactPropTypeLocationNames = {};
	}
	
	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	  /**
	   * Policies that describe methods in `ReactClassInterface`.
	   */
	
	  var injectedMixins = [];
	
	  /**
	   * Composite components are higher-level components that compose other composite
	   * or host components.
	   *
	   * To create a new type of `ReactClass`, pass a specification of
	   * your new class to `React.createClass`. The only requirement of your class
	   * specification is that you implement a `render` method.
	   *
	   *   var MyComponent = React.createClass({
	   *     render: function() {
	   *       return <div>Hello World</div>;
	   *     }
	   *   });
	   *
	   * The class specification supports a specific protocol of methods that have
	   * special meaning (e.g. `render`). See `ReactClassInterface` for
	   * more the comprehensive protocol. Any other properties and methods in the
	   * class specification will be available on the prototype.
	   *
	   * @interface ReactClassInterface
	   * @internal
	   */
	  var ReactClassInterface = {
	    /**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
	    mixins: 'DEFINE_MANY',
	
	    /**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
	    statics: 'DEFINE_MANY',
	
	    /**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    propTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    contextTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
	    childContextTypes: 'DEFINE_MANY',
	
	    // ==== Definition methods ====
	
	    /**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
	    getDefaultProps: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
	    getInitialState: 'DEFINE_MANY_MERGED',
	
	    /**
	     * @return {object}
	     * @optional
	     */
	    getChildContext: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
	    render: 'DEFINE_ONCE',
	
	    // ==== Delegate methods ====
	
	    /**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
	    componentWillMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
	    componentWillReceiveProps: 'DEFINE_MANY',
	
	    /**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
	    shouldComponentUpdate: 'DEFINE_ONCE',
	
	    /**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
	    componentWillUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
	    componentWillUnmount: 'DEFINE_MANY',
	
	    // ==== Advanced methods ====
	
	    /**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
	    updateComponent: 'OVERRIDE_BASE'
	  };
	
	  /**
	   * Mapping from class specification keys to special processing functions.
	   *
	   * Although these are declared like instance properties in the specification
	   * when defining classes using `React.createClass`, they are actually static
	   * and are accessible on the constructor instead of the prototype. Despite
	   * being static, they must be defined outside of the "statics" key under
	   * which all other static methods are defined.
	   */
	  var RESERVED_SPEC_KEYS = {
	    displayName: function(Constructor, displayName) {
	      Constructor.displayName = displayName;
	    },
	    mixins: function(Constructor, mixins) {
	      if (mixins) {
	        for (var i = 0; i < mixins.length; i++) {
	          mixSpecIntoComponent(Constructor, mixins[i]);
	        }
	      }
	    },
	    childContextTypes: function(Constructor, childContextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, childContextTypes, 'childContext');
	      }
	      Constructor.childContextTypes = _assign(
	        {},
	        Constructor.childContextTypes,
	        childContextTypes
	      );
	    },
	    contextTypes: function(Constructor, contextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, contextTypes, 'context');
	      }
	      Constructor.contextTypes = _assign(
	        {},
	        Constructor.contextTypes,
	        contextTypes
	      );
	    },
	    /**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
	    getDefaultProps: function(Constructor, getDefaultProps) {
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps = createMergedResultFunction(
	          Constructor.getDefaultProps,
	          getDefaultProps
	        );
	      } else {
	        Constructor.getDefaultProps = getDefaultProps;
	      }
	    },
	    propTypes: function(Constructor, propTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, propTypes, 'prop');
	      }
	      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	    },
	    statics: function(Constructor, statics) {
	      mixStaticSpecIntoComponent(Constructor, statics);
	    },
	    autobind: function() {}
	  };
	
	  function validateTypeDef(Constructor, typeDef, location) {
	    for (var propName in typeDef) {
	      if (typeDef.hasOwnProperty(propName)) {
	        // use a warning instead of an _invariant so components
	        // don't show up in prod but only in __DEV__
	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            typeof typeDef[propName] === 'function',
	            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	              'React.PropTypes.',
	            Constructor.displayName || 'ReactClass',
	            ReactPropTypeLocationNames[location],
	            propName
	          );
	        }
	      }
	    }
	  }
	
	  function validateMethodOverride(isAlreadyDefined, name) {
	    var specPolicy = ReactClassInterface.hasOwnProperty(name)
	      ? ReactClassInterface[name]
	      : null;
	
	    // Disallow overriding of base class methods unless explicitly allowed.
	    if (ReactClassMixin.hasOwnProperty(name)) {
	      _invariant(
	        specPolicy === 'OVERRIDE_BASE',
	        'ReactClassInterface: You are attempting to override ' +
	          '`%s` from your class specification. Ensure that your method names ' +
	          'do not overlap with React methods.',
	        name
	      );
	    }
	
	    // Disallow defining methods more than once unless explicitly allowed.
	    if (isAlreadyDefined) {
	      _invariant(
	        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
	        'ReactClassInterface: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be due ' +
	          'to a mixin.',
	        name
	      );
	    }
	  }
	
	  /**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
	  function mixSpecIntoComponent(Constructor, spec) {
	    if (!spec) {
	      if (process.env.NODE_ENV !== 'production') {
	        var typeofSpec = typeof spec;
	        var isMixinValid = typeofSpec === 'object' && spec !== null;
	
	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            isMixinValid,
	            "%s: You're attempting to include a mixin that is either null " +
	              'or not an object. Check the mixins included by the component, ' +
	              'as well as any mixins they include themselves. ' +
	              'Expected object but got %s.',
	            Constructor.displayName || 'ReactClass',
	            spec === null ? null : typeofSpec
	          );
	        }
	      }
	
	      return;
	    }
	
	    _invariant(
	      typeof spec !== 'function',
	      "ReactClass: You're attempting to " +
	        'use a component class or function as a mixin. Instead, just use a ' +
	        'regular object.'
	    );
	    _invariant(
	      !isValidElement(spec),
	      "ReactClass: You're attempting to " +
	        'use a component as a mixin. Instead, just use a regular object.'
	    );
	
	    var proto = Constructor.prototype;
	    var autoBindPairs = proto.__reactAutoBindPairs;
	
	    // By handling mixins before any other properties, we ensure the same
	    // chaining order is applied to methods with DEFINE_MANY policy, whether
	    // mixins are listed before or after these methods in the spec.
	    if (spec.hasOwnProperty(MIXINS_KEY)) {
	      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	    }
	
	    for (var name in spec) {
	      if (!spec.hasOwnProperty(name)) {
	        continue;
	      }
	
	      if (name === MIXINS_KEY) {
	        // We have already handled mixins in a special case above.
	        continue;
	      }
	
	      var property = spec[name];
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      validateMethodOverride(isAlreadyDefined, name);
	
	      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	        RESERVED_SPEC_KEYS[name](Constructor, property);
	      } else {
	        // Setup methods on prototype:
	        // The following member methods should not be automatically bound:
	        // 1. Expected ReactClass methods (in the "interface").
	        // 2. Overridden methods (that were mixed in).
	        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	        var isFunction = typeof property === 'function';
	        var shouldAutoBind =
	          isFunction &&
	          !isReactClassMethod &&
	          !isAlreadyDefined &&
	          spec.autobind !== false;
	
	        if (shouldAutoBind) {
	          autoBindPairs.push(name, property);
	          proto[name] = property;
	        } else {
	          if (isAlreadyDefined) {
	            var specPolicy = ReactClassInterface[name];
	
	            // These cases should already be caught by validateMethodOverride.
	            _invariant(
	              isReactClassMethod &&
	                (specPolicy === 'DEFINE_MANY_MERGED' ||
	                  specPolicy === 'DEFINE_MANY'),
	              'ReactClass: Unexpected spec policy %s for key %s ' +
	                'when mixing in component specs.',
	              specPolicy,
	              name
	            );
	
	            // For methods which are defined more than once, call the existing
	            // methods before calling the new property, merging if appropriate.
	            if (specPolicy === 'DEFINE_MANY_MERGED') {
	              proto[name] = createMergedResultFunction(proto[name], property);
	            } else if (specPolicy === 'DEFINE_MANY') {
	              proto[name] = createChainedFunction(proto[name], property);
	            }
	          } else {
	            proto[name] = property;
	            if (process.env.NODE_ENV !== 'production') {
	              // Add verbose displayName to the function, which helps when looking
	              // at profiling tools.
	              if (typeof property === 'function' && spec.displayName) {
	                proto[name].displayName = spec.displayName + '_' + name;
	              }
	            }
	          }
	        }
	      }
	    }
	  }
	
	  function mixStaticSpecIntoComponent(Constructor, statics) {
	    if (!statics) {
	      return;
	    }
	    for (var name in statics) {
	      var property = statics[name];
	      if (!statics.hasOwnProperty(name)) {
	        continue;
	      }
	
	      var isReserved = name in RESERVED_SPEC_KEYS;
	      _invariant(
	        !isReserved,
	        'ReactClass: You are attempting to define a reserved ' +
	          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	          'as an instance property instead; it will still be accessible on the ' +
	          'constructor.',
	        name
	      );
	
	      var isInherited = name in Constructor;
	      _invariant(
	        !isInherited,
	        'ReactClass: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be ' +
	          'due to a mixin.',
	        name
	      );
	      Constructor[name] = property;
	    }
	  }
	
	  /**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
	  function mergeIntoWithNoDuplicateKeys(one, two) {
	    _invariant(
	      one && two && typeof one === 'object' && typeof two === 'object',
	      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	    );
	
	    for (var key in two) {
	      if (two.hasOwnProperty(key)) {
	        _invariant(
	          one[key] === undefined,
	          'mergeIntoWithNoDuplicateKeys(): ' +
	            'Tried to merge two objects with the same key: `%s`. This conflict ' +
	            'may be due to a mixin; in particular, this may be caused by two ' +
	            'getInitialState() or getDefaultProps() methods returning objects ' +
	            'with clashing keys.',
	          key
	        );
	        one[key] = two[key];
	      }
	    }
	    return one;
	  }
	
	  /**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createMergedResultFunction(one, two) {
	    return function mergedResult() {
	      var a = one.apply(this, arguments);
	      var b = two.apply(this, arguments);
	      if (a == null) {
	        return b;
	      } else if (b == null) {
	        return a;
	      }
	      var c = {};
	      mergeIntoWithNoDuplicateKeys(c, a);
	      mergeIntoWithNoDuplicateKeys(c, b);
	      return c;
	    };
	  }
	
	  /**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createChainedFunction(one, two) {
	    return function chainedFunction() {
	      one.apply(this, arguments);
	      two.apply(this, arguments);
	    };
	  }
	
	  /**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
	  function bindAutoBindMethod(component, method) {
	    var boundMethod = method.bind(component);
	    if (process.env.NODE_ENV !== 'production') {
	      boundMethod.__reactBoundContext = component;
	      boundMethod.__reactBoundMethod = method;
	      boundMethod.__reactBoundArguments = null;
	      var componentName = component.constructor.displayName;
	      var _bind = boundMethod.bind;
	      boundMethod.bind = function(newThis) {
	        for (
	          var _len = arguments.length,
	            args = Array(_len > 1 ? _len - 1 : 0),
	            _key = 1;
	          _key < _len;
	          _key++
	        ) {
	          args[_key - 1] = arguments[_key];
	        }
	
	        // User is trying to bind() an autobound method; we effectively will
	        // ignore the value of "this" that the user is trying to use, so
	        // let's warn.
	        if (newThis !== component && newThis !== null) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): React component methods may only be bound to the ' +
	                'component instance. See %s',
	              componentName
	            );
	          }
	        } else if (!args.length) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): You are binding a component method to the component. ' +
	                'React does this for you automatically in a high-performance ' +
	                'way, so you can safely remove this call. See %s',
	              componentName
	            );
	          }
	          return boundMethod;
	        }
	        var reboundMethod = _bind.apply(boundMethod, arguments);
	        reboundMethod.__reactBoundContext = component;
	        reboundMethod.__reactBoundMethod = method;
	        reboundMethod.__reactBoundArguments = args;
	        return reboundMethod;
	      };
	    }
	    return boundMethod;
	  }
	
	  /**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
	  function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }
	
	  var IsMountedPreMixin = {
	    componentDidMount: function() {
	      this.__isMounted = true;
	    }
	  };
	
	  var IsMountedPostMixin = {
	    componentWillUnmount: function() {
	      this.__isMounted = false;
	    }
	  };
	
	  /**
	   * Add more to the ReactClass base class. These are all legacy features and
	   * therefore not already part of the modern ReactComponent.
	   */
	  var ReactClassMixin = {
	    /**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
	    replaceState: function(newState, callback) {
	      this.updater.enqueueReplaceState(this, newState, callback);
	    },
	
	    /**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
	    isMounted: function() {
	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this.__didWarnIsMounted,
	          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
	            'subscriptions and pending requests in componentWillUnmount to ' +
	            'prevent memory leaks.',
	          (this.constructor && this.constructor.displayName) ||
	            this.name ||
	            'Component'
	        );
	        this.__didWarnIsMounted = true;
	      }
	      return !!this.__isMounted;
	    }
	  };
	
	  var ReactClassComponent = function() {};
	  _assign(
	    ReactClassComponent.prototype,
	    ReactComponent.prototype,
	    ReactClassMixin
	  );
	
	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function(props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.
	
	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this instanceof Constructor,
	          'Something is calling a React component directly. Use a factory or ' +
	            'JSX instead. See: https://fb.me/react-legacyfactory'
	        );
	      }
	
	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }
	
	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;
	
	      this.state = null;
	
	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.
	
	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (
	          initialState === undefined &&
	          this.getInitialState._isMockFunction
	        ) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      _invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      );
	
	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];
	
	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
	
	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);
	
	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }
	
	    _invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    );
	
	    if (process.env.NODE_ENV !== 'production') {
	      warning(
	        !Constructor.prototype.componentShouldUpdate,
	        '%s has a method called ' +
	          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	          'The name is phrased as a question because the function is ' +
	          'expected to return a value.',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.componentWillRecieveProps,
	        '%s has a method called ' +
	          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	    }
	
	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }
	
	    return Constructor;
	  }
	
	  return createClass;
	}
	
	module.exports = factory;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(85)))

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(256);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(3);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(72);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(83);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(116);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _KeyCode = __webpack_require__(264);
	
	var _KeyCode2 = _interopRequireDefault(_KeyCode);
	
	var _rcAnimate = __webpack_require__(265);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _LazyRenderBox = __webpack_require__(284);
	
	var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);
	
	var _getScrollBarSize = __webpack_require__(285);
	
	var _getScrollBarSize2 = _interopRequireDefault(_getScrollBarSize);
	
	var _objectAssign = __webpack_require__(86);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
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
	
	var Dialog = function (_React$Component) {
	    (0, _inherits3['default'])(Dialog, _React$Component);
	
	    function Dialog() {
	        (0, _classCallCheck3['default'])(this, Dialog);
	
	        var _this = (0, _possibleConstructorReturn3['default'])(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
	
	        _this.onAnimateLeave = function () {
	            // need demo?
	            // https://github.com/react-component/dialog/pull/28
	            if (_this.refs.wrap) {
	                _this.refs.wrap.style.display = 'none';
	            }
	            _this.inTransition = false;
	            _this.removeScrollingEffect();
	            _this.props.afterClose();
	        };
	        _this.onMaskClick = function (e) {
	            // android trigger click on open (fastclick??)
	            if (Date.now() - _this.openTime < 300) {
	                return;
	            }
	            if (e.target === e.currentTarget) {
	                _this.close(e);
	            }
	        };
	        _this.onKeyDown = function (e) {
	            var props = _this.props;
	            if (props.keyboard && e.keyCode === _KeyCode2['default'].ESC) {
	                _this.close(e);
	            }
	            // keep focus inside dialog
	            if (props.visible) {
	                if (e.keyCode === _KeyCode2['default'].TAB) {
	                    var activeElement = document.activeElement;
	                    var dialogRoot = _this.refs.wrap;
	                    var sentinel = _this.refs.sentinel;
	                    if (e.shiftKey) {
	                        if (activeElement === dialogRoot) {
	                            sentinel.focus();
	                        }
	                    } else if (activeElement === _this.refs.sentinel) {
	                        dialogRoot.focus();
	                    }
	                }
	            }
	        };
	        _this.getDialogElement = function () {
	            var props = _this.props;
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
	                footer = _react2['default'].createElement("div", { className: prefixCls + '-footer', ref: "footer" }, props.footer);
	            }
	            var header = void 0;
	            if (props.title) {
	                header = _react2['default'].createElement("div", { className: prefixCls + '-header', ref: "header" }, _react2['default'].createElement("div", { className: prefixCls + '-title', id: _this.titleId }, props.title));
	            }
	            var closer = void 0;
	            if (closable) {
	                closer = _react2['default'].createElement("button", { onClick: _this.close, "aria-label": "Close", className: prefixCls + '-close' }, _react2['default'].createElement("span", { className: prefixCls + '-close-x' }));
	            }
	            var style = (0, _objectAssign2['default'])({}, props.style, dest);
	            var transitionName = _this.getTransitionName();
	            var dialogElement = _react2['default'].createElement(_LazyRenderBox2['default'], { key: "dialog-element", role: "document", ref: "dialog", style: style, className: prefixCls + ' ' + (props.className || ''), visible: props.visible }, _react2['default'].createElement("div", { className: prefixCls + '-content' }, closer, header, _react2['default'].createElement("div", __assign({ className: prefixCls + '-body', style: props.bodyStyle, ref: "body" }, props.bodyProps), props.children), footer), _react2['default'].createElement("div", { tabIndex: 0, ref: "sentinel", style: { width: 0, height: 0, overflow: 'hidden' } }, "sentinel"));
	            return _react2['default'].createElement(_rcAnimate2['default'], { key: "dialog", showProp: "visible", onLeave: _this.onAnimateLeave, transitionName: transitionName, component: "", transitionAppear: true }, dialogElement);
	        };
	        _this.getZIndexStyle = function () {
	            var style = {};
	            var props = _this.props;
	            if (props.zIndex !== undefined) {
	                style.zIndex = props.zIndex;
	            }
	            return style;
	        };
	        _this.getWrapStyle = function () {
	            return (0, _objectAssign2['default'])({}, _this.getZIndexStyle(), _this.props.wrapStyle);
	        };
	        _this.getMaskStyle = function () {
	            return (0, _objectAssign2['default'])({}, _this.getZIndexStyle(), _this.props.maskStyle);
	        };
	        _this.getMaskElement = function () {
	            var props = _this.props;
	            var maskElement = void 0;
	            if (props.mask) {
	                var maskTransition = _this.getMaskTransitionName();
	                maskElement = _react2['default'].createElement(_LazyRenderBox2['default'], __assign({ style: _this.getMaskStyle(), key: "mask", className: props.prefixCls + '-mask', hiddenClassName: props.prefixCls + '-mask-hidden', visible: props.visible }, props.maskProps));
	                if (maskTransition) {
	                    maskElement = _react2['default'].createElement(_rcAnimate2['default'], { key: "mask", showProp: "visible", transitionAppear: true, component: "", transitionName: maskTransition }, maskElement);
	                }
	            }
	            return maskElement;
	        };
	        _this.getMaskTransitionName = function () {
	            var props = _this.props;
	            var transitionName = props.maskTransitionName;
	            var animation = props.maskAnimation;
	            if (!transitionName && animation) {
	                transitionName = props.prefixCls + '-' + animation;
	            }
	            return transitionName;
	        };
	        _this.getTransitionName = function () {
	            var props = _this.props;
	            var transitionName = props.transitionName;
	            var animation = props.animation;
	            if (!transitionName && animation) {
	                transitionName = props.prefixCls + '-' + animation;
	            }
	            return transitionName;
	        };
	        _this.getElement = function (part) {
	            return _this.refs[part];
	        };
	        _this.setScrollbar = function () {
	            if (_this.bodyIsOverflowing && _this.scrollbarWidth !== undefined) {
	                document.body.style.paddingRight = _this.scrollbarWidth + 'px';
	            }
	        };
	        _this.addScrollingEffect = function () {
	            openCount++;
	            if (openCount !== 1) {
	                return;
	            }
	            _this.checkScrollbar();
	            _this.setScrollbar();
	            document.body.style.overflow = 'hidden';
	            // this.adjustDialog();
	        };
	        _this.removeScrollingEffect = function () {
	            openCount--;
	            if (openCount !== 0) {
	                return;
	            }
	            document.body.style.overflow = '';
	            _this.resetScrollbar();
	            // this.resetAdjustments();
	        };
	        _this.close = function (e) {
	            _this.props.onClose(e);
	        };
	        _this.checkScrollbar = function () {
	            var fullWindowWidth = window.innerWidth;
	            if (!fullWindowWidth) {
	                var documentElementRect = document.documentElement.getBoundingClientRect();
	                fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
	            }
	            _this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
	            if (_this.bodyIsOverflowing) {
	                _this.scrollbarWidth = (0, _getScrollBarSize2['default'])();
	            }
	        };
	        _this.resetScrollbar = function () {
	            document.body.style.paddingRight = '';
	        };
	        _this.adjustDialog = function () {
	            if (_this.refs.wrap && _this.scrollbarWidth !== undefined) {
	                var modalIsOverflowing = _this.refs.wrap.scrollHeight > document.documentElement.clientHeight;
	                _this.refs.wrap.style.paddingLeft = (!_this.bodyIsOverflowing && modalIsOverflowing ? _this.scrollbarWidth : '') + 'px';
	                _this.refs.wrap.style.paddingRight = (_this.bodyIsOverflowing && !modalIsOverflowing ? _this.scrollbarWidth : '') + 'px';
	            }
	        };
	        _this.resetAdjustments = function () {
	            if (_this.refs.wrap) {
	                _this.refs.wrap.style.paddingLeft = _this.refs.wrap.style.paddingLeft = '';
	            }
	        };
	        return _this;
	    }
	
	    (0, _createClass3['default'])(Dialog, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.inTransition = false;
	            this.titleId = 'rcDialogTitle' + uuid++;
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.componentDidUpdate({});
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            var props = this.props;
	            var mousePosition = this.props.mousePosition;
	            if (props.visible) {
	                // first show
	                if (!prevProps.visible) {
	                    this.openTime = Date.now();
	                    this.lastOutSideFocusNode = document.activeElement;
	                    this.addScrollingEffect();
	                    this.refs.wrap.focus();
	                    var dialogNode = _reactDom2['default'].findDOMNode(this.refs.dialog);
	                    if (mousePosition) {
	                        var elOffset = offset(dialogNode);
	                        setTransformOrigin(dialogNode, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px');
	                    } else {
	                        setTransformOrigin(dialogNode, '');
	                    }
	                }
	            } else if (prevProps.visible) {
	                this.inTransition = true;
	                if (props.mask && this.lastOutSideFocusNode) {
	                    try {
	                        this.lastOutSideFocusNode.focus();
	                    } catch (e) {
	                        this.lastOutSideFocusNode = null;
	                    }
	                    this.lastOutSideFocusNode = null;
	                }
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            if (this.props.visible || this.inTransition) {
	                this.removeScrollingEffect();
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = this.props;
	            var prefixCls = props.prefixCls,
	                maskClosable = props.maskClosable;
	
	            var style = this.getWrapStyle();
	            // clear hide display
	            // and only set display after async anim, not here for hide
	            if (props.visible) {
	                style.display = null;
	            }
	            return _react2['default'].createElement("div", null, this.getMaskElement(), _react2['default'].createElement("div", __assign({ tabIndex: -1, onKeyDown: this.onKeyDown, className: prefixCls + '-wrap ' + (props.wrapClassName || ''), ref: "wrap", onClick: maskClosable ? this.onMaskClick : undefined, role: "dialog", "aria-labelledby": props.title ? this.titleId : null, style: style }, props.wrapProps), this.getDialogElement()));
	        }
	    }]);
	    return Dialog;
	}(_react2['default'].Component);
	
	exports['default'] = Dialog;
	
	Dialog.defaultProps = {
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
	module.exports = exports['default'];

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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
	
	exports['default'] = KeyCode;
	module.exports = exports['default'];

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(266);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _defineProperty2 = __webpack_require__(271);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(256);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(3);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(72);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(83);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(272);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _ChildrenUtils = __webpack_require__(277);
	
	var _AnimateChild = __webpack_require__(278);
	
	var _AnimateChild2 = _interopRequireDefault(_AnimateChild);
	
	var _util = __webpack_require__(283);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var defaultKey = 'rc_animate_' + Date.now();
	
	
	function getChildrenFromProps(props) {
	  var children = props.children;
	  if (_react2['default'].isValidElement(children)) {
	    if (!children.key) {
	      return _react2['default'].cloneElement(children, {
	        key: defaultKey
	      });
	    }
	  }
	  return children;
	}
	
	function noop() {}
	
	var Animate = function (_React$Component) {
	  (0, _inherits3['default'])(Animate, _React$Component);
	
	  function Animate(props) {
	    (0, _classCallCheck3['default'])(this, Animate);
	
	    var _this = (0, _possibleConstructorReturn3['default'])(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this, props));
	
	    _initialiseProps.call(_this);
	
	    _this.currentlyAnimatingKeys = {};
	    _this.keysToEnter = [];
	    _this.keysToLeave = [];
	
	    _this.state = {
	      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(_this.props))
	    };
	
	    _this.childrenRefs = {};
	    return _this;
	  }
	
	  (0, _createClass3['default'])(Animate, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      var showProp = this.props.showProp;
	      var children = this.state.children;
	      if (showProp) {
	        children = children.filter(function (child) {
	          return !!child.props[showProp];
	        });
	      }
	      children.forEach(function (child) {
	        if (child) {
	          _this2.performAppear(child.key);
	        }
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this3 = this;
	
	      this.nextProps = nextProps;
	      var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
	      var props = this.props;
	      // exclusive needs immediate response
	      if (props.exclusive) {
	        Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
	          _this3.stop(key);
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
	            newChild = _react2['default'].cloneElement(nextChild || currentChild, (0, _defineProperty3['default'])({}, showProp, true));
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
	              _this3.keysToEnter.push(key);
	            }
	          } else if (showInNext) {
	            _this3.keysToEnter.push(key);
	          }
	        } else if (!hasPrev) {
	          _this3.keysToEnter.push(key);
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
	              _this3.keysToLeave.push(key);
	            }
	          } else if (showInNow) {
	            _this3.keysToLeave.push(key);
	          }
	        } else if (!hasNext) {
	          _this3.keysToLeave.push(key);
	        }
	      });
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      var keysToEnter = this.keysToEnter;
	      this.keysToEnter = [];
	      keysToEnter.forEach(this.performEnter);
	      var keysToLeave = this.keysToLeave;
	      this.keysToLeave = [];
	      keysToLeave.forEach(this.performLeave);
	    }
	  }, {
	    key: 'isValidChildByKey',
	    value: function isValidChildByKey(currentChildren, key) {
	      var showProp = this.props.showProp;
	      if (showProp) {
	        return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	      }
	      return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	    }
	  }, {
	    key: 'stop',
	    value: function stop(key) {
	      delete this.currentlyAnimatingKeys[key];
	      var component = this.childrenRefs[key];
	      if (component) {
	        component.stop();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
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
	          return _react2['default'].createElement(
	            _AnimateChild2['default'],
	            {
	              key: child.key,
	              ref: function ref(node) {
	                return _this4.childrenRefs[child.key] = node;
	              },
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
	          passedProps = (0, _extends3['default'])({
	            className: props.className,
	            style: props.style
	          }, props.componentProps);
	        }
	        return _react2['default'].createElement(
	          Component,
	          passedProps,
	          children
	        );
	      }
	      return children[0] || null;
	    }
	  }]);
	  return Animate;
	}(_react2['default'].Component);
	
	Animate.propTypes = {
	  component: _propTypes2['default'].any,
	  componentProps: _propTypes2['default'].object,
	  animation: _propTypes2['default'].object,
	  transitionName: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object]),
	  transitionEnter: _propTypes2['default'].bool,
	  transitionAppear: _propTypes2['default'].bool,
	  exclusive: _propTypes2['default'].bool,
	  transitionLeave: _propTypes2['default'].bool,
	  onEnd: _propTypes2['default'].func,
	  onEnter: _propTypes2['default'].func,
	  onLeave: _propTypes2['default'].func,
	  onAppear: _propTypes2['default'].func,
	  showProp: _propTypes2['default'].string
	};
	Animate.defaultProps = {
	  animation: {},
	  component: 'span',
	  componentProps: {},
	  transitionEnter: true,
	  transitionLeave: true,
	  transitionAppear: false,
	  onEnd: noop,
	  onEnter: noop,
	  onLeave: noop,
	  onAppear: noop
	};
	
	var _initialiseProps = function _initialiseProps() {
	  var _this5 = this;
	
	  this.performEnter = function (key) {
	    // may already remove by exclusive
	    if (_this5.childrenRefs[key]) {
	      _this5.currentlyAnimatingKeys[key] = true;
	      _this5.childrenRefs[key].componentWillEnter(_this5.handleDoneAdding.bind(_this5, key, 'enter'));
	    }
	  };
	
	  this.performAppear = function (key) {
	    if (_this5.childrenRefs[key]) {
	      _this5.currentlyAnimatingKeys[key] = true;
	      _this5.childrenRefs[key].componentWillAppear(_this5.handleDoneAdding.bind(_this5, key, 'appear'));
	    }
	  };
	
	  this.handleDoneAdding = function (key, type) {
	    var props = _this5.props;
	    delete _this5.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== _this5.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    if (!_this5.isValidChildByKey(currentChildren, key)) {
	      // exclusive will not need this
	      _this5.performLeave(key);
	    } else {
	      if (type === 'appear') {
	        if (_util2['default'].allowAppearCallback(props)) {
	          props.onAppear(key);
	          props.onEnd(key, true);
	        }
	      } else {
	        if (_util2['default'].allowEnterCallback(props)) {
	          props.onEnter(key);
	          props.onEnd(key, true);
	        }
	      }
	    }
	  };
	
	  this.performLeave = function (key) {
	    // may already remove by exclusive
	    if (_this5.childrenRefs[key]) {
	      _this5.currentlyAnimatingKeys[key] = true;
	      _this5.childrenRefs[key].componentWillLeave(_this5.handleDoneLeaving.bind(_this5, key));
	    }
	  };
	
	  this.handleDoneLeaving = function (key) {
	    var props = _this5.props;
	    delete _this5.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== _this5.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    // in case state change is too fast
	    if (_this5.isValidChildByKey(currentChildren, key)) {
	      _this5.performEnter(key);
	    } else {
	      var end = function end() {
	        if (_util2['default'].allowLeaveCallback(props)) {
	          props.onLeave(key);
	          props.onEnd(key, false);
	        }
	      };
	      if (!(0, _ChildrenUtils.isSameChildren)(_this5.state.children, currentChildren, props.showProp)) {
	        _this5.setState({
	          children: currentChildren
	        }, end);
	      } else {
	        end();
	      }
	    }
	  };
	};
	
	exports['default'] = Animate;
	module.exports = exports['default'];

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;
	
	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(273)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(276)();
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(85)))

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(94);
	var invariant = __webpack_require__(90);
	var warning = __webpack_require__(93);
	
	var ReactPropTypesSecret = __webpack_require__(274);
	var checkPropTypes = __webpack_require__(275);
	
	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */
	
	  var ANONYMOUS = '<<anonymous>>';
	
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };
	
	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/
	
	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	
	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	
	    return chainedCheckType;
	  }
	
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }
	
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	
	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }
	
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	
	        return true;
	      default:
	        return false;
	    }
	  }
	
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }
	
	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }
	
	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	
	    return false;
	  }
	
	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }
	
	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }
	
	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }
	
	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(85)))

/***/ }),

/***/ 274:
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(90);
	  var warning = __webpack_require__(93);
	  var ReactPropTypesSecret = __webpack_require__(274);
	  var loggedTypeFailures = {};
	}
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	
	          var stack = getStack ? getStack() : '';
	
	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}
	
	module.exports = checkPropTypes;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(85)))

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(94);
	var invariant = __webpack_require__(90);
	var ReactPropTypesSecret = __webpack_require__(274);
	
	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim
	  };
	
	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function toArrayChildren(children) {
	  var ret = [];
	  _react2['default'].Children.forEach(children, function (child) {
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

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(4);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(256);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(3);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(72);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(83);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(116);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(272);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _cssAnimation = __webpack_require__(279);
	
	var _cssAnimation2 = _interopRequireDefault(_cssAnimation);
	
	var _util = __webpack_require__(283);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var transitionMap = {
	  enter: 'transitionEnter',
	  appear: 'transitionAppear',
	  leave: 'transitionLeave'
	};
	
	var AnimateChild = function (_React$Component) {
	  (0, _inherits3['default'])(AnimateChild, _React$Component);
	
	  function AnimateChild() {
	    (0, _classCallCheck3['default'])(this, AnimateChild);
	    return (0, _possibleConstructorReturn3['default'])(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).apply(this, arguments));
	  }
	
	  (0, _createClass3['default'])(AnimateChild, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.stop();
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(done) {
	      if (_util2['default'].isEnterSupported(this.props)) {
	        this.transition('enter', done);
	      } else {
	        done();
	      }
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(done) {
	      if (_util2['default'].isAppearSupported(this.props)) {
	        this.transition('appear', done);
	      } else {
	        done();
	      }
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(done) {
	      if (_util2['default'].isLeaveSupported(this.props)) {
	        this.transition('leave', done);
	      } else {
	        // always sync, do not interupt with react component life cycle
	        // update hidden -> animate hidden ->
	        // didUpdate -> animate leave -> unmount (if animate is none)
	        done();
	      }
	    }
	  }, {
	    key: 'transition',
	    value: function transition(animationType, finishCallback) {
	      var _this2 = this;
	
	      var node = _reactDom2['default'].findDOMNode(this);
	      var props = this.props;
	      var transitionName = props.transitionName;
	      var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : (0, _typeof3['default'])(transitionName)) === 'object';
	      this.stop();
	      var end = function end() {
	        _this2.stopper = null;
	        finishCallback();
	      };
	      if ((_cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
	        var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
	        var activeName = name + '-active';
	        if (nameIsObj && transitionName[animationType + 'Active']) {
	          activeName = transitionName[animationType + 'Active'];
	        }
	        this.stopper = (0, _cssAnimation2['default'])(node, {
	          name: name,
	          active: activeName
	        }, end);
	      } else {
	        this.stopper = props.animation[animationType](node, end);
	      }
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      var stopper = this.stopper;
	      if (stopper) {
	        this.stopper = null;
	        stopper.stop();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);
	  return AnimateChild;
	}(_react2['default'].Component);
	
	AnimateChild.propTypes = {
	  children: _propTypes2['default'].any
	};
	exports['default'] = AnimateChild;
	module.exports = exports['default'];

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Event = __webpack_require__(280);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	var _componentClasses = __webpack_require__(281);
	
	var _componentClasses2 = _interopRequireDefault(_componentClasses);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var isCssAnimationSupported = _Event2["default"].endEvents.length !== 0;
	
	
	var capitalPrefixes = ['Webkit', 'Moz', 'O',
	// ms is special .... !
	'ms'];
	var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
	
	function getStyleProperty(node, name) {
	  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
	  var style = window.getComputedStyle(node, null);
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

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

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

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	try {
	  var index = __webpack_require__(282);
	} catch (err) {
	  var index = __webpack_require__(282);
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


/***/ }),

/***/ 282:
/***/ (function(module, exports) {

	module.exports = function(arr, obj){
	  if (arr.indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ }),

/***/ 283:
/***/ (function(module, exports) {

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

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(256);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(3);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(72);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(83);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(86);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var __assign = undefined && undefined.__assign || Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) {
	            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	    }
	    return t;
	};
	
	var LazyRenderBox = function (_React$Component) {
	    (0, _inherits3['default'])(LazyRenderBox, _React$Component);
	
	    function LazyRenderBox() {
	        (0, _classCallCheck3['default'])(this, LazyRenderBox);
	        return (0, _possibleConstructorReturn3['default'])(this, (LazyRenderBox.__proto__ || Object.getPrototypeOf(LazyRenderBox)).apply(this, arguments));
	    }
	
	    (0, _createClass3['default'])(LazyRenderBox, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps) {
	            return !!nextProps.hiddenClassName || !!nextProps.visible;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var className = this.props.className;
	            if (!!this.props.hiddenClassName && !this.props.visible) {
	                className += ' ' + this.props.hiddenClassName;
	            }
	            var props = (0, _objectAssign2['default'])({}, this.props);
	            delete props.hiddenClassName;
	            delete props.visible;
	            props.className = className;
	            return _react2['default'].createElement("div", __assign({}, props));
	        }
	    }]);
	    return LazyRenderBox;
	}(_react2['default'].Component);
	
	exports['default'] = LazyRenderBox;
	module.exports = exports['default'];

/***/ }),

/***/ 285:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = getScrollBarSize;
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
	module.exports = exports['default'];

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(266);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	exports['default'] = getContainerRenderMixin;
	
	var _reactDom = __webpack_require__(116);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function defaultGetContainer() {
	  var container = document.createElement('div');
	  document.body.appendChild(container);
	  return container;
	}
	
	function getContainerRenderMixin(config) {
	  var _config$autoMount = config.autoMount,
	      autoMount = _config$autoMount === undefined ? true : _config$autoMount,
	      _config$autoDestroy = config.autoDestroy,
	      autoDestroy = _config$autoDestroy === undefined ? true : _config$autoDestroy,
	      isVisible = config.isVisible,
	      getComponent = config.getComponent,
	      _config$getContainer = config.getContainer,
	      getContainer = _config$getContainer === undefined ? defaultGetContainer : _config$getContainer;
	
	
	  var mixin = void 0;
	
	  function _renderComponent(instance, componentArg, ready) {
	    if (!isVisible || instance._component || isVisible(instance)) {
	      if (!instance._container) {
	        instance._container = getContainer(instance);
	      }
	      var component = void 0;
	      if (instance.getComponent) {
	        component = instance.getComponent(componentArg);
	      } else {
	        component = getComponent(instance, componentArg);
	      }
	      _reactDom2['default'].unstable_renderSubtreeIntoContainer(instance, component, instance._container, function callback() {
	        instance._component = this;
	        if (ready) {
	          ready.call(this);
	        }
	      });
	    }
	  }
	
	  if (autoMount) {
	    mixin = (0, _extends3['default'])({}, mixin, {
	      componentDidMount: function componentDidMount() {
	        _renderComponent(this);
	      },
	      componentDidUpdate: function componentDidUpdate() {
	        _renderComponent(this);
	      }
	    });
	  }
	
	  if (!autoMount || !autoDestroy) {
	    mixin = (0, _extends3['default'])({}, mixin, {
	      renderComponent: function renderComponent(componentArg, ready) {
	        _renderComponent(this, componentArg, ready);
	      }
	    });
	  }
	
	  function _removeContainer(instance) {
	    if (instance._container) {
	      var container = instance._container;
	      _reactDom2['default'].unmountComponentAtNode(container);
	      container.parentNode.removeChild(container);
	      instance._container = null;
	    }
	  }
	
	  if (autoDestroy) {
	    mixin = (0, _extends3['default'])({}, mixin, {
	      componentWillUnmount: function componentWillUnmount() {
	        _removeContainer(this);
	      }
	    });
	  } else {
	    mixin = (0, _extends3['default'])({}, mixin, {
	      removeContainer: function removeContainer() {
	        _removeContainer(this);
	      }
	    });
	  }
	
	  return mixin;
	}
	module.exports = exports['default'];

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(271);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _react = __webpack_require__(83);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function noop() {}
	exports['default'] = {
	    getDefaultProps: function getDefaultProps() {
	        return {
	            onVisibleChange: noop,
	            okText: 'Ok',
	            pickerValueProp: 'selectedValue',
	            pickerValueChangeProp: 'onValueChange',
	            dismissText: 'Dismiss',
	            title: '',
	            onOk: noop,
	            onDismiss: noop
	        };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            pickerValue: 'value' in this.props ? this.props.value : null,
	            visible: this.props.visible || false
	        };
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        if ('value' in nextProps) {
	            this.setState({
	                pickerValue: nextProps.value
	            });
	        }
	        if ('visible' in nextProps) {
	            this.setVisibleState(nextProps.visible);
	        }
	    },
	    onPickerChange: function onPickerChange(pickerValue) {
	        if (this.state.pickerValue !== pickerValue) {
	            this.setState({
	                pickerValue: pickerValue
	            });
	            var _props = this.props,
	                picker = _props.picker,
	                pickerValueChangeProp = _props.pickerValueChangeProp;
	
	            if (picker && picker.props[pickerValueChangeProp]) {
	                picker.props[pickerValueChangeProp](pickerValue);
	            }
	        }
	    },
	    saveRef: function saveRef(picker) {
	        this.picker = picker;
	    },
	    setVisibleState: function setVisibleState(visible) {
	        this.setState({
	            visible: visible
	        });
	        if (!visible) {
	            this.setState({
	                pickerValue: null
	            });
	        }
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
	        var _props2 = this.props,
	            WrapComponent = _props2.WrapComponent,
	            disabled = _props2.disabled;
	
	        var child = children;
	        var newChildProps = {};
	        if (!disabled) {
	            newChildProps[props.triggerType] = this.onTriggerClick.bind(this);
	        }
	        return _react2['default'].createElement(
	            WrapComponent,
	            { style: props.wrapStyle },
	            _react2['default'].cloneElement(child, newChildProps),
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
	        this.props.onOk(this.picker && this.picker.getValue());
	        this.fireVisibleChange(false);
	    },
	    getContent: function getContent() {
	        if (this.props.picker) {
	            var _React$cloneElement;
	
	            var pickerValue = this.state.pickerValue;
	
	            if (pickerValue === null) {
	                pickerValue = this.props.value;
	            }
	            return _react2['default'].cloneElement(this.props.picker, (_React$cloneElement = {}, (0, _defineProperty3['default'])(_React$cloneElement, this.props.pickerValueProp, pickerValue), (0, _defineProperty3['default'])(_React$cloneElement, this.props.pickerValueChangeProp, this.onPickerChange.bind(this)), (0, _defineProperty3['default'])(_React$cloneElement, 'ref', this.saveRef.bind(this)), _React$cloneElement));
	        } else {
	            return this.props.content;
	        }
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

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

	// inspired by react-native
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(256);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(3);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(72);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(83);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(86);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _reactDom = __webpack_require__(116);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _PressEvent = __webpack_require__(291);
	
	var _PressEvent2 = _interopRequireDefault(_PressEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
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
	function extractSingleTouch(_nativeEvent) {
	    var nativeEvent = _nativeEvent;
	    if (nativeEvent.nativeEvent) {
	        nativeEvent = nativeEvent.nativeEvent;
	    }
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
	
	var Touchable = function (_React$Component) {
	    (0, _inherits3['default'])(Touchable, _React$Component);
	
	    function Touchable() {
	        (0, _classCallCheck3['default'])(this, Touchable);
	
	        var _this = (0, _possibleConstructorReturn3['default'])(this, (Touchable.__proto__ || Object.getPrototypeOf(Touchable)).apply(this, arguments));
	
	        _this.state = {
	            active: false
	        };
	        _this.onTouchStart = function (e) {
	            _this.callChildEvent('onTouchStart', e);
	            _this.lockMouse = true;
	            if (_this.releaseLockTimer) {
	                clearTimeout(_this.releaseLockTimer);
	            }
	            _this.touchableHandleResponderGrant(e.nativeEvent);
	        };
	        _this.onTouchMove = function (e) {
	            _this.callChildEvent('onTouchMove', e);
	            _this.touchableHandleResponderMove(e.nativeEvent);
	        };
	        _this.onTouchEnd = function (e) {
	            _this.callChildEvent('onTouchEnd', e);
	            _this.releaseLockTimer = setTimeout(function () {
	                _this.lockMouse = false;
	            }, 300);
	            _this.touchableHandleResponderRelease(new _PressEvent2['default'](e.nativeEvent));
	        };
	        _this.onTouchCancel = function (e) {
	            _this.callChildEvent('onTouchCancel', e);
	            _this.releaseLockTimer = setTimeout(function () {
	                _this.lockMouse = false;
	            }, 300);
	            _this.touchableHandleResponderTerminate(e.nativeEvent);
	        };
	        _this.onMouseDown = function (e) {
	            _this.callChildEvent('onMouseDown', e);
	            if (_this.lockMouse) {
	                return;
	            }
	            _this.touchableHandleResponderGrant(e.nativeEvent);
	            document.addEventListener('mousemove', _this.touchableHandleResponderMove, false);
	            document.addEventListener('mouseup', _this.onMouseUp, false);
	        };
	        _this.onMouseUp = function (e) {
	            document.removeEventListener('mousemove', _this.touchableHandleResponderMove, false);
	            document.removeEventListener('mouseup', _this.onMouseUp, false);
	            _this.touchableHandleResponderRelease(new _PressEvent2['default'](e));
	        };
	        _this.touchableHandleResponderMove = function (e) {
	            if (!_this.touchable.startMouse) {
	                return;
	            }
	            // Measurement may not have returned yet.
	            if (!_this.touchable.dimensionsOnActivate || _this.touchable.touchState === States.NOT_RESPONDER) {
	                return;
	            }
	            // Not enough time elapsed yet, wait for highlight -
	            // this is just a perf optimization.
	            if (_this.touchable.touchState === States.RESPONDER_INACTIVE_PRESS_IN) {
	                return;
	            }
	            var touch = extractSingleTouch(e);
	            var pageX = touch && touch.pageX;
	            var pageY = touch && touch.pageY;
	            if (_this.pressInLocation) {
	                var movedDistance = _this._getDistanceBetweenPoints(pageX, pageY, _this.pressInLocation.pageX, _this.pressInLocation.pageY);
	                if (movedDistance > LONG_PRESS_ALLOWED_MOVEMENT) {
	                    _this._cancelLongPressDelayTimeout();
	                }
	            }
	            if (_this.checkTouchWithinActive(e)) {
	                _this._receiveSignal(Signals.ENTER_PRESS_RECT, e);
	                var curState = _this.touchable.touchState;
	                if (curState === States.RESPONDER_INACTIVE_PRESS_IN) {
	                    _this._cancelLongPressDelayTimeout();
	                }
	            } else {
	                _this._cancelLongPressDelayTimeout();
	                _this._receiveSignal(Signals.LEAVE_PRESS_RECT, e);
	            }
	        };
	        return _this;
	    }
	
	    (0, _createClass3['default'])(Touchable, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.touchable = { touchState: undefined };
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.root = _reactDom2['default'].findDOMNode(this);
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this.root = _reactDom2['default'].findDOMNode(this);
	            // disabled auto clear active state
	            if (this.props.disabled && this.state.active) {
	                this.setState({
	                    active: false
	                });
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
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
	        }
	    }, {
	        key: 'callChildEvent',
	        value: function callChildEvent(event, e) {
	            var childHandle = _react2['default'].Children.only(this.props.children).props[event];
	            if (childHandle) {
	                childHandle(e);
	            }
	        }
	    }, {
	        key: '_remeasureMetricsOnInit',
	        value: function _remeasureMetricsOnInit(e) {
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
	        }
	    }, {
	        key: 'touchableHandleResponderGrant',
	        value: function touchableHandleResponderGrant(e) {
	            var _this2 = this;
	
	            this.touchable.touchState = States.NOT_RESPONDER;
	            if (this.pressOutDelayTimeout) {
	                clearTimeout(this.pressOutDelayTimeout);
	                this.pressOutDelayTimeout = null;
	            }
	            if (this.props.fixClickPenetration && !isAllowPress()) {
	                return;
	            }
	            this._remeasureMetricsOnInit(e);
	            this._receiveSignal(Signals.RESPONDER_GRANT, e);
	            var delayMS = this.props.delayPressIn;
	            if (delayMS) {
	                this.touchableDelayTimeout = setTimeout(function () {
	                    _this2._handleDelay(e);
	                }, delayMS);
	            } else {
	                this._handleDelay(e);
	            }
	            var longPressEvent = new _PressEvent2['default'](e);
	            var longDelayMS = this.props.delayLongPress;
	            this.longPressDelayTimeout = setTimeout(function () {
	                _this2._handleLongDelay(longPressEvent);
	            }, longDelayMS + delayMS);
	        }
	    }, {
	        key: 'checkScroll',
	        value: function checkScroll(e) {
	            var positionOnGrant = this.touchable.positionOnGrant;
	            // container or window scroll
	            var boundingRect = this.root.getBoundingClientRect();
	            if (boundingRect.left !== positionOnGrant.clientLeft || boundingRect.top !== positionOnGrant.clientTop) {
	                this._receiveSignal(Signals.RESPONDER_TERMINATED, e);
	                return false;
	            }
	        }
	    }, {
	        key: 'touchableHandleResponderRelease',
	        value: function touchableHandleResponderRelease(e) {
	            if (!this.touchable.startMouse) {
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
	        }
	    }, {
	        key: 'touchableHandleResponderTerminate',
	        value: function touchableHandleResponderTerminate(e) {
	            if (!this.touchable.startMouse) {
	                return;
	            }
	            this._receiveSignal(Signals.RESPONDER_TERMINATED, e);
	        }
	    }, {
	        key: 'checkTouchWithinActive',
	        value: function checkTouchWithinActive(e) {
	            var positionOnGrant = this.touchable.positionOnGrant;
	            var _props = this.props,
	                _props$pressRetention = _props.pressRetentionOffset,
	                pressRetentionOffset = _props$pressRetention === undefined ? {} : _props$pressRetention,
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
	        }
	    }, {
	        key: 'callProp',
	        value: function callProp(name, e) {
	            if (this.props[name] && !this.props.disabled) {
	                this.props[name](e);
	            }
	        }
	    }, {
	        key: 'touchableHandleActivePressIn',
	        value: function touchableHandleActivePressIn(e) {
	            this.setActive(true);
	            this.callProp('onPressIn', e);
	        }
	    }, {
	        key: 'touchableHandleActivePressOut',
	        value: function touchableHandleActivePressOut(e) {
	            this.setActive(false);
	            this.callProp('onPressOut', e);
	        }
	    }, {
	        key: 'touchableHandlePress',
	        value: function touchableHandlePress(e) {
	            if ((0, _PressEvent.shouldFirePress)(e)) {
	                this.callProp('onPress', e);
	            }
	            lastClickTime = Date.now();
	        }
	    }, {
	        key: 'touchableHandleLongPress',
	        value: function touchableHandleLongPress(e) {
	            if ((0, _PressEvent.shouldFirePress)(e)) {
	                this.callProp('onLongPress', e);
	            }
	        }
	    }, {
	        key: 'setActive',
	        value: function setActive(active) {
	            if (this.props.activeClassName || this.props.activeStyle) {
	                this.setState({
	                    active: active
	                });
	            }
	        }
	    }, {
	        key: '_remeasureMetricsOnActivation',
	        value: function _remeasureMetricsOnActivation() {
	            this.touchable.dimensionsOnActivate = this.touchable.positionOnGrant;
	        }
	    }, {
	        key: '_handleDelay',
	        value: function _handleDelay(e) {
	            this.touchableDelayTimeout = null;
	            this._receiveSignal(Signals.DELAY, e);
	        }
	    }, {
	        key: '_handleLongDelay',
	        value: function _handleLongDelay(e) {
	            this.longPressDelayTimeout = null;
	            var curState = this.touchable.touchState;
	            if (curState !== States.RESPONDER_ACTIVE_PRESS_IN && curState !== States.RESPONDER_ACTIVE_LONG_PRESS_IN) {
	                console.error('Attempted to transition from state `' + curState + '` to `' + States.RESPONDER_ACTIVE_LONG_PRESS_IN + '`, which is not supported. This is ' + 'most likely due to `Touchable.longPressDelayTimeout` not being cancelled.');
	            } else {
	                this._receiveSignal(Signals.LONG_PRESS_DETECTED, e);
	            }
	        }
	    }, {
	        key: '_receiveSignal',
	        value: function _receiveSignal(signal, e) {
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
	        }
	    }, {
	        key: '_cancelLongPressDelayTimeout',
	        value: function _cancelLongPressDelayTimeout() {
	            if (this.longPressDelayTimeout) {
	                clearTimeout(this.longPressDelayTimeout);
	                this.longPressDelayTimeout = null;
	            }
	        }
	    }, {
	        key: '_isHighlight',
	        value: function _isHighlight(state) {
	            return state === States.RESPONDER_ACTIVE_PRESS_IN || state === States.RESPONDER_ACTIVE_LONG_PRESS_IN;
	        }
	    }, {
	        key: '_savePressInLocation',
	        value: function _savePressInLocation(e) {
	            var touch = extractSingleTouch(e);
	            var pageX = touch && touch.pageX;
	            var pageY = touch && touch.pageY;
	            this.pressInLocation = { pageX: pageX, pageY: pageY };
	        }
	    }, {
	        key: '_getDistanceBetweenPoints',
	        value: function _getDistanceBetweenPoints(aX, aY, bX, bY) {
	            var deltaX = aX - bX;
	            var deltaY = aY - bY;
	            return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
	        }
	    }, {
	        key: '_performSideEffectsForTransition',
	        value: function _performSideEffectsForTransition(curState, nextState, signal, e) {
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
	        }
	    }, {
	        key: '_startHighlight',
	        value: function _startHighlight(e) {
	            this._savePressInLocation(e);
	            this.touchableHandleActivePressIn(e);
	        }
	    }, {
	        key: '_endHighlight',
	        value: function _endHighlight(e) {
	            var _this3 = this;
	
	            if (this.props.delayPressOut) {
	                this.pressOutDelayTimeout = setTimeout(function () {
	                    _this3.touchableHandleActivePressOut(e);
	                }, this.props.delayPressOut);
	            } else {
	                this.touchableHandleActivePressOut(e);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props2 = this.props,
	                children = _props2.children,
	                disabled = _props2.disabled,
	                activeStyle = _props2.activeStyle,
	                activeClassName = _props2.activeClassName;
	
	            var events = disabled ? undefined : copy(this, ['onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel', 'onMouseDown']);
	            var child = _react2['default'].Children.only(children);
	            if (!disabled && this.state.active) {
	                var _child$props = child.props,
	                    style = _child$props.style,
	                    className = _child$props.className;
	
	                if (activeStyle) {
	                    style = (0, _objectAssign2['default'])({}, style, activeStyle);
	                }
	                if (activeClassName) {
	                    if (className) {
	                        className += ' ' + activeClassName;
	                    } else {
	                        className = activeClassName;
	                    }
	                }
	                return _react2['default'].cloneElement(child, (0, _objectAssign2['default'])({
	                    className: className,
	                    style: style
	                }, events));
	            }
	            return _react2['default'].cloneElement(child, events);
	        }
	    }]);
	    return Touchable;
	}(_react2['default'].Component);
	
	exports['default'] = Touchable;
	
	Touchable.defaultProps = {
	    fixClickPenetration: false,
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
	module.exports = exports['default'];

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.shouldFirePress = shouldFirePress;
	
	var _objectAssign = __webpack_require__(86);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function PressEvent(nativeEvent) {
	    var _this = this;
	
	    this.nativeEvent = nativeEvent;
	    ['type', 'currentTarget', 'target', 'touches', 'changedTouches'].forEach(function (m) {
	        _this[m] = nativeEvent[m];
	    });
	    if (!nativeEvent.$pressSeq) {
	        nativeEvent.$pressSeq = 1;
	    } else {
	        nativeEvent.$pressSeq += 1;
	    }
	    this.$pressSeq = nativeEvent.$pressSeq;
	}
	(0, _objectAssign2['default'])(PressEvent.prototype, {
	    preventDefault: function preventDefault() {
	        this.nativeEvent.preventDefault();
	    },
	    stopPropagation: function stopPropagation() {
	        var nativeEvent = this.nativeEvent,
	            $pressSeq = this.$pressSeq;
	
	        if (nativeEvent.$stopPressSeq) {
	            return;
	        }
	        nativeEvent.$stopPressSeq = $pressSeq;
	    }
	});
	function shouldFirePress(e) {
	    var nativeEvent = e.nativeEvent,
	        $pressSeq = e.$pressSeq;
	
	    if (!nativeEvent.$stopPressSeq) {
	        return true;
	    }
	    return nativeEvent.$stopPressSeq >= $pressSeq;
	}
	exports['default'] = PressEvent;

/***/ })

});
//# sourceMappingURL=popup.js.map