// use jsx to render html, do not modify simple.html

import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.less';
import MDatePicker from 'rmc-date-picker';
import React from 'react';
import ReactDOM from 'react-dom';

const Demo = React.createClass({
  propTypes: {
  },
  getDefaultProps() {
    return {
      mode: 'datetime',
      locale: 'zh_CN',
    };
  },
  getInitialState() {
    return {
      sel: '',
    };
  },
  onValueChange(value) {
    console.log(value);
    let sel;
    switch (this.props.mode) {
      case 'time':
        sel = `${value[0]} 点 ${value[1]} 分`;
        break;
      case 'date':
      case 'datetime':
        sel = `${value[0]} 年 ${value[1]} 月 ${value[2]} 日`;
        if (this.props.mode === 'datetime') {
          sel += `${value[3]} 点 ${value[4]} 分`;
        }
    }
    this.setState({sel,})
  },
  render() {
    const props = this.props;
    return (<div style={{margin: '10px 30px'}}>
      <p>您选择的日期是：{this.state.sel}</p>
      <MDatePicker mode={props.mode} locale={props.locale} onValueChange={this.onValueChange}
        minDate={new Date('2015-10-5 18:20')} maxDate={new Date('2016-3-3')} timeZoneOffset={20}>
        <button>trigger</button>
      </MDatePicker>
    </div>);
  },
});

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
