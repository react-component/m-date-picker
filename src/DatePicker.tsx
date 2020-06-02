import React from 'react';
import MultiPicker from 'rmc-picker/lib/MultiPicker';
import Picker from 'rmc-picker/lib/Picker';
import IDatePickerProps from './IDatePickerProps';
import defaultLocale from './locale/en_US';

function getDaysInMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function pad(n) {
  return n < 10 ? `0${n}` : n + '';
}

function cloneDate(date) {
  return new Date(+date);
}

function setMonth(date, month) {
  date.setDate(Math.min(date.getDate(), getDaysInMonth(new Date(date.getFullYear(), month))));
  date.setMonth(month);
}

const DATETIME = 'datetime';
const DATE = 'date';
const TIME = 'time';
const MONTH = 'month';
const YEAR = 'year';
const ONE_DAY = 24 * 60 * 60 * 1000;
const DAY_ORDER = 'd';
const MONTH_ORDER = 'M';
const YEAR_ORDER = 'y';
const HOUR_ORDER = 'H';
const MINUTE_ORDER = 'm';
const AMPM_ORDER = 'ampm';

class DatePicker extends React.Component<IDatePickerProps, any> {
  static defaultProps = {
    prefixCls: 'rmc-date-picker',
    pickerPrefixCls: 'rmc-picker',
    locale: defaultLocale,
    mode: DATE,
    disabled: false,
    minuteStep: 1,
    onDateChange() {
    },
    use12Hours: false,
  };

  defaultMinDate: any;
  defaultMaxDate: any;
  dateOrder: string[];
  dateIndex: {
    day: number;
    month: number;
    year: number;
    hour: number;
    minute: number;
    ampm: number;
  };

  constructor(props: IDatePickerProps) {
    super(props);
    this.state = {
      date: props.date || props.defaultDate,
    };
    let dateOrder = props.dateOrder;
    const mode = props.mode;
    if (!dateOrder) {
      if (mode === DATETIME) {
        dateOrder = [
          YEAR_ORDER,
          MONTH_ORDER,
          DAY_ORDER,
          HOUR_ORDER,
          MINUTE_ORDER,
          AMPM_ORDER,
        ];
      }
      if (mode === TIME) {
        dateOrder = [HOUR_ORDER, MINUTE_ORDER, AMPM_ORDER];
      }
      if (mode === DATE) {
        dateOrder = [DAY_ORDER, MONTH_ORDER, YEAR_ORDER];
      }
      if (mode === YEAR) {
        dateOrder = [YEAR_ORDER];
      }
      if (mode === MONTH) {
        dateOrder = [YEAR_ORDER, MONTH_ORDER];
      }
    }
    this.dateIndex = {
      day: dateOrder!.indexOf(DAY_ORDER),
      month: dateOrder!.indexOf(MONTH_ORDER),
      year: dateOrder!.indexOf(YEAR_ORDER),
      hour: dateOrder!.indexOf(HOUR_ORDER),
      minute: dateOrder!.indexOf(MINUTE_ORDER),
      ampm: dateOrder!.indexOf(AMPM_ORDER),
    };
    this.dateOrder = dateOrder!;
  }

  componentWillReceiveProps(nextProps) {
    if ('date' in nextProps) {
      this.setState({
        date: nextProps.date || nextProps.defaultDate,
      });
    }
  }

  getNewDate = (values: string[], index: number) => {
    const value = parseInt(values[index], 10);
    let newValue = cloneDate(this.getDate());
    switch (index) {
      case this.dateIndex.year:
        newValue.setFullYear(value);
        break;
      case this.dateIndex.month:
        // Note: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth
        // e.g. from 2017-03-31 to 2017-02-28
        setMonth(newValue, value);
        break;
      case this.dateIndex.day:
        newValue.setDate(value);
        break;
      case this.dateIndex.hour:
        this.setHours(newValue, value);
        break;
      case this.dateIndex.minute:
        newValue.setMinutes(value);
        break;
      case this.dateIndex.ampm:
        this.setAmPm(newValue, value);
        break;
      default:
        break;
    }
    return this.clipDate(newValue);
  }

  onValueChange = (values, index) => {
    const props = this.props;
    const newValue = this.getNewDate(values, index);
    if (!('date' in props)) {
      this.setState({
        date: newValue,
      });
    }
    if (props.onDateChange) {
      props.onDateChange(newValue);
    }
    if (props.onValueChange) {
      props.onValueChange(values, index);
    }
  }

  onScrollChange = (values, index) => {
    const props = this.props;
    if (props.onScrollChange) {
      const newValue = this.getNewDate(values, index);
      props.onScrollChange(newValue, values, index);
    }
  }

  setHours(date, hour) {
    if (this.props.use12Hours) {
      const dh = date.getHours();
      let nhour = hour;
      nhour = dh >= 12 ? hour + 12 : hour;
      nhour = nhour >= 24 ? 0 : nhour; // Make sure no more than one day
      date.setHours(nhour);
    } else {
      date.setHours(hour);
    }
  }

  setAmPm(date, index) {
    if (index === 0) {
      date.setTime(+date - ONE_DAY / 2);
    } else {
      date.setTime(+date + ONE_DAY / 2);
    }
  }

  getDefaultMinDate() {
    if (!this.defaultMinDate) {
      this.defaultMinDate = new Date(2000, 1, 1, 0, 0, 0);
    }
    return this.defaultMinDate;
  }

  getDefaultMaxDate() {
    if (!this.defaultMaxDate) {
      this.defaultMaxDate = new Date(2030, 1, 1, 23, 59, 59);
    }
    return this.defaultMaxDate;
  }

  getDate() {
    return this.clipDate(this.state.date || this.getDefaultMinDate());
  }

  // used by rmc-picker/lib/PopupMixin.js
  getValue() {
    return this.getDate();
  }

  getMinYear() {
    return this.getMinDate().getFullYear();
  }

  getMaxYear() {
    return this.getMaxDate().getFullYear();
  }

  getMinMonth() {
    return this.getMinDate().getMonth();
  }

  getMaxMonth() {
    return this.getMaxDate().getMonth();
  }

  getMinDay() {
    return this.getMinDate().getDate();
  }

  getMaxDay() {
    return this.getMaxDate().getDate();
  }

  getMinHour() {
    return this.getMinDate().getHours();
  }

  getMaxHour() {
    return this.getMaxDate().getHours();
  }

  getMinMinute() {
    return this.getMinDate().getMinutes();
  }

  getMaxMinute() {
    return this.getMaxDate().getMinutes();
  }

  getMinDate() {
    return this.props.minDate || this.getDefaultMinDate();
  }

  getMaxDate() {
    return this.props.maxDate || this.getDefaultMaxDate();
  }

  getDateData() {
    const { locale, formatMonth, formatDay, mode } = this.props;
    const date = this.getDate();
    const selYear = date.getFullYear();
    const selMonth = date.getMonth();
    const minDateYear = this.getMinYear();
    const maxDateYear = this.getMaxYear();
    const minDateMonth = this.getMinMonth();
    const maxDateMonth = this.getMaxMonth();
    const minDateDay = this.getMinDay();
    const maxDateDay = this.getMaxDay();
    const years: any[] = [];
    for (let i = minDateYear; i <= maxDateYear; i++) {
      years.push({
        value: i + '',
        label: i + locale.year + '',
      });
    }
    const yearColObj = { [YEAR_ORDER]: { key: 'year', props: { children: years } } };
    if (mode === YEAR) {
      return yearColObj;
    }

    const months: any[] = [];
    let minMonth = 0;
    let maxMonth = 11;
    if (minDateYear === selYear) {
      minMonth = minDateMonth;
    }
    if (maxDateYear === selYear) {
      maxMonth = maxDateMonth;
    }
    for (let i = minMonth; i <= maxMonth; i++) {
      const label = formatMonth ? formatMonth(i, date) : i + 1 + locale.month + '';
      months.push({
        value: i + '',
        label,
      });
    }
    const monthColObj = { [MONTH_ORDER]: { key: 'month', props: { children: months } } };
    if (mode === MONTH) {
      return { ...yearColObj, ...monthColObj };
    }

    const days: any[] = [];
    let minDay = 1;
    let maxDay = getDaysInMonth(date);

    if (minDateYear === selYear && minDateMonth === selMonth) {
      minDay = minDateDay;
    }
    if (maxDateYear === selYear && maxDateMonth === selMonth) {
      maxDay = maxDateDay;
    }
    for (let i = minDay; i <= maxDay; i++) {
      const label = formatDay ? formatDay(i, date) : i + locale.day + '';
      days.push({
        value: i + '',
        label,
      });
    }
    return {
      ...yearColObj,
      ...monthColObj,
      ...{ [DAY_ORDER]: { key: 'day', props: { children: days } } },
    };
  }

  getDisplayHour(rawHour) {
    // 12 hour am (midnight 00:00) -> 12 hour pm (noon 12:00) -> 12 hour am (midnight 00:00)
    if (this.props.use12Hours) {
      if (rawHour === 0) {
        rawHour = 12;
      }
      if (rawHour > 12) {
        rawHour -= 12;
      }
      return rawHour;
    }
    return rawHour;
  }

  getTimeData(date: Date) {
    let { minHour = 0, maxHour = 23, minMinute = 0, maxMinute = 59 } = this.props;
    const { mode, locale, minuteStep, use12Hours } = this.props;
    const minDateMinute = this.getMinMinute();
    const maxDateMinute = this.getMaxMinute();
    const minDateHour = this.getMinHour();
    const maxDateHour = this.getMaxHour();
    const hour = date.getHours();
    if (mode === DATETIME) {
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      const minDateYear = this.getMinYear();
      const maxDateYear = this.getMaxYear();
      const minDateMonth = this.getMinMonth();
      const maxDateMonth = this.getMaxMonth();
      const minDateDay = this.getMinDay();
      const maxDateDay = this.getMaxDay();
      if (minDateYear === year && minDateMonth === month && minDateDay === day) {
        minHour = minDateHour;
        if (minDateHour === hour) {
          minMinute = minDateMinute;
        }
      }
      if (maxDateYear === year && maxDateMonth === month && maxDateDay === day) {
        maxHour = maxDateHour;
        if (maxDateHour === hour) {
          maxMinute = maxDateMinute;
        }
      }
    } else {
      minHour = minDateHour;
      if (minDateHour === hour) {
        minMinute = minDateMinute;
      }
      maxHour = maxDateHour;
      if (maxDateHour === hour) {
        maxMinute = maxDateMinute;
      }
    }

    const hours: any[] = [];
    if ((minHour === 0 && maxHour === 0) || (minHour !== 0 && maxHour !== 0)) {
      minHour = this.getDisplayHour(minHour);
    } else if (minHour === 0 && use12Hours) {
      minHour = 1;
      hours.push({ value: '0', label: locale.hour ? '12' + locale.hour : '12' });
    }
    maxHour = this.getDisplayHour(maxHour);
    for (let i = minHour; i <= maxHour; i++) {
      hours.push({
        value: i + '',
        label: locale.hour ? i + locale.hour + '' : pad(i),
      });
    }

    const minutes: any[] = [];
    const selMinute = date.getMinutes();
    for (let i = minMinute; i <= maxMinute; i += minuteStep!) {
      minutes.push({
        value: i + '',
        label: locale.minute ? i + locale.minute + '' : pad(i),
      });
      if (selMinute > i && selMinute < i + minuteStep!) {
        minutes.push({
          value: selMinute + '',
          label: locale.minute ? selMinute + locale.minute + '' : pad(selMinute),
        });
      }
    }
    let amapmObj = {};
    if (use12Hours) {
      amapmObj = {
        [AMPM_ORDER]: {
          key: 'ampm',
          props: {
            children: [
              { value: '0', label: locale.am },
              { value: '1', label: locale.pm },
            ],
          },
        },
      };
    }
    const colsObj = {
      [HOUR_ORDER]: { key: 'hours', props: { children: hours } },
      [MINUTE_ORDER]: { key: 'minutes', props: { children: minutes } },
      ...amapmObj,
    };
    return { colsObj, selMinute };
  }

  clipDate(date) {
    const { mode } = this.props;
    const minDate = this.getMinDate();
    const maxDate = this.getMaxDate();
    if (mode === DATETIME) {
      if (date < minDate) {
        return cloneDate(minDate);
      }
      if (date > maxDate) {
        return cloneDate(maxDate);
      }
    } else if (mode === DATE || mode === YEAR || mode === MONTH) {
      // compare-two-dates: https://stackoverflow.com/a/14629978/2190503
      if (+date + ONE_DAY <= minDate) {
        return cloneDate(minDate);
      }
      if (date >= +maxDate + ONE_DAY) {
        return cloneDate(maxDate);
      }
    } else if (mode === TIME) {
      const maxHour = maxDate.getHours();
      const maxMinutes = maxDate.getMinutes();
      const minHour = minDate.getHours();
      const minMinutes = minDate.getMinutes();
      const hour = date.getHours();
      const minutes = date.getMinutes();
      if (hour < minHour || hour === minHour && minutes < minMinutes) {
        return cloneDate(minDate);
      }
      if (hour > maxHour || hour === maxHour && minutes > maxMinutes) {
        return cloneDate(maxDate);
      }
    }
    return date;
  }

  getValueCols() {
    const { mode, use12Hours } = this.props;
    const date = this.getDate();
    let colsObj = {};
    let valueObj = {};

    if (mode === YEAR) {
      return {
        colsObj: this.getDateData(),
        valueObj: { [YEAR_ORDER]: date.getFullYear() + '' },
      };
    }

    if (mode === MONTH) {
      return {
        colsObj: this.getDateData(),
        valueObj: {
          [YEAR_ORDER]: date.getFullYear() + '',
          [MONTH_ORDER]: date.getMonth() + '',
        },
      };
    }

    if (mode === DATETIME || mode === DATE) {
      colsObj = this.getDateData();
      valueObj = {
        [YEAR_ORDER]: date.getFullYear() + '',
        [MONTH_ORDER]: date.getMonth() + '',
        [DAY_ORDER]: date.getDate() + '',
      };
    }

    if (mode === DATETIME || mode === TIME) {
      const time = this.getTimeData(date);
      colsObj = { ...colsObj, ...time.colsObj };
      const hour = date.getHours();
      let dtValueObj: any = { [HOUR_ORDER]: hour + '', [MINUTE_ORDER]: time.selMinute + '' };
      let nhour = hour;
      if (use12Hours) {
        nhour = hour > 12 ? hour - 12 : hour;
        dtValueObj = {
          [HOUR_ORDER]: nhour + '',
          [MINUTE_ORDER]: time.selMinute + '',
          [AMPM_ORDER]: (hour >= 12 ? 1 : 0) + '',
        };
      }
      valueObj = { ...valueObj, ...dtValueObj };
    }
    return {
      valueObj,
      colsObj,
    };
  }

  getOrderedValueCols() {
    const { valueObj, colsObj }: any = this.getValueCols();
    const newValue: any[] = [];
    const newCols: any[] = [];
    this.dateOrder.forEach((orderKey: string, index: number) => {
      newValue[index] = valueObj[orderKey];
      newCols[index] = colsObj[orderKey];
    });

    return { value: newValue, cols: newCols };
  }

  render() {
    const { value, cols } = this.getOrderedValueCols();
    const {
      disabled, pickerPrefixCls, prefixCls, rootNativeProps, className, style, itemStyle,
    } = this.props;
    const multiStyle = {
      flexDirection: 'row',
      alignItems: 'center',
      ...style,
    };
    return (
      <MultiPicker
        style={multiStyle}
        rootNativeProps={rootNativeProps}
        className={className}
        prefixCls={prefixCls}
        selectedValue={value}
        onValueChange={this.onValueChange}
        onScrollChange={this.onScrollChange}
      >
        {cols.map(p => (
          <Picker
            style={{ flex: 1 }}
            key={p.key}
            disabled={disabled}
            prefixCls={pickerPrefixCls}
            itemStyle={itemStyle}
          >
            {p.props.children.map(item => (
              <Picker.Item key={item.value} value={item.value}>
                {item.label}
              </Picker.Item>
            ))}
          </Picker>
        ))}
      </MultiPicker>
    );
  }
}

export default DatePicker;
