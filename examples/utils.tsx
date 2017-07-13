
export const minDate = new Date(2015, 8, 15, 10, 30, 0);
export const maxDate = new Date(2018, 1, 1, 23, 49, 59);
export let now = new Date();

export const cn = typeof location !== 'undefined' ? location.search.indexOf('cn') !== -1 : false;
if (cn) {
  now = new Date();
} else {
  now = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
}

export function format(date) {
  let mday = date.getDate();
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  mday = mday < 10 ? `0${mday}` : mday;
  return `${date.getFullYear()}-${month}-${mday} ${date.getHours()}:${date.getMinutes()}`;
}
