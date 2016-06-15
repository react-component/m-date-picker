/* eslint no-console:0 */

import GregorianCalendarFormat from 'gregorian-calendar-format';
import GregorianCalendar from 'gregorian-calendar';
import zhCn from 'gregorian-calendar-format/lib/locale/zh_CN';
import zhCnPicker from 'rmc-date-picker/src/locale/zh_CN';
// const zhCnCalendar = null;
import React, {AppRegistry, View, Text, Component, StyleSheet, TouchableHighlight} from 'react-native';

import PopPicker from '../../src/Popup';
import PopupStyles from '../../src/PopupStyles';

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

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    width: 300,
  }
});

class Demo extends Component<any, any> {
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
    return (<View style={{ margin: 20 }}>
      <View>
        <Text>popup date picker</Text>
      </View>
      <View>
        <PopPicker
          styles={PopupStyles}
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
          <TouchableHighlight onPress={this.show} activeOpacity={0.5} style={[styles.button]} underlayColor="#a9d9d4">
            <Text>{date && format(date) || 'open'}</Text>
          </TouchableHighlight>
        </PopPicker>
      </View>
    </View>);
  }
}

AppRegistry.registerComponent('popup', () => Demo);
