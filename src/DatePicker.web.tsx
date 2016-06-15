import * as React from 'react';
import Picker from 'rmc-picker/lib/index.web';
import classnames from 'classnames';
import {DatePickerProps, DatePickerState} from './DatePickerTypes';
import reactMixin from 'react-mixin';
import DatePickerMixin from './DatePickerMixin';

export interface DatePickerPropsWeb extends DatePickerProps {
  prefixCls?:string;
  pickerPrefixCls?:string;
  className?:string;
}

class DatePickerWeb extends React.Component<DatePickerPropsWeb, DatePickerState> {
  static defaultProps = {
    prefixCls: 'rmc-date-picker',
    pickerPrefixCls: 'rmc-picker',
  };

  getValueDataSource:() => any;

  onValueChange:(i) => any;

  render() {
    const props = this.props;
    const {prefixCls, pickerPrefixCls, className} = props;
    const {value, dataSource} = this.getValueDataSource();

    const inner = dataSource.map((items, i) => {
      return (<div key={i} className={`${prefixCls}-item`}>
        <Picker
          prefixCls={pickerPrefixCls}
          pure={false}
          selectedValue={value[i]}
          onValueChange={() => {this.onValueChange(i);}}
        >
          {items}
        </Picker>
      </div>);
    });

    return (<div className={classnames(className, prefixCls)}>
      {inner}
    </div>);
  }
}

reactMixin.onClass(DatePickerWeb, DatePickerMixin);

export default DatePickerWeb;
