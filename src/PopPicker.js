import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from './DatePicker';
import {createChainedFunction} from 'rc-util';
import Modal from 'rmc-modal';
import GregorianCalendarFormat from 'gregorian-calendar-format';
import GregorianCalendar from 'gregorian-calendar';
import zhCn from 'gregorian-calendar-format/lib/locale/zh_CN';
import zhCnCalendar from 'gregorian-calendar/lib/locale/zh_CN';

const formatter = GregorianCalendarFormat.getDateTimeInstance(GregorianCalendarFormat.Style.FULL,
  GregorianCalendarFormat.Style.FULL, zhCn);

function format(v) {
  return formatter.format(v);
}

const now = new GregorianCalendar(zhCnCalendar);
now.setTime(Date.now());

function noop() {
}

const PopPicker = React.createClass({
  propTypes: {
    mode: React.PropTypes.string,
  },
  getDefaultProps() {
    return {
      prefixCls: 'rmc-date-picker',
      pickerPrefixCls: 'rmc-picker',
      mode: 'datetime',
      locale: require('./locale/zh_CN'),
      date: now,
      okText: 'Ok',
      dismissText: 'Dismiss',
      style: {},
      onOk: noop,
      onDismiss: noop,
      onDateChange: noop,
    };
  },
  getInitialState() {
    return {
      date: this.props.date,
      modalVisible: false,
    };
  },
  componentWillReceiveProps(nextProps) {
    if ('date' in nextProps) {
      this.setState({
        date: nextProps.date,
      });
    }
  },
  componentDidMount() {
    this.componentDidUpdate();
  },
  componentDidUpdate(prevProps, prevState) {
    if (!this.state.modalVisible) {
      return;
    }
    ReactDOM.render(this.modal, this.getPopupContainer());
  },
  componentWillUnmount() {
    if (this.popupContainer) {
      ReactDOM.unmountComponentAtNode(this.popupContainer);
      document.body.removeChild(this.popupContainer);
      this.popupContainer = null;
    }
  },
  onDateChange(date) {
    this.pickerDate = date;
    this.props.onDateChange(date);
  },
  onOk() {
    const date = this.pickerDate || this.props.date;
    this.setState({
      date,
    });
    this.onDismiss();
    this.props.onOk(date);
  },
  setVisibleState(visible) {
    this.setState({
      modalVisible: visible,
    });
  },
  onDismiss() {
    this.pickerDate = null;
    this.setVisibleState(false);
    this.componentWillUnmount();
    this.props.onDismiss();
  },
  getPopupContainer() {
    if (!this.popupContainer) {
      this.popupContainer = document.createElement('div');
      document.body.appendChild(this.popupContainer);
    }
    return this.popupContainer;
  },
  render() {
    const props = this.props;
    const children = props.children;
    const child = React.Children.only(children);
    const childProps = child.props || {};
    const newChildProps = {};

    newChildProps.onClick = createChainedFunction(() => { this.setVisibleState(!this.state.visible) }, childProps.onClick);

    const dpProps = {
      pickerPrefixCls: props.pickerPrefixCls,
    };
    if (props.minDate) {
      dpProps.minDate = props.minDate;
    }
    if (props.maxDate) {
      dpProps.maxDate = props.maxDate;
    }

    this.modal = (<Modal className={props.className} style={props.style}
      visible={this.state.modalVisible} onDismiss={this.onDismiss}>
      <div className={`${props.prefixCls}-pop-picker-header`}>
        <div className={`${props.prefixCls}-pop-picker-item`} onClick={this.onDismiss}>{props.dismissText}</div>
        <div className={`${props.prefixCls}-pop-picker-item`}></div>
        <div className={`${props.prefixCls}-pop-picker-item`} onClick={this.onOk}>{props.okText}</div>
      </div>
      <DatePicker prefixCls={props.prefixCls}
            date={this.state.date}
            mode={props.mode}
            locale={props.locale}
            onDateChange={this.onDateChange}
            {...dpProps} />
    </Modal>);

    return React.cloneElement(child, newChildProps);
  },
});

export default PopPicker;
