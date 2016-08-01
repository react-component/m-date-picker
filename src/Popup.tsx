import * as React from 'react';
import DatePicker from './DatePicker';
import defaultLocale from './locale/en_US';
import {noop, exclude} from './utils';
import PopupPicker from 'rmc-picker/lib/Popup';
import construct = Reflect.construct;
import {PopupPickerProps} from 'rmc-picker/lib/PopupPickerTypes';

const EXCLUDE_PROPS = {
  popupPrefixCls:1,
  pickerPrefixCls:1,
  minDate:1,
  maxDate:1,
  mode:1,
  onPickerChange:1,
  onChange:1,
  locale:1,
  date:1,
};

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
    const props:PopupPickerProps = exclude(this.props, EXCLUDE_PROPS);
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
