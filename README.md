# rmc-date-picker-plus

---

支持用`sortCols`来调整年月日位置

Support using `sortCols` to adjust the position of the year, month, and day

## install

[![rmc-date-picker-plus](https://nodei.co/npm/rmc-date-picker-plus.png)](https://npmjs.org/package/rmc-date-picker-plus)

## API

### DatePicker props

| name                 | description                                                                      | type                                       | default                                                  |
| -------------------- | -------------------------------------------------------------------------------- | ------------------------------------------ | -------------------------------------------------------- |
| **sortCols(web)**    | **用于调整年月日排列的顺序 Used to adjust the order of the year, month and day** | String                                     | { year: 0, month: 1, day: 2}                             |
| className(web)       | additional css class of root dom node                                            | String                                     | ''                                                       |
| prefixCls(web)       | prefix class                                                                     | String                                     | 'rmc-date-picker'                                        |
| pickerPrefixCls(web) | picker prefix class                                                              | String                                     | 'rmc-picker'                                             |
| defaultDate          | default selected date.                                                           | Date                                       |                                                          |
| date                 | The currently selected date.                                                     | Date                                       |                                                          |
| mode                 | The date picker mode.                                                            | String                                     | 'date' enum('date', 'time', 'datetime', 'year', 'month') |
| minDate              | min date                                                                         | Date                                       | `new Date(2000, 1, 1, 0, 0, 0)`                          |
| maxDate              | max date                                                                         | Date                                       | `new Date(2030, 1, 1, 23, 59, 59)`                       |
| minHour              | min Hour `[0, 23]`                                                               | Number                                     | `0`                                                      |
| maxHour              | max Hour `[0, 23]`                                                               | Number                                     | `23`                                                     |
| minMinute            | max Minute `[0, 59]`                                                             | Number                                     | `0`                                                      |
| maxMinute            | max Minute `[0, 59]`                                                             | Number                                     | `59`                                                     |
| locale               | the locale of area                                                               | Object                                     | import from 'rmc-date-picker/lib/locale/en_US'           |
| use12Hours           | 12 hours display mode                                                            | Boolean                                    | false                                                    |
| minuteStep           | The amount of time, in minutes, between each minute item.                        |  Number                                    | 1                                                        |
| onDateChange         | Date change handler.                                                             | Function(date: Date)                       | ''                                                       |
| onValueChange        | fire when picker change                                                          | (vals: any, index: number) => void         |                                                          |
| formatMonth          | Customize display value of months                                                | (month:number, current:Date) => React.Node |                                                          |
| formatDay            | Customize display value of days                                                  | (day:number, current:Date) => React.Node   |                                                          |

### rmc-date-picker/lib/Popup props

| name                     | description                           | type                      | default            |
| ------------------------ | ------------------------------------- | ------------------------- | ------------------ |
| className(web)           | additional css class of modal node    | String                    | ''                 |
| style(web)               | additional modal style                | object                    | {}                 |
| popupTransitionName(web) |                                       | String                    |                    |
| maskTransitionName(web)  |                                       | String                    |                    |
| prefixCls(web)           | popup's prefix class                  | String                    | 'rmc-picker-popup' |
| styles(react-native)     | PopupPicker's styles                  | StyleSheet.create         |                    |
| datePicker               | DatePicker element                    | React DatePicker element  |                    |
| date                     | The currently selected date.          | Date                      |                    |
| visible                  | whether pop picker is visible         | Boolean                   | false              |
| onChange                 | exec on ok                            | Function(date: Date)      |                    |
| onVisibleChange          | called when pop picker visible change | Function                  |                    |
| onDismiss                | exec on dismiss                       | function                  |                    |
| okText                   | ok button text                        | string/React.ReactElement | 'Ok'               |
| dismissText              | dismiss button text                   | string/React.ReactElement | 'Dismiss'          |
| title                    | Popup title                           | string/React.ReactElement | ''                 |
