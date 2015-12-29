import React, { PropTypes } from 'react';
import Picker from 'rmc-picker';
import GregorianCalendar from 'gregorian-calendar';
import defaultLocale from './locale/en_US';
import classnames from 'classnames';

function getDaysInMonth(now, selYear, selMonth) {
  const date = now.clone();
  date.set(selYear, selMonth, 1);
  date.rollMonth(1);
  date.addDayOfMonth(-1);
  return date.getDayOfMonth();
}

const DATETIME = 'datetime';
const DATE = 'date';
const TIME = 'time';

const DatePicker = React.createClass({
  propTypes: {
    date: PropTypes.object,
    minDate: PropTypes.object,
    maxDate: PropTypes.object,
    mode: PropTypes.string,
    locale: PropTypes.object,
    onDateChange: PropTypes.func,
  },
  getDefaultProps() {
    return {
      locale: defaultLocale,
      prefixCls: 'rmc-date-picker',
      pickerPrefixCls: 'rmc-picker',
      mode: DATE,
      onDateChange() {
      },
    };
  },

  getInitialState() {
    this.defaultMinDate = this.getGregorianCalendar();
    this.defaultMinDate.set(2000, 1, 1, 0, 0, 0);
    this.defaultMaxDate = this.getGregorianCalendar();
    this.defaultMaxDate.set(2030, 1, 1, 0, 0, 0);
    this.now = this.getGregorianCalendar();
    this.now.setTime(Date.now());
    return {};
  },

  onValueChange(index, value) {
    const props = this.props;
    const newValue = this.getDate().clone();
    if (props.mode === DATETIME || props.mode === DATE) {
      switch (index) {
      case 0:
        newValue.setYear(value);
        break;
      case 1:
        newValue.rollSetMonth(value - 1);
        break;
      case 2:
        newValue.rollSetDayOfMonth(value);
        break;
      case 3:
        newValue.setHourOfDay(value);
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
        newValue.setHourOfDay(value);
        break;
      case 1:
        newValue.setMinutes(value);
        break;
      default:
        break;
      }
    }
    props.onDateChange(newValue);
  },

  getDefaultMinDate() {
    if (!this.defaultMinDate) {
      this.defaultMinDate = this.getGregorianCalendar();
      this.defaultMinDate.set(2000, 1, 1, 0, 0, 0);
    }
    return this.defaultMinDate;
  },

  getDefaultMaxDate() {
    if (!this.defaultMaxDate) {
      this.defaultMaxDate = this.getGregorianCalendar();
      this.defaultMaxDate.set(2030, 1, 1, 0, 0, 0);
    }
    return this.defaultMaxDate;
  },

  getNow() {
    if (!this.now) {
      this.now = this.getGregorianCalendar();
      this.now.setTime(Date.now());
    }
    return this.now;
  },

  getDate() {
    return this.props.date || this.getNow();
  },

  getMinYear() {
    return (this.props.minDate || this.getDefaultMinDate()).getYear();
  },

  getMaxYear() {
    return (this.props.maxDate || this.getDefaultMaxDate()).getYear();
  },

  getMinMonth() {
    return (this.props.minDate || this.getDefaultMinDate()).getMonth();
  },

  getMaxMonth() {
    return (this.props.maxDate || this.getDefaultMaxDate()).getMonth();
  },

  getMinDay() {
    return (this.props.minDate || this.getDefaultMinDate()).getDayOfMonth();
  },

  getMaxDay() {
    return (this.props.maxDate || this.getDefaultMaxDate()).getDayOfMonth();
  },

  getMinHour() {
    return (this.props.minDate || this.getDefaultMinDate()).getHourOfDay();
  },

  getMaxHour() {
    return (this.props.maxDate || this.getDefaultMaxDate()).getHourOfDay();
  },

  getMinMinute() {
    return (this.props.minDate || this.getDefaultMinDate()).getMinutes();
  },

  getMaxMinute() {
    return (this.props.maxDate || this.getDefaultMaxDate()).getMinutes();
  },

  getDateData() {
    const locale = this.props.locale;
    const date = this.getDate();
    const selYear = date.getYear();
    const selMonth = date.getMonth();
    const minDateYear = this.getMinYear();
    const maxDateYear = this.getMaxYear();
    const minDateMonth = this.getMinMonth();
    const maxDateMonth = this.getMaxMonth();
    const minDateDay = this.getMinDay();
    const maxDateDay = this.getMaxDay();
    const years = [];
    for (let i = minDateYear; i <= maxDateYear; i++) {
      years.push({
        value: i,
        label: i + locale.year,
      });
    }

    const months = [];
    let minMonth = 1;
    let maxMonth = 12;
    if (minDateYear === selYear) {
      minMonth = minDateMonth;
    }
    if (maxDateYear === selYear) {
      maxMonth = maxDateMonth;
    }
    for (let i = minMonth; i <= maxMonth; i++) {
      months.push({value: i, label: i + locale.month});
    }

    const days = [];
    let minDay = 1;
    let maxDay = getDaysInMonth(date, selYear, selMonth);

    if (minDateYear === selYear && minDateMonth === selMonth) {
      minDay = minDateDay;
    }
    if (maxDateYear === selYear && maxDateMonth === selMonth) {
      maxDay = maxDateDay;
    }
    for (let i = minDay; i <= maxDay; i++) {
      days.push({
        value: i,
        label: i + locale.day,
      });
    }
    return [years, months, days];
  },
  getTimeData() {
    let minHour = 0;
    let maxHour = 23;
    let minMinute = 0;
    let maxMinute = 59;
    const {mode, locale} = this.props;
    const date = this.getDate();
    const minDateYear = this.getMinYear();
    const maxDateYear = this.getMaxYear();
    const minDateMonth = this.getMinMonth();
    const maxDateMonth = this.getMaxMonth();
    const minDateDay = this.getMinDay();
    const maxDateDay = this.getMaxDay();
    const minDateMinute = this.getMinMinute();
    const maxDateMinute = this.getMaxMinute();
    const minDateHour = this.getMinHour();
    const maxDateHour = this.getMaxHour();
    const year = date.getYear();
    const month = date.getMonth();
    const day = date.getDayOfMonth();
    const hour = date.getHourOfDay();
    if (mode === DATETIME) {
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
      if (minDateHour === hour) {
        minHour = minDateHour;
        if (minDateHour === hour) {
          minMinute = minDateMinute;
        }
      }
      if (maxDateHour === hour) {
        maxHour = maxDateHour;
        if (maxDateHour === hour) {
          maxMinute = maxDateMinute;
        }
      }
    }

    const hours = [];
    for (let i = minHour; i <= maxHour; i++) {
      hours.push({
        value: i,
        label: i + locale.hour,
      });
    }

    const minutes = [];
    for (let i = minMinute; i <= maxMinute; i++) {
      minutes.push({
        value: i,
        label: i + locale.minute,
      });
    }
    return [hours, minutes];
  },
  getGregorianCalendar() {
    return new GregorianCalendar(this.props.locale.calendar);
  },
  render() {
    const props = this.props;
    const {mode, prefixCls, pickerPrefixCls, className} = props;
    const date = this.getDate();
    let dataSource = [];
    let value = [];
    if (mode === DATETIME || mode === DATE) {
      dataSource = [...this.getDateData()];
      value = [date.getYear(), date.getMonth() + 1, date.getDayOfMonth()];
    }

    if (mode === DATETIME || mode === TIME) {
      dataSource = dataSource.concat(this.getTimeData());
      value = value.concat([date.getHourOfDay(), date.getMinutes()]);
    }

    const inner = dataSource.map((items, i) => {
      return (<div key={i} className={`${prefixCls}-item`}>
        <Picker prefixCls={pickerPrefixCls}
                pure={false}
                selectedValue={value[i]}
                onValueChange={this.onValueChange.bind(this, i)}>
          {items}
        </Picker>
      </div>);
    });

    return (<div className={classnames(className, prefixCls)}>
      {inner}
    </div>);
  },
});

export default DatePicker;
