interface IDatePickerProps {
  date?: any;
  defaultDate?: any;
  minDate?: any;
  maxDate?: any;
  mode?: string;
  disabled?: boolean;
  locale?: any;
  minuteStep?: number;
  formatMonth?: (month: number, date?: any) => any;
  formatDay?: (day: number, date?: any) => any;
  formatRecentDate?: (year: number, month: number, day: number, date?: any) => any;
  onDateChange?: (date: any) => void;
  onValueChange?: (vals: any, index: number) => void;
  style?: any;
  /** web only */
  prefixCls?: string;
  rootNativeProps?: {};
  pickerPrefixCls?: string;
  className?: string;
  use12Hours?: boolean;
}

export default IDatePickerProps;
