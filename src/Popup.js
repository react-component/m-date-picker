import React, { PropTypes } from 'react';
import DatePicker from './DatePicker';
import GregorianCalendar from 'gregorian-calendar';
import defaultLocale from './locale/en_US';
import { noop, pick } from './utils';
import PopupPicker from 'rmc-picker/lib/Popup';

const PROPS = ['onDismiss', 'children', 'style',
  'okText', 'dismissText', 'title', 'className',
  'popupTransitionName', 'maskTransitionName'];

const PopupDatePicker = React.createClass({
  propTypes: {
    visible: PropTypes.bool,
    mode: PropTypes.string,
    onPickerChange: PropTypes.func,
    onChange: PropTypes.func,
    popupPrefixCls: PropTypes.string,
    prefixCls: PropTypes.string,
    pickerPrefixCls: PropTypes.string,
    onVisibleChange: PropTypes.func,
    locale: PropTypes.object,
    date: PropTypes.object,
  },
  getDefaultProps() {
    return {
      onVisibleChange: noop,
      popupPrefixCls: 'rmc-picker-popup',
      mode: 'datetime',
      locale: defaultLocale,
      onChange: noop,
      onDismiss: noop,
      onPickerChange: noop,
    };
  },
  getInitialState() {
    return {
      pickerDate: null,
      visible: this.props.visible || false,
    };
  },
  componentWillReceiveProps(nextProps) {
    if ('visible' in nextProps) {
      this.setVisibleState(nextProps.visible);
    }
  },
  onPickerChange(pickerDate) {
    this.setState({
      pickerDate,
    });
    this.props.onPickerChange(pickerDate);
  },
  onOk() {
    this.props.onChange(this.state.pickerDate || this.props.date);
  },
  setVisibleState(visible) {
    this.setState({
      visible,
    });
    if (!visible) {
      this.setState({
        pickerDate: null,
      });
    }
  },
  getNow(props) {
    const date = this.getGregorianCalendar(props);
    date.setTime(Date.now());
    return date;
  },
  getGregorianCalendar(props) {
    return new GregorianCalendar((props || this.props).locale.calendar);
  },
  getModal() {
    const props = this.props;
    const dpProps = {};
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
    return (
      <DatePicker
        date={this.state.pickerDate || props.date}
        mode={props.mode}
        locale={props.locale}
        onDateChange={this.onPickerChange}
        {...dpProps}
      />
    );
  },
  fireVisibleChange(visible) {
    if (this.state.visible !== visible) {
      if (!('visible' in this.props)) {
        this.setVisibleState(visible);
      }
      this.props.onVisibleChange(visible);
    }
  },
  render() {
    const props = pick(this.props, PROPS);
    return (<PopupPicker
      {...props}
      onVisibleChange={this.fireVisibleChange}
      onOk={this.onOk}
      content={this.getModal()}
      prefixCls={this.props.popupPrefixCls}
      visible={this.state.visible}
    />);
  },
});

export default PopupDatePicker;
