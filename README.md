# rmc-date-picker
---

React MDatePicker Component


[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]
[![Sauce Test Status](https://saucelabs.com/buildstatus/rmc-date-picker)](https://saucelabs.com/u/rmc-date-picker)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/rmc-date-picker.svg)](https://saucelabs.com/u/rmc-date-picker)

[npm-image]: http://img.shields.io/npm/v/rmc-date-picker.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rmc-date-picker
[travis-image]: https://img.shields.io/travis/react-component/m-date-picker.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/m-date-picker
[coveralls-image]: https://img.shields.io/coveralls/react-component/m-date-picker.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/m-date-picker?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/react-component/m-date-picker.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/react-component/m-date-picker
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/rmc-date-picker.svg?style=flat-square
[download-url]: https://npmjs.org/package/rmc-date-picker

## Screenshots

<img src="https://os.alipayobjects.com/rmsportal/lpMABkgrgVnlnTd.png" width="288"/>


## Development

```
npm install
npm start
```

## Example

http://localhost:8000/examples/

online example: http://react-component.github.io/m-date-picker/

## install

[![rmc-date-picker](https://nodei.co/npm/rmc-date-picker.png)](https://npmjs.org/package/rmc-date-picker)

## Usage
see example

## API

### props

| name     | description    | type     | default      |
|----------|----------------|----------|--------------|
|className | additional css class of root dom node | String | '' |
|prefixCls | prefix class | String | '' |
|value | The currently selected date. | String | new Date() |
|onValueChange | Date change handler. | Function | '' |
|mode | The date picker mode. | String | 'date' enum('date', 'time', 'datetime') |
|minDate | min date | String/Date | new Date('2000') |
|maxDate | max date | String/Date | new Date('2030') |
|locale | the locale of area | Object | import from 'rmc-date-picker/lib/locale/zh_CN' |
|timeZoneOffset | Timezone offset in minutes. | number | 480 (same as locale setting) |


## Test Case

http://localhost:8000/tests/runner.html?coverage

## Coverage

http://localhost:8000/node_modules/rc-server/node_modules/node-jscover/lib/front-end/jscoverage.html?w=http://localhost:8000/tests/runner.html?coverage

## License

rmc-date-picker is released under the MIT license.
