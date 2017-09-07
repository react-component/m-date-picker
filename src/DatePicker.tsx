import React from 'react';
import MultiPicker from 'rmc-picker/lib/MultiPicker';
import Picker from 'rmc-picker/lib/Picker';
import IDatePickerProps from './IDatePickerProps';
import defaultLocale from './locale/en_US';

function getDaysInMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function increaseDay(date) {
  return new Date(date.getTime() + ONE_DAY)
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

const smallPickerItem = {
  fontSize: 20,
};

const DATETIME = 'datetime';
const SINGLEDATE_TIME = 'singledate_time';
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
    disabled: false,
    minuteStep: 1,
    onDateChange() {
    },
    use12Hours: false,
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
    const props = this.props;
    const {mode} = props;
    let newValue = cloneDate(this.getDate());

    const value = parseInt(values[index], 10);

    if (mode === SINGLEDATE_TIME) {

      switch (index) {
        case 0:
          const mixValue = values[0].split('-');
          const year = parseInt(mixValue[0], 10)
          const month = parseInt(mixValue[1], 10)
          const day = parseInt(mixValue[2], 10)

          newValue.setFullYear(year);
          setMonth(newValue, month);
          newValue.setDate(day);
          break;
        case 1:
          this.setHours(newValue, value);
          break;
        case 2:
          newValue.setMinutes(value);
          break;
        case 3:
          this.setAmPm(newValue, value);
          break;
        default:
          break;
      }

    } else if (mode === DATETIME || mode === DATE || mode === YEAR || mode === MONTH) {

      switch (index) {
        case 0:
          newValue.setFullYear(value);
          break;
        case 1:
          // Note: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth
          // e.g. from 2017-03-31 to 2017-02-28
          setMonth(newValue, value);
          break;
        case 2:
          newValue.setDate(value);
          break;
        case 3:
          this.setHours(newValue, value);
          break;
        case 4:
          newValue.setMinutes(value);
          break;
        case 5:
          this.setAmPm(newValue, value);
          break;
        default:
          break;
      }
    } else {

      switch (index) {
        case 0:
          this.setHours(newValue, value);
          break;
        case 1:
          newValue.setMinutes(value);
          break;
        case 2:
          this.setAmPm(newValue, value);
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
    if (props.onValueChange) {
      props.onValueChange(values, index);
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
    const {locale, formatMonth, formatDay, mode} = this.props;
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
    const yearCol = {key: 'year', props: {children: years}};
    if (mode === YEAR) {
      return [yearCol];
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
    const monthCol = {key: 'month', props: {children: months}};
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
      {key: 'day', props: {children: days}},
    ];
  }

  getDayData = () => {
    const {formatSingleDate, locale, formatMonth, formatDay,minDate,maxDate} = this.props;
    const singleDate = [];
    const date = this.getDate();

    for (let d = minDate; d <= maxDate; d = increaseDay(d)) {
      const year = d.getFullYear();
      const month = d.getMonth();
      const day = d.getDate();

      const yValue = year + '';
      const yLabel = year + locale.year + ''
      const mValue = month + '';
      const mLabel = formatMonth ? formatMonth(month, date) : (month + 1 + locale.month + '')
      const dValue = day + '';
      const dLabel = formatDay ? formatDay(day, date) : (day + locale.day + '');

      const value = `${yValue}-${mValue}-${dValue}`;
      const label = formatSingleDate ?
        formatSingleDate(yLabel, mLabel, dLabel, date) :
        `${yLabel}${mLabel}${dLabel}`;

      singleDate.push({
        value: value,
        label: label,
      })
    }

    return [
      {
        key: 'mix',
        props: {
          children: singleDate,
        }
      }
    ]
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

  getTimeData() {
    let minHour = 0;
    let maxHour = 23;
    let minMinute = 0;
    let maxMinute = 59;
    const {mode, locale, minuteStep, use12Hours} = this.props;
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
    if (minHour === 0 && maxHour === 0 || minHour !== 0 && maxHour !== 0) {
      minHour = this.getDisplayHour(minHour);
    } else if (minHour === 0 && use12Hours) {
      minHour = 1;
      hours.push({value: '0', label: locale.hour ? '12' + locale.hour : '12'});
    }
    maxHour = this.getDisplayHour(maxHour);
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
      {key: 'hours', props: {children: hours}},
      {key: 'minutes', props: {children: minutes}},
    ].concat(use12Hours ? [{
      key: 'ampm',
      props: {children: [{value: '0', label: locale.am}, {value: '1', label: locale.pm}]},
    }] : []);
  }

  getGregorianCalendar(arg) {
    return new Date(...arg);
  }

  clipDate(date) {
    const {mode} = this.props;
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
    const {mode, use12Hours} = this.props;
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


    if (mode === SINGLEDATE_TIME) {
      cols = this.getDayData();
      value = [`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`];
    }


    if (mode === DATETIME || mode === DATE) {
      cols = this.getDateData();
      value = [date.getFullYear() + '', date.getMonth() + '', date.getDate() + ''];
    }


    if (mode === SINGLEDATE_TIME || mode === DATETIME || mode === TIME) {
      cols = cols.concat(this.getTimeData());
      const hour = date.getHours();
      let dtValue = [hour + '', date.getMinutes() + ''];
      let nhour = hour;
      if (use12Hours) {
        nhour = hour === 0 ? 12 : (hour > 12 ? hour - 12 : hour);
        dtValue = [nhour + '', date.getMinutes() + '', (hour >= 12 ? 1 : 0) + ''];
      }
      value = value.concat(dtValue);
    }


    return {
      value,
      cols,
    };
  }

  render() {
    const {value, cols} = this.getValueCols();


    const {mode, disabled, pickerPrefixCls, prefixCls, rootNativeProps, className, style} = this.props;
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
      >
        {cols.map(p => (
          <Picker
            style={{flex: 1}}
            key={p.key}
            disabled={disabled}
            prefixCls={pickerPrefixCls}
            itemStyle={typeof window === 'undefined' && mode === 'datetime' ? smallPickerItem : undefined}
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
