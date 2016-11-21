import moment from 'moment';
import defaultLocale from './locale/en_US';

function getDaysInMonth(now, selYear, selMonth) {
  return now.clone().year(selYear).month(selMonth).endOf('month').date();
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
        date: nextProps.date || nextProps.defaultDate,
      });
    }
  },

  onValueChange(index, value) {
    const props = this.props;
    let newValue = this.getDate().clone();
    if (props.mode === DATETIME || props.mode === DATE) {
      switch (index) {
        case 0:
          newValue.year(value);
          break;
        case 1:
          newValue.month(value);
          break;
        case 2:
          newValue.date(value);
          break;
        case 3:
          newValue.hour(value);
          break;
        case 4:
          newValue.minute(value);
          break;
        default:
          break;
      }
    } else {
      switch (index) {
        case 0:
          newValue.hour(value);
          break;
        case 1:
          newValue.minute(value);
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
      this.defaultMinDate = this.getGregorianCalendar([2000, 1, 1, 0, 0, 0]);
    }
    return this.defaultMinDate;
  },

  getDefaultMaxDate() {
    if (!this.defaultMaxDate) {
      this.defaultMaxDate = this.getGregorianCalendar([2030, 1, 1, 23, 59, 59]);
    }
    return this.defaultMaxDate;
  },

  getDate() {
    return this.state.date || this.getDefaultMinDate();
  },

  getMinYear() {
    return this.getMinDate().year();
  },

  getMaxYear() {
    return this.getMaxDate().year();
  },

  getMinMonth() {
    return this.getMinDate().month();
  },

  getMaxMonth() {
    return this.getMaxDate().month();
  },

  getMinDay() {
    return this.getMinDate().date();
  },

  getMaxDay() {
    return this.getMaxDate().date();
  },

  getMinHour() {
    return this.getMinDate().hour();
  },

  getMaxHour() {
    return this.getMaxDate().hour();
  },

  getMinMinute() {
    return this.getMinDate().minute();
  },

  getMaxMinute() {
    return this.getMaxDate().minute();
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
    const selYear = date.year();
    const selMonth = date.month();
    const minDateYear = this.getMinYear();
    const maxDateYear = this.getMaxYear();
    const minDateMonth = this.getMinMonth();
    const maxDateMonth = this.getMaxMonth();
    const minDateDay = this.getMinDay();
    const maxDateDay = this.getMaxDay();
    const years: any[] = [];
    for (let i = minDateYear; i <= maxDateYear; i++) {
      years.push({
        value: i,
        label: i + locale.year,
      });
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
      months.push({
        value: i,
        label: (i + 1) + locale.month,
      });
    }

    const days: any[] = [];
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
    const hour = date.hour();
    if (mode === DATETIME) {
      const year = date.year();
      const month = date.month();
      const day = date.date();
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
        value: i,
        label: i + locale.hour,
      });
    }

    const minutes: any[] = [];
    for (let i = minMinute; i <= maxMinute; i++) {
      minutes.push({
        value: i,
        label: i + locale.minute,
      });
    }
    return [hours, minutes];
  },

  getGregorianCalendar(arg) {
    return moment(arg);
  },

  clipDate(date) {
    const { mode } = this.props;
    const minDate = this.getMinDate();
    const maxDate = this.getMaxDate();
    if (mode === DATETIME) {
      if (date.isBefore(minDate)) {
        return minDate.clone();
      }
      if (date.isAfter(maxDate)) {
        return maxDate.clone();
      }
    } else if (mode === DATE) {
      if (date.isBefore(minDate, 'day')) {
        return minDate.clone();
      }
      if (date.isAfter(maxDate, 'day')) {
        return maxDate.clone();
      }
    } else {
      const maxHour = maxDate.hour();
      const maxMinutes = maxDate.minute();
      const minHour = minDate.hour();
      const minMinutes = minDate.minute();
      const hour = date.hour();
      const minutes = date.minute();
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
    let dataSource: any[] = [];
    let value: any[] = [];
    if (mode === DATETIME || mode === DATE) {
      dataSource = [...this.getDateData()];
      value = [date.year(), date.month(), date.date()];
    }

    if (mode === DATETIME || mode === TIME) {
      dataSource = dataSource.concat(this.getTimeData());
      value = value.concat([date.hour(), date.minute()]);
    }
    return {
      value,
      dataSource,
    };
  },
};
