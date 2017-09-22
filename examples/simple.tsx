/* tslint:disable:no-console */

import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.less';
import DatePicker from '../src/index';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import zhCn from '../src/locale/zh_CN';
import enUs from '../src/locale/en_US';
import { cn, format, minDate, maxDate, now } from './utils';

class Demo extends React.Component<any, any> {
  static defaultProps = {
    locale: cn ? zhCn : enUs,
  };

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(2017, 2, 31, 15, 1, 1),
      mode: 'datetime',
    };
  }

  onDateChange = (date) => {
    console.log('onChange', format(date));
    this.setState({
      date,
    });
  }

  onValueChange = (values, index) => {
    console.log('onValueChange', values, index);
  }

  onScrollChange = (values, index) => {
    console.log('onScrollChange', values, index);
  }

  changeMode = (e) => {
    this.setState({
      mode: e.target.value,
    });
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
      </select>

      <div>
        <span>{date && format(date) || format(now)}</span>
        <DatePicker
          rootNativeProps={{'data-xx': 'yy'}}
          defaultDate={date || now}
          mode={mode}
          locale={props.locale}
          maxDate={maxDate}
          minDate={minDate}
          onDateChange={this.onDateChange}
          onValueChange={this.onValueChange}
          onScrollChange={this.onScrollChange}
          use12Hours
        />
      </div>
    </div>);
  }
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
