/* eslint no-console:0 */

import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.less';
import DatePicker from '../src/index';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import zhCn from '../src/locale/zh_CN';
import enUs from '../src/locale/en_US';
import { cn, format, minDate, maxDate, now } from './utils';

now.setHours(15);
now.setMinutes(39);

class Demo extends React.Component<any, any> {
  static defaultProps = {
    mode: 'time',
    locale: cn ? zhCn : enUs,
  };

  constructor(props) {
    super(props);
    this.state = {
      date: null,
    };
  }

  onDateChange = (date) => {
    this.setState({
      date,
    });
  }

  render() {
    const props = this.props;
    const {date} = this.state;

    return (<div style={{ margin: '10px 30px' }}>
      <h2>date picker</h2>
      <div>
        <span>{date && format(date) || format(now)}</span>
        <DatePicker
          defaultDate={date || now}
          mode={props.mode}
          minuteStep={4}
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
