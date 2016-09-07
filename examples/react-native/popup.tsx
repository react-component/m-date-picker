/* eslint no-console:0 */

import {AppRegistry, View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import * as React from 'react';
import PopPicker from '../../src/Popup';
import DatePicker from '../../src/DatePicker';
import PopupStyles from '../../src/PopupStyles';
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

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    width: 300,
  }
});

class Demo extends React.Component<any, any> {
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

  onChange = (date) => {
    console.log('onChange', format(date));
    this.setState({
      date,
    });
  };

  onDismiss = () => {
    console.log('onDismiss');
  };

  show = () => {
    console.log('my click');
  };

  render() {
    const props = this.props;
    const {date} = this.state;
    const datePicker = (
      <DatePicker
        defaultDate={now}
        minDate={minDate}
        maxDate={maxDate}
        mode={props.mode}
        locale={props.locale}
      />
    );
    return (<View style={{ margin: 20 }}>
      <View>
        <Text>popup date picker</Text>
      </View>
      <View>
        <PopPicker
          datePicker={datePicker}
          styles={PopupStyles}
          title="Date picker"
          date={date}
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
