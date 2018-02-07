import React from 'react';
import IDatePickerProps from './IDatePickerProps';
import PopupPicker from 'rmc-picker/lib/Popup';
import { IPopupPickerProps } from 'rmc-picker/lib/PopupPickerTypes';

export interface IPopupDatePickerProps extends IPopupPickerProps {
  datePicker: React.ReactElement<IDatePickerProps>;
  onChange?: (date?: any) => void;
  date?: any;
}

class PopupDatePicker extends React.Component<IPopupDatePickerProps, any> {
  static defaultProps = {
    pickerValueProp: 'date',
    pickerValueChangeProp: 'onDateChange',
  };

  onOk = (v) => {
    const { onChange, onOk } = this.props;
    if (onChange) {
      onChange(v);
    }
    if (onOk) {
      onOk(v);
    }
  }

  render() {
    return (<PopupPicker
      picker={this.props.datePicker}
      value={this.props.date}
      {...this.props}
      onOk={this.onOk}
    />);
  }
}

export default PopupDatePicker;
