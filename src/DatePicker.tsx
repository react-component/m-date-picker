import {View, StyleSheet} from 'react-native';
import * as React from 'react';
import Picker from 'rmc-picker/lib/Picker';
import {DatePickerProps, DatePickerState} from './DatePickerTypes';
import reactMixin from 'react-mixin';
import DatePickerMixin from './DatePickerMixin';

const styles = StyleSheet.create({
  item: {
    flex: 1,
  },
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  }
});

export default class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
  getValueDataSource:() => any;

  onValueChange:(i, v) => any;

  render() {
    const {value, dataSource} = this.getValueDataSource();

    const inner = dataSource.map((items, i) => {
      return (<View style={styles.item} key={i}>
        <Picker
          pure={false}
          selectedValue={value[i]}
          onValueChange={(v) => {this.onValueChange(i, v);}}
        >
          {items}
        </Picker>
      </View>);
    });

    return (<View style={styles.root}>
      {inner}
    </View>);
  }
}

reactMixin.onClass(DatePicker, DatePickerMixin);
