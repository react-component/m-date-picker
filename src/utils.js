export function pick(props, wl) {
  const ret = {};
  wl.forEach((w) => {
    if (w in props) {
      ret[w] = props[w];
    }
  });
  return ret;
}

export function noop() {
}
