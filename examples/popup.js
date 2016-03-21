/* eslint no-console:0 */

import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.less';
import 'rmc-picker/assets/popup.css';
import GregorianCalendarFormat from 'gregorian-calendar-format';
import GregorianCalendar from 'gregorian-calendar';
import zhCn from 'gregorian-calendar-format/lib/locale/zh_CN';
import zhCnPicker from 'rmc-date-picker/src/locale/zh_CN';
import loadScript from 'load-script';
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
  onChange(date) {
    console.log('onChange', format(date));
    this.setState({
      date,
    });
  },
  onDismiss() {
    console.log('onDismiss');
  },
  onPickerChange(date) {
    console.log('onPickerChange', format(date));
  },
  show() {
    console.log('my click');
  },
  render() {
    const props = this.props;
    const { date } = this.state;
    return (<div style={{ margin: '10px 30px' }}>
      <h2>popup date picker</h2>
      <div>
        <PopPicker
          date={date || now}
          minDate={minDate}
          maxDate={maxDate}
          mode={props.mode}
          locale={props.locale}
          onPickerChange={this.onPickerChange}
          onDismiss={this.onDismiss}
          onChange={this.onChange}
        >
          <button onClick={this.show}>{date && format(date) || 'open'}</button>
        </PopPicker>
      </div>
    </div>);
  },
});

ReactDOM.render(<Demo />, document.getElementById('__react-content'));

loadScript('//cdnjs.cloudflare.com/ajax/libs/fastclick/1.0.6/fastclick.js', () => {
  window.FastClick.attach(document.body);
});
