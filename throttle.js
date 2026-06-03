function throttle(fun, limit) {
  let flag = true;
  return function (...args) {
    if (!flag) return;
    flag = false;
    fun.apply(this, args);
    setTimeout(() => {
      flag = true;
    }, limit);
  };
}
