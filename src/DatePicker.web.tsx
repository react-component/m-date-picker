import * as React from 'react';
import Picker from 'rmc-picker/lib/index.web';
import classnames from 'classnames';
import { DatePickerProps, DatePickerState } from './DatePickerTypes';
import DatePickerMixin from './DatePickerMixin';

const DatePickerWeb = React.createClass<DatePickerProps, DatePickerState>({
  mixins: [DatePickerMixin],

  getDefaultProps() {
    return {
      prefixCls: 'rmc-date-picker',
      pickerPrefixCls: 'rmc-picker',
    };
  },

  render() {
    const props = this.props;
    const {prefixCls, pickerPrefixCls, className, rootNativeProps} = props;
    const {value, dataSource} = this.getValueDataSource();

    const inner = dataSource.map((items, i) => {
      return (<div key={i} className={`${prefixCls}-item`}>
        <Picker
          prefixCls={pickerPrefixCls}
          pure={false}
          selectedValue={value[i]}
          onValueChange={(v) => {this.onValueChange(i, v);}}
        >
          {items}
        </Picker>
      </div>);
    });

    return (<div {...rootNativeProps} className={classnames(className, prefixCls)}>
      {inner}
    </div>);
  },
});

export default DatePickerWeb;
