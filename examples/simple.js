/* eslint no-console:0 */

import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.less';
import DatePicker from 'rmc-date-picker';
import GregorianCalendarFormat from 'gregorian-calendar-format';
import GregorianCalendar from 'gregorian-calendar';
import zhCn from 'gregorian-calendar-format/lib/locale/zh_CN';
import zhCnCalendar from 'gregorian-calendar/lib/locale/zh_CN';
import React from 'react';
import ReactDOM from 'react-dom';

const formatter = GregorianCalendarFormat.getDateTimeInstance(GregorianCalendarFormat.Style.FULL,
  GregorianCalendarFormat.Style.FULL, zhCn);

function format(v) {
  return formatter.format(v);
}

const now = new GregorianCalendar(zhCnCalendar);
now.setTime(Date.now());

const Demo = React.createClass({
  propTypes: {
    mode: React.PropTypes.string,
  },
  getDefaultProps() {
    return {
      mode: 'datetime',
      locale: require('../src/locale/zh_CN'),
    };
  },
  getInitialState() {
    return {
      date: null,
    };
  },
  onDateChange(date) {
    this.setState({
      date,
    });
  },
  render() {
    const props = this.props;
    const {date} = this.state;

    return (<div style={{margin: '10px 30px'}}>
      <h2>date picker</h2>
      <div>
        <span>{date && format(date) || format(now)}</span>
        <DatePicker defaultDate={date || now}
            mode={props.mode}
            locale={props.locale}
            onDateChange={this.onDateChange}/>
      </div>
    </div>);
  },
});

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
