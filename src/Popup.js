import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import DatePicker from './DatePicker';
import Modal from 'rmc-modal';
import GregorianCalendar from 'gregorian-calendar';
import defaultLocale from './locale/en_US';

function noop() {
}

const PopupPicker = React.createClass({
  propTypes: {
    mode: PropTypes.string,
    onDateChange: PropTypes.func,
    onOk: PropTypes.func,
    onVisibleChange: PropTypes.func,
    locale: PropTypes.object,
    date: PropTypes.object,
    Modal: PropTypes.func,
    children: PropTypes.element,
    onDismiss: PropTypes.func,
  },
  getDefaultProps() {
    return {
      prefixCls: 'rmc-date-picker',
      Modal: Modal,
      modalPrefix: 'rmc-modal',
      onVisibleChange: noop,
      mode: 'datetime',
      locale: defaultLocale,
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
      visible: false,
    };
  },
  componentDidMount() {
    this.popupContainer = document.createElement('div');
    document.body.appendChild(this.popupContainer);
  },
  componentWillReceiveProps(nextProps) {
    if ('visible' in nextProps) {
      this.setState({
        visible: nextProps.visible,
      });
    }
  },
  componentDidUpdate() {
    if (this.state.visible) {
      ReactDOM.render(this.getModal(), this.popupContainer);
    } else {
      this.pickerDate = null;
      ReactDOM.unmountComponentAtNode(this.popupContainer);
    }
  },
  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.popupContainer);
    document.body.removeChild(this.popupContainer);
  },
  onDateChange(date) {
    this.pickerDate = date;
    this.props.onDateChange(date);
  },
  onOk() {
    const pickerDate = this.getPickerValue();
    this.setVisibleState(false);
    this.props.onOk(pickerDate);
  },
  onDismiss() {
    this.setVisibleState(false);
    this.props.onDismiss();
  },
  onTriggerClick() {
    this.setVisibleState(!this.state.visible);
    const child = React.Children.only(this.props.children);
    const childProps = child.props || {};
    if (childProps.onClick) {
      childProps.onClick();
    }
  },
  setVisibleState(visible) {
    if (!('visible' in this.props)) {
      this.setState({
        visible,
      });
    }
    this.props.onVisibleChange(visible);
  },
  getPickerValue() {
    let date = this.pickerDate || this.props.date;
    if (!date) {
      date = this.getGregorianCalendar();
      date.setTime(Date.now());
    }
    return date;
  },
  getGregorianCalendar() {
    return new GregorianCalendar(this.props.locale.calendar);
  },
  getModal() {
    const props = this.props;
    const {Modal: ModalClass} = this.props;
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
    if (props.maxDate) {
      dpProps.maxDate = props.maxDate;
    }
    return (<ModalClass className={props.className}
                   modalPrefix={props.modalPrefix}
                   visible
                   style={props.style}
                   onDismiss={this.onDismiss}>
      <div className={`${props.prefixCls}-pop-picker-header`}>
        <div className={`${props.prefixCls}-pop-picker-item`} onClick={this.onDismiss}>{props.dismissText}</div>
        <div className={`${props.prefixCls}-pop-picker-item`}></div>
        <div className={`${props.prefixCls}-pop-picker-item`} onClick={this.onOk}>{props.okText}</div>
      </div>
      <DatePicker date={this.getPickerValue()}
                  mode={props.mode}
                  locale={props.locale}
                  onDateChange={this.onDateChange}
        {...dpProps} />
    </ModalClass>);
  },
  render() {
    const props = this.props;
    const children = props.children;
    const child = React.Children.only(children);
    const newChildProps = {
      onClick: this.onTriggerClick,
    };
    return React.cloneElement(child, newChildProps);
  },
});

export default PopupPicker;
