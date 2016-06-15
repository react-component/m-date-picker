/* eslint no-console:0 */

import DatePicker from '../../src/DatePicker';
import GregorianCalendarFormat from 'gregorian-calendar-format';
import GregorianCalendar from 'gregorian-calendar';
import zhCn from 'gregorian-calendar-format/lib/locale/zh_CN';
import React, {Component, View, Text, AppRegistry} from 'react-native';
import zhCnPicker from '../../src/locale/zh_CN';

const formatter = GregorianCalendarFormat.getDateTimeInstance(GregorianCalendarFormat.Style.FULL,
  GregorianCalendarFormat.Style.FULL, zhCn);

const getGregorianCalendar = () => new GregorianCalendar(zhCnPicker.calendar);
const minDate = getGregorianCalendar();
minDate.set(2015, 8, 1, 0, 0, 0);
const maxDate = getGregorianCalendar();
maxDate.set(2018, 1, 1, 22, 0, 0);

function format(v) {
  return formatter.format(v);
}

const now = new GregorianCalendar(zhCnPicker.calendar);
now.setTime(Date.now());

class Demo extends Component<any, any> {
  static defaultProps = {
    mode: 'datetime',
    locale: zhCnPicker,
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

AppRegistry.registerComponent('picker', () => Demo);
