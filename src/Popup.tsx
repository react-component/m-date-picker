import React from 'react';
import DatePickerProps from './DatePickerProps';
import PopupPicker from 'rmc-picker/lib/Popup';
import { PopupPickerProps } from 'rmc-picker/lib/PopupPickerTypes';

function noop() {
}

export interface PopupDatePickerProps extends PopupPickerProps {
  prefixCls?: string;
  datePicker: React.ReactElement<DatePickerProps>;
  onPickerChange?: (date) => void;
  onChange?: (date) => void;
  date?: any;
}

export default class PopupDatePicker extends React.Component<PopupDatePickerProps, any> {
  static defaultProps = {
    onVisibleChange: noop,
    prefixCls: 'rmc-picker-popup',
    onChange: noop,
    onDismiss: noop,
    onPickerChange: noop,
  };

  datePicker: any;

  constructor(props: PopupDatePickerProps) {
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
    if (this.props.datePicker.props.onDateChange) {
      this.props.datePicker.props.onDateChange(pickerDate);
    }
  };

  onOk = () => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(
        this.datePicker.getDate()
      );
    }
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

  saveRef = (datePicker) => {
    this.datePicker = datePicker;
  };

  fireVisibleChange = (visible) => {
    if (this.state.visible !== visible) {
      if (!('visible' in this.props)) {
        this.setVisibleState(visible);
      }
      const { onVisibleChange } = this.props;
      if (onVisibleChange) {
        onVisibleChange(visible);
      }
    }
  };

  render() {
    const dataPicker = React.cloneElement(this.props.datePicker, {
      date: this.state.pickerDate || this.props.date,
      onDateChange: this.onPickerChange,
      ref: this.saveRef,
    } as DatePickerProps);

    return (<PopupPicker
      {...this.props}
      onVisibleChange={this.fireVisibleChange}
      onOk={this.onOk}
      content={dataPicker}
      visible={this.state.visible}
    />);
  }
}
