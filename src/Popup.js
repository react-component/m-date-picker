import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import DatePicker from './DatePicker';
import Modal from 'rmc-modal';
import GregorianCalendar from 'gregorian-calendar';
import defaultLocale from './locale/en_US';

function addEventListener(target, eventType, cb) {
  /* eslint camelcase: 2 */
  const callback = ReactDOM.unstable_batchedUpdates ? function run(e) {
    ReactDOM.unstable_batchedUpdates(cb, e);
  } : cb;
  target.addEventListener(eventType, callback, false);
  return {
    remove() {
      target.removeEventListener(eventType, callback, false);
    },
  };
}

function contains(root, n) {
  let node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
}


function noop() {
}

const PopupPicker = React.createClass({
  propTypes: {
    visible: PropTypes.bool,
    mode: PropTypes.string,
    onPickerChange: PropTypes.func,
    onChange: PropTypes.func,
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
      Modal,
      modalPrefix: 'rmc-modal',
      onVisibleChange: noop,
      mode: 'datetime',
      locale: defaultLocale,
      okText: 'Ok',
      dismissText: 'Dismiss',
      style: {},
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
      if (!this.onDocumentClickListener) {
        this.onDocumentClickListener = addEventListener(document, 'click', this.onDocumentClick);
      }
      ReactDOM.render(this.getModal(), this.popupContainer);
    } else {
      if (this.onDocumentClickListener) {
        this.onDocumentClickListener.remove();
        this.onDocumentClickListener = null;
      }
      ReactDOM.unmountComponentAtNode(this.popupContainer);
    }
  },
  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.popupContainer);
    document.body.removeChild(this.popupContainer);
  },
  onPickerChange(pickerDate) {
    this.setState({
      pickerDate,
    });
    this.props.onPickerChange(pickerDate);
  },
  onChange() {
    this.fireVisibleChange(false);
    this.props.onChange(this.state.pickerDate || this.props.date);
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
  onDocumentClick(e) {
    if (e.target !== this.modalContent && !contains(this.modalContent, e.target)) {
      this.fireVisibleChange(false);
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
    const { Modal: ModalClass } = props;
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
    return (<ModalClass
      className={props.className}
      modalPrefix={props.modalPrefix}
      visible
      style={props.style}
      onDismiss={this.onDismiss}
    >
      <div ref={this.saveModalContent}>
        <div className={`${props.prefixCls}-popup-header`}>
          <div className={`${props.prefixCls}-popup-item`} onClick={this.onDismiss}>
            {props.dismissText}
          </div>
          <div className={`${props.prefixCls}-popup-item`}></div>
          <div className={`${props.prefixCls}-popup-item`} onClick={this.onChange}>
            {props.okText}
          </div>
        </div>
        <DatePicker
          date={this.state.pickerDate || props.date}
          mode={props.mode}
          locale={props.locale}
          onDateChange={this.onPickerChange}
          {...dpProps}
        />
      </div>
    </ModalClass>);
  },
  saveModalContent(content) {
    this.modalContent = content;
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
