export function exclude(props, bl) {
  const ret = {};
  Object.keys(props).forEach((k) => {
    if (!bl[k]) {
      ret[k] = props[k];
    }
  });
  return ret;
}

export function pick(props, wl) {
  const ret = {};
  Object.keys(wl).forEach((w) => {
    const k = wl[w] || w;
    if (w in props) {
      ret[k] = props[w];
    }
  });
  return ret;
}

export function noop() {
}
