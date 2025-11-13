// Call
Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(this + "is not callable");
  }

  context = context || globalThis;

  // temporary property on context to hold the function
  const fnSymbol = Symbol();
  context[fnSymbol] = this;

  const result = context[fnSymbol](...args);

  delete context[fnSymbol];
  return result;
};

// Apply
Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(this + "is not callable");
  }

  context = context || globalThis;

  // temporary property on context to hold the function
  const fnSymbol = Symbol();
  context[fnSymbol] = this;

  let result;
  if (args && Array.isArray(args)) {
    result = context[fnSymbol](...args);
  } else {
    result = context[fnSymbol]();
  }

  delete context[fnSymbol];
  return result;
};

// Bind
Function.prototype.myBind = function (context, ...boundArgs) {
  const originalFn = this;

  function boundFunction(...callArgs) {
    // If called with 'new', ignore the provided context
    const isNew = this instanceof boundFunction;
    return originalFn.apply(isNew ? this : context, [
      ...boundArgs,
      ...callArgs,
    ]);
  }

  // Preserve prototype chain (optional)
  boundFunction.prototype = Object.create(originalFn, this.prototype);

  return boundFunction;
};
