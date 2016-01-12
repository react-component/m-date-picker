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
    visible: PropTypes.bool,
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
      pickerDate: null,
      visible: this.props.visible || false,
    };
  },
  componentDidMount() {
    this.popupContainer = document.createElement('div');
    document.body.appendChild(this.popupContainer);
  },
  componentWillReceiveProps(nextProps) {
    if ('visible' in nextProps) {
      this.setVisibleState(nextProps.visible);
    }
  },
  componentDidUpdate() {
    if (this.state.visible) {
      ReactDOM.render(this.getModal(), this.popupContainer);
    } else {
      ReactDOM.unmountComponentAtNode(this.popupContainer);
    }
  },
  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.popupContainer);
    document.body.removeChild(this.popupContainer);
  },
  onDateChange(pickerDate) {
    this.setState({
      pickerDate,
    });
    this.props.onDateChange(pickerDate);
  },
  onOk() {
    this.fireVisibleChange(false);
    this.props.onOk(this.state.pickerDate);
  },
  onDismiss() {
    this.fireVisibleChange(false);
    this.props.onDismiss();
  },
  onTriggerClick() {
    this.fireVisibleChange(!this.state.visible);
    const child = React.Children.only(this.props.children);
    const childProps = child.props || {};
    if (childProps.onClick) {
      childProps.onClick();
    }
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
    const {Modal: ModalClass} = props;
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
    return (<ModalClass className={props.className}
                        modalPrefix={props.modalPrefix}
                        visible
                        style={props.style}
                        onDismiss={this.onDismiss}>
      <div className={`${props.prefixCls}-popup-header`}>
        <div className={`${props.prefixCls}-popup-item`} onClick={this.onDismiss}>{props.dismissText}</div>
        <div className={`${props.prefixCls}-popup-item`}></div>
        <div className={`${props.prefixCls}-popup-item`} onClick={this.onOk}>{props.okText}</div>
      </div>
      <DatePicker date={this.state.pickerDate || props.date}
                  mode={props.mode}
                  locale={props.locale}
                  onDateChange={this.onDateChange}
        {...dpProps} />
    </ModalClass>);
  },
  fireVisibleChange(visible) {
    if (!('visible' in this.props)) {
      this.setVisibleState(visible);
    }
    this.props.onVisibleChange(visible);
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
