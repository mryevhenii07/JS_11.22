function createDebounceFunction(callback, delay) {
  let time;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(time);
    time = setTimeout(() => callback.apply(context, args), delay);
  };
}
