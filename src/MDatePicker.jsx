import React from 'react';
// import ReactDOM from 'react-dom';
// import classNames from 'classnames';
import Picker from 'rmc-picker';

const MDatePicker = React.createClass({
  propTypes: {
    minYear: React.PropTypes.number,
    maxYear: React.PropTypes.number,
    mode: React.PropTypes.string,
    format: React.PropTypes.array,
  },
  getDefaultProps() {
    return {
      prefixCls: '',
      minYear: 2000,
      maxYear: 2030,
      format: ['YYYY-MM-DD HH:mm', '年', '月', '日', '时', '分'],
    };
  },
  getInitialState() {
    return {
      value: '',
    };
  },
  render() {
    return (<Picker>
        <button>trigger</button>
      </Picker>);
  },
});

export default MDatePicker;
