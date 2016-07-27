import {View, StyleSheet} from 'react-native';
import * as React from 'react';
import Picker from 'rmc-picker/lib/Picker';
import {DatePickerProps, DatePickerState} from './DatePickerTypes';
import DatePickerMixin from './DatePickerMixin';
import FlexAlignType = __React.FlexAlignType;

type FlexDirection = 'row' | 'column';

const styles = StyleSheet.create({
  item: {
    flex: 1,
  },
  root: {
    flexDirection: 'row' as FlexDirection,
    alignItems: 'center' as FlexAlignType,
    paddingTop: 10,
    paddingBottom: 10,
  }
});

const DatePicker = React.createClass<DatePickerProps, DatePickerState>({
  mixins: [DatePickerMixin],
  
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
  },
});

export default DatePicker;
