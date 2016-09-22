import { View, StyleSheet } from 'react-native';
import * as React from 'react';
import Picker from 'rmc-picker/lib/Picker';
import DatePickerProps from './DatePickerProps';
import DatePickerMixin from './DatePickerMixin';
import FlexAlignType = __React.FlexAlignType;

type FlexDirection = 'row' | 'column';

const styles = StyleSheet.create({
  smallPickerItem: {
    fontSize: 20,
  },
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

const DatePicker = React.createClass<DatePickerProps, any>({
  mixins: [DatePickerMixin],

  render() {
    const { value, dataSource } = this.getValueDataSource();
    const { mode } = this.props;
    const inner = dataSource.map((items, i) => {
      return (<View style={styles.item} key={i}>
        <Picker
          itemStyle={mode === 'datetime' ? styles.smallPickerItem : undefined}
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
