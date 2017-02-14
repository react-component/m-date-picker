// only for react-native examples

import getList from 'react-native-index-page';

getList({
  demos: [
    require('./_ts2js/examples/react-native/picker'),
    require('./_ts2js/examples/react-native/popup'),
  ],
  title: require('./package.json').name,
});
