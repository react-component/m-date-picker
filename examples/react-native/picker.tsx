/* eslint no-console:0 */

import DatePicker from '../../src/DatePicker';
import { View, Text, AppRegistry } from 'react-native';
import * as React from 'react';

import moment from 'moment';
import zhCn from '../../src/locale/zh_CN';
import enUs from '../../src/locale/en_US';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

const cn = false;

const minDate = moment([2015, 8, 1, 0, 0, 0]);
const maxDate = moment([2018, 1, 1, 22, 0, 0]);
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

function format(date) {
  return date.format('YYYY-MM-DD HH:mm');
}

class PickerDemo extends React.Component<any, any> {
  static defaultProps = {
    mode: 'datetime',
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
    const { date } = this.state;

    return (<View style={{ margin: 20 }}>
      <View><Text>date picker</Text></View>
      <View>
        <View>
          <Text>{date && format(date) || format(now)}</Text>
        </View>
        <DatePicker
          defaultDate={date || now}
          mode={props.mode}
          locale={props.locale}
          maxDate={maxDate}
          minDate={minDate}
          onDateChange={this.onDateChange}
        />
      </View>
    </View>);
  }
}

export const Demo = PickerDemo;
export const title = 'picker';
