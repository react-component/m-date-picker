import React from 'react';
import { render/*, mount*/ } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import DatePicker from '../src';
import { cn, format, minDate, maxDate, now } from '../examples/utils';

describe('DatePicker', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <DatePicker
        rootNativeProps={{'data-xx': 'yy'}}
        defaultDate={now}
        mode={'datetime'}
        maxDate={maxDate}
        minDate={minDate}
        use12Hours
      />
    );
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });
});
