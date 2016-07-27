export interface DatePickerProps {
  date?: any;
  defaultDate?: any;
  minDate?: any;
  maxDate?: any;
  mode?: string;
  locale?: any;
  onDateChange?: (date: any) => void;
  /** web only */
  prefixCls?:string;
  /** web only */
  pickerPrefixCls?:string;
  /** web only */
  className?:string;
}

export interface DatePickerState {
  date?: any;
}
