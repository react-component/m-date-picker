import * as React from 'react';
import GregorianCalendar from 'gregorian-calendar';


import defaultLocale from './locale/en_US';

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

export default {
  getDefaultProps() {
    return {
      locale: defaultLocale,
      mode: DATE,
      onDateChange() {
      },
    };
  },

  getInitialState() {
    return {
      date: this.props.date || this.props.defaultDate,
    };
  },

  componentWillReceiveProps(nextProps) {
    if ('date' in nextProps) {
      this.setState({
        date: nextProps.date,
      });
    }
  },

  onValueChange(index, value) {
    const props = this.props;
    let newValue = this.getDate().clone();
    if (props.mode === DATETIME || props.mode === DATE) {
      switch (index) {
        case 0:
          newValue.setYear(value);
          break;
        case 1:
          newValue.rollSetMonth(value);
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
    newValue = this.clipDate(newValue);
    if (!('date' in this.props)) {
      this.setState({
        date: newValue,
      });
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
      // also for time mode
      this.defaultMaxDate.set(2030, 1, 1, 23, 59, 59);
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
    return this.state.date || this.getNow();
  },

  getMinYear() {
    return this.getMinDate().getYear();
  },

  getMaxYear() {
    return this.getMaxDate().getYear();
  },

  getMinMonth() {
    return this.getMinDate().getMonth();
  },

  getMaxMonth() {
    return this.getMaxDate().getMonth();
  },

  getMinDay() {
    return this.getMinDate().getDayOfMonth();
  },

  getMaxDay() {
    return this.getMaxDate().getDayOfMonth();
  },

  getMinHour() {
    return this.getMinDate().getHourOfDay();
  },

  getMaxHour() {
    return this.getMaxDate().getHourOfDay();
  },
  
  getMinMinute() {
    return this.getMinDate().getMinutes();
  },

  getMaxMinute() {
    return this.getMaxDate().getMinutes();
  },

  getMinDate() {
    return this.props.minDate || this.getDefaultMinDate();
  },

  getMaxDate() {
    return this.props.maxDate || this.getDefaultMaxDate();
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
    let minMonth = 0;
    let maxMonth = 11;
    if (minDateYear === selYear) {
      minMonth = minDateMonth;
    }
    if (maxDateYear === selYear) {
      maxMonth = maxDateMonth;
    }
    for (let i = minMonth; i <= maxMonth; i++) {
      months.push({
        value: i,
        label: (i + 1) + locale.month,
      });
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
    const { mode, locale } = this.props;
    const date = this.getDate();
    const minDateMinute = this.getMinMinute();
    const maxDateMinute = this.getMaxMinute();
    const minDateHour = this.getMinHour();
    const maxDateHour = this.getMaxHour();
    const hour = date.getHourOfDay();
    if (mode === DATETIME) {
      const year = date.getYear();
      const month = date.getMonth();
      const day = date.getDayOfMonth();
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
  
  clipDate(date) {
    const { mode } = this.props;
    const minDate = this.getMinDate();
    const maxDate = this.getMaxDate();
    if (mode === DATETIME) {
      if (date.getTime() < minDate.getTime()) {
        return minDate.clone();
      }
      if (date.getTime() > maxDate.getTime()) {
        return maxDate.clone();
      }
    } else if (mode === DATE) {
      if (date.compareToDay(minDate) < 0) {
        return minDate.clone();
      }
      if (date.compareToDay(maxDate) > 0) {
        return maxDate.clone();
      }
    } else {
      const maxHour = maxDate.getHourOfDay();
      const maxMinutes = maxDate.getMinutes();
      const minHour = minDate.getHourOfDay();
      const minMinutes = minDate.getMinutes();
      const hour = date.getHourOfDay();
      const minutes = date.getMinutes();
      if (hour < minHour || hour === minHour && minutes < minMinutes) {
        return minDate.clone();
      }
      if (hour > maxHour || hour === maxHour && minutes > maxMinutes) {
        return maxDate.clone();
      }
    }
    return date;
  },
  
  getValueDataSource() {
    const { mode } = this.props;
    const date = this.getDate();
    let dataSource = [];
    let value = [];
    if (mode === DATETIME || mode === DATE) {
      dataSource = [...this.getDateData()];
      value = [date.getYear(), date.getMonth(), date.getDayOfMonth()];
    }

    if (mode === DATETIME || mode === TIME) {
      dataSource = dataSource.concat(this.getTimeData());
      value = value.concat([date.getHourOfDay(), date.getMinutes()]);
    }
    return {
      value,
      dataSource,
    };
  },
};
