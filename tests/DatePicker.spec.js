import React from 'react';
import { render/*, mount*/ } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import DatePicker from '../src';
import { cn, format, minDate, maxDate } from '../examples/utils';

describe('DatePicker', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <DatePicker
        rootNativeProps={{'data-xx': 'yy'}}
        defaultDate={new Date(2016, 8, 15, 10, 30, 0)}
        mode={'datetime'}
        maxDate={maxDate}
        minDate={minDate}
        use12Hours
      />
    );
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });
});
