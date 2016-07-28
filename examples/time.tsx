/* eslint no-console:0 */

import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.less';
import DatePicker from '../src/index.web';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import moment from 'moment';
import zhCn from '../src/locale/zh_CN';
import enUs from '../src/locale/en_US';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

const cn = location.search.indexOf('cn') !== -1;

const minDate = moment();
const maxDate = moment();
const now = moment();

if (cn) {
  minDate.locale('zh-cn').utcOffset(8);
  maxDate.locale('zh-cn').utcOffset(8);
  now.locale('zh-cn').utcOffset(8);
} else {
  minDate.locale('en-gb').utcOffset(0);
  maxDate.locale('en-gb').utcOffset(0);
  now.locale('en-gb').utcOffset(0);
}

minDate.hour(10).minute(30);
maxDate.hour(22).minute(49);
now.hour(15).minute(49);

function format(date) {
  return date.format('YYYY-MM-DD HH:mm');
}

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
  };

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
