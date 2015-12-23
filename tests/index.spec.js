import 'rmc-picker/assets/index.less';
import 'rmc-date-picker/assets/index.less';
import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import zhCn from 'gregorian-calendar/lib/locale/zh_CN';
import $ from 'jquery';
import GregorianCalendar from 'gregorian-calendar';
import DatePicker from 'rmc-date-picker';
import datePickerLocale from 'rmc-date-picker/src/locale/zh_CN';

function offsetTop(el) {
  return el.getBoundingClientRect().top;
}

function isEqTop(t1, t2) {
  return Math.abs(offsetTop(t1) - offsetTop(t2)) < 10;
}

function map$(node, fn) {
  const ret = [];
  for (let i = 0; i < node.length; i++) {
    ret.push(fn($(node[i])));
  }
  return ret;
}

const date = new GregorianCalendar(zhCn);
date.set(2014, 10, 16, 17, 30, 0);

describe('m-date-picker', ()=> {
  let div;
  let component;
  let rootDom;
  beforeEach(()=> {
    div = document.createElement('div');
    document.body.appendChild(div);
    component = ReactDOM.render(<DatePicker locale={datePickerLocale} date={date} mode="datetime"/>, div);
    rootDom = $(ReactDOM.findDOMNode(component));
  });
  afterEach(()=> {
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
  });

  it('render works', () => {
    const wrappers = rootDom.find('.rmc-picker-scroller-wrapper');
    expect(wrappers.length).to.be(5);
    const indicators = map$(wrappers, (n) => {
      return n.find('.rmc-picker-scroller-indicator')[0];
    });
    const scrollItems = map$(wrappers, (m) => {
      return m.find('.rmc-picker-scroller-item');
    });

    const yearEl = scrollItems[0].filter(function filter() {
      return parseInt(this.innerHTML.slice(0, -1), 10) === date.getYear();
    });

    const monthEl = scrollItems[1].filter(function filter() {
      return parseInt(this.innerHTML.slice(0, -1), 10) === date.getMonth() + 1;
    });

    const dayEl = scrollItems[2].filter(function filter() {
      return parseInt(this.innerHTML.slice(0, -1), 10) === date.getDayOfMonth();
    });

    const hourEl = scrollItems[3].filter(function filter() {
      return parseInt(this.innerHTML.slice(0, -1), 10) === date.getHourOfDay();
    });

    const minuteEl = scrollItems[4].filter(function filter() {
      return parseInt(this.innerHTML.slice(0, -1), 10) === date.getMinutes();
    });

    expect(isEqTop(yearEl[0], indicators[0])).to.be(true);
    expect(isEqTop(monthEl[0], indicators[1])).to.be(true);
    expect(isEqTop(dayEl[0], indicators[2])).to.be(true);
    expect(isEqTop(hourEl[0], indicators[3])).to.be(true);
    expect(isEqTop(minuteEl[0], indicators[4])).to.be(true);
  });
});
