import * as React from 'react';
import DatePicker from './DatePicker';
import defaultLocale from './locale/en_US';
import {noop, pick} from './utils';
import PopupPicker from 'rmc-picker/lib/Popup';
import construct = Reflect.construct;
import {PopupPickerProps} from 'rmc-picker/lib/PopupPickerTypes';

const PROPS = ['onDismiss', 'children', 'style', 'styles',
  'okText', 'dismissText', 'title', 'className', 'WrapComponent',
  'popupTransitionName', 'maskTransitionName'];

export interface PopupDatePickerProps extends PopupPickerProps {
  popupPrefixCls?:string;
  pickerPrefixCls?:string;
  minDate?:any;
  maxDate?:any;
  styles?:any;
  mode?:string;
  onPickerChange?:(date) => void;
  onChange?:(date) => void;
  locale?:any;
  date?:any;
}

export interface PopupDatePickerState {
  visible?:boolean;
  pickerDate?:any;
}

export default class PopupDatePicker extends React.Component<PopupDatePickerProps, PopupDatePickerState> {

  static defaultProps = {
    onVisibleChange: noop,
    popupPrefixCls: 'rmc-picker-popup',
    mode: 'datetime',
    locale: defaultLocale,
    onChange: noop,
    onDismiss: noop,
    onPickerChange: noop,
  };

  constructor(props:PopupDatePickerProps) {
    super(props);
    this.state = {
      pickerDate: null,
      visible: this.props.visible || false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('visible' in nextProps) {
      this.setVisibleState(nextProps.visible);
    }
  }

  onPickerChange = (pickerDate) => {
    this.setState({
      pickerDate,
    });
    this.props.onPickerChange(pickerDate);
  };

  onOk = () => {
    this.props.onChange(this.state.pickerDate || this.props.date);
  };

  setVisibleState(visible) {
    this.setState({
      visible,
    });
    if (!visible) {
      this.setState({
        pickerDate: null,
      });
    }
  }

  getModal() {
    const props = this.props;
    const dpProps:PopupDatePickerProps = {};
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
  }

  fireVisibleChange = (visible) => {
    if (this.state.visible !== visible) {
      if (!('visible' in this.props)) {
        this.setVisibleState(visible);
      }
      this.props.onVisibleChange(visible);
    }
  };

  render() {
    const props:PopupDatePickerProps = pick(this.props, PROPS);
    props.prefixCls = this.props.popupPrefixCls;
    return (<PopupPicker
      {...props}
      onVisibleChange={this.fireVisibleChange}
      onOk={this.onOk}
      content={this.getModal()}
      visible={this.state.visible}
    />);
  }
}
