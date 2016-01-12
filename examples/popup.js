/* eslint no-console:0 */

import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.less';
import 'rmc-date-picker/assets/popup.less';
import 'rmc-modal/assets/index.css';
import GregorianCalendarFormat from 'gregorian-calendar-format';
import GregorianCalendar from 'gregorian-calendar';
import zhCn from 'gregorian-calendar-format/lib/locale/zh_CN';
import zhCnPicker from 'rmc-date-picker/src/locale/zh_CN';

// const zhCnCalendar = null;
import React from 'react';
import ReactDOM from 'react-dom';

import PopPicker from 'rmc-date-picker/src/Popup';

const formatter = GregorianCalendarFormat.getDateTimeInstance(GregorianCalendarFormat.Style.FULL,
  GregorianCalendarFormat.Style.FULL, zhCn);

function format(v) {
  return formatter.format(v);
}

const now = new GregorianCalendar(zhCnPicker.calendar);
now.setTime(Date.now());

const getGregorianCalendar = () => new GregorianCalendar(zhCnPicker.calendar);
const minDate = getGregorianCalendar();
minDate.set(2015, 8, 1, 0, 0, 0);
const maxDate = getGregorianCalendar();
maxDate.set(2018, 0, 1, 0, 0, 0);

const Demo = React.createClass({
  propTypes: {
    mode: React.PropTypes.string,
  },
  getDefaultProps() {
    return {
      mode: 'datetime',
      locale: zhCnPicker,
      // locale: require('../src/locale/zh_CN'),
    };
  },
  getInitialState() {
    return {
      date: null,
    };
  },
  onOk(date) {
    console.log('onOk', format(date));
    this.setState({
      date: date,
    });
  },
  onDismiss() {
    console.log('onDismiss');
  },
  onDateChange(date) {
    console.log('onDateChange', format(date));
  },
  show() {
    console.log('my click');
  },
  render() {
    const props = this.props;
    const {date} = this.state;
    return (<div style={{margin: '10px 30px'}}>
      <h2>popup date picker</h2>
      <div>
        <PopPicker date={date || now}
                   minDate={minDate}
                   maxDate={maxDate}
                   mode={props.mode}
                   locale={props.locale}
                   onDateChange={this.onDateChange}
                   onDismiss={this.onDismiss}
                   onOk={this.onOk}
                   style={{left: 0, bottom: 0}}>
          <button onClick={this.show}>{date && format(date) || 'open'}</button>
        </PopPicker>
      </div>
    </div>);
  },
});

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
