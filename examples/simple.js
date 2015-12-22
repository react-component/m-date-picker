// use jsx to render html, do not modify simple.html

import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.less';
import 'rmc-modal/assets/index.css';
import 'rmc-modal/assets/simple.css';
import MDatePicker from 'rmc-date-picker';
import Modal from 'rmc-modal';

import React from 'react';
import ReactDOM from 'react-dom';

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
      // timeZoneOffset: -480, // better not to set. because locale object include it.
    };
  },
  getInitialState() {
    return {
      sel: '',
      modalVisible: false,
    };
  },
  onDismiss() {
    this.setVisibleState(false);
  },
  onOk() {
    this.setVisibleState(false);
  },
  onDateChange(value, info) {
    console.log(value);
    this.setState({sel: info.formatDate});
  },
  setVisibleState(visible) {
    this.setState({
      modalVisible: visible,
    });
  },
  render() {
    const props = this.props;

    const inlinePickers = (<div>
      <MDatePicker className={props.modalPrefixCls + '-content'} prefixCls={props.prefixCls}
        mode={props.mode} locale={props.locale} onDateChange={this.onDateChange}
        minDate={new Date('2015-10-5 18:20')} maxDate={new Date('2016-3-3')}>
      </MDatePicker>
    </div>);

    const popPicker = (<Modal visible={this.state.modalVisible} onDismiss={this.onDismiss}>
      <div className={props.modalPrefixCls + '-header'}>
        <div className={props.modalPrefixCls + '-item'} onClick={this.setVisibleState.bind(this, false)}>取消</div>
        <div className={props.modalPrefixCls + '-item'}></div>
        <div className={props.modalPrefixCls + '-item'} onClick={this.onOk}>完成</div>
      </div>
      <MDatePicker className={props.modalPrefixCls + '-content'} prefixCls={props.prefixCls}
        mode={props.mode} locale={props.locale} onDateChange={this.onDateChange}
        minDate={new Date('2015-10-5 18:20')} maxDate={new Date('2016-3-3')}>
      </MDatePicker>
    </Modal>);

    return (<div style={{margin: '10px 30px'}}>
      <p>您选择的日期是：{this.state.sel}</p>
      <div>{inlinePickers}</div>
      <div>
        {popPicker}
        <button onClick={this.setVisibleState.bind(this, true)}>open picker</button>
      </div>
    </div>);
  },
});

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
