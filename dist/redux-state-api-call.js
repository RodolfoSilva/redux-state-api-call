(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else if (typeof exports === 'object')
    exports['ReduxStateApiCall'] = factory();
  else root['ReduxStateApiCall'] = factory();
})(window, function() {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {}
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter
        });
        /******/
      }
      /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
      value,
      mode
    ) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (
        mode & 4 &&
        typeof value === 'object' &&
        value &&
        value.__esModule
      )
        return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, 'default', {
        enumerable: true,
        value: value
      });
      /******/ if (mode & 2 && typeof value != 'string')
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function(key) {
              return value[key];
            }.bind(null, key)
          );
      /******/ return ns;
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default'];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, 'a', getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__(
      (__webpack_require__.s = './src/index.js')
    );
    /******/
  })(
    /************************************************************************/
    /******/ {
      /***/ './node_modules/invariant/browser.js':
        /*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            "/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\n/**\n * Use invariant() to assert state which your program assumes to be true.\n *\n * Provide sprintf-style format (only %s is supported) and arguments\n * to provide information about what broke and what you were\n * expecting.\n *\n * The invariant message will be stripped in production, but the invariant\n * will remain to ensure logic does not differ in production.\n */\n\nvar invariant = function(condition, format, a, b, c, d, e, f) {\n  if (true) {\n    if (format === undefined) {\n      throw new Error('invariant requires an error message argument');\n    }\n  }\n\n  if (!condition) {\n    var error;\n    if (format === undefined) {\n      error = new Error(\n        'Minified exception occurred; use the non-minified dev environment ' +\n        'for the full error message and additional helpful warnings.'\n      );\n    } else {\n      var args = [a, b, c, d, e, f];\n      var argIndex = 0;\n      error = new Error(\n        format.replace(/%s/g, function() { return args[argIndex++]; })\n      );\n      error.name = 'Invariant Violation';\n    }\n\n    error.framesToPop = 1; // we don't care about invariant's own frame\n    throw error;\n  }\n};\n\nmodule.exports = invariant;\n\n\n//# sourceURL=webpack://ReduxStateApiCall/./node_modules/invariant/browser.js?"
          );

          /***/
        },

      /***/ './node_modules/redux/es/redux.js':
        /*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
        /*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose, __DO_NOT_USE__ActionTypes */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createStore\", function() { return createStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"combineReducers\", function() { return combineReducers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bindActionCreators\", function() { return bindActionCreators; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyMiddleware\", function() { return applyMiddleware; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compose\", function() { return compose; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__DO_NOT_USE__ActionTypes\", function() { return ActionTypes; });\n/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ \"./node_modules/symbol-observable/es/index.js\");\n\n\n/**\n * These are private action types reserved by Redux.\n * For any unknown actions, you must return the current state.\n * If the current state is undefined, you must return the initial state.\n * Do not reference these action types directly in your code.\n */\nvar ActionTypes = {\n  INIT: '@@redux/INIT' + Math.random().toString(36).substring(7).split('').join('.'),\n  REPLACE: '@@redux/REPLACE' + Math.random().toString(36).substring(7).split('').join('.')\n};\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) {\n  return typeof obj;\n} : function (obj) {\n  return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n};\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];\n\n    for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }\n\n  return target;\n};\n\n/**\n * @param {any} obj The object to inspect.\n * @returns {boolean} True if the argument appears to be a plain object.\n */\nfunction isPlainObject(obj) {\n  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) return false;\n\n  var proto = obj;\n  while (Object.getPrototypeOf(proto) !== null) {\n    proto = Object.getPrototypeOf(proto);\n  }\n\n  return Object.getPrototypeOf(obj) === proto;\n}\n\n/**\n * Creates a Redux store that holds the state tree.\n * The only way to change the data in the store is to call `dispatch()` on it.\n *\n * There should only be a single store in your app. To specify how different\n * parts of the state tree respond to actions, you may combine several reducers\n * into a single reducer function by using `combineReducers`.\n *\n * @param {Function} reducer A function that returns the next state tree, given\n * the current state tree and the action to handle.\n *\n * @param {any} [preloadedState] The initial state. You may optionally specify it\n * to hydrate the state from the server in universal apps, or to restore a\n * previously serialized user session.\n * If you use `combineReducers` to produce the root reducer function, this must be\n * an object with the same shape as `combineReducers` keys.\n *\n * @param {Function} [enhancer] The store enhancer. You may optionally specify it\n * to enhance the store with third-party capabilities such as middleware,\n * time travel, persistence, etc. The only store enhancer that ships with Redux\n * is `applyMiddleware()`.\n *\n * @returns {Store} A Redux store that lets you read the state, dispatch actions\n * and subscribe to changes.\n */\nfunction createStore(reducer, preloadedState, enhancer) {\n  var _ref2;\n\n  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {\n    enhancer = preloadedState;\n    preloadedState = undefined;\n  }\n\n  if (typeof enhancer !== 'undefined') {\n    if (typeof enhancer !== 'function') {\n      throw new Error('Expected the enhancer to be a function.');\n    }\n\n    return enhancer(createStore)(reducer, preloadedState);\n  }\n\n  if (typeof reducer !== 'function') {\n    throw new Error('Expected the reducer to be a function.');\n  }\n\n  var currentReducer = reducer;\n  var currentState = preloadedState;\n  var currentListeners = [];\n  var nextListeners = currentListeners;\n  var isDispatching = false;\n\n  function ensureCanMutateNextListeners() {\n    if (nextListeners === currentListeners) {\n      nextListeners = currentListeners.slice();\n    }\n  }\n\n  /**\n   * Reads the state tree managed by the store.\n   *\n   * @returns {any} The current state tree of your application.\n   */\n  function getState() {\n    if (isDispatching) {\n      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');\n    }\n\n    return currentState;\n  }\n\n  /**\n   * Adds a change listener. It will be called any time an action is dispatched,\n   * and some part of the state tree may potentially have changed. You may then\n   * call `getState()` to read the current state tree inside the callback.\n   *\n   * You may call `dispatch()` from a change listener, with the following\n   * caveats:\n   *\n   * 1. The subscriptions are snapshotted just before every `dispatch()` call.\n   * If you subscribe or unsubscribe while the listeners are being invoked, this\n   * will not have any effect on the `dispatch()` that is currently in progress.\n   * However, the next `dispatch()` call, whether nested or not, will use a more\n   * recent snapshot of the subscription list.\n   *\n   * 2. The listener should not expect to see all state changes, as the state\n   * might have been updated multiple times during a nested `dispatch()` before\n   * the listener is called. It is, however, guaranteed that all subscribers\n   * registered before the `dispatch()` started will be called with the latest\n   * state by the time it exits.\n   *\n   * @param {Function} listener A callback to be invoked on every dispatch.\n   * @returns {Function} A function to remove this change listener.\n   */\n  function subscribe(listener) {\n    if (typeof listener !== 'function') {\n      throw new Error('Expected the listener to be a function.');\n    }\n\n    if (isDispatching) {\n      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');\n    }\n\n    var isSubscribed = true;\n\n    ensureCanMutateNextListeners();\n    nextListeners.push(listener);\n\n    return function unsubscribe() {\n      if (!isSubscribed) {\n        return;\n      }\n\n      if (isDispatching) {\n        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');\n      }\n\n      isSubscribed = false;\n\n      ensureCanMutateNextListeners();\n      var index = nextListeners.indexOf(listener);\n      nextListeners.splice(index, 1);\n    };\n  }\n\n  /**\n   * Dispatches an action. It is the only way to trigger a state change.\n   *\n   * The `reducer` function, used to create the store, will be called with the\n   * current state tree and the given `action`. Its return value will\n   * be considered the **next** state of the tree, and the change listeners\n   * will be notified.\n   *\n   * The base implementation only supports plain object actions. If you want to\n   * dispatch a Promise, an Observable, a thunk, or something else, you need to\n   * wrap your store creating function into the corresponding middleware. For\n   * example, see the documentation for the `redux-thunk` package. Even the\n   * middleware will eventually dispatch plain object actions using this method.\n   *\n   * @param {Object} action A plain object representing “what changed”. It is\n   * a good idea to keep actions serializable so you can record and replay user\n   * sessions, or use the time travelling `redux-devtools`. An action must have\n   * a `type` property which may not be `undefined`. It is a good idea to use\n   * string constants for action types.\n   *\n   * @returns {Object} For convenience, the same action object you dispatched.\n   *\n   * Note that, if you use a custom middleware, it may wrap `dispatch()` to\n   * return something else (for example, a Promise you can await).\n   */\n  function dispatch(action) {\n    if (!isPlainObject(action)) {\n      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');\n    }\n\n    if (typeof action.type === 'undefined') {\n      throw new Error('Actions may not have an undefined \"type\" property. ' + 'Have you misspelled a constant?');\n    }\n\n    if (isDispatching) {\n      throw new Error('Reducers may not dispatch actions.');\n    }\n\n    try {\n      isDispatching = true;\n      currentState = currentReducer(currentState, action);\n    } finally {\n      isDispatching = false;\n    }\n\n    var listeners = currentListeners = nextListeners;\n    for (var i = 0; i < listeners.length; i++) {\n      var listener = listeners[i];\n      listener();\n    }\n\n    return action;\n  }\n\n  /**\n   * Replaces the reducer currently used by the store to calculate the state.\n   *\n   * You might need this if your app implements code splitting and you want to\n   * load some of the reducers dynamically. You might also need this if you\n   * implement a hot reloading mechanism for Redux.\n   *\n   * @param {Function} nextReducer The reducer for the store to use instead.\n   * @returns {void}\n   */\n  function replaceReducer(nextReducer) {\n    if (typeof nextReducer !== 'function') {\n      throw new Error('Expected the nextReducer to be a function.');\n    }\n\n    currentReducer = nextReducer;\n    dispatch({ type: ActionTypes.REPLACE });\n  }\n\n  /**\n   * Interoperability point for observable/reactive libraries.\n   * @returns {observable} A minimal observable of state changes.\n   * For more information, see the observable proposal:\n   * https://github.com/tc39/proposal-observable\n   */\n  function observable() {\n    var _ref;\n\n    var outerSubscribe = subscribe;\n    return _ref = {\n      /**\n       * The minimal observable subscription method.\n       * @param {Object} observer Any object that can be used as an observer.\n       * The observer object should have a `next` method.\n       * @returns {subscription} An object with an `unsubscribe` method that can\n       * be used to unsubscribe the observable from the store, and prevent further\n       * emission of values from the observable.\n       */\n      subscribe: function subscribe(observer) {\n        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object' || observer === null) {\n          throw new TypeError('Expected the observer to be an object.');\n        }\n\n        function observeState() {\n          if (observer.next) {\n            observer.next(getState());\n          }\n        }\n\n        observeState();\n        var unsubscribe = outerSubscribe(observeState);\n        return { unsubscribe: unsubscribe };\n      }\n    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]] = function () {\n      return this;\n    }, _ref;\n  }\n\n  // When a store is created, an \"INIT\" action is dispatched so that every\n  // reducer returns their initial state. This effectively populates\n  // the initial state tree.\n  dispatch({ type: ActionTypes.INIT });\n\n  return _ref2 = {\n    dispatch: dispatch,\n    subscribe: subscribe,\n    getState: getState,\n    replaceReducer: replaceReducer\n  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]] = observable, _ref2;\n}\n\n/**\n * Prints a warning in the console if it exists.\n *\n * @param {String} message The warning message.\n * @returns {void}\n */\nfunction warning(message) {\n  /* eslint-disable no-console */\n  if (typeof console !== 'undefined' && typeof console.error === 'function') {\n    console.error(message);\n  }\n  /* eslint-enable no-console */\n  try {\n    // This error was thrown as a convenience so that if you enable\n    // \"break on all exceptions\" in your console,\n    // it would pause the execution at this line.\n    throw new Error(message);\n  } catch (e) {} // eslint-disable-line no-empty\n}\n\nfunction getUndefinedStateErrorMessage(key, action) {\n  var actionType = action && action.type;\n  var actionDescription = actionType && 'action \"' + String(actionType) + '\"' || 'an action';\n\n  return 'Given ' + actionDescription + ', reducer \"' + key + '\" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';\n}\n\nfunction getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {\n  var reducerKeys = Object.keys(reducers);\n  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';\n\n  if (reducerKeys.length === 0) {\n    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';\n  }\n\n  if (!isPlainObject(inputState)) {\n    return 'The ' + argumentName + ' has unexpected type of \"' + {}.toString.call(inputState).match(/\\s([a-z|A-Z]+)/)[1] + '\". Expected argument to be an object with the following ' + ('keys: \"' + reducerKeys.join('\", \"') + '\"');\n  }\n\n  var unexpectedKeys = Object.keys(inputState).filter(function (key) {\n    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];\n  });\n\n  unexpectedKeys.forEach(function (key) {\n    unexpectedKeyCache[key] = true;\n  });\n\n  if (action && action.type === ActionTypes.REPLACE) return;\n\n  if (unexpectedKeys.length > 0) {\n    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('\"' + unexpectedKeys.join('\", \"') + '\" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('\"' + reducerKeys.join('\", \"') + '\". Unexpected keys will be ignored.');\n  }\n}\n\nfunction assertReducerShape(reducers) {\n  Object.keys(reducers).forEach(function (key) {\n    var reducer = reducers[key];\n    var initialState = reducer(undefined, { type: ActionTypes.INIT });\n\n    if (typeof initialState === 'undefined') {\n      throw new Error('Reducer \"' + key + '\" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');\n    }\n\n    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');\n    if (typeof reducer(undefined, { type: type }) === 'undefined') {\n      throw new Error('Reducer \"' + key + '\" returned undefined when probed with a random type. ' + ('Don\\'t try to handle ' + ActionTypes.INIT + ' or other actions in \"redux/*\" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');\n    }\n  });\n}\n\n/**\n * Turns an object whose values are different reducer functions, into a single\n * reducer function. It will call every child reducer, and gather their results\n * into a single state object, whose keys correspond to the keys of the passed\n * reducer functions.\n *\n * @param {Object} reducers An object whose values correspond to different\n * reducer functions that need to be combined into one. One handy way to obtain\n * it is to use ES6 `import * as reducers` syntax. The reducers may never return\n * undefined for any action. Instead, they should return their initial state\n * if the state passed to them was undefined, and the current state for any\n * unrecognized action.\n *\n * @returns {Function} A reducer function that invokes every reducer inside the\n * passed object, and builds a state object with the same shape.\n */\nfunction combineReducers(reducers) {\n  var reducerKeys = Object.keys(reducers);\n  var finalReducers = {};\n  for (var i = 0; i < reducerKeys.length; i++) {\n    var key = reducerKeys[i];\n\n    if (true) {\n      if (typeof reducers[key] === 'undefined') {\n        warning('No reducer provided for key \"' + key + '\"');\n      }\n    }\n\n    if (typeof reducers[key] === 'function') {\n      finalReducers[key] = reducers[key];\n    }\n  }\n  var finalReducerKeys = Object.keys(finalReducers);\n\n  var unexpectedKeyCache = void 0;\n  if (true) {\n    unexpectedKeyCache = {};\n  }\n\n  var shapeAssertionError = void 0;\n  try {\n    assertReducerShape(finalReducers);\n  } catch (e) {\n    shapeAssertionError = e;\n  }\n\n  return function combination() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    var action = arguments[1];\n\n    if (shapeAssertionError) {\n      throw shapeAssertionError;\n    }\n\n    if (true) {\n      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);\n      if (warningMessage) {\n        warning(warningMessage);\n      }\n    }\n\n    var hasChanged = false;\n    var nextState = {};\n    for (var _i = 0; _i < finalReducerKeys.length; _i++) {\n      var _key = finalReducerKeys[_i];\n      var reducer = finalReducers[_key];\n      var previousStateForKey = state[_key];\n      var nextStateForKey = reducer(previousStateForKey, action);\n      if (typeof nextStateForKey === 'undefined') {\n        var errorMessage = getUndefinedStateErrorMessage(_key, action);\n        throw new Error(errorMessage);\n      }\n      nextState[_key] = nextStateForKey;\n      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;\n    }\n    return hasChanged ? nextState : state;\n  };\n}\n\nfunction bindActionCreator(actionCreator, dispatch) {\n  return function () {\n    return dispatch(actionCreator.apply(this, arguments));\n  };\n}\n\n/**\n * Turns an object whose values are action creators, into an object with the\n * same keys, but with every function wrapped into a `dispatch` call so they\n * may be invoked directly. This is just a convenience method, as you can call\n * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.\n *\n * For convenience, you can also pass a single function as the first argument,\n * and get a function in return.\n *\n * @param {Function|Object} actionCreators An object whose values are action\n * creator functions. One handy way to obtain it is to use ES6 `import * as`\n * syntax. You may also pass a single function.\n *\n * @param {Function} dispatch The `dispatch` function available on your Redux\n * store.\n *\n * @returns {Function|Object} The object mimicking the original object, but with\n * every action creator wrapped into the `dispatch` call. If you passed a\n * function as `actionCreators`, the return value will also be a single\n * function.\n */\nfunction bindActionCreators(actionCreators, dispatch) {\n  if (typeof actionCreators === 'function') {\n    return bindActionCreator(actionCreators, dispatch);\n  }\n\n  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {\n    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?');\n  }\n\n  var keys = Object.keys(actionCreators);\n  var boundActionCreators = {};\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    var actionCreator = actionCreators[key];\n    if (typeof actionCreator === 'function') {\n      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);\n    }\n  }\n  return boundActionCreators;\n}\n\n/**\n * Composes single-argument functions from right to left. The rightmost\n * function can take multiple arguments as it provides the signature for\n * the resulting composite function.\n *\n * @param {...Function} funcs The functions to compose.\n * @returns {Function} A function obtained by composing the argument functions\n * from right to left. For example, compose(f, g, h) is identical to doing\n * (...args) => f(g(h(...args))).\n */\n\nfunction compose() {\n  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {\n    funcs[_key] = arguments[_key];\n  }\n\n  if (funcs.length === 0) {\n    return function (arg) {\n      return arg;\n    };\n  }\n\n  if (funcs.length === 1) {\n    return funcs[0];\n  }\n\n  return funcs.reduce(function (a, b) {\n    return function () {\n      return a(b.apply(undefined, arguments));\n    };\n  });\n}\n\n/**\n * Creates a store enhancer that applies middleware to the dispatch method\n * of the Redux store. This is handy for a variety of tasks, such as expressing\n * asynchronous actions in a concise manner, or logging every action payload.\n *\n * See `redux-thunk` package as an example of the Redux middleware.\n *\n * Because middleware is potentially asynchronous, this should be the first\n * store enhancer in the composition chain.\n *\n * Note that each middleware will be given the `dispatch` and `getState` functions\n * as named arguments.\n *\n * @param {...Function} middlewares The middleware chain to be applied.\n * @returns {Function} A store enhancer applying the middleware.\n */\nfunction applyMiddleware() {\n  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {\n    middlewares[_key] = arguments[_key];\n  }\n\n  return function (createStore) {\n    return function () {\n      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n        args[_key2] = arguments[_key2];\n      }\n\n      var store = createStore.apply(undefined, args);\n      var _dispatch = function dispatch() {\n        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');\n      };\n\n      var middlewareAPI = {\n        getState: store.getState,\n        dispatch: function dispatch() {\n          return _dispatch.apply(undefined, arguments);\n        }\n      };\n      var chain = middlewares.map(function (middleware) {\n        return middleware(middlewareAPI);\n      });\n      _dispatch = compose.apply(undefined, chain)(store.dispatch);\n\n      return _extends({}, store, {\n        dispatch: _dispatch\n      });\n    };\n  };\n}\n\n/*\n * This is a dummy function to check if the function name has been altered by minification.\n * If the function has been minified and NODE_ENV !== 'production', warn the user.\n */\nfunction isCrushed() {}\n\nif (\"development\" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {\n  warning(\"You are currently using minified code outside of NODE_ENV === 'production'. \" + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');\n}\n\n\n\n\n//# sourceURL=webpack://ReduxStateApiCall/./node_modules/redux/es/redux.js?"
          );

          /***/
        },

      /***/ './node_modules/reselect/lib/index.js':
        /*!********************************************!*\
  !*** ./node_modules/reselect/lib/index.js ***!
  \********************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          eval(
            "\n\nexports.__esModule = true;\nexports.defaultMemoize = defaultMemoize;\nexports.createSelectorCreator = createSelectorCreator;\nexports.createStructuredSelector = createStructuredSelector;\nfunction defaultEqualityCheck(a, b) {\n  return a === b;\n}\n\nfunction areArgumentsShallowlyEqual(equalityCheck, prev, next) {\n  if (prev === null || next === null || prev.length !== next.length) {\n    return false;\n  }\n\n  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.\n  var length = prev.length;\n  for (var i = 0; i < length; i++) {\n    if (!equalityCheck(prev[i], next[i])) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nfunction defaultMemoize(func) {\n  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;\n\n  var lastArgs = null;\n  var lastResult = null;\n  // we reference arguments instead of spreading them for performance reasons\n  return function () {\n    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {\n      // apply arguments instead of spreading for performance.\n      lastResult = func.apply(null, arguments);\n    }\n\n    lastArgs = arguments;\n    return lastResult;\n  };\n}\n\nfunction getDependencies(funcs) {\n  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;\n\n  if (!dependencies.every(function (dep) {\n    return typeof dep === 'function';\n  })) {\n    var dependencyTypes = dependencies.map(function (dep) {\n      return typeof dep;\n    }).join(', ');\n    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));\n  }\n\n  return dependencies;\n}\n\nfunction createSelectorCreator(memoize) {\n  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    memoizeOptions[_key - 1] = arguments[_key];\n  }\n\n  return function () {\n    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      funcs[_key2] = arguments[_key2];\n    }\n\n    var recomputations = 0;\n    var resultFunc = funcs.pop();\n    var dependencies = getDependencies(funcs);\n\n    var memoizedResultFunc = memoize.apply(undefined, [function () {\n      recomputations++;\n      // apply arguments instead of spreading for performance.\n      return resultFunc.apply(null, arguments);\n    }].concat(memoizeOptions));\n\n    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.\n    var selector = defaultMemoize(function () {\n      var params = [];\n      var length = dependencies.length;\n\n      for (var i = 0; i < length; i++) {\n        // apply arguments instead of spreading and mutate a local list of params for performance.\n        params.push(dependencies[i].apply(null, arguments));\n      }\n\n      // apply arguments instead of spreading for performance.\n      return memoizedResultFunc.apply(null, params);\n    });\n\n    selector.resultFunc = resultFunc;\n    selector.recomputations = function () {\n      return recomputations;\n    };\n    selector.resetRecomputations = function () {\n      return recomputations = 0;\n    };\n    return selector;\n  };\n}\n\nvar createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);\n\nfunction createStructuredSelector(selectors) {\n  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;\n\n  if (typeof selectors !== 'object') {\n    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));\n  }\n  var objectKeys = Object.keys(selectors);\n  return selectorCreator(objectKeys.map(function (key) {\n    return selectors[key];\n  }), function () {\n    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n      values[_key3] = arguments[_key3];\n    }\n\n    return values.reduce(function (composition, value, index) {\n      composition[objectKeys[index]] = value;\n      return composition;\n    }, {});\n  });\n}\n\n//# sourceURL=webpack://ReduxStateApiCall/./node_modules/reselect/lib/index.js?"
          );

          /***/
        },

      /***/ './node_modules/symbol-observable/es/index.js':
        /*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");\n/* global window */\n\n\nvar root;\n\nif (typeof self !== \'undefined\') {\n  root = self;\n} else if (typeof window !== \'undefined\') {\n  root = window;\n} else if (typeof global !== \'undefined\') {\n  root = global;\n} else if (true) {\n  root = module;\n} else {}\n\nvar result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);\n/* harmony default export */ __webpack_exports__["default"] = (result);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack://ReduxStateApiCall/./node_modules/symbol-observable/es/index.js?'
          );

          /***/
        },

      /***/ './node_modules/symbol-observable/es/ponyfill.js':
        /*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return symbolObservablePonyfill; });\nfunction symbolObservablePonyfill(root) {\n\tvar result;\n\tvar Symbol = root.Symbol;\n\n\tif (typeof Symbol === 'function') {\n\t\tif (Symbol.observable) {\n\t\t\tresult = Symbol.observable;\n\t\t} else {\n\t\t\tresult = Symbol('observable');\n\t\t\tSymbol.observable = result;\n\t\t}\n\t} else {\n\t\tresult = '@@observable';\n\t}\n\n\treturn result;\n};\n\n\n//# sourceURL=webpack://ReduxStateApiCall/./node_modules/symbol-observable/es/ponyfill.js?"
          );

          /***/
        },

      /***/ './node_modules/webpack/buildin/global.js':
        /*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function("return this")() || (1, eval)("this");\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === "object") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it\'s\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://ReduxStateApiCall/(webpack)/buildin/global.js?'
          );

          /***/
        },

      /***/ './node_modules/webpack/buildin/harmony-module.js':
        /*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, "loaded", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, "id", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, "exports", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack://ReduxStateApiCall/(webpack)/buildin/harmony-module.js?'
          );

          /***/
        },

      /***/ './src/apiStateSelector.js':
        /*!*********************************!*\
  !*** ./src/apiStateSelector.js ***!
  \*********************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moduleName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleName */ "./src/moduleName.js");\n\n\nvar apiStateSelector = function apiStateSelector(state) {\n  return state[_moduleName__WEBPACK_IMPORTED_MODULE_0__["default"]];\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (apiStateSelector);\n\n//# sourceURL=webpack://ReduxStateApiCall/./src/apiStateSelector.js?'
          );

          /***/
        },

      /***/ './src/constants.js':
        /*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
        /*! exports provided: REQUEST_PATTERN, FAILURE_PATTERN, SUCCESS_PATTERN, VALID_TYPE_PATTERN */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_PATTERN", function() { return REQUEST_PATTERN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAILURE_PATTERN", function() { return FAILURE_PATTERN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_PATTERN", function() { return SUCCESS_PATTERN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALID_TYPE_PATTERN", function() { return VALID_TYPE_PATTERN; });\nvar REQUEST_PATTERN = /(.*)_REQUEST$/;\nvar FAILURE_PATTERN = /(.*)_FAILURE$/;\nvar SUCCESS_PATTERN = /(.*)_SUCCESS$/;\nvar VALID_TYPE_PATTERN = /(.*)_(REQUEST|FAILURE|SUCCESS)$/;\n\n//# sourceURL=webpack://ReduxStateApiCall/./src/constants.js?'
          );

          /***/
        },

      /***/ './src/createErrorMessageSelector.js':
        /*!*******************************************!*\
  !*** ./src/createErrorMessageSelector.js ***!
  \*******************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/lib/index.js");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apiStateSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiStateSelector */ "./src/apiStateSelector.js");\n/* harmony import */ var _validateActionName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validateActionName */ "./src/validateActionName.js");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/constants.js");\n\n\n\n\n\nvar rootStateSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_apiStateSelector__WEBPACK_IMPORTED_MODULE_1__["default"], function (state) {\n  return state.error;\n});\n\n// returns the first error messages for actions\n// * We assume when any request fails on a page that\n//   requires multiple API calls, we shows the first error\nvar createErrorMessageSelector = function createErrorMessageSelector(actions) {\n  actions.forEach(_validateActionName__WEBPACK_IMPORTED_MODULE_2__["default"]);\n  var plainActions = actions.map(function (action) {\n    return action.toString().replace(_constants__WEBPACK_IMPORTED_MODULE_3__["VALID_TYPE_PATTERN"], \'$1\');\n  });\n\n  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([rootStateSelector], function (state) {\n    var errors = plainActions.map(function (action) {\n      return state[action];\n    }).filter(function (error) {\n      return error;\n    });\n    if (!errors || !errors.length) return null;\n    return errors[0];\n  });\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (createErrorMessageSelector);\n\n//# sourceURL=webpack://ReduxStateApiCall/./src/createErrorMessageSelector.js?'
          );

          /***/
        },

      /***/ './src/createLoadingSelector.js':
        /*!**************************************!*\
  !*** ./src/createLoadingSelector.js ***!
  \**************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/lib/index.js");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apiStateSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiStateSelector */ "./src/apiStateSelector.js");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.js");\n/* harmony import */ var _validateActionName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validateActionName */ "./src/validateActionName.js");\n\n\n\n\n\nvar rootStateSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([_apiStateSelector__WEBPACK_IMPORTED_MODULE_1__["default"]], function (state) {\n  return state.loading;\n});\n\nvar selectLoading = function selectLoading(state) {\n  return function (action) {\n    var propertyKey = action.toString().replace(_constants__WEBPACK_IMPORTED_MODULE_2__["VALID_TYPE_PATTERN"], \'$1\');\n    return Boolean(state[propertyKey]);\n  };\n};\n\n// returns true only when all actions is not loading\nvar createLoadingSelector = function createLoadingSelector(actions) {\n  actions.forEach(_validateActionName__WEBPACK_IMPORTED_MODULE_3__["default"]);\n  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([rootStateSelector], function (state) {\n    return actions.some(selectLoading(state));\n  });\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (createLoadingSelector);\n\n//# sourceURL=webpack://ReduxStateApiCall/./src/createLoadingSelector.js?'
          );

          /***/
        },

      /***/ './src/index.js':
        /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
        /*! exports provided: MODULE_NAME, createLoadingSelector, createErrorMessageSelector, reducer */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moduleName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleName */ "./src/moduleName.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MODULE_NAME", function() { return _moduleName__WEBPACK_IMPORTED_MODULE_0__["default"]; });\n\n/* harmony import */ var _createLoadingSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createLoadingSelector */ "./src/createLoadingSelector.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLoadingSelector", function() { return _createLoadingSelector__WEBPACK_IMPORTED_MODULE_1__["default"]; });\n\n/* harmony import */ var _createErrorMessageSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createErrorMessageSelector */ "./src/createErrorMessageSelector.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createErrorMessageSelector", function() { return _createErrorMessageSelector__WEBPACK_IMPORTED_MODULE_2__["default"]; });\n\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_3__["default"]; });\n\n\n\n\n\n\n//# sourceURL=webpack://ReduxStateApiCall/./src/index.js?'
          );

          /***/
        },

      /***/ './src/moduleName.js':
        /*!***************************!*\
  !*** ./src/moduleName.js ***!
  \***************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (\'api\');\n\n//# sourceURL=webpack://ReduxStateApiCall/./src/moduleName.js?'
          );

          /***/
        },

      /***/ './src/reducers/error.js':
        /*!*******************************!*\
  !*** ./src/reducers/error.js ***!
  \*******************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.js");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n/* harmony default export */ __webpack_exports__["default"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var _ref = arguments[1];\n  var type = _ref.type,\n      payload = _ref.payload,\n      error = _ref.error;\n\n  // not a *_REQUEST / *_FAILURE actions, so we ignore them\n  if (!/(.*)_(REQUEST|FAILURE)/.exec(type)) return state;\n\n  var requestName = type.toString().replace(_constants__WEBPACK_IMPORTED_MODULE_0__["VALID_TYPE_PATTERN"], \'$1\');\n\n  // Store errorMessage\n  // e.g. stores errorMessage when receiving GET_TODOS_FAILURE\n  //      else clear errorMessage when receiving GET_TODOS_REQUEST\n  return _extends({}, state, _defineProperty({}, requestName, error === true && _constants__WEBPACK_IMPORTED_MODULE_0__["FAILURE_PATTERN"].test(type) ? payload : null));\n});\n\n//# sourceURL=webpack://ReduxStateApiCall/./src/reducers/error.js?'
          );

          /***/
        },

      /***/ './src/reducers/index.js':
        /*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./src/reducers/error.js");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading */ "./src/reducers/loading.js");\n\n\n\n\n/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({\n  error: _error__WEBPACK_IMPORTED_MODULE_1__["default"],\n  loading: _loading__WEBPACK_IMPORTED_MODULE_2__["default"]\n}));\n\n//# sourceURL=webpack://ReduxStateApiCall/./src/reducers/index.js?'
          );

          /***/
        },

      /***/ './src/reducers/loading.js':
        /*!*********************************!*\
  !*** ./src/reducers/loading.js ***!
  \*********************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.js");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n/* harmony default export */ __webpack_exports__["default"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var _ref = arguments[1];\n  var type = _ref.type;\n\n  // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them\n  if (!/(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type)) return state;\n\n  var requestName = type.toString().replace(_constants__WEBPACK_IMPORTED_MODULE_0__["VALID_TYPE_PATTERN"], \'$1\');\n\n  // Store whether a request is happening at the moment or not\n  // e.g. will be true when receiving GET_TODOS_REQUEST\n  //      and false when receiving GET_TODOS_SUCCESS / GET_TODOS_FAILURE\n  return _extends({}, state, _defineProperty({}, requestName, _constants__WEBPACK_IMPORTED_MODULE_0__["REQUEST_PATTERN"].test(type)));\n});\n\n//# sourceURL=webpack://ReduxStateApiCall/./src/reducers/loading.js?'
          );

          /***/
        },

      /***/ './src/validateActionName.js':
        /*!***********************************!*\
  !*** ./src/validateActionName.js ***!
  \***********************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");\n\n\n\nvar validateActionName = function validateActionName(action) {\n  return invariant__WEBPACK_IMPORTED_MODULE_0___default()(_constants__WEBPACK_IMPORTED_MODULE_1__["VALID_TYPE_PATTERN"].test(action.toString()), \'The action name "%s" must end with one of those patterns: [_REQUEST, _FAILURE, _SUCCESS]\', action);\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (validateActionName);\n\n//# sourceURL=webpack://ReduxStateApiCall/./src/validateActionName.js?'
          );

          /***/
        }

      /******/
    }
  );
});
