import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import moment from 'moment';
import DatePicker from '../src/index';
import datePickerLocale from '../src/locale/zh_CN';

function offsetTop(el) {
  return el.getBoundingClientRect().top;
}

function isEqTop(t1, t2) {
  return Math.abs(offsetTop(t1) - offsetTop(t2)) < 10;
}

function map$(node, fn) {
  const ret: any[] = [];
  for (let i = 0; i < node.length; i++) {
    ret.push(fn($(node[i])));
  }
  return ret;
}

const date = moment([2014, 10, 16, 17, 30, 0]);

describe('m-date-picker', () => {
  let div;
  let component;
  let rootDom;
  beforeEach(() => {
    div = document.createElement('div');
    document.body.appendChild(div);
    component = ReactDOM.render(
      <DatePicker locale={datePickerLocale} date={date} mode="datetime"/>, div);
    rootDom = $(ReactDOM.findDOMNode(component));
  });
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
  });

  it('render works', () => {
    const wrappers = rootDom.find('.rmc-picker');
    expect(wrappers.length).toBe(5);
    const indicators = map$(wrappers, (n) => {
      return n.find('.rmc-picker-indicator')[0];
    });
    const scrollItems = map$(wrappers, (m) => {
      return m.find('.rmc-picker-item');
    });

    const yearEl = scrollItems[0].filter(function filter() {
      return parseInt(this.innerHTML.slice(0, -1), 10) === date.year();
    });

    const monthEl = scrollItems[1].filter(function filter() {
      return parseInt(this.innerHTML.slice(0, -1), 10) === date.month() + 1;
    });

    const dayEl = scrollItems[2].filter(function filter() {
      return parseInt(this.innerHTML.slice(0, -1), 10) === date.date();
    });

    const hourEl = scrollItems[3].filter(function filter() {
      return parseInt(this.innerHTML.slice(0, -1), 10) === date.hour();
    });

    const minuteEl = scrollItems[4].filter(function filter() {
      return parseInt(this.innerHTML.slice(0, -1), 10) === date.minute();
    });

    expect(isEqTop(yearEl[0], indicators[0])).toBe(true);
    expect(isEqTop(monthEl[0], indicators[1])).toBe(true);
    expect(isEqTop(dayEl[0], indicators[2])).toBe(true);
    expect(isEqTop(hourEl[0], indicators[3])).toBe(true);
    expect(isEqTop(minuteEl[0], indicators[4])).toBe(true);
  });
});
