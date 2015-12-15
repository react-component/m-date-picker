// use jsx to render html, do not modify simple.html

import 'rmc-date-picker/assets/index.less';
import MDatePicker from 'rmc-date-picker';
import React from 'react';
import ReactDOM from 'react-dom';

const Demo = React.createClass({
  propTypes: {
    minYear: React.PropTypes.number,
  },
  getDefaultProps() {
    return {
      prefixCls: '',
    };
  },
  getInitialState() {
    return {
      value: '',
    };
  },
  render() {
    return (<MDatePicker>
        <button>trigger</button>
      </MDatePicker>);
  },
});

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
