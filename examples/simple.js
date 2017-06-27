webpackJsonp([2],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rmc_picker_assets_index_css__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rmc_picker_assets_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rmc_picker_assets_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rmc_date_picker_assets_index_less__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rmc_date_picker_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rmc_date_picker_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_index__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_locale_zh_CN__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_locale_en_US__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment_locale_zh_cn__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment_locale_zh_cn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_moment_locale_zh_cn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_moment_locale_en_gb__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_moment_locale_en_gb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_moment_locale_en_gb__);




/* tslint:disable:no-console */










var cn = location.search.indexOf('cn') !== -1;
var minDate = __WEBPACK_IMPORTED_MODULE_9_moment___default()([2015, 8, 15, 0, 0, 0]);
var maxDate = __WEBPACK_IMPORTED_MODULE_9_moment___default()([2018, 1, 1, 23, 59, 59]);
var now = __WEBPACK_IMPORTED_MODULE_9_moment___default()();
if (cn) {
    // minDate.locale('zh-cn').utcOffset(8);
    // maxDate.locale('zh-cn').utcOffset(8);
    now.locale('zh-cn').utcOffset(8);
} else {
    // minDate.locale('en-gb').utcOffset(0);
    // maxDate.locale('en-gb').utcOffset(0);
    now.locale('en-gb').utcOffset(0);
}
function format(date) {
    return date.format('YYYY-MM-DD HH:mm');
}

var Demo = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Demo, _React$Component);

    function Demo(props) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Demo);

        var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).call(this, props));

        _this.onDateChange = function (date) {
            console.log('onChange', format(date));
            _this.setState({
                date: date
            });
        };
        _this.changeMode = function (e) {
            _this.setState({
                mode: e.target.value
            });
        };
        _this.state = {
            date: null,
            mode: 'datetime'
        };
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Demo, [{
        key: 'render',
        value: function render() {
            var props = this.props;
            var _state = this.state,
                date = _state.date,
                mode = _state.mode;

            return __WEBPACK_IMPORTED_MODULE_7_react__["createElement"]("div", { style: { margin: '10px 30px' } }, __WEBPACK_IMPORTED_MODULE_7_react__["createElement"]("h2", null, "date picker"), __WEBPACK_IMPORTED_MODULE_7_react__["createElement"]("select", { value: this.state.mode, onChange: this.changeMode }, __WEBPACK_IMPORTED_MODULE_7_react__["createElement"]("option", null, "datetime"), __WEBPACK_IMPORTED_MODULE_7_react__["createElement"]("option", null, "date"), __WEBPACK_IMPORTED_MODULE_7_react__["createElement"]("option", null, "time"), __WEBPACK_IMPORTED_MODULE_7_react__["createElement"]("option", null, "month"), __WEBPACK_IMPORTED_MODULE_7_react__["createElement"]("option", null, "year")), __WEBPACK_IMPORTED_MODULE_7_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_7_react__["createElement"]("span", null, date && format(date) || format(now)), __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__src_index__["a" /* default */], { rootNativeProps: { 'data-xx': 'yy' }, defaultDate: date || now, mode: mode, locale: props.locale, maxDate: maxDate, minDate: minDate, onDateChange: this.onDateChange })));
        }
    }]);

    return Demo;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

Demo.defaultProps = {
    locale: cn ? __WEBPACK_IMPORTED_MODULE_10__src_locale_zh_CN__["a" /* default */] : __WEBPACK_IMPORTED_MODULE_11__src_locale_en_US__["a" /* default */]
};
__WEBPACK_IMPORTED_MODULE_8_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_7_react__["createElement"](Demo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(147);


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DatePicker__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__DatePicker__["a"]; });


/***/ })

},[318]);
//# sourceMappingURL=simple.js.map