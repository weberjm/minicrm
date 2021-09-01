var App = (function () {
	'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var classCallCheck = {exports: {}};

	(function (module) {
	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  module.exports = _classCallCheck;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	})(classCallCheck);

	var _classCallCheck = /*@__PURE__*/getDefaultExportFromCjs(classCallCheck.exports);

	var createClass = {exports: {}};

	(function (module) {
	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  module.exports = _createClass;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	})(createClass);

	var _createClass = /*@__PURE__*/getDefaultExportFromCjs(createClass.exports);

	var assertThisInitialized = {exports: {}};

	(function (module) {
	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  module.exports = _assertThisInitialized;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	})(assertThisInitialized);

	var _assertThisInitialized = /*@__PURE__*/getDefaultExportFromCjs(assertThisInitialized.exports);

	var inherits = {exports: {}};

	var setPrototypeOf = {exports: {}};

	(function (module) {
	  function _setPrototypeOf(o, p) {
	    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    module.exports["default"] = module.exports, module.exports.__esModule = true;
	    return _setPrototypeOf(o, p);
	  }

	  module.exports = _setPrototypeOf;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	})(setPrototypeOf);

	(function (module) {
	  var setPrototypeOf$1 = setPrototypeOf.exports;

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) setPrototypeOf$1(subClass, superClass);
	  }

	  module.exports = _inherits;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	})(inherits);

	var _inherits = /*@__PURE__*/getDefaultExportFromCjs(inherits.exports);

	var possibleConstructorReturn = {exports: {}};

	var _typeof$1 = {exports: {}};

	(function (module) {
	  function _typeof(obj) {
	    "@babel/helpers - typeof";

	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      module.exports = _typeof = function _typeof(obj) {
	        return typeof obj;
	      };

	      module.exports["default"] = module.exports, module.exports.__esModule = true;
	    } else {
	      module.exports = _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };

	      module.exports["default"] = module.exports, module.exports.__esModule = true;
	    }

	    return _typeof(obj);
	  }

	  module.exports = _typeof;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	})(_typeof$1);

	var _typeof = /*@__PURE__*/getDefaultExportFromCjs(_typeof$1.exports);

	(function (module) {
	  var _typeof = _typeof$1.exports["default"];
	  var assertThisInitialized$1 = assertThisInitialized.exports;

	  function _possibleConstructorReturn(self, call) {
	    if (call && (_typeof(call) === "object" || typeof call === "function")) {
	      return call;
	    } else if (call !== void 0) {
	      throw new TypeError("Derived constructors may only return object or undefined");
	    }

	    return assertThisInitialized$1(self);
	  }

	  module.exports = _possibleConstructorReturn;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	})(possibleConstructorReturn);

	var _possibleConstructorReturn = /*@__PURE__*/getDefaultExportFromCjs(possibleConstructorReturn.exports);

	var getPrototypeOf = {exports: {}};

	(function (module) {
	  function _getPrototypeOf(o) {
	    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    module.exports["default"] = module.exports, module.exports.__esModule = true;
	    return _getPrototypeOf(o);
	  }

	  module.exports = _getPrototypeOf;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	})(getPrototypeOf);

	var _getPrototypeOf = /*@__PURE__*/getDefaultExportFromCjs(getPrototypeOf.exports);

	var slicedToArray = {exports: {}};

	var arrayWithHoles = {exports: {}};

	(function (module) {
	  function _arrayWithHoles(arr) {
	    if (Array.isArray(arr)) return arr;
	  }

	  module.exports = _arrayWithHoles;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	})(arrayWithHoles);

	var iterableToArrayLimit = {exports: {}};

	(function (module) {
	  function _iterableToArrayLimit(arr, i) {
	    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

	    if (_i == null) return;
	    var _arr = [];
	    var _n = true;
	    var _d = false;

	    var _s, _e;

	    try {
	      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"] != null) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  module.exports = _iterableToArrayLimit;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	})(iterableToArrayLimit);

	var unsupportedIterableToArray = {exports: {}};

	var arrayLikeToArray = {exports: {}};

	(function (module) {
	  function _arrayLikeToArray(arr, len) {
	    if (len == null || len > arr.length) len = arr.length;

	    for (var i = 0, arr2 = new Array(len); i < len; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  }

	  module.exports = _arrayLikeToArray;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	})(arrayLikeToArray);

	(function (module) {
	  var arrayLikeToArray$1 = arrayLikeToArray.exports;

	  function _unsupportedIterableToArray(o, minLen) {
	    if (!o) return;
	    if (typeof o === "string") return arrayLikeToArray$1(o, minLen);
	    var n = Object.prototype.toString.call(o).slice(8, -1);
	    if (n === "Object" && o.constructor) n = o.constructor.name;
	    if (n === "Map" || n === "Set") return Array.from(o);
	    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray$1(o, minLen);
	  }

	  module.exports = _unsupportedIterableToArray;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	})(unsupportedIterableToArray);

	var nonIterableRest = {exports: {}};

	(function (module) {
	  function _nonIterableRest() {
	    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }

	  module.exports = _nonIterableRest;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	})(nonIterableRest);

	(function (module) {
	  var arrayWithHoles$1 = arrayWithHoles.exports;
	  var iterableToArrayLimit$1 = iterableToArrayLimit.exports;
	  var unsupportedIterableToArray$1 = unsupportedIterableToArray.exports;
	  var nonIterableRest$1 = nonIterableRest.exports;

	  function _slicedToArray(arr, i) {
	    return arrayWithHoles$1(arr) || iterableToArrayLimit$1(arr, i) || unsupportedIterableToArray$1(arr, i) || nonIterableRest$1();
	  }

	  module.exports = _slicedToArray;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	})(slicedToArray);

	var _slicedToArray = /*@__PURE__*/getDefaultExportFromCjs(slicedToArray.exports);

	var runtime = {exports: {}};

	(function (module) {
	  var runtime = function (exports) {

	    var Op = Object.prototype;
	    var hasOwn = Op.hasOwnProperty;
	    var undefined$1; // More compressible than void 0.

	    var $Symbol = typeof Symbol === "function" ? Symbol : {};
	    var iteratorSymbol = $Symbol.iterator || "@@iterator";
	    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	    function define(obj, key, value) {
	      Object.defineProperty(obj, key, {
	        value: value,
	        enumerable: true,
	        configurable: true,
	        writable: true
	      });
	      return obj[key];
	    }

	    try {
	      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
	      define({}, "");
	    } catch (err) {
	      define = function define(obj, key, value) {
	        return obj[key] = value;
	      };
	    }

	    function wrap(innerFn, outerFn, self, tryLocsList) {
	      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	      var generator = Object.create(protoGenerator.prototype);
	      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
	      // .throw, and .return methods.

	      generator._invoke = makeInvokeMethod(innerFn, self, context);
	      return generator;
	    }

	    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
	    // record like context.tryEntries[i].completion. This interface could
	    // have been (and was previously) designed to take a closure to be
	    // invoked without arguments, but in all the cases we care about we
	    // already have an existing method we want to call, so there's no need
	    // to create a new function object. We can even get away with assuming
	    // the method takes exactly one argument, since that happens to be true
	    // in every case, so we don't have to touch the arguments object. The
	    // only additional allocation required is the completion record, which
	    // has a stable shape and so hopefully should be cheap to allocate.

	    function tryCatch(fn, obj, arg) {
	      try {
	        return {
	          type: "normal",
	          arg: fn.call(obj, arg)
	        };
	      } catch (err) {
	        return {
	          type: "throw",
	          arg: err
	        };
	      }
	    }

	    var GenStateSuspendedStart = "suspendedStart";
	    var GenStateSuspendedYield = "suspendedYield";
	    var GenStateExecuting = "executing";
	    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
	    // breaking out of the dispatch switch statement.

	    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
	    // .constructor.prototype properties for functions that return Generator
	    // objects. For full spec compliance, you may wish to configure your
	    // minifier not to mangle the names of these two functions.

	    function Generator() {}

	    function GeneratorFunction() {}

	    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
	    // don't natively support it.


	    var IteratorPrototype = {};
	    define(IteratorPrototype, iteratorSymbol, function () {
	      return this;
	    });
	    var getProto = Object.getPrototypeOf;
	    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

	    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	      // This environment has a native %IteratorPrototype%; use it instead
	      // of the polyfill.
	      IteratorPrototype = NativeIteratorPrototype;
	    }

	    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
	    GeneratorFunction.prototype = GeneratorFunctionPrototype;
	    define(Gp, "constructor", GeneratorFunctionPrototype);
	    define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
	    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
	    // Iterator interface in terms of a single ._invoke method.

	    function defineIteratorMethods(prototype) {
	      ["next", "throw", "return"].forEach(function (method) {
	        define(prototype, method, function (arg) {
	          return this._invoke(method, arg);
	        });
	      });
	    }

	    exports.isGeneratorFunction = function (genFun) {
	      var ctor = typeof genFun === "function" && genFun.constructor;
	      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
	      // do is to check its .name property.
	      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	    };

	    exports.mark = function (genFun) {
	      if (Object.setPrototypeOf) {
	        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	      } else {
	        genFun.__proto__ = GeneratorFunctionPrototype;
	        define(genFun, toStringTagSymbol, "GeneratorFunction");
	      }

	      genFun.prototype = Object.create(Gp);
	      return genFun;
	    }; // Within the body of any async function, `await x` is transformed to
	    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	    // `hasOwn.call(value, "__await")` to determine if the yielded value is
	    // meant to be awaited.


	    exports.awrap = function (arg) {
	      return {
	        __await: arg
	      };
	    };

	    function AsyncIterator(generator, PromiseImpl) {
	      function invoke(method, arg, resolve, reject) {
	        var record = tryCatch(generator[method], generator, arg);

	        if (record.type === "throw") {
	          reject(record.arg);
	        } else {
	          var result = record.arg;
	          var value = result.value;

	          if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
	            return PromiseImpl.resolve(value.__await).then(function (value) {
	              invoke("next", value, resolve, reject);
	            }, function (err) {
	              invoke("throw", err, resolve, reject);
	            });
	          }

	          return PromiseImpl.resolve(value).then(function (unwrapped) {
	            // When a yielded Promise is resolved, its final value becomes
	            // the .value of the Promise<{value,done}> result for the
	            // current iteration.
	            result.value = unwrapped;
	            resolve(result);
	          }, function (error) {
	            // If a rejected Promise was yielded, throw the rejection back
	            // into the async generator function so it can be handled there.
	            return invoke("throw", error, resolve, reject);
	          });
	        }
	      }

	      var previousPromise;

	      function enqueue(method, arg) {
	        function callInvokeWithMethodAndArg() {
	          return new PromiseImpl(function (resolve, reject) {
	            invoke(method, arg, resolve, reject);
	          });
	        }

	        return previousPromise = // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
	        // invocations of the iterator.
	        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	      } // Define the unified helper method that is used to implement .next,
	      // .throw, and .return (see defineIteratorMethods).


	      this._invoke = enqueue;
	    }

	    defineIteratorMethods(AsyncIterator.prototype);
	    define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
	      return this;
	    });
	    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
	    // AsyncIterator objects; they just return a Promise for the value of
	    // the final result produced by the iterator.

	    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	      if (PromiseImpl === void 0) PromiseImpl = Promise;
	      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
	      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function (result) {
	        return result.done ? result.value : iter.next();
	      });
	    };

	    function makeInvokeMethod(innerFn, self, context) {
	      var state = GenStateSuspendedStart;
	      return function invoke(method, arg) {
	        if (state === GenStateExecuting) {
	          throw new Error("Generator is already running");
	        }

	        if (state === GenStateCompleted) {
	          if (method === "throw") {
	            throw arg;
	          } // Be forgiving, per 25.3.3.3.3 of the spec:
	          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


	          return doneResult();
	        }

	        context.method = method;
	        context.arg = arg;

	        while (true) {
	          var delegate = context.delegate;

	          if (delegate) {
	            var delegateResult = maybeInvokeDelegate(delegate, context);

	            if (delegateResult) {
	              if (delegateResult === ContinueSentinel) continue;
	              return delegateResult;
	            }
	          }

	          if (context.method === "next") {
	            // Setting context._sent for legacy support of Babel's
	            // function.sent implementation.
	            context.sent = context._sent = context.arg;
	          } else if (context.method === "throw") {
	            if (state === GenStateSuspendedStart) {
	              state = GenStateCompleted;
	              throw context.arg;
	            }

	            context.dispatchException(context.arg);
	          } else if (context.method === "return") {
	            context.abrupt("return", context.arg);
	          }

	          state = GenStateExecuting;
	          var record = tryCatch(innerFn, self, context);

	          if (record.type === "normal") {
	            // If an exception is thrown from innerFn, we leave state ===
	            // GenStateExecuting and loop back for another invocation.
	            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

	            if (record.arg === ContinueSentinel) {
	              continue;
	            }

	            return {
	              value: record.arg,
	              done: context.done
	            };
	          } else if (record.type === "throw") {
	            state = GenStateCompleted; // Dispatch the exception by looping back around to the
	            // context.dispatchException(context.arg) call above.

	            context.method = "throw";
	            context.arg = record.arg;
	          }
	        }
	      };
	    } // Call delegate.iterator[context.method](context.arg) and handle the
	    // result, either by returning a { value, done } result from the
	    // delegate iterator, or by modifying context.method and context.arg,
	    // setting context.delegate to null, and returning the ContinueSentinel.


	    function maybeInvokeDelegate(delegate, context) {
	      var method = delegate.iterator[context.method];

	      if (method === undefined$1) {
	        // A .throw or .return when the delegate iterator has no .throw
	        // method always terminates the yield* loop.
	        context.delegate = null;

	        if (context.method === "throw") {
	          // Note: ["return"] must be used for ES3 parsing compatibility.
	          if (delegate.iterator["return"]) {
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            context.method = "return";
	            context.arg = undefined$1;
	            maybeInvokeDelegate(delegate, context);

	            if (context.method === "throw") {
	              // If maybeInvokeDelegate(context) changed context.method from
	              // "return" to "throw", let that override the TypeError below.
	              return ContinueSentinel;
	            }
	          }

	          context.method = "throw";
	          context.arg = new TypeError("The iterator does not provide a 'throw' method");
	        }

	        return ContinueSentinel;
	      }

	      var record = tryCatch(method, delegate.iterator, context.arg);

	      if (record.type === "throw") {
	        context.method = "throw";
	        context.arg = record.arg;
	        context.delegate = null;
	        return ContinueSentinel;
	      }

	      var info = record.arg;

	      if (!info) {
	        context.method = "throw";
	        context.arg = new TypeError("iterator result is not an object");
	        context.delegate = null;
	        return ContinueSentinel;
	      }

	      if (info.done) {
	        // Assign the result of the finished delegate to the temporary
	        // variable specified by delegate.resultName (see delegateYield).
	        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

	        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
	        // exception, let the outer generator proceed normally. If
	        // context.method was "next", forget context.arg since it has been
	        // "consumed" by the delegate iterator. If context.method was
	        // "return", allow the original .return call to continue in the
	        // outer generator.

	        if (context.method !== "return") {
	          context.method = "next";
	          context.arg = undefined$1;
	        }
	      } else {
	        // Re-yield the result returned by the delegate method.
	        return info;
	      } // The delegate iterator is finished, so forget it and continue with
	      // the outer generator.


	      context.delegate = null;
	      return ContinueSentinel;
	    } // Define Generator.prototype.{next,throw,return} in terms of the
	    // unified ._invoke helper method.


	    defineIteratorMethods(Gp);
	    define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
	    // @@iterator function is called on it. Some browsers' implementations of the
	    // iterator prototype chain incorrectly implement this, causing the Generator
	    // object to not be returned from this call. This ensures that doesn't happen.
	    // See https://github.com/facebook/regenerator/issues/274 for more details.

	    define(Gp, iteratorSymbol, function () {
	      return this;
	    });
	    define(Gp, "toString", function () {
	      return "[object Generator]";
	    });

	    function pushTryEntry(locs) {
	      var entry = {
	        tryLoc: locs[0]
	      };

	      if (1 in locs) {
	        entry.catchLoc = locs[1];
	      }

	      if (2 in locs) {
	        entry.finallyLoc = locs[2];
	        entry.afterLoc = locs[3];
	      }

	      this.tryEntries.push(entry);
	    }

	    function resetTryEntry(entry) {
	      var record = entry.completion || {};
	      record.type = "normal";
	      delete record.arg;
	      entry.completion = record;
	    }

	    function Context(tryLocsList) {
	      // The root entry object (effectively a try statement without a catch
	      // or a finally block) gives us a place to store values thrown from
	      // locations where there is no enclosing try statement.
	      this.tryEntries = [{
	        tryLoc: "root"
	      }];
	      tryLocsList.forEach(pushTryEntry, this);
	      this.reset(true);
	    }

	    exports.keys = function (object) {
	      var keys = [];

	      for (var key in object) {
	        keys.push(key);
	      }

	      keys.reverse(); // Rather than returning an object with a next method, we keep
	      // things simple and return the next function itself.

	      return function next() {
	        while (keys.length) {
	          var key = keys.pop();

	          if (key in object) {
	            next.value = key;
	            next.done = false;
	            return next;
	          }
	        } // To avoid creating an additional object, we just hang the .value
	        // and .done properties off the next function object itself. This
	        // also ensures that the minifier will not anonymize the function.


	        next.done = true;
	        return next;
	      };
	    };

	    function values(iterable) {
	      if (iterable) {
	        var iteratorMethod = iterable[iteratorSymbol];

	        if (iteratorMethod) {
	          return iteratorMethod.call(iterable);
	        }

	        if (typeof iterable.next === "function") {
	          return iterable;
	        }

	        if (!isNaN(iterable.length)) {
	          var i = -1,
	              next = function next() {
	            while (++i < iterable.length) {
	              if (hasOwn.call(iterable, i)) {
	                next.value = iterable[i];
	                next.done = false;
	                return next;
	              }
	            }

	            next.value = undefined$1;
	            next.done = true;
	            return next;
	          };

	          return next.next = next;
	        }
	      } // Return an iterator with no values.


	      return {
	        next: doneResult
	      };
	    }

	    exports.values = values;

	    function doneResult() {
	      return {
	        value: undefined$1,
	        done: true
	      };
	    }

	    Context.prototype = {
	      constructor: Context,
	      reset: function reset(skipTempReset) {
	        this.prev = 0;
	        this.next = 0; // Resetting context._sent for legacy support of Babel's
	        // function.sent implementation.

	        this.sent = this._sent = undefined$1;
	        this.done = false;
	        this.delegate = null;
	        this.method = "next";
	        this.arg = undefined$1;
	        this.tryEntries.forEach(resetTryEntry);

	        if (!skipTempReset) {
	          for (var name in this) {
	            // Not sure about the optimal order of these conditions:
	            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	              this[name] = undefined$1;
	            }
	          }
	        }
	      },
	      stop: function stop() {
	        this.done = true;
	        var rootEntry = this.tryEntries[0];
	        var rootRecord = rootEntry.completion;

	        if (rootRecord.type === "throw") {
	          throw rootRecord.arg;
	        }

	        return this.rval;
	      },
	      dispatchException: function dispatchException(exception) {
	        if (this.done) {
	          throw exception;
	        }

	        var context = this;

	        function handle(loc, caught) {
	          record.type = "throw";
	          record.arg = exception;
	          context.next = loc;

	          if (caught) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            context.method = "next";
	            context.arg = undefined$1;
	          }

	          return !!caught;
	        }

	        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	          var entry = this.tryEntries[i];
	          var record = entry.completion;

	          if (entry.tryLoc === "root") {
	            // Exception thrown outside of any try block that could handle
	            // it, so set the completion value of the entire function to
	            // throw the exception.
	            return handle("end");
	          }

	          if (entry.tryLoc <= this.prev) {
	            var hasCatch = hasOwn.call(entry, "catchLoc");
	            var hasFinally = hasOwn.call(entry, "finallyLoc");

	            if (hasCatch && hasFinally) {
	              if (this.prev < entry.catchLoc) {
	                return handle(entry.catchLoc, true);
	              } else if (this.prev < entry.finallyLoc) {
	                return handle(entry.finallyLoc);
	              }
	            } else if (hasCatch) {
	              if (this.prev < entry.catchLoc) {
	                return handle(entry.catchLoc, true);
	              }
	            } else if (hasFinally) {
	              if (this.prev < entry.finallyLoc) {
	                return handle(entry.finallyLoc);
	              }
	            } else {
	              throw new Error("try statement without catch or finally");
	            }
	          }
	        }
	      },
	      abrupt: function abrupt(type, arg) {
	        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	          var entry = this.tryEntries[i];

	          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	            var finallyEntry = entry;
	            break;
	          }
	        }

	        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	          // Ignore the finally entry if control is not jumping to a
	          // location outside the try/catch block.
	          finallyEntry = null;
	        }

	        var record = finallyEntry ? finallyEntry.completion : {};
	        record.type = type;
	        record.arg = arg;

	        if (finallyEntry) {
	          this.method = "next";
	          this.next = finallyEntry.finallyLoc;
	          return ContinueSentinel;
	        }

	        return this.complete(record);
	      },
	      complete: function complete(record, afterLoc) {
	        if (record.type === "throw") {
	          throw record.arg;
	        }

	        if (record.type === "break" || record.type === "continue") {
	          this.next = record.arg;
	        } else if (record.type === "return") {
	          this.rval = this.arg = record.arg;
	          this.method = "return";
	          this.next = "end";
	        } else if (record.type === "normal" && afterLoc) {
	          this.next = afterLoc;
	        }

	        return ContinueSentinel;
	      },
	      finish: function finish(finallyLoc) {
	        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	          var entry = this.tryEntries[i];

	          if (entry.finallyLoc === finallyLoc) {
	            this.complete(entry.completion, entry.afterLoc);
	            resetTryEntry(entry);
	            return ContinueSentinel;
	          }
	        }
	      },
	      "catch": function _catch(tryLoc) {
	        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	          var entry = this.tryEntries[i];

	          if (entry.tryLoc === tryLoc) {
	            var record = entry.completion;

	            if (record.type === "throw") {
	              var thrown = record.arg;
	              resetTryEntry(entry);
	            }

	            return thrown;
	          }
	        } // The context.catch method must only be called with a location
	        // argument that corresponds to a known catch block.


	        throw new Error("illegal catch attempt");
	      },
	      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	        this.delegate = {
	          iterator: values(iterable),
	          resultName: resultName,
	          nextLoc: nextLoc
	        };

	        if (this.method === "next") {
	          // Deliberately forget the last sent value so that we don't
	          // accidentally pass it on to the delegate.
	          this.arg = undefined$1;
	        }

	        return ContinueSentinel;
	      }
	    }; // Regardless of whether this script is executing as a CommonJS module
	    // or not, return the runtime object so that we can declare the variable
	    // regeneratorRuntime in the outer scope, which allows this module to be
	    // injected easily by `bin/regenerator --include-runtime script.js`.

	    return exports;
	  }( // If this script is executing as a CommonJS module, use module.exports
	  // as the regeneratorRuntime namespace. Otherwise create a new empty
	  // object. Either way, the resulting object will be used to initialize
	  // the regeneratorRuntime variable at the top of this file.
	  module.exports );

	  try {
	    regeneratorRuntime = runtime;
	  } catch (accidentalStrictMode) {
	    // This module should not be running in strict mode, so the above
	    // assignment should always work unless something is misconfigured. Just
	    // in case runtime.js accidentally runs in strict mode, in modern engines
	    // we can explicitly access globalThis. In older engines we can escape
	    // strict mode using a global Function call. This could conceivably fail
	    // if a Content Security Policy forbids using Function, but in that case
	    // the proper solution is to fix the accidental strict mode problem. If
	    // you've misconfigured your bundler to force strict mode and applied a
	    // CSP to forbid Function, and you're not willing to fix either of those
	    // problems, please detail your unique predicament in a GitHub issue.
	    if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
	      globalThis.regeneratorRuntime = runtime;
	    } else {
	      Function("r", "regeneratorRuntime = r")(runtime);
	    }
	  }
	})(runtime);

	var regenerator = runtime.exports;

	var wrapNativeSuper = {exports: {}};

	var isNativeFunction = {exports: {}};

	(function (module) {
	  function _isNativeFunction(fn) {
	    return Function.toString.call(fn).indexOf("[native code]") !== -1;
	  }

	  module.exports = _isNativeFunction;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	})(isNativeFunction);

	var construct = {exports: {}};

	var isNativeReflectConstruct = {exports: {}};

	(function (module) {
	  function _isNativeReflectConstruct() {
	    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	    if (Reflect.construct.sham) return false;
	    if (typeof Proxy === "function") return true;

	    try {
	      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }

	  module.exports = _isNativeReflectConstruct;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	})(isNativeReflectConstruct);

	(function (module) {
	  var setPrototypeOf$1 = setPrototypeOf.exports;
	  var isNativeReflectConstruct$1 = isNativeReflectConstruct.exports;

	  function _construct(Parent, args, Class) {
	    if (isNativeReflectConstruct$1()) {
	      module.exports = _construct = Reflect.construct;
	      module.exports["default"] = module.exports, module.exports.__esModule = true;
	    } else {
	      module.exports = _construct = function _construct(Parent, args, Class) {
	        var a = [null];
	        a.push.apply(a, args);
	        var Constructor = Function.bind.apply(Parent, a);
	        var instance = new Constructor();
	        if (Class) setPrototypeOf$1(instance, Class.prototype);
	        return instance;
	      };

	      module.exports["default"] = module.exports, module.exports.__esModule = true;
	    }

	    return _construct.apply(null, arguments);
	  }

	  module.exports = _construct;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	})(construct);

	(function (module) {
	  var getPrototypeOf$1 = getPrototypeOf.exports;
	  var setPrototypeOf$1 = setPrototypeOf.exports;
	  var isNativeFunction$1 = isNativeFunction.exports;
	  var construct$1 = construct.exports;

	  function _wrapNativeSuper(Class) {
	    var _cache = typeof Map === "function" ? new Map() : undefined;

	    module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
	      if (Class === null || !isNativeFunction$1(Class)) return Class;

	      if (typeof Class !== "function") {
	        throw new TypeError("Super expression must either be null or a function");
	      }

	      if (typeof _cache !== "undefined") {
	        if (_cache.has(Class)) return _cache.get(Class);

	        _cache.set(Class, Wrapper);
	      }

	      function Wrapper() {
	        return construct$1(Class, arguments, getPrototypeOf$1(this).constructor);
	      }

	      Wrapper.prototype = Object.create(Class.prototype, {
	        constructor: {
	          value: Wrapper,
	          enumerable: false,
	          writable: true,
	          configurable: true
	        }
	      });
	      return setPrototypeOf$1(Wrapper, Class);
	    };

	    module.exports["default"] = module.exports, module.exports.__esModule = true;
	    return _wrapNativeSuper(Class);
	  }

	  module.exports = _wrapNativeSuper;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	})(wrapNativeSuper);

	var _wrapNativeSuper = /*@__PURE__*/getDefaultExportFromCjs(wrapNativeSuper.exports);

	var toConsumableArray = {exports: {}};

	var arrayWithoutHoles = {exports: {}};

	(function (module) {
	  var arrayLikeToArray$1 = arrayLikeToArray.exports;

	  function _arrayWithoutHoles(arr) {
	    if (Array.isArray(arr)) return arrayLikeToArray$1(arr);
	  }

	  module.exports = _arrayWithoutHoles;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	})(arrayWithoutHoles);

	var iterableToArray = {exports: {}};

	(function (module) {
	  function _iterableToArray(iter) {
	    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
	  }

	  module.exports = _iterableToArray;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	})(iterableToArray);

	var nonIterableSpread = {exports: {}};

	(function (module) {
	  function _nonIterableSpread() {
	    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }

	  module.exports = _nonIterableSpread;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	})(nonIterableSpread);

	(function (module) {
	  var arrayWithoutHoles$1 = arrayWithoutHoles.exports;
	  var iterableToArray$1 = iterableToArray.exports;
	  var unsupportedIterableToArray$1 = unsupportedIterableToArray.exports;
	  var nonIterableSpread$1 = nonIterableSpread.exports;

	  function _toConsumableArray(arr) {
	    return arrayWithoutHoles$1(arr) || iterableToArray$1(arr) || unsupportedIterableToArray$1(arr) || nonIterableSpread$1();
	  }

	  module.exports = _toConsumableArray;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	})(toConsumableArray);

	var _toConsumableArray = /*@__PURE__*/getDefaultExportFromCjs(toConsumableArray.exports);

	var get = {exports: {}};

	var superPropBase = {exports: {}};

	(function (module) {
	  var getPrototypeOf$1 = getPrototypeOf.exports;

	  function _superPropBase(object, property) {
	    while (!Object.prototype.hasOwnProperty.call(object, property)) {
	      object = getPrototypeOf$1(object);
	      if (object === null) break;
	    }

	    return object;
	  }

	  module.exports = _superPropBase;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	})(superPropBase);

	(function (module) {
	  var superPropBase$1 = superPropBase.exports;

	  function _get(target, property, receiver) {
	    if (typeof Reflect !== "undefined" && Reflect.get) {
	      module.exports = _get = Reflect.get;
	      module.exports["default"] = module.exports, module.exports.__esModule = true;
	    } else {
	      module.exports = _get = function _get(target, property, receiver) {
	        var base = superPropBase$1(target, property);
	        if (!base) return;
	        var desc = Object.getOwnPropertyDescriptor(base, property);

	        if (desc.get) {
	          return desc.get.call(receiver);
	        }

	        return desc.value;
	      };

	      module.exports["default"] = module.exports, module.exports.__esModule = true;
	    }

	    return _get(target, property, receiver || target);
	  }

	  module.exports = _get;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	})(get);

	function _createSuper$n(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$n(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$n() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

	function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

	function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

	function noop() {}

	function assign(tar, src) {
	  // @ts-ignore
	  for (var k in src) {
	    tar[k] = src[k];
	  }

	  return tar;
	}

	function run(fn) {
	  return fn();
	}

	function blank_object() {
	  return Object.create(null);
	}

	function run_all(fns) {
	  fns.forEach(run);
	}

	function is_function(thing) {
	  return typeof thing === 'function';
	}

	function safe_not_equal(a, b) {
	  return a != a ? b == b : a !== b || a && _typeof(a) === 'object' || typeof a === 'function';
	}

	var src_url_equal_anchor;

	function src_url_equal(element_src, url) {
	  if (!src_url_equal_anchor) {
	    src_url_equal_anchor = document.createElement('a');
	  }

	  src_url_equal_anchor.href = url;
	  return element_src === src_url_equal_anchor.href;
	}

	function is_empty(obj) {
	  return Object.keys(obj).length === 0;
	}

	function subscribe(store) {
	  if (store == null) {
	    return noop;
	  }

	  for (var _len = arguments.length, callbacks = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    callbacks[_key - 1] = arguments[_key];
	  }

	  var unsub = store.subscribe.apply(store, callbacks);
	  return unsub.unsubscribe ? function () {
	    return unsub.unsubscribe();
	  } : unsub;
	}

	function get_store_value(store) {
	  var value;
	  subscribe(store, function (_) {
	    return value = _;
	  })();
	  return value;
	}

	function component_subscribe(component, store, callback) {
	  component.$$.on_destroy.push(subscribe(store, callback));
	}

	function create_slot(definition, ctx, $$scope, fn) {
	  if (definition) {
	    var slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
	    return definition[0](slot_ctx);
	  }
	}

	function get_slot_context(definition, ctx, $$scope, fn) {
	  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
	}

	function get_slot_changes(definition, $$scope, dirty, fn) {
	  if (definition[2] && fn) {
	    var lets = definition[2](fn(dirty));

	    if ($$scope.dirty === undefined) {
	      return lets;
	    }

	    if (_typeof(lets) === 'object') {
	      var merged = [];
	      var len = Math.max($$scope.dirty.length, lets.length);

	      for (var i = 0; i < len; i += 1) {
	        merged[i] = $$scope.dirty[i] | lets[i];
	      }

	      return merged;
	    }

	    return $$scope.dirty | lets;
	  }

	  return $$scope.dirty;
	}

	function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
	  if (slot_changes) {
	    var slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
	    slot.p(slot_context, slot_changes);
	  }
	}

	function get_all_dirty_from_scope($$scope) {
	  if ($$scope.ctx.length > 32) {
	    var dirty = [];
	    var length = $$scope.ctx.length / 32;

	    for (var i = 0; i < length; i++) {
	      dirty[i] = -1;
	    }

	    return dirty;
	  }

	  return -1;
	}

	function exclude_internal_props(props) {
	  var result = {};

	  for (var k in props) {
	    if (k[0] !== '$') result[k] = props[k];
	  }

	  return result;
	}

	function compute_rest_props(props, keys) {
	  var rest = {};
	  keys = new Set(keys);

	  for (var k in props) {
	    if (!keys.has(k) && k[0] !== '$') rest[k] = props[k];
	  }

	  return rest;
	}

	function null_to_empty(value) {
	  return value == null ? '' : value;
	}

	function append(target, node) {
	  target.appendChild(node);
	}

	function insert(target, node, anchor) {
	  target.insertBefore(node, anchor || null);
	}

	function detach(node) {
	  node.parentNode.removeChild(node);
	}

	function destroy_each(iterations, detaching) {
	  for (var i = 0; i < iterations.length; i += 1) {
	    if (iterations[i]) iterations[i].d(detaching);
	  }
	}

	function element(name) {
	  return document.createElement(name);
	}

	function svg_element(name) {
	  return document.createElementNS('http://www.w3.org/2000/svg', name);
	}

	function text(data) {
	  return document.createTextNode(data);
	}

	function space() {
	  return text(' ');
	}

	function empty() {
	  return text('');
	}

	function listen(node, event, handler, options) {
	  node.addEventListener(event, handler, options);
	  return function () {
	    return node.removeEventListener(event, handler, options);
	  };
	}

	function prevent_default(fn) {
	  return function (event) {
	    event.preventDefault(); // @ts-ignore

	    return fn.call(this, event);
	  };
	}

	function stop_propagation(fn) {
	  return function (event) {
	    event.stopPropagation(); // @ts-ignore

	    return fn.call(this, event);
	  };
	}

	function attr(node, attribute, value) {
	  if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
	}

	function children(element) {
	  return Array.from(element.childNodes);
	}

	function set_data(text, data) {
	  data = '' + data;
	  if (text.wholeText !== data) text.data = data;
	}

	function set_style(node, key, value, important) {
	  node.style.setProperty(key, value, important ? 'important' : '');
	}
	// so we cache the result instead


	var crossorigin;

	function is_crossorigin() {
	  if (crossorigin === undefined) {
	    crossorigin = false;

	    try {
	      if (typeof window !== 'undefined' && window.parent) {
	        void window.parent.document;
	      }
	    } catch (error) {
	      crossorigin = true;
	    }
	  }

	  return crossorigin;
	}

	function add_resize_listener(node, fn) {
	  var computed_style = getComputedStyle(node);

	  if (computed_style.position === 'static') {
	    node.style.position = 'relative';
	  }

	  var iframe = element('iframe');
	  iframe.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; ' + 'overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;');
	  iframe.setAttribute('aria-hidden', 'true');
	  iframe.tabIndex = -1;
	  var crossorigin = is_crossorigin();
	  var unsubscribe;

	  if (crossorigin) {
	    iframe.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>";
	    unsubscribe = listen(window, 'message', function (event) {
	      if (event.source === iframe.contentWindow) fn();
	    });
	  } else {
	    iframe.src = 'about:blank';

	    iframe.onload = function () {
	      unsubscribe = listen(iframe.contentWindow, 'resize', fn);
	    };
	  }

	  append(node, iframe);
	  return function () {
	    if (crossorigin) {
	      unsubscribe();
	    } else if (unsubscribe && iframe.contentWindow) {
	      unsubscribe();
	    }

	    detach(iframe);
	  };
	}

	function toggle_class(element, name, toggle) {
	  element.classList[toggle ? 'add' : 'remove'](name);
	}

	function custom_event(type, detail) {
	  var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	  var e = document.createEvent('CustomEvent');
	  e.initCustomEvent(type, bubbles, false, detail);
	  return e;
	}

	function attribute_to_object(attributes) {
	  var result = {};

	  var _iterator2 = _createForOfIteratorHelper$1(attributes),
	      _step2;

	  try {
	    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
	      var attribute = _step2.value;
	      result[attribute.name] = attribute.value;
	    }
	  } catch (err) {
	    _iterator2.e(err);
	  } finally {
	    _iterator2.f();
	  }

	  return result;
	}

	var current_component;

	function set_current_component(component) {
	  current_component = component;
	}

	function get_current_component() {
	  if (!current_component) throw new Error('Function called outside component initialization');
	  return current_component;
	}

	function onMount(fn) {
	  get_current_component().$$.on_mount.push(fn);
	}

	function onDestroy(fn) {
	  get_current_component().$$.on_destroy.push(fn);
	}

	function createEventDispatcher() {
	  var component = get_current_component();
	  return function (type, detail) {
	    var callbacks = component.$$.callbacks[type];

	    if (callbacks) {
	      // TODO are there situations where events could be dispatched
	      // in a server (non-DOM) environment?
	      var event = custom_event(type, detail);
	      callbacks.slice().forEach(function (fn) {
	        fn.call(component, event);
	      });
	    }
	  };
	}

	function setContext(key, context) {
	  get_current_component().$$.context.set(key, context);
	}

	function getContext(key) {
	  return get_current_component().$$.context.get(key);
	}
	// shorthand events, or if we want to implement
	// a real bubbling mechanism


	function bubble(component, event) {
	  var _this2 = this;

	  var callbacks = component.$$.callbacks[event.type];

	  if (callbacks) {
	    // @ts-ignore
	    callbacks.slice().forEach(function (fn) {
	      return fn.call(_this2, event);
	    });
	  }
	}

	var dirty_components = [];
	var binding_callbacks = [];
	var render_callbacks = [];
	var flush_callbacks = [];
	var resolved_promise = Promise.resolve();
	var update_scheduled = false;

	function schedule_update() {
	  if (!update_scheduled) {
	    update_scheduled = true;
	    resolved_promise.then(flush);
	  }
	}

	function tick() {
	  schedule_update();
	  return resolved_promise;
	}

	function add_render_callback(fn) {
	  render_callbacks.push(fn);
	}

	function add_flush_callback(fn) {
	  flush_callbacks.push(fn);
	}

	var flushing = false;
	var seen_callbacks = new Set();

	function flush() {
	  if (flushing) return;
	  flushing = true;

	  do {
	    // first, call beforeUpdate functions
	    // and update components
	    for (var i = 0; i < dirty_components.length; i += 1) {
	      var component = dirty_components[i];
	      set_current_component(component);
	      update(component.$$);
	    }

	    set_current_component(null);
	    dirty_components.length = 0;

	    while (binding_callbacks.length) {
	      binding_callbacks.pop()();
	    } // then, once components are updated, call
	    // afterUpdate functions. This may cause
	    // subsequent updates...


	    for (var _i4 = 0; _i4 < render_callbacks.length; _i4 += 1) {
	      var callback = render_callbacks[_i4];

	      if (!seen_callbacks.has(callback)) {
	        // ...so guard against infinite loops
	        seen_callbacks.add(callback);
	        callback();
	      }
	    }

	    render_callbacks.length = 0;
	  } while (dirty_components.length);

	  while (flush_callbacks.length) {
	    flush_callbacks.pop()();
	  }

	  update_scheduled = false;
	  flushing = false;
	  seen_callbacks.clear();
	}

	function update($$) {
	  if ($$.fragment !== null) {
	    $$.update();
	    run_all($$.before_update);
	    var dirty = $$.dirty;
	    $$.dirty = [-1];
	    $$.fragment && $$.fragment.p($$.ctx, dirty);
	    $$.after_update.forEach(add_render_callback);
	  }
	}

	var outroing = new Set();
	var outros;

	function group_outros() {
	  outros = {
	    r: 0,
	    c: [],
	    p: outros // parent group

	  };
	}

	function check_outros() {
	  if (!outros.r) {
	    run_all(outros.c);
	  }

	  outros = outros.p;
	}

	function transition_in(block, local) {
	  if (block && block.i) {
	    outroing.delete(block);
	    block.i(local);
	  }
	}

	function transition_out(block, local, detach, callback) {
	  if (block && block.o) {
	    if (outroing.has(block)) return;
	    outroing.add(block);
	    outros.c.push(function () {
	      outroing.delete(block);

	      if (callback) {
	        if (detach) block.d(1);
	        callback();
	      }
	    });
	    block.o(local);
	  }
	}

	var globals = typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : global;

	function outro_and_destroy_block(block, lookup) {
	  transition_out(block, 1, 1, function () {
	    lookup.delete(block.key);
	  });
	}

	function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
	  var o = old_blocks.length;
	  var n = list.length;
	  var i = o;
	  var old_indexes = {};

	  while (i--) {
	    old_indexes[old_blocks[i].key] = i;
	  }

	  var new_blocks = [];
	  var new_lookup = new Map();
	  var deltas = new Map();
	  i = n;

	  while (i--) {
	    var child_ctx = get_context(ctx, list, i);
	    var key = get_key(child_ctx);
	    var block = lookup.get(key);

	    if (!block) {
	      block = create_each_block(key, child_ctx);
	      block.c();
	    } else if (dynamic) {
	      block.p(child_ctx, dirty);
	    }

	    new_lookup.set(key, new_blocks[i] = block);
	    if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
	  }

	  var will_move = new Set();
	  var did_move = new Set();

	  function insert(block) {
	    transition_in(block, 1);
	    block.m(node, next);
	    lookup.set(block.key, block);
	    next = block.first;
	    n--;
	  }

	  while (o && n) {
	    var new_block = new_blocks[n - 1];
	    var old_block = old_blocks[o - 1];
	    var new_key = new_block.key;
	    var old_key = old_block.key;

	    if (new_block === old_block) {
	      // do nothing
	      next = new_block.first;
	      o--;
	      n--;
	    } else if (!new_lookup.has(old_key)) {
	      // remove old block
	      destroy(old_block, lookup);
	      o--;
	    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
	      insert(new_block);
	    } else if (did_move.has(old_key)) {
	      o--;
	    } else if (deltas.get(new_key) > deltas.get(old_key)) {
	      did_move.add(new_key);
	      insert(new_block);
	    } else {
	      will_move.add(old_key);
	      o--;
	    }
	  }

	  while (o--) {
	    var _old_block = old_blocks[o];
	    if (!new_lookup.has(_old_block.key)) destroy(_old_block, lookup);
	  }

	  while (n) {
	    insert(new_blocks[n - 1]);
	  }

	  return new_blocks;
	}

	function get_spread_update(levels, updates) {
	  var update = {};
	  var to_null_out = {};
	  var accounted_for = {
	    $$scope: 1
	  };
	  var i = levels.length;

	  while (i--) {
	    var o = levels[i];
	    var n = updates[i];

	    if (n) {
	      for (var key in o) {
	        if (!(key in n)) to_null_out[key] = 1;
	      }

	      for (var _key3 in n) {
	        if (!accounted_for[_key3]) {
	          update[_key3] = n[_key3];
	          accounted_for[_key3] = 1;
	        }
	      }

	      levels[i] = n;
	    } else {
	      for (var _key4 in o) {
	        accounted_for[_key4] = 1;
	      }
	    }
	  }

	  for (var _key5 in to_null_out) {
	    if (!(_key5 in update)) update[_key5] = undefined;
	  }

	  return update;
	}

	function get_spread_object(spread_props) {
	  return _typeof(spread_props) === 'object' && spread_props !== null ? spread_props : {};
	} // source: https://html.spec.whatwg.org/multipage/indices.html

	function bind(component, name, callback) {
	  var index = component.$$.props[name];

	  if (index !== undefined) {
	    component.$$.bound[index] = callback;
	    callback(component.$$.ctx[index]);
	  }
	}

	function create_component(block) {
	  block && block.c();
	}

	function mount_component(component, target, anchor, customElement) {
	  var _component$$$ = component.$$,
	      fragment = _component$$$.fragment,
	      on_mount = _component$$$.on_mount,
	      on_destroy = _component$$$.on_destroy,
	      after_update = _component$$$.after_update;
	  fragment && fragment.m(target, anchor);

	  if (!customElement) {
	    // onMount happens before the initial afterUpdate
	    add_render_callback(function () {
	      var new_on_destroy = on_mount.map(run).filter(is_function);

	      if (on_destroy) {
	        on_destroy.push.apply(on_destroy, _toConsumableArray(new_on_destroy));
	      } else {
	        // Edge case - component was destroyed immediately,
	        // most likely as a result of a binding initialising
	        run_all(new_on_destroy);
	      }

	      component.$$.on_mount = [];
	    });
	  }

	  after_update.forEach(add_render_callback);
	}

	function destroy_component(component, detaching) {
	  var $$ = component.$$;

	  if ($$.fragment !== null) {
	    run_all($$.on_destroy);
	    $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
	    // preserve final state?)

	    $$.on_destroy = $$.fragment = null;
	    $$.ctx = [];
	  }
	}

	function make_dirty(component, i) {
	  if (component.$$.dirty[0] === -1) {
	    dirty_components.push(component);
	    schedule_update();
	    component.$$.dirty.fill(0);
	  }

	  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
	}

	function init(component, options, instance, create_fragment, not_equal, props, append_styles) {
	  var dirty = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [-1];
	  var parent_component = current_component;
	  set_current_component(component);
	  var $$ = component.$$ = {
	    fragment: null,
	    ctx: null,
	    // state
	    props: props,
	    update: noop,
	    not_equal: not_equal,
	    bound: blank_object(),
	    // lifecycle
	    on_mount: [],
	    on_destroy: [],
	    on_disconnect: [],
	    before_update: [],
	    after_update: [],
	    context: new Map(parent_component ? parent_component.$$.context : options.context || []),
	    // everything else
	    callbacks: blank_object(),
	    dirty: dirty,
	    skip_bound: false,
	    root: options.target || parent_component.$$.root
	  };
	  append_styles && append_styles($$.root);
	  var ready = false;
	  $$.ctx = instance ? instance(component, options.props || {}, function (i, ret) {
	    var value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;

	    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
	      if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
	      if (ready) make_dirty(component, i);
	    }

	    return ret;
	  }) : [];
	  $$.update();
	  ready = true;
	  run_all($$.before_update); // `false` as a special case of no DOM component

	  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

	  if (options.target) {
	    if (options.hydrate) {
	      var nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

	      $$.fragment && $$.fragment.l(nodes);
	      nodes.forEach(detach);
	    } else {
	      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	      $$.fragment && $$.fragment.c();
	    }

	    if (options.intro) transition_in(component.$$.fragment);
	    mount_component(component, options.target, options.anchor, options.customElement);
	    flush();
	  }

	  set_current_component(parent_component);
	}

	var SvelteElement;

	if (typeof HTMLElement === 'function') {
	  SvelteElement = /*#__PURE__*/function (_HTMLElement) {
	    _inherits(SvelteElement, _HTMLElement);

	    var _super2 = _createSuper$n(SvelteElement);

	    function SvelteElement() {
	      var _this3;

	      _classCallCheck(this, SvelteElement);

	      _this3 = _super2.call(this);

	      _this3.attachShadow({
	        mode: 'open'
	      });

	      return _this3;
	    }

	    _createClass(SvelteElement, [{
	      key: "connectedCallback",
	      value: function connectedCallback() {
	        var on_mount = this.$$.on_mount;
	        this.$$.on_disconnect = on_mount.map(run).filter(is_function); // @ts-ignore todo: improve typings

	        for (var key in this.$$.slotted) {
	          // @ts-ignore todo: improve typings
	          this.appendChild(this.$$.slotted[key]);
	        }
	      }
	    }, {
	      key: "attributeChangedCallback",
	      value: function attributeChangedCallback(attr, _oldValue, newValue) {
	        this[attr] = newValue;
	      }
	    }, {
	      key: "disconnectedCallback",
	      value: function disconnectedCallback() {
	        run_all(this.$$.on_disconnect);
	      }
	    }, {
	      key: "$destroy",
	      value: function $destroy() {
	        destroy_component(this, 1);
	        this.$destroy = noop;
	      }
	    }, {
	      key: "$on",
	      value: function $on(type, callback) {
	        // TODO should this delegate to addEventListener?
	        var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
	        callbacks.push(callback);
	        return function () {
	          var index = callbacks.indexOf(callback);
	          if (index !== -1) callbacks.splice(index, 1);
	        };
	      }
	    }, {
	      key: "$set",
	      value: function $set($$props) {
	        if (this.$$set && !is_empty($$props)) {
	          this.$$.skip_bound = true;
	          this.$$set($$props);
	          this.$$.skip_bound = false;
	        }
	      }
	    }]);

	    return SvelteElement;
	  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
	}
	/**
	 * Base class for Svelte components. Used when dev=false.
	 */


	var SvelteComponent = /*#__PURE__*/function () {
	  function SvelteComponent() {
	    _classCallCheck(this, SvelteComponent);
	  }

	  _createClass(SvelteComponent, [{
	    key: "$destroy",
	    value: function $destroy() {
	      destroy_component(this, 1);
	      this.$destroy = noop;
	    }
	  }, {
	    key: "$on",
	    value: function $on(type, callback) {
	      var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
	      callbacks.push(callback);
	      return function () {
	        var index = callbacks.indexOf(callback);
	        if (index !== -1) callbacks.splice(index, 1);
	      };
	    }
	  }, {
	    key: "$set",
	    value: function $set($$props) {
	      if (this.$$set && !is_empty($$props)) {
	        this.$$.skip_bound = true;
	        this.$$set($$props);
	        this.$$.skip_bound = false;
	      }
	    }
	  }]);

	  return SvelteComponent;
	}();

	const breakpoints = {
	    "bp-xs": 0,
	    "bp-sm": 500,
	    "bp-md": 800,
	    "bp-lg": 1200,
	    "bp-xl": 1600,
	};
	const getBpClasses = (clientWidth) => {
	    return Object.entries(breakpoints)
	        .reduce((list, [key, value]) => {
	        const match = clientWidth > value ? key : "";
	        return [...list, match];
	    }, [])
	        .join(" ");
	};

	var defineProperty = {exports: {}};

	(function (module) {
	  function _defineProperty(obj, key, value) {
	    if (key in obj) {
	      Object.defineProperty(obj, key, {
	        value: value,
	        enumerable: true,
	        configurable: true,
	        writable: true
	      });
	    } else {
	      obj[key] = value;
	    }

	    return obj;
	  }

	  module.exports = _defineProperty;
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	})(defineProperty);

	var _defineProperty = /*@__PURE__*/getDefaultExportFromCjs(defineProperty.exports);

	/*
	 * Adapted from https://github.com/reach/router/blob/b60e6dd781d5d3a4bdaaf4de665649c0f6a7e78d/src/lib/utils.js
	 *
	 * https://github.com/reach/router/blob/master/LICENSE
	 */
	var isUndefined = function isUndefined(value) {
	  return typeof value === "undefined";
	};
	var isFunction = function isFunction(value) {
	  return typeof value === "function";
	};
	var isNumber = function isNumber(value) {
	  return typeof value === "number";
	};
	function createCounter() {
	  var i = 0;
	  /**
	   * Returns an id and increments the internal state
	   * @returns {number}
	   */

	  return function () {
	    return i++;
	  };
	}
	/**
	 * Create a globally unique id
	 *
	 * @returns {string} An id
	 */

	function createGlobalId() {
	  return Math.random().toString(36).substring(2);
	}
	var isSSR = typeof window === "undefined";
	function addListener(target, type, handler) {
	  target.addEventListener(type, handler);
	  return function () {
	    return target.removeEventListener(type, handler);
	  };
	}

	function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

	function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
	var subscriber_queue = [];
	/**
	 * Creates a `Readable` store that allows reading by subscription.
	 * @param value initial value
	 * @param {StartStopNotifier}start start and stop notifications for subscriptions
	 */

	function readable(value, start) {
	  return {
	    subscribe: writable(value, start).subscribe
	  };
	}
	/**
	 * Create a `Writable` store that allows both updating and reading by subscription.
	 * @param {*=}value initial value
	 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
	 */


	function writable(value) {
	  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
	  var stop;
	  var subscribers = new Set();

	  function set(new_value) {
	    if (safe_not_equal(value, new_value)) {
	      value = new_value;

	      if (stop) {
	        // store is ready
	        var run_queue = !subscriber_queue.length;

	        var _iterator = _createForOfIteratorHelper(subscribers),
	            _step;

	        try {
	          for (_iterator.s(); !(_step = _iterator.n()).done;) {
	            var subscriber = _step.value;
	            subscriber[1]();
	            subscriber_queue.push(subscriber, value);
	          }
	        } catch (err) {
	          _iterator.e(err);
	        } finally {
	          _iterator.f();
	        }

	        if (run_queue) {
	          for (var i = 0; i < subscriber_queue.length; i += 2) {
	            subscriber_queue[i][0](subscriber_queue[i + 1]);
	          }

	          subscriber_queue.length = 0;
	        }
	      }
	    }
	  }

	  function update(fn) {
	    set(fn(value));
	  }

	  function subscribe(run) {
	    var invalidate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
	    var subscriber = [run, invalidate];
	    subscribers.add(subscriber);

	    if (subscribers.size === 1) {
	      stop = start(set) || noop;
	    }

	    run(value);
	    return function () {
	      subscribers.delete(subscriber);

	      if (subscribers.size === 0) {
	        stop();
	        stop = null;
	      }
	    };
	  }

	  return {
	    set: set,
	    update: update,
	    subscribe: subscribe
	  };
	}

	function derived(stores, fn, initial_value) {
	  var single = !Array.isArray(stores);
	  var stores_array = single ? [stores] : stores;
	  var auto = fn.length < 2;
	  return readable(initial_value, function (set) {
	    var inited = false;
	    var values = [];
	    var pending = 0;
	    var cleanup = noop;

	    var sync = function sync() {
	      if (pending) {
	        return;
	      }

	      cleanup();
	      var result = fn(single ? values[0] : values, set);

	      if (auto) {
	        set(result);
	      } else {
	        cleanup = is_function(result) ? result : noop;
	      }
	    };

	    var unsubscribers = stores_array.map(function (store, i) {
	      return subscribe(store, function (value) {
	        values[i] = value;
	        pending &= ~(1 << i);

	        if (inited) {
	          sync();
	        }
	      }, function () {
	        pending |= 1 << i;
	      });
	    });
	    inited = true;
	    sync();
	    return function stop() {
	      run_all(unsubscribers);
	      cleanup();
	    };
	  });
	}

	/*
	 * Adapted from https://github.com/EmilTholin/svelte-routing
	 *
	 * https://github.com/EmilTholin/svelte-routing/blob/master/LICENSE
	 */
	var createKey = function createKey(ctxName) {
	  return "@@svnav-ctx__".concat(ctxName);
	}; // Use strings instead of objects, so different versions of
	// svelte-navigator can potentially still work together


	var LOCATION = createKey("LOCATION");
	var ROUTER = createKey("ROUTER");
	var ROUTE = createKey("ROUTE");
	var ROUTE_PARAMS = createKey("ROUTE_PARAMS");
	var FOCUS_ELEM = createKey("FOCUS_ELEM");

	var paramRegex = /^:(.+)/;
	/**
	 * Check if `string` starts with `search`
	 * @param {string} string
	 * @param {string} search
	 * @return {boolean}
	 */

	var startsWith = function startsWith(string, search) {
	  return string.substr(0, search.length) === search;
	};
	/**
	 * Check if `segment` is a root segment
	 * @param {string} segment
	 * @return {boolean}
	 */

	var isRootSegment = function isRootSegment(segment) {
	  return segment === "";
	};
	/**
	 * Check if `segment` is a dynamic segment
	 * @param {string} segment
	 * @return {boolean}
	 */

	var isDynamic = function isDynamic(segment) {
	  return paramRegex.test(segment);
	};
	/**
	 * Check if `segment` is a splat
	 * @param {string} segment
	 * @return {boolean}
	 */

	var isSplat = function isSplat(segment) {
	  return segment[0] === "*";
	};
	/**
	 * Strip potention splat and splatname of the end of a path
	 * @param {string} str
	 * @return {string}
	 */

	var stripSplat = function stripSplat(str) {
	  return str.replace(/\*.*$/, "");
	};
	/**
	 * Strip `str` of potential start and end `/`
	 * @param {string} str
	 * @return {string}
	 */

	var stripSlashes = function stripSlashes(str) {
	  return str.replace(/(^\/+|\/+$)/g, "");
	};
	/**
	 * Split up the URI into segments delimited by `/`
	 * @param {string} uri
	 * @return {string[]}
	 */

	function segmentize(uri) {
	  var filterFalsy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	  var segments = stripSlashes(uri).split("/");
	  return filterFalsy ? segments.filter(Boolean) : segments;
	}
	/**
	 * Add the query to the pathname if a query is given
	 * @param {string} pathname
	 * @param {string} [query]
	 * @return {string}
	 */

	var addQuery = function addQuery(pathname, query) {
	  return pathname + (query ? "?".concat(query) : "");
	};
	/**
	 * Normalizes a basepath
	 *
	 * @param {string} path
	 * @returns {string}
	 *
	 * @example
	 * normalizePath("base/path/") // -> "/base/path"
	 */

	var normalizePath = function normalizePath(path) {
	  return "/".concat(stripSlashes(path));
	};
	/**
	 * Joins and normalizes multiple path fragments
	 *
	 * @param {...string} pathFragments
	 * @returns {string}
	 */

	function join() {
	  var joinFragment = function joinFragment(fragment) {
	    return segmentize(fragment, true).join("/");
	  };

	  for (var _len = arguments.length, pathFragments = new Array(_len), _key = 0; _key < _len; _key++) {
	    pathFragments[_key] = arguments[_key];
	  }

	  var joinedSegments = pathFragments.map(joinFragment).join("/");
	  return normalizePath(joinedSegments);
	}

	var _labels;
	// by using `originId || <fallback>`

	var LINK_ID = 1;
	var ROUTE_ID = 2;
	var ROUTER_ID = 3;
	var USE_FOCUS_ID = 4;
	var USE_LOCATION_ID = 5;
	var USE_MATCH_ID = 6;
	var USE_NAVIGATE_ID = 7;
	var USE_PARAMS_ID = 8;
	var USE_RESOLVABLE_ID = 9;
	var USE_RESOLVE_ID = 10;
	var NAVIGATE_ID = 11;
	var labels = (_labels = {}, _defineProperty(_labels, LINK_ID, "Link"), _defineProperty(_labels, ROUTE_ID, "Route"), _defineProperty(_labels, ROUTER_ID, "Router"), _defineProperty(_labels, USE_FOCUS_ID, "useFocus"), _defineProperty(_labels, USE_LOCATION_ID, "useLocation"), _defineProperty(_labels, USE_MATCH_ID, "useMatch"), _defineProperty(_labels, USE_NAVIGATE_ID, "useNavigate"), _defineProperty(_labels, USE_PARAMS_ID, "useParams"), _defineProperty(_labels, USE_RESOLVABLE_ID, "useResolvable"), _defineProperty(_labels, USE_RESOLVE_ID, "useResolve"), _defineProperty(_labels, NAVIGATE_ID, "navigate"), _labels);
	var createLabel = function createLabel(labelId) {
	  return labels[labelId];
	};
	function createIdentifier(labelId, props) {
	  var attr;

	  if (labelId === ROUTE_ID) {
	    attr = props.path ? "path=\"".concat(props.path, "\"") : "default";
	  } else if (labelId === LINK_ID) {
	    attr = "to=\"".concat(props.to, "\"");
	  } else if (labelId === ROUTER_ID) {
	    attr = "basepath=\"".concat(props.basepath || "", "\"");
	  }

	  return "<".concat(createLabel(labelId), " ").concat(attr || "", " />");
	}
	function createMessage(labelId, message, props, originId) {
	  var origin = props && createIdentifier(originId || labelId, props);
	  var originMsg = origin ? "\n\nOccurred in: ".concat(origin) : "";
	  var label = createLabel(labelId);
	  var msg = isFunction(message) ? message(label) : message;
	  return "<".concat(label, "> ").concat(msg).concat(originMsg);
	}
	var createMessageHandler = function createMessageHandler(handler) {
	  return function () {
	    return handler(createMessage.apply(void 0, arguments));
	  };
	};
	var fail = createMessageHandler(function (message) {
	  throw new Error(message);
	}); // eslint-disable-next-line no-console

	var warn = createMessageHandler(console.warn);

	function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
	var SEGMENT_POINTS = 4;
	var STATIC_POINTS = 3;
	var DYNAMIC_POINTS = 2;
	var SPLAT_PENALTY = 1;
	var ROOT_POINTS = 1;
	/**
	 * Score a route depending on how its individual segments look
	 * @param {object} route
	 * @param {number} index
	 * @return {object}
	 */

	function rankRoute(route, index) {
	  var score = route.default ? 0 : segmentize(route.fullPath).reduce(function (acc, segment) {
	    var nextScore = acc;
	    nextScore += SEGMENT_POINTS;

	    if (isRootSegment(segment)) {
	      nextScore += ROOT_POINTS;
	    } else if (isDynamic(segment)) {
	      nextScore += DYNAMIC_POINTS;
	    } else if (isSplat(segment)) {
	      nextScore -= SEGMENT_POINTS + SPLAT_PENALTY;
	    } else {
	      nextScore += STATIC_POINTS;
	    }

	    return nextScore;
	  }, 0);
	  return {
	    route: route,
	    score: score,
	    index: index
	  };
	}
	/**
	 * Give a score to all routes and sort them on that
	 * @param {object[]} routes
	 * @return {object[]}
	 */

	function rankRoutes(routes) {
	  return routes.map(rankRoute) // If two routes have the exact same score, we go by index instead
	  .sort(function (a, b) {
	    if (a.score < b.score) {
	      return 1;
	    }

	    if (a.score > b.score) {
	      return -1;
	    }

	    return a.index - b.index;
	  });
	}
	/**
	 * Ranks and picks the best route to match. Each segment gets the highest
	 * amount of points, then the type of segment gets an additional amount of
	 * points where
	 *
	 *  static > dynamic > splat > root
	 *
	 * This way we don't have to worry about the order of our routes, let the
	 * computers do it.
	 *
	 * A route looks like this
	 *
	 *  { fullPath, default, value }
	 *
	 * And a returned match looks like:
	 *
	 *  { route, params, uri }
	 *
	 * @param {object[]} routes
	 * @param {string} uri
	 * @return {?object}
	 */

	function pick(routes, uri) {
	  var bestMatch;
	  var defaultMatch;

	  var _uri$split = uri.split("?"),
	      _uri$split2 = _slicedToArray(_uri$split, 1),
	      uriPathname = _uri$split2[0];

	  var uriSegments = segmentize(uriPathname);
	  var isRootUri = uriSegments[0] === "";
	  var ranked = rankRoutes(routes);

	  var _loop = function _loop(i, l) {
	    var route = ranked[i].route;
	    var missed = false;
	    var params = {}; // eslint-disable-next-line no-shadow

	    var createMatch = function createMatch(uri) {
	      return _objectSpread$2(_objectSpread$2({}, route), {}, {
	        params: params,
	        uri: uri
	      });
	    };

	    if (route.default) {
	      defaultMatch = createMatch(uri);
	      return "continue";
	    }

	    var routeSegments = segmentize(route.fullPath);
	    var max = Math.max(uriSegments.length, routeSegments.length);
	    var index = 0;

	    for (; index < max; index++) {
	      var routeSegment = routeSegments[index];
	      var uriSegment = uriSegments[index];

	      if (!isUndefined(routeSegment) && isSplat(routeSegment)) {
	        // Hit a splat, just grab the rest, and return a match
	        // uri:   /files/documents/work
	        // route: /files/* or /files/*splatname
	        var splatName = routeSegment === "*" ? "*" : routeSegment.slice(1);
	        params[splatName] = uriSegments.slice(index).map(decodeURIComponent).join("/");
	        break;
	      }

	      if (isUndefined(uriSegment)) {
	        // URI is shorter than the route, no match
	        // uri:   /users
	        // route: /users/:userId
	        missed = true;
	        break;
	      }

	      var dynamicMatch = paramRegex.exec(routeSegment);

	      if (dynamicMatch && !isRootUri) {
	        var value = decodeURIComponent(uriSegment);
	        params[dynamicMatch[1]] = value;
	      } else if (routeSegment !== uriSegment) {
	        // Current segments don't match, not dynamic, not splat, so no match
	        // uri:   /users/123/settings
	        // route: /users/:id/profile
	        missed = true;
	        break;
	      }
	    }

	    if (!missed) {
	      bestMatch = createMatch(join.apply(void 0, _toConsumableArray(uriSegments.slice(0, index))));
	      return "break";
	    }
	  };

	  for (var i = 0, l = ranked.length; i < l; i++) {
	    var _ret = _loop(i);

	    if (_ret === "continue") continue;
	    if (_ret === "break") break;
	  }

	  return bestMatch || defaultMatch || null;
	}
	/**
	 * Check if the `route.fullPath` matches the `uri`.
	 * @param {Object} route
	 * @param {string} uri
	 * @return {?object}
	 */

	function match(route, uri) {
	  return pick([route], uri);
	}
	/**
	 * Resolve URIs as though every path is a directory, no files. Relative URIs
	 * in the browser can feel awkward because not only can you be "in a directory",
	 * you can be "at a file", too. For example:
	 *
	 *  browserSpecResolve('foo', '/bar/') => /bar/foo
	 *  browserSpecResolve('foo', '/bar') => /foo
	 *
	 * But on the command line of a file system, it's not as complicated. You can't
	 * `cd` from a file, only directories. This way, links have to know less about
	 * their current path. To go deeper you can do this:
	 *
	 *  <Link to="deeper"/>
	 *  // instead of
	 *  <Link to=`{${props.uri}/deeper}`/>
	 *
	 * Just like `cd`, if you want to go deeper from the command line, you do this:
	 *
	 *  cd deeper
	 *  # not
	 *  cd $(pwd)/deeper
	 *
	 * By treating every path as a directory, linking to relative paths should
	 * require less contextual information and (fingers crossed) be more intuitive.
	 * @param {string} to
	 * @param {string} base
	 * @return {string}
	 */

	function resolve(to, base) {
	  // /foo/bar, /baz/qux => /foo/bar
	  if (startsWith(to, "/")) {
	    return to;
	  }

	  var _to$split = to.split("?"),
	      _to$split2 = _slicedToArray(_to$split, 2),
	      toPathname = _to$split2[0],
	      toQuery = _to$split2[1];

	  var _base$split = base.split("?"),
	      _base$split2 = _slicedToArray(_base$split, 1),
	      basePathname = _base$split2[0];

	  var toSegments = segmentize(toPathname);
	  var baseSegments = segmentize(basePathname); // ?a=b, /users?b=c => /users?a=b

	  if (toSegments[0] === "") {
	    return addQuery(basePathname, toQuery);
	  } // profile, /users/789 => /users/789/profile


	  if (!startsWith(toSegments[0], ".")) {
	    var pathname = baseSegments.concat(toSegments).join("/");
	    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
	  } // ./       , /users/123 => /users/123
	  // ../      , /users/123 => /users
	  // ../..    , /users/123 => /
	  // ../../one, /a/b/c/d   => /a/b/one
	  // .././one , /a/b/c/d   => /a/b/c/one


	  var allSegments = baseSegments.concat(toSegments);
	  var segments = [];
	  allSegments.forEach(function (segment) {
	    if (segment === "..") {
	      segments.pop();
	    } else if (segment !== ".") {
	      segments.push(segment);
	    }
	  });
	  return addQuery("/".concat(segments.join("/")), toQuery);
	}
	/**
	 * Normalizes a location for consumption by `Route` children and the `Router`.
	 * It removes the apps basepath from the pathname
	 * and sets default values for `search` and `hash` properties.
	 *
	 * @param {Object} location The current global location supplied by the history component
	 * @param {string} basepath The applications basepath (i.e. when serving from a subdirectory)
	 *
	 * @returns The normalized location
	 */

	function normalizeLocation(location, basepath) {
	  var pathname = location.pathname,
	      _location$hash = location.hash,
	      hash = _location$hash === void 0 ? "" : _location$hash,
	      _location$search = location.search,
	      search = _location$search === void 0 ? "" : _location$search,
	      state = location.state;
	  var baseSegments = segmentize(basepath, true);
	  var pathSegments = segmentize(pathname, true);

	  while (baseSegments.length) {
	    if (baseSegments[0] !== pathSegments[0]) {
	      fail(ROUTER_ID, "Invalid state: All locations must begin with the basepath \"".concat(basepath, "\", found \"").concat(pathname, "\""));
	    }

	    baseSegments.shift();
	    pathSegments.shift();
	  }

	  return {
	    pathname: join.apply(void 0, _toConsumableArray(pathSegments)),
	    hash: hash,
	    search: search,
	    state: state
	  };
	}

	var normalizeUrlFragment = function normalizeUrlFragment(frag) {
	  return frag.length === 1 ? "" : frag;
	};
	/**
	 * Creates a location object from an url.
	 * It is used to create a location from the url prop used in SSR
	 *
	 * @param {string} url The url string (e.g. "/path/to/somewhere")
	 *
	 * @returns {{ pathname: string; search: string; hash: string }} The location
	 */


	function createLocation(url) {
	  var searchIndex = url.indexOf("?");
	  var hashIndex = url.indexOf("#");
	  var hasSearchIndex = searchIndex !== -1;
	  var hasHashIndex = hashIndex !== -1;
	  var hash = hasHashIndex ? normalizeUrlFragment(url.substr(hashIndex)) : "";
	  var pathnameAndSearch = hasHashIndex ? url.substr(0, hashIndex) : url;
	  var search = hasSearchIndex ? normalizeUrlFragment(pathnameAndSearch.substr(searchIndex)) : "";
	  var pathname = hasSearchIndex ? pathnameAndSearch.substr(0, searchIndex) : pathnameAndSearch;
	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	}
	/**
	 * Resolves a link relative to the parent Route and the Routers basepath.
	 *
	 * @param {string} path The given path, that will be resolved
	 * @param {string} routeBase The current Routes base path
	 * @param {string} appBase The basepath of the app. Used, when serving from a subdirectory
	 * @returns {string} The resolved path
	 *
	 * @example
	 * resolveLink("relative", "/routeBase", "/") // -> "/routeBase/relative"
	 * resolveLink("/absolute", "/routeBase", "/") // -> "/absolute"
	 * resolveLink("relative", "/routeBase", "/base") // -> "/base/routeBase/relative"
	 * resolveLink("/absolute", "/routeBase", "/base") // -> "/base/absolute"
	 */

	function resolveLink(path, routeBase, appBase) {
	  return join(appBase, resolve(path, routeBase));
	}
	/**
	 * Get the uri for a Route, by matching it against the current location.
	 *
	 * @param {string} routePath The Routes resolved path
	 * @param {string} pathname The current locations pathname
	 */

	function extractBaseUri(routePath, pathname) {
	  var fullPath = normalizePath(stripSplat(routePath));
	  var baseSegments = segmentize(fullPath, true);
	  var pathSegments = segmentize(pathname, true).slice(0, baseSegments.length);
	  var routeMatch = match({
	    fullPath: fullPath
	  }, join.apply(void 0, _toConsumableArray(pathSegments)));
	  return routeMatch && routeMatch.uri;
	}

	function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
	var POP = "POP";
	var PUSH = "PUSH";
	var REPLACE = "REPLACE";

	function getLocation(source) {
	  return _objectSpread$1(_objectSpread$1({}, source.location), {}, {
	    pathname: encodeURI(decodeURI(source.location.pathname)),
	    state: source.history.state,
	    _key: source.history.state && source.history.state._key || "initial"
	  });
	}

	function createHistory(source) {
	  var listeners = [];
	  var location = getLocation(source);
	  var action = POP;

	  var notifyListeners = function notifyListeners() {
	    var listenerFns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : listeners;
	    return listenerFns.forEach(function (listener) {
	      return listener({
	        location: location,
	        action: action
	      });
	    });
	  };

	  return {
	    get location() {
	      return location;
	    },

	    listen: function listen(listener) {
	      listeners.push(listener);

	      var popstateListener = function popstateListener() {
	        location = getLocation(source);
	        action = POP;
	        notifyListeners([listener]);
	      }; // Call listener when it is registered


	      notifyListeners([listener]);
	      var unlisten = addListener(source, "popstate", popstateListener);
	      return function () {
	        unlisten();
	        listeners = listeners.filter(function (fn) {
	          return fn !== listener;
	        });
	      };
	    },

	    /**
	     * Navigate to a new absolute route.
	     *
	     * @param {string|number} to The path to navigate to.
	     *
	     * If `to` is a number we will navigate to the stack entry index + `to`
	     * (-> `navigate(-1)`, is equivalent to hitting the back button of the browser)
	     * @param {Object} options
	     * @param {*} [options.state] The state will be accessible through `location.state`
	     * @param {boolean} [options.replace=false] Replace the current entry in the history
	     * stack, instead of pushing on a new one
	     */
	    navigate: function navigate(to, options) {
	      var _ref = options || {},
	          _ref$state = _ref.state,
	          state = _ref$state === void 0 ? {} : _ref$state,
	          _ref$replace = _ref.replace,
	          replace = _ref$replace === void 0 ? false : _ref$replace;

	      action = replace ? REPLACE : PUSH;

	      if (isNumber(to)) {
	        if (options) {
	          warn(NAVIGATE_ID, "Navigation options (state or replace) are not supported, " + "when passing a number as the first argument to navigate. " + "They are ignored.");
	        }

	        action = POP;
	        source.history.go(to);
	      } else {
	        var keyedState = _objectSpread$1(_objectSpread$1({}, state), {}, {
	          _key: createGlobalId()
	        }); // try...catch iOS Safari limits to 100 pushState calls


	        try {
	          source.history[replace ? "replaceState" : "pushState"](keyedState, "", to);
	        } catch (e) {
	          source.location[replace ? "replace" : "assign"](to);
	        }
	      }

	      location = getLocation(source);
	      notifyListeners();
	    }
	  };
	}

	function createStackFrame(state, uri) {
	  return _objectSpread$1(_objectSpread$1({}, createLocation(uri)), {}, {
	    state: state
	  });
	} // Stores history entries in memory for testing or other platforms like Native


	function createMemorySource() {
	  var initialPathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
	  var index = 0;
	  var stack = [createStackFrame(null, initialPathname)];
	  return {
	    // This is just for testing...
	    get entries() {
	      return stack;
	    },

	    get location() {
	      return stack[index];
	    },

	    addEventListener: function addEventListener() {},
	    removeEventListener: function removeEventListener() {},
	    history: {
	      get state() {
	        return stack[index].state;
	      },

	      pushState: function pushState(state, title, uri) {
	        index++; // Throw away anything in the stack with an index greater than the current index.
	        // This happens, when we go back using `go(-n)`. The index is now less than `stack.length`.
	        // If we call `go(+n)` the stack entries with an index greater than the current index can
	        // be reused.
	        // However, if we navigate to a path, instead of a number, we want to create a new branch
	        // of navigation.

	        stack = stack.slice(0, index);
	        stack.push(createStackFrame(state, uri));
	      },
	      replaceState: function replaceState(state, title, uri) {
	        stack[index] = createStackFrame(state, uri);
	      },
	      go: function go(to) {
	        var newIndex = index + to;

	        if (newIndex < 0 || newIndex > stack.length - 1) {
	          return;
	        }

	        index = newIndex;
	      }
	    }
	  };
	} // Global history uses window.history as the source if available,
	// otherwise a memory history


	var canUseDOM = !!(!isSSR && window.document && window.document.createElement); // Use memory history in iframes (for example in Svelte REPL)

	var isEmbeddedPage = !isSSR && window.location.origin === "null";
	var globalHistory = createHistory(canUseDOM && !isEmbeddedPage ? window : createMemorySource());
	globalHistory.navigate;

	// not update, when we mutate it.
	// Also, we need a single global reference, because taking focus needs to
	// work globally, even if we have multiple top level routers
	// eslint-disable-next-line import/no-mutable-exports

	var focusCandidate = null; // eslint-disable-next-line import/no-mutable-exports

	var initialNavigation = true;
	/**
	 * Check if RouterA is above RouterB in the document
	 * @param {number} routerIdA The first Routers id
	 * @param {number} routerIdB The second Routers id
	 */

	function isAbove(routerIdA, routerIdB) {
	  var routerMarkers = document.querySelectorAll("[data-svnav-router]");

	  for (var i = 0; i < routerMarkers.length; i++) {
	    var node = routerMarkers[i];
	    var currentId = Number(node.dataset.svnavRouter);
	    if (currentId === routerIdA) return true;
	    if (currentId === routerIdB) return false;
	  }

	  return false;
	}
	/**
	 * Check if a Route candidate is the best choice to move focus to,
	 * and store the best match.
	 * @param {{
	     level: number;
	     routerId: number;
	     route: {
	       id: number;
	       focusElement: import("svelte/store").Readable<Promise<Element>|null>;
	     }
	   }} item A Route candidate, that updated and is visible after a navigation
	 */


	function pushFocusCandidate(item) {
	  if ( // Best candidate if it's the only candidate...
	  !focusCandidate || // Route is nested deeper, than previous candidate
	  // -> Route change was triggered in the deepest affected
	  // Route, so that's were focus should move to
	  item.level > focusCandidate.level || item.level === focusCandidate.level && isAbove(item.routerId, focusCandidate.routerId)) {
	    focusCandidate = item;
	  }
	}
	/**
	 * Reset the focus candidate.
	 */

	function clearFocusCandidate() {
	  focusCandidate = null;
	}
	function initialNavigationOccurred() {
	  initialNavigation = false;
	}
	/*
	 * `focus` Adapted from https://github.com/oaf-project/oaf-side-effects/blob/master/src/index.ts
	 *
	 * https://github.com/oaf-project/oaf-side-effects/blob/master/LICENSE
	 */

	function focus(elem) {
	  if (!elem) return false;
	  var TABINDEX = "tabindex";

	  try {
	    if (!elem.hasAttribute(TABINDEX)) {
	      elem.setAttribute(TABINDEX, "-1");
	      var unlisten; // We remove tabindex after blur to avoid weird browser behavior
	      // where a mouse click can activate elements with tabindex="-1".

	      var blurListener = function blurListener() {
	        elem.removeAttribute(TABINDEX);
	        unlisten();
	      };

	      unlisten = addListener(elem, "blur", blurListener);
	    }

	    elem.focus();
	    return document.activeElement === elem;
	  } catch (e) {
	    // Apparently trying to focus a disabled element in IE can throw.
	    // See https://stackoverflow.com/a/1600194/2476884
	    return false;
	  }
	}
	function isEndMarker(elem, id) {
	  return Number(elem.dataset.svnavRouteEnd) === id;
	}
	function isHeading(elem) {
	  return /^H[1-6]$/i.test(elem.tagName);
	}

	function query(selector) {
	  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
	  return parent.querySelector(selector);
	}

	function queryHeading(id) {
	  var marker = query("[data-svnav-route-start=\"".concat(id, "\"]"));
	  var current = marker.nextElementSibling;

	  while (!isEndMarker(current, id)) {
	    if (isHeading(current)) {
	      return current;
	    }

	    var heading = query("h1,h2,h3,h4,h5,h6", current);

	    if (heading) {
	      return heading;
	    }

	    current = current.nextElementSibling;
	  }

	  return null;
	}
	function handleFocus(route) {
	  Promise.resolve(get_store_value(route.focusElement)).then(function (elem) {
	    var focusElement = elem || queryHeading(route.id);

	    if (!focusElement) {
	      warn(ROUTER_ID, "Could not find an element to focus. " + "You should always render a header for accessibility reasons, " + 'or set a custom focus element via the "useFocus" hook. ' + "If you don't want this Route or Router to manage focus, " + 'pass "primary={false}" to it.', route, ROUTE_ID);
	    }

	    var headingFocused = focus(focusElement);
	    if (headingFocused) return;
	    focus(document.documentElement);
	  });
	}
	var createTriggerFocus = function createTriggerFocus(a11yConfig, announcementText, location) {
	  return function (manageFocus, announceNavigation) {
	    return (// Wait until the dom is updated, so we can look for headings
	      tick().then(function () {
	        if (!focusCandidate || initialNavigation) {
	          initialNavigationOccurred();
	          return;
	        }

	        if (manageFocus) {
	          handleFocus(focusCandidate.route);
	        }

	        if (a11yConfig.announcements && announceNavigation) {
	          var _focusCandidate$route = focusCandidate.route,
	              path = _focusCandidate$route.path,
	              fullPath = _focusCandidate$route.fullPath,
	              meta = _focusCandidate$route.meta,
	              params = _focusCandidate$route.params,
	              uri = _focusCandidate$route.uri;
	          var announcementMessage = a11yConfig.createAnnouncement({
	            path: path,
	            fullPath: fullPath,
	            meta: meta,
	            params: params,
	            uri: uri
	          }, get_store_value(location));
	          Promise.resolve(announcementMessage).then(function (message) {
	            announcementText.set(message);
	          });
	        }

	        clearFocusCandidate();
	      })
	    );
	  };
	};
	var visuallyHiddenStyle = "position:fixed;" + "top:-1px;" + "left:0;" + "width:1px;" + "height:1px;" + "padding:0;" + "overflow:hidden;" + "clip:rect(0,0,0,0);" + "white-space:nowrap;" + "border:0;";

	function _createSuper$m(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$m(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$m() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function create_if_block$7(ctx) {
	  var div;
	  var t;
	  return {
	    c: function c() {
	      div = element("div");
	      t = text(
	      /*$announcementText*/
	      ctx[0]);
	      attr(div, "role", "status");
	      attr(div, "aria-atomic", "true");
	      attr(div, "aria-live", "polite");
	      attr(div, "style", visuallyHiddenStyle);
	    },
	    m: function m(target, anchor) {
	      insert(target, div, anchor);
	      append(div, t);
	    },
	    p: function p(ctx, dirty) {
	      if (dirty[0] &
	      /*$announcementText*/
	      1) set_data(t,
	      /*$announcementText*/
	      ctx[0]);
	    },
	    d: function d(detaching) {
	      if (detaching) detach(div);
	    }
	  };
	}

	function create_fragment$m(ctx) {
	  var div;
	  var t0;
	  var t1;
	  var if_block_anchor;
	  var current;
	  var default_slot_template =
	  /*#slots*/
	  ctx[20].default;
	  var default_slot = create_slot(default_slot_template, ctx,
	  /*$$scope*/
	  ctx[19], null);
	  var if_block =
	  /*isTopLevelRouter*/
	  ctx[2] &&
	  /*manageFocus*/
	  ctx[4] &&
	  /*a11yConfig*/
	  ctx[1].announcements && create_if_block$7(ctx);
	  return {
	    c: function c() {
	      div = element("div");
	      t0 = space();
	      if (default_slot) default_slot.c();
	      t1 = space();
	      if (if_block) if_block.c();
	      if_block_anchor = empty();
	      set_style(div, "display", "none");
	      attr(div, "aria-hidden", "true");
	      attr(div, "data-svnav-router",
	      /*routerId*/
	      ctx[3]);
	    },
	    m: function m(target, anchor) {
	      insert(target, div, anchor);
	      insert(target, t0, anchor);

	      if (default_slot) {
	        default_slot.m(target, anchor);
	      }

	      insert(target, t1, anchor);
	      if (if_block) if_block.m(target, anchor);
	      insert(target, if_block_anchor, anchor);
	      current = true;
	    },
	    p: function p(ctx, dirty) {
	      if (default_slot) {
	        if (default_slot.p && (!current || dirty[0] &
	        /*$$scope*/
	        524288)) {
	          update_slot_base(default_slot, default_slot_template, ctx,
	          /*$$scope*/
	          ctx[19], !current ? get_all_dirty_from_scope(
	          /*$$scope*/
	          ctx[19]) : get_slot_changes(default_slot_template,
	          /*$$scope*/
	          ctx[19], dirty, null), null);
	        }
	      }

	      if (
	      /*isTopLevelRouter*/
	      ctx[2] &&
	      /*manageFocus*/
	      ctx[4] &&
	      /*a11yConfig*/
	      ctx[1].announcements) if_block.p(ctx, dirty);
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(default_slot, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(default_slot, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      if (detaching) detach(div);
	      if (detaching) detach(t0);
	      if (default_slot) default_slot.d(detaching);
	      if (detaching) detach(t1);
	      if (if_block) if_block.d(detaching);
	      if (detaching) detach(if_block_anchor);
	    }
	  };
	}

	var createId$1 = createCounter();
	var defaultBasepath = "/";

	function instance$j($$self, $$props, $$invalidate) {
	  var $location;
	  var $activeRoute;
	  var $prevLocation;
	  var $routes;
	  var $announcementText;
	  var _$$props$$$slots = $$props.$$slots,
	      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
	      $$scope = $$props.$$scope;
	  var _$$props$basepath = $$props.basepath,
	      basepath = _$$props$basepath === void 0 ? defaultBasepath : _$$props$basepath;
	  var _$$props$url = $$props.url,
	      url = _$$props$url === void 0 ? null : _$$props$url;
	  var _$$props$history = $$props.history,
	      history = _$$props$history === void 0 ? globalHistory : _$$props$history;
	  var _$$props$primary = $$props.primary,
	      primary = _$$props$primary === void 0 ? true : _$$props$primary;
	  var _$$props$a11y = $$props.a11y,
	      a11y = _$$props$a11y === void 0 ? {} : _$$props$a11y;

	  var a11yConfig = _objectSpread({
	    createAnnouncement: function createAnnouncement(route) {
	      return "Navigated to ".concat(route.uri);
	    },
	    announcements: true
	  }, a11y); // Remember the initial `basepath`, so we can fire a warning
	  // when the user changes it later


	  var initialBasepath = basepath;
	  var normalizedBasepath = normalizePath(basepath);
	  var locationContext = getContext(LOCATION);
	  var routerContext = getContext(ROUTER);
	  var isTopLevelRouter = !locationContext;
	  var routerId = createId$1();
	  var manageFocus = primary && !(routerContext && !routerContext.manageFocus);
	  var announcementText = writable("");
	  component_subscribe($$self, announcementText, function (value) {
	    return $$invalidate(0, $announcementText = value);
	  });
	  var routes = writable([]);
	  component_subscribe($$self, routes, function (value) {
	    return $$invalidate(18, $routes = value);
	  });
	  var activeRoute = writable(null);
	  component_subscribe($$self, activeRoute, function (value) {
	    return $$invalidate(16, $activeRoute = value);
	  }); // Used in SSR to synchronously set that a Route is active.

	  var hasActiveRoute = false; // Nesting level of router.
	  // We will need this to identify sibling routers, when moving
	  // focus on navigation, so we can focus the first possible router

	  var level = isTopLevelRouter ? 0 : routerContext.level + 1; // If we're running an SSR we force the location to the `url` prop

	  var getInitialLocation = function getInitialLocation() {
	    return normalizeLocation(isSSR ? createLocation(url) : history.location, normalizedBasepath);
	  };

	  var location = isTopLevelRouter ? writable(getInitialLocation()) : locationContext;
	  component_subscribe($$self, location, function (value) {
	    return $$invalidate(15, $location = value);
	  });
	  var prevLocation = writable($location);
	  component_subscribe($$self, prevLocation, function (value) {
	    return $$invalidate(17, $prevLocation = value);
	  });
	  var triggerFocus = createTriggerFocus(a11yConfig, announcementText, location);

	  var createRouteFilter = function createRouteFilter(routeId) {
	    return function (routeList) {
	      return routeList.filter(function (routeItem) {
	        return routeItem.id !== routeId;
	      });
	    };
	  };

	  function registerRoute(route) {
	    if (isSSR) {
	      // In SSR we should set the activeRoute immediately if it is a match.
	      // If there are more Routes being registered after a match is found,
	      // we just skip them.
	      if (hasActiveRoute) {
	        return;
	      }

	      var matchingRoute = match(route, $location.pathname);

	      if (matchingRoute) {
	        hasActiveRoute = true; // Return the match in SSR mode, so the matched Route can use it immediatly.
	        // Waiting for activeRoute to update does not work, because it updates
	        // after the Route is initialized

	        return matchingRoute; // eslint-disable-line consistent-return
	      }
	    } else {
	      routes.update(function (prevRoutes) {
	        // Remove an old version of the updated route,
	        // before pushing the new version
	        var nextRoutes = createRouteFilter(route.id)(prevRoutes);
	        nextRoutes.push(route);
	        return nextRoutes;
	      });
	    }
	  }

	  function unregisterRoute(routeId) {
	    routes.update(createRouteFilter(routeId));
	  }

	  if (!isTopLevelRouter && basepath !== defaultBasepath) {
	    warn(ROUTER_ID, 'Only top-level Routers can have a "basepath" prop. It is ignored.', {
	      basepath: basepath
	    });
	  }

	  if (isTopLevelRouter) {
	    // The topmost Router in the tree is responsible for updating
	    // the location store and supplying it through context.
	    onMount(function () {
	      var unlisten = history.listen(function (changedHistory) {
	        var normalizedLocation = normalizeLocation(changedHistory.location, normalizedBasepath);
	        prevLocation.set($location);
	        location.set(normalizedLocation);
	      });
	      return unlisten;
	    });
	    setContext(LOCATION, location);
	  }

	  setContext(ROUTER, {
	    activeRoute: activeRoute,
	    registerRoute: registerRoute,
	    unregisterRoute: unregisterRoute,
	    manageFocus: manageFocus,
	    level: level,
	    id: routerId,
	    history: isTopLevelRouter ? history : routerContext.history,
	    basepath: isTopLevelRouter ? normalizedBasepath : routerContext.basepath
	  });

	  $$self.$$set = function ($$props) {
	    if ('basepath' in $$props) $$invalidate(10, basepath = $$props.basepath);
	    if ('url' in $$props) $$invalidate(11, url = $$props.url);
	    if ('history' in $$props) $$invalidate(12, history = $$props.history);
	    if ('primary' in $$props) $$invalidate(13, primary = $$props.primary);
	    if ('a11y' in $$props) $$invalidate(14, a11y = $$props.a11y);
	    if ('$$scope' in $$props) $$invalidate(19, $$scope = $$props.$$scope);
	  };

	  $$self.$$.update = function () {
	    if ($$self.$$.dirty[0] &
	    /*basepath*/
	    1024) {
	      if (basepath !== initialBasepath) {
	        warn(ROUTER_ID, 'You cannot change the "basepath" prop. It is ignored.');
	      }
	    }

	    if ($$self.$$.dirty[0] &
	    /*$routes, $location*/
	    294912) {
	      // This reactive statement will be run when the Router is created
	      // when there are no Routes and then again the following tick, so it
	      // will not find an active Route in SSR and in the browser it will only
	      // pick an active Route after all Routes have been registered.
	      {
	        var bestMatch = pick($routes, $location.pathname);
	        activeRoute.set(bestMatch);
	      }
	    }

	    if ($$self.$$.dirty[0] &
	    /*$location, $prevLocation*/
	    163840) {
	      // Manage focus and announce navigation to screen reader users
	      {
	        if (isTopLevelRouter) {
	          var hasHash = !!$location.hash; // When a hash is present in the url, we skip focus management, because
	          // focusing a different element will prevent in-page jumps (See #3)

	          var shouldManageFocus = !hasHash && manageFocus; // We don't want to make an announcement, when the hash changes,
	          // but the active route stays the same

	          var announceNavigation = !hasHash || $location.pathname !== $prevLocation.pathname;
	          triggerFocus(shouldManageFocus, announceNavigation);
	        }
	      }
	    }

	    if ($$self.$$.dirty[0] &
	    /*$activeRoute*/
	    65536) {
	      // Queue matched Route, so top level Router can decide which Route to focus.
	      // Non primary Routers should just be ignored
	      if (manageFocus && $activeRoute && $activeRoute.primary) {
	        pushFocusCandidate({
	          level: level,
	          routerId: routerId,
	          route: $activeRoute
	        });
	      }
	    }
	  };

	  return [$announcementText, a11yConfig, isTopLevelRouter, routerId, manageFocus, announcementText, routes, activeRoute, location, prevLocation, basepath, url, history, primary, a11y, $location, $activeRoute, $prevLocation, $routes, $$scope, slots];
	}

	var Router = /*#__PURE__*/function (_SvelteComponent) {
	  _inherits(Router, _SvelteComponent);

	  var _super = _createSuper$m(Router);

	  function Router(options) {
	    var _this;

	    _classCallCheck(this, Router);

	    _this = _super.call(this);
	    init(_assertThisInitialized(_this), options, instance$j, create_fragment$m, safe_not_equal, {
	      basepath: 10,
	      url: 11,
	      history: 12,
	      primary: 13,
	      a11y: 14
	    }, null, [-1, -1]);
	    return _this;
	  }

	  return Router;
	}(SvelteComponent);

	var Router$1 = Router;

	/**
	 * Check if a component or hook have been created outside of a
	 * context providing component
	 * @param {number} componentId
	 * @param {*} props
	 * @param {string?} ctxKey
	 * @param {number?} ctxProviderId
	 */

	function usePreflightCheck(componentId, props) {
	  var ctxKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ROUTER;
	  var ctxProviderId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ROUTER_ID;
	  var ctx = getContext(ctxKey);

	  if (!ctx) {
	    fail(componentId, function (label) {
	      return "You cannot use ".concat(label, " outside of a ").concat(createLabel(ctxProviderId), ".");
	    }, props);
	  }
	}

	var toReadonly = function toReadonly(ctx) {
	  var _getContext = getContext(ctx),
	      subscribe = _getContext.subscribe;

	  return {
	    subscribe: subscribe
	  };
	};
	/**
	 * Access the current location via a readable store.
	 * @returns {import("svelte/store").Readable<{
	    pathname: string;
	    search: string;
	    hash: string;
	    state: {};
	  }>}
	 *
	 * @example
	  ```html
	  <script>
	    import { useLocation } from "svelte-navigator";

	    const location = useLocation();

	    $: console.log($location);
	    // {
	    //   pathname: "/blog",
	    //   search: "?id=123",
	    //   hash: "#comments",
	    //   state: {}
	    // }
	  </script>
	  ```
	 */


	function useLocation() {
	  usePreflightCheck(USE_LOCATION_ID);
	  return toReadonly(LOCATION);
	}
	/**
	 * @typedef {{
	    path: string;
	    fullPath: string;
	    uri: string;
	    params: {};
	  }} RouteMatch
	 */

	/**
	 * @typedef {import("svelte/store").Readable<RouteMatch|null>} RouteMatchStore
	 */

	/**
	 * Access the history of top level Router.
	 */

	function useHistory() {
	  var _getContext2 = getContext(ROUTER),
	      history = _getContext2.history;

	  return history;
	}
	/**
	 * Access the base of the parent Route.
	 */

	function useRouteBase() {
	  var route = getContext(ROUTE);
	  return route ? derived(route, function (_route) {
	    return _route.base;
	  }) : writable("/");
	}
	/**
	 * Resolve a given link relative to the current `Route` and the `Router`s `basepath`.
	 * It is used under the hood in `Link` and `useNavigate`.
	 * You can use it to manually resolve links, when using the `link` or `links` actions.
	 *
	 * @returns {(path: string) => string}
	 *
	 * @example
	  ```html
	  <script>
	    import { link, useResolve } from "svelte-navigator";

	    const resolve = useResolve();
	    // `resolvedLink` will be resolved relative to its parent Route
	    // and the Routers `basepath`
	    const resolvedLink = resolve("relativePath");
	  </script>

	  <a href={resolvedLink} use:link>Relative link</a>
	  ```
	 */

	function useResolve() {
	  usePreflightCheck(USE_RESOLVE_ID);
	  var routeBase = useRouteBase();

	  var _getContext3 = getContext(ROUTER),
	      appBase = _getContext3.basepath;
	  /**
	   * Resolves the path relative to the current route and basepath.
	   *
	   * @param {string} path The path to resolve
	   * @returns {string} The resolved path
	   */


	  var resolve = function resolve(path) {
	    return resolveLink(path, get_store_value(routeBase), appBase);
	  };

	  return resolve;
	}
	/**
	 * A hook, that returns a context-aware version of `navigate`.
	 * It will automatically resolve the given link relative to the current Route.
	 * It will also resolve a link against the `basepath` of the Router.
	 *
	 * @example
	  ```html
	  <!-- App.svelte -->
	  <script>
	    import { link, Route } from "svelte-navigator";
	    import RouteComponent from "./RouteComponent.svelte";
	  </script>

	  <Router>
	    <Route path="route1">
	      <RouteComponent />
	    </Route>
	    <!-- ... -->
	  </Router>

	  <!-- RouteComponent.svelte -->
	  <script>
	    import { useNavigate } from "svelte-navigator";

	    const navigate = useNavigate();
	  </script>

	  <button on:click="{() => navigate('relativePath')}">
	    go to /route1/relativePath
	  </button>
	  <button on:click="{() => navigate('/absolutePath')}">
	    go to /absolutePath
	  </button>
	  ```
	  *
	  * @example
	  ```html
	  <!-- App.svelte -->
	  <script>
	    import { link, Route } from "svelte-navigator";
	    import RouteComponent from "./RouteComponent.svelte";
	  </script>

	  <Router basepath="/base">
	    <Route path="route1">
	      <RouteComponent />
	    </Route>
	    <!-- ... -->
	  </Router>

	  <!-- RouteComponent.svelte -->
	  <script>
	    import { useNavigate } from "svelte-navigator";

	    const navigate = useNavigate();
	  </script>

	  <button on:click="{() => navigate('relativePath')}">
	    go to /base/route1/relativePath
	  </button>
	  <button on:click="{() => navigate('/absolutePath')}">
	    go to /base/absolutePath
	  </button>
	  ```
	 */

	function useNavigate() {
	  usePreflightCheck(USE_NAVIGATE_ID);
	  var resolve = useResolve();

	  var _useHistory = useHistory(),
	      navigate = _useHistory.navigate;
	  /**
	   * Navigate to a new route.
	   * Resolves the link relative to the current route and basepath.
	   *
	   * @param {string|number} to The path to navigate to.
	   *
	   * If `to` is a number we will navigate to the stack entry index + `to`
	   * (-> `navigate(-1)`, is equivalent to hitting the back button of the browser)
	   * @param {Object} options
	   * @param {*} [options.state]
	   * @param {boolean} [options.replace=false]
	   */


	  var navigateRelative = function navigateRelative(to, options) {
	    // If to is a number, we navigate to the target stack entry via `history.go`.
	    // Otherwise resolve the link
	    var target = isNumber(to) ? to : resolve(to);
	    return navigate(target, options);
	  };

	  return navigateRelative;
	}
	/**
	 * Access the parent Routes matched params and wildcards
	 * @returns {import("svelte/store").Readable<{
	     [param: string]: any;
	   }>} A readable store containing the matched parameters and wildcards
	 *
	 * @example
	  ```html
	  <!--
	    Somewhere inside <Route path="user/:id/*splat" />
	    with a current url of "/myApp/user/123/pauls-profile"
	  -->
	  <script>
	    import { useParams } from "svelte-navigator";

	    const params = useParams();

	    $: console.log($params); // -> { id: "123", splat: "pauls-profile" }
	  </script>

	  <h3>Welcome user {$params.id}! bleep bloop...</h3>
	  ```
	 */

	function useParams() {
	  usePreflightCheck(USE_PARAMS_ID, null, ROUTE, ROUTE_ID);
	  return toReadonly(ROUTE_PARAMS);
	}

	function _createSuper$l(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$l(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$l() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	var get_default_slot_changes = function get_default_slot_changes(dirty) {
	  return {
	    params: dirty &
	    /*$params*/
	    16,
	    location: dirty &
	    /*$location*/
	    8
	  };
	};

	var get_default_slot_context = function get_default_slot_context(ctx) {
	  return {
	    params: isSSR ? get_store_value(
	    /*params*/
	    ctx[9]) :
	    /*$params*/
	    ctx[4],
	    location:
	    /*$location*/
	    ctx[3],
	    navigate:
	    /*navigate*/
	    ctx[10]
	  };
	}; // (97:0) {#if isActive}


	function create_if_block$6(ctx) {
	  var router;
	  var current;
	  router = new Router$1({
	    props: {
	      primary:
	      /*primary*/
	      ctx[1],
	      $$slots: {
	        default: [create_default_slot$2]
	      },
	      $$scope: {
	        ctx: ctx
	      }
	    }
	  });
	  return {
	    c: function c() {
	      create_component(router.$$.fragment);
	    },
	    m: function m(target, anchor) {
	      mount_component(router, target, anchor);
	      current = true;
	    },
	    p: function p(ctx, dirty) {
	      var router_changes = {};
	      if (dirty &
	      /*primary*/
	      2) router_changes.primary =
	      /*primary*/
	      ctx[1];

	      if (dirty &
	      /*$$scope, component, $location, $params, $$restProps*/
	      264217) {
	        router_changes.$$scope = {
	          dirty: dirty,
	          ctx: ctx
	        };
	      }

	      router.$set(router_changes);
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(router.$$.fragment, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(router.$$.fragment, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      destroy_component(router, detaching);
	    }
	  };
	} // (113:2) {:else}


	function create_else_block$1(ctx) {
	  var current;
	  var default_slot_template =
	  /*#slots*/
	  ctx[17].default;
	  var default_slot = create_slot(default_slot_template, ctx,
	  /*$$scope*/
	  ctx[18], get_default_slot_context);
	  return {
	    c: function c() {
	      if (default_slot) default_slot.c();
	    },
	    m: function m(target, anchor) {
	      if (default_slot) {
	        default_slot.m(target, anchor);
	      }

	      current = true;
	    },
	    p: function p(ctx, dirty) {
	      if (default_slot) {
	        if (default_slot.p && (!current || dirty &
	        /*$$scope, $params, $location*/
	        262168)) {
	          update_slot_base(default_slot, default_slot_template, ctx,
	          /*$$scope*/
	          ctx[18], !current ? get_all_dirty_from_scope(
	          /*$$scope*/
	          ctx[18]) : get_slot_changes(default_slot_template,
	          /*$$scope*/
	          ctx[18], dirty, get_default_slot_changes), get_default_slot_context);
	        }
	      }
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(default_slot, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(default_slot, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      if (default_slot) default_slot.d(detaching);
	    }
	  };
	} // (105:2) {#if component !== null}


	function create_if_block_1$3(ctx) {
	  var switch_instance;
	  var switch_instance_anchor;
	  var current;
	  var switch_instance_spread_levels = [{
	    location:
	    /*$location*/
	    ctx[3]
	  }, {
	    navigate:
	    /*navigate*/
	    ctx[10]
	  }, isSSR ? get_store_value(
	  /*params*/
	  ctx[9]) :
	  /*$params*/
	  ctx[4],
	  /*$$restProps*/
	  ctx[11]];
	  var switch_value =
	  /*component*/
	  ctx[0];

	  function switch_props(ctx) {
	    var switch_instance_props = {};

	    for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
	      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
	    }

	    return {
	      props: switch_instance_props
	    };
	  }

	  if (switch_value) {
	    switch_instance = new switch_value(switch_props());
	  }

	  return {
	    c: function c() {
	      if (switch_instance) create_component(switch_instance.$$.fragment);
	      switch_instance_anchor = empty();
	    },
	    m: function m(target, anchor) {
	      if (switch_instance) {
	        mount_component(switch_instance, target, anchor);
	      }

	      insert(target, switch_instance_anchor, anchor);
	      current = true;
	    },
	    p: function p(ctx, dirty) {
	      var switch_instance_changes = dirty &
	      /*$location, navigate, isSSR, get, params, $params, $$restProps*/
	      3608 ? get_spread_update(switch_instance_spread_levels, [dirty &
	      /*$location*/
	      8 && {
	        location:
	        /*$location*/
	        ctx[3]
	      }, dirty &
	      /*navigate*/
	      1024 && {
	        navigate:
	        /*navigate*/
	        ctx[10]
	      }, dirty &
	      /*isSSR, get, params, $params*/
	      528 && get_spread_object(isSSR ? get_store_value(
	      /*params*/
	      ctx[9]) :
	      /*$params*/
	      ctx[4]), dirty &
	      /*$$restProps*/
	      2048 && get_spread_object(
	      /*$$restProps*/
	      ctx[11])]) : {};

	      if (switch_value !== (switch_value =
	      /*component*/
	      ctx[0])) {
	        if (switch_instance) {
	          group_outros();
	          var old_component = switch_instance;
	          transition_out(old_component.$$.fragment, 1, 0, function () {
	            destroy_component(old_component, 1);
	          });
	          check_outros();
	        }

	        if (switch_value) {
	          switch_instance = new switch_value(switch_props());
	          create_component(switch_instance.$$.fragment);
	          transition_in(switch_instance.$$.fragment, 1);
	          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
	        } else {
	          switch_instance = null;
	        }
	      } else if (switch_value) {
	        switch_instance.$set(switch_instance_changes);
	      }
	    },
	    i: function i(local) {
	      if (current) return;
	      if (switch_instance) transition_in(switch_instance.$$.fragment, local);
	      current = true;
	    },
	    o: function o(local) {
	      if (switch_instance) transition_out(switch_instance.$$.fragment, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      if (detaching) detach(switch_instance_anchor);
	      if (switch_instance) destroy_component(switch_instance, detaching);
	    }
	  };
	} // (98:1) <Router {primary}>


	function create_default_slot$2(ctx) {
	  var current_block_type_index;
	  var if_block;
	  var if_block_anchor;
	  var current;
	  var if_block_creators = [create_if_block_1$3, create_else_block$1];
	  var if_blocks = [];

	  function select_block_type(ctx, dirty) {
	    if (
	    /*component*/
	    ctx[0] !== null) return 0;
	    return 1;
	  }

	  current_block_type_index = select_block_type(ctx);
	  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	  return {
	    c: function c() {
	      if_block.c();
	      if_block_anchor = empty();
	    },
	    m: function m(target, anchor) {
	      if_blocks[current_block_type_index].m(target, anchor);
	      insert(target, if_block_anchor, anchor);
	      current = true;
	    },
	    p: function p(ctx, dirty) {
	      var previous_block_index = current_block_type_index;
	      current_block_type_index = select_block_type(ctx);

	      if (current_block_type_index === previous_block_index) {
	        if_blocks[current_block_type_index].p(ctx, dirty);
	      } else {
	        group_outros();
	        transition_out(if_blocks[previous_block_index], 1, 1, function () {
	          if_blocks[previous_block_index] = null;
	        });
	        check_outros();
	        if_block = if_blocks[current_block_type_index];

	        if (!if_block) {
	          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	          if_block.c();
	        } else {
	          if_block.p(ctx, dirty);
	        }

	        transition_in(if_block, 1);
	        if_block.m(if_block_anchor.parentNode, if_block_anchor);
	      }
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(if_block);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(if_block);
	      current = false;
	    },
	    d: function d(detaching) {
	      if_blocks[current_block_type_index].d(detaching);
	      if (detaching) detach(if_block_anchor);
	    }
	  };
	}

	function create_fragment$l(ctx) {
	  var div0;
	  var t0;
	  var t1;
	  var div1;
	  var current;
	  var if_block =
	  /*isActive*/
	  ctx[2] && create_if_block$6(ctx);
	  return {
	    c: function c() {
	      div0 = element("div");
	      t0 = space();
	      if (if_block) if_block.c();
	      t1 = space();
	      div1 = element("div");
	      set_style(div0, "display", "none");
	      attr(div0, "aria-hidden", "true");
	      attr(div0, "data-svnav-route-start",
	      /*id*/
	      ctx[5]);
	      set_style(div1, "display", "none");
	      attr(div1, "aria-hidden", "true");
	      attr(div1, "data-svnav-route-end",
	      /*id*/
	      ctx[5]);
	    },
	    m: function m(target, anchor) {
	      insert(target, div0, anchor);
	      insert(target, t0, anchor);
	      if (if_block) if_block.m(target, anchor);
	      insert(target, t1, anchor);
	      insert(target, div1, anchor);
	      current = true;
	    },
	    p: function p(ctx, _ref) {
	      var _ref2 = _slicedToArray(_ref, 1),
	          dirty = _ref2[0];

	      if (
	      /*isActive*/
	      ctx[2]) {
	        if (if_block) {
	          if_block.p(ctx, dirty);

	          if (dirty &
	          /*isActive*/
	          4) {
	            transition_in(if_block, 1);
	          }
	        } else {
	          if_block = create_if_block$6(ctx);
	          if_block.c();
	          transition_in(if_block, 1);
	          if_block.m(t1.parentNode, t1);
	        }
	      } else if (if_block) {
	        group_outros();
	        transition_out(if_block, 1, 1, function () {
	          if_block = null;
	        });
	        check_outros();
	      }
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(if_block);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(if_block);
	      current = false;
	    },
	    d: function d(detaching) {
	      if (detaching) detach(div0);
	      if (detaching) detach(t0);
	      if (if_block) if_block.d(detaching);
	      if (detaching) detach(t1);
	      if (detaching) detach(div1);
	    }
	  };
	}

	var createId = createCounter();

	function instance$i($$self, $$props, $$invalidate) {
	  var isActive;
	  var omit_props_names = ["path", "component", "meta", "primary"];
	  var $$restProps = compute_rest_props($$props, omit_props_names);
	  var $activeRoute;
	  var $location;
	  var $parentBase;
	  var $params;
	  var _$$props = $$props,
	      _$$props$$$slots = _$$props.$$slots,
	      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
	      $$scope = _$$props.$$scope;
	  var _$$props2 = $$props,
	      _$$props2$path = _$$props2.path,
	      path = _$$props2$path === void 0 ? "" : _$$props2$path;
	  var _$$props3 = $$props,
	      _$$props3$component = _$$props3.component,
	      component = _$$props3$component === void 0 ? null : _$$props3$component;
	  var _$$props4 = $$props,
	      _$$props4$meta = _$$props4.meta,
	      meta = _$$props4$meta === void 0 ? {} : _$$props4$meta;
	  var _$$props5 = $$props,
	      _$$props5$primary = _$$props5.primary,
	      primary = _$$props5$primary === void 0 ? true : _$$props5$primary;
	  usePreflightCheck(ROUTE_ID, $$props);
	  var id = createId();

	  var _getContext = getContext(ROUTER),
	      registerRoute = _getContext.registerRoute,
	      unregisterRoute = _getContext.unregisterRoute,
	      activeRoute = _getContext.activeRoute;

	  component_subscribe($$self, activeRoute, function (value) {
	    return $$invalidate(15, $activeRoute = value);
	  });
	  var parentBase = useRouteBase();
	  component_subscribe($$self, parentBase, function (value) {
	    return $$invalidate(16, $parentBase = value);
	  });
	  var location = useLocation();
	  component_subscribe($$self, location, function (value) {
	    return $$invalidate(3, $location = value);
	  });
	  var focusElement = writable(null); // In SSR we cannot wait for $activeRoute to update,
	  // so we use the match returned from `registerRoute` instead

	  var ssrMatch;
	  var route = writable();
	  var params = writable({});
	  component_subscribe($$self, params, function (value) {
	    return $$invalidate(4, $params = value);
	  });
	  setContext(ROUTE, route);
	  setContext(ROUTE_PARAMS, params);
	  setContext(FOCUS_ELEM, focusElement); // We need to call useNavigate after the route is set,
	  // so we can use the routes path for link resolution

	  var navigate = useNavigate(); // There is no need to unregister Routes in SSR since it will all be
	  // thrown away anyway

	  if (!isSSR) {
	    onDestroy(function () {
	      return unregisterRoute(id);
	    });
	  }

	  $$self.$$set = function ($$new_props) {
	    $$invalidate(23, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
	    $$invalidate(11, $$restProps = compute_rest_props($$props, omit_props_names));
	    if ('path' in $$new_props) $$invalidate(12, path = $$new_props.path);
	    if ('component' in $$new_props) $$invalidate(0, component = $$new_props.component);
	    if ('meta' in $$new_props) $$invalidate(13, meta = $$new_props.meta);
	    if ('primary' in $$new_props) $$invalidate(1, primary = $$new_props.primary);
	    if ('$$scope' in $$new_props) $$invalidate(18, $$scope = $$new_props.$$scope);
	  };

	  $$self.$$.update = function () {
	    if ($$self.$$.dirty &
	    /*path, $parentBase, meta, $location, primary*/
	    77834) {
	      {
	        // The route store will be re-computed whenever props, location or parentBase change
	        var isDefault = path === "";
	        var rawBase = join($parentBase, path);
	        var updatedRoute = {
	          id: id,
	          path: path,
	          meta: meta,
	          // If no path prop is given, this Route will act as the default Route
	          // that is rendered if no other Route in the Router is a match
	          default: isDefault,
	          fullPath: isDefault ? "" : rawBase,
	          base: isDefault ? $parentBase : extractBaseUri(rawBase, $location.pathname),
	          primary: primary,
	          focusElement: focusElement
	        };
	        route.set(updatedRoute); // If we're in SSR mode and the Route matches,
	        // `registerRoute` will return the match

	        $$invalidate(14, ssrMatch = registerRoute(updatedRoute));
	      }
	    }

	    if ($$self.$$.dirty &
	    /*ssrMatch, $activeRoute*/
	    49152) {
	      $$invalidate(2, isActive = !!(ssrMatch || $activeRoute && $activeRoute.id === id));
	    }

	    if ($$self.$$.dirty &
	    /*isActive, ssrMatch, $activeRoute*/
	    49156) {
	      if (isActive) {
	        var _ref3 = ssrMatch || $activeRoute,
	            activeParams = _ref3.params;

	        params.set(activeParams);
	      }
	    }
	  };

	  $$props = exclude_internal_props($$props);
	  return [component, primary, isActive, $location, $params, id, activeRoute, parentBase, location, params, navigate, $$restProps, path, meta, ssrMatch, $activeRoute, $parentBase, slots, $$scope];
	}

	var Route = /*#__PURE__*/function (_SvelteComponent) {
	  _inherits(Route, _SvelteComponent);

	  var _super = _createSuper$l(Route);

	  function Route(options) {
	    var _this;

	    _classCallCheck(this, Route);

	    _this = _super.call(this);
	    init(_assertThisInitialized(_this), options, instance$i, create_fragment$l, safe_not_equal, {
	      path: 12,
	      component: 0,
	      meta: 13,
	      primary: 1
	    });
	    return _this;
	  }

	  return Route;
	}(SvelteComponent);

	var Route$1 = Route;

	function _createSuper$k(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$k(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$k() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function create_fragment$k(ctx) {
	  var svg;
	  var path;
	  var mounted;
	  var dispose;
	  return {
	    c: function c() {
	      svg = svg_element("svg");
	      path = svg_element("path");
	      attr(path, "d", "M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z");
	      attr(path, "fill", "#4D5863");
	      attr(svg, "width", "16");
	      attr(svg, "height", "16");
	      attr(svg, "viewBox", "0 0 16 16");
	      attr(svg, "fill", "none");
	      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
	    },
	    m: function m(target, anchor) {
	      insert(target, svg, anchor);
	      append(svg, path);

	      if (!mounted) {
	        dispose = listen(svg, "click",
	        /*click_handler*/
	        ctx[0]);
	        mounted = true;
	      }
	    },
	    p: noop,
	    i: noop,
	    o: noop,
	    d: function d(detaching) {
	      if (detaching) detach(svg);
	      mounted = false;
	      dispose();
	    }
	  };
	}

	function instance$h($$self) {
	  function click_handler(event) {
	    bubble.call(this, $$self, event);
	  }

	  return [click_handler];
	}

	var BackButton = /*#__PURE__*/function (_SvelteComponent) {
	  _inherits(BackButton, _SvelteComponent);

	  var _super = _createSuper$k(BackButton);

	  function BackButton(options) {
	    var _this;

	    _classCallCheck(this, BackButton);

	    _this = _super.call(this);
	    init(_assertThisInitialized(_this), options, instance$h, create_fragment$k, safe_not_equal, {});
	    return _this;
	  }

	  return BackButton;
	}(SvelteComponent);

	function _createSuper$j(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$j(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$j() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function create_if_block$5(ctx) {
	  var div;
	  var backbutton;
	  var current;
	  backbutton = new BackButton({});
	  backbutton.$on("click",
	  /*onBackButtonClick*/
	  ctx[1]);
	  return {
	    c: function c() {
	      div = element("div");
	      create_component(backbutton.$$.fragment);
	      attr(div, "class", "back-button");
	    },
	    m: function m(target, anchor) {
	      insert(target, div, anchor);
	      mount_component(backbutton, div, null);
	      current = true;
	    },
	    p: noop,
	    i: function i(local) {
	      if (current) return;
	      transition_in(backbutton.$$.fragment, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(backbutton.$$.fragment, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      if (detaching) detach(div);
	      destroy_component(backbutton);
	    }
	  };
	}

	function create_fragment$j(ctx) {
	  var div2;
	  var t0;
	  var div0;
	  var t2;
	  var div1;
	  var current;
	  var mounted;
	  var dispose;
	  var if_block =
	  /*active*/
	  ctx[0] && create_if_block$5(ctx);
	  return {
	    c: function c() {
	      div2 = element("div");
	      if (if_block) if_block.c();
	      t0 = space();
	      div0 = element("div");
	      div0.textContent = "Integration Center";
	      t2 = space();
	      div1 = element("div");
	      div1.textContent = "My Active Flows";
	      attr(div0, "class", "title svelte-xb2ngz");
	      attr(div1, "class", "flows-link svelte-xb2ngz");
	      toggle_class(div1, "active",
	      /*active*/
	      ctx[0]);
	      attr(div2, "class", "title-bar svelte-xb2ngz");
	    },
	    m: function m(target, anchor) {
	      insert(target, div2, anchor);
	      if (if_block) if_block.m(div2, null);
	      append(div2, t0);
	      append(div2, div0);
	      append(div2, t2);
	      append(div2, div1);
	      current = true;

	      if (!mounted) {
	        dispose = listen(div1, "click",
	        /*toActiveFlows*/
	        ctx[2]);
	        mounted = true;
	      }
	    },
	    p: function p(ctx, _ref) {
	      var _ref2 = _slicedToArray(_ref, 1),
	          dirty = _ref2[0];

	      if (
	      /*active*/
	      ctx[0]) {
	        if (if_block) {
	          if_block.p(ctx, dirty);

	          if (dirty &
	          /*active*/
	          1) {
	            transition_in(if_block, 1);
	          }
	        } else {
	          if_block = create_if_block$5(ctx);
	          if_block.c();
	          transition_in(if_block, 1);
	          if_block.m(div2, t0);
	        }
	      } else if (if_block) {
	        group_outros();
	        transition_out(if_block, 1, 1, function () {
	          if_block = null;
	        });
	        check_outros();
	      }

	      if (dirty &
	      /*active*/
	      1) {
	        toggle_class(div1, "active",
	        /*active*/
	        ctx[0]);
	      }
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(if_block);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(if_block);
	      current = false;
	    },
	    d: function d(detaching) {
	      if (detaching) detach(div2);
	      if (if_block) if_block.d();
	      mounted = false;
	      dispose();
	    }
	  };
	}

	function instance$g($$self, $$props, $$invalidate) {
	  var navigate = $$props.navigate;
	  var _$$props$isPreviewMod = $$props.isPreviewMode,
	      isPreviewMode = _$$props$isPreviewMod === void 0 ? false : _$$props$isPreviewMod;
	  var active = false;

	  var onBackButtonClick = function onBackButtonClick() {
	    if (active) $$invalidate(0, active = false);
	    navigate("/");
	  };

	  var toActiveFlows = function toActiveFlows() {
	    if (!active && !isPreviewMode) $$invalidate(0, active = true);
	    if (!isPreviewMode) navigate("/active-flows");
	  };

	  $$self.$$set = function ($$props) {
	    if ('navigate' in $$props) $$invalidate(3, navigate = $$props.navigate);
	    if ('isPreviewMode' in $$props) $$invalidate(4, isPreviewMode = $$props.isPreviewMode);
	  };

	  return [active, onBackButtonClick, toActiveFlows, navigate, isPreviewMode];
	}

	var Header = /*#__PURE__*/function (_SvelteComponent) {
	  _inherits(Header, _SvelteComponent);

	  var _super = _createSuper$j(Header);

	  function Header(options) {
	    var _this;

	    _classCallCheck(this, Header);

	    _this = _super.call(this);
	    init(_assertThisInitialized(_this), options, instance$g, create_fragment$j, safe_not_equal, {
	      navigate: 3,
	      isPreviewMode: 4
	    });
	    return _this;
	  }

	  return Header;
	}(SvelteComponent);

	function _createSuper$i(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$i(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$i() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	var get_icon_slot_changes = function get_icon_slot_changes(dirty) {
	  return {};
	};

	var get_icon_slot_context = function get_icon_slot_context(ctx) {
	  return {};
	};

	function create_fragment$i(ctx) {
	  var button;
	  var div;
	  var span;
	  var t0;
	  var t1;
	  var button_class_value;
	  var current;
	  var mounted;
	  var dispose;
	  var icon_slot_template =
	  /*#slots*/
	  ctx[7].icon;
	  var icon_slot = create_slot(icon_slot_template, ctx,
	  /*$$scope*/
	  ctx[6], get_icon_slot_context);
	  return {
	    c: function c() {
	      button = element("button");
	      div = element("div");
	      span = element("span");
	      t0 = text(
	      /*text*/
	      ctx[1]);
	      t1 = space();
	      if (icon_slot) icon_slot.c();
	      attr(span, "class", "center");
	      attr(div, "class", "flex width svelte-pxzbhs");
	      attr(button, "class", button_class_value = "" + (
	      /*type*/
	      ctx[0] + " " + (
	      /*$$props*/
	      ctx[5].class || '') + " svelte-pxzbhs"));
	      attr(button, "type",
	      /*buttonType*/
	      ctx[2]);
	      button.disabled =
	      /*disabled*/
	      ctx[3];
	      toggle_class(button, "full-width",
	      /*fullWidth*/
	      ctx[4]);
	    },
	    m: function m(target, anchor) {
	      insert(target, button, anchor);
	      append(button, div);
	      append(div, span);
	      append(span, t0);
	      append(div, t1);

	      if (icon_slot) {
	        icon_slot.m(div, null);
	      }

	      current = true;

	      if (!mounted) {
	        dispose = listen(button, "click",
	        /*click_handler*/
	        ctx[8]);
	        mounted = true;
	      }
	    },
	    p: function p(ctx, _ref) {
	      var _ref2 = _slicedToArray(_ref, 1),
	          dirty = _ref2[0];

	      if (!current || dirty &
	      /*text*/
	      2) set_data(t0,
	      /*text*/
	      ctx[1]);

	      if (icon_slot) {
	        if (icon_slot.p && (!current || dirty &
	        /*$$scope*/
	        64)) {
	          update_slot_base(icon_slot, icon_slot_template, ctx,
	          /*$$scope*/
	          ctx[6], !current ? get_all_dirty_from_scope(
	          /*$$scope*/
	          ctx[6]) : get_slot_changes(icon_slot_template,
	          /*$$scope*/
	          ctx[6], dirty, get_icon_slot_changes), get_icon_slot_context);
	        }
	      }

	      if (!current || dirty &
	      /*type, $$props*/
	      33 && button_class_value !== (button_class_value = "" + (
	      /*type*/
	      ctx[0] + " " + (
	      /*$$props*/
	      ctx[5].class || '') + " svelte-pxzbhs"))) {
	        attr(button, "class", button_class_value);
	      }

	      if (!current || dirty &
	      /*buttonType*/
	      4) {
	        attr(button, "type",
	        /*buttonType*/
	        ctx[2]);
	      }

	      if (!current || dirty &
	      /*disabled*/
	      8) {
	        button.disabled =
	        /*disabled*/
	        ctx[3];
	      }

	      if (dirty &
	      /*type, $$props, fullWidth*/
	      49) {
	        toggle_class(button, "full-width",
	        /*fullWidth*/
	        ctx[4]);
	      }
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(icon_slot, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(icon_slot, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      if (detaching) detach(button);
	      if (icon_slot) icon_slot.d(detaching);
	      mounted = false;
	      dispose();
	    }
	  };
	}

	function instance$f($$self, $$props, $$invalidate) {
	  var _$$props = $$props,
	      _$$props$$$slots = _$$props.$$slots,
	      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
	      $$scope = _$$props.$$scope;
	  var _$$props2 = $$props,
	      _$$props2$type = _$$props2.type,
	      type = _$$props2$type === void 0 ? "primary" : _$$props2$type;
	  var _$$props3 = $$props,
	      _$$props3$text = _$$props3.text,
	      text = _$$props3$text === void 0 ? "" : _$$props3$text;
	  var _$$props4 = $$props,
	      _$$props4$buttonType = _$$props4.buttonType,
	      buttonType = _$$props4$buttonType === void 0 ? "button" : _$$props4$buttonType;
	  var _$$props5 = $$props,
	      _$$props5$disabled = _$$props5.disabled,
	      disabled = _$$props5$disabled === void 0 ? false : _$$props5$disabled;
	  var _$$props6 = $$props,
	      _$$props6$fullWidth = _$$props6.fullWidth,
	      fullWidth = _$$props6$fullWidth === void 0 ? false : _$$props6$fullWidth;

	  function click_handler(event) {
	    bubble.call(this, $$self, event);
	  }

	  $$self.$$set = function ($$new_props) {
	    $$invalidate(5, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
	    if ('type' in $$new_props) $$invalidate(0, type = $$new_props.type);
	    if ('text' in $$new_props) $$invalidate(1, text = $$new_props.text);
	    if ('buttonType' in $$new_props) $$invalidate(2, buttonType = $$new_props.buttonType);
	    if ('disabled' in $$new_props) $$invalidate(3, disabled = $$new_props.disabled);
	    if ('fullWidth' in $$new_props) $$invalidate(4, fullWidth = $$new_props.fullWidth);
	    if ('$$scope' in $$new_props) $$invalidate(6, $$scope = $$new_props.$$scope);
	  };

	  $$props = exclude_internal_props($$props);
	  return [type, text, buttonType, disabled, fullWidth, $$props, $$scope, slots, click_handler];
	}

	var Button = /*#__PURE__*/function (_SvelteComponent) {
	  _inherits(Button, _SvelteComponent);

	  var _super = _createSuper$i(Button);

	  function Button(options) {
	    var _this;

	    _classCallCheck(this, Button);

	    _this = _super.call(this);
	    init(_assertThisInitialized(_this), options, instance$f, create_fragment$i, safe_not_equal, {
	      type: 0,
	      text: 1,
	      buttonType: 2,
	      disabled: 3,
	      fullWidth: 4
	    });
	    return _this;
	  }

	  return Button;
	}(SvelteComponent);

	function _createSuper$h(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$h(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$h() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function create_fragment$h(ctx) {
	  var div;
	  var current;
	  var default_slot_template =
	  /*#slots*/
	  ctx[2].default;
	  var default_slot = create_slot(default_slot_template, ctx,
	  /*$$scope*/
	  ctx[1], null);
	  return {
	    c: function c() {
	      div = element("div");
	      if (default_slot) default_slot.c();
	      attr(div, "class", "step svelte-eiejwr");
	      toggle_class(div, "inactive",
	      /*inactive*/
	      ctx[0]);
	    },
	    m: function m(target, anchor) {
	      insert(target, div, anchor);

	      if (default_slot) {
	        default_slot.m(div, null);
	      }

	      current = true;
	    },
	    p: function p(ctx, _ref) {
	      var _ref2 = _slicedToArray(_ref, 1),
	          dirty = _ref2[0];

	      if (default_slot) {
	        if (default_slot.p && (!current || dirty &
	        /*$$scope*/
	        2)) {
	          update_slot_base(default_slot, default_slot_template, ctx,
	          /*$$scope*/
	          ctx[1], !current ? get_all_dirty_from_scope(
	          /*$$scope*/
	          ctx[1]) : get_slot_changes(default_slot_template,
	          /*$$scope*/
	          ctx[1], dirty, null), null);
	        }
	      }

	      if (dirty &
	      /*inactive*/
	      1) {
	        toggle_class(div, "inactive",
	        /*inactive*/
	        ctx[0]);
	      }
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(default_slot, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(default_slot, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      if (detaching) detach(div);
	      if (default_slot) default_slot.d(detaching);
	    }
	  };
	}

	function instance$e($$self, $$props, $$invalidate) {
	  var _$$props$$$slots = $$props.$$slots,
	      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
	      $$scope = $$props.$$scope;
	  var inactive = $$props.inactive;

	  $$self.$$set = function ($$props) {
	    if ('inactive' in $$props) $$invalidate(0, inactive = $$props.inactive);
	    if ('$$scope' in $$props) $$invalidate(1, $$scope = $$props.$$scope);
	  };

	  return [inactive, $$scope, slots];
	}

	var CredentialStep = /*#__PURE__*/function (_SvelteComponent) {
	  _inherits(CredentialStep, _SvelteComponent);

	  var _super = _createSuper$h(CredentialStep);

	  function CredentialStep(options) {
	    var _this;

	    _classCallCheck(this, CredentialStep);

	    _this = _super.call(this);
	    init(_assertThisInitialized(_this), options, instance$e, create_fragment$h, safe_not_equal, {
	      inactive: 0
	    });
	    return _this;
	  }

	  return CredentialStep;
	}(SvelteComponent);

	function _createSuper$g(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$g(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$g() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function create_fragment$g(ctx) {
	  var div;
	  var current;
	  var default_slot_template =
	  /*#slots*/
	  ctx[1].default;
	  var default_slot = create_slot(default_slot_template, ctx,
	  /*$$scope*/
	  ctx[0], null);
	  return {
	    c: function c() {
	      div = element("div");
	      if (default_slot) default_slot.c();
	      attr(div, "class", "multistep-master-form svelte-n117uy");
	    },
	    m: function m(target, anchor) {
	      insert(target, div, anchor);

	      if (default_slot) {
	        default_slot.m(div, null);
	      }

	      current = true;
	    },
	    p: function p(ctx, _ref) {
	      var _ref2 = _slicedToArray(_ref, 1),
	          dirty = _ref2[0];

	      if (default_slot) {
	        if (default_slot.p && (!current || dirty &
	        /*$$scope*/
	        1)) {
	          update_slot_base(default_slot, default_slot_template, ctx,
	          /*$$scope*/
	          ctx[0], !current ? get_all_dirty_from_scope(
	          /*$$scope*/
	          ctx[0]) : get_slot_changes(default_slot_template,
	          /*$$scope*/
	          ctx[0], dirty, null), null);
	        }
	      }
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(default_slot, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(default_slot, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      if (detaching) detach(div);
	      if (default_slot) default_slot.d(detaching);
	    }
	  };
	}

	function instance$d($$self, $$props, $$invalidate) {
	  var _$$props$$$slots = $$props.$$slots,
	      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
	      $$scope = $$props.$$scope;

	  $$self.$$set = function ($$props) {
	    if ('$$scope' in $$props) $$invalidate(0, $$scope = $$props.$$scope);
	  };

	  return [$$scope, slots];
	}

	var CredentialsWizard = /*#__PURE__*/function (_SvelteComponent) {
	  _inherits(CredentialsWizard, _SvelteComponent);

	  var _super = _createSuper$g(CredentialsWizard);

	  function CredentialsWizard(options) {
	    var _this;

	    _classCallCheck(this, CredentialsWizard);

	    _this = _super.call(this);
	    init(_assertThisInitialized(_this), options, instance$d, create_fragment$g, safe_not_equal, {});
	    return _this;
	  }

	  return CredentialsWizard;
	}(SvelteComponent);

	function _createSuper$f(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$f(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$f() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function create_fragment$f(ctx) {
	  var svg;
	  var path;
	  return {
	    c: function c() {
	      svg = svg_element("svg");
	      path = svg_element("path");
	      attr(path, "d", "M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z");
	      attr(path, "fill", "white");
	      attr(svg, "width", "18");
	      attr(svg, "height", "18");
	      attr(svg, "viewBox", "0 0 18 18");
	      attr(svg, "fill", "none");
	      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
	    },
	    m: function m(target, anchor) {
	      insert(target, svg, anchor);
	      append(svg, path);
	    },
	    p: noop,
	    i: noop,
	    o: noop,
	    d: function d(detaching) {
	      if (detaching) detach(svg);
	    }
	  };
	}

	var ButtonIcon = /*#__PURE__*/function (_SvelteComponent) {
	  _inherits(ButtonIcon, _SvelteComponent);

	  var _super = _createSuper$f(ButtonIcon);

	  function ButtonIcon(options) {
	    var _this;

	    _classCallCheck(this, ButtonIcon);

	    _this = _super.call(this);
	    init(_assertThisInitialized(_this), options, null, create_fragment$f, safe_not_equal, {});
	    return _this;
	  }

	  return ButtonIcon;
	}(SvelteComponent);

	function _createSuper$e(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$e(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$e() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var Boolean_1$2 = globals.Boolean;

	function get_each_context$5(ctx, list, i) {
	  var child_ctx = ctx.slice();
	  child_ctx[17] = list[i];
	  child_ctx[19] = i;
	  return child_ctx;
	}

	function get_each_context_1$2(ctx, list, i) {
	  var child_ctx = ctx.slice();
	  child_ctx[17] = list[i];
	  child_ctx[21] = i;
	  return child_ctx;
	}

	function get_each_context_2$1(ctx, list, i) {
	  var child_ctx = ctx.slice();
	  child_ctx[17] = list[i];
	  child_ctx[19] = i;
	  return child_ctx;
	} // (70:0) {#if shown}


	function create_if_block$4(ctx) {
	  var div5;
	  var div4;
	  var div3;
	  var backbutton;
	  var t0;
	  var div2;
	  var credentialswizard;
	  var t1;
	  var div1;
	  var t2;
	  var div0;
	  var div0_class_value;
	  var t3;
	  var div5_class_value;
	  var div5_style_value;
	  var current;
	  backbutton = new BackButton({});
	  backbutton.$on("click",
	  /*stepBack*/
	  ctx[11]);
	  credentialswizard = new CredentialsWizard({
	    props: {
	      $$slots: {
	        default: [create_default_slot$1]
	      },
	      $$scope: {
	        ctx: ctx
	      }
	    }
	  });
	  var each_value =
	  /*currentElements*/
	  ctx[7];
	  var each_blocks = [];

	  for (var i = 0; i < each_value.length; i += 1) {
	    each_blocks[i] = create_each_block$5(get_each_context$5(ctx, each_value, i));
	  }

	  var if_block =
	  /*finished*/
	  ctx[6] && create_if_block_1$2();
	  return {
	    c: function c() {
	      div5 = element("div");
	      div4 = element("div");
	      div3 = element("div");
	      create_component(backbutton.$$.fragment);
	      t0 = space();
	      div2 = element("div");
	      create_component(credentialswizard.$$.fragment);
	      t1 = space();
	      div1 = element("div");

	      for (var _i = 0; _i < each_blocks.length; _i += 1) {
	        each_blocks[_i].c();
	      }

	      t2 = space();
	      div0 = element("div");
	      t3 = space();
	      if (if_block) if_block.c();
	      attr(div0, "class", div0_class_value = "" + (null_to_empty(
	      /*finished*/
	      ctx[6] ? "dot-active" : "dot") + " svelte-8r0way"));
	      attr(div1, "class", "dots svelte-8r0way");
	      attr(div2, "class", "container svelte-8r0way");
	      attr(div3, "class", "modal-wrapper svelte-8r0way");
	      attr(div4, "class", "modal-wrap svelte-8r0way");
	      attr(div5, "class", div5_class_value = "modal " +
	      /*className*/
	      ctx[1] + " svelte-8r0way");
	      attr(div5, "style", div5_style_value =
	      /*deleteClass*/
	      ctx[2] !== "" ? "opacity: inherit;" : "");
	      toggle_class(div5, "above",
	      /*above*/
	      ctx[8]);
	    },
	    m: function m(target, anchor) {
	      insert(target, div5, anchor);
	      append(div5, div4);
	      append(div4, div3);
	      mount_component(backbutton, div3, null);
	      append(div3, t0);
	      append(div3, div2);
	      mount_component(credentialswizard, div2, null);
	      append(div2, t1);
	      append(div2, div1);

	      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
	        each_blocks[_i2].m(div1, null);
	      }

	      append(div1, t2);
	      append(div1, div0);
	      append(div2, t3);
	      if (if_block) if_block.m(div2, null);
	      current = true;
	    },
	    p: function p(ctx, dirty) {
	      var credentialswizard_changes = {};

	      if (dirty &
	      /*$$scope, currentTemplate, currentElements, finished, currentmodalstep*/
	      8388840) {
	        credentialswizard_changes.$$scope = {
	          dirty: dirty,
	          ctx: ctx
	        };
	      }

	      credentialswizard.$set(credentialswizard_changes);

	      if (dirty &
	      /*currentmodalstep, finished, currentElements*/
	      224) {
	        each_value =
	        /*currentElements*/
	        ctx[7];

	        var _i3;

	        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
	          var child_ctx = get_each_context$5(ctx, each_value, _i3);

	          if (each_blocks[_i3]) {
	            each_blocks[_i3].p(child_ctx, dirty);
	          } else {
	            each_blocks[_i3] = create_each_block$5(child_ctx);

	            each_blocks[_i3].c();

	            each_blocks[_i3].m(div1, t2);
	          }
	        }

	        for (; _i3 < each_blocks.length; _i3 += 1) {
	          each_blocks[_i3].d(1);
	        }

	        each_blocks.length = each_value.length;
	      }

	      if (!current || dirty &
	      /*finished*/
	      64 && div0_class_value !== (div0_class_value = "" + (null_to_empty(
	      /*finished*/
	      ctx[6] ? "dot-active" : "dot") + " svelte-8r0way"))) {
	        attr(div0, "class", div0_class_value);
	      }

	      if (
	      /*finished*/
	      ctx[6]) {
	        if (if_block) {
	          if (dirty &
	          /*finished*/
	          64) {
	            transition_in(if_block, 1);
	          }
	        } else {
	          if_block = create_if_block_1$2();
	          if_block.c();
	          transition_in(if_block, 1);
	          if_block.m(div2, null);
	        }
	      } else if (if_block) {
	        group_outros();
	        transition_out(if_block, 1, 1, function () {
	          if_block = null;
	        });
	        check_outros();
	      }

	      if (!current || dirty &
	      /*className*/
	      2 && div5_class_value !== (div5_class_value = "modal " +
	      /*className*/
	      ctx[1] + " svelte-8r0way")) {
	        attr(div5, "class", div5_class_value);
	      }

	      if (!current || dirty &
	      /*deleteClass*/
	      4 && div5_style_value !== (div5_style_value =
	      /*deleteClass*/
	      ctx[2] !== "" ? "opacity: inherit;" : "")) {
	        attr(div5, "style", div5_style_value);
	      }

	      if (dirty &
	      /*className, above*/
	      258) {
	        toggle_class(div5, "above",
	        /*above*/
	        ctx[8]);
	      }
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(backbutton.$$.fragment, local);
	      transition_in(credentialswizard.$$.fragment, local);
	      transition_in(if_block);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(backbutton.$$.fragment, local);
	      transition_out(credentialswizard.$$.fragment, local);
	      transition_out(if_block);
	      current = false;
	    },
	    d: function d(detaching) {
	      if (detaching) detach(div5);
	      destroy_component(backbutton);
	      destroy_component(credentialswizard);
	      destroy_each(each_blocks, detaching);
	      if (if_block) if_block.d();
	    }
	  };
	} // (97:22) 


	function create_icon_slot(ctx) {
	  var span;
	  var buttonicon;
	  var current;
	  buttonicon = new ButtonIcon({});
	  return {
	    c: function c() {
	      span = element("span");
	      create_component(buttonicon.$$.fragment);
	      attr(span, "class", "icon svelte-8r0way");
	      attr(span, "slot", "icon");
	    },
	    m: function m(target, anchor) {
	      insert(target, span, anchor);
	      mount_component(buttonicon, span, null);
	      current = true;
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(buttonicon.$$.fragment, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(buttonicon.$$.fragment, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      if (detaching) detach(span);
	      destroy_component(buttonicon);
	    }
	  };
	} // (83:14) <CredentialStep                 inactive={i === currentmodalstep && !finished ? false : true}               >


	function create_default_slot_2(ctx) {
	  var div2;
	  var div0;
	  var img;
	  var img_src_value;
	  var t0;
	  var div1;
	  var span;
	  var t2;
	  var button;
	  var current;
	  button = new Button({
	    props: {
	      type: "primary",
	      text: "Sign in to " +
	      /*step*/
	      ctx[17].name,
	      $$slots: {
	        icon: [create_icon_slot]
	      },
	      $$scope: {
	        ctx: ctx
	      }
	    }
	  });
	  button.$on("click",
	  /*nextStep*/
	  ctx[10]);
	  return {
	    c: function c() {
	      div2 = element("div");
	      div0 = element("div");
	      img = element("img");
	      t0 = space();
	      div1 = element("div");
	      span = element("span");
	      span.textContent = "Choose your account";
	      t2 = space();
	      create_component(button.$$.fragment);
	      if (!src_url_equal(img.src, img_src_value =
	      /*step*/
	      ctx[17].logo)) attr(img, "src", img_src_value);
	      attr(img, "alt", "pipe");
	      attr(img, "class", "svelte-8r0way");
	      attr(div0, "class", "img-container svelte-8r0way");
	      attr(span, "class", "svelte-8r0way");
	      attr(div1, "class", "text-button svelte-8r0way");
	      attr(div2, "class", "content svelte-8r0way");
	    },
	    m: function m(target, anchor) {
	      insert(target, div2, anchor);
	      append(div2, div0);
	      append(div0, img);
	      append(div2, t0);
	      append(div2, div1);
	      append(div1, span);
	      append(div1, t2);
	      mount_component(button, div1, null);
	      current = true;
	    },
	    p: function p(ctx, dirty) {
	      if (!current || dirty &
	      /*currentElements*/
	      128 && !src_url_equal(img.src, img_src_value =
	      /*step*/
	      ctx[17].logo)) {
	        attr(img, "src", img_src_value);
	      }

	      var button_changes = {};
	      if (dirty &
	      /*currentElements*/
	      128) button_changes.text = "Sign in to " +
	      /*step*/
	      ctx[17].name;

	      if (dirty &
	      /*$$scope*/
	      8388608) {
	        button_changes.$$scope = {
	          dirty: dirty,
	          ctx: ctx
	        };
	      }

	      button.$set(button_changes);
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(button.$$.fragment, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(button.$$.fragment, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      if (detaching) detach(div2);
	      destroy_component(button);
	    }
	  };
	} // (82:12) {#each currentElements as step, i}


	function create_each_block_2$1(ctx) {
	  var credentialstep;
	  var current;
	  credentialstep = new CredentialStep({
	    props: {
	      inactive:
	      /*i*/
	      ctx[19] ===
	      /*currentmodalstep*/
	      ctx[5] && !
	      /*finished*/
	      ctx[6] ? false : true,
	      $$slots: {
	        default: [create_default_slot_2]
	      },
	      $$scope: {
	        ctx: ctx
	      }
	    }
	  });
	  return {
	    c: function c() {
	      create_component(credentialstep.$$.fragment);
	    },
	    m: function m(target, anchor) {
	      mount_component(credentialstep, target, anchor);
	      current = true;
	    },
	    p: function p(ctx, dirty) {
	      var credentialstep_changes = {};
	      if (dirty &
	      /*currentmodalstep, finished*/
	      96) credentialstep_changes.inactive =
	      /*i*/
	      ctx[19] ===
	      /*currentmodalstep*/
	      ctx[5] && !
	      /*finished*/
	      ctx[6] ? false : true;

	      if (dirty &
	      /*$$scope, currentElements*/
	      8388736) {
	        credentialstep_changes.$$scope = {
	          dirty: dirty,
	          ctx: ctx
	        };
	      }

	      credentialstep.$set(credentialstep_changes);
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(credentialstep.$$.fragment, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(credentialstep.$$.fragment, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      destroy_component(credentialstep, detaching);
	    }
	  };
	} // (105:12) {#if finished}


	function create_if_block_2$1(ctx) {
	  var credentialstep;
	  var current;
	  credentialstep = new CredentialStep({
	    props: {
	      inactive: false,
	      $$slots: {
	        default: [create_default_slot_1]
	      },
	      $$scope: {
	        ctx: ctx
	      }
	    }
	  });
	  return {
	    c: function c() {
	      create_component(credentialstep.$$.fragment);
	    },
	    m: function m(target, anchor) {
	      mount_component(credentialstep, target, anchor);
	      current = true;
	    },
	    p: function p(ctx, dirty) {
	      var credentialstep_changes = {};

	      if (dirty &
	      /*$$scope, currentTemplate, currentElements*/
	      8388744) {
	        credentialstep_changes.$$scope = {
	          dirty: dirty,
	          ctx: ctx
	        };
	      }

	      credentialstep.$set(credentialstep_changes);
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(credentialstep.$$.fragment, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(credentialstep.$$.fragment, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      destroy_component(credentialstep, detaching);
	    }
	  };
	} // (109:20) {#each currentElements as step, index}


	function create_each_block_1$2(ctx) {
	  var img;
	  var img_src_value;
	  return {
	    c: function c() {
	      img = element("img");
	      if (!src_url_equal(img.src, img_src_value =
	      /*step*/
	      ctx[17].logo)) attr(img, "src", img_src_value);
	      attr(img, "alt", "Component " + (
	      /*index*/
	      ctx[21] + 1) + " logo");
	      attr(img, "class", "svelte-8r0way");
	    },
	    m: function m(target, anchor) {
	      insert(target, img, anchor);
	    },
	    p: function p(ctx, dirty) {
	      if (dirty &
	      /*currentElements*/
	      128 && !src_url_equal(img.src, img_src_value =
	      /*step*/
	      ctx[17].logo)) {
	        attr(img, "src", img_src_value);
	      }
	    },
	    d: function d(detaching) {
	      if (detaching) detach(img);
	    }
	  };
	} // (106:14) <CredentialStep inactive={false}>


	function create_default_slot_1(ctx) {
	  var div2;
	  var div0;
	  var t0;
	  var div1;
	  var t1_value =
	  /*currentTemplate*/
	  ctx[3].description + "";
	  var t1;
	  var each_value_1 =
	  /*currentElements*/
	  ctx[7];
	  var each_blocks = [];

	  for (var i = 0; i < each_value_1.length; i += 1) {
	    each_blocks[i] = create_each_block_1$2(get_each_context_1$2(ctx, each_value_1, i));
	  }

	  return {
	    c: function c() {
	      div2 = element("div");
	      div0 = element("div");

	      for (var _i4 = 0; _i4 < each_blocks.length; _i4 += 1) {
	        each_blocks[_i4].c();
	      }

	      t0 = space();
	      div1 = element("div");
	      t1 = text(t1_value);
	      attr(div0, "class", "images svelte-8r0way");
	      attr(div1, "class", "description svelte-8r0way");
	      attr(div2, "class", "laststep");
	    },
	    m: function m(target, anchor) {
	      insert(target, div2, anchor);
	      append(div2, div0);

	      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
	        each_blocks[_i5].m(div0, null);
	      }

	      append(div2, t0);
	      append(div2, div1);
	      append(div1, t1);
	    },
	    p: function p(ctx, dirty) {
	      if (dirty &
	      /*currentElements*/
	      128) {
	        each_value_1 =
	        /*currentElements*/
	        ctx[7];

	        var _i6;

	        for (_i6 = 0; _i6 < each_value_1.length; _i6 += 1) {
	          var child_ctx = get_each_context_1$2(ctx, each_value_1, _i6);

	          if (each_blocks[_i6]) {
	            each_blocks[_i6].p(child_ctx, dirty);
	          } else {
	            each_blocks[_i6] = create_each_block_1$2(child_ctx);

	            each_blocks[_i6].c();

	            each_blocks[_i6].m(div0, null);
	          }
	        }

	        for (; _i6 < each_blocks.length; _i6 += 1) {
	          each_blocks[_i6].d(1);
	        }

	        each_blocks.length = each_value_1.length;
	      }

	      if (dirty &
	      /*currentTemplate*/
	      8 && t1_value !== (t1_value =
	      /*currentTemplate*/
	      ctx[3].description + "")) set_data(t1, t1_value);
	    },
	    d: function d(detaching) {
	      if (detaching) detach(div2);
	      destroy_each(each_blocks, detaching);
	    }
	  };
	} // (81:10) <CredentialsWizard>


	function create_default_slot$1(ctx) {
	  var t;
	  var if_block_anchor;
	  var current;
	  var each_value_2 =
	  /*currentElements*/
	  ctx[7];
	  var each_blocks = [];

	  for (var i = 0; i < each_value_2.length; i += 1) {
	    each_blocks[i] = create_each_block_2$1(get_each_context_2$1(ctx, each_value_2, i));
	  }

	  var out = function out(i) {
	    return transition_out(each_blocks[i], 1, 1, function () {
	      each_blocks[i] = null;
	    });
	  };

	  var if_block =
	  /*finished*/
	  ctx[6] && create_if_block_2$1(ctx);
	  return {
	    c: function c() {
	      for (var _i7 = 0; _i7 < each_blocks.length; _i7 += 1) {
	        each_blocks[_i7].c();
	      }

	      t = space();
	      if (if_block) if_block.c();
	      if_block_anchor = empty();
	    },
	    m: function m(target, anchor) {
	      for (var _i8 = 0; _i8 < each_blocks.length; _i8 += 1) {
	        each_blocks[_i8].m(target, anchor);
	      }

	      insert(target, t, anchor);
	      if (if_block) if_block.m(target, anchor);
	      insert(target, if_block_anchor, anchor);
	      current = true;
	    },
	    p: function p(ctx, dirty) {
	      if (dirty &
	      /*currentmodalstep, finished, currentElements, nextStep*/
	      1248) {
	        each_value_2 =
	        /*currentElements*/
	        ctx[7];

	        var _i9;

	        for (_i9 = 0; _i9 < each_value_2.length; _i9 += 1) {
	          var child_ctx = get_each_context_2$1(ctx, each_value_2, _i9);

	          if (each_blocks[_i9]) {
	            each_blocks[_i9].p(child_ctx, dirty);

	            transition_in(each_blocks[_i9], 1);
	          } else {
	            each_blocks[_i9] = create_each_block_2$1(child_ctx);

	            each_blocks[_i9].c();

	            transition_in(each_blocks[_i9], 1);

	            each_blocks[_i9].m(t.parentNode, t);
	          }
	        }

	        group_outros();

	        for (_i9 = each_value_2.length; _i9 < each_blocks.length; _i9 += 1) {
	          out(_i9);
	        }

	        check_outros();
	      }

	      if (
	      /*finished*/
	      ctx[6]) {
	        if (if_block) {
	          if_block.p(ctx, dirty);

	          if (dirty &
	          /*finished*/
	          64) {
	            transition_in(if_block, 1);
	          }
	        } else {
	          if_block = create_if_block_2$1(ctx);
	          if_block.c();
	          transition_in(if_block, 1);
	          if_block.m(if_block_anchor.parentNode, if_block_anchor);
	        }
	      } else if (if_block) {
	        group_outros();
	        transition_out(if_block, 1, 1, function () {
	          if_block = null;
	        });
	        check_outros();
	      }
	    },
	    i: function i(local) {
	      if (current) return;

	      for (var _i10 = 0; _i10 < each_value_2.length; _i10 += 1) {
	        transition_in(each_blocks[_i10]);
	      }

	      transition_in(if_block);
	      current = true;
	    },
	    o: function o(local) {
	      each_blocks = each_blocks.filter(Boolean_1$2);

	      for (var _i11 = 0; _i11 < each_blocks.length; _i11 += 1) {
	        transition_out(each_blocks[_i11]);
	      }

	      transition_out(if_block);
	      current = false;
	    },
	    d: function d(detaching) {
	      destroy_each(each_blocks, detaching);
	      if (detaching) detach(t);
	      if (if_block) if_block.d(detaching);
	      if (detaching) detach(if_block_anchor);
	    }
	  };
	} // (121:12) {#each currentElements as step, i}


	function create_each_block$5(ctx) {
	  var div;
	  var div_class_value;
	  return {
	    c: function c() {
	      div = element("div");
	      attr(div, "class", div_class_value = "" + (null_to_empty(
	      /*i*/
	      ctx[19] ===
	      /*currentmodalstep*/
	      ctx[5] && !
	      /*finished*/
	      ctx[6] ? "dot-active" : "dot") + " svelte-8r0way"));
	    },
	    m: function m(target, anchor) {
	      insert(target, div, anchor);
	    },
	    p: function p(ctx, dirty) {
	      if (dirty &
	      /*currentmodalstep, finished*/
	      96 && div_class_value !== (div_class_value = "" + (null_to_empty(
	      /*i*/
	      ctx[19] ===
	      /*currentmodalstep*/
	      ctx[5] && !
	      /*finished*/
	      ctx[6] ? "dot-active" : "dot") + " svelte-8r0way"))) {
	        attr(div, "class", div_class_value);
	      }
	    },
	    d: function d(detaching) {
	      if (detaching) detach(div);
	    }
	  };
	} // (130:10) {#if finished}


	function create_if_block_1$2(ctx) {
	  var div;
	  var button;
	  var current;
	  button = new Button({
	    props: {
	      type: "primary",
	      text: "Activate"
	    }
	  });
	  return {
	    c: function c() {
	      div = element("div");
	      create_component(button.$$.fragment);
	      attr(div, "class", "button-bottom svelte-8r0way");
	    },
	    m: function m(target, anchor) {
	      insert(target, div, anchor);
	      mount_component(button, div, null);
	      current = true;
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(button.$$.fragment, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(button.$$.fragment, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      if (detaching) detach(div);
	      destroy_component(button);
	    }
	  };
	}

	function create_fragment$e(ctx) {
	  var if_block_anchor;
	  var current;
	  var mounted;
	  var dispose;
	  var if_block =
	  /*shown*/
	  ctx[0] && create_if_block$4(ctx);
	  return {
	    c: function c() {
	      if (if_block) if_block.c();
	      if_block_anchor = empty();
	    },
	    m: function m(target, anchor) {
	      if (if_block) if_block.m(target, anchor);
	      insert(target, if_block_anchor, anchor);
	      current = true;

	      if (!mounted) {
	        dispose = listen(window, "keydown",
	        /*keydown_handler*/
	        ctx[15]);
	        mounted = true;
	      }
	    },
	    p: function p(ctx, _ref) {
	      var _ref2 = _slicedToArray(_ref, 1),
	          dirty = _ref2[0];

	      if (
	      /*shown*/
	      ctx[0]) {
	        if (if_block) {
	          if_block.p(ctx, dirty);

	          if (dirty &
	          /*shown*/
	          1) {
	            transition_in(if_block, 1);
	          }
	        } else {
	          if_block = create_if_block$4(ctx);
	          if_block.c();
	          transition_in(if_block, 1);
	          if_block.m(if_block_anchor.parentNode, if_block_anchor);
	        }
	      } else if (if_block) {
	        group_outros();
	        transition_out(if_block, 1, 1, function () {
	          if_block = null;
	        });
	        check_outros();
	      }
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(if_block);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(if_block);
	      current = false;
	    },
	    d: function d(detaching) {
	      if (if_block) if_block.d(detaching);
	      if (detaching) detach(if_block_anchor);
	      mounted = false;
	      dispose();
	    }
	  };
	}

	function instance$c($$self, $$props, $$invalidate) {
	  var currentElements;
	  var above;
	  var _$$props$shown = $$props.shown,
	      shown = _$$props$shown === void 0 ? false : _$$props$shown;
	  var _$$props$size = $$props.size,
	      size = _$$props$size === void 0 ? "" : _$$props$size;
	  var _$$props$className = $$props.className,
	      className = _$$props$className === void 0 ? "" : _$$props$className;
	  var _$$props$deleteClass = $$props.deleteClass,
	      deleteClass = _$$props$deleteClass === void 0 ? "" : _$$props$deleteClass;
	  var currentTemplate = $$props.currentTemplate;
	  var _$$props$components = $$props.components,
	      components = _$$props$components === void 0 ? [] : _$$props$components;

	  var buildCurrentTemplate = function buildCurrentTemplate(nodes) {
	    return nodes === null || nodes === void 0 ? void 0 : nodes.map(function (_ref3) {
	      var componentId = _ref3.componentId;
	      var comp = components === null || components === void 0 ? void 0 : components.find(function (c) {
	        return c._id === componentId;
	      });
	      return {
	        logo: comp.logo,
	        name: comp.name
	      };
	    }).filter(Boolean);
	  };

	  var currentmodalstep = 0;
	  var finished = false;
	  var dispatch = createEventDispatcher();

	  function show() {
	    $$invalidate(0, shown = true);
	  }

	  function hide() {
	    $$invalidate(0, shown = false);
	  }

	  var nextStep = function nextStep() {

	    if (currentmodalstep + 1 < currentElements.length) {
	      $$invalidate(5, currentmodalstep += 1);
	    } else if (currentmodalstep === currentElements.length - 1) {
	      $$invalidate(6, finished = true);
	    }
	  };

	  var stepBack = function stepBack() {
	    if (finished) {
	      $$invalidate(6, finished = false);
	    } else {
	      if (currentmodalstep === 0) {
	        $$invalidate(0, shown = false);
	      } else if (currentmodalstep > 0) {
	        $$invalidate(5, currentmodalstep -= 1);
	      }
	    }
	  };

	  var keydown_handler = function keydown_handler(e) {
	    if (e.keyCode == 27) {
	      hide();
	      dispatch("hide");
	    }
	  };

	  $$self.$$set = function ($$props) {
	    if ('shown' in $$props) $$invalidate(0, shown = $$props.shown);
	    if ('size' in $$props) $$invalidate(12, size = $$props.size);
	    if ('className' in $$props) $$invalidate(1, className = $$props.className);
	    if ('deleteClass' in $$props) $$invalidate(2, deleteClass = $$props.deleteClass);
	    if ('currentTemplate' in $$props) $$invalidate(3, currentTemplate = $$props.currentTemplate);
	    if ('components' in $$props) $$invalidate(13, components = $$props.components);
	  };

	  $$self.$$.update = function () {
	    if ($$self.$$.dirty &
	    /*currentTemplate*/
	    8) {
	      $$invalidate(7, currentElements = buildCurrentTemplate(currentTemplate.graph.nodes));
	    }

	    if ($$self.$$.dirty &
	    /*size*/
	    4096) {
	      $$invalidate(8, above = size === "small" ? true : false);
	    }
	  };

	  return [shown, className, deleteClass, currentTemplate, hide, currentmodalstep, finished, currentElements, above, dispatch, nextStep, stepBack, size, components, show, keydown_handler];
	}

	var Modal = /*#__PURE__*/function (_SvelteComponent) {
	  _inherits(Modal, _SvelteComponent);

	  var _super = _createSuper$e(Modal);

	  function Modal(options) {
	    var _this;

	    _classCallCheck(this, Modal);

	    _this = _super.call(this);
	    init(_assertThisInitialized(_this), options, instance$c, create_fragment$e, safe_not_equal, {
	      shown: 0,
	      size: 12,
	      className: 1,
	      deleteClass: 2,
	      currentTemplate: 3,
	      components: 13,
	      show: 14,
	      hide: 4
	    });
	    return _this;
	  }

	  _createClass(Modal, [{
	    key: "show",
	    get: function get() {
	      return this.$$.ctx[14];
	    }
	  }, {
	    key: "hide",
	    get: function get() {
	      return this.$$.ctx[4];
	    }
	  }]);

	  return Modal;
	}(SvelteComponent);

	function _createSuper$d(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$d(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$d() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function create_fragment$d(ctx) {
	  var div4;
	  var div3;
	  var img;
	  var img_src_value;
	  var t0;
	  var div2;
	  var div0;
	  var t2;
	  var div1;
	  var mounted;
	  var dispose;
	  return {
	    c: function c() {
	      div4 = element("div");
	      div3 = element("div");
	      img = element("img");
	      t0 = space();
	      div2 = element("div");
	      div0 = element("div");
	      div0.textContent = "".concat(
	      /*name*/
	      ctx[2]);
	      t2 = space();
	      div1 = element("div");
	      div1.textContent = "".concat(
	      /*description*/
	      ctx[1]);
	      if (!src_url_equal(img.src, img_src_value =
	      /*logo*/
	      ctx[0])) attr(img, "src", img_src_value);
	      attr(img, "alt", "pipedrive");
	      attr(img, "class", "svelte-17ekldz");
	      attr(div0, "class", "header svelte-17ekldz");
	      attr(div1, "class", "description svelte-17ekldz");
	      attr(div2, "class", "text svelte-17ekldz");
	      attr(div3, "class", "inner svelte-17ekldz");
	      attr(div4, "class", "card svelte-17ekldz");
	    },
	    m: function m(target, anchor) {
	      insert(target, div4, anchor);
	      append(div4, div3);
	      append(div3, img);
	      append(div3, t0);
	      append(div3, div2);
	      append(div2, div0);
	      append(div2, t2);
	      append(div2, div1);

	      if (!mounted) {
	        dispose = listen(div4, "click",
	        /*onCardClick*/
	        ctx[3]);
	        mounted = true;
	      }
	    },
	    p: noop,
	    i: noop,
	    o: noop,
	    d: function d(detaching) {
	      if (detaching) detach(div4);
	      mounted = false;
	      dispose();
	    }
	  };
	}

	function instance$b($$self, $$props, $$invalidate) {
	  var dispatch = createEventDispatcher();
	  var component = $$props.component;
	  var _component = component,
	      logo = _component.logo,
	      description = _component.description,
	      name = _component.name,
	      _id = _component._id;

	  var onCardClick = function onCardClick() {
	    return dispatch("card-click", _id);
	  };

	  $$self.$$set = function ($$props) {
	    if ('component' in $$props) $$invalidate(4, component = $$props.component);
	  };

	  return [logo, description, name, onCardClick, component];
	}

	var ComponentCard = /*#__PURE__*/function (_SvelteComponent) {
	  _inherits(ComponentCard, _SvelteComponent);

	  var _super = _createSuper$d(ComponentCard);

	  function ComponentCard(options) {
	    var _this;

	    _classCallCheck(this, ComponentCard);

	    _this = _super.call(this);
	    init(_assertThisInitialized(_this), options, instance$b, create_fragment$d, safe_not_equal, {
	      component: 4
	    });
	    return _this;
	  }

	  return ComponentCard;
	}(SvelteComponent);

	function _createSuper$c(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$c(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$c() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function create_fragment$c(ctx) {
	  var label;
	  var input;
	  var t;
	  var div;
	  var mounted;
	  var dispose;
	  return {
	    c: function c() {
	      label = element("label");
	      input = element("input");
	      t = space();
	      div = element("div");
	      attr(input, "type", "checkbox");
	      attr(input, "class", "svelte-10zcw5p");
	      attr(div, "class", "check svelte-10zcw5p");
	      attr(label, "href", "label");
	      attr(label, "class", "switch svelte-10zcw5p");
	    },
	    m: function m(target, anchor) {
	      insert(target, label, anchor);
	      append(label, input);
	      input.checked =
	      /*checked*/
	      ctx[0];
	      append(label, t);
	      append(label, div);

	      if (!mounted) {
	        dispose = [listen(input, "change",
	        /*input_change_handler*/
	        ctx[3]), listen(input, "click",
	        /*click_handler*/
	        ctx[1]), listen(input, "change",
	        /*change_handler*/
	        ctx[2])];
	        mounted = true;
	      }
	    },
	    p: function p(ctx, _ref) {
	      var _ref2 = _slicedToArray(_ref, 1),
	          dirty = _ref2[0];

	      if (dirty &
	      /*checked*/
	      1) {
	        input.checked =
	        /*checked*/
	        ctx[0];
	      }
	    },
	    i: noop,
	    o: noop,
	    d: function d(detaching) {
	      if (detaching) detach(label);
	      mounted = false;
	      run_all(dispose);
	    }
	  };
	}

	function instance$a($$self, $$props, $$invalidate) {
	  var _$$props$checked = $$props.checked,
	      checked = _$$props$checked === void 0 ? false : _$$props$checked;

	  function click_handler(event) {
	    bubble.call(this, $$self, event);
	  }

	  function change_handler(event) {
	    bubble.call(this, $$self, event);
	  }

	  function input_change_handler() {
	    checked = this.checked;
	    $$invalidate(0, checked);
	  }

	  $$self.$$set = function ($$props) {
	    if ('checked' in $$props) $$invalidate(0, checked = $$props.checked);
	  };

	  return [checked, click_handler, change_handler, input_change_handler];
	}

	var ToggleSwitch = /*#__PURE__*/function (_SvelteComponent) {
	  _inherits(ToggleSwitch, _SvelteComponent);

	  var _super = _createSuper$c(ToggleSwitch);

	  function ToggleSwitch(options) {
	    var _this;

	    _classCallCheck(this, ToggleSwitch);

	    _this = _super.call(this);
	    init(_assertThisInitialized(_this), options, instance$a, create_fragment$c, safe_not_equal, {
	      checked: 0
	    });
	    return _this;
	  }

	  return ToggleSwitch;
	}(SvelteComponent);

	function _createSuper$b(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$b(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$b() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function get_each_context$4(ctx, list, i) {
	  var child_ctx = ctx.slice();
	  child_ctx[5] = list[i];
	  child_ctx[7] = i;
	  return child_ctx;
	} // (10:6) {#each images as image, index}


	function create_each_block$4(ctx) {
	  var img;
	  var img_src_value;
	  return {
	    c: function c() {
	      img = element("img");
	      if (!src_url_equal(img.src, img_src_value =
	      /*image*/
	      ctx[5])) attr(img, "src", img_src_value);
	      attr(img, "alt", "Component " + (
	      /*index*/
	      ctx[7] + 1) + " logo");
	      attr(img, "class", "svelte-buh1i1");
	    },
	    m: function m(target, anchor) {
	      insert(target, img, anchor);
	    },
	    p: function p(ctx, dirty) {
	      if (dirty &
	      /*images*/
	      4 && !src_url_equal(img.src, img_src_value =
	      /*image*/
	      ctx[5])) {
	        attr(img, "src", img_src_value);
	      }
	    },
	    d: function d(detaching) {
	      if (detaching) detach(img);
	    }
	  };
	}

	function create_fragment$b(ctx) {
	  var div4;
	  var div2;
	  var div0;
	  var t0;
	  var div1;
	  var t1;
	  var t2;
	  var div3;
	  var span;
	  var t4;
	  var toogleswitch;
	  var updating_checked;
	  var current;
	  var each_value =
	  /*images*/
	  ctx[2];
	  var each_blocks = [];

	  for (var i = 0; i < each_value.length; i += 1) {
	    each_blocks[i] = create_each_block$4(get_each_context$4(ctx, each_value, i));
	  }

	  function toogleswitch_checked_binding(value) {
	    /*toogleswitch_checked_binding*/
	    ctx[3](value);
	  }

	  var toogleswitch_props = {};

	  if (
	  /*enabled*/
	  ctx[0] !== void 0) {
	    toogleswitch_props.checked =
	    /*enabled*/
	    ctx[0];
	  }

	  toogleswitch = new ToggleSwitch({
	    props: toogleswitch_props
	  });
	  binding_callbacks.push(function () {
	    return bind(toogleswitch, 'checked', toogleswitch_checked_binding);
	  });
	  toogleswitch.$on("click",
	  /*click_handler*/
	  ctx[4]);
	  return {
	    c: function c() {
	      div4 = element("div");
	      div2 = element("div");
	      div0 = element("div");

	      for (var _i = 0; _i < each_blocks.length; _i += 1) {
	        each_blocks[_i].c();
	      }

	      t0 = space();
	      div1 = element("div");
	      t1 = text(
	      /*description*/
	      ctx[1]);
	      t2 = space();
	      div3 = element("div");
	      span = element("span");
	      span.textContent = "Activate";
	      t4 = space();
	      create_component(toogleswitch.$$.fragment);
	      attr(div0, "class", "images svelte-buh1i1");
	      attr(div1, "class", "description svelte-buh1i1");
	      attr(div2, "class", "content svelte-buh1i1");
	      attr(span, "class", "svelte-buh1i1");
	      attr(div3, "class", "footer svelte-buh1i1");
	      attr(div4, "class", "card svelte-buh1i1");
	    },
	    m: function m(target, anchor) {
	      insert(target, div4, anchor);
	      append(div4, div2);
	      append(div2, div0);

	      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
	        each_blocks[_i2].m(div0, null);
	      }

	      append(div2, t0);
	      append(div2, div1);
	      append(div1, t1);
	      append(div4, t2);
	      append(div4, div3);
	      append(div3, span);
	      append(div3, t4);
	      mount_component(toogleswitch, div3, null);
	      current = true;
	    },
	    p: function p(ctx, _ref) {
	      var _ref2 = _slicedToArray(_ref, 1),
	          dirty = _ref2[0];

	      if (dirty &
	      /*images*/
	      4) {
	        each_value =
	        /*images*/
	        ctx[2];

	        var _i3;

	        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
	          var child_ctx = get_each_context$4(ctx, each_value, _i3);

	          if (each_blocks[_i3]) {
	            each_blocks[_i3].p(child_ctx, dirty);
	          } else {
	            each_blocks[_i3] = create_each_block$4(child_ctx);

	            each_blocks[_i3].c();

	            each_blocks[_i3].m(div0, null);
	          }
	        }

	        for (; _i3 < each_blocks.length; _i3 += 1) {
	          each_blocks[_i3].d(1);
	        }

	        each_blocks.length = each_value.length;
	      }

	      if (!current || dirty &
	      /*description*/
	      2) set_data(t1,
	      /*description*/
	      ctx[1]);
	      var toogleswitch_changes = {};

	      if (!updating_checked && dirty &
	      /*enabled*/
	      1) {
	        updating_checked = true;
	        toogleswitch_changes.checked =
	        /*enabled*/
	        ctx[0];
	        add_flush_callback(function () {
	          return updating_checked = false;
	        });
	      }

	      toogleswitch.$set(toogleswitch_changes);
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(toogleswitch.$$.fragment, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(toogleswitch.$$.fragment, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      if (detaching) detach(div4);
	      destroy_each(each_blocks, detaching);
	      destroy_component(toogleswitch);
	    }
	  };
	}

	function instance$9($$self, $$props, $$invalidate) {
	  var description = $$props.description;
	  var _$$props$images = $$props.images,
	      images = _$$props$images === void 0 ? [] : _$$props$images;
	  var _$$props$enabled = $$props.enabled,
	      enabled = _$$props$enabled === void 0 ? false : _$$props$enabled;

	  function toogleswitch_checked_binding(value) {
	    enabled = value;
	    $$invalidate(0, enabled);
	  }

	  function click_handler(event) {
	    bubble.call(this, $$self, event);
	  }

	  $$self.$$set = function ($$props) {
	    if ('description' in $$props) $$invalidate(1, description = $$props.description);
	    if ('images' in $$props) $$invalidate(2, images = $$props.images);
	    if ('enabled' in $$props) $$invalidate(0, enabled = $$props.enabled);
	  };

	  return [enabled, description, images, toogleswitch_checked_binding, click_handler];
	}

	var Flow = /*#__PURE__*/function (_SvelteComponent) {
	  _inherits(Flow, _SvelteComponent);

	  var _super = _createSuper$b(Flow);

	  function Flow(options) {
	    var _this;

	    _classCallCheck(this, Flow);

	    _this = _super.call(this);
	    init(_assertThisInitialized(_this), options, instance$9, create_fragment$b, safe_not_equal, {
	      description: 1,
	      images: 2,
	      enabled: 0
	    });
	    return _this;
	  }

	  return Flow;
	}(SvelteComponent);

	function _createSuper$a(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$a(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$a() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	var get_right_slot_changes = function get_right_slot_changes(dirty) {
	  return {};
	};

	var get_right_slot_context = function get_right_slot_context(ctx) {
	  return {};
	};

	var get_left_slot_changes = function get_left_slot_changes(dirty) {
	  return {};
	};

	var get_left_slot_context = function get_left_slot_context(ctx) {
	  return {};
	}; // (19:4) {#if iconposition === 'left'}


	function create_if_block_1$1(ctx) {
	  var current;
	  var left_slot_template =
	  /*#slots*/
	  ctx[13].left;
	  var left_slot = create_slot(left_slot_template, ctx,
	  /*$$scope*/
	  ctx[12], get_left_slot_context);
	  return {
	    c: function c() {
	      if (left_slot) left_slot.c();
	    },
	    m: function m(target, anchor) {
	      if (left_slot) {
	        left_slot.m(target, anchor);
	      }

	      current = true;
	    },
	    p: function p(ctx, dirty) {
	      if (left_slot) {
	        if (left_slot.p && (!current || dirty &
	        /*$$scope*/
	        4096)) {
	          update_slot_base(left_slot, left_slot_template, ctx,
	          /*$$scope*/
	          ctx[12], !current ? get_all_dirty_from_scope(
	          /*$$scope*/
	          ctx[12]) : get_slot_changes(left_slot_template,
	          /*$$scope*/
	          ctx[12], dirty, get_left_slot_changes), get_left_slot_context);
	        }
	      }
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(left_slot, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(left_slot, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      if (left_slot) left_slot.d(detaching);
	    }
	  };
	} // (36:4) {#if iconposition === 'right'}


	function create_if_block$3(ctx) {
	  var current;
	  var right_slot_template =
	  /*#slots*/
	  ctx[13].right;
	  var right_slot = create_slot(right_slot_template, ctx,
	  /*$$scope*/
	  ctx[12], get_right_slot_context);
	  return {
	    c: function c() {
	      if (right_slot) right_slot.c();
	    },
	    m: function m(target, anchor) {
	      if (right_slot) {
	        right_slot.m(target, anchor);
	      }

	      current = true;
	    },
	    p: function p(ctx, dirty) {
	      if (right_slot) {
	        if (right_slot.p && (!current || dirty &
	        /*$$scope*/
	        4096)) {
	          update_slot_base(right_slot, right_slot_template, ctx,
	          /*$$scope*/
	          ctx[12], !current ? get_all_dirty_from_scope(
	          /*$$scope*/
	          ctx[12]) : get_slot_changes(right_slot_template,
	          /*$$scope*/
	          ctx[12], dirty, get_right_slot_changes), get_right_slot_context);
	        }
	      }
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(right_slot, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(right_slot, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      if (right_slot) right_slot.d(detaching);
	    }
	  };
	}

	function create_fragment$a(ctx) {
	  var div;
	  var t0;
	  var input;
	  var t1;
	  var current;
	  var mounted;
	  var dispose;
	  var if_block0 =
	  /*iconposition*/
	  ctx[5] === 'left' && create_if_block_1$1(ctx);
	  var if_block1 =
	  /*iconposition*/
	  ctx[5] === 'right' && create_if_block$3(ctx);
	  return {
	    c: function c() {
	      div = element("div");
	      if (if_block0) if_block0.c();
	      t0 = space();
	      input = element("input");
	      t1 = space();
	      if (if_block1) if_block1.c();
	      attr(input, "name",
	      /*name*/
	      ctx[2]);
	      input.value =
	      /*value*/
	      ctx[0];
	      attr(input, "type",
	      /*type*/
	      ctx[3]);
	      attr(input, "id",
	      /*id*/
	      ctx[1]);
	      attr(input, "placeholder",
	      /*placeholder*/
	      ctx[4]);
	      attr(input, "class", "svelte-1biyotc");
	      toggle_class(input, "full-width",
	      /*fullWidth*/
	      ctx[7]);
	      toggle_class(input, "rounded",
	      /*rounded*/
	      ctx[8]);
	      toggle_class(input, "error",
	      /*hasError*/
	      ctx[6]);
	      attr(div, "class", "svelte-1biyotc");
	      toggle_class(div, "left",
	      /*left*/
	      ctx[10]);
	      toggle_class(div, "right",
	      /*right*/
	      ctx[9]);
	    },
	    m: function m(target, anchor) {
	      insert(target, div, anchor);
	      if (if_block0) if_block0.m(div, null);
	      append(div, t0);
	      append(div, input);
	      append(div, t1);
	      if (if_block1) if_block1.m(div, null);
	      current = true;

	      if (!mounted) {
	        dispose = [listen(input, "input",
	        /*handleInput*/
	        ctx[11]), listen(input, "input",
	        /*input_handler*/
	        ctx[14]), listen(input, "blur",
	        /*blur_handler*/
	        ctx[15]), listen(input, "focus",
	        /*focus_handler*/
	        ctx[16])];
	        mounted = true;
	      }
	    },
	    p: function p(ctx, _ref) {
	      var _ref2 = _slicedToArray(_ref, 1),
	          dirty = _ref2[0];

	      if (
	      /*iconposition*/
	      ctx[5] === 'left') {
	        if (if_block0) {
	          if_block0.p(ctx, dirty);

	          if (dirty &
	          /*iconposition*/
	          32) {
	            transition_in(if_block0, 1);
	          }
	        } else {
	          if_block0 = create_if_block_1$1(ctx);
	          if_block0.c();
	          transition_in(if_block0, 1);
	          if_block0.m(div, t0);
	        }
	      } else if (if_block0) {
	        group_outros();
	        transition_out(if_block0, 1, 1, function () {
	          if_block0 = null;
	        });
	        check_outros();
	      }

	      if (!current || dirty &
	      /*name*/
	      4) {
	        attr(input, "name",
	        /*name*/
	        ctx[2]);
	      }

	      if (!current || dirty &
	      /*value*/
	      1 && input.value !==
	      /*value*/
	      ctx[0]) {
	        input.value =
	        /*value*/
	        ctx[0];
	      }

	      if (!current || dirty &
	      /*type*/
	      8) {
	        attr(input, "type",
	        /*type*/
	        ctx[3]);
	      }

	      if (!current || dirty &
	      /*id*/
	      2) {
	        attr(input, "id",
	        /*id*/
	        ctx[1]);
	      }

	      if (!current || dirty &
	      /*placeholder*/
	      16) {
	        attr(input, "placeholder",
	        /*placeholder*/
	        ctx[4]);
	      }

	      if (dirty &
	      /*fullWidth*/
	      128) {
	        toggle_class(input, "full-width",
	        /*fullWidth*/
	        ctx[7]);
	      }

	      if (dirty &
	      /*rounded*/
	      256) {
	        toggle_class(input, "rounded",
	        /*rounded*/
	        ctx[8]);
	      }

	      if (dirty &
	      /*hasError*/
	      64) {
	        toggle_class(input, "error",
	        /*hasError*/
	        ctx[6]);
	      }

	      if (
	      /*iconposition*/
	      ctx[5] === 'right') {
	        if (if_block1) {
	          if_block1.p(ctx, dirty);

	          if (dirty &
	          /*iconposition*/
	          32) {
	            transition_in(if_block1, 1);
	          }
	        } else {
	          if_block1 = create_if_block$3(ctx);
	          if_block1.c();
	          transition_in(if_block1, 1);
	          if_block1.m(div, null);
	        }
	      } else if (if_block1) {
	        group_outros();
	        transition_out(if_block1, 1, 1, function () {
	          if_block1 = null;
	        });
	        check_outros();
	      }

	      if (dirty &
	      /*left*/
	      1024) {
	        toggle_class(div, "left",
	        /*left*/
	        ctx[10]);
	      }

	      if (dirty &
	      /*right*/
	      512) {
	        toggle_class(div, "right",
	        /*right*/
	        ctx[9]);
	      }
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(if_block0);
	      transition_in(if_block1);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(if_block0);
	      transition_out(if_block1);
	      current = false;
	    },
	    d: function d(detaching) {
	      if (detaching) detach(div);
	      if (if_block0) if_block0.d();
	      if (if_block1) if_block1.d();
	      mounted = false;
	      run_all(dispose);
	    }
	  };
	}

	function instance$8($$self, $$props, $$invalidate) {
	  var left;
	  var right;
	  var _$$props$$$slots = $$props.$$slots,
	      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
	      $$scope = $$props.$$scope;
	  var value = $$props.value;
	  var _$$props$id = $$props.id,
	      id = _$$props$id === void 0 ? "" : _$$props$id;
	  var _$$props$name = $$props.name,
	      name = _$$props$name === void 0 ? "" : _$$props$name;
	  var _$$props$type = $$props.type,
	      type = _$$props$type === void 0 ? "text" : _$$props$type;
	  var _$$props$placeholder = $$props.placeholder,
	      placeholder = _$$props$placeholder === void 0 ? "" : _$$props$placeholder;
	  var _$$props$iconposition = $$props.iconposition,
	      iconposition = _$$props$iconposition === void 0 ? "none" : _$$props$iconposition;
	  var _$$props$hasError = $$props.hasError,
	      hasError = _$$props$hasError === void 0 ? false : _$$props$hasError;
	  var _$$props$fullWidth = $$props.fullWidth,
	      fullWidth = _$$props$fullWidth === void 0 ? false : _$$props$fullWidth;
	  var _$$props$rounded = $$props.rounded,
	      rounded = _$$props$rounded === void 0 ? false : _$$props$rounded;

	  function handleInput(e) {
	    $$invalidate(0, value = e.target.value);
	  }

	  function input_handler(event) {
	    bubble.call(this, $$self, event);
	  }

	  function blur_handler(event) {
	    bubble.call(this, $$self, event);
	  }

	  function focus_handler(event) {
	    bubble.call(this, $$self, event);
	  }

	  $$self.$$set = function ($$props) {
	    if ('value' in $$props) $$invalidate(0, value = $$props.value);
	    if ('id' in $$props) $$invalidate(1, id = $$props.id);
	    if ('name' in $$props) $$invalidate(2, name = $$props.name);
	    if ('type' in $$props) $$invalidate(3, type = $$props.type);
	    if ('placeholder' in $$props) $$invalidate(4, placeholder = $$props.placeholder);
	    if ('iconposition' in $$props) $$invalidate(5, iconposition = $$props.iconposition);
	    if ('hasError' in $$props) $$invalidate(6, hasError = $$props.hasError);
	    if ('fullWidth' in $$props) $$invalidate(7, fullWidth = $$props.fullWidth);
	    if ('rounded' in $$props) $$invalidate(8, rounded = $$props.rounded);
	    if ('$$scope' in $$props) $$invalidate(12, $$scope = $$props.$$scope);
	  };

	  $$self.$$.update = function () {
	    if ($$self.$$.dirty &
	    /*iconposition*/
	    32) {
	      $$invalidate(10, left = iconposition === "left");
	    }

	    if ($$self.$$.dirty &
	    /*iconposition*/
	    32) {
	      $$invalidate(9, right = iconposition === "right");
	    }
	  };

	  return [value, id, name, type, placeholder, iconposition, hasError, fullWidth, rounded, right, left, handleInput, $$scope, slots, input_handler, blur_handler, focus_handler];
	}

	var Input = /*#__PURE__*/function (_SvelteComponent) {
	  _inherits(Input, _SvelteComponent);

	  var _super = _createSuper$a(Input);

	  function Input(options) {
	    var _this;

	    _classCallCheck(this, Input);

	    _this = _super.call(this);
	    init(_assertThisInitialized(_this), options, instance$8, create_fragment$a, safe_not_equal, {
	      value: 0,
	      id: 1,
	      name: 2,
	      type: 3,
	      placeholder: 4,
	      iconposition: 5,
	      hasError: 6,
	      fullWidth: 7,
	      rounded: 8
	    });
	    return _this;
	  }

	  return Input;
	}(SvelteComponent);

	function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function create_fragment$9(ctx) {
	  var svg;
	  var path0;
	  var path1;
	  return {
	    c: function c() {
	      svg = svg_element("svg");
	      path0 = svg_element("path");
	      path1 = svg_element("path");
	      attr(path0, "d", "M0 0h24v24H0V0z");
	      attr(path0, "fill", "none");
	      attr(path1, "d", "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z");
	      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
	      attr(svg, "height", "24px");
	      attr(svg, "viewBox", "0 0 24 24");
	      attr(svg, "width", "24px");
	      attr(svg, "fill", "#000000");
	    },
	    m: function m(target, anchor) {
	      insert(target, svg, anchor);
	      append(svg, path0);
	      append(svg, path1);
	    },
	    p: noop,
	    i: noop,
	    o: noop,
	    d: function d(detaching) {
	      if (detaching) detach(svg);
	    }
	  };
	}

	var Search = /*#__PURE__*/function (_SvelteComponent) {
	  _inherits(Search, _SvelteComponent);

	  var _super = _createSuper$9(Search);

	  function Search(options) {
	    var _this;

	    _classCallCheck(this, Search);

	    _this = _super.call(this);
	    init(_assertThisInitialized(_this), options, null, create_fragment$9, safe_not_equal, {});
	    return _this;
	  }

	  return Search;
	}(SvelteComponent);

	var axios = (function e(t) {
	  function r(e, t, n) {
	    var a,
	        o = {};
	    if (Array.isArray(e)) return e.concat(t);

	    for (a in e) {
	      o[n ? a.toLowerCase() : a] = e[a];
	    }

	    for (a in t) {
	      var i = n ? a.toLowerCase() : a,
	          u = t[a];
	      o[i] = i in o && "object" == _typeof(u) ? r(o[i], u, "headers" === i) : u;
	    }

	    return o;
	  }

	  function n(e, n, a, o) {
	    "string" != typeof e && (e = (n = e).url);
	    var i = {
	      config: n
	    },
	        u = r(t, n),
	        s = {},
	        c = o || u.data;
	    (u.transformRequest || []).map(function (e) {
	      c = e(c, u.headers) || c;
	    }), c && "object" == _typeof(c) && "function" != typeof c.append && (c = JSON.stringify(c), s["content-type"] = "application/json");
	    var f = "undefined" != typeof document && document.cookie.match(RegExp("(^|; )" + u.xsrfCookieName + "=([^;]*)"));

	    if (f && (s[u.xsrfHeaderName] = f[2]), u.auth && (s.authorization = u.auth), u.baseURL && (e = e.replace(/^(?!.*\/\/)\/?(.*)$/, u.baseURL + "/$1")), u.params) {
	      var p = ~e.indexOf("?") ? "&" : "?";
	      e += p + (u.paramsSerializer ? u.paramsSerializer(u.params) : new URLSearchParams(u.params));
	    }

	    return (u.fetch || fetch)(e, {
	      method: a || u.method,
	      body: c,
	      headers: r(u.headers, s, !0),
	      credentials: u.withCredentials ? "include" : "same-origin"
	    }).then(function (e) {
	      for (var t in e) {
	        "function" != typeof e[t] && (i[t] = e[t]);
	      }

	      var r = u.validateStatus ? u.validateStatus(e.status) : e.ok;
	      return "stream" == u.responseType ? (i.data = e.body, i) : e[u.responseType || "text"]().then(function (e) {
	        i.data = e, i.data = JSON.parse(e);
	      }).catch(Object).then(function () {
	        return r ? i : Promise.reject(i);
	      });
	    });
	  }

	  return t = t || {}, n.request = n, n.get = function (e, t) {
	    return n(e, t, "get");
	  }, n.delete = function (e, t) {
	    return n(e, t, "delete");
	  }, n.head = function (e, t) {
	    return n(e, t, "head");
	  }, n.options = function (e, t) {
	    return n(e, t, "options");
	  }, n.post = function (e, t, r) {
	    return n(e, r, "post", t);
	  }, n.put = function (e, t, r) {
	    return n(e, r, "put", t);
	  }, n.patch = function (e, t, r) {
	    return n(e, r, "patch", t);
	  }, n.all = Promise.all.bind(Promise), n.spread = function (e) {
	    return function (t) {
	      return e.apply(this, t);
	    };
	  }, n.CancelToken = "function" == typeof AbortController ? AbortController : Object, n.defaults = t, n.create = e, n;
	})();

	const endpoint = "https://api.platform.openintegrationhub.com/icenter";
	const getHeaders = (token) => ({
	    mode: "no-cors",
	    "Cache-Control": "no-cache, no-store, must-revalidate",
	    Pragma: "no-cache",
	    "Content-Type": "application/json",
	    Accept: "application/json",
	    Authorization: `Bearer ${token}`,
	});
	const getData = async (token) => {
	    try {
	        const response = await axios(`${endpoint}/application`, {
	            method: "GET",
	            headers: getHeaders(token),
	        });
	        return response.data.data;
	    }
	    catch (error) {
	        console.error(error);
	    }
	};
	const getFilters = async (token) => {
	    try {
	        const response = await axios(`${endpoint}/application/filters/`, {
	            method: "GET",
	            headers: getHeaders(token),
	        });
	        return response.data.data;
	    }
	    catch (error) {
	        console.error(error);
	    }
	};

	function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var Boolean_1$1 = globals.Boolean;

	function get_each_context$3(ctx, list, i) {
	  var child_ctx = ctx.slice();
	  child_ctx[19] = list[i];
	  child_ctx[20] = list;
	  child_ctx[21] = i;
	  return child_ctx;
	}

	function get_each_context_1$1(ctx, list, i) {
	  var child_ctx = ctx.slice();
	  child_ctx[22] = list[i];
	  return child_ctx;
	}

	function get_each_context_2(ctx, list, i) {
	  var child_ctx = ctx.slice();
	  child_ctx[25] = list[i];
	  return child_ctx;
	} // (57:6) 


	function create_right_slot(ctx) {
	  var span;
	  var search;
	  var current;
	  search = new Search({});
	  return {
	    c: function c() {
	      span = element("span");
	      create_component(search.$$.fragment);
	      attr(span, "slot", "right");
	    },
	    m: function m(target, anchor) {
	      insert(target, span, anchor);
	      mount_component(search, span, null);
	      current = true;
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(search.$$.fragment, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(search.$$.fragment, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      if (detaching) detach(span);
	      destroy_component(search);
	    }
	  };
	} // (66:8) {#each components as item}


	function create_each_block_2(ctx) {
	  var componentcard;
	  var current;
	  componentcard = new ComponentCard({
	    props: {
	      component:
	      /*item*/
	      ctx[25]
	    }
	  });
	  componentcard.$on("card-click",
	  /*card_click_handler*/
	  ctx[11]);
	  return {
	    c: function c() {
	      create_component(componentcard.$$.fragment);
	    },
	    m: function m(target, anchor) {
	      mount_component(componentcard, target, anchor);
	      current = true;
	    },
	    p: function p(ctx, dirty) {
	      var componentcard_changes = {};
	      if (dirty &
	      /*components*/
	      8) componentcard_changes.component =
	      /*item*/
	      ctx[25];
	      componentcard.$set(componentcard_changes);
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(componentcard.$$.fragment, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(componentcard.$$.fragment, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      destroy_component(componentcard, detaching);
	    }
	  };
	} // (63:4) {#each filteredSections as section}


	function create_each_block_1$1(ctx) {
	  var div0;
	  var t0_value =
	  /*section*/
	  ctx[22].sectionTagName + "";
	  var t0;
	  var t1;
	  var div1;
	  var div1_class_value;
	  var div1_resize_listener;
	  var current;
	  var each_value_2 =
	  /*components*/
	  ctx[3];
	  var each_blocks = [];

	  for (var i = 0; i < each_value_2.length; i += 1) {
	    each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
	  }

	  var out = function out(i) {
	    return transition_out(each_blocks[i], 1, 1, function () {
	      each_blocks[i] = null;
	    });
	  };

	  return {
	    c: function c() {
	      div0 = element("div");
	      t0 = text(t0_value);
	      t1 = space();
	      div1 = element("div");

	      for (var _i = 0; _i < each_blocks.length; _i += 1) {
	        each_blocks[_i].c();
	      }

	      attr(div0, "class", "feature-header svelte-ti21ll");
	      attr(div1, "class", div1_class_value = "cards " +
	      /*currentBreakpoint*/
	      ctx[1] + " svelte-ti21ll");
	      add_render_callback(function () {
	        return (
	          /*div1_elementresize_handler*/
	          ctx[12].call(div1)
	        );
	      });
	    },
	    m: function m(target, anchor) {
	      insert(target, div0, anchor);
	      append(div0, t0);
	      insert(target, t1, anchor);
	      insert(target, div1, anchor);

	      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
	        each_blocks[_i2].m(div1, null);
	      }

	      div1_resize_listener = add_resize_listener(div1,
	      /*div1_elementresize_handler*/
	      ctx[12].bind(div1));
	      current = true;
	    },
	    p: function p(ctx, dirty) {
	      if ((!current || dirty &
	      /*filteredSections*/
	      4) && t0_value !== (t0_value =
	      /*section*/
	      ctx[22].sectionTagName + "")) set_data(t0, t0_value);

	      if (dirty &
	      /*components*/
	      8) {
	        each_value_2 =
	        /*components*/
	        ctx[3];

	        var _i3;

	        for (_i3 = 0; _i3 < each_value_2.length; _i3 += 1) {
	          var child_ctx = get_each_context_2(ctx, each_value_2, _i3);

	          if (each_blocks[_i3]) {
	            each_blocks[_i3].p(child_ctx, dirty);

	            transition_in(each_blocks[_i3], 1);
	          } else {
	            each_blocks[_i3] = create_each_block_2(child_ctx);

	            each_blocks[_i3].c();

	            transition_in(each_blocks[_i3], 1);

	            each_blocks[_i3].m(div1, null);
	          }
	        }

	        group_outros();

	        for (_i3 = each_value_2.length; _i3 < each_blocks.length; _i3 += 1) {
	          out(_i3);
	        }

	        check_outros();
	      }

	      if (!current || dirty &
	      /*currentBreakpoint*/
	      2 && div1_class_value !== (div1_class_value = "cards " +
	      /*currentBreakpoint*/
	      ctx[1] + " svelte-ti21ll")) {
	        attr(div1, "class", div1_class_value);
	      }
	    },
	    i: function i(local) {
	      if (current) return;

	      for (var _i4 = 0; _i4 < each_value_2.length; _i4 += 1) {
	        transition_in(each_blocks[_i4]);
	      }

	      current = true;
	    },
	    o: function o(local) {
	      each_blocks = each_blocks.filter(Boolean_1$1);

	      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
	        transition_out(each_blocks[_i5]);
	      }

	      current = false;
	    },
	    d: function d(detaching) {
	      if (detaching) detach(div0);
	      if (detaching) detach(t1);
	      if (detaching) detach(div1);
	      destroy_each(each_blocks, detaching);
	      div1_resize_listener();
	    }
	  };
	} // (73:6) {#each templates as flow (flow._id)}


	function create_each_block$3(key_1, ctx) {
	  var first;
	  var flow;
	  var updating_enabled;
	  var current;

	  function flow_enabled_binding(value) {
	    /*flow_enabled_binding*/
	    ctx[13](value,
	    /*flow*/
	    ctx[19]);
	  }

	  function click_handler() {
	    return (
	      /*click_handler*/
	      ctx[14](
	      /*flow*/
	      ctx[19])
	    );
	  }

	  var flow_props = {
	    description:
	    /*flow*/
	    ctx[19].description,
	    images:
	    /*getImageArray*/
	    ctx[6](
	    /*flow*/
	    ctx[19])
	  };

	  if (
	  /*flow*/
	  ctx[19].enabled !== void 0) {
	    flow_props.enabled =
	    /*flow*/
	    ctx[19].enabled;
	  }

	  flow = new Flow({
	    props: flow_props
	  });
	  binding_callbacks.push(function () {
	    return bind(flow, 'enabled', flow_enabled_binding);
	  });
	  flow.$on("click", click_handler);
	  return {
	    key: key_1,
	    first: null,
	    c: function c() {
	      first = empty();
	      create_component(flow.$$.fragment);
	      this.first = first;
	    },
	    m: function m(target, anchor) {
	      insert(target, first, anchor);
	      mount_component(flow, target, anchor);
	      current = true;
	    },
	    p: function p(new_ctx, dirty) {
	      ctx = new_ctx;
	      var flow_changes = {};
	      if (dirty &
	      /*templates*/
	      16) flow_changes.description =
	      /*flow*/
	      ctx[19].description;
	      if (dirty &
	      /*templates*/
	      16) flow_changes.images =
	      /*getImageArray*/
	      ctx[6](
	      /*flow*/
	      ctx[19]);

	      if (!updating_enabled && dirty &
	      /*templates*/
	      16) {
	        updating_enabled = true;
	        flow_changes.enabled =
	        /*flow*/
	        ctx[19].enabled;
	        add_flush_callback(function () {
	          return updating_enabled = false;
	        });
	      }

	      flow.$set(flow_changes);
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(flow.$$.fragment, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(flow.$$.fragment, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      if (detaching) detach(first);
	      destroy_component(flow, detaching);
	    }
	  };
	}

	function create_fragment$8(ctx) {
	  var div4;
	  var div0;
	  var input;
	  var t0;
	  var div3;
	  var t1;
	  var div1;
	  var t3;
	  var div2;
	  var each_blocks = [];
	  var each1_lookup = new Map();
	  var div2_class_value;
	  var current;
	  input = new Input({
	    props: {
	      value: inputvalue,
	      placeholder: "Search",
	      iconposition: "right",
	      fullWidth: true,
	      rounded: true,
	      $$slots: {
	        right: [create_right_slot]
	      },
	      $$scope: {
	        ctx: ctx
	      }
	    }
	  });
	  var each_value_1 =
	  /*filteredSections*/
	  ctx[2];
	  var each_blocks_1 = [];

	  for (var i = 0; i < each_value_1.length; i += 1) {
	    each_blocks_1[i] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i));
	  }

	  var out = function out(i) {
	    return transition_out(each_blocks_1[i], 1, 1, function () {
	      each_blocks_1[i] = null;
	    });
	  };

	  var each_value =
	  /*templates*/
	  ctx[4];

	  var get_key = function get_key(ctx) {
	    return (
	      /*flow*/
	      ctx[19]._id
	    );
	  };

	  for (var _i6 = 0; _i6 < each_value.length; _i6 += 1) {
	    var child_ctx = get_each_context$3(ctx, each_value, _i6);
	    var key = get_key(child_ctx);
	    each1_lookup.set(key, each_blocks[_i6] = create_each_block$3(key, child_ctx));
	  }

	  return {
	    c: function c() {
	      div4 = element("div");
	      div0 = element("div");
	      create_component(input.$$.fragment);
	      t0 = space();
	      div3 = element("div");

	      for (var _i7 = 0; _i7 < each_blocks_1.length; _i7 += 1) {
	        each_blocks_1[_i7].c();
	      }

	      t1 = space();
	      div1 = element("div");
	      div1.textContent = "Flows";
	      t3 = space();
	      div2 = element("div");

	      for (var _i8 = 0; _i8 < each_blocks.length; _i8 += 1) {
	        each_blocks[_i8].c();
	      }

	      attr(div0, "class", "searchbar svelte-ti21ll");
	      attr(div1, "class", "flows-header svelte-ti21ll");
	      attr(div2, "class", div2_class_value = "flow-grid " +
	      /*currentBreakpoint*/
	      ctx[1] + " svelte-ti21ll");
	      attr(div3, "class", "featured svelte-ti21ll");
	      attr(div4, "class", "content svelte-ti21ll");
	    },
	    m: function m(target, anchor) {
	      insert(target, div4, anchor);
	      append(div4, div0);
	      mount_component(input, div0, null);
	      append(div4, t0);
	      append(div4, div3);

	      for (var _i9 = 0; _i9 < each_blocks_1.length; _i9 += 1) {
	        each_blocks_1[_i9].m(div3, null);
	      }

	      append(div3, t1);
	      append(div3, div1);
	      append(div3, t3);
	      append(div3, div2);

	      for (var _i10 = 0; _i10 < each_blocks.length; _i10 += 1) {
	        each_blocks[_i10].m(div2, null);
	      }

	      current = true;
	    },
	    p: function p(ctx, _ref) {
	      var _ref2 = _slicedToArray(_ref, 1),
	          dirty = _ref2[0];

	      var input_changes = {};

	      if (dirty &
	      /*$$scope*/
	      268435456) {
	        input_changes.$$scope = {
	          dirty: dirty,
	          ctx: ctx
	        };
	      }

	      input.$set(input_changes);

	      if (dirty &
	      /*currentBreakpoint, elWidth, components, filteredSections*/
	      15) {
	        each_value_1 =
	        /*filteredSections*/
	        ctx[2];

	        var _i11;

	        for (_i11 = 0; _i11 < each_value_1.length; _i11 += 1) {
	          var _child_ctx = get_each_context_1$1(ctx, each_value_1, _i11);

	          if (each_blocks_1[_i11]) {
	            each_blocks_1[_i11].p(_child_ctx, dirty);

	            transition_in(each_blocks_1[_i11], 1);
	          } else {
	            each_blocks_1[_i11] = create_each_block_1$1(_child_ctx);

	            each_blocks_1[_i11].c();

	            transition_in(each_blocks_1[_i11], 1);

	            each_blocks_1[_i11].m(div3, t1);
	          }
	        }

	        group_outros();

	        for (_i11 = each_value_1.length; _i11 < each_blocks_1.length; _i11 += 1) {
	          out(_i11);
	        }

	        check_outros();
	      }

	      if (dirty &
	      /*templates, getImageArray, onEnabledChange*/
	      112) {
	        each_value =
	        /*templates*/
	        ctx[4];
	        group_outros();
	        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each1_lookup, div2, outro_and_destroy_block, create_each_block$3, null, get_each_context$3);
	        check_outros();
	      }

	      if (!current || dirty &
	      /*currentBreakpoint*/
	      2 && div2_class_value !== (div2_class_value = "flow-grid " +
	      /*currentBreakpoint*/
	      ctx[1] + " svelte-ti21ll")) {
	        attr(div2, "class", div2_class_value);
	      }
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(input.$$.fragment, local);

	      for (var _i12 = 0; _i12 < each_value_1.length; _i12 += 1) {
	        transition_in(each_blocks_1[_i12]);
	      }

	      for (var _i13 = 0; _i13 < each_value.length; _i13 += 1) {
	        transition_in(each_blocks[_i13]);
	      }

	      current = true;
	    },
	    o: function o(local) {
	      transition_out(input.$$.fragment, local);
	      each_blocks_1 = each_blocks_1.filter(Boolean_1$1);

	      for (var _i14 = 0; _i14 < each_blocks_1.length; _i14 += 1) {
	        transition_out(each_blocks_1[_i14]);
	      }

	      for (var _i15 = 0; _i15 < each_blocks.length; _i15 += 1) {
	        transition_out(each_blocks[_i15]);
	      }

	      current = false;
	    },
	    d: function d(detaching) {
	      if (detaching) detach(div4);
	      destroy_component(input);
	      destroy_each(each_blocks_1, detaching);

	      for (var _i16 = 0; _i16 < each_blocks.length; _i16 += 1) {
	        each_blocks[_i16].d();
	      }
	    }
	  };
	}

	var inputvalue = "";

	function instance$7($$self, $$props, $$invalidate) {
	  var components;
	  var templates;
	  var filteredSections;
	  var sections = $$props.sections;
	  var data = $$props.data;
	  var _$$props$isPreviewMod = $$props.isPreviewMode,
	      isPreviewMode = _$$props$isPreviewMod === void 0 ? false : _$$props$isPreviewMod;
	  var token = $$props.token;
	  var dispatch = createEventDispatcher();
	  var elWidth;
	  var currentBreakpoint;

	  var onEnabledChange = function onEnabledChange(template) {
	    if (!template.enabled) {
	      template.enabled = true;
	    } else {
	      template.enabled = false;
	    }

	    if (!isPreviewMode && template.enabled) {
	      dispatch("open-modal", template);
	    }
	  };

	  var getImageArray = function getImageArray(template) {
	    return template.graph.nodes.map(function (_ref3) {
	      var componentId = _ref3.componentId;

	      var _a;

	      return (_a = components.find(function (c) {
	        return c._id === componentId;
	      })) === null || _a === void 0 ? void 0 : _a.logo;
	    }).filter(Boolean);
	  };

	  var getFilteredSections = function getFilteredSections(sec) {
	    var newSections = isPreviewMode ? sec.filter(function (t) {
	      return t.previewEnabled;
	    }) : sec.filter(function (t) {
	      return t.enabled;
	    });
	    return newSections;
	  };

	  function card_click_handler(event) {
	    bubble.call(this, $$self, event);
	  }

	  function div1_elementresize_handler() {
	    elWidth = this.clientWidth;
	    $$invalidate(0, elWidth);
	  }

	  function flow_enabled_binding(value, flow) {
	    if ($$self.$$.not_equal(flow.enabled, value)) {
	      flow.enabled = value;
	      $$invalidate(4, templates), $$invalidate(8, data);
	    }
	  }

	  var click_handler = function click_handler(flow) {
	    return onEnabledChange(flow);
	  };

	  $$self.$$set = function ($$props) {
	    if ('sections' in $$props) $$invalidate(7, sections = $$props.sections);
	    if ('data' in $$props) $$invalidate(8, data = $$props.data);
	    if ('isPreviewMode' in $$props) $$invalidate(9, isPreviewMode = $$props.isPreviewMode);
	    if ('token' in $$props) $$invalidate(10, token = $$props.token);
	  };

	  $$self.$$.update = function () {
	    if ($$self.$$.dirty &
	    /*data*/
	    256) {
	      var _data;

	      $$invalidate(3, (_data = data, components = _data.components, templates = _data.templates, _data), components, ($$invalidate(4, templates), $$invalidate(8, data)));
	    }

	    if ($$self.$$.dirty &
	    /*elWidth*/
	    1) {
	      {
	        $$invalidate(1, currentBreakpoint = getBpClasses(elWidth));
	      }
	    }

	    if ($$self.$$.dirty &
	    /*sections*/
	    128) {
	      $$invalidate(2, filteredSections = getFilteredSections(sections));
	    }
	  };

	  return [elWidth, currentBreakpoint, filteredSections, components, templates, onEnabledChange, getImageArray, sections, data, isPreviewMode, token, card_click_handler, div1_elementresize_handler, flow_enabled_binding, click_handler];
	}

	var Content = /*#__PURE__*/function (_SvelteComponent) {
	  _inherits(Content, _SvelteComponent);

	  var _super = _createSuper$8(Content);

	  function Content(options) {
	    var _this;

	    _classCallCheck(this, Content);

	    _this = _super.call(this);
	    init(_assertThisInitialized(_this), options, instance$7, create_fragment$8, safe_not_equal, {
	      sections: 7,
	      data: 8,
	      isPreviewMode: 9,
	      token: 10
	    });
	    return _this;
	  }

	  return Content;
	}(SvelteComponent);

	function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function create_fragment$7(ctx) {
	  var div;
	  var span;
	  var t;
	  return {
	    c: function c() {
	      div = element("div");
	      span = element("span");
	      t = text(
	      /*text*/
	      ctx[0]);
	      attr(div, "class", "svelte-1x7nw2l");
	      toggle_class(div, "selected",
	      /*selected*/
	      ctx[1]);
	    },
	    m: function m(target, anchor) {
	      insert(target, div, anchor);
	      append(div, span);
	      append(span, t);
	    },
	    p: function p(ctx, _ref) {
	      var _ref2 = _slicedToArray(_ref, 1),
	          dirty = _ref2[0];

	      if (dirty &
	      /*text*/
	      1) set_data(t,
	      /*text*/
	      ctx[0]);

	      if (dirty &
	      /*selected*/
	      2) {
	        toggle_class(div, "selected",
	        /*selected*/
	        ctx[1]);
	      }
	    },
	    i: noop,
	    o: noop,
	    d: function d(detaching) {
	      if (detaching) detach(div);
	    }
	  };
	}

	function instance$6($$self, $$props, $$invalidate) {
	  var text = $$props.text;
	  var _$$props$selected = $$props.selected,
	      selected = _$$props$selected === void 0 ? false : _$$props$selected;

	  $$self.$$set = function ($$props) {
	    if ('text' in $$props) $$invalidate(0, text = $$props.text);
	    if ('selected' in $$props) $$invalidate(1, selected = $$props.selected);
	  };

	  return [text, selected];
	}

	var CategoryLabel = /*#__PURE__*/function (_SvelteComponent) {
	  _inherits(CategoryLabel, _SvelteComponent);

	  var _super = _createSuper$7(CategoryLabel);

	  function CategoryLabel(options) {
	    var _this;

	    _classCallCheck(this, CategoryLabel);

	    _this = _super.call(this);
	    init(_assertThisInitialized(_this), options, instance$6, create_fragment$7, safe_not_equal, {
	      text: 0,
	      selected: 1
	    });
	    return _this;
	  }

	  return CategoryLabel;
	}(SvelteComponent);

	function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function create_fragment$6(ctx) {
	  var svg;
	  var path;
	  return {
	    c: function c() {
	      svg = svg_element("svg");
	      path = svg_element("path");
	      attr(path, "d", "M10 5L5 4.37114e-07L0 5L10 5Z");
	      attr(path, "fill", "#7B828A");
	      attr(svg, "width", "10");
	      attr(svg, "height", "5");
	      attr(svg, "viewBox", "0 0 10 5");
	      attr(svg, "fill", "none");
	      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
	    },
	    m: function m(target, anchor) {
	      insert(target, svg, anchor);
	      append(svg, path);
	    },
	    p: noop,
	    i: noop,
	    o: noop,
	    d: function d(detaching) {
	      if (detaching) detach(svg);
	    }
	  };
	}

	var DropdownIcon = /*#__PURE__*/function (_SvelteComponent) {
	  _inherits(DropdownIcon, _SvelteComponent);

	  var _super = _createSuper$6(DropdownIcon);

	  function DropdownIcon(options) {
	    var _this;

	    _classCallCheck(this, DropdownIcon);

	    _this = _super.call(this);
	    init(_assertThisInitialized(_this), options, null, create_fragment$6, safe_not_equal, {});
	    return _this;
	  }

	  return DropdownIcon;
	}(SvelteComponent);

	function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function get_each_context$2(ctx, list, i) {
	  var child_ctx = ctx.slice();
	  child_ctx[3] = list[i];
	  return child_ctx;
	} // (15:2) {#each categoryObjects as taggedObjectId}


	function create_each_block$2(ctx) {
	  var categorylabel;
	  var current;
	  categorylabel = new CategoryLabel({
	    props: {
	      text:
	      /*taggedObjectId*/
	      ctx[3].name
	    }
	  });
	  return {
	    c: function c() {
	      create_component(categorylabel.$$.fragment);
	    },
	    m: function m(target, anchor) {
	      mount_component(categorylabel, target, anchor);
	      current = true;
	    },
	    p: function p(ctx, dirty) {
	      var categorylabel_changes = {};
	      if (dirty &
	      /*categoryObjects*/
	      1) categorylabel_changes.text =
	      /*taggedObjectId*/
	      ctx[3].name;
	      categorylabel.$set(categorylabel_changes);
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(categorylabel.$$.fragment, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(categorylabel.$$.fragment, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      destroy_component(categorylabel, detaching);
	    }
	  };
	}

	function create_fragment$5(ctx) {
	  var div2;
	  var div1;
	  var span;
	  var t1;
	  var div0;
	  var dropdownicon;
	  var t2;
	  var current;
	  dropdownicon = new DropdownIcon({});
	  var each_value =
	  /*categoryObjects*/
	  ctx[0];
	  var each_blocks = [];

	  for (var i = 0; i < each_value.length; i += 1) {
	    each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
	  }

	  var out = function out(i) {
	    return transition_out(each_blocks[i], 1, 1, function () {
	      each_blocks[i] = null;
	    });
	  };

	  return {
	    c: function c() {
	      div2 = element("div");
	      div1 = element("div");
	      span = element("span");
	      span.textContent = "CATEGORIES";
	      t1 = space();
	      div0 = element("div");
	      create_component(dropdownicon.$$.fragment);
	      t2 = space();

	      for (var _i = 0; _i < each_blocks.length; _i += 1) {
	        each_blocks[_i].c();
	      }

	      attr(span, "class", "svelte-18kr5tf");
	      attr(div0, "class", "svelte-18kr5tf");
	      attr(div1, "class", "dropdown svelte-18kr5tf");
	      attr(div2, "class", "sidebar svelte-18kr5tf");
	    },
	    m: function m(target, anchor) {
	      insert(target, div2, anchor);
	      append(div2, div1);
	      append(div1, span);
	      append(div1, t1);
	      append(div1, div0);
	      mount_component(dropdownicon, div0, null);
	      append(div2, t2);

	      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
	        each_blocks[_i2].m(div2, null);
	      }

	      current = true;
	    },
	    p: function p(ctx, _ref) {
	      var _ref2 = _slicedToArray(_ref, 1),
	          dirty = _ref2[0];

	      if (dirty &
	      /*categoryObjects*/
	      1) {
	        each_value =
	        /*categoryObjects*/
	        ctx[0];

	        var _i3;

	        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
	          var child_ctx = get_each_context$2(ctx, each_value, _i3);

	          if (each_blocks[_i3]) {
	            each_blocks[_i3].p(child_ctx, dirty);

	            transition_in(each_blocks[_i3], 1);
	          } else {
	            each_blocks[_i3] = create_each_block$2(child_ctx);

	            each_blocks[_i3].c();

	            transition_in(each_blocks[_i3], 1);

	            each_blocks[_i3].m(div2, null);
	          }
	        }

	        group_outros();

	        for (_i3 = each_value.length; _i3 < each_blocks.length; _i3 += 1) {
	          out(_i3);
	        }

	        check_outros();
	      }
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(dropdownicon.$$.fragment, local);

	      for (var _i4 = 0; _i4 < each_value.length; _i4 += 1) {
	        transition_in(each_blocks[_i4]);
	      }

	      current = true;
	    },
	    o: function o(local) {
	      transition_out(dropdownicon.$$.fragment, local);
	      each_blocks = each_blocks.filter(Boolean);

	      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
	        transition_out(each_blocks[_i5]);
	      }

	      current = false;
	    },
	    d: function d(detaching) {
	      if (detaching) detach(div2);
	      destroy_component(dropdownicon);
	      destroy_each(each_blocks, detaching);
	    }
	  };
	}

	function instance$5($$self, $$props, $$invalidate) {
	  var categoryObjects;
	  var _$$props$isPreviewMod = $$props.isPreviewMode,
	      isPreviewMode = _$$props$isPreviewMod === void 0 ? false : _$$props$isPreviewMod;
	  var category = $$props.category;

	  $$self.$$set = function ($$props) {
	    if ('isPreviewMode' in $$props) $$invalidate(1, isPreviewMode = $$props.isPreviewMode);
	    if ('category' in $$props) $$invalidate(2, category = $$props.category);
	  };

	  $$self.$$.update = function () {
	    if ($$self.$$.dirty &
	    /*isPreviewMode, category*/
	    6) {
	      $$invalidate(0, categoryObjects = isPreviewMode ? category.previewtaggedObjectIds : category.taggedObjectIds);
	    }
	  };

	  return [categoryObjects, isPreviewMode, category];
	}

	var Sidebar = /*#__PURE__*/function (_SvelteComponent) {
	  _inherits(Sidebar, _SvelteComponent);

	  var _super = _createSuper$5(Sidebar);

	  function Sidebar(options) {
	    var _this;

	    _classCallCheck(this, Sidebar);

	    _this = _super.call(this);
	    init(_assertThisInitialized(_this), options, instance$5, create_fragment$5, safe_not_equal, {
	      isPreviewMode: 1,
	      category: 2
	    });
	    return _this;
	  }

	  return Sidebar;
	}(SvelteComponent);

	function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function create_if_block_2(ctx) {
	  var modal;
	  var updating_shown;
	  var updating_currentTemplate;
	  var current;

	  function modal_shown_binding(value) {
	    /*modal_shown_binding*/
	    ctx[15](value);
	  }

	  function modal_currentTemplate_binding(value) {
	    /*modal_currentTemplate_binding*/
	    ctx[16](value);
	  }

	  var modal_props = {
	    components:
	    /*data*/
	    ctx[3].components
	  };

	  if (
	  /*openedModal*/
	  ctx[1] !== void 0) {
	    modal_props.shown =
	    /*openedModal*/
	    ctx[1];
	  }

	  if (
	  /*currentTemplate*/
	  ctx[2] !== void 0) {
	    modal_props.currentTemplate =
	    /*currentTemplate*/
	    ctx[2];
	  }

	  modal = new Modal({
	    props: modal_props
	  });
	  binding_callbacks.push(function () {
	    return bind(modal, 'shown', modal_shown_binding);
	  });
	  binding_callbacks.push(function () {
	    return bind(modal, 'currentTemplate', modal_currentTemplate_binding);
	  });
	  return {
	    c: function c() {
	      create_component(modal.$$.fragment);
	    },
	    m: function m(target, anchor) {
	      mount_component(modal, target, anchor);
	      current = true;
	    },
	    p: function p(ctx, dirty) {
	      var modal_changes = {};
	      if (dirty &
	      /*data*/
	      8) modal_changes.components =
	      /*data*/
	      ctx[3].components;

	      if (!updating_shown && dirty &
	      /*openedModal*/
	      2) {
	        updating_shown = true;
	        modal_changes.shown =
	        /*openedModal*/
	        ctx[1];
	        add_flush_callback(function () {
	          return updating_shown = false;
	        });
	      }

	      if (!updating_currentTemplate && dirty &
	      /*currentTemplate*/
	      4) {
	        updating_currentTemplate = true;
	        modal_changes.currentTemplate =
	        /*currentTemplate*/
	        ctx[2];
	        add_flush_callback(function () {
	          return updating_currentTemplate = false;
	        });
	      }

	      modal.$set(modal_changes);
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(modal.$$.fragment, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(modal.$$.fragment, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      destroy_component(modal, detaching);
	    }
	  };
	} // (33:0) {#if showSidebar}


	function create_if_block_1(ctx) {
	  var sidebar_1;
	  var updating_isPreviewMode;
	  var current;

	  function sidebar_1_isPreviewMode_binding(value) {
	    /*sidebar_1_isPreviewMode_binding*/
	    ctx[17](value);
	  }

	  var sidebar_1_props = {
	    category:
	    /*category*/
	    ctx[5]
	  };

	  if (
	  /*isPreviewMode*/
	  ctx[0] !== void 0) {
	    sidebar_1_props.isPreviewMode =
	    /*isPreviewMode*/
	    ctx[0];
	  }

	  sidebar_1 = new Sidebar({
	    props: sidebar_1_props
	  });
	  binding_callbacks.push(function () {
	    return bind(sidebar_1, 'isPreviewMode', sidebar_1_isPreviewMode_binding);
	  });
	  return {
	    c: function c() {
	      create_component(sidebar_1.$$.fragment);
	    },
	    m: function m(target, anchor) {
	      mount_component(sidebar_1, target, anchor);
	      current = true;
	    },
	    p: function p(ctx, dirty) {
	      var sidebar_1_changes = {};
	      if (dirty &
	      /*category*/
	      32) sidebar_1_changes.category =
	      /*category*/
	      ctx[5];

	      if (!updating_isPreviewMode && dirty &
	      /*isPreviewMode*/
	      1) {
	        updating_isPreviewMode = true;
	        sidebar_1_changes.isPreviewMode =
	        /*isPreviewMode*/
	        ctx[0];
	        add_flush_callback(function () {
	          return updating_isPreviewMode = false;
	        });
	      }

	      sidebar_1.$set(sidebar_1_changes);
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(sidebar_1.$$.fragment, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(sidebar_1.$$.fragment, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      destroy_component(sidebar_1, detaching);
	    }
	  };
	} // (46:0) {:else}


	function create_else_block(ctx) {
	  var div;
	  return {
	    c: function c() {
	      div = element("div");
	      attr(div, "class", "svelte-19gfewk");
	    },
	    m: function m(target, anchor) {
	      insert(target, div, anchor);
	    },
	    p: noop,
	    i: noop,
	    o: noop,
	    d: function d(detaching) {
	      if (detaching) detach(div);
	    }
	  };
	} // (37:0) {#if showContent}


	function create_if_block$2(ctx) {
	  var content;
	  var updating_isPreviewMode;
	  var current;

	  function content_isPreviewMode_binding(value) {
	    /*content_isPreviewMode_binding*/
	    ctx[18](value);
	  }

	  var content_props = {
	    sections:
	    /*sections*/
	    ctx[8],
	    data:
	    /*data*/
	    ctx[3],
	    token:
	    /*token*/
	    ctx[4]
	  };

	  if (
	  /*isPreviewMode*/
	  ctx[0] !== void 0) {
	    content_props.isPreviewMode =
	    /*isPreviewMode*/
	    ctx[0];
	  }

	  content = new Content({
	    props: content_props
	  });
	  binding_callbacks.push(function () {
	    return bind(content, 'isPreviewMode', content_isPreviewMode_binding);
	  });
	  content.$on("card-click",
	  /*card_click_handler*/
	  ctx[19]);
	  content.$on("open-modal",
	  /*open_modal_handler*/
	  ctx[20]);
	  return {
	    c: function c() {
	      create_component(content.$$.fragment);
	    },
	    m: function m(target, anchor) {
	      mount_component(content, target, anchor);
	      current = true;
	    },
	    p: function p(ctx, dirty) {
	      var content_changes = {};
	      if (dirty &
	      /*sections*/
	      256) content_changes.sections =
	      /*sections*/
	      ctx[8];
	      if (dirty &
	      /*data*/
	      8) content_changes.data =
	      /*data*/
	      ctx[3];
	      if (dirty &
	      /*token*/
	      16) content_changes.token =
	      /*token*/
	      ctx[4];

	      if (!updating_isPreviewMode && dirty &
	      /*isPreviewMode*/
	      1) {
	        updating_isPreviewMode = true;
	        content_changes.isPreviewMode =
	        /*isPreviewMode*/
	        ctx[0];
	        add_flush_callback(function () {
	          return updating_isPreviewMode = false;
	        });
	      }

	      content.$set(content_changes);
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(content.$$.fragment, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(content.$$.fragment, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      destroy_component(content, detaching);
	    }
	  };
	}

	function create_fragment$4(ctx) {
	  var t0;
	  var t1;
	  var current_block_type_index;
	  var if_block2;
	  var if_block2_anchor;
	  var current;
	  var if_block0 = !!
	  /*data*/
	  ctx[3] && !!
	  /*currentTemplate*/
	  ctx[2] && create_if_block_2(ctx);
	  var if_block1 =
	  /*showSidebar*/
	  ctx[7] && create_if_block_1(ctx);
	  var if_block_creators = [create_if_block$2, create_else_block];
	  var if_blocks = [];

	  function select_block_type(ctx, dirty) {
	    if (
	    /*showContent*/
	    ctx[6]) return 0;
	    return 1;
	  }

	  current_block_type_index = select_block_type(ctx);
	  if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	  return {
	    c: function c() {
	      if (if_block0) if_block0.c();
	      t0 = space();
	      if (if_block1) if_block1.c();
	      t1 = space();
	      if_block2.c();
	      if_block2_anchor = empty();
	    },
	    m: function m(target, anchor) {
	      if (if_block0) if_block0.m(target, anchor);
	      insert(target, t0, anchor);
	      if (if_block1) if_block1.m(target, anchor);
	      insert(target, t1, anchor);
	      if_blocks[current_block_type_index].m(target, anchor);
	      insert(target, if_block2_anchor, anchor);
	      current = true;
	    },
	    p: function p(ctx, _ref) {
	      var _ref2 = _slicedToArray(_ref, 1),
	          dirty = _ref2[0];

	      if (!!
	      /*data*/
	      ctx[3] && !!
	      /*currentTemplate*/
	      ctx[2]) {
	        if (if_block0) {
	          if_block0.p(ctx, dirty);

	          if (dirty &
	          /*data, currentTemplate*/
	          12) {
	            transition_in(if_block0, 1);
	          }
	        } else {
	          if_block0 = create_if_block_2(ctx);
	          if_block0.c();
	          transition_in(if_block0, 1);
	          if_block0.m(t0.parentNode, t0);
	        }
	      } else if (if_block0) {
	        group_outros();
	        transition_out(if_block0, 1, 1, function () {
	          if_block0 = null;
	        });
	        check_outros();
	      }

	      if (
	      /*showSidebar*/
	      ctx[7]) {
	        if (if_block1) {
	          if_block1.p(ctx, dirty);

	          if (dirty &
	          /*showSidebar*/
	          128) {
	            transition_in(if_block1, 1);
	          }
	        } else {
	          if_block1 = create_if_block_1(ctx);
	          if_block1.c();
	          transition_in(if_block1, 1);
	          if_block1.m(t1.parentNode, t1);
	        }
	      } else if (if_block1) {
	        group_outros();
	        transition_out(if_block1, 1, 1, function () {
	          if_block1 = null;
	        });
	        check_outros();
	      }

	      var previous_block_index = current_block_type_index;
	      current_block_type_index = select_block_type(ctx);

	      if (current_block_type_index === previous_block_index) {
	        if_blocks[current_block_type_index].p(ctx, dirty);
	      } else {
	        group_outros();
	        transition_out(if_blocks[previous_block_index], 1, 1, function () {
	          if_blocks[previous_block_index] = null;
	        });
	        check_outros();
	        if_block2 = if_blocks[current_block_type_index];

	        if (!if_block2) {
	          if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	          if_block2.c();
	        } else {
	          if_block2.p(ctx, dirty);
	        }

	        transition_in(if_block2, 1);
	        if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
	      }
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(if_block0);
	      transition_in(if_block1);
	      transition_in(if_block2);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(if_block0);
	      transition_out(if_block1);
	      transition_out(if_block2);
	      current = false;
	    },
	    d: function d(detaching) {
	      if (if_block0) if_block0.d(detaching);
	      if (detaching) detach(t0);
	      if (if_block1) if_block1.d(detaching);
	      if (detaching) detach(t1);
	      if_blocks[current_block_type_index].d(detaching);
	      if (detaching) detach(if_block2_anchor);
	    }
	  };
	}

	function instance$4($$self, $$props, $$invalidate) {
	  var category;
	  var sections;
	  var showSidebar;
	  var showContent;

	  var _a, _b;

	  var sidebar = $$props.sidebar;
	  var data = $$props.data;
	  var navigate = $$props.navigate;
	  var _$$props$isPreviewMod = $$props.isPreviewMode,
	      isPreviewMode = _$$props$isPreviewMod === void 0 ? false : _$$props$isPreviewMod;
	  var token = $$props.token;
	  var _$$props$openedModal = $$props.openedModal,
	      openedModal = _$$props$openedModal === void 0 ? false : _$$props$openedModal;
	  var currentTemplate = $$props.currentTemplate;

	  var routingFunction = function routingFunction(e) {
	    if (!isPreviewMode) navigate(e.detail);
	  };

	  var openingModal = function openingModal(e) {
	    $$invalidate(1, openedModal = true);
	    $$invalidate(2, currentTemplate = e.detail);
	  };

	  function modal_shown_binding(value) {
	    openedModal = value;
	    $$invalidate(1, openedModal);
	  }

	  function modal_currentTemplate_binding(value) {
	    currentTemplate = value;
	    $$invalidate(2, currentTemplate);
	  }

	  function sidebar_1_isPreviewMode_binding(value) {
	    isPreviewMode = value;
	    $$invalidate(0, isPreviewMode);
	  }

	  function content_isPreviewMode_binding(value) {
	    isPreviewMode = value;
	    $$invalidate(0, isPreviewMode);
	  }

	  var card_click_handler = function card_click_handler(e) {
	    return routingFunction(e);
	  };

	  var open_modal_handler = function open_modal_handler(e) {
	    return openingModal(e);
	  };

	  $$self.$$set = function ($$props) {
	    if ('sidebar' in $$props) $$invalidate(11, sidebar = $$props.sidebar);
	    if ('data' in $$props) $$invalidate(3, data = $$props.data);
	    if ('navigate' in $$props) $$invalidate(12, navigate = $$props.navigate);
	    if ('isPreviewMode' in $$props) $$invalidate(0, isPreviewMode = $$props.isPreviewMode);
	    if ('token' in $$props) $$invalidate(4, token = $$props.token);
	    if ('openedModal' in $$props) $$invalidate(1, openedModal = $$props.openedModal);
	    if ('currentTemplate' in $$props) $$invalidate(2, currentTemplate = $$props.currentTemplate);
	  };

	  $$self.$$.update = function () {
	    if ($$self.$$.dirty &
	    /*sidebar*/
	    2048) {
	      var _ref3;

	      $$invalidate(5, (_ref3 = sidebar || {}, category = _ref3.category, sections = _ref3.sections, _ref3), category, ($$invalidate(8, sections), $$invalidate(11, sidebar)));
	    }

	    if ($$self.$$.dirty &
	    /*isPreviewMode, category, _a, _b*/
	    24609) {
	      $$invalidate(7, showSidebar = isPreviewMode && !!category && (category === null || category === void 0 ? void 0 : category.previewEnabled) && ($$invalidate(13, _a = category === null || category === void 0 ? void 0 : category.previewTaggedObjectIds) === null || _a === void 0 ? void 0 : _a.length) || !!category && (category === null || category === void 0 ? void 0 : category.enabled) && ($$invalidate(14, _b = category === null || category === void 0 ? void 0 : category.taggedObjectIds) === null || _b === void 0 ? void 0 : _b.length));
	    }

	    if ($$self.$$.dirty &
	    /*sidebar*/
	    2048) {
	      $$invalidate(6, showContent = !!sidebar);
	    }
	  };

	  return [isPreviewMode, openedModal, currentTemplate, data, token, category, showContent, showSidebar, sections, routingFunction, openingModal, sidebar, navigate, _a, _b, modal_shown_binding, modal_currentTemplate_binding, sidebar_1_isPreviewMode_binding, content_isPreviewMode_binding, card_click_handler, open_modal_handler];
	}

	var Index$2 = /*#__PURE__*/function (_SvelteComponent) {
	  _inherits(Index, _SvelteComponent);

	  var _super = _createSuper$4(Index);

	  function Index(options) {
	    var _this;

	    _classCallCheck(this, Index);

	    _this = _super.call(this);
	    init(_assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, {
	      sidebar: 11,
	      data: 3,
	      navigate: 12,
	      isPreviewMode: 0,
	      token: 4,
	      openedModal: 1,
	      currentTemplate: 2
	    });
	    return _this;
	  }

	  return Index;
	}(SvelteComponent);

	function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function get_each_context$1(ctx, list, i) {
	  var child_ctx = ctx.slice();
	  child_ctx[8] = list[i];
	  child_ctx[9] = list;
	  child_ctx[10] = i;
	  return child_ctx;
	} // (15:4) {#each filteredTemplates as flow (flow._id)}


	function create_each_block$1(key_1, ctx) {
	  var first;
	  var flow;
	  var updating_enabled;
	  var current;

	  function flow_enabled_binding(value) {
	    /*flow_enabled_binding*/
	    ctx[5](value,
	    /*flow*/
	    ctx[8]);
	  }

	  var flow_props = {
	    description:
	    /*flow*/
	    ctx[8].description,
	    images:
	    /*getImageArray*/
	    ctx[2](
	    /*flow*/
	    ctx[8])
	  };

	  if (
	  /*flow*/
	  ctx[8].enabled !== void 0) {
	    flow_props.enabled =
	    /*flow*/
	    ctx[8].enabled;
	  }

	  flow = new Flow({
	    props: flow_props
	  });
	  binding_callbacks.push(function () {
	    return bind(flow, 'enabled', flow_enabled_binding);
	  });
	  return {
	    key: key_1,
	    first: null,
	    c: function c() {
	      first = empty();
	      create_component(flow.$$.fragment);
	      this.first = first;
	    },
	    m: function m(target, anchor) {
	      insert(target, first, anchor);
	      mount_component(flow, target, anchor);
	      current = true;
	    },
	    p: function p(new_ctx, dirty) {
	      ctx = new_ctx;
	      var flow_changes = {};
	      if (dirty &
	      /*filteredTemplates*/
	      2) flow_changes.description =
	      /*flow*/
	      ctx[8].description;
	      if (dirty &
	      /*filteredTemplates*/
	      2) flow_changes.images =
	      /*getImageArray*/
	      ctx[2](
	      /*flow*/
	      ctx[8]);

	      if (!updating_enabled && dirty &
	      /*filteredTemplates*/
	      2) {
	        updating_enabled = true;
	        flow_changes.enabled =
	        /*flow*/
	        ctx[8].enabled;
	        add_flush_callback(function () {
	          return updating_enabled = false;
	        });
	      }

	      flow.$set(flow_changes);
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(flow.$$.fragment, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(flow.$$.fragment, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      if (detaching) detach(first);
	      destroy_component(flow, detaching);
	    }
	  };
	}

	function create_fragment$3(ctx) {
	  var div1;
	  var h3;
	  var t1;
	  var div0;
	  var each_blocks = [];
	  var each_1_lookup = new Map();
	  var div0_class_value;
	  var current;
	  var each_value =
	  /*filteredTemplates*/
	  ctx[1];

	  var get_key = function get_key(ctx) {
	    return (
	      /*flow*/
	      ctx[8]._id
	    );
	  };

	  for (var i = 0; i < each_value.length; i += 1) {
	    var child_ctx = get_each_context$1(ctx, each_value, i);
	    var key = get_key(child_ctx);
	    each_1_lookup.set(key, each_blocks[i] = create_each_block$1(key, child_ctx));
	  }

	  return {
	    c: function c() {
	      div1 = element("div");
	      h3 = element("h3");
	      h3.textContent = "Active Flows";
	      t1 = space();
	      div0 = element("div");

	      for (var _i = 0; _i < each_blocks.length; _i += 1) {
	        each_blocks[_i].c();
	      }

	      attr(div0, "class", div0_class_value = "apps-grid " +
	      /*breakpoints*/
	      ctx[0]);
	      attr(div1, "class", "main-container");
	    },
	    m: function m(target, anchor) {
	      insert(target, div1, anchor);
	      append(div1, h3);
	      append(div1, t1);
	      append(div1, div0);

	      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
	        each_blocks[_i2].m(div0, null);
	      }

	      current = true;
	    },
	    p: function p(ctx, _ref) {
	      var _ref2 = _slicedToArray(_ref, 1),
	          dirty = _ref2[0];

	      if (dirty &
	      /*filteredTemplates, getImageArray*/
	      6) {
	        each_value =
	        /*filteredTemplates*/
	        ctx[1];
	        group_outros();
	        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div0, outro_and_destroy_block, create_each_block$1, null, get_each_context$1);
	        check_outros();
	      }

	      if (!current || dirty &
	      /*breakpoints*/
	      1 && div0_class_value !== (div0_class_value = "apps-grid " +
	      /*breakpoints*/
	      ctx[0])) {
	        attr(div0, "class", div0_class_value);
	      }
	    },
	    i: function i(local) {
	      if (current) return;

	      for (var _i3 = 0; _i3 < each_value.length; _i3 += 1) {
	        transition_in(each_blocks[_i3]);
	      }

	      current = true;
	    },
	    o: function o(local) {
	      for (var _i4 = 0; _i4 < each_blocks.length; _i4 += 1) {
	        transition_out(each_blocks[_i4]);
	      }

	      current = false;
	    },
	    d: function d(detaching) {
	      if (detaching) detach(div1);

	      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
	        each_blocks[_i5].d();
	      }
	    }
	  };
	}

	function instance$3($$self, $$props, $$invalidate) {
	  var components;
	  var templates;
	  var filteredTemplates;
	  var breakpoints = $$props.breakpoints;
	  var data = $$props.data;

	  var getImageArray = function getImageArray(template) {
	    return template.graph.nodes.map(function (_ref3) {
	      var componentId = _ref3.componentId;

	      var _a;

	      return (_a = components.find(function (c) {
	        return c._id === componentId;
	      })) === null || _a === void 0 ? void 0 : _a.logo;
	    }).filter(Boolean);
	  };

	  function flow_enabled_binding(value, flow) {
	    if ($$self.$$.not_equal(flow.enabled, value)) {
	      flow.enabled = value;
	      ($$invalidate(1, filteredTemplates), $$invalidate(4, templates)), $$invalidate(3, data);
	    }
	  }

	  $$self.$$set = function ($$props) {
	    if ('breakpoints' in $$props) $$invalidate(0, breakpoints = $$props.breakpoints);
	    if ('data' in $$props) $$invalidate(3, data = $$props.data);
	  };

	  $$self.$$.update = function () {
	    if ($$self.$$.dirty &
	    /*data*/
	    8) {
	      var _data;

	      $$invalidate(4, (_data = data, components = _data.components, templates = _data.templates, _data), templates);
	    }

	    if ($$self.$$.dirty &
	    /*templates*/
	    16) {
	      $$invalidate(1, filteredTemplates = templates.filter(function (t) {
	        return t.enabled;
	      }));
	    }
	  };

	  return [breakpoints, filteredTemplates, getImageArray, data, templates, flow_enabled_binding];
	}

	var Index$1 = /*#__PURE__*/function (_SvelteComponent) {
	  _inherits(Index, _SvelteComponent);

	  var _super = _createSuper$3(Index);

	  function Index(options) {
	    var _this;

	    _classCallCheck(this, Index);

	    _this = _super.call(this);
	    init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {
	      breakpoints: 0,
	      data: 3
	    });
	    return _this;
	  }

	  return Index;
	}(SvelteComponent);

	function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function create_if_block$1(ctx) {
	  var div;
	  var mounted;
	  var dispose;
	  return {
	    c: function c() {
	      div = element("div");
	      div.innerHTML = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.9425 5L8 6.9425L6.0575 5L5 6.0575L6.9425 8L5 9.9425L6.0575 11L8 9.0575L9.9425 11L11 9.9425L9.0575 8L11 6.0575L9.9425 5ZM8 0.5C3.8525 0.5 0.5 3.8525 0.5 8C0.5 12.1475 3.8525 15.5 8 15.5C12.1475 15.5 15.5 12.1475 15.5 8C15.5 3.8525 12.1475 0.5 8 0.5ZM8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14Z\" fill=\"#fff\"></path></svg>";
	      attr(div, "class", "token-remove svelte-18ileth");
	      attr(div, "title", "Remove");
	    },
	    m: function m(target, anchor) {
	      insert(target, div, anchor);

	      if (!mounted) {
	        dispose = listen(div, "click", stop_propagation(prevent_default(
	        /*onRemoveClick*/
	        ctx[2])));
	        mounted = true;
	      }
	    },
	    p: noop,
	    d: function d(detaching) {
	      if (detaching) detach(div);
	      mounted = false;
	      dispose();
	    }
	  };
	}

	function create_fragment$2(ctx) {
	  var div;
	  var span;
	  var t0;
	  var t1;
	  var mounted;
	  var dispose;
	  var if_block =
	  /*deleteIcon*/
	  ctx[1] && create_if_block$1(ctx);
	  return {
	    c: function c() {
	      div = element("div");
	      span = element("span");
	      t0 = text(
	      /*name*/
	      ctx[0]);
	      t1 = space();
	      if (if_block) if_block.c();
	      attr(span, "class", "svelte-18ileth");
	      attr(div, "class", "token svelte-18ileth");
	      toggle_class(div, "selected",
	      /*deleteIcon*/
	      ctx[1]);
	    },
	    m: function m(target, anchor) {
	      insert(target, div, anchor);
	      append(div, span);
	      append(span, t0);
	      append(div, t1);
	      if (if_block) if_block.m(div, null);

	      if (!mounted) {
	        dispose = listen(div, "click",
	        /*click_handler*/
	        ctx[3]);
	        mounted = true;
	      }
	    },
	    p: function p(ctx, _ref) {
	      var _ref2 = _slicedToArray(_ref, 1),
	          dirty = _ref2[0];

	      if (dirty &
	      /*name*/
	      1) set_data(t0,
	      /*name*/
	      ctx[0]);

	      if (
	      /*deleteIcon*/
	      ctx[1]) {
	        if (if_block) {
	          if_block.p(ctx, dirty);
	        } else {
	          if_block = create_if_block$1(ctx);
	          if_block.c();
	          if_block.m(div, null);
	        }
	      } else if (if_block) {
	        if_block.d(1);
	        if_block = null;
	      }

	      if (dirty &
	      /*deleteIcon*/
	      2) {
	        toggle_class(div, "selected",
	        /*deleteIcon*/
	        ctx[1]);
	      }
	    },
	    i: noop,
	    o: noop,
	    d: function d(detaching) {
	      if (detaching) detach(div);
	      if (if_block) if_block.d();
	      mounted = false;
	      dispose();
	    }
	  };
	}

	function instance$2($$self, $$props, $$invalidate) {
	  var name = $$props.name;
	  var _$$props$deleteIcon = $$props.deleteIcon,
	      deleteIcon = _$$props$deleteIcon === void 0 ? false : _$$props$deleteIcon;
	  var dispatch = createEventDispatcher();

	  var onRemoveClick = function onRemoveClick() {
	    dispatch("token-click");
	  };

	  function click_handler(event) {
	    bubble.call(this, $$self, event);
	  }

	  $$self.$$set = function ($$props) {
	    if ('name' in $$props) $$invalidate(0, name = $$props.name);
	    if ('deleteIcon' in $$props) $$invalidate(1, deleteIcon = $$props.deleteIcon);
	  };

	  return [name, deleteIcon, onRemoveClick, click_handler];
	}

	var Chip = /*#__PURE__*/function (_SvelteComponent) {
	  _inherits(Chip, _SvelteComponent);

	  var _super = _createSuper$2(Chip);

	  function Chip(options) {
	    var _this;

	    _classCallCheck(this, Chip);

	    _this = _super.call(this);
	    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
	      name: 0,
	      deleteIcon: 1
	    });
	    return _this;
	  }

	  return Chip;
	}(SvelteComponent);

	function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var Boolean_1 = globals.Boolean;

	function get_each_context(ctx, list, i) {
	  var child_ctx = ctx.slice();
	  child_ctx[27] = list[i];
	  child_ctx[28] = list;
	  child_ctx[29] = i;
	  return child_ctx;
	}

	function get_each_context_1(ctx, list, i) {
	  var child_ctx = ctx.slice();
	  child_ctx[30] = list[i];
	  return child_ctx;
	} // (134:4) {#each filteredCollections as collection}


	function create_each_block_1(ctx) {
	  var chip;
	  var current;

	  function click_handler() {
	    return (
	      /*click_handler*/
	      ctx[18](
	      /*collection*/
	      ctx[30])
	    );
	  }

	  function token_click_handler() {
	    return (
	      /*token_click_handler*/
	      ctx[19](
	      /*collection*/
	      ctx[30])
	    );
	  }

	  chip = new Chip({
	    props: {
	      name:
	      /*collection*/
	      ctx[30].name,
	      deleteIcon:
	      /*selectedCollections*/
	      ctx[2].includes(
	      /*collection*/
	      ctx[30]._id)
	    }
	  });
	  chip.$on("click", click_handler);
	  chip.$on("token-click", token_click_handler);
	  return {
	    c: function c() {
	      create_component(chip.$$.fragment);
	    },
	    m: function m(target, anchor) {
	      mount_component(chip, target, anchor);
	      current = true;
	    },
	    p: function p(new_ctx, dirty) {
	      ctx = new_ctx;
	      var chip_changes = {};
	      if (dirty[0] &
	      /*filteredCollections*/
	      32) chip_changes.name =
	      /*collection*/
	      ctx[30].name;
	      if (dirty[0] &
	      /*selectedCollections, filteredCollections*/
	      36) chip_changes.deleteIcon =
	      /*selectedCollections*/
	      ctx[2].includes(
	      /*collection*/
	      ctx[30]._id);
	      chip.$set(chip_changes);
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(chip.$$.fragment, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(chip.$$.fragment, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      destroy_component(chip, detaching);
	    }
	  };
	} // (145:4) {#each filteredTemplates as flow (flow._id)}


	function create_each_block(key_1, ctx) {
	  var first;
	  var flow;
	  var updating_enabled;
	  var current;

	  function flow_enabled_binding(value) {
	    /*flow_enabled_binding*/
	    ctx[20](value,
	    /*flow*/
	    ctx[27]);
	  }

	  var flow_props = {
	    description:
	    /*flow*/
	    ctx[27].description,
	    images:
	    /*getImages*/
	    ctx[1](
	    /*flow*/
	    ctx[27])
	  };

	  if (
	  /*flow*/
	  ctx[27].enabled !== void 0) {
	    flow_props.enabled =
	    /*flow*/
	    ctx[27].enabled;
	  }

	  flow = new Flow({
	    props: flow_props
	  });
	  binding_callbacks.push(function () {
	    return bind(flow, 'enabled', flow_enabled_binding);
	  });
	  return {
	    key: key_1,
	    first: null,
	    c: function c() {
	      first = empty();
	      create_component(flow.$$.fragment);
	      this.first = first;
	    },
	    m: function m(target, anchor) {
	      insert(target, first, anchor);
	      mount_component(flow, target, anchor);
	      current = true;
	    },
	    p: function p(new_ctx, dirty) {
	      ctx = new_ctx;
	      var flow_changes = {};
	      if (dirty[0] &
	      /*filteredTemplates*/
	      8) flow_changes.description =
	      /*flow*/
	      ctx[27].description;
	      if (dirty[0] &
	      /*filteredTemplates*/
	      8) flow_changes.images =
	      /*getImages*/
	      ctx[1](
	      /*flow*/
	      ctx[27]);

	      if (!updating_enabled && dirty[0] &
	      /*filteredTemplates*/
	      8) {
	        updating_enabled = true;
	        flow_changes.enabled =
	        /*flow*/
	        ctx[27].enabled;
	        add_flush_callback(function () {
	          return updating_enabled = false;
	        });
	      }

	      flow.$set(flow_changes);
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(flow.$$.fragment, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(flow.$$.fragment, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      if (detaching) detach(first);
	      destroy_component(flow, detaching);
	    }
	  };
	}

	function create_fragment$1(ctx) {
	  var div5;
	  var div0;
	  var backbutton;
	  var t0;
	  var div2;
	  var img;
	  var img_src_value;
	  var img_alt_value;
	  var t1;
	  var div1;
	  var h2;
	  var t2_value =
	  /*component*/
	  ctx[4].name + "";
	  var t2;
	  var t3;
	  var p;
	  var t4_value =
	  /*component*/
	  ctx[4].description + "";
	  var t4;
	  var t5;
	  var h3;
	  var t7;
	  var div3;
	  var t8;
	  var div4;
	  var each_blocks = [];
	  var each1_lookup = new Map();
	  var div4_class_value;
	  var current;
	  backbutton = new BackButton({});
	  backbutton.$on("click",
	  /*onBackButtonClick*/
	  ctx[7]);
	  var each_value_1 =
	  /*filteredCollections*/
	  ctx[5];
	  var each_blocks_1 = [];

	  for (var i = 0; i < each_value_1.length; i += 1) {
	    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	  }

	  var out = function out(i) {
	    return transition_out(each_blocks_1[i], 1, 1, function () {
	      each_blocks_1[i] = null;
	    });
	  };

	  var each_value =
	  /*filteredTemplates*/
	  ctx[3];

	  var get_key = function get_key(ctx) {
	    return (
	      /*flow*/
	      ctx[27]._id
	    );
	  };

	  for (var _i = 0; _i < each_value.length; _i += 1) {
	    var child_ctx = get_each_context(ctx, each_value, _i);
	    var key = get_key(child_ctx);
	    each1_lookup.set(key, each_blocks[_i] = create_each_block(key, child_ctx));
	  }

	  return {
	    c: function c() {
	      div5 = element("div");
	      div0 = element("div");
	      create_component(backbutton.$$.fragment);
	      t0 = space();
	      div2 = element("div");
	      img = element("img");
	      t1 = space();
	      div1 = element("div");
	      h2 = element("h2");
	      t2 = text(t2_value);
	      t3 = space();
	      p = element("p");
	      t4 = text(t4_value);
	      t5 = space();
	      h3 = element("h3");
	      h3.textContent = "Flows";
	      t7 = space();
	      div3 = element("div");

	      for (var _i2 = 0; _i2 < each_blocks_1.length; _i2 += 1) {
	        each_blocks_1[_i2].c();
	      }

	      t8 = space();
	      div4 = element("div");

	      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
	        each_blocks[_i3].c();
	      }

	      attr(div0, "class", "back-button");
	      if (!src_url_equal(img.src, img_src_value =
	      /*component*/
	      ctx[4].logo)) attr(img, "src", img_src_value);
	      attr(img, "alt", img_alt_value = "" + (
	      /*component*/
	      ctx[4].name + " logo"));
	      attr(div1, "class", "component-content");
	      attr(div2, "class", "component");
	      attr(div3, "class", "collections-grid");
	      attr(div4, "class", div4_class_value = "apps-grid " +
	      /*breakpoints*/
	      ctx[0]);
	      attr(div5, "class", "main-container");
	    },
	    m: function m(target, anchor) {
	      insert(target, div5, anchor);
	      append(div5, div0);
	      mount_component(backbutton, div0, null);
	      append(div5, t0);
	      append(div5, div2);
	      append(div2, img);
	      append(div2, t1);
	      append(div2, div1);
	      append(div1, h2);
	      append(h2, t2);
	      append(div1, t3);
	      append(div1, p);
	      append(p, t4);
	      append(div5, t5);
	      append(div5, h3);
	      append(div5, t7);
	      append(div5, div3);

	      for (var _i4 = 0; _i4 < each_blocks_1.length; _i4 += 1) {
	        each_blocks_1[_i4].m(div3, null);
	      }

	      append(div5, t8);
	      append(div5, div4);

	      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
	        each_blocks[_i5].m(div4, null);
	      }

	      current = true;
	    },
	    p: function p(ctx, dirty) {
	      if (!current || dirty[0] &
	      /*component*/
	      16 && !src_url_equal(img.src, img_src_value =
	      /*component*/
	      ctx[4].logo)) {
	        attr(img, "src", img_src_value);
	      }

	      if (!current || dirty[0] &
	      /*component*/
	      16 && img_alt_value !== (img_alt_value = "" + (
	      /*component*/
	      ctx[4].name + " logo"))) {
	        attr(img, "alt", img_alt_value);
	      }

	      if ((!current || dirty[0] &
	      /*component*/
	      16) && t2_value !== (t2_value =
	      /*component*/
	      ctx[4].name + "")) set_data(t2, t2_value);
	      if ((!current || dirty[0] &
	      /*component*/
	      16) && t4_value !== (t4_value =
	      /*component*/
	      ctx[4].description + "")) set_data(t4, t4_value);

	      if (dirty[0] &
	      /*filteredCollections, selectedCollections, onCollectionClick, onTokenCollectionClick*/
	      804) {
	        each_value_1 =
	        /*filteredCollections*/
	        ctx[5];

	        var _i6;

	        for (_i6 = 0; _i6 < each_value_1.length; _i6 += 1) {
	          var _child_ctx = get_each_context_1(ctx, each_value_1, _i6);

	          if (each_blocks_1[_i6]) {
	            each_blocks_1[_i6].p(_child_ctx, dirty);

	            transition_in(each_blocks_1[_i6], 1);
	          } else {
	            each_blocks_1[_i6] = create_each_block_1(_child_ctx);

	            each_blocks_1[_i6].c();

	            transition_in(each_blocks_1[_i6], 1);

	            each_blocks_1[_i6].m(div3, null);
	          }
	        }

	        group_outros();

	        for (_i6 = each_value_1.length; _i6 < each_blocks_1.length; _i6 += 1) {
	          out(_i6);
	        }

	        check_outros();
	      }

	      if (dirty[0] &
	      /*filteredTemplates, getImages*/
	      10) {
	        each_value =
	        /*filteredTemplates*/
	        ctx[3];
	        group_outros();
	        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each1_lookup, div4, outro_and_destroy_block, create_each_block, null, get_each_context);
	        check_outros();
	      }

	      if (!current || dirty[0] &
	      /*breakpoints*/
	      1 && div4_class_value !== (div4_class_value = "apps-grid " +
	      /*breakpoints*/
	      ctx[0])) {
	        attr(div4, "class", div4_class_value);
	      }
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(backbutton.$$.fragment, local);

	      for (var _i7 = 0; _i7 < each_value_1.length; _i7 += 1) {
	        transition_in(each_blocks_1[_i7]);
	      }

	      for (var _i8 = 0; _i8 < each_value.length; _i8 += 1) {
	        transition_in(each_blocks[_i8]);
	      }

	      current = true;
	    },
	    o: function o(local) {
	      transition_out(backbutton.$$.fragment, local);
	      each_blocks_1 = each_blocks_1.filter(Boolean_1);

	      for (var _i9 = 0; _i9 < each_blocks_1.length; _i9 += 1) {
	        transition_out(each_blocks_1[_i9]);
	      }

	      for (var _i10 = 0; _i10 < each_blocks.length; _i10 += 1) {
	        transition_out(each_blocks[_i10]);
	      }

	      current = false;
	    },
	    d: function d(detaching) {
	      if (detaching) detach(div5);
	      destroy_component(backbutton);
	      destroy_each(each_blocks_1, detaching);

	      for (var _i11 = 0; _i11 < each_blocks.length; _i11 += 1) {
	        each_blocks[_i11].d();
	      }
	    }
	  };
	}

	function instance$1($$self, $$props, $$invalidate) {
	  var id;
	  var components;
	  var templates;
	  var collections;
	  var component;
	  var filteredTemplates;
	  var collectionIds;
	  var filteredCollections;
	  var $params;

	  this && this.__awaiter || function (thisArg, _arguments, P, generator) {
	    function adopt(value) {
	      return value instanceof P ? value : new P(function (resolve) {
	        resolve(value);
	      });
	    }

	    return new (P || (P = Promise))(function (resolve, reject) {
	      function fulfilled(value) {
	        try {
	          step(generator.next(value));
	        } catch (e) {
	          reject(e);
	        }
	      }

	      function rejected(value) {
	        try {
	          step(generator["throw"](value));
	        } catch (e) {
	          reject(e);
	        }
	      }

	      function step(result) {
	        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
	      }

	      step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	  };

	  var navigate = $$props.navigate;
	  var breakpoints = $$props.breakpoints;
	  var data = $$props.data;
	  var params = useParams();
	  component_subscribe($$self, params, function (value) {
	    return $$invalidate(17, $params = value);
	  });
	  var selectedCollections = [];

	  var getImages = function getImages(template) {
	    var nodes = template.graph.nodes;
	    return nodes.map(function (_ref) {
	      var componentId = _ref.componentId;

	      var _a;

	      return (_a = components.find(function (_ref2) {
	        var _id = _ref2._id;
	        return _id === componentId;
	      })) === null || _a === void 0 ? void 0 : _a.logo;
	    }).filter(Boolean);
	  };

	  var onBackButtonClick = function onBackButtonClick() {
	    navigate(-1);
	  };

	  var onCollectionClick = function onCollectionClick(collectionId) {
	    $$invalidate(2, selectedCollections = [].concat(_toConsumableArray(selectedCollections), [collectionId]));
	  };

	  var onTokenCollectionClick = function onTokenCollectionClick(collectionId) {
	    $$invalidate(2, selectedCollections = selectedCollections.filter(function (collId) {
	      return collId !== collectionId;
	    }));
	  };

	  var click_handler = function click_handler(collection) {
	    return onCollectionClick(collection._id);
	  };

	  var token_click_handler = function token_click_handler(collection) {
	    return onTokenCollectionClick(collection._id);
	  };

	  function flow_enabled_binding(value, flow) {
	    if ($$self.$$.not_equal(flow.enabled, value)) {
	      flow.enabled = value;
	      (((((($$invalidate(3, filteredTemplates), $$invalidate(15, templates)), $$invalidate(4, component)), $$invalidate(2, selectedCollections)), $$invalidate(11, data)), $$invalidate(12, components)), $$invalidate(16, id)), $$invalidate(17, $params);
	    }
	  }

	  $$self.$$set = function ($$props) {
	    if ('navigate' in $$props) $$invalidate(10, navigate = $$props.navigate);
	    if ('breakpoints' in $$props) $$invalidate(0, breakpoints = $$props.breakpoints);
	    if ('data' in $$props) $$invalidate(11, data = $$props.data);
	  };

	  $$self.$$.update = function () {
	    if ($$self.$$.dirty[0] &
	    /*$params*/
	    131072) {
	      $$invalidate(16, id = $params._id);
	    }

	    if ($$self.$$.dirty[0] &
	    /*data*/
	    2048) {
	      var _data;

	      $$invalidate(12, (_data = data, components = _data.components, templates = _data.templates, collections = _data.collections, _data), components, ($$invalidate(15, templates), $$invalidate(11, data)), ($$invalidate(14, collections), $$invalidate(11, data)));
	    }

	    if ($$self.$$.dirty[0] &
	    /*components, id*/
	    69632) {
	      $$invalidate(4, component = components.find(function (_ref3) {
	        var _id = _ref3._id;
	        return _id === id;
	      }));
	    }

	    if ($$self.$$.dirty[0] &
	    /*templates, component, selectedCollections*/
	    32788) {
	      $$invalidate(3, filteredTemplates = templates.filter(function (_ref4) {
	        var graph = _ref4.graph,
	            collectionIds = _ref4.collectionIds;
	        return graph.nodes.some(function (_ref5) {
	          var componentId = _ref5.componentId;
	          return componentId === component._id;
	        }) && (!selectedCollections.length || collectionIds.some(function (collectionId) {
	          return selectedCollections.includes(collectionId);
	        }));
	      }));
	    }

	    if ($$self.$$.dirty[0] &
	    /*filteredTemplates*/
	    8) {
	      $$invalidate(13, collectionIds = _toConsumableArray(new Set(filteredTemplates.map(function (_ref6) {
	        var collectionIds = _ref6.collectionIds;
	        return collectionIds;
	      }).flat())));
	    }

	    if ($$self.$$.dirty[0] &
	    /*collections, collectionIds*/
	    24576) {
	      $$invalidate(5, filteredCollections = collections.filter(function (_ref7) {
	        var _id = _ref7._id;
	        return collectionIds.includes(_id);
	      }));
	    }
	  };

	  return [breakpoints, getImages, selectedCollections, filteredTemplates, component, filteredCollections, params, onBackButtonClick, onCollectionClick, onTokenCollectionClick, navigate, data, components, collectionIds, collections, templates, id, $params, click_handler, token_click_handler, flow_enabled_binding];
	}

	var Index = /*#__PURE__*/function (_SvelteComponent) {
	  _inherits(Index, _SvelteComponent);

	  var _super = _createSuper$1(Index);

	  function Index(options) {
	    var _this;

	    _classCallCheck(this, Index);

	    _this = _super.call(this);
	    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
	      navigate: 10,
	      breakpoints: 0,
	      data: 11,
	      getImages: 1
	    }, null, [-1, -1]);
	    return _this;
	  }

	  _createClass(Index, [{
	    key: "getImages",
	    get: function get() {
	      return this.$$.ctx[1];
	    }
	  }]);

	  return Index;
	}(SvelteComponent);

	function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function create_if_block(ctx) {
	  var route0;
	  var t;
	  var route1;
	  var updating_data;
	  var current;
	  route0 = new Route$1({
	    props: {
	      path: "/:_id",
	      component: Index,
	      primary: false,
	      data:
	      /*data*/
	      ctx[5],
	      breakpoints:
	      /*currentBreakpoint*/
	      ctx[3],
	      navigate:
	      /*memoryHistory*/
	      ctx[6].navigate,
	      token:
	      /*token*/
	      ctx[1]
	    }
	  });

	  function route1_data_binding(value) {
	    /*route1_data_binding*/
	    ctx[8](value);
	  }

	  var route1_props = {
	    path: "/active-flows",
	    component: Index$1,
	    primary: false,
	    navigate:
	    /*memoryHistory*/
	    ctx[6].navigate,
	    token:
	    /*token*/
	    ctx[1]
	  };

	  if (
	  /*data*/
	  ctx[5] !== void 0) {
	    route1_props.data =
	    /*data*/
	    ctx[5];
	  }

	  route1 = new Route$1({
	    props: route1_props
	  });
	  binding_callbacks.push(function () {
	    return bind(route1, 'data', route1_data_binding);
	  });
	  return {
	    c: function c() {
	      create_component(route0.$$.fragment);
	      t = space();
	      create_component(route1.$$.fragment);
	    },
	    m: function m(target, anchor) {
	      mount_component(route0, target, anchor);
	      insert(target, t, anchor);
	      mount_component(route1, target, anchor);
	      current = true;
	    },
	    p: function p(ctx, dirty) {
	      var route0_changes = {};
	      if (dirty &
	      /*data*/
	      32) route0_changes.data =
	      /*data*/
	      ctx[5];
	      if (dirty &
	      /*currentBreakpoint*/
	      8) route0_changes.breakpoints =
	      /*currentBreakpoint*/
	      ctx[3];
	      if (dirty &
	      /*token*/
	      2) route0_changes.token =
	      /*token*/
	      ctx[1];
	      route0.$set(route0_changes);
	      var route1_changes = {};
	      if (dirty &
	      /*token*/
	      2) route1_changes.token =
	      /*token*/
	      ctx[1];

	      if (!updating_data && dirty &
	      /*data*/
	      32) {
	        updating_data = true;
	        route1_changes.data =
	        /*data*/
	        ctx[5];
	        add_flush_callback(function () {
	          return updating_data = false;
	        });
	      }

	      route1.$set(route1_changes);
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(route0.$$.fragment, local);
	      transition_in(route1.$$.fragment, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(route0.$$.fragment, local);
	      transition_out(route1.$$.fragment, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      destroy_component(route0, detaching);
	      if (detaching) detach(t);
	      destroy_component(route1, detaching);
	    }
	  };
	} // (54:0) <Router history={memoryHistory}>


	function create_default_slot(ctx) {
	  var div1;
	  var header;
	  var updating_isPreviewMode;
	  var t0;
	  var div0;
	  var t1;
	  var route;
	  var updating_sidebar;
	  var updating_isPreviewMode_1;
	  var updating_data;
	  var div1_class_value;
	  var div1_resize_listener;
	  var current;

	  function header_isPreviewMode_binding(value) {
	    /*header_isPreviewMode_binding*/
	    ctx[7](value);
	  }

	  var header_props = {
	    navigate:
	    /*memoryHistory*/
	    ctx[6].navigate
	  };

	  if (
	  /*ispreview*/
	  ctx[0] !== void 0) {
	    header_props.isPreviewMode =
	    /*ispreview*/
	    ctx[0];
	  }

	  header = new Header({
	    props: header_props
	  });
	  binding_callbacks.push(function () {
	    return bind(header, 'isPreviewMode', header_isPreviewMode_binding);
	  });
	  var if_block = !
	  /*ispreview*/
	  ctx[0] && create_if_block(ctx);

	  function route_sidebar_binding(value) {
	    /*route_sidebar_binding*/
	    ctx[9](value);
	  }

	  function route_isPreviewMode_binding(value) {
	    /*route_isPreviewMode_binding*/
	    ctx[10](value);
	  }

	  function route_data_binding(value) {
	    /*route_data_binding*/
	    ctx[11](value);
	  }

	  var route_props = {
	    path: "/",
	    component: Index$2,
	    primary: false,
	    navigate:
	    /*memoryHistory*/
	    ctx[6].navigate,
	    token:
	    /*token*/
	    ctx[1]
	  };

	  if (
	  /*filters*/
	  ctx[4] !== void 0) {
	    route_props.sidebar =
	    /*filters*/
	    ctx[4];
	  }

	  if (
	  /*ispreview*/
	  ctx[0] !== void 0) {
	    route_props.isPreviewMode =
	    /*ispreview*/
	    ctx[0];
	  }

	  if (
	  /*data*/
	  ctx[5] !== void 0) {
	    route_props.data =
	    /*data*/
	    ctx[5];
	  }

	  route = new Route$1({
	    props: route_props
	  });
	  binding_callbacks.push(function () {
	    return bind(route, 'sidebar', route_sidebar_binding);
	  });
	  binding_callbacks.push(function () {
	    return bind(route, 'isPreviewMode', route_isPreviewMode_binding);
	  });
	  binding_callbacks.push(function () {
	    return bind(route, 'data', route_data_binding);
	  });
	  return {
	    c: function c() {
	      div1 = element("div");
	      create_component(header.$$.fragment);
	      t0 = space();
	      div0 = element("div");
	      if (if_block) if_block.c();
	      t1 = space();
	      create_component(route.$$.fragment);
	      attr(div0, "class", "content");
	      attr(div1, "class", div1_class_value = "background " +
	      /*currentBreakpoint*/
	      ctx[3]);
	      add_render_callback(function () {
	        return (
	          /*div1_elementresize_handler*/
	          ctx[12].call(div1)
	        );
	      });
	    },
	    m: function m(target, anchor) {
	      insert(target, div1, anchor);
	      mount_component(header, div1, null);
	      append(div1, t0);
	      append(div1, div0);
	      if (if_block) if_block.m(div0, null);
	      append(div0, t1);
	      mount_component(route, div0, null);
	      div1_resize_listener = add_resize_listener(div1,
	      /*div1_elementresize_handler*/
	      ctx[12].bind(div1));
	      current = true;
	    },
	    p: function p(ctx, dirty) {
	      var header_changes = {};

	      if (!updating_isPreviewMode && dirty &
	      /*ispreview*/
	      1) {
	        updating_isPreviewMode = true;
	        header_changes.isPreviewMode =
	        /*ispreview*/
	        ctx[0];
	        add_flush_callback(function () {
	          return updating_isPreviewMode = false;
	        });
	      }

	      header.$set(header_changes);

	      if (!
	      /*ispreview*/
	      ctx[0]) {
	        if (if_block) {
	          if_block.p(ctx, dirty);

	          if (dirty &
	          /*ispreview*/
	          1) {
	            transition_in(if_block, 1);
	          }
	        } else {
	          if_block = create_if_block(ctx);
	          if_block.c();
	          transition_in(if_block, 1);
	          if_block.m(div0, t1);
	        }
	      } else if (if_block) {
	        group_outros();
	        transition_out(if_block, 1, 1, function () {
	          if_block = null;
	        });
	        check_outros();
	      }

	      var route_changes = {};
	      if (dirty &
	      /*token*/
	      2) route_changes.token =
	      /*token*/
	      ctx[1];

	      if (!updating_sidebar && dirty &
	      /*filters*/
	      16) {
	        updating_sidebar = true;
	        route_changes.sidebar =
	        /*filters*/
	        ctx[4];
	        add_flush_callback(function () {
	          return updating_sidebar = false;
	        });
	      }

	      if (!updating_isPreviewMode_1 && dirty &
	      /*ispreview*/
	      1) {
	        updating_isPreviewMode_1 = true;
	        route_changes.isPreviewMode =
	        /*ispreview*/
	        ctx[0];
	        add_flush_callback(function () {
	          return updating_isPreviewMode_1 = false;
	        });
	      }

	      if (!updating_data && dirty &
	      /*data*/
	      32) {
	        updating_data = true;
	        route_changes.data =
	        /*data*/
	        ctx[5];
	        add_flush_callback(function () {
	          return updating_data = false;
	        });
	      }

	      route.$set(route_changes);

	      if (!current || dirty &
	      /*currentBreakpoint*/
	      8 && div1_class_value !== (div1_class_value = "background " +
	      /*currentBreakpoint*/
	      ctx[3])) {
	        attr(div1, "class", div1_class_value);
	      }
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(header.$$.fragment, local);
	      transition_in(if_block);
	      transition_in(route.$$.fragment, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(header.$$.fragment, local);
	      transition_out(if_block);
	      transition_out(route.$$.fragment, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      if (detaching) detach(div1);
	      destroy_component(header);
	      if (if_block) if_block.d();
	      destroy_component(route);
	      div1_resize_listener();
	    }
	  };
	}

	function create_fragment(ctx) {
	  var router;
	  var current;
	  router = new Router$1({
	    props: {
	      history:
	      /*memoryHistory*/
	      ctx[6],
	      $$slots: {
	        default: [create_default_slot]
	      },
	      $$scope: {
	        ctx: ctx
	      }
	    }
	  });
	  return {
	    c: function c() {
	      create_component(router.$$.fragment);
	      this.c = noop;
	    },
	    m: function m(target, anchor) {
	      mount_component(router, target, anchor);
	      current = true;
	    },
	    p: function p(ctx, _ref) {
	      var _ref2 = _slicedToArray(_ref, 1),
	          dirty = _ref2[0];

	      var router_changes = {};

	      if (dirty &
	      /*$$scope, currentBreakpoint, elWidth, token, filters, ispreview, data*/
	      65599) {
	        router_changes.$$scope = {
	          dirty: dirty,
	          ctx: ctx
	        };
	      }

	      router.$set(router_changes);
	    },
	    i: function i(local) {
	      if (current) return;
	      transition_in(router.$$.fragment, local);
	      current = true;
	    },
	    o: function o(local) {
	      transition_out(router.$$.fragment, local);
	      current = false;
	    },
	    d: function d(detaching) {
	      destroy_component(router, detaching);
	    }
	  };
	}

	function instance($$self, $$props, $$invalidate) {
	  var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
	    function adopt(value) {
	      return value instanceof P ? value : new P(function (resolve) {
	        resolve(value);
	      });
	    }

	    return new (P || (P = Promise))(function (resolve, reject) {
	      function fulfilled(value) {
	        try {
	          step(generator.next(value));
	        } catch (e) {
	          reject(e);
	        }
	      }

	      function rejected(value) {
	        try {
	          step(generator["throw"](value));
	        } catch (e) {
	          reject(e);
	        }
	      }

	      function step(result) {
	        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
	      }

	      step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	  };

	  var token = $$props.token;
	  var _$$props$ispreview = $$props.ispreview,
	      ispreview = _$$props$ispreview === void 0 ? false : _$$props$ispreview;
	  var elWidth;
	  var currentBreakpoint;
	  var memoryHistory = createHistory(createMemorySource());
	  var fontStyleNode = document.createElement("link");
	  var filters;
	  var data;
	  onMount(function () {
	    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regenerator.mark(function _callee() {
	      return regenerator.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              fontStyleNode.type = "text/css";
	              fontStyleNode.rel = "stylesheet";
	              fontStyleNode.href = "//fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap";
	              document.head.appendChild(fontStyleNode);

	            case 4:
	            case "end":
	              return _context.stop();
	          }
	        }
	      }, _callee);
	    }));
	  });

	  var updateData = function updateData(token) {
	    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regenerator.mark(function _callee2() {
	      return regenerator.wrap(function _callee2$(_context2) {
	        while (1) {
	          switch (_context2.prev = _context2.next) {
	            case 0:
	              if (!token) {
	                _context2.next = 11;
	                break;
	              }

	              _context2.t0 = $$invalidate;
	              _context2.next = 4;
	              return getData(token);

	            case 4:
	              _context2.t1 = data = _context2.sent;
	              (0, _context2.t0)(5, _context2.t1);
	              _context2.t2 = $$invalidate;
	              _context2.next = 9;
	              return getFilters(token);

	            case 9:
	              _context2.t3 = filters = _context2.sent;
	              (0, _context2.t2)(4, _context2.t3);

	            case 11:
	            case "end":
	              return _context2.stop();
	          }
	        }
	      }, _callee2);
	    }));
	  };

	  onDestroy(function () {
	    // HACK: Font import doesn't work inside shsadow-dom.
	    document.head.removeChild(fontStyleNode);
	  });

	  function header_isPreviewMode_binding(value) {
	    ispreview = value;
	    $$invalidate(0, ispreview);
	  }

	  function route1_data_binding(value) {
	    data = value;
	    $$invalidate(5, data);
	  }

	  function route_sidebar_binding(value) {
	    filters = value;
	    $$invalidate(4, filters);
	  }

	  function route_isPreviewMode_binding(value) {
	    ispreview = value;
	    $$invalidate(0, ispreview);
	  }

	  function route_data_binding(value) {
	    data = value;
	    $$invalidate(5, data);
	  }

	  function div1_elementresize_handler() {
	    elWidth = this.clientWidth;
	    $$invalidate(2, elWidth);
	  }

	  $$self.$$set = function ($$props) {
	    if ('token' in $$props) $$invalidate(1, token = $$props.token);
	    if ('ispreview' in $$props) $$invalidate(0, ispreview = $$props.ispreview);
	  };

	  $$self.$$.update = function () {
	    if ($$self.$$.dirty &
	    /*elWidth*/
	    4) {
	      {
	        $$invalidate(3, currentBreakpoint = getBpClasses(elWidth));
	      }
	    }

	    if ($$self.$$.dirty &
	    /*token*/
	    2) {
	      updateData(token);
	    }
	  };

	  return [ispreview, token, elWidth, currentBreakpoint, filters, data, memoryHistory, header_isPreviewMode_binding, route1_data_binding, route_sidebar_binding, route_isPreviewMode_binding, route_data_binding, div1_elementresize_handler];
	}

	var Src = /*#__PURE__*/function (_SvelteElement) {
	  _inherits(Src, _SvelteElement);

	  var _super = _createSuper(Src);

	  function Src(options) {
	    var _this;

	    _classCallCheck(this, Src);

	    _this = _super.call(this);
	    _this.shadowRoot.innerHTML = "<style>@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap\");*,*:before,*:after{box-sizing:border-box;font-family:\"Roboto\", sans-serif}img,video{max-width:100%;height:auto}:host{--pink-color:#ff2473;--orange-color:#ff8200;--white-color:#ffffff;--light-grey-color:#eaf2f4;--light-green-color:#cedfcd;--green-color:#4cb944;--ic-neutral-color:#e5e5e5;--ic-dark-blue-color:#23293d;--ic-grey-color:#7b828a;--ic-orange-color:#ff6425;--ic-light-grey-color:#c8cbcd;--ic-dark-grey-color:#4d5863;--ic-highlighted-color:#ededed;--ic-blue-grey-color:#b8d0d9;--ic-light-blue-color:#dce3e5;--ic-orange-pink-color:linear-gradient(    90.3deg,    var(--orange-color) 0.33%,    var(--pink-color) 99.81%  );font-size:var(--ic-font-size, 125%)}.content{background-color:var(--white-color);display:flex;height:100%}.background{height:100%}.apps-grid{--grid:5;display:grid;gap:1.2em;grid-template-columns:repeat(auto-fit, minmax(max(12.9em, 100% / var(--grid)), 1fr))}.lengthy{width:17.5em}.title-bar.svelte-xb2ngz.svelte-xb2ngz{background-color:var(--white-color);text-align:center;align-items:center;justify-content:center;display:flex;box-shadow:0px 2px 6px rgba(0, 0, 0, 0.15);padding:1em;color:var(--ic-dark-grey-color);font-style:normal;font-weight:normal;line-height:2em;position:relative}@media(max-width: 42em){.title-bar.svelte-xb2ngz.svelte-xb2ngz{display:flex;flex-direction:column}}.title-bar.svelte-xb2ngz .title.svelte-xb2ngz{font-size:1.6em;flex:1;display:flex;justify-content:center;transform:translateX(3em)}@media(max-width: 42rem){.title-bar.svelte-xb2ngz .title.svelte-xb2ngz{transform:translateX(0)}}.title-bar.svelte-xb2ngz .flows-link.svelte-xb2ngz{cursor:pointer;float:right;font-size:0.8em;font-weight:600;padding-right:2.2em}.title-bar.svelte-xb2ngz .flows-link.svelte-xb2ngz:hover{color:var(--orange-color)}.title-bar.svelte-xb2ngz .active.svelte-xb2ngz{padding-right:2.2em;color:var(--orange-color)}div.svelte-19gfewk{display:flex;margin-top:30%;width:100%;justify-content:center}.main-container{padding:1.2em 2em;width:100%}.main-container .back-button{margin-bottom:1.2em;cursor:pointer;display:inline-block}.main-container .component{display:flex;flex-direction:row;margin-bottom:2.3em}.main-container .component img{margin-right:1.6em;width:6em;height:6em}.main-container .component .component-content h2{font-style:normal;font-weight:bold;font-size:1.2em;line-height:1.8em;margin-bottom:0.8em}.main-container .component .component-content p{font-style:normal;font-weight:300;font-size:0.7em;line-height:1em;margin-top:0;margin-bottom:1em}.main-container h3{font-style:normal;font-weight:normal;font-size:1.2em;line-height:1.8em;margin-bottom:0.8em}.main-container .collections-grid{display:flex;margin-bottom:1.2em}.main-container .collections-grid>div{margin-right:0.4em}.main-container .apps-grid{--grid:4;display:grid;grid-template-columns:repeat(var(--grid), minmax(198px, 100%));gap:24px}.main-container .apps-grid.bp-xs{--grid:1}.main-container .apps-grid.bp-sm{--grid:2}.main-container .apps-grid.bp-md{--grid:3}.main-container .apps-grid.bp-lg{--grid:4}.main-container .apps-grid.bg-xl{--grid:4}.main-container{padding:1.2em 2em;width:100%}.main-container .back-button{margin-bottom:1.2em;cursor:pointer;display:inline-block}.main-container h3{font-style:normal;font-weight:normal;font-size:1.2em;line-height:1.8em;margin-bottom:0.8em}.main-container .apps-grid{--grid:4;display:grid;grid-template-columns:repeat(var(--grid), minmax(198px, 100%));gap:24px}.main-container .apps-grid.bp-xs{--grid:1}.main-container .apps-grid.bp-sm{--grid:2}.main-container .apps-grid.bp-md{--grid:3}.main-container .apps-grid.bp-lg{--grid:4}.main-container .apps-grid.bg-xl{--grid:4}div.svelte-1x7nw2l{width:100%;color:var(--ic-dark-blue-color);font-weight:300;font-size:0.8em;line-height:1.2em;border-radius:0.2em;padding:0.3em 0.4em;cursor:pointer}div.selected.svelte-1x7nw2l{background-color:var(--ic-grey-color);color:var(--white-color)}div.svelte-1x7nw2l:hover{background-color:var(--ic-light-grey-color);color:var(--ic-dark-blue-color)}.token.svelte-18ileth.svelte-18ileth{align-items:center;background-color:var(--white-color);border-radius:1.25em;display:flex;padding:0.3em 0.6em;border:1px solid var(--ic-dark-grey-color);height:1.6em;white-space:nowrap;width:fit-content;color:var(--ic-dark-grey-color)}.token.selected.svelte-18ileth.svelte-18ileth{color:var(--white-color);background-color:var(--ic-dark-grey-color)}.token.svelte-18ileth span.svelte-18ileth{font-size:0.7em}.token.svelte-18ileth.svelte-18ileth:hover{background-color:var(--ic-dark-grey-color);cursor:pointer;color:var(--white-color)}.token-remove.svelte-18ileth.svelte-18ileth{align-items:center;border-radius:50%;display:flex;justify-content:center;height:0.75em;width:0.75em;margin-left:0.25em}.token-remove.svelte-18ileth.svelte-18ileth:hover{background-color:var(--ic-grey-color);cursor:pointer;color:var(--white-color)}.card.svelte-17ekldz{background:var(--white-color);border:1px solid var(--white-color);box-sizing:border-box;box-shadow:0 0.2em 0.45em 0.05em rgba(0, 0, 0, 0.15);border-radius:0.4em;flex:none;order:0;align-self:stretch;flex-grow:1;width:100%}.inner.svelte-17ekldz{padding:0.8em;display:flex}.text.svelte-17ekldz{margin-left:0.8em;display:flex;flex-direction:column}.header.svelte-17ekldz{font-weight:bold;font-size:0.9em;line-height:1.24em;-webkit-box-orient:vertical;display:block;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:1}.description.svelte-17ekldz{font-weight:300;font-size:0.7em;line-height:1em;height:3em;-webkit-box-orient:vertical;display:block;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:3}img.svelte-17ekldz{height:3em;width:3em}button.svelte-pxzbhs.svelte-pxzbhs{border:1px solid transparent;outline:0;font-weight:600;font-size:0.8em;width:auto;text-align:center;min-height:1.8em;border-radius:1.25em;line-height:1.2em;padding:0.3em 0.6em;background:transparent}button.svelte-pxzbhs.svelte-pxzbhs:hover{cursor:pointer}button.full-width.svelte-pxzbhs.svelte-pxzbhs{width:100%}button.primary.svelte-pxzbhs.svelte-pxzbhs{background:var(--orange-color);color:var(--white-color)}button.primary.svelte-pxzbhs.svelte-pxzbhs:hover{border:1px solid var(--white-color);background:var(--ic-orange-color)}button.primary.svelte-pxzbhs.svelte-pxzbhs:active{background:var(--ic-orange-pink-color);border:1px solid transparent}button.secondary.svelte-pxzbhs.svelte-pxzbhs{border:1px solid var(--ic-dark-grey-color);color:var(--ic-dark-grey-color)}button.secondary.svelte-pxzbhs.svelte-pxzbhs:hover{background:var(--light-grey-color);border:1px solid var(--ic-dark-grey-color)}button.secondary.svelte-pxzbhs.svelte-pxzbhs:active{background:var(--orange-color);border:1px solid var(--ic-dark-grey-color)}button.text-only.svelte-pxzbhs.svelte-pxzbhs{color:var(--ic-dark-grey-color)}button.text-only.svelte-pxzbhs.svelte-pxzbhs:hover{background:var(--light-grey-color)}button.text-only.svelte-pxzbhs.svelte-pxzbhs:active{color:var(--orange-color)}button.svelte-pxzbhs>div.svelte-pxzbhs{justify-content:center;display:flex;align-items:center}.switch.svelte-10zcw5p.svelte-10zcw5p.svelte-10zcw5p{position:relative;cursor:pointer;user-select:none;display:inline-flex}.switch.svelte-10zcw5p input.svelte-10zcw5p.svelte-10zcw5p{position:absolute;opacity:0;left:0;z-index:-1;border:1px solid var(--ic-blue-grey-color)}.switch.svelte-10zcw5p input.svelte-10zcw5p+.check.svelte-10zcw5p{display:flex;align-items:center;flex-shrink:0;width:2em;height:1em;padding:0.2em;border-radius:0.75em;transition:background 0.15s ease-out}.switch.svelte-10zcw5p input.svelte-10zcw5p+.check.svelte-10zcw5p::before{content:\"\";left:-0.25rem;border-radius:1em;width:1.2em;height:1.2em;position:absolute;background:var(--ic-blue-grey-color);transition:transform 0.15s ease-out, width 0.15s ease-out;will-change:transform}.switch.svelte-10zcw5p input.svelte-10zcw5p:not(:checked)+.check.svelte-10zcw5p{background-color:var(--ic-light-blue-color);border:1px solid var(--ic-blue-grey-color)}.switch.svelte-10zcw5p input.svelte-10zcw5p:not(:checked)+.check.svelte-10zcw5p:hover{background:var(--light-green-color)}.switch.svelte-10zcw5p input.svelte-10zcw5p:not(:checked)+.check.svelte-10zcw5p:hover::before{transform:translate3d(0.4em, 0, 0)}.switch.svelte-10zcw5p input.svelte-10zcw5p:checked+.check.svelte-10zcw5p{background-color:var(--light-green-color);border:1px solid var(--green-color)}.switch.svelte-10zcw5p input.svelte-10zcw5p:checked+.check.svelte-10zcw5p::before{transform:translate3d(100%, 0, 0);background:var(--green-color)}div.card.svelte-buh1i1.svelte-buh1i1{background-color:var(--white-color);border:1px solid var(--white-color);border-radius:0.4em;box-shadow:0 0.2em 0.45em 0.05em rgba(0, 0, 0, 0.15);height:fit-content;width:100%}div.card.svelte-buh1i1 div.content.svelte-buh1i1{padding:1.2em;display:flex;flex-direction:column}div.card.svelte-buh1i1 div.content div.images.svelte-buh1i1{background-color:var(--white-color);box-shadow:inset 0px 1px 3px rgba(0, 0, 0, 0.25);border-radius:0.2em;padding:0.2em 0.4em;display:inline-block;width:fit-content}div.card.svelte-buh1i1 div.content div.images img.svelte-buh1i1{width:1.2em;height:1.2em;max-width:100%;margin-right:0.4em}div.card.svelte-buh1i1 div.content div.images img.svelte-buh1i1:last-of-type{margin-right:0}div.card.svelte-buh1i1 div.content div.description.svelte-buh1i1{margin-top:1.2em;font-weight:300;font-size:0.9em;line-height:1.4em;height:5.45em;-webkit-box-orient:vertical;display:block;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:4}div.card.svelte-buh1i1 div.footer.svelte-buh1i1{border-top:1px solid var(--ic-highlighted-color);padding:0.7em 1.2em;color:var(--dark-blue-color);font-weight:300;font-size:0.8em;line-height:1.2em;display:flex;align-items:center;justify-content:flex-end}div.card.svelte-buh1i1 div.footer span.svelte-buh1i1{margin-right:0.8em}.modal.svelte-8r0way.svelte-8r0way.svelte-8r0way{background-color:var(--white-color);position:fixed;display:flex;align-items:center;justify-content:center;z-index:1000;width:100vw;height:100vh;top:0;left:0;overflow:auto}.modal-wrap.svelte-8r0way.svelte-8r0way.svelte-8r0way{position:relative;margin:90px 94px 90px 94px;max-height:100%;width:100%}.modal-wrapper.svelte-8r0way.svelte-8r0way.svelte-8r0way{background:var(--white-color);border:1px solid var(--white-color);box-sizing:border-box;box-shadow:0px 4px 9px 1px rgba(0, 0, 0, 0.15);border-radius:25px;padding:24px;max-height:100%;width:100%}.modal-wrapper.svelte-8r0way>svg{cursor:pointer}.modal-wrapper.big.svelte-8r0way.svelte-8r0way.svelte-8r0way{width:1200px}.modal-wrapper.small.svelte-8r0way.svelte-8r0way.svelte-8r0way{width:15rem}.modal-wrapper.medium.svelte-8r0way.svelte-8r0way.svelte-8r0way{width:27rem}.close.svelte-8r0way.svelte-8r0way.svelte-8r0way:hover{font-weight:bold}.above.svelte-8r0way.svelte-8r0way.svelte-8r0way{z-index:20000}.container.svelte-8r0way.svelte-8r0way.svelte-8r0way{padding:20px;margin:0 auto;height:80%;display:flex;flex-direction:column}.content.svelte-8r0way.svelte-8r0way.svelte-8r0way{height:fit-content;width:400px;padding:24px;display:flex;margin:0 auto}.content.svelte-8r0way>.img-container.svelte-8r0way.svelte-8r0way{padding:16px;box-shadow:inset 0px 1px 3px rgba(0, 0, 0, 0.25);border-radius:4px}.content.svelte-8r0way>.img-container.svelte-8r0way>img.svelte-8r0way{width:60px;height:60px}.content.svelte-8r0way>.text-button.svelte-8r0way.svelte-8r0way{padding-left:24px}.content.svelte-8r0way>.text-button.svelte-8r0way>span.svelte-8r0way{font-size:24px;line-height:28px;font-weight:300}.content.svelte-8r0way>.text-button.svelte-8r0way>button{margin-top:28px}span.icon.svelte-8r0way.svelte-8r0way.svelte-8r0way{align-items:center;margin-left:10px}.dots.svelte-8r0way.svelte-8r0way.svelte-8r0way{display:flex;align-items:center;justify-content:center;margin-top:68px}.dots.svelte-8r0way.svelte-8r0way.svelte-8r0way:not(:first-child){margin-left:16px}.dot.svelte-8r0way.svelte-8r0way.svelte-8r0way{border-radius:50%;background:var(--ic-light-grey-color);width:8px;height:8px;margin-right:16px}.dot-active.svelte-8r0way.svelte-8r0way.svelte-8r0way{border-radius:50%;background:var(--ic-dark-grey-color);width:8px;height:8px;margin-right:16px}div.images.svelte-8r0way.svelte-8r0way.svelte-8r0way{background-color:var(--white-color);box-shadow:inset 0px 1px 3px rgba(0, 0, 0, 0.25);border-radius:4px;padding:4px 8px;display:inline-block;margin-top:32px}div.images.svelte-8r0way img.svelte-8r0way.svelte-8r0way{width:24px;height:24px;max-width:100%;margin-right:8px}div.images.svelte-8r0way img.svelte-8r0way.svelte-8r0way:last-of-type{margin-right:0px}.button-bottom.svelte-8r0way.svelte-8r0way.svelte-8r0way{display:flex;justify-content:center;margin-top:24px}.description.svelte-8r0way.svelte-8r0way.svelte-8r0way{margin-top:32px;font-size:24px;line-height:28px;letter-spacing:0.02em}div.svelte-1biyotc.svelte-1biyotc{position:relative;display:flex;align-items:center}input.svelte-1biyotc.svelte-1biyotc{width:auto;margin:0;height:2em;background:var(--white-color);border:1px solid var(--ic-grey-color);box-sizing:border-box;outline:0;font-size:0.8em;padding:0.4em 0.6em 0.4em 0.6em;color:var(--ic-dark-blue-color);font-weight:300;border-radius:0.2em}input.error.svelte-1biyotc.svelte-1biyotc{border:1px solid red}input.full-width.svelte-1biyotc.svelte-1biyotc{width:100%}input.rounded.svelte-1biyotc.svelte-1biyotc{border-radius:1.25em}input.svelte-1biyotc.svelte-1biyotc::-webkit-input-placeholder,input.svelte-1biyotc.svelte-1biyotc::placeholder,input.svelte-1biyotc.svelte-1biyotc:-ms-input-placeholder{color:var(--ic-dark-blue-color)}input.svelte-1biyotc.svelte-1biyotc:disabled{border:1px solid var(--ic-dark-grey-color);color:var(--ic-dark-grey-color)}div.left.svelte-1biyotc>input.svelte-1biyotc{padding-left:1.3em}div.right.svelte-1biyotc>input.svelte-1biyotc{padding-right:1.3em}div.svelte-1biyotc>span{position:absolute;color:var(--ic-grey-color)}div.left.svelte-1biyotc>span{left:0.75em}div.right.svelte-1biyotc>span{right:0.75em}.circle.svelte-jvcayl{height:var(--size);width:var(--size);border-color:var(--color) transparent var(--color) var(--color);border-width:calc(var(--size) / 15);border-style:solid;border-image:initial;border-radius:50%;animation:var(--duration) linear 0s infinite normal none running svelte-jvcayl-rotate;left:50%}@keyframes svelte-jvcayl-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}div.sidebar.svelte-18kr5tf.svelte-18kr5tf.svelte-18kr5tf{padding-left:2em;padding-top:5.8em;width:11em;height:100%}div.sidebar.svelte-18kr5tf>.dropdown.svelte-18kr5tf.svelte-18kr5tf{height:1.6em;display:flex;align-items:center}div.sidebar.svelte-18kr5tf>.dropdown.svelte-18kr5tf>span.svelte-18kr5tf{line-height:1.2em;font-size:0.8em;color:var(--ic-grey-color)}div.sidebar.svelte-18kr5tf>.dropdown.svelte-18kr5tf>div.svelte-18kr5tf{margin-left:0.75em;align-items:center;display:flex}div.content.svelte-ti21ll.svelte-ti21ll.svelte-ti21ll{padding:2em;width:100%;display:flex;flex-direction:column;background-color:var(--white-color)}div.content.svelte-ti21ll>.searchbar.svelte-ti21ll.svelte-ti21ll{max-width:44em}div.content.svelte-ti21ll>.featured.svelte-ti21ll.svelte-ti21ll{padding-top:2em;color:var(--ic-dark-grey-color)}div.content.svelte-ti21ll>.featured.svelte-ti21ll>.feature-header.svelte-ti21ll{display:flex;height:1.8em;align-items:center}div.content.svelte-ti21ll>.featured.svelte-ti21ll>.flows-header.svelte-ti21ll{display:flex;height:1.4em;align-items:center;font-size:0.9em;margin-bottom:0.8em}div.content.svelte-ti21ll>.featured.svelte-ti21ll>.cards.svelte-ti21ll{--grid:4;display:grid;margin-top:1.2em;margin-bottom:1.2em;grid-template-columns:repeat(var(--grid), minmax(198px, 100%));gap:24px}div.content.svelte-ti21ll>.featured.svelte-ti21ll>.cards.bp-xs.svelte-ti21ll{--grid:1}div.content.svelte-ti21ll>.featured.svelte-ti21ll>.cards.bp-sm.svelte-ti21ll{--grid:2}div.content.svelte-ti21ll>.featured.svelte-ti21ll>.cards.bp-md.svelte-ti21ll{--grid:3}div.content.svelte-ti21ll>.featured.svelte-ti21ll>.cards.bp-lg.svelte-ti21ll{--grid:4}div.content.svelte-ti21ll>.featured.svelte-ti21ll>.cards.bg-xl.svelte-ti21ll{--grid:4}div.content.svelte-ti21ll>.featured.svelte-ti21ll>.flow-grid.svelte-ti21ll{--grid:4;display:grid;grid-template-columns:repeat(var(--grid), minmax(198px, 100%));gap:24px}div.content.svelte-ti21ll>.featured.svelte-ti21ll>.flow-grid.bp-xs.svelte-ti21ll{--grid:1}div.content.svelte-ti21ll>.featured.svelte-ti21ll>.flow-grid.bp-sm.svelte-ti21ll{--grid:2}div.content.svelte-ti21ll>.featured.svelte-ti21ll>.flow-grid.bp-md.svelte-ti21ll{--grid:3}div.content.svelte-ti21ll>.featured.svelte-ti21ll>.flow-grid.bp-lg.svelte-ti21ll{--grid:4}div.content.svelte-ti21ll>.featured.svelte-ti21ll>.flow-grid.bg-xl.svelte-ti21ll{--grid:4}.inactive.svelte-eiejwr{display:none}div.svelte-n117uy{height:50%;margin:0 auto;display:flex;align-items:center}</style>";
	    init(_assertThisInitialized(_this), {
	      target: _this.shadowRoot,
	      props: attribute_to_object(_this.attributes),
	      customElement: true
	    }, instance, create_fragment, safe_not_equal, {
	      token: 1,
	      ispreview: 0
	    }, null);

	    if (options) {
	      if (options.target) {
	        insert(options.target, _assertThisInitialized(_this), options.anchor);
	      }

	      if (options.props) {
	        _this.$set(options.props);

	        flush();
	      }
	    }

	    return _this;
	  }

	  _createClass(Src, [{
	    key: "token",
	    get: function get() {
	      return this.$$.ctx[1];
	    },
	    set: function set(token) {
	      this.$$set({
	        token: token
	      });
	      flush();
	    }
	  }, {
	    key: "ispreview",
	    get: function get() {
	      return this.$$.ctx[0];
	    },
	    set: function set(ispreview) {
	      this.$$set({
	        ispreview: ispreview
	      });
	      flush();
	    }
	  }], [{
	    key: "observedAttributes",
	    get: function get() {
	      return ["token", "ispreview"];
	    }
	  }]);

	  return Src;
	}(SvelteElement);

	customElements.define("integration-center", Src);

	return Src;

}());
