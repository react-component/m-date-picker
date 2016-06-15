export interface DatePickerProps {
  date?: any;
  defaultDate?: any;
  minDate?: any;
  maxDate?: any;
  mode?: string;
  locale?: any;
  onDateChange?: (date: any) => void;
}

export interface DatePickerState {
  date?: any;
}
