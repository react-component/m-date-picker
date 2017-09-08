/* tslint:disable:no-console */

import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.less';
import DatePicker from '../src/index';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import enUS from '../src/locale/en_US';
import zhCn from '../src/locale/zh_CN';
import { cn, format, now } from './utils';

const maxDate = new Date(2017, 10, 1, 23, 49, 59);
const ONE_DAY = 24 * 60 * 60 * 1000;

class Demo extends React.Component<any, any> {
  static defaultProps = {
    locale:  cn ? zhCn : enUS ,
  };

  constructor(props) {
    super(props);
    this.state = {
      date: now,
      mode: 'recentTime',
    };
  }

  onDateChange = (date) => {
    console.log('onChange', format(date));
    this.setState({
      date,
    });
  }

  onValueChange = (values, index) => {
    console.log(values, index);
  }

  changeMode = (e) => {
    this.setState({
      mode: e.target.value,
    });
  }

  formatRecentDate = (year, month, day) => {

    const gap = this.getTimeGap(year, month, day);

    if ( gap === 0  ) {
      return '今天';
    } else if (gap === 1) {
      return '明天';
    } else if (gap === 2) {
      return '后天';
    } else {
      return `${month + 1}月${day}日`;
    }
  }

  getTimeGap = (year, month, day) => {
    const displayTime = new Date(year, month, day).getTime();
    const today = now.getTime();

    return Math.ceil((displayTime - today) / ONE_DAY);
  }

  render() {
    const props = this.props;
    const { date, mode } = this.state;

    return (<div style={{ margin: '10px 30px' }}>
      <h2>date picker</h2>

      <select value={this.state.mode} onChange={this.changeMode}>
        <option>datetime</option>
        <option>date</option>
        <option>time</option>
        <option>month</option>
        <option>year</option>
        <option>recentTime</option>
      </select>

      <div>
        <span>{date && format(date) || format(now)}</span>
        <DatePicker
          rootNativeProps={{'data-xx': 'yy'}}
          defaultDate={date || now}
          mode={mode}
          locale={props.locale}
          maxDate={maxDate}
          minDate={now}
          onDateChange={this.onDateChange}
          onValueChange={this.onValueChange}
          formatRecentDate={this.formatRecentDate}
        />
      </div>
    </div>);
  }
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
