/* eslint no-console:0 */

import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.less';
import 'rmc-modal/assets/index.css';
import 'rmc-modal/assets/simple.css';
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
      prefixCls: 'rmc-modal',
      modalPrefixCls: 'rmc-modal',
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
  onDismiss() {
    this.setVisibleState(false);
  },
  onOk() {
    this.setVisibleState(false);
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
  render() {
    const props = this.props;
    const {date} = this.state;

    const inlinePickers = (<div>
      <DatePicker date={date} className={props.modalPrefixCls + '-content'} prefixCls={props.prefixCls}
                  mode={props.mode} locale={props.locale} onDateChange={this.onDateChange} />
    </div>);

    const popPicker = (<Modal visible={this.state.modalVisible} onDismiss={this.onDismiss}>
      <div className={props.modalPrefixCls + '-header'}>
        <div className={props.modalPrefixCls + '-item'} onClick={this.setVisibleState.bind(this, false)}>取消</div>
        <div className={props.modalPrefixCls + '-item'}></div>
        <div className={props.modalPrefixCls + '-item'} onClick={this.onOk}>完成</div>
      </div>
      <DatePicker date={date} className={props.modalPrefixCls + '-content'} prefixCls={props.prefixCls}
                  mode={props.mode} locale={props.locale} onDateChange={this.onDateChange} />
    </Modal>);

    return (<div style={{margin: '10px 30px'}}>
      <p>您选择的日期是：{date && format(date)}</p>
      <div>{inlinePickers}</div>
      <div>
        {popPicker}
        <button onClick={this.setVisibleState.bind(this, true)}>open picker</button>
      </div>
    </div>);
  },
});

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
