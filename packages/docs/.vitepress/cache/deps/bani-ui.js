import {
  config$1,
  icon,
  library$1,
  parse$1,
  text
} from "./chunk-BXVDNTRS.js";
import {
  faAngleDown,
  faCheckCircle,
  faCircleExclamation,
  faCircleInfo,
  faCircleXmark,
  faQuestionCircle,
  faSpinner,
  faXmark
} from "./chunk-D2YM6WAR.js";
import {
  Fragment,
  Transition,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createTextVNode,
  createVNode,
  defineComponent,
  getCurrentInstance,
  guardReactiveProps,
  h,
  inject,
  isRef,
  isVNode,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  openBlock,
  provide,
  reactive,
  ref,
  render,
  renderList,
  renderSlot,
  resolveDynamicComponent,
  shallowReactive,
  toDisplayString,
  toHandlers,
  toRef,
  unref,
  useCssVars,
  useSlots,
  vShow,
  watch,
  watchEffect,
  withCtx,
  withDirectives,
  withModifiers
} from "./chunk-66AUOSAB.js";
import {
  English
} from "./chunk-TCRKE77U.js";

// ../../node_modules/.pnpm/bani-ui@1.0.2_vue@3.5.34_typescript@5.9.3_/node_modules/bani-ui/dist/es/vendor-mcUuP0dl.js
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
var Symbol$1 = root.Symbol;
var objectProto$i = Object.prototype;
var hasOwnProperty$f = objectProto$i.hasOwnProperty;
var nativeObjectToString$1 = objectProto$i.toString;
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$f.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$h = Object.prototype;
var nativeObjectToString = objectProto$h.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag$3 = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$3;
}
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var isArray = Array.isArray;
var symbolProto$2 = Symbol$1 ? Symbol$1.prototype : void 0;
var symbolToString = symbolProto$2 ? symbolProto$2.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var INFINITY = 1 / 0;
var MAX_INTEGER = 17976931348623157e292;
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
function toInteger(value) {
  var result = toFinite(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
function identity(value) {
  return value;
}
var asyncTag = "[object AsyncFunction]";
var funcTag$2 = "[object Function]";
var genTag$1 = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root["__core-js_shared__"];
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
})();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype;
var objectProto$g = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$e = objectProto$g.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString$1.call(hasOwnProperty$e).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var WeakMap = getNative(root, "WeakMap");
var metaMap = WeakMap && new WeakMap();
var baseSetData = !metaMap ? identity : function(func, data) {
  metaMap.set(func, data);
  return func;
};
var objectCreate = Object.create;
var baseCreate = /* @__PURE__ */ (function() {
  function object() {
  }
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
})();
function createCtor(Ctor) {
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0:
        return new Ctor();
      case 1:
        return new Ctor(args[0]);
      case 2:
        return new Ctor(args[0], args[1]);
      case 3:
        return new Ctor(args[0], args[1], args[2]);
      case 4:
        return new Ctor(args[0], args[1], args[2], args[3]);
      case 5:
        return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6:
        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7:
        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype), result = Ctor.apply(thisBinding, args);
    return isObject(result) ? result : thisBinding;
  };
}
var WRAP_BIND_FLAG$6 = 1;
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & WRAP_BIND_FLAG$6, Ctor = createCtor(func);
  function wrapper() {
    var fn2 = this && this !== root && this instanceof wrapper ? Ctor : func;
    return fn2.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var nativeMax$4 = Math.max;
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax$4(argsLength - holdersLength, 0), result = Array(leftLength + rangeLength), isUncurried = !isCurried;
  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}
var nativeMax$3 = Math.max;
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax$3(argsLength - holdersLength, 0), result = Array(rangeLength + rightLength), isUncurried = !isCurried;
  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset2 = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset2 + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset2 + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}
function countHolders(array, placeholder) {
  var length = array.length, result = 0;
  while (length--) {
    if (array[length] === placeholder) {
      ++result;
    }
  }
  return result;
}
function baseLodash() {
}
var MAX_ARRAY_LENGTH = 4294967295;
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}
LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;
function noop() {
}
var getData = !metaMap ? noop : function(func) {
  return metaMap.get(func);
};
var realNames = {};
var objectProto$f = Object.prototype;
var hasOwnProperty$d = objectProto$f.hasOwnProperty;
function getFuncName(func) {
  var result = func.name + "", array = realNames[result], length = hasOwnProperty$d.call(realNames, result) ? array.length : 0;
  while (length--) {
    var data = array[length], otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = void 0;
}
LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
function wrapperClone(wrapper) {
  if (wrapper instanceof LazyWrapper) {
    return wrapper.clone();
  }
  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray(wrapper.__actions__);
  result.__index__ = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}
var objectProto$e = Object.prototype;
var hasOwnProperty$c = objectProto$e.hasOwnProperty;
function lodash(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty$c.call(value, "__wrapped__")) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}
lodash.prototype = baseLodash.prototype;
lodash.prototype.constructor = lodash;
function isLaziable(func) {
  var funcName = getFuncName(func), other = lodash[funcName];
  if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData(other);
  return !!data && func === data[0];
}
var HOT_COUNT = 800;
var HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var setData = shortOut(baseSetData);
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/;
var reSplitDetails = /,? & /;
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
function insertWrapDetails(source, details) {
  var length = details.length;
  if (!length) {
    return source;
  }
  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
  details = details.join(length > 2 ? ", " : " ");
  return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
}
function constant(value) {
  return function() {
    return value;
  };
}
var defineProperty = (function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
})();
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var setToString = shortOut(baseSetToString);
function arrayEach(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length, index = fromIndex + -1;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
function baseIsNaN(value) {
  return value !== value;
}
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1, length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
function baseIndexOf(array, value, fromIndex) {
  return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
}
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}
var WRAP_BIND_FLAG$5 = 1;
var WRAP_BIND_KEY_FLAG$3 = 2;
var WRAP_CURRY_FLAG$4 = 8;
var WRAP_CURRY_RIGHT_FLAG$2 = 16;
var WRAP_PARTIAL_FLAG$3 = 32;
var WRAP_PARTIAL_RIGHT_FLAG$2 = 64;
var WRAP_ARY_FLAG$2 = 128;
var WRAP_REARG_FLAG$1 = 256;
var WRAP_FLIP_FLAG$1 = 512;
var wrapFlags = [
  ["ary", WRAP_ARY_FLAG$2],
  ["bind", WRAP_BIND_FLAG$5],
  ["bindKey", WRAP_BIND_KEY_FLAG$3],
  ["curry", WRAP_CURRY_FLAG$4],
  ["curryRight", WRAP_CURRY_RIGHT_FLAG$2],
  ["flip", WRAP_FLIP_FLAG$1],
  ["partial", WRAP_PARTIAL_FLAG$3],
  ["partialRight", WRAP_PARTIAL_RIGHT_FLAG$2],
  ["rearg", WRAP_REARG_FLAG$1]
];
function updateWrapDetails(details, bitmask) {
  arrayEach(wrapFlags, function(pair) {
    var value = "_." + pair[0];
    if (bitmask & pair[1] && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}
function setWrapToString(wrapper, reference2, bitmask) {
  var source = reference2 + "";
  return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
}
var WRAP_CURRY_BOUND_FLAG$1 = 4;
var WRAP_CURRY_FLAG$3 = 8;
var WRAP_PARTIAL_FLAG$2 = 32;
var WRAP_PARTIAL_RIGHT_FLAG$1 = 64;
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & WRAP_CURRY_FLAG$3, newHolders = isCurry ? holders : void 0, newHoldersRight = isCurry ? void 0 : holders, newPartials = isCurry ? partials : void 0, newPartialsRight = isCurry ? void 0 : partials;
  bitmask |= isCurry ? WRAP_PARTIAL_FLAG$2 : WRAP_PARTIAL_RIGHT_FLAG$1;
  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG$1 : WRAP_PARTIAL_FLAG$2);
  if (!(bitmask & WRAP_CURRY_BOUND_FLAG$1)) {
    bitmask &= -4;
  }
  var newData = [
    func,
    bitmask,
    thisArg,
    newPartials,
    newHolders,
    newPartialsRight,
    newHoldersRight,
    argPos,
    ary,
    arity
  ];
  var result = wrapFunc.apply(void 0, newData);
  if (isLaziable(func)) {
    setData(result, newData);
  }
  result.placeholder = placeholder;
  return setWrapToString(result, func, bitmask);
}
function getHolder(func) {
  var object = func;
  return object.placeholder;
}
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var nativeMin$2 = Math.min;
function reorder(array, indexes) {
  var arrLength = array.length, length = nativeMin$2(indexes.length, arrLength), oldArray = copyArray(array);
  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : void 0;
  }
  return array;
}
var PLACEHOLDER$1 = "__lodash_placeholder__";
function replaceHolders(array, placeholder) {
  var index = -1, length = array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER$1) {
      array[index] = PLACEHOLDER$1;
      result[resIndex++] = index;
    }
  }
  return result;
}
var WRAP_BIND_FLAG$4 = 1;
var WRAP_BIND_KEY_FLAG$2 = 2;
var WRAP_CURRY_FLAG$2 = 8;
var WRAP_CURRY_RIGHT_FLAG$1 = 16;
var WRAP_ARY_FLAG$1 = 128;
var WRAP_FLIP_FLAG = 512;
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & WRAP_ARY_FLAG$1, isBind = bitmask & WRAP_BIND_FLAG$4, isBindKey = bitmask & WRAP_BIND_KEY_FLAG$2, isCurried = bitmask & (WRAP_CURRY_FLAG$2 | WRAP_CURRY_RIGHT_FLAG$1), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? void 0 : createCtor(func);
  function wrapper() {
    var length = arguments.length, args = Array(length), index = length;
    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders(args, placeholder);
      return createRecurry(
        func,
        bitmask,
        createHybrid,
        wrapper.placeholder,
        thisArg,
        args,
        newHolders,
        argPos,
        ary,
        arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this, fn2 = isBindKey ? thisBinding[func] : func;
    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root && this instanceof wrapper) {
      fn2 = Ctor || createCtor(fn2);
    }
    return fn2.apply(thisBinding, args);
  }
  return wrapper;
}
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor(func);
  function wrapper() {
    var length = arguments.length, args = Array(length), index = length, placeholder = getHolder(wrapper);
    while (index--) {
      args[index] = arguments[index];
    }
    var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
    length -= holders.length;
    if (length < arity) {
      return createRecurry(
        func,
        bitmask,
        createHybrid,
        wrapper.placeholder,
        void 0,
        args,
        holders,
        void 0,
        void 0,
        arity - length
      );
    }
    var fn2 = this && this !== root && this instanceof wrapper ? Ctor : func;
    return apply(fn2, this, args);
  }
  return wrapper;
}
var WRAP_BIND_FLAG$3 = 1;
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG$3, Ctor = createCtor(func);
  function wrapper() {
    var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array(leftLength + argsLength), fn2 = this && this !== root && this instanceof wrapper ? Ctor : func;
    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn2, isBind ? thisArg : this, args);
  }
  return wrapper;
}
var PLACEHOLDER = "__lodash_placeholder__";
var WRAP_BIND_FLAG$2 = 1;
var WRAP_BIND_KEY_FLAG$1 = 2;
var WRAP_CURRY_BOUND_FLAG = 4;
var WRAP_CURRY_FLAG$1 = 8;
var WRAP_ARY_FLAG = 128;
var WRAP_REARG_FLAG = 256;
var nativeMin$1 = Math.min;
function mergeData(data, source) {
  var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG$2 | WRAP_BIND_KEY_FLAG$1 | WRAP_ARY_FLAG);
  var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG$1 || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG$1;
  if (!(isCommon || isCombo)) {
    return data;
  }
  if (srcBitmask & WRAP_BIND_FLAG$2) {
    data[2] = source[2];
    newBitmask |= bitmask & WRAP_BIND_FLAG$2 ? 0 : WRAP_CURRY_BOUND_FLAG;
  }
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs(partials, value, source[4]) : value;
    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
  }
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
  }
  value = source[7];
  if (value) {
    data[7] = value;
  }
  if (srcBitmask & WRAP_ARY_FLAG) {
    data[8] = data[8] == null ? source[8] : nativeMin$1(data[8], source[8]);
  }
  if (data[9] == null) {
    data[9] = source[9];
  }
  data[0] = source[0];
  data[1] = newBitmask;
  return data;
}
var FUNC_ERROR_TEXT$4 = "Expected a function";
var WRAP_BIND_FLAG$1 = 1;
var WRAP_BIND_KEY_FLAG = 2;
var WRAP_CURRY_FLAG = 8;
var WRAP_CURRY_RIGHT_FLAG = 16;
var WRAP_PARTIAL_FLAG$1 = 32;
var WRAP_PARTIAL_RIGHT_FLAG = 64;
var nativeMax$2 = Math.max;
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
  if (!isBindKey && typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$4);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= -97;
    partials = holders = void 0;
  }
  ary = ary === void 0 ? ary : nativeMax$2(toInteger(ary), 0);
  arity = arity === void 0 ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;
  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials, holdersRight = holders;
    partials = holders = void 0;
  }
  var data = isBindKey ? void 0 : getData(func);
  var newData = [
    func,
    bitmask,
    thisArg,
    partials,
    holders,
    partialsRight,
    holdersRight,
    argPos,
    ary,
    arity
  ];
  if (data) {
    mergeData(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === void 0 ? isBindKey ? 0 : func.length : nativeMax$2(newData[9] - length, 0);
  if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
    bitmask &= -25;
  }
  if (!bitmask || bitmask == WRAP_BIND_FLAG$1) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == WRAP_PARTIAL_FLAG$1 || bitmask == (WRAP_BIND_FLAG$1 | WRAP_PARTIAL_FLAG$1)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(void 0, newData);
  }
  var setter = data ? baseSetData : setData;
  return setWrapToString(setter(result, newData), func, bitmask);
}
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty) {
    defineProperty(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var objectProto$d = Object.prototype;
var hasOwnProperty$b = objectProto$d.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$b.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
var nativeMax$1 = Math.max;
function overRest(func, start2, transform) {
  start2 = nativeMax$1(start2 === void 0 ? func.length - 1 : start2, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax$1(args.length - start2, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start2 + index];
    }
    index = -1;
    var otherArgs = Array(start2 + 1);
    while (++index < start2) {
      otherArgs[index] = args[index];
    }
    otherArgs[start2] = transform(array);
    return apply(func, this, otherArgs);
  };
}
function baseRest(func, start2) {
  return setToString(overRest(func, start2, identity), func + "");
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
    return eq(object[index], value);
  }
  return false;
}
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
var objectProto$c = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$c;
  return value === proto;
}
function baseTimes(n2, iteratee) {
  var index = -1, result = Array(n2);
  while (++index < n2) {
    result[index] = iteratee(index);
  }
  return result;
}
var argsTag$3 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$3;
}
var objectProto$b = Object.prototype;
var hasOwnProperty$a = objectProto$b.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$b.propertyIsEnumerable;
var isArguments = baseIsArguments(/* @__PURE__ */ (function() {
  return arguments;
})()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$a.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
function stubFalse() {
  return false;
}
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root.Buffer : void 0;
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var argsTag$2 = "[object Arguments]";
var arrayTag$2 = "[object Array]";
var boolTag$3 = "[object Boolean]";
var dateTag$3 = "[object Date]";
var errorTag$2 = "[object Error]";
var funcTag$1 = "[object Function]";
var mapTag$5 = "[object Map]";
var numberTag$4 = "[object Number]";
var objectTag$4 = "[object Object]";
var regexpTag$3 = "[object RegExp]";
var setTag$5 = "[object Set]";
var stringTag$4 = "[object String]";
var weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$3 = "[object ArrayBuffer]";
var dataViewTag$4 = "[object DataView]";
var float32Tag$2 = "[object Float32Array]";
var float64Tag$2 = "[object Float64Array]";
var int8Tag$2 = "[object Int8Array]";
var int16Tag$2 = "[object Int16Array]";
var int32Tag$2 = "[object Int32Array]";
var uint8Tag$2 = "[object Uint8Array]";
var uint8ClampedTag$2 = "[object Uint8ClampedArray]";
var uint16Tag$2 = "[object Uint16Array]";
var uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$5] = typedArrayTags[numberTag$4] = typedArrayTags[objectTag$4] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$5] = typedArrayTags[stringTag$4] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal.process;
var nodeUtil = (function() {
  try {
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
})();
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var objectProto$a = Object.prototype;
var hasOwnProperty$9 = objectProto$a.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$9.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var nativeKeys = overArg(Object.keys, Object);
var objectProto$9 = Object.prototype;
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$8.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$7.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var nativeCreate = getNative(Object, "create");
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$6.call(data, key) ? data[key] : void 0;
}
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== void 0 : hasOwnProperty$5.call(data, key);
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  return index < 0 ? void 0 : data[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root, "Map");
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$1 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT$3 = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$3);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : void 0;
}
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
function arrayPush(array, values) {
  var index = -1, length = values.length, offset2 = array.length;
  while (++index < length) {
    array[offset2 + index] = values[index];
  }
  return array;
}
var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
function isFlattenable(value) {
  return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (predicate(value)) {
      {
        arrayPush(result, value);
      }
    } else {
      result[result.length] = value;
    }
  }
  return result;
}
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array) : [];
}
function flatRest(func) {
  return setToString(overRest(func, void 0, flatten), func + "");
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
var objectTag$3 = "[object Object]";
var funcProto = Function.prototype;
var objectProto$5 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$4.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var WRAP_BIND_FLAG = 1;
var WRAP_PARTIAL_FLAG = 32;
var bind = baseRest(function(func, thisArg, partials) {
  var bitmask = WRAP_BIND_FLAG;
  if (partials.length) {
    var holders = replaceHolders(partials, getHolder(bind));
    bitmask |= WRAP_PARTIAL_FLAG;
  }
  return createWrap(func, bitmask, thisArg, partials, holders);
});
bind.placeholder = {};
function baseSlice(array, start2, end2) {
  var index = -1, length = array.length;
  if (start2 < 0) {
    start2 = -start2 > length ? 0 : length + start2;
  }
  end2 = end2 > length ? length : end2;
  if (end2 < 0) {
    end2 += length;
  }
  length = start2 > end2 ? 0 : end2 - start2 >>> 0;
  start2 >>>= 0;
  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start2];
  }
  return result;
}
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root.Buffer : void 0;
var allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
function arrayFilter(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$4 = Object.prototype;
var propertyIsEnumerable = objectProto$4.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}
var DataView = getNative(root, "DataView");
var Promise$1 = getNative(root, "Promise");
var Set$1 = getNative(root, "Set");
var mapTag$4 = "[object Map]";
var objectTag$2 = "[object Object]";
var promiseTag = "[object Promise]";
var setTag$4 = "[object Set]";
var weakMapTag$1 = "[object WeakMap]";
var dataViewTag$3 = "[object DataView]";
var dataViewCtorString = toSource(DataView);
var mapCtorString = toSource(Map$1);
var promiseCtorString = toSource(Promise$1);
var setCtorString = toSource(Set$1);
var weakMapCtorString = toSource(WeakMap);
var getTag = baseGetTag;
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$3 || Map$1 && getTag(new Map$1()) != mapTag$4 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$4 || WeakMap && getTag(new WeakMap()) != weakMapTag$1) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$2 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$3;
        case mapCtorString:
          return mapTag$4;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$4;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty$3.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var Uint8Array = root.Uint8Array;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = cloneArrayBuffer(dataView.buffer);
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : void 0;
var symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var boolTag$2 = "[object Boolean]";
var dateTag$2 = "[object Date]";
var mapTag$3 = "[object Map]";
var numberTag$3 = "[object Number]";
var regexpTag$2 = "[object RegExp]";
var setTag$3 = "[object Set]";
var stringTag$3 = "[object String]";
var symbolTag$2 = "[object Symbol]";
var arrayBufferTag$2 = "[object ArrayBuffer]";
var dataViewTag$2 = "[object DataView]";
var float32Tag$1 = "[object Float32Array]";
var float64Tag$1 = "[object Float64Array]";
var int8Tag$1 = "[object Int8Array]";
var int16Tag$1 = "[object Int16Array]";
var int32Tag$1 = "[object Int32Array]";
var uint8Tag$1 = "[object Uint8Array]";
var uint8ClampedTag$1 = "[object Uint8ClampedArray]";
var uint16Tag$1 = "[object Uint16Array]";
var uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$2:
      return cloneArrayBuffer(object);
    case boolTag$2:
    case dateTag$2:
      return new Ctor(+object);
    case dataViewTag$2:
      return cloneDataView(object);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$3:
      return new Ctor();
    case numberTag$3:
    case stringTag$3:
      return new Ctor(object);
    case regexpTag$2:
      return cloneRegExp(object);
    case setTag$3:
      return new Ctor();
    case symbolTag$2:
      return cloneSymbol(object);
  }
}
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
var mapTag$2 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag$2;
}
var nodeIsMap = nodeUtil && nodeUtil.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
var setTag$2 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag$2;
}
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var CLONE_DEEP_FLAG$1 = 1;
var argsTag$1 = "[object Arguments]";
var arrayTag$1 = "[object Array]";
var boolTag$1 = "[object Boolean]";
var dateTag$1 = "[object Date]";
var errorTag$1 = "[object Error]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var mapTag$1 = "[object Map]";
var numberTag$2 = "[object Number]";
var objectTag$1 = "[object Object]";
var regexpTag$1 = "[object RegExp]";
var setTag$1 = "[object Set]";
var stringTag$2 = "[object String]";
var symbolTag$1 = "[object Symbol]";
var weakMapTag = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]";
var dataViewTag$1 = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag$2] = cloneableTags[objectTag$1] = cloneableTags[regexpTag$1] = cloneableTags[setTag$1] = cloneableTags[stringTag$2] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
  } else {
    var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$1 || tag == argsTag$1 || isFunc && !object) {
      result = {};
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = getAllKeysIn;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key) {
  return cache.has(key);
}
var COMPARE_PARTIAL_FLAG$5 = 1;
var COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
function mapToArray(map) {
  var index = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
function setToArray(set2) {
  var index = -1, result = Array(set2.size);
  set2.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$4 = 1;
var COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var mapTag = "[object Map]";
var numberTag$1 = "[object Number]";
var regexpTag = "[object RegExp]";
var setTag = "[object Set]";
var stringTag$1 = "[object String]";
var symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag = "[object DataView]";
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0;
var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag$1:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag$1:
      return object == other + "";
    case mapTag:
      var convert2 = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert2 || (convert2 = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object, other);
      var result = equalArrays(convert2(object), convert2(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$2.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]";
var arrayTag = "[object Array]";
var objectTag = "[object Object]";
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty$1.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$1.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
var COMPARE_PARTIAL_FLAG$1 = 1;
var COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length, length = index;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      var result;
      if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
function isStrictComparable(value) {
  return value === value && !isObject(value);
}
function getMatchData(object) {
  var result = keys(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
var COMPARE_PARTIAL_FLAG = 1;
var COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
function baseProperty(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var baseFor = createBaseFor();
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index = -1, iterable = Object(collection);
    while (++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var baseEach = createBaseEach(baseForOwn);
var now = function() {
  return root.Date.now();
};
var FUNC_ERROR_TEXT$2 = "Expected a function";
var nativeMax = Math.max;
var nativeMin = Math.min;
function debounce$1(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function assignMergeValue(object, key, value) {
  if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
function safeGet(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue(object, key, newValue);
}
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack());
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}
var FUNC_ERROR_TEXT$1 = "Expected a function";
function baseDelay(func, wait, args) {
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  return setTimeout(function() {
    func.apply(void 0, args);
  }, wait);
}
var defer = baseRest(function(func, args) {
  return baseDelay(func, 1, args);
});
var delay = baseRest(function(func, wait, args) {
  return baseDelay(func, toNumber(wait) || 0, args);
});
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
function castFunction(value) {
  return typeof value == "function" ? value : identity;
}
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = 0;
  return baseFindIndex(array, baseIteratee(predicate), index);
}
var stringTag = "[object String]";
function isString(value) {
  return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
}
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}
function isElement$1(value) {
  return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
}
var numberTag = "[object Number]";
function isNumber(value) {
  return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
}
function isNil(value) {
  return value == null;
}
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseUnset(object, path) {
  path = castPath(path, object);
  var index = -1, length = path.length;
  if (!length) {
    return true;
  }
  while (++index < length) {
    var key = toKey(path[index]);
    if (key === "__proto__" && !hasOwnProperty.call(object, "__proto__")) {
      return false;
    }
    if ((key === "constructor" || key === "prototype") && index < length - 1) {
      return false;
    }
  }
  var obj = parent(object, path);
  return obj == null || delete obj[toKey(last(path))];
}
function customOmitClone(value) {
  return isPlainObject(value) ? void 0 : value;
}
var CLONE_DEEP_FLAG = 1;
var CLONE_FLAT_FLAG = 2;
var CLONE_SYMBOLS_FLAG = 4;
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);
  var index = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index < length) {
    var key = toKey(path[index]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = void 0;
      if (newValue === void 0) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? false : trailing;
  }
  return debounce$1(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
var n = /* @__PURE__ */ Symbol("i18n");
var r = (e, t, n2) => {
  const o2 = e[0];
  if (~o2.indexOf("[")) {
    const [l, a] = o2.split("["), s = parseInt(a.replace("]", ""));
    if (s > -1) {
      if (!t[l] && t[l].length > 0 && t[l][s] && "" !== t[l][s]) throw new Error("Not Found");
      return 1 === e.length ? "string" == typeof t[l][s] ? t[l][s] : "" : r(e.slice(1), t[l][s], n2);
    }
    throw new Error(`Not Found: ${o2}`);
  }
  if (t[e[0]] || "" === t[e[0]]) {
    if (1 === e.length) {
      let r2 = "string" == typeof t[e[0]] ? t[e[0]] : "";
      return n2 && (r2 = ((e2, t2) => {
        const n3 = /{(\w*)}/g;
        let r3, o3 = e2;
        for (; null !== (r3 = n3.exec(e2)); ) {
          if (!Object.prototype.hasOwnProperty.call(t2, r3[1])) throw new Error(`Not Found Params: ${r3[1]}`);
          o3 = o3.replace(r3[0], t2[r3[1]]);
        }
        return o3;
      })(r2, n2)), r2;
    }
    return r(e.slice(1), t[e[0]], n2);
  }
  throw new Error("Not Found");
};
var o = (t) => {
  const o2 = ref(t.locale || "en"), l = t.messages;
  return { messages: l, t: (e, t2) => {
    const n2 = l[o2.value] || l.en;
    if ("string" != typeof e) return console.warn("Warn(i18n):", "keypath must be a type of string"), "";
    try {
      return r(e.split("."), n2, t2);
    } catch (t3) {
      return console.warn(`Warn(i18n): the keypath '${e}' not found`), "";
    }
  }, setLocale: (e) => {
    l[e] || console.warn(`Warn(i18n): the '${e}' language pack not found, fall back to English language pack`), o2.value = e;
  }, getLocale: () => o2.value, install(e) {
    const t2 = this;
    e.provide(n, t2), e.config.globalProperties.$t = t2.t, e.config.globalProperties.$i18n = t2;
  } };
};
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property2) {
        style2[property2] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent2, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent2.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent2.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys2) {
  return keys2.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    placement: state.placement
  });
}
var popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = popperGenerator({
  defaultModifiers
});

// ../../node_modules/.pnpm/bani-ui@1.0.2_vue@3.5.34_typescript@5.9.3_/node_modules/bani-ui/dist/es/utils-mFOE2DND.js
function makeInstaller(components2) {
  const install = (app) => forEach(components2, (c) => app.use(c));
  return install;
}
var withInstall = (component) => {
  component.install = (app) => {
    const name = component.name;
    app.component(name, component);
  };
  return component;
};
var withInstallFunction = (fn2, name) => {
  fn2.install = (app) => {
    app.config.globalProperties[name] = fn2;
  };
  return fn2;
};
var typeIconMap = /* @__PURE__ */ new Map([
  ["info", faCircleInfo],
  ["success", faCheckCircle],
  ["warning", faCircleExclamation],
  ["danger", faCircleXmark],
  ["error", faCircleXmark]
]);
var RenderVnode = defineComponent({
  props: {
    vNode: {
      type: [String, Object, Function],
      required: true
    }
  },
  setup(props) {
    return () => isFunction(props.vNode) ? props.vNode() : props.vNode;
  }
});
var isStringNumber = (val) => {
  if (!isString(val)) return false;
  return !Number.isNaN(Number(val));
};
var SCOPE = "utils//style";
function addUnit(val, defaultUnit = "px") {
  if (!val) return "";
  if (isNumber(val) || isStringNumber(val)) {
    return `${val}${defaultUnit}`;
  }
  if (isString(val)) {
    return val;
  }
  console.warn(`${SCOPE} binding value must be a string or number`);
}
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

// ../../node_modules/.pnpm/@fortawesome+vue-fontawesom_b85c0ed4b0a431cb59a463de76a3e522/node_modules/@fortawesome/vue-fontawesome/index.es.js
function _arrayLikeToArray(r2, a) {
  (null == a || a > r2.length) && (a = r2.length);
  for (var e = 0, n2 = Array(a); e < a; e++) n2[e] = r2[e];
  return n2;
}
function _arrayWithoutHoles(r2) {
  if (Array.isArray(r2)) return _arrayLikeToArray(r2);
}
function _defineProperty(e, r2, t) {
  return (r2 = _toPropertyKey(r2)) in e ? Object.defineProperty(e, r2, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r2] = t, e;
}
function _iterableToArray(r2) {
  if ("undefined" != typeof Symbol && null != r2[Symbol.iterator] || null != r2["@@iterator"]) return Array.from(r2);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r2) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e, r3).enumerable;
    })), t.push.apply(t, o2);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys(Object(t), true).forEach(function(r3) {
      _defineProperty(e, r3, t[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r3) {
      Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o2, r2, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n2 = Object.getOwnPropertySymbols(e);
    for (r2 = 0; r2 < n2.length; r2++) o2 = n2[r2], -1 === t.indexOf(o2) && {}.propertyIsEnumerable.call(e, o2) && (i[o2] = e[o2]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r2, e) {
  if (null == r2) return {};
  var t = {};
  for (var n2 in r2) if ({}.hasOwnProperty.call(r2, n2)) {
    if (-1 !== e.indexOf(n2)) continue;
    t[n2] = r2[n2];
  }
  return t;
}
function _toConsumableArray(r2) {
  return _arrayWithoutHoles(r2) || _iterableToArray(r2) || _unsupportedIterableToArray(r2) || _nonIterableSpread();
}
function _toPrimitive(t, r2) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r2 || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o2) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof(o2);
}
function _unsupportedIterableToArray(r2, a) {
  if (r2) {
    if ("string" == typeof r2) return _arrayLikeToArray(r2, a);
    var t = {}.toString.call(r2).slice(8, -1);
    return "Object" === t && r2.constructor && (t = r2.constructor.name), "Map" === t || "Set" === t ? Array.from(r2) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r2, a) : void 0;
  }
}
function objectWithKey(key, value) {
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
}
function classList(props) {
  var _classes;
  var classes = (_classes = {
    "fa-spin": props.spin,
    "fa-pulse": props.pulse,
    // the fixedWidth property has been deprecated as of version 7.0.0
    "fa-fw": props.fixedWidth,
    "fa-border": props.border,
    "fa-li": props.listItem,
    "fa-inverse": props.inverse,
    "fa-flip": props.flip === true,
    "fa-flip-horizontal": props.flip === "horizontal" || props.flip === "both",
    "fa-flip-vertical": props.flip === "vertical" || props.flip === "both"
  }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_classes, "fa-".concat(props.size), props.size !== null), "fa-rotate-".concat(props.rotation), props.rotation !== null), "fa-rotate-by", props.rotateBy), "fa-pull-".concat(props.pull), props.pull !== null), "fa-swap-opacity", props.swapOpacity), "fa-bounce", props.bounce), "fa-shake", props.shake), "fa-beat", props.beat), "fa-fade", props.fade), "fa-beat-fade", props.beatFade), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_classes, "fa-flash", props.flash), "fa-spin-pulse", props.spinPulse), "fa-spin-reverse", props.spinReverse), "fa-width-auto", props.widthAuto));
  return Object.keys(classes).map(function(key) {
    return classes[key] ? key : null;
  }).filter(function(key) {
    return key;
  });
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var humps$1 = { exports: {} };
(function(module2) {
  (function(global2) {
    var _processKeys = function(convert2, obj, options) {
      if (!_isObject(obj) || _isDate(obj) || _isRegExp(obj) || _isBoolean(obj) || _isFunction(obj)) {
        return obj;
      }
      var output, i = 0, l = 0;
      if (_isArray(obj)) {
        output = [];
        for (l = obj.length; i < l; i++) {
          output.push(_processKeys(convert2, obj[i], options));
        }
      } else {
        output = {};
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            output[convert2(key, options)] = _processKeys(convert2, obj[key], options);
          }
        }
      }
      return output;
    };
    var separateWords = function(string, options) {
      options = options || {};
      var separator = options.separator || "_";
      var split = options.split || /(?=[A-Z])/;
      return string.split(split).join(separator);
    };
    var camelize = function(string) {
      if (_isNumerical(string)) {
        return string;
      }
      string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
        return chr ? chr.toUpperCase() : "";
      });
      return string.substr(0, 1).toLowerCase() + string.substr(1);
    };
    var pascalize = function(string) {
      var camelized = camelize(string);
      return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
    };
    var decamelize = function(string, options) {
      return separateWords(string, options).toLowerCase();
    };
    var toString2 = Object.prototype.toString;
    var _isFunction = function(obj) {
      return typeof obj === "function";
    };
    var _isObject = function(obj) {
      return obj === Object(obj);
    };
    var _isArray = function(obj) {
      return toString2.call(obj) == "[object Array]";
    };
    var _isDate = function(obj) {
      return toString2.call(obj) == "[object Date]";
    };
    var _isRegExp = function(obj) {
      return toString2.call(obj) == "[object RegExp]";
    };
    var _isBoolean = function(obj) {
      return toString2.call(obj) == "[object Boolean]";
    };
    var _isNumerical = function(obj) {
      obj = obj - 0;
      return obj === obj;
    };
    var _processor = function(convert2, options) {
      var callback = options && "process" in options ? options.process : options;
      if (typeof callback !== "function") {
        return convert2;
      }
      return function(string, options2) {
        return callback(string, convert2, options2);
      };
    };
    var humps2 = {
      camelize,
      decamelize,
      pascalize,
      depascalize: decamelize,
      camelizeKeys: function(object, options) {
        return _processKeys(_processor(camelize, options), object);
      },
      decamelizeKeys: function(object, options) {
        return _processKeys(_processor(decamelize, options), object, options);
      },
      pascalizeKeys: function(object, options) {
        return _processKeys(_processor(pascalize, options), object);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    if (module2.exports) {
      module2.exports = humps2;
    } else {
      global2.humps = humps2;
    }
  })(commonjsGlobal);
})(humps$1);
var humps = humps$1.exports;
var _excluded = ["gradientFill"];
var _excluded2 = ["class", "style"];
var _excluded3 = ["type", "stops", "id"];
function styleToObject(style) {
  return style.split(";").map(function(s) {
    return s.trim();
  }).filter(function(s) {
    return s;
  }).reduce(function(output, pair) {
    var idx = pair.indexOf(":");
    var prop = humps.camelize(pair.slice(0, idx));
    var value = pair.slice(idx + 1).trim();
    output[prop] = value;
    return output;
  }, {});
}
function classToObject(classes) {
  return classes.split(/\s+/).reduce(function(output, className) {
    output[className] = true;
    return output;
  }, {});
}
function createGradientStop(stop, index) {
  return h("stop", _objectSpread2({
    "key": "".concat(index, "-").concat(stop.offset),
    "offset": stop.offset,
    "stop-color": stop.color
  }, stop.opacity !== void 0 && {
    "stop-opacity": stop.opacity
  }));
}
function stripFillsFromPaths(abstractElement) {
  if (typeof abstractElement === "string") return abstractElement;
  var children = (abstractElement.children || []).map(stripFillsFromPaths);
  if (abstractElement.tag === "path" && abstractElement.attributes && "fill" in abstractElement.attributes) {
    return _objectSpread2(_objectSpread2({}, abstractElement), {}, {
      attributes: _objectSpread2(_objectSpread2({}, abstractElement.attributes), {}, {
        fill: void 0
      }),
      children
    });
  }
  return _objectSpread2(_objectSpread2({}, abstractElement), {}, {
    children
  });
}
function convert(abstractElement) {
  var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var attrs = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof abstractElement === "string") {
    return abstractElement;
  }
  var _props$gradientFill = props.gradientFill, gradientFill = _props$gradientFill === void 0 ? null : _props$gradientFill, renderProps = _objectWithoutProperties(props, _excluded);
  var shouldStripFills = !!gradientFill || "fill" in attrs;
  var element = shouldStripFills ? stripFillsFromPaths(abstractElement) : abstractElement;
  var children = (element.children || []).map(function(child) {
    return convert(child, {}, {});
  });
  var mixins = Object.keys(element.attributes || {}).reduce(function(mixins2, key) {
    var value = element.attributes[key];
    switch (key) {
      case "class":
        mixins2.class = classToObject(value);
        break;
      case "style":
        mixins2.style = styleToObject(value);
        break;
      default:
        mixins2.attrs[key] = value;
    }
    return mixins2;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  attrs.class;
  var _attrs$style = attrs.style, aStyle = _attrs$style === void 0 ? {} : _attrs$style, otherAttrs = _objectWithoutProperties(attrs, _excluded2);
  if (gradientFill && gradientFill.id && (gradientFill.type === "linear" || gradientFill.type === "radial")) {
    var gradientType = gradientFill.type, _gradientFill$stops = gradientFill.stops, stops = _gradientFill$stops === void 0 ? [] : _gradientFill$stops, id = gradientFill.id, gradientProps = _objectWithoutProperties(gradientFill, _excluded3);
    var gradientTag = gradientType === "linear" ? "linearGradient" : "radialGradient";
    var gradientVNode = h(gradientTag, _objectSpread2(_objectSpread2({}, gradientProps), {}, {
      id
    }), stops.map(createGradientStop));
    return h(element.tag, _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, renderProps), {}, {
      class: mixins.class,
      style: _objectSpread2(_objectSpread2({}, mixins.style), aStyle)
    }, mixins.attrs), otherAttrs), {}, {
      fill: "url(#".concat(id, ")")
    }), [gradientVNode].concat(_toConsumableArray(children)));
  }
  return h(abstractElement.tag, _objectSpread2(_objectSpread2(_objectSpread2({}, renderProps), {}, {
    class: mixins.class,
    style: _objectSpread2(_objectSpread2({}, mixins.style), aStyle)
  }, mixins.attrs), otherAttrs), children);
}
var PRODUCTION = false;
try {
  PRODUCTION = false;
} catch (e) {
}
function log() {
  if (!PRODUCTION && console && typeof console.error === "function") {
    var _console;
    (_console = console).error.apply(_console, arguments);
  }
}
function normalizeIconArgs(icon2) {
  if (icon2 && _typeof(icon2) === "object" && icon2.prefix && icon2.iconName && icon2.icon) {
    return icon2;
  }
  if (parse$1.icon) {
    return parse$1.icon(icon2);
  }
  if (icon2 === null) {
    return null;
  }
  if (_typeof(icon2) === "object" && icon2.prefix && icon2.iconName) {
    return icon2;
  }
  if (Array.isArray(icon2) && icon2.length === 2) {
    return {
      prefix: icon2[0],
      iconName: icon2[1]
    };
  }
  if (typeof icon2 === "string") {
    return {
      prefix: "fas",
      iconName: icon2
    };
  }
}
var FontAwesomeIcon = defineComponent({
  name: "FontAwesomeIcon",
  props: {
    border: {
      type: Boolean,
      default: false
    },
    // the fixedWidth property has been deprecated as of version 7
    fixedWidth: {
      type: Boolean,
      default: false
    },
    flip: {
      type: [Boolean, String],
      default: false,
      validator: function validator(value) {
        return [true, false, "horizontal", "vertical", "both"].indexOf(value) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: true
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    maskId: {
      type: String,
      default: null
    },
    listItem: {
      type: Boolean,
      default: false
    },
    pull: {
      type: String,
      default: null,
      validator: function validator2(value) {
        return ["right", "left"].indexOf(value) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: false
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function validator3(value) {
        return [90, 180, 270].indexOf(Number.parseInt(value, 10)) > -1;
      }
    },
    // the rotateBy property is only supported in version 7.0.0 and later
    rotateBy: {
      type: Boolean,
      default: false
    },
    swapOpacity: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: null,
      validator: function validator4(value) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(value) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: false
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: false
    },
    title: {
      type: String,
      default: null
    },
    titleId: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: false
    },
    bounce: {
      type: Boolean,
      default: false
    },
    shake: {
      type: Boolean,
      default: false
    },
    beat: {
      type: Boolean,
      default: false
    },
    fade: {
      type: Boolean,
      default: false
    },
    beatFade: {
      type: Boolean,
      default: false
    },
    flash: {
      type: Boolean,
      default: false
    },
    spinPulse: {
      type: Boolean,
      default: false
    },
    spinReverse: {
      type: Boolean,
      default: false
    },
    // the widthAuto property is only supported in version 7.0.0 and later
    widthAuto: {
      type: Boolean,
      default: false
    },
    gradientFill: {
      type: Object,
      default: null,
      validator: function validator5(value) {
        if (typeof value.id !== "string" || !value.id) {
          console.warn("FontAwesomeIcon: gradientFill.id must be a non-empty string");
          return false;
        }
        if (value.type !== "linear" && value.type !== "radial") {
          console.warn('FontAwesomeIcon: gradientFill.type must be "linear" or "radial"');
          return false;
        }
        return true;
      }
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var icon$1 = computed(function() {
      return normalizeIconArgs(props.icon);
    });
    var classes = computed(function() {
      return objectWithKey("classes", classList(props));
    });
    var transform = computed(function() {
      return objectWithKey("transform", typeof props.transform === "string" ? parse$1.transform(props.transform) : props.transform);
    });
    var mask = computed(function() {
      return objectWithKey("mask", normalizeIconArgs(props.mask));
    });
    var renderedIcon = computed(function() {
      var iconProps = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, classes.value), transform.value), mask.value), {}, {
        symbol: props.symbol,
        maskId: props.maskId
      });
      iconProps.title = props.title;
      iconProps.titleId = props.titleId;
      return icon(icon$1.value, iconProps);
    });
    watch(renderedIcon, function(value) {
      if (!value) {
        return log("Could not find one or more icon(s)", icon$1.value, mask.value);
      }
    }, {
      immediate: true
    });
    if (props.gradientFill && props.symbol) {
      log("gradientFill is not supported when symbol is true and will be ignored");
    }
    var vnode = computed(function() {
      return renderedIcon.value ? convert(renderedIcon.value.abstract[0], {
        gradientFill: props.symbol ? null : props.gradientFill
      }, attrs) : null;
    });
    return function() {
      return vnode.value;
    };
  }
});
var FontAwesomeLayers = defineComponent({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup2(props, _ref) {
    var slots = _ref.slots;
    var familyPrefix = config$1.familyPrefix;
    var className = computed(function() {
      return ["".concat(familyPrefix, "-layers")].concat(_toConsumableArray(props.fixedWidth ? ["".concat(familyPrefix, "-fw")] : []));
    });
    return function() {
      return h("div", {
        class: className.value
      }, slots.default ? slots.default() : []);
    };
  }
});
var FontAwesomeLayersText = defineComponent({
  name: "FontAwesomeLayersText",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    transform: {
      type: [String, Object],
      default: null
    },
    counter: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: null,
      validator: function validator6(value) {
        return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(value) > -1;
      }
    }
  },
  setup: function setup3(props, _ref) {
    var attrs = _ref.attrs;
    var familyPrefix = config$1.familyPrefix;
    var classes = computed(function() {
      return objectWithKey("classes", [].concat(_toConsumableArray(props.counter ? ["".concat(familyPrefix, "-layers-counter")] : []), _toConsumableArray(props.position ? ["".concat(familyPrefix, "-layers-").concat(props.position)] : [])));
    });
    var transform = computed(function() {
      return objectWithKey("transform", typeof props.transform === "string" ? parse$1.transform(props.transform) : props.transform);
    });
    var abstractElement = computed(function() {
      var _text = text(props.value.toString(), _objectSpread2(_objectSpread2({}, transform.value), classes.value)), abstract = _text.abstract;
      if (props.counter) {
        abstract[0].attributes.class = abstract[0].attributes.class.replace("fa-layers-text", "");
      }
      return abstract[0];
    });
    var vnode = computed(function() {
      return convert(abstractElement.value, {}, attrs);
    });
    return function() {
      return vnode.value;
    };
  }
});

// ../../node_modules/.pnpm/bani-ui@1.0.2_vue@3.5.34_typescript@5.9.3_/node_modules/bani-ui/dist/es/Icon-iDz_Qer5.js
var _sfc_main = defineComponent({
  ...{
    name: "BnIcon",
    inheritAttrs: false
  },
  __name: "Icon",
  props: {
    border: { type: Boolean },
    fixedWidth: { type: Boolean },
    flip: {},
    icon: {},
    mask: {},
    listItem: { type: Boolean },
    pull: {},
    pulse: { type: Boolean },
    rotation: {},
    swapOpacity: { type: Boolean },
    size: {},
    spin: { type: Boolean },
    transform: {},
    symbol: { type: [Boolean, String] },
    title: {},
    inverse: { type: Boolean },
    bounce: { type: Boolean },
    shake: { type: Boolean },
    beat: { type: Boolean },
    fade: { type: Boolean },
    beatFade: { type: Boolean },
    spinPulse: { type: Boolean },
    spinReverse: { type: Boolean },
    type: {},
    color: {}
  },
  setup(__props) {
    const props = __props;
    const filterProps = computed(() => omit(props, ["type", "color"]));
    const customStyles = computed(() => ({ color: props.color ?? void 0 }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", mergeProps({
        class: ["er-icon", [`er-icon--${__props.type}`]],
        style: customStyles.value
      }, _ctx.$attrs), [
        createVNode(unref(FontAwesomeIcon), normalizeProps(guardReactiveProps(filterProps.value)), null, 16)
      ], 16);
    };
  }
});
var BnIcon = withInstall(_sfc_main);

// ../../node_modules/.pnpm/bani-ui@1.0.2_vue@3.5.34_typescript@5.9.3_/node_modules/bani-ui/dist/es/Button-CXgL_cy-.js
var BUTTON_GROUP_CTX_KEY = /* @__PURE__ */ Symbol(
  "BUTTON_GROUP_CTX_KEY"
);
var _sfc_main2 = defineComponent({
  ...{
    name: "BnButton"
  },
  __name: "Button",
  props: {
    tag: { default: "button" },
    type: {},
    size: {},
    plain: { type: Boolean },
    round: { type: Boolean },
    circle: { type: Boolean },
    disabled: { type: Boolean },
    autofocus: { type: Boolean },
    nativeType: { default: "button" },
    icon: {},
    loading: { type: Boolean },
    loadingIcon: {},
    useThrottle: { type: Boolean, default: true },
    throttleDuration: { default: 500 }
  },
  emits: ["click"],
  setup(__props, { expose: __expose, emit: __emit }) {
    library$1.add(faSpinner);
    const props = __props;
    const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0);
    const size = computed(() => (ctx == null ? void 0 : ctx.size) ?? props.size ?? "");
    const type = computed(() => (ctx == null ? void 0 : ctx.type) ?? props.type ?? "");
    const disabled = computed(() => (ctx == null ? void 0 : ctx.disabled) || props.disabled || false);
    const emits = __emit;
    const slots = useSlots();
    const _ref = ref();
    const iconStyle = computed(() => ({
      marginRight: slots.default ? "6px" : "0px"
    }));
    const handleBthClick = (e) => emits("click", e);
    const handleBthClickThrottle = throttle(
      handleBthClick,
      props.throttleDuration,
      { trailing: false }
    );
    __expose({
      get ref() {
        return _ref.value ?? void 0;
      },
      disabled,
      size,
      type
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(props.tag), {
        ref_key: "_ref",
        ref: _ref,
        class: normalizeClass(["er-button", {
          [`er-button--${type.value}`]: type.value,
          [`er-button--${size.value}`]: size.value,
          "is-plain": __props.plain,
          "is-round": __props.round,
          "is-circle": __props.circle,
          "is-disabled": disabled.value,
          "is-loading": __props.loading
        }]),
        autofocus: __props.autofocus,
        type: __props.tag === "button" ? __props.nativeType : void 0,
        disabled: disabled.value || __props.loading,
        onClick: _cache[0] || (_cache[0] = (e) => __props.useThrottle ? unref(handleBthClickThrottle)(e) : handleBthClick(e))
      }, {
        default: withCtx(() => [
          __props.loading ? renderSlot(_ctx.$slots, "loading", { key: 0 }, () => [
            createVNode(_sfc_main, {
              class: "loading-icon",
              icon: __props.loadingIcon ?? unref(faSpinner),
              style: normalizeStyle(iconStyle.value),
              size: "1x",
              spin: ""
            }, null, 8, ["icon", "style"])
          ]) : createCommentVNode("", true),
          __props.icon && !__props.loading ? (openBlock(), createBlock(_sfc_main, {
            key: 1,
            icon: __props.icon,
            size: "1x",
            style: normalizeStyle(iconStyle.value)
          }, null, 8, ["icon", "style"])) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["autofocus", "type", "disabled", "class"]);
    };
  }
});
var BnButton = withInstall(_sfc_main2);

// ../../node_modules/.pnpm/bani-ui@1.0.2_vue@3.5.34_typescript@5.9.3_/node_modules/bani-ui/dist/es/ButtonGroup-CaS3gDGZ.js
var _hoisted_1 = { class: "er-button-group" };
var _sfc_main3 = defineComponent({
  ...{
    name: "BnButtonGroup"
  },
  __name: "ButtonGroup",
  props: {
    size: {},
    type: {},
    disabled: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    provide(
      BUTTON_GROUP_CTX_KEY,
      reactive({
        size: toRef(props, "size"),
        type: toRef(props, "type"),
        disabled: toRef(props, "disabled")
      })
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
var BnButtonGroup = withInstall(_sfc_main3);

// ../../node_modules/.pnpm/bani-ui@1.0.2_vue@3.5.34_typescript@5.9.3_/node_modules/bani-ui/dist/es/hooks-Bze4eaZa.js
function useEventListener(target, event, handler) {
  if (isRef(target)) {
    watch(target, (val, oldVal) => {
      oldVal == null ? void 0 : oldVal.removeEventListener(event, handler);
      val == null ? void 0 : val.addEventListener(event, handler);
    });
  } else {
    onMounted(() => target == null ? void 0 : target.addEventListener(event, handler));
  }
  onBeforeUnmount(() => {
    var _a;
    return (_a = unref(target)) == null ? void 0 : _a.removeEventListener(event, handler);
  });
}
function useOffset(opts) {
  const lastBottomOffset = computed(() => opts.getLastBottomOffset());
  const topOffset = computed(() => opts.offset + lastBottomOffset.value);
  const bottomOffset = computed(() => topOffset.value + opts.boxHeight.value);
  return {
    topOffset,
    bottomOffset
  };
}
var zIndex = ref(0);
function useZIndex(initialValue = 2e3) {
  const _initialValue = ref(initialValue);
  const currentZindex = computed(() => zIndex.value + _initialValue.value);
  const nextZIndex3 = () => {
    zIndex.value++;
    return currentZindex.value;
  };
  return {
    initialValue: _initialValue,
    currentZindex,
    nextZIndex: nextZIndex3
  };
}
var defaultIdInjection = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
};
function useId(namespace = "er") {
  const idRef = computed(
    () => `${namespace}-id-${defaultIdInjection.prefix}-${defaultIdInjection.current++}`
  );
  return idRef;
}
function useLocale(localeOverrides) {
  {
    const injected = inject(n);
    return computed(() => {
      const instance = unref(injected) ?? o({ locale: English.name, messages: { en: English.el } });
      return omit(instance, "install");
    });
  }
}
function useClickOutside(elementRef, callback) {
  useEventListener(document, "click", (e) => {
    if (elementRef.value && e.target) {
      if (!elementRef.value.contains(e.target)) {
        callback(e);
      }
    }
  });
}

// ../../node_modules/.pnpm/bani-ui@1.0.2_vue@3.5.34_typescript@5.9.3_/node_modules/bani-ui/dist/es/Message-xfxk4ZMC.js
var messageTypes = [
  "info",
  "success",
  "warning",
  "danger",
  "error"
];
var _hoisted_12 = { class: "er-message__content" };
var _hoisted_2 = {
  key: 0,
  class: "er-message__close"
};
var _sfc_main4 = defineComponent({
  ...{
    name: "BnMessage"
  },
  __name: "Message",
  props: {
    id: {},
    message: {},
    duration: { default: 3e3 },
    showClose: { type: Boolean },
    center: { type: Boolean },
    type: { default: "info" },
    offset: { default: 10 },
    zIndex: {},
    transitionName: { default: "fade-up" },
    onDestory: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const visible = ref(false);
    const messageRef = ref();
    const iconName = computed(() => typeIconMap.get(props.type) ?? faCircleInfo);
    const boxHeight = ref(0);
    const { topOffset, bottomOffset } = useOffset({
      getLastBottomOffset: bind(getLastBottomOffset, props),
      offset: props.offset,
      boxHeight
    });
    const cssStyle = computed(() => ({
      top: topOffset.value + "px",
      zIndex: props.zIndex
    }));
    let timer;
    function startTimmer() {
      if (props.duration === 0) return;
      timer = delay(close, props.duration);
    }
    function clearTimer() {
      clearTimeout(timer);
    }
    function close() {
      visible.value = false;
    }
    onMounted(() => {
      visible.value = true;
      startTimmer();
    });
    watch(visible, (val) => {
      if (!val) boxHeight.value = -props.offset;
    });
    useEventListener(document, "keydown", (e) => {
      const { code } = e;
      if (code === "Escape") {
        close();
      }
    });
    __expose({
      bottomOffset,
      close
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: __props.transitionName,
        onEnter: _cache[0] || (_cache[0] = ($event) => boxHeight.value = messageRef.value.getBoundingClientRect().height),
        onAfterLeave: _cache[1] || (_cache[1] = ($event) => !visible.value && __props.onDestory())
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            ref_key: "messageRef",
            ref: messageRef,
            class: normalizeClass(["er-message", {
              [`er-message--${__props.type}`]: __props.type,
              "is-close": __props.showClose,
              "text-center": __props.center
            }]),
            style: normalizeStyle(cssStyle.value),
            role: "alert",
            onMouseenter: clearTimer,
            onMouseleave: startTimmer
          }, [
            createVNode(_sfc_main, {
              class: "er-message__icon",
              icon: iconName.value
            }, null, 8, ["icon"]),
            createBaseVNode("div", _hoisted_12, [
              renderSlot(_ctx.$slots, "default", {}, () => [
                __props.message ? (openBlock(), createBlock(unref(RenderVnode), {
                  key: 0,
                  vNode: __props.message
                }, null, 8, ["vNode"])) : createCommentVNode("", true)
              ])
            ]),
            __props.showClose ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createVNode(_sfc_main, {
                icon: unref(faXmark),
                onClick: withModifiers(close, ["stop"])
              }, null, 8, ["icon"])
            ])) : createCommentVNode("", true)
          ], 38), [
            [vShow, visible.value]
          ])
        ]),
        _: 3
      }, 8, ["name"]);
    };
  }
});
var instances = shallowReactive([]);
var { nextZIndex } = useZIndex();
var messageDefaults = {
  type: "info",
  duration: 3e3,
  offset: 10,
  transitionName: "fade-up"
};
function normalizeOptions(options) {
  const result = !options || isVNode(options) || isString(options) ? {
    message: options
  } : options;
  return { ...messageDefaults, ...result };
}
function createMessage(props) {
  const id = useId().value;
  const container = document.createElement("div");
  const destory = () => {
    const idx = findIndex(instances, { id });
    if (idx === -1) return;
    instances.splice(idx, 1);
    render(null, container);
  };
  const _props = {
    ...props,
    id,
    zIndex: nextZIndex(),
    onDestory: destory
  };
  const vnode = h(_sfc_main4, _props);
  render(vnode, container);
  document.body.appendChild(container.firstElementChild);
  const vm = vnode.component;
  const handler = {
    close: () => vm.exposed.close()
  };
  const instance = {
    props: _props,
    id,
    vm,
    vnode,
    handler
  };
  instances.push(instance);
  return instance;
}
var message = function(options = {}) {
  const normalized = normalizeOptions(options);
  const instance = createMessage(normalized);
  return instance.handler;
};
function getLastBottomOffset() {
  const idx = findIndex(instances, { id: this.id });
  if (idx <= 0) return 0;
  return get(instances, [idx - 1, "vm", "exposed", "bottomOffset", "value"]);
}
function closeAll(type) {
  forEach(instances, (instance) => {
    if (type) {
      instance.props.type === type && instance.handler.close();
      return;
    }
    instance.handler.close();
  });
}
forEach(
  messageTypes,
  (type) => set(message, type, (options) => {
    const normalized = normalizeOptions(options);
    return message({ ...normalized, type });
  })
);
message.closeAll = closeAll;
var BnMessage = withInstallFunction(message, "$message");

// ../../node_modules/.pnpm/bani-ui@1.0.2_vue@3.5.34_typescript@5.9.3_/node_modules/bani-ui/dist/es/Loading-BuMMkzGV.js
var _hoisted_13 = { class: "er-loading__spinner" };
var _hoisted_22 = {
  key: 1,
  class: "er-loading-text"
};
var _sfc_main5 = defineComponent({
  ...{
    name: "BnLoading",
    inheritAttrs: false
  },
  __name: "Loading",
  props: {
    visible: {},
    background: {},
    spinner: {},
    text: {},
    fullscreen: {},
    lock: {},
    beforeClose: { type: Function },
    closed: { type: Function },
    target: {},
    body: { type: Boolean },
    zIndex: {},
    onAfterLeave: { type: Function }
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "v098d7d6e": _ctx.background,
      "v1880a613": _ctx.zIndex
    }));
    const props = __props;
    const iconName = computed(() => {
      if (isString(props.spinner)) {
        return props.spinner;
      }
      return "spinner";
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "fade-in-linear",
        onAfterLeave: __props.onAfterLeave
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            class: normalizeClass(["er-loading er-loading__mask", { "is-fullscreen": __props.fullscreen }])
          }, [
            createBaseVNode("div", _hoisted_13, [
              props.spinner !== false ? (openBlock(), createBlock(_sfc_main, {
                key: 0,
                icon: iconName.value,
                spin: ""
              }, null, 8, ["icon"])) : createCommentVNode("", true),
              __props.text ? (openBlock(), createElementBlock("p", _hoisted_22, toDisplayString(__props.text), 1)) : createCommentVNode("", true)
            ])
          ], 2), [
            [vShow, props.visible.value]
          ])
        ]),
        _: 1
      }, 8, ["onAfterLeave"]);
    };
  }
});
var RELATIVE_CLASS = "er-loading-parent--relative";
var HIDDEN_CLASS = "er-loading-parent--hiden";
var LOADING_NUMB_KEY = "er-loading-numb";
var instanceMap = /* @__PURE__ */ new Map();
var { nextZIndex: nextZIndex2 } = useZIndex(3e4);
function createLoadingComponent(options) {
  const visible = ref(options.visible);
  const afterLeaveFlag = ref(false);
  const handleAfterLeave = () => {
    if (!afterLeaveFlag.value) return;
    destory();
  };
  const data = reactive({
    ...options,
    onAfterLeave: handleAfterLeave
  });
  const setText = (text2) => data.text = text2;
  const destory = () => {
    var _a, _b;
    const target = data.parent;
    subtLoadingNumb(target);
    if (getLoadingNumb(target)) return;
    delay(() => {
      removeRelativeClass(target);
      removeHiddenClass(target);
    }, 1);
    instanceMap.delete(target ?? document.body);
    (_b = (_a = vm.$el) == null ? void 0 : _a.parentNode) == null ? void 0 : _b.removeChild(vm.$el);
    app.unmount();
  };
  let afterLeaveTimer;
  const close = () => {
    var _a;
    if (options.beforeClose && !options.beforeClose()) return;
    afterLeaveFlag.value = true;
    clearTimeout(afterLeaveTimer);
    afterLeaveTimer = defer(handleAfterLeave);
    visible.value = false;
    (_a = options.closed) == null ? void 0 : _a.call(options);
  };
  const app = createApp(_sfc_main5, {
    ...data,
    zIndex: data.fullscreen ? nextZIndex2() : void 0,
    visible
  });
  const vm = app.mount(document.createElement("div"));
  return {
    get $el() {
      return vm.$el;
    },
    vm,
    close,
    visible,
    setText
  };
}
function resolveOptions(options) {
  let target;
  if (isString(options.target)) {
    target = document.querySelector(options.target) ?? document.body;
  } else {
    target = options.target || document.body;
  }
  return {
    parent: target === document.body || options.body ? document.body : target,
    background: options.background ?? "rgba(0, 0, 0, 0.5)",
    spinner: options.spinner,
    text: options.text,
    fullscreen: target === document.body && (options.fullscreen ?? true),
    lock: options.lock ?? false,
    visible: options.visible ?? true,
    target
  };
}
function addRelativeClass(target = document.body) {
  target.classList.add(RELATIVE_CLASS);
}
function removeRelativeClass(target = document.body) {
  target.classList.remove(RELATIVE_CLASS);
}
function addHiddenClass(target = document.body) {
  target.classList.add(HIDDEN_CLASS);
}
function removeHiddenClass(target = document.body) {
  target.classList.remove(HIDDEN_CLASS);
}
function getLoadingNumb(target = document.body) {
  return target.getAttribute(LOADING_NUMB_KEY);
}
function removeLoadingNumb(target = document.body) {
  target.removeAttribute(LOADING_NUMB_KEY);
}
function addLoadingNumb(target = document.body) {
  const numb = getLoadingNumb(target) ?? "0";
  target.setAttribute(LOADING_NUMB_KEY, `${Number.parseInt(numb) + 1}`);
}
function subtLoadingNumb(target = document.body) {
  const numb = getLoadingNumb(target);
  if (numb) {
    const newNumb = Number.parseInt(numb) - 1;
    if (newNumb === 0) {
      removeLoadingNumb(target);
    } else {
      target.setAttribute(LOADING_NUMB_KEY, `${newNumb}`);
    }
  }
}
function addClass(options, parent2 = document.body) {
  if (options.lock) {
    addHiddenClass(parent2);
  } else {
    removeHiddenClass(parent2);
  }
  addRelativeClass(parent2);
}
var fullscreenInstance = null;
function Loading(options = {}) {
  var _a;
  const resolved = resolveOptions(options);
  const target = resolved.parent ?? document.body;
  if (resolved.fullscreen && !isNil(fullscreenInstance)) {
    return fullscreenInstance;
  }
  addLoadingNumb(resolved == null ? void 0 : resolved.parent);
  if (instanceMap.has(target)) {
    return instanceMap.get(target);
  }
  const instance = createLoadingComponent({
    ...resolved,
    closed: () => {
      var _a2;
      (_a2 = resolved.closed) == null ? void 0 : _a2.call(resolved);
      if (resolved.fullscreen) {
        fullscreenInstance = null;
      }
    }
  });
  addClass(options, resolved == null ? void 0 : resolved.parent);
  (_a = resolved.parent) == null ? void 0 : _a.appendChild(instance.$el);
  nextTick(() => instance.visible.value = !!resolved.visible);
  if (resolved.fullscreen) {
    fullscreenInstance = instance;
  }
  instanceMap.set(target, instance);
  return instance;
}
var INSTANCE_KEY = /* @__PURE__ */ Symbol("loading");
function createInstance(el, binding) {
  const getProp = (name) => {
    return el.getAttribute(`er-loading-${name}`);
  };
  const getModifier = (name) => {
    return binding.modifiers[name];
  };
  const fullscreen = getModifier("fullscreen");
  const options = {
    text: getProp("text"),
    spinner: getProp("spinner"),
    background: getProp("background"),
    target: fullscreen ? void 0 : el,
    body: getModifier("body"),
    lock: getModifier("lock"),
    fullscreen
  };
  el[INSTANCE_KEY] = {
    options,
    instance: Loading(options)
  };
}
var vLoading = {
  mounted(el, binding) {
    if (binding.value) createInstance(el, binding);
  },
  updated(el, binding) {
    var _a, _b;
    if (binding.oldValue === binding.value) return;
    if (binding.value && !binding.oldValue) {
      createInstance(el, binding);
      return;
    }
    (_b = (_a = el[INSTANCE_KEY]) == null ? void 0 : _a.instance) == null ? void 0 : _b.close();
  },
  unmounted(el) {
    var _a;
    (_a = el[INSTANCE_KEY]) == null ? void 0 : _a.instance.close();
    el[INSTANCE_KEY] = void 0;
  }
};
var BnLoading = {
  name: "BnLoading",
  install(app) {
    app.directive("loading", vLoading);
    app.config.globalProperties.$loading = Loading;
  },
  directive: vLoading,
  service: Loading
};

// ../../node_modules/.pnpm/bani-ui@1.0.2_vue@3.5.34_typescript@5.9.3_/node_modules/bani-ui/dist/es/Tooltip-CR8OQQL4.js
function useEvenstToTiggerNode(props, triggerNode, events, closeMethod) {
  let watchEventsStopHandle;
  let watchTriggerNodeStopHandle;
  const _eventHandleMap = /* @__PURE__ */ new Map();
  const _bindEventToVirtualTiggerNode = () => {
    const el = triggerNode.value;
    isElement$1(el) && forEach(events.value, (fn2, event) => {
      _eventHandleMap.set(event, fn2);
      el == null ? void 0 : el.addEventListener(event, fn2);
    });
  };
  const _unbindEventToVirtualTiggerNode = () => {
    const el = triggerNode.value;
    isElement$1(el) && forEach(
      ["mouseenter", "click", "contextmenu"],
      // 需要解除绑定的事件列表
      (key) => _eventHandleMap.has(key) && // 如果事件在映射中存在
      (el == null ? void 0 : el.removeEventListener(key, _eventHandleMap.get(key)))
      // 解除绑定
    );
  };
  onMounted(() => {
    watchTriggerNodeStopHandle = watch(
      triggerNode,
      () => props.virtualTriggering && _bindEventToVirtualTiggerNode(),
      // 如启用虚拟触发，绑定事件
      { immediate: true }
      // 立即执行
    );
    watchEventsStopHandle = watch(
      events,
      () => {
        if (!props.virtualTriggering) return;
        _unbindEventToVirtualTiggerNode();
        _bindEventToVirtualTiggerNode();
        closeMethod();
      },
      { deep: true }
      // 深度监听
    );
  });
  onUnmounted(() => {
    watchTriggerNodeStopHandle == null ? void 0 : watchTriggerNodeStopHandle();
    watchEventsStopHandle == null ? void 0 : watchEventsStopHandle();
  });
}
var _sfc_main6 = defineComponent({
  ...{
    name: "BnTooltip"
  },
  __name: "Tooltip",
  props: {
    virtualRef: {},
    virtualTriggering: { type: Boolean },
    content: {},
    trigger: { default: "hover" },
    placement: { default: "bottom" },
    manual: { type: Boolean },
    disabled: { type: Boolean },
    popperOptions: {},
    transition: { default: "fade" },
    showTimeout: { default: 0 },
    hideTimeout: { default: 200 }
  },
  emits: ["visible-change", "click-outside"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const visible = ref(false);
    const events = ref({});
    const outerEvents = ref({});
    const dropdownEvents = ref({});
    const containerNode = ref();
    const popperNode = ref();
    const _triggerNode = ref();
    const triggerNode = computed(() => {
      if (props.virtualTriggering) {
        return props.virtualRef ?? _triggerNode.value;
      }
      return _triggerNode.value;
    });
    const popperOptions = computed(() => ({
      placement: props.placement,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 9]
          }
        }
      ],
      ...props.popperOptions
    }));
    const openDelay = computed(
      () => props.trigger === "hover" ? props.showTimeout : 0
    );
    const closeDelay = computed(
      () => props.trigger === "hover" ? props.hideTimeout : 0
    );
    let openDebounce;
    let closeDebounce;
    function openFinal() {
      closeDebounce == null ? void 0 : closeDebounce.cancel();
      openDebounce == null ? void 0 : openDebounce();
    }
    function closeFinal() {
      openDebounce == null ? void 0 : openDebounce.cancel();
      closeDebounce == null ? void 0 : closeDebounce();
    }
    function togglePopper() {
      visible.value ? closeFinal() : openFinal();
    }
    function setVisible(val) {
      if (props.disabled) return;
      visible.value = val;
      emits("visible-change", val);
    }
    function attachEvents() {
      if (props.disabled || props.manual) return;
      if (props.trigger === "hover") {
        events.value["mouseenter"] = openFinal;
        events.value["mouseleave"] = closeFinal;
        outerEvents.value["mouseleave"] = closeFinal;
        dropdownEvents.value["mouseenter"] = openFinal;
        return;
      }
      if (props.trigger === "click") {
        events.value["click"] = togglePopper;
        return;
      }
      if (props.trigger === "contextmenu") {
        events.value["contextmenu"] = (e) => {
          e.preventDefault();
          openFinal();
        };
        return;
      }
    }
    let popperInstance;
    function destroyPopperInstance() {
      if (isNil(popperInstance)) return;
      popperInstance.destroy();
      popperInstance = null;
    }
    function resetEvents() {
      events.value = {};
      outerEvents.value = {};
      dropdownEvents.value = {};
      attachEvents();
    }
    const show = openFinal;
    const hide2 = function() {
      openDebounce == null ? void 0 : openDebounce.cancel();
      setVisible(false);
    };
    watch(
      visible,
      (val) => {
        if (!val) return;
        if (triggerNode.value && popperNode.value) {
          popperInstance = createPopper(
            triggerNode.value,
            popperNode.value,
            popperOptions.value
          );
        }
      },
      { flush: "post" }
    );
    watch(
      () => props.manual,
      (isManual) => {
        if (isManual) {
          resetEvents();
          return;
        }
        attachEvents();
      }
    );
    watch(
      () => props.trigger,
      (val, oldVal) => {
        if (val === oldVal) return;
        openDebounce == null ? void 0 : openDebounce.cancel();
        visible.value = false;
        emits("visible-change", false);
        resetEvents();
      }
    );
    onMounted(() => {
      destroyPopperInstance();
    });
    useClickOutside(containerNode, () => {
      emits("click-outside");
      if (props.trigger === "hover" || props.manual) return;
      visible.value && closeFinal();
    });
    useEvenstToTiggerNode(props, triggerNode, events, () => {
      openDebounce == null ? void 0 : openDebounce.cancel();
      setVisible(false);
    });
    watchEffect(() => {
      if (!props.manual) {
        attachEvents();
      }
      openDebounce = debounce$1(bind(setVisible, null, true), openDelay.value);
      closeDebounce = debounce$1(bind(setVisible, null, false), closeDelay.value);
    });
    __expose({
      show,
      hide: hide2
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps({
        class: "er-tooltip",
        ref_key: "containerNode",
        ref: containerNode
      }, toHandlers(outerEvents.value, true)), [
        !__props.virtualTriggering ? (openBlock(), createElementBlock("div", mergeProps({
          key: 0,
          class: "er-tooltip__trigger",
          ref_key: "_triggerNode",
          ref: _triggerNode
        }, toHandlers(events.value, true)), [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 16)) : renderSlot(_ctx.$slots, "default", { key: 1 }, void 0, true),
        createVNode(Transition, {
          name: __props.transition,
          onAfterLeave: destroyPopperInstance
        }, {
          default: withCtx(() => [
            visible.value ? (openBlock(), createElementBlock("div", mergeProps({
              key: 0,
              class: "er-tooltip__popper",
              ref_key: "popperNode",
              ref: popperNode
            }, toHandlers(dropdownEvents.value, true)), [
              renderSlot(_ctx.$slots, "content", {}, () => [
                createTextVNode(toDisplayString(__props.content), 1)
              ], true),
              _cache[0] || (_cache[0] = createBaseVNode("div", {
                id: "arrow",
                "data-popper-arrow": ""
              }, null, -1))
            ], 16)) : createCommentVNode("", true)
          ]),
          _: 3
        }, 8, ["name"])
      ], 16);
    };
  }
});
var BnTooltip$1 = _export_sfc(_sfc_main6, [["__scopeId", "data-v-e70a4790"]]);
var BnTooltip = withInstall(BnTooltip$1);

// ../../node_modules/.pnpm/bani-ui@1.0.2_vue@3.5.34_typescript@5.9.3_/node_modules/bani-ui/dist/es/Popconfirm-DiHdBNmK.js
var _hoisted_14 = { class: "er-popconfirm__main" };
var _hoisted_23 = { class: "er-popconfirm__action" };
var _sfc_main7 = defineComponent({
  ...{
    name: "BnPopconfirm"
  },
  __name: "Popconfirm",
  props: {
    title: { default: "" },
    confirmButtonText: {},
    cancelButtonText: {},
    confirmButtonType: { default: "primary" },
    cancelButtonType: {},
    icon: {},
    iconColor: { default: "#f90" },
    hideIcon: { type: Boolean },
    hideAfter: { default: 200 },
    width: { default: 150 }
  },
  emits: ["confirm", "cancel"],
  setup(__props, { emit: __emit }) {
    const locale = useLocale();
    const t = computed(() => locale.value.t);
    const props = __props;
    const icon2 = computed(() => props.icon ?? faQuestionCircle);
    const emits = __emit;
    const tooltipRef = ref();
    const style = computed(() => ({ width: addUnit(props.width) }));
    const hidePopper = () => {
      var _a;
      (_a = tooltipRef.value) == null ? void 0 : _a.hide();
    };
    const cancel = (e) => {
      emits("cancel", e);
      hidePopper();
    };
    const confirm = (e) => {
      emits("confirm", e);
      hidePopper();
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(BnTooltip$1, {
        ref_key: "tooltipRef",
        ref: tooltipRef,
        trigger: "click",
        "hide-timeout": __props.hideAfter
      }, createSlots({
        content: withCtx(() => [
          createBaseVNode("div", {
            class: "er-popconfirm",
            style: normalizeStyle(style.value)
          }, [
            createBaseVNode("div", _hoisted_14, [
              !__props.hideIcon && icon2.value ? (openBlock(), createBlock(_sfc_main, {
                key: 0,
                icon: icon2.value,
                color: __props.iconColor
              }, null, 8, ["icon", "color"])) : createCommentVNode("", true),
              createTextVNode(" " + toDisplayString(__props.title), 1)
            ]),
            createBaseVNode("div", _hoisted_23, [
              createVNode(_sfc_main2, {
                size: "small",
                class: "er-popconfirm__cancel",
                type: __props.cancelButtonType,
                onClick: cancel
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.cancelButtonText || t.value("popconfirm.cancelButtonText")), 1)
                ]),
                _: 1
              }, 8, ["type"]),
              createVNode(_sfc_main2, {
                size: "small",
                class: "er-popconfirm__confirm",
                type: __props.confirmButtonType,
                onClick: confirm
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.confirmButtonText || t.value("popconfirm.confirmButtonText")), 1)
                ]),
                _: 1
              }, 8, ["type"])
            ])
          ], 4)
        ]),
        _: 2
      }, [
        _ctx.$slots.default ? {
          name: "default",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          key: "0"
        } : void 0,
        _ctx.$slots.reference ? {
          name: "reference",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "reference")
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["hide-timeout"]);
    };
  }
});
var BnPopconfirm = withInstall(_sfc_main7);

// ../../node_modules/.pnpm/bani-ui@1.0.2_vue@3.5.34_typescript@5.9.3_/node_modules/bani-ui/dist/es/Dropdown-Dgqe_mDE.js
var DROPDOWN_CTX_KEY = /* @__PURE__ */ Symbol("dropdownContext");
var _hoisted_1$1 = {
  key: 0,
  role: "separator",
  class: "divided-placeholder"
};
var _hoisted_24 = ["id"];
var _sfc_main$1 = defineComponent({
  ...{
    name: "BnDropdownItem",
    inheritAttrs: false
  },
  __name: "DropdownItem",
  props: {
    command: { default: useId().value },
    label: {},
    disabled: { type: Boolean, default: false },
    divided: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const ctx = inject(DROPDOWN_CTX_KEY);
    const size = computed(() => ctx == null ? void 0 : ctx.size.value);
    function handleClick() {
      if (props.disabled) return;
      ctx == null ? void 0 : ctx.handleItemClick(props);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        __props.divided ? (openBlock(), createElementBlock("li", _hoisted_1$1)) : createCommentVNode("", true),
        createBaseVNode("li", {
          id: `dropdown-item-${__props.command ?? unref(useId)().value}`,
          class: normalizeClass({
            "er-dropdown__item": true,
            ["er-dropdown__item--" + size.value]: size.value,
            "is-disabled": __props.disabled,
            "is-divided": __props.divided
          }),
          onClick: handleClick
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(__props.label), 1)
          ])
        ], 10, _hoisted_24)
      ], 64);
    };
  }
});
var _hoisted_15 = { class: "er-dropdown__menu" };
var _sfc_main8 = defineComponent({
  ...{
    name: "BnDropdown",
    inheritAttrs: false
  },
  __name: "Dropdown",
  props: {
    type: {},
    size: {},
    items: { default: () => [] },
    hideOnClick: { type: Boolean, default: true },
    splitButton: { type: Boolean },
    content: {},
    trigger: {},
    placement: {},
    manual: { type: Boolean },
    disabled: { type: Boolean },
    popperOptions: {},
    transition: {},
    showTimeout: {},
    hideTimeout: {}
  },
  emits: ["visible-change", "command", "click"],
  setup(__props, { expose: __expose, emit: __emit }) {
    library$1.add(faAngleDown);
    const props = __props;
    const emits = __emit;
    useSlots();
    const tooltipRef = ref();
    const triggerRef = ref();
    const virtualRef = computed(() => {
      var _a;
      return ((_a = triggerRef.value) == null ? void 0 : _a.ref) ?? void 0;
    });
    const tooltipProps = computed(
      () => omit(props, ["items", "hideAfterClick", "size", "type", "splitButton"])
    );
    function handleItemClick(e) {
      var _a;
      props.hideOnClick && ((_a = tooltipRef.value) == null ? void 0 : _a.hide());
      !isNil(e.command) && emits("command", e.command);
    }
    provide(DROPDOWN_CTX_KEY, {
      handleItemClick,
      size: computed(() => props.size)
    });
    __expose({
      open: () => {
        var _a;
        return (_a = tooltipRef.value) == null ? void 0 : _a.show();
      },
      close: () => {
        var _a;
        return (_a = tooltipRef.value) == null ? void 0 : _a.hide();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["er-dropdown", { "is-disabled": props.disabled }])
      }, [
        createVNode(BnTooltip$1, mergeProps({
          ref_key: "tooltipRef",
          ref: tooltipRef
        }, tooltipProps.value, {
          "virtual-triggering": __props.splitButton,
          "virtual-ref": virtualRef.value,
          onVisibleChange: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("visible-change", $event))
        }), {
          content: withCtx(() => [
            createBaseVNode("div", _hoisted_15, [
              renderSlot(_ctx.$slots, "dropdown", {}, () => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
                  return openBlock(), createBlock(_sfc_main$1, mergeProps({
                    key: item.command,
                    ref_for: true
                  }, item), null, 16);
                }), 128))
              ])
            ])
          ]),
          default: withCtx(() => [
            __props.splitButton ? (openBlock(), createBlock(_sfc_main3, {
              key: 0,
              type: __props.type,
              size: __props.size,
              disabled: __props.disabled
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main2, {
                  onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default")
                  ]),
                  _: 3
                }),
                createVNode(_sfc_main2, {
                  ref_key: "triggerRef",
                  ref: triggerRef,
                  icon: "angle-down"
                }, null, 512)
              ]),
              _: 3
            }, 8, ["type", "size", "disabled"])) : renderSlot(_ctx.$slots, "default", { key: 1 })
          ]),
          _: 3
        }, 16, ["virtual-triggering", "virtual-ref"])
      ], 2);
    };
  }
});
var BnDropdown = withInstall(_sfc_main8);
var BnDropdownItem = withInstall(_sfc_main$1);

// ../../node_modules/.pnpm/bani-ui@1.0.2_vue@3.5.34_typescript@5.9.3_/node_modules/bani-ui/dist/es/ConfigProvider-BPs20cEq.js
var configProviderContextKey = /* @__PURE__ */ Symbol();
var globalConfig = ref();
function useGlobalConfig(key, defaultVal = void 0) {
  const config = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig;
  return config;
}
var _createI18n = (opts) => {
  var _a, _b, _c;
  const mergeMsg = (msg) => merge(msg, (opts == null ? void 0 : opts.extendsI18nMsg) ?? {});
  if (!(opts == null ? void 0 : opts.locale))
    return o({
      locale: "en",
      messages: mergeMsg({
        en: English.el
      })
    });
  return o({
    locale: ((_a = opts.locale) == null ? void 0 : _a.name) || "en",
    messages: mergeMsg({
      [((_b = opts.locale) == null ? void 0 : _b.name) || "en"]: ((_c = opts.locale) == null ? void 0 : _c.el) || {}
    })
  });
};
function provideGlobalConfig(config = { locale: English }, app, global2 = false) {
  const instance = getCurrentInstance();
  const oldConfig = instance ? useGlobalConfig() : void 0;
  const provideFn = instance ? provide : void 0;
  if (!provideFn) {
    console.warn(
      "provideGlobalConfig",
      "provideGlobalConfig() can only be used inside setup()"
    );
    return;
  }
  const context = computed(() => {
    const cfg = unref(config);
    if (!(oldConfig == null ? void 0 : oldConfig.value)) return cfg;
    return merge({}, oldConfig.value, cfg);
  });
  const i18n = computed(() => {
    return _createI18n(context.value);
  });
  provideFn(configProviderContextKey, context);
  provideFn(n, i18n);
  if (global2 || !globalConfig.value) globalConfig.value = context.value;
  return context;
}
var _sfc_main9 = defineComponent({
  ...{
    name: "BnConfigProvider",
    inheritAttrs: false
  },
  __name: "ConfigProvider",
  props: {
    locale: {},
    extendsI18nMsg: {}
  },
  setup(__props) {
    const props = __props;
    const config = provideGlobalConfig(props);
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default", { config: unref(config) });
    };
  }
});
var BnConfigProvider = withInstall(_sfc_main9);

// ../../node_modules/.pnpm/bani-ui@1.0.2_vue@3.5.34_typescript@5.9.3_/node_modules/bani-ui/dist/es/index.js
var components = [
  BnButton,
  BnButtonGroup,
  BnIcon,
  BnMessage,
  BnLoading,
  BnTooltip,
  BnPopconfirm,
  BnDropdown,
  BnDropdownItem,
  BnConfigProvider
];
var installer = makeInstaller(components);
export {
  BnButton,
  BnButtonGroup,
  BnConfigProvider,
  BnDropdown,
  BnDropdownItem,
  BnIcon,
  BnLoading,
  vLoading as BnLoadingDirective,
  Loading as BnLoadingService,
  BnMessage,
  BnPopconfirm,
  BnTooltip,
  installer as default,
  messageTypes,
  vLoading
};
//# sourceMappingURL=bani-ui.js.map
