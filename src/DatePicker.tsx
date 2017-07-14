import React from 'react';
import MultiPicker from 'rmc-picker/lib/MultiPicker';
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

const smallPickerItem = {
  fontSize: 20,
};

const DATETIME = 'datetime';
const DATE = 'date';
const TIME = 'time';
const MONTH = 'month';
const YEAR = 'year';
const ONE_DAY = 24 * 60 * 60 * 1000;

class DatePicker extends React.Component<IDatePickerProps, any> {
  static defaultProps = {
    prefixCls: 'rmc-date-picker',
    pickerPrefixCls: 'rmc-picker',
    locale: defaultLocale,
    mode: DATE,
    minuteStep: 1,
    onDateChange() {
    },
  };

  state = {
    date: this.props.date || this.props.defaultDate,
  };

  defaultMinDate: any;
  defaultMaxDate: any;

  componentWillReceiveProps(nextProps) {
    if ('date' in nextProps) {
      this.setState({
        date: nextProps.date || nextProps.defaultDate,
      });
    }
  }

  onValueChange = (values, index) => {
    const value = parseInt(values[index], 10);
    const props = this.props;
    const { mode } = props;
    let newValue = cloneDate(this.getDate());
    if (mode === DATETIME || mode === DATE || mode === YEAR || mode === MONTH) {
      switch (index) {
        case 0:
          newValue.setFullYear(value);
          break;
        case 1:
          newValue.setMonth(value);
          break;
        case 2:
          newValue.setDate(value);
          break;
        case 3:
          newValue.setHours(value);
          break;
        case 4:
          newValue.setMinutes(value);
          break;
        default:
          break;
      }
    } else {
      switch (index) {
        case 0:
          newValue.setHours(value);
          break;
        case 1:
          newValue.setMinutes(value);
          break;
        default:
          break;
      }
    }
    newValue = this.clipDate(newValue);
    if (!('date' in props)) {
      this.setState({
        date: newValue,
      });
    }
    if (props.onDateChange) {
      props.onDateChange(newValue);
    }
  }

  getDefaultMinDate() {
    if (!this.defaultMinDate) {
      this.defaultMinDate = this.getGregorianCalendar([2000, 1, 1, 0, 0, 0]);
    }
    return this.defaultMinDate;
  }

  getDefaultMaxDate() {
    if (!this.defaultMaxDate) {
      this.defaultMaxDate = this.getGregorianCalendar([2030, 1, 1, 23, 59, 59]);
    }
    return this.defaultMaxDate;
  }

  getDate() {
    return this.state.date || this.getDefaultMinDate();
  }

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
    const yearCol = { key: 'year', props: { children: years } };
    if (mode === YEAR) {
      return [ yearCol ];
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
      const label = formatMonth ? formatMonth(i, date) : (i + 1 + locale.month + '');
      months.push({
        value: i + '',
        label,
      });
    }
    const monthCol = { key: 'month', props: { children: months } };
    if (mode === MONTH) {
      return [yearCol, monthCol];
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
      const label = formatDay ? formatDay(i, date) : (i + locale.day + '');
      days.push({
        value: i + '',
        label,
      });
    }
    return [
      yearCol,
      monthCol,
      { key: 'day', props: { children: days } },
    ];
  }

  getTimeData() {
    let minHour = 0;
    let maxHour = 23;
    let minMinute = 0;
    let maxMinute = 59;
    const { mode, locale, minuteStep } = this.props;
    const date = this.getDate();
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
    for (let i = minHour; i <= maxHour; i++) {
      hours.push({
        value: i + '',
        label: locale.hour ? i + locale.hour + '' : pad(i),
      });
    }

    const minutes: any[] = [];
    for (let i = minMinute; i <= maxMinute; i += minuteStep!) {
      minutes.push({
        value: i + '',
        label: locale.minute ? i + locale.minute + '' : pad(i),
      });
    }
    return [
      { key: 'hours', props: { children: hours } },
      { key: 'minutes', props: { children: minutes } },
    ];
  }

  getGregorianCalendar(arg) {
    return new Date(...arg);
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
    } else if (mode === DATE) {
      // compare-two-dates: https://stackoverflow.com/a/14629978/2190503
      if (+date + ONE_DAY <= minDate) {
        return cloneDate(minDate);
      }
      if (date >= +maxDate + ONE_DAY) {
        return cloneDate(maxDate);
      }
    } else {
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
    const { mode } = this.props;
    const date = this.getDate();
    let cols: any[] = [];
    let value: any[] = [];

    if (mode === YEAR) {
      return {
        cols: this.getDateData(),
        value: [date.getFullYear() + ''],
      };
    }

    if (mode === MONTH) {
      return {
        cols: this.getDateData(),
        value: [date.getFullYear() + '', date.getMonth() + ''],
      };
    }

    if (mode === DATETIME || mode === DATE) {
      cols = this.getDateData();
      value = [date.getFullYear() + '', date.getMonth() + '', date.getDate() + ''];
    }

    if (mode === DATETIME || mode === TIME) {
      cols = cols.concat(this.getTimeData());
      value = value.concat([date.getHours() + '', date.getMinutes() + '']);
    }
    return {
      value,
      cols,
    };
  }

  render() {
    const { value, cols } = this.getValueCols();
    const { mode, prefixCls, pickerPrefixCls, rootNativeProps, className } = this.props;
    return (
      <MultiPicker
        rootNativeProps={rootNativeProps}
        className={className}
        prefixCls={prefixCls}
        pickerPrefixCls={pickerPrefixCls}
        pickerItemStyle={typeof window === 'undefined' && mode === 'datetime' ? smallPickerItem : undefined}
        selectedValue={value}
        onValueChange={this.onValueChange}
      >
        {cols}
      </MultiPicker>
    );
  }
}

export default DatePicker;
