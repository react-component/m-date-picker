/* eslint no-console:0 */

import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.css';
import 'rmc-date-picker/assets/PopPicker.css';
import 'rmc-modal/assets/index.css';
import DatePicker from 'rmc-date-picker';
import GregorianCalendarFormat from 'gregorian-calendar-format';
import GregorianCalendar from 'gregorian-calendar';
import zhCn from 'gregorian-calendar-format/lib/locale/zh_CN';
import zhCnCalendar from 'gregorian-calendar/lib/locale/zh_CN';
import React from 'react';
import ReactDOM from 'react-dom';

const PopPicker = DatePicker.PopPicker;

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
  onOk(date) {
    this.setState({
      date: date || now,
    });
  },
  show() {
    console.log('my click');
  },
  onDismiss() {
    console.log('onDismiss');
  },
  render() {
    const props = this.props;
    const {date} = this.state;

    const getGregorianCalendar = () => new GregorianCalendar(this.props.locale.calendar);
    const minDate = getGregorianCalendar();
    minDate.set(2015, 1, 1, 0, 0, 0);
    const maxDate = getGregorianCalendar();
    maxDate.set(2018, 1, 1, 0, 0, 0);

    return (<div style={{margin: '10px 30px'}}>
      <h2>date picker</h2>
      <div>
        <PopPicker date={date || now} minDate={minDate} maxDate={maxDate}
            mode={props.mode}
            locale={props.locale}
            onDateChange={this.onDateChange}
            onDismiss={this.onDismiss}
            onOk={this.onOk}
            style={{left: 0, bottom: 0}}
            >
            <button onClick={this.show}>{date && format(date) || 'open'}</button>
        </PopPicker>
      </div>
    </div>);
  },
});

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
