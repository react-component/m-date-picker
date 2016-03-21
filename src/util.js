import ReactDOM from 'react-dom';

export function addEventListener(target, eventType, cb) {
  /* eslint camelcase: 2 */
  const callback = ReactDOM.unstable_batchedUpdates ? function run(e) {
    ReactDOM.unstable_batchedUpdates(cb, e);
  } : cb;
  target.addEventListener(eventType, callback, false);
  return {
    remove() {
      target.removeEventListener(eventType, callback, false);
    },
  };
}

export function contains(root, n) {
  let node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
}


export function noop() {
}
