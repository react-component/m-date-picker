/* eslint no-console:0 */

import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.less';
import 'rmc-picker/assets/popup.css';
import GregorianCalendarFormat from 'gregorian-calendar-format';
import GregorianCalendar from 'gregorian-calendar';
import zhCn from 'gregorian-calendar-format/lib/locale/zh_CN';
import zhCnPicker from 'rmc-date-picker/src/locale/zh_CN';
// const zhCnCalendar = null;
import * as React from 'react';
import * as ReactDOM from 'react-dom';

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

  onChange = (date) => {
    console.log('onChange', format(date));
    this.setState({
      date,
    });
  };
  onDismiss = () => {
    console.log('onDismiss');
  };
  onPickerChange = (date) => {
    console.log('onPickerChange', format(date));
  };
  show = () => {
    console.log('my click');
  };

  render() {
    const props = this.props;
    const {date} = this.state;
    return (<div style={{ margin: '10px 30px' }}>
      <h2>popup date picker</h2>
      <div>
        <PopPicker
          popupTransitionName="rmc-picker-popup-slide-fade"
          maskTransitionName="rmc-picker-popup-fade"
          title="Date picker"
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
  }
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
