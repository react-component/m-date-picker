// only for react-native examples

import getList from 'react-native-index-page';

getList({
  demos: [
    require('./examples/react-native/picker'),
    require('./examples/react-native/popup'),
  ],
  title: require('./package.json').name,
});
