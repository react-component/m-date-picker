import React from 'react';
import IDatePickerProps from './IDatePickerProps';
import PopupPicker from 'rmc-picker/lib/Popup';
import { PopupPickerProps } from 'rmc-picker/lib/PopupPickerTypes';

export interface IPopupDatePickerProps extends PopupPickerProps {
  datePicker: React.ReactElement<IDatePickerProps>;
  onChange?: (date?) => void;
  date?: any;
}
const PopupDatePicker = React.createClass<IPopupDatePickerProps, any>({
  getDefaultProps() {
    return {
      pickerValueProp: 'date',
      pickerValueChangeProp: 'onDateChange',
    } as any;
  },

  onOk(v) {
    const { onChange, onOk } = this.props;
    if (onChange) {
      onChange(v);
    }
    if (onOk) {
      onOk(v);
    }
  },

  render() {
    return (<PopupPicker
      picker={this.props.datePicker}
      value={this.props.date}
      {...this.props}
      onOk={this.onOk}
    />);
  },
});

export default PopupDatePicker;
