# rmc-date-picker
---

React Mobile DatePicker Component


[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

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

### DatePicker props

| name     | description    | type     | default      |
|----------|----------------|----------|--------------|
|className | additional css class of root dom node | String | '' |
|prefixCls | prefix class | String | 'rmc-date-picker' |
|pickerPrefixCls | picker prefix class | String | 'rmc-picker' |
|defaultDate | default selected date. | GregorianCalendar | now |
|date | The currently selected date. | GregorianCalendar |  |
|onDateChange | Date change handler. | Function(date: GregorianCalendar) | '' |
|mode | The date picker mode. | String | 'date' enum('date', 'time', 'datetime') |
|minDate | min date | [GregorianCalendar](https://github.com/yiminghe/gregorian-calendar) | 2000-1-1 |
|maxDate | max date | GregorianCalendar | 2030-1-1 |
|locale | the locale of area | Object | import from 'rmc-date-picker/lib/locale/en_US' |

### rmc-date-picker/lib/Popup props

| name     | description    | type     | default      |
|----------|----------------|----------|--------------|
|className | additional css class of modal node | String | '' |
|prefixCls | prefix class | String | 'rmc-date-picker' |
|pickerPrefixCls | picker prefix class | String | 'rmc-picker' |
|date | The currently selected date. | GregorianCalendar |  |
|onPickerChange | Date inside picker change handler. | Function(date: GregorianCalendar) | '' |
|mode | The date picker mode. | String | 'date' enum('date', 'time', 'datetime') |
|minDate | min date | [GregorianCalendar](https://github.com/yiminghe/gregorian-calendar) | 2000-1-1 |
|maxDate | max date | GregorianCalendar | 2030-1-1 |
|locale | the locale of area | Object | import from 'rmc-date-picker/lib/locale/en_US' |
|style | additional modal style | object | {} |
|onChange | exec on ok | Function(date: GregorianCalendar) |  |
|onDismiss | exec on dismiss | function |  |
|okText | ok button text | String | 'Ok' |
|dismissText | dismiss button text | String | 'Dismiss' |
|visible | whether pop picker is visible | Boolean | |
|onVisibleChange | called when pop picker visible change | Function | |
|popupPrefixCls |  | String | |
|popupTransitionName |  | String | |
|maskTransitionName |  | String | |

## Test Case

```
npm test
npm run chrome-test
```

## Coverage

```
npm run coverage
```

open coverage/ dir

## License

rmc-date-picker is released under the MIT license.
