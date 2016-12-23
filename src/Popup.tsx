import React from 'react';
import IDatePickerProps from './IDatePickerProps';
import PopupPicker from 'rmc-picker/lib/Popup';
import { PopupPickerProps } from 'rmc-picker/lib/PopupPickerTypes';

function noop() {
}

export interface IPopupDatePickerProps extends PopupPickerProps {
  prefixCls?: string;
  datePicker: React.ReactElement<IDatePickerProps>;
  onPickerChange?: (date?) => void;
  onChange?: (date?) => void;
  date?: any;
}
const PopupDatePicker = React.createClass<IPopupDatePickerProps, any>({
  getDefaultProps() {
    return {
      onVisibleChange: noop,
      prefixCls: 'rmc-picker-popup',
      onChange: noop,
      onDismiss: noop,
      onPickerChange: noop,
    } as any;
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
    if (this.props.datePicker.props.onDateChange) {
      this.props.datePicker.props.onDateChange(pickerDate);
    }
  },

  onOk() {
    const { onChange } = this.props;
    if (onChange) {
      onChange(this.datePicker.getDate());
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

  saveRef(datePicker) {
    this.datePicker = datePicker;
  },

  fireVisibleChange(visible) {
    if (this.state.visible !== visible) {
      if (!('visible' in this.props)) {
        this.setVisibleState(visible);
      }
      const { onVisibleChange } = this.props;
      if (onVisibleChange) {
        onVisibleChange(visible);
      }
    }
  },

  render() {
    const dataPicker = React.cloneElement(this.props.datePicker, {
      date: this.state.pickerDate || this.props.date,
      onDateChange: this.onPickerChange,
      ref: this.saveRef,
    } as IDatePickerProps);

    return (<PopupPicker
      {...this.props}
      onVisibleChange={this.fireVisibleChange}
      onOk={this.onOk}
      content={dataPicker}
      visible={this.state.visible}
    />);
  },
});

export default PopupDatePicker;
