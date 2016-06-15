/* eslint no-console:0 */

import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.less';
import DatePicker from '../src/index.web';
import GregorianCalendarFormat from 'gregorian-calendar-format';
import GregorianCalendar from 'gregorian-calendar';
import zhCn from 'gregorian-calendar-format/lib/locale/zh_CN';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import zhCnPicker from '../src/locale/zh_CN';

const formatter = GregorianCalendarFormat.getDateTimeInstance(GregorianCalendarFormat.Style.FULL,
  GregorianCalendarFormat.Style.FULL, zhCn);

const getGregorianCalendar = () => new GregorianCalendar(zhCnPicker.calendar);
const minDate = getGregorianCalendar();
minDate.set(2015, 8, 1, 0, 0, 0);
const maxDate = getGregorianCalendar();
maxDate.set(2018, 1, 1, 22, 0, 0);

function format(v) {
  return formatter.format(v);
}

const now = new GregorianCalendar(zhCnPicker.calendar);
now.setTime(Date.now());

class Demo extends React.Component<any, any> {
  static defaultProps = {
    mode: 'datetime',
    locale: zhCnPicker,
    // locale: require('../src/locale/zh_CN'),
  };

  constructor(props) {
    super(props);
    this.state = {
      date: null,
    };
  }

  onDateChange = (date) => {
    console.log('onChange', format(date));
    this.setState({
      date,
    });
  };
  render() {
    const props = this.props;
    const { date } = this.state;

    return (<div style={{ margin: '10px 30px' }}>
      <h2>date picker</h2>
      <div>
        <span>{date && format(date) || format(now)}</span>
        <DatePicker
          defaultDate={date || now}
          mode={props.mode}
          locale={props.locale}
          maxDate={maxDate}
          minDate={minDate}
          onDateChange={this.onDateChange}
        />
      </div>
    </div>);
  }
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
