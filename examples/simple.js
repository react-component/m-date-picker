/* eslint no-console:0 */

import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.css';
import './simple.less';
import 'rmc-modal/assets/index.css';
import DatePicker from 'rmc-date-picker';
import Modal from 'rmc-modal';
import GregorianCalendarFormat from 'gregorian-calendar-format';
import zhCn from 'gregorian-calendar-format/lib/locale/zh_CN';
import React from 'react';
import ReactDOM from 'react-dom';

const formatter = GregorianCalendarFormat.getDateTimeInstance(GregorianCalendarFormat.Style.FULL,
  GregorianCalendarFormat.Style.FULL, zhCn);

function format(v) {
  return formatter.format(v);
}

const Demo = React.createClass({
  propTypes: {
    mode: React.PropTypes.string,
  },
  getDefaultProps() {
    return {
      mode: 'datetime',
      locale: require('../src/locale/zh_CN'),
    };
  },
  getInitialState() {
    return {
      date: null,
      modalVisible: false,
    };
  },
  onDateChange(date) {
    console.log('onDateChange', date);
    this.setState({date});
  },
  setVisibleState(visible) {
    this.setState({
      modalVisible: visible,
    });
  },
  show() {
    this.setVisibleState(true);
  },
  hide() {
    this.setVisibleState(false);
  },
  render() {
    const props = this.props;
    const {date} = this.state;

    const inlinePickers = (<div>
      <DatePicker date={date}
                  mode={props.mode} locale={props.locale} onDateChange={this.onDateChange}/>
    </div>);

    const popPicker = this.state.modalVisible ? (<Modal
      style={{left: 0, bottom: 0}}
      visible onDismiss={this.hide}>
      <div className={'pop-picker-header'}>
        <div className={'pop-picker-item'} onClick={this.hide}>取消</div>
        <div className={'pop-picker-item'}></div>
        <div className={'pop-picker-item'} onClick={this.hide}>完成</div>
      </div>
      <DatePicker date={date}
                  mode={props.mode} locale={props.locale} onDateChange={this.onDateChange}/>
    </Modal>) : null;

    return (<div style={{margin: '10px 30px'}}>
      <p>您选择的日期是：{date && format(date)}</p>
      <div>{inlinePickers}</div>
      <div>
        {popPicker}
        <button onClick={this.show}>open picker</button>
      </div>
    </div>);
  },
});

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
