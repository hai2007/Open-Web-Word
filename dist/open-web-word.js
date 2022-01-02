/*!
 * ✍️ Open Web Word - ✍️ Web version of the extensible text editor.
 * git+https://github.com/hai2007/Open-Web-Word.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 0.1.0-alpha.0
 *
 * Copyright (c) 2021-2022 hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Sun Jan 02 2022 19:24:38 GMT+0800 (中国标准时间)
 */
/******/
/******/  // EtcPack Bootstrap/******/  
/******/  // （ https://etcpack.github.io/api/ ）/******/  
/******/  /******/  
/******/  // 记录bundle的函数源码/******/  
/******/  window.__etcpack__bundleSrc__ = {};/******/  
/******/  /******/  
/******/  // 记录bundle的运行结果/******/  
/******/  window.__etcpack__bundleObj__ = {};/******/  
/******/  /******/  
/******/  // 获取bundle结果/******/  
/******/  window.__etcpack__getBundle = function (bundleName) {/******/  
/******/  /******/  
/******/      // 一个bundle只有第一次导入的时候需要执行/******/  
/******/      if (!(bundleName in window.__etcpack__bundleObj__)) {/******/  
/******/          window.__etcpack__bundleObj__[bundleName] = window.__etcpack__bundleSrc__[bundleName]();/******/  
/******/      }/******/  
/******/  /******/  
/******/      // 返回需要的bundle的结果/******/  
/******/      return window.__etcpack__bundleObj__[bundleName];/******/  
/******/  }/******/  
/******/  /******/  
/******/  window.__etcpack__bundleFile__ = {};/******/  
/******/  /******/  
/******/  // 获取懒加载bundle结果/******/  
/******/  window.__etcpack__getLazyBundle = function (fileName, bundleName) {/******/  
/******/      return new Promise(function (resolve) {/******/  
/******/  /******/  
/******/          // 如果加载过了/******/  
/******/          if (window.__etcpack__bundleFile__[fileName]) {/******/  
/******/              resolve(window.__etcpack__getBundle(bundleName));/******/  
/******/              return;/******/  
/******/          }/******/  
/******/  /******/  
/******/          // 获取head标签/******/  
/******/          var head = document.getElementsByTagName('head')[0];/******/  
/******/  /******/  
/******/          // 创建script/******/  
/******/          var script = document.createElement('script');/******/  
/******/  /******/  
/******/          // 设置属性/******/  
/******/          script.src = fileName;/******/  
/******/  /******/  
/******/          // 追加到页面/******/  
/******/          head.appendChild(script);/******/  
/******/  /******/  
/******/          window.__etcpack__bundleFile__[fileName] = true;/******/  
/******/  /******/  
/******/          script.addEventListener('load', function () {/******/  
/******/              resolve(window.__etcpack__getBundle(bundleName));/******/  
/******/          }, false);/******/  
/******/  /******/  
/******/  /******/  
/******/      });/******/  
/******/  }/******/  
/******/  
/************************************************************************/
/******/

/*************************** [bundle] ****************************/
// Original file:./src/export.js
/*****************************************************************/
window.__etcpack__bundleSrc__['0']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var render =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('7');
var isElement=__etcpack__scope_args__.isElement;


var oww = function oww(options) {
  if (!(this instanceof oww)) {
    throw new Error('Open-Web-Word is a constructor and should be called with the `new` keyword');
  }

  if (isElement(options.el)) {
    render(options.el);
  }
};

if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
  module.exports = oww;
} else {
  window.OpenWebWord = oww;
}
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/main.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['1']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('2');
var platform=__etcpack__scope_args__.platform;

__etcpack__scope_args__=window.__etcpack__getBundle('4');
var style =__etcpack__scope_args__.default;
 // 兼容文件

__etcpack__scope_args__=window.__etcpack__getBundle('5');
 // 引入主模块

__etcpack__scope_args__=window.__etcpack__getBundle('18');
var appModule =__etcpack__scope_args__.default;

__etcpack__scope_bundle__.default= (function (el) {
  // 先获取平台实例
  platform({
    // 框架管理的区域
    el: el,
    // 全局样式
    styles: [style]
  }) // 然后启动主模块
  .bootstrap(appModule);
});
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/lib/nefbl.js
/*****************************************************************/
window.__etcpack__bundleSrc__['2']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('3');
var Nefbl =__etcpack__scope_args__.default;
 // 装饰器

__etcpack__scope_bundle__.Module = Nefbl.Module;
__etcpack__scope_bundle__.Component = Nefbl.Component;
__etcpack__scope_bundle__.Directive = Nefbl.Directive; // 核心方法

__etcpack__scope_bundle__.platform = Nefbl.platform;
__etcpack__scope_bundle__.mountComponent = Nefbl.mountComponent;
__etcpack__scope_bundle__.evalExpress = Nefbl.evalExpress;
__etcpack__scope_bundle__.getValue = Nefbl.getValue;
__etcpack__scope_bundle__.setValue = Nefbl.setValue; // 暴露的一些有用的方法

__etcpack__scope_bundle__.ref = Nefbl.ref;
__etcpack__scope_bundle__.reactive = Nefbl.reactive;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/nefbl/dist/nefbl.js
/*****************************************************************/
window.__etcpack__bundleSrc__['3']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

        var module={
            exports:{}
        };
        var exports=module.exports;

        /*!
 * nefbl - 新一代前端框架
 *
 * git+https://github.com/nefbl/nefbl.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 0.2.6
 *
 * Copyright (c) 2021-2021 hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Thu Dec 02 2021 16:51:00 GMT+0800 (中国标准时间)
 */
(function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /**
   * 判断一个值是不是Object。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是Object返回true，否则返回false
   */
  function _isObject (value) {
    var type = _typeof(value);

    return value != null && (type === 'object' || type === 'function');
  }

  var toString = Object.prototype.toString;
  /**
   * 获取一个值的类型字符串[object type]
   *
   * @param {*} value 需要返回类型的值
   * @returns {string} 返回类型字符串
   */

  function getType (value) {
    if (value == null) {
      return value === undefined ? '[object Undefined]' : '[object Null]';
    }

    return toString.call(value);
  }

  /**
   * 判断一个值是不是Function。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是Function返回true，否则返回false
   */

  function _isFunction (value) {
    if (!_isObject(value)) {
      return false;
    }

    var type = getType(value);
    return type === '[object Function]' || type === '[object AsyncFunction]' || type === '[object GeneratorFunction]' || type === '[object Proxy]';
  }

  /*!
   * 💡 - 值类型判断方法
   * https://github.com/hai2007/tool.js/blob/master/type.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */


  var isObject = _isObject; // 基本类型

  var isFunction = _isFunction;
  var isArray = function isArray(input) {
    return Array.isArray(input);
  };

  /**
   * 模块
   */

  function Module () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var component = {},
        directive = {};
    var bootstrapComponent = null;
    var exports = {
      component: {},
      directive: {}
    };

    if (isArray(config.declarations)) {
      // 分析出指令和组件
      var _iterator = _createForOfIteratorHelper(config.declarations),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var Item = _step.value;
          var needExports = false;

          if (isArray(config.exports)) {
            // 判断是否需要暴露

            /**
             * 为什么这里暴露出去的需要从declarations中取？
             * 因为考虑到后期改造的时候，可能新增一些需要在本模块实例化等，
             * 这样的好处是保罗出去的和内置使用的保持一致，不会乱。
             */
            var _iterator2 = _createForOfIteratorHelper(config.exports),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var ExportItem = _step2.value;

                if (ExportItem === Item) {
                  needExports = true;
                  break;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } // 组件


          if (Item.prototype.__type__ == "Component") {
            component[Item.prototype.__selector__] = Item; // bootstrap用于标记启动组件

            if (config.bootstrap === Item) {
              bootstrapComponent = Item;
            }

            if (needExports) {
              exports.component[Item.prototype.__selector__] = Item;
            }
          } // 指令
          else if (Item.prototype.__type__ == "Directive") {
              directive[Item.prototype.__selector__] = Item;

              if (needExports) {
                exports.directive[Item.prototype.__selector__] = Item;
              }
            }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    if (isArray(config.imports)) {
      // 分析导入的模块
      var _iterator3 = _createForOfIteratorHelper(config.imports),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var module = _step3.value;

          // 组件
          for (var key in module.prototype.__exports__.component) {
            component[key] = module.prototype.__exports__.component[key];
          } // 指令


          for (var _key in module.prototype.__exports__.directive) {
            directive[_key] = module.prototype.__exports__.directive[_key];
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    return function (target) {
      // 对象类型标记
      target.prototype.__type__ = 'Module'; // 登记所有的指令、组件（包括依赖的模块的）

      target.prototype.__component__ = component;
      target.prototype.__directive__ = directive; // 暴露出去的

      target.prototype.__exports__ = exports; // 可能还有启动组件

      target.prototype.__bootstrapComponent__ = bootstrapComponent;
    };
  }

  var $RegExp = {
    // 空白字符:http://www.w3.org/TR/css3-selectors/#whitespace
    blankReg: new RegExp("[\\x20\\t\\r\\n\\f]"),
    blanksReg: /^[\x20\t\r\n\f]{0,}$/,
    // 标志符
    identifier: /^[a-zA-Z_$][0-9a-zA-Z_$]{0,}$/
  };

  var toString$1 = Object.prototype.toString;
  /**
   * 获取一个值的类型字符串[object type]
   *
   * @param {*} value 需要返回类型的值
   * @returns {string} 返回类型字符串
   */

  function getType$1 (value) {
    if (value == null) {
      return value === undefined ? '[object Undefined]' : '[object Null]';
    }

    return toString$1.call(value);
  }

  /**
   * 判断一个值是不是String。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是String返回true，否则返回false
   */

  function _isString (value) {
    var type = _typeof(value);

    return type === 'string' || type === 'object' && value != null && !Array.isArray(value) && getType$1(value) === '[object String]';
  }

  var isString = _isString;
  var isArray$1 = function isArray(input) {
    return Array.isArray(input);
  };

  function analyseTag (attrString) {
    var attr = {},
        index = 0;
    attrString = attrString.trim();

    var getOneAttr = function getOneAttr() {
      // 属性名和属性值
      var attrName = "",
          attrValue = ""; // 先寻找属性名

      for (; index < attrString.length; index++) {
        // 寻找属性名的时候遇到空白或结尾的时候，肯定没有属性值
        if ($RegExp.blanksReg.test(attrString[index]) || index == attrString.length - 1) {
          attrName += attrString[index]; // 如果属性名是空白，就不需要记录了

          if (!$RegExp.blanksReg.test(attrName)) {
            attr[attrName.trim()] = "";
          }

          index += 1;
          break;
        } // 如果遇到等号，说明属性名寻找结束了
        else if (attrString[index] == '=') {
            // 接着寻找属性值
            index += 1; // 由于属性可能由引号包裹或直接暴露

            var preCode = null,
                preLeng = -1; // 如果是由'或者"包裹

            if (attrString.substr(index, 1) == '"' || attrString.substr(index, 1) == "'") {
              preCode = attrString.substr(index, 1);
              preLeng = 1;
              index += 1;
            } // 如果是由\'或\"包裹
            else if (attrString.substr(index, 2) == '\"' || attrString.substr(index, 2) == "\'") {
                preCode = attrString.substr(index, 2);
                preLeng = 2;
                index += 2;
              } // 开始正式寻找属性值
            // 如果没有包裹，是直接暴露在外面的
            // 我们寻找到空格或结尾即可


            if (preCode !== null) {
              for (; index < attrString.length; index++) {
                if (attrString.substr(index, preLeng) == preCode) {
                  attr[attrName.trim()] = attrValue.trim();
                  index += 2;
                  break;
                } else {
                  attrValue += attrString[index];
                }
              }
            } // 如果是包裹的
            // 我们确定寻找到对应的包裹闭合即可
            else {
                for (; index < attrString.length; index++) {
                  if ($RegExp.blanksReg.test(attrString[index])) {
                    attr[attrName.trim()] = attrValue.trim();
                    index += 1;
                    break;
                  } else {
                    attrValue += attrString[index];
                  }
                }
              }

            break;
          } else {
            attrName += attrString[index];
          }
      } // 如果还有字符串，继续解析


      if (index < attrString.length) {
        getOneAttr();
      }
    };

    getOneAttr();
    return attr;
  }

  function nextTagFun (template) {
    var i = -1,
        // 当前面对的字符
    currentChar = null; // 如果前面是获取的js或css，还有pre等开始标签，比较特殊，直接寻址闭合的

    var preIsSpecial = false,
        specialCode = "";
    var specialTag = ['script', 'pre', 'style', 'code']; // 获取下一个字符

    var next = function next() {
      currentChar = i++ < template.length - 1 ? template[i] : null;
      return currentChar;
    }; // 获取往后n个值


    var nextNValue = function nextNValue(n) {
      return template.substring(i, n + i > template.length ? template.length : n + i);
    };

    next(); // 剔除开头的空白

    while ($RegExp.blankReg.test(currentChar) && i < template.length - 1) {
      next();
    }
    /**
     * 一个Tag存在哪些类型？如下：
     * 1.<tag-name>       { tagName:'tag-name', type:'beginTag', attrs:{} }      开始标签
     * 2.</tag-name>      { tagName:'tag-name', type:'endTag'   }                结束标签
     * 3.<tag-name />     { tagName:'tag-name', type:'fullTag',  attrs:{} }      自闭合标签
     * 4.text             { tagName:'text',     type:'textcode' }                文本结点
     * 5.<!-- text -->    { tagName:'text',     type:'comment'  }                注释
     * 6.<!DOCTYPE text>  { tagName:'text',     type:'DOCTYPE'  }                声明
     *
     *
     */


    return function () {
      var tag = currentChar,
          tagObj = {};
      if (tag == null) return null;
      /**
       * 特殊标签内容获取
       * ========================================
       */
      // 如果是获取特殊标签里面的内容
      // 先不考虑里面包含'</XXX>'

      if (preIsSpecial) {
        tagObj.type = 'textcode';
        tagObj.tagName = tag;

        while (nextNValue(specialCode.length + 3) != '</' + specialCode + '>' && i < template.length) {
          tagObj.tagName += next();
        }

        tagObj.tagName = tagObj.tagName.replace(/<$/, '');
        preIsSpecial = false;
        return tagObj;
      }
      /**
       * 特殊标签获取
       * ========================================
       */
      // 针对特殊的comment


      if (nextNValue(4) == '<!--') {
        tagObj.type = 'comment';
        tagObj.tagName = tag;

        while (nextNValue(3) != '-->' && i < template.length) {
          tagObj.tagName += next();
        }

        next();
        next();
        next();
        tagObj.tagName = tagObj.tagName.replace(/^<!--/, '').replace(/-$/, '');
        return tagObj;
      } // 针对特殊的doctype


      if (nextNValue(9) == '<!DOCTYPE') {
        tagObj.type = 'DOCTYPE';
        tagObj.tagName = tag;

        while (nextNValue(1) != '>' && i < template.length) {
          tagObj.tagName += next();
        }

        next();
        tagObj.tagName = tagObj.tagName.replace(/^<!DOCTYPE/, '').replace(/>$/, '');
        return tagObj;
      }
      /**
       * 普通的
       * ========================================
       */
      // 如果是期望归结非文本结点
      else if (tag == '<') {
          // 标记是否处于属性值是字符串包裹中
          var isAttrString = false,
              attrLeftValue = null,
              attrLeftLen = null; // 如果在包裹中或者没有遇到‘>’说明没有结束

          while ((isAttrString || currentChar != '>') && i < template.length) {
            tag += next(); // 如果是包裹里面，试探是否即将遇到了结束

            if (isAttrString) {
              var next23Value = nextNValue(attrLeftLen + 1).substring(1);

              if (next23Value == attrLeftValue) {
                isAttrString = false;
              }
            } // 如果在包裹外面，试探是否即将进入包裹
            else {
                var next23Value = nextNValue(2);

                if (next23Value == '="' || next23Value == "='") {
                  attrLeftValue = next23Value.replace('=', '');
                  attrLeftLen = 1;
                  isAttrString = true;
                }

                next23Value = nextNValue(3);

                if (next23Value == '=\"' || next23Value == "=\'") {
                  attrLeftValue = next23Value.replace('=', '');
                  attrLeftLen = 2;
                  isAttrString = true;
                }
              }
          } // 针对特殊的结束标签


          if (/^<\//.test(tag)) {
            tagObj.tagName = tag.replace(/^<\//, '').replace(/>$/, '');
            tagObj.type = 'endTag';
          } else {
            if (/\/>$/.test(tag)) {
              tagObj.type = 'fullTag';
              tag = tag.replace(/\/>$/, '');
            } else {
              tagObj.type = 'beginTag';
              tag = tag.replace(/>$/, '');
            }

            tag = tag.replace(/^</, '');
            tagObj.tagName = "";
            var j = 0;

            for (; j < tag.length; j++) {
              if (tag[j] == ' ') break;
              tagObj.tagName += tag[j];
            }

            var attrString = tag.substring(j);

            if ($RegExp.blanksReg.test(attrString)) {
              tagObj.attrs = {};
            } else {
              tagObj.attrs = analyseTag(attrString);
            }
          }
        } // 如果是归结文本结点
        // 如果文本中包含<的先忽略考虑
        else {
            tagObj.type = 'textcode';
            tagObj.tagName = currentChar;

            while (nextNValue(1) != '<' && i < template.length) {
              tagObj.tagName += next();
            }

            tagObj.tagName = tagObj.tagName.replace(/<$/, '');
            i -= 1;
          } // 如果遇到开始script或者style、pre等特殊标签，标记开始获取特殊文本


      if (tagObj.type == 'beginTag') {
        if (specialTag.indexOf(tagObj.tagName.toLowerCase()) > -1) {
          preIsSpecial = true;
          specialCode = tagObj.tagName;
        }
      } // 如果遇到结束script或者style、pre等特殊标签，标记结束获取特殊文本
      else if (tagObj.type == 'endTag') {
          if (specialTag.indexOf(tagObj.tagName.toLowerCase()) > -1) {
            preIsSpecial = false;
          }
        }

      next();
      return tagObj;
    };
  }

  // 分析deep
  // 我们会在这里校对那些没有结束标签的开始标签
  // 这步结束以后，每个都是一个单独的标签
  // 也就是不用再区分开始或闭合了
  function analyseDeep (tagArray) {
    // 闭合标签
    tagArray = closeTag(tagArray);
    var deep = 0,
        tagDeepArray = [];
    tagArray.forEach(function (tag) {
      if (tag.type == 'beginTag') {
        tagDeepArray.push({
          type: "tag",
          name: tag.tagName,
          attrs: tag.attrs,
          __deep__: ++deep,
          __tagType__: "double"
        });
      } else if (tag.type == 'endTag') {
        deep -= 1;
      } else if (tag.type == 'textcode') {
        // 如果是文本
        tagDeepArray.push({
          type: "text",
          content: tag.tagName,
          __deep__: deep + 1
        });
      } else if (tag.type == 'comment') {
        // 如果是注释
        tagDeepArray.push({
          type: "comment",
          content: tag.tagName,
          __deep__: deep + 1
        });
      } else {
        // 如果是自闭合结点
        tagDeepArray.push({
          type: "tag",
          name: tag.tagName,
          attrs: tag.attrs,
          __deep__: deep + 1,
          __tagType__: "single"
        });
      }
    });
    return tagDeepArray;
  }

  var closeTag = function closeTag(tagArray) {
    var needClose = [];
    tagArray.forEach(function (tag, i) {
      if (tag.type == 'beginTag') {
        needClose.push([i, tag.tagName]);
      } else if (tag.type == 'endTag') {
        while (needClose.length > 0) {
          var needCloseTag = needClose.pop();

          if (needCloseTag[1] == tag.tagName) {
            break;
          } else {
            tagArray[needCloseTag[0]].type = 'fullTag';
          }
        }
      }
    });
    return tagArray;
  };

  /*!
   * 🔪 - 解析xhtml为json对象返回
   * https://github.com/hai2007/algorithm.js/blob/master/xhtmlToJson.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */
  // noIgnore为true表示不忽略任何标签

  function xhtmlToJson (template, noIgnore) {
    if (!isString(template)) throw new Error("Template must be a String!"); // 获取读取下一个标签对象

    var nextTag = nextTagFun(template.trim());
    var tag = nextTag(),
        DomTree = [];

    while (tag != null) {
      if (tag.type == 'textcode' && $RegExp.blanksReg.test(tag.tagName)) ; else if (tag.type == 'DOCTYPE') ; else if (tag.type == 'comment') {
        // 注释目前也默认过滤掉，除非显示声明不忽略
        if (noIgnore) {
          DomTree.push(tag);
        }
      } else {
        tag.tagName = tag.tagName.trim();
        DomTree.push(tag);
      }

      tag = nextTag();
    } // 分析层次


    DomTree = analyseDeep(DomTree);
    /**
     * 模仿浏览器构建的一棵树,每个结点有如下属性：
     *
     * 1.parentNode index  父结点
     * 2.childNodes []     孩子结点
     * 3.preNode    index  前一个兄弟结点
     * 4.nextNode   index  后一个兄弟结点
     *
     * 5.attrs:{}          当前结点的属性
     * 6.name              节点名称
     * 7.type              节点类型（tag和text）
     * 8.content           文本结点内容
     *
     * 需要注意的是：如果一个文本结点内容只包含回车，tab，空格等空白字符，会直接被忽视
     */

    var presNode = [null],
        preDeep = 0;

    for (var i = 0; i < DomTree.length; i++) {
      // 当前结点
      var currentIndex = i,
          currentDeep = DomTree[i].__deep__;
      DomTree[i].childNodes = [];
      DomTree[i].preNode = null;
      DomTree[i].nextNode = null; // 前置三个结点

      var lastPre = presNode[presNode.length - 1];
      var last2Pre = presNode.length > 1 ? presNode[presNode.length - 2] : null; // 如果遇到的是兄弟结点

      if (currentDeep == preDeep) {
        // 修改兄弟关系
        DomTree[currentIndex].preNode = lastPre;
        DomTree[lastPre].nextNode = currentIndex; // 修改父子关系

        DomTree[currentIndex].parentNode = last2Pre;
        DomTree[last2Pre].childNodes.push(currentIndex); // 校对presNode

        presNode[presNode.length - 1] = currentIndex;
      } // 如果是遇到了孩子
      else if (currentDeep > preDeep) {
          // 修改兄弟关系
          // todo
          // 修改父子关系
          DomTree[currentIndex].parentNode = lastPre;
          if (lastPre != null) DomTree[lastPre].childNodes.push(currentIndex); // 校对presNode

          presNode.push(currentIndex);
        } // 如果是遇到了祖先
        else {
            var preTempIndex = presNode[presNode.length - 1 - (preDeep - currentDeep)];
            var preTemp2Index = presNode[presNode.length - 2 - (preDeep - currentDeep)]; // 修改兄弟关系

            DomTree[currentIndex].preNode = preTempIndex;
            if (preTempIndex != null) DomTree[preTempIndex].nextNode = currentIndex; // 修改父子关系

            DomTree[currentIndex].parentNode = preTemp2Index;
            if (preTemp2Index != null) DomTree[preTemp2Index].childNodes.push(currentIndex); // 校对presNode

            for (var j = 0; j < preDeep - currentDeep; j++) {
              presNode.pop();
            }

            presNode[presNode.length - 1] = currentIndex;
          }

      preDeep = currentDeep;
    }

    return DomTree;
  }

  // 在浏览器中利用style标签插入样式
  function addStylesClient(styles, uniqueId) {
    var styleElement = document.createElement('style');
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = styles.join(''); // 如果需要包裹

    if (uniqueId) {
      style = style.replace(/( {0,}){/g, "{");
      style = style.replace(/( {0,}),/g, ",");
      var temp = ""; // 分别表示：是否处于注释中、是否处于内容中、是否由于特殊情况在遇到{前完成了hash

      var isSpecial = false,
          isContent = false,
          hadComplete = false;

      for (var i = 0; i < style.length; i++) {
        if (style[i] == ':' && !isSpecial && !hadComplete && !isContent) {
          hadComplete = true;
          temp += "[" + uniqueId + "]";
        } else if (style[i] == '{' && !isSpecial) {
          isContent = true;
          if (!hadComplete) temp += "[" + uniqueId + "]";
        } else if (style[i] == '}' && !isSpecial) {
          isContent = false;
          hadComplete = false;
        } else if (style[i] == '/' && style[i + 1] == '*') {
          isSpecial = true;
        } else if (style[i] == '*' && style[i + 1] == '/') {
          isSpecial = false;
        } else if (style[i] == ',' && !isSpecial && !isContent) {
          if (!hadComplete) temp += "[" + uniqueId + "]";
          hadComplete = false;
        }

        temp += style[i];
      }

      style = temp;
    }

    styleElement.innerHTML = style;
    styleElement.setAttribute('type', 'text/css');
    head.appendChild(styleElement);
  }

  /**
   * 组件
   */

  var index = 0;
  function Component (config) {
    var uniqueId = null; // 加载css

    if (isArray(config.styles)) {
      uniqueId = "nefbl-scoped-" + index++;
      addStylesClient(config.styles, uniqueId);
    }

    var template = xhtmlToJson("<nefbl-component>" + config.template + "</nefbl-component>");
    return function (target) {
      // 对象类型标记
      target.prototype.__type__ = 'Component'; // 登记选择器

      target.prototype.__selector__ = config.selector; // 登记模板对象

      target.prototype.__template__ = template; // 记录唯一标识

      target.prototype.__uniqueId__ = uniqueId;
    };
  }

  /**
   * 指令
   */
  function Directive (config) {
    return function (target) {
      // 对象类型标记
      target.prototype.__type__ = 'Directive'; // 登记选择器

      target.prototype.__selector__ = config.selector;
    };
  }

  // 判断是否是合法的方法或数据key
  function isValidKey (key) {
    // 判断是不是_或者$开头的
    // 这两个内部预留了
    if (/^[_$]/.test(key)) {
      throw new Error('The beginning of _ or $ is not allowed：' + key);
    }
  }

  function watcher (component, data, key, doback) {
    // 记录值
    var value = data.value;
    var getter_setter = {
      get: function get() {
        return value;
      },
      set: function set(newValue) {
        value = newValue; // 回调通知组件更新

        doback();
      }
    }; // setter和getter添加监听

    Object.defineProperty(data, 'value', getter_setter); // 组件实例新增属性

    component[key] = value;
    Object.defineProperty(component, key, getter_setter);
  }

  function proxy (component, data, key, doback) {
    var proxy = new Proxy(data.value, {
      get: function get(_target, _key) {
        return _target[_key];
      },
      set: function set(_target, _key, _value) {
        var flag = Reflect.set(_target, _key, _value); // 回调通知组件更新

        doback();
        return flag;
      }
    });
    data.value = proxy;
    component[key] = proxy;
  }

  // 后续我们的任务就是对这个数组进行归约即可(归约交付给别的地方，这里不继续处理)

  /**
   * 例如：
   *  target={
   *      a:{
   *              value:9
   *         },
   *      b:7,
   *      flag:'no'
   *  }
   *  express= "a.value>10 && b< 11 ||flag=='yes'"
   * 变成数组以后应该是：
   *
   * // 比如最后的yes@value表示这是一个最终的值，不需要再计算了
   * ['a','[@value','value@value',']@value','>@value','10@value','&&@value','b','<@value','||@value','flag','==@value','yes@value']
   *
   * 然后，进一步解析得到：
   * [{value:9},'[','value',']','>',10,'&&',7,'<','||','no','==','yes']
   *
   * (当然，我们实际运算的时候，可能和这里不完全一致，这里只是为了方便解释我们的主体思想)
   *
   * 然后我们返回上面的结果即可！
   */
  // 除了上述原因，统一前置处理还有一个好处就是：
  // 可以提前对部分语法错误进行报错，方便定位调试
  // 因为后续的操作越来越复杂，错误越提前越容易定位

  var specialCode1 = ['+', '-', '*', '/', '%', '&', '|', '!', '?', ':', '[', ']', '(', ")", '>', '<', '='];
  var specialCode2 = ['+', '-', '*', '/', '%', '&', '|', '!', '?', ':', '>', '<', '=', '<=', '>=', '==', '===', '!=', '!=='];
  function analyseExpress (target, express, scope) {
    // 剔除开头和结尾的空白
    express = express.trim();
    var i = -1,
        // 当前面对的字符
    currentChar = null; // 获取下一个字符

    var next = function next() {
      currentChar = i++ < express.length - 1 ? express[i] : null;
      return currentChar;
    }; // 获取往后n个值


    var nextNValue = function nextNValue(n) {
      return express.substring(i, n + i > express.length ? express.length : n + i);
    };

    next();
    var expressArray = [];

    while (true) {
      if (i >= express.length) break; // 先匹配普通的符号
      // + - * / %
      // && || !
      // ? :
      // [ ] ( )
      // > < >= <= == === != !==
      // 如果是&或者|比较特殊

      if (specialCode1.indexOf(currentChar) > -1) {
        // 对于特殊的符号
        if (['&', '|', '='].indexOf(currentChar) > -1) {
          if (['==='].indexOf(nextNValue(3)) > -1) {
            expressArray.push(nextNValue(3));
            i += 2;
            next();
          } else if (['&&', '||', '=='].indexOf(nextNValue(2)) > -1) {
            expressArray.push(nextNValue(2));
            i += 1;
            next();
          } else {
            throw new Error("Illegal expression : " + express + "\nstep='analyseExpress',index=" + i);
          }
        } else {
          // 拦截部分比较特殊的
          if (['!=='].indexOf(nextNValue(3)) > -1) {
            expressArray.push(nextNValue(3));
            i += 2;
            next();
          } else if (['>=', '<=', '!='].indexOf(nextNValue(2)) > -1) {
            expressArray.push(nextNValue(2));
            i += 1;
            next();
          } // 普通的单一的
          else {
              expressArray.push(currentChar);
              next();
            }
        }
      } // 如果是字符串
      else if (['"', "'"].indexOf(currentChar) > -1) {
          var temp = "",
              beginTag = currentChar;
          next(); // 如果没有遇到结束标签
          // 目前没有考虑 '\'' 这种带转义字符的情况，当然，'\"'这种是支持的
          // 后续如果希望支持，优化这里即可

          while (currentChar != beginTag) {
            if (i >= express.length) {
              // 如果还没有遇到结束标识就结束了，属于字符串未闭合错误
              throw new Error("String unclosed error : " + express + "\nstep='analyseExpress',index=" + i);
            } // 继续拼接


            temp += currentChar;
            next();
          }

          expressArray.push(temp + "@string");
          next();
        } // 如果是数字
        else if (/\d/.test(currentChar)) {
            var dotFlag = 'no'; // no表示还没有匹配到.，如果已经匹配到了，标识为yes，如果匹配到了.，可是后面还没有遇到数组，标识为error

            var temp = currentChar;
            next();

            while (i < express.length) {
              if (/\d/.test(currentChar)) {
                temp += currentChar;
                if (dotFlag == 'error') dotFlag = 'yes';
              } else if ('.' == currentChar && dotFlag == 'no') {
                temp += currentChar;
                dotFlag = 'error';
              } else {
                break;
              }

              next();
            } // 如果小数点后面没有数字，辅助添加一个0


            if (dotFlag == 'error') temp += "0";
            expressArray.push(+temp);
          } // 如果是特殊符号
          // 也就是类似null、undefined等
          else if (['null', 'true'].indexOf(nextNValue(4)) > -1) {
              expressArray.push({
                "null": null,
                "true": true
              }[nextNValue(4)]);
              i += 3;
              next();
            } else if (['false'].indexOf(nextNValue(5)) > -1) {
              expressArray.push({
                'false': false
              }[nextNValue(5)]);
              i += 4;
              next();
            } else if (['undefined'].indexOf(nextNValue(9)) > -1) {
              expressArray.push({
                "undefined": undefined
              }[nextNValue(9)]);
              i += 8;
              next();
            } // 如果是空格
            else if ($RegExp.blankReg.test(currentChar)) {
                do {
                  next();
                } while ($RegExp.blankReg.test(currentChar) && i < express.length);
              } else {
                var dot = false; // 对于开头有.进行特殊捕获，因为有.意味着这个值应该可以变成['key']的形式
                // 这是为了和[key]进行区分，例如：
                // .key 等价于 ['key'] 翻译成这里就是 ['[','key',']']
                // 可是[key]就不一样了，翻译成这里以后应该是 ['[','这个值取决当前对象和scope',']']
                // 如果这里不进行特殊处理，后续区分需要额外的标记，浪费资源

                if (currentChar == '.') {
                  dot = true;
                  next();
                } // 如果是标志符

                /**
                 *  命名一个标识符时需要遵守如下的规则：
                 *  1.标识符中可以含有字母 、数字 、下划线_ 、$符号
                 *  2.标识符不能以数字开头
                 */
                // 当然，是不是关键字等我们就不校对了，因为没有太大的实际意义
                // 也就是类似flag等局部变量


                if ($RegExp.identifier.test(currentChar)) {
                  var len = 1;

                  while (i + len <= express.length && $RegExp.identifier.test(nextNValue(len))) {
                    len += 1;
                  }

                  if (dot) {
                    expressArray.push('[');
                    expressArray.push(nextNValue(len - 1) + '@string');
                    expressArray.push(']');
                  } else {
                    var tempKey = nextNValue(len - 1); // 如果不是有前置.，那就是需要求解了

                    var tempValue = tempKey in scope ? scope[tempKey] : target[tempKey];
                    expressArray.push(isString(tempValue) ? tempValue + "@string" : tempValue);
                  }

                  i += len - 2;
                  next();
                } // 都不是，那就是错误
                else {
                    throw new Error("Illegal express : " + express + "\nstep='analyseExpress',index=" + i);
                  }
              }
    } // 实际情况是，对于-1等特殊数字，可能存在误把1前面的-号作为运算符的错误，这里拦截校对一下


    var length = 0;

    for (var j = 0; j < expressArray.length; j++) {
      if (["+", "-"].indexOf(expressArray[j]) > -1 && ( // 如果前面的也是运算符或开头，这个应该就不应该是运算符了
      j == 0 || specialCode2.indexOf(expressArray[length - 1]) > -1)) {
        expressArray[length++] = +(expressArray[j] + expressArray[j + 1]);
        j += 1;
      } else {
        expressArray[length++] = expressArray[j];
      }
    }

    expressArray.length = length;
    return expressArray;
  }

  var getExpressValue = function getExpressValue(value) {
    // 这里是计算的内部，不需要考虑那么复杂的类型
    if (typeof value == 'string') return value.replace(/@string$/, '');
    return value;
  };

  var setExpressValue = function setExpressValue(value) {
    if (typeof value == 'string') return value + "@string";
    return value;
  };

  function evalValue (expressArray) {
    // 采用按照优先级顺序归约的思想进行
    // 需要明白，这里不会出现括号
    // （小括号或者中括号，当然，也不会有函数，这里只会有最简单的表达式）
    // 这也是我们可以如此归约的前提
    // + - * / %
    // && || !
    // ? :
    // > < >= <= == === != !==
    // !
    // 因为合并以后数组长度一定越来越短，我们直接复用以前的数组即可
    var length = 0,
        i = 0;

    for (; i < expressArray.length; i++) {
      if (expressArray[i] == '!') {
        // 由于是逻辑运算符，如果是字符串，最后的@string是否去掉已经没有意义了
        expressArray[length] = !expressArray[++i];
      } else expressArray[length] = expressArray[i];

      length += 1;
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // * / %

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '*') {
        // 假设不知道一定正确，主要是为了节约效率，是否提供错误提示，再议
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) * getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '/') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) / getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '%') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) % getExpressValue(expressArray[++i]);
      } else {
        // 上面不会导致数组增长
        expressArray[length++] = expressArray[i];
      }
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // + -

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '+') {
        expressArray[length - 1] = setExpressValue(getExpressValue(expressArray[length - 1]) + getExpressValue(expressArray[++i]));
      } else if (expressArray[i] == '-') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) - getExpressValue(expressArray[++i]);
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // > < >= <=

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '>') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) > getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '<') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) < getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '<=') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) <= getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '>=') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) >= getExpressValue(expressArray[++i]);
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // == === != !==

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '==') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) == getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '===') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) === getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '!=') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) != getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '!==') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) !== getExpressValue(expressArray[++i]);
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // && ||

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '&&') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) && getExpressValue(expressArray[1 + i]);
        i += 1;
      } else if (expressArray[i] == '||') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) || getExpressValue(expressArray[1 + i]);
        i += 1;
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // ?:

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '?') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) ? getExpressValue(expressArray[i + 1]) : getExpressValue(expressArray[i + 3]);
        i += 3;
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length;
    throw new Error('Unrecognized expression : [' + expressArray.toString() + "]");
  }

  function calcValue (target, expressArray, scope) {
    var value = expressArray[0] in scope ? scope[expressArray[0]] : target[expressArray[0]];

    for (var i = 1; i < expressArray.length; i++) {
      try {
        value = value[expressArray[i]];
      } catch (e) {
        console.error({
          target: target,
          scope: scope,
          expressArray: expressArray,
          index: i
        });
        throw e;
      }
    }

    return value;
  }

  var doit1 = function doit1(target, expressArray, scope) {
    // 先消小括号
    // 其实也就是归约小括号
    if (expressArray.indexOf('(') > -1) {
      var newExpressArray = [],
          temp = [],
          // 0表示还没有遇到左边的小括号
      // 1表示遇到了一个，以此类推，遇到一个右边的会减1
      flag = 0;

      for (var i = 0; i < expressArray.length; i++) {
        if (expressArray[i] == '(') {
          if (flag > 0) {
            // 说明这个应该是需要计算的括号里面的括号
            temp.push('(');
          }

          flag += 1;
        } else if (expressArray[i] == ')') {
          if (flag > 1) temp.push(')');
          flag -= 1; // 为0说明主的小括号归约结束了

          if (flag == 0) {
            var _value = evalValue(doit1(target, temp));

            newExpressArray.push(isString(_value) ? _value + '@string' : _value);
            temp = [];
          }
        } else {
          if (flag > 0) temp.push(expressArray[i]);else newExpressArray.push(expressArray[i]);
        }
      }

      expressArray = newExpressArray;
    } // 去掉小括号以后，调用中括号去掉方法


    return doit2(expressArray);
  }; // 中括号嵌套去掉方法


  var doit2 = function doit2(expressArray) {
    var hadMore = true;

    while (hadMore) {
      hadMore = false;
      var newExpressArray = [],
          temp = [],
          // 如果为true表示当前在试探寻找归约最小单元的结束
      flag = false; // 开始寻找里面需要归约的最小单元（也就是可以立刻获取值的）

      for (var i = 0; i < expressArray.length; i++) {
        // 这说明这是一个需要归约的
        // 不过不一定是最小单元
        // 遇到了，先记下了
        if (expressArray[i] == '[' && i != 0 && expressArray[i - 1] != ']') {
          if (flag) {
            // 如果之前已经遇到了，说明之前保存的是错误的，需要同步会主数组
            newExpressArray.push('[');

            for (var j = 0; j < temp.length; j++) {
              newExpressArray.push(temp[j]);
            }
          } else {
            // 如果之前没有遇到，修改标记即可
            flag = true;
          }

          temp = [];
        } // 如果遇到了结束，这说明当前暂存的就是最小归结单元
        // 计算后放回主数组
        else if (expressArray[i] == ']' && flag) {
            hadMore = true; // 计算

            var tempValue = evalValue(temp);
            var _value = newExpressArray[newExpressArray.length - 1][tempValue];
            newExpressArray[newExpressArray.length - 1] = isString(_value) ? _value + "@string" : _value; // 状态恢复

            flag = false;
          } else {
            if (flag) {
              temp.push(expressArray[i]);
            } else {
              newExpressArray.push(expressArray[i]);
            }
          }
      }

      expressArray = newExpressArray;
    }

    return expressArray;
  }; // 路径
  // ["[",express,"]","[",express"]","[",express,"]"]
  // 变成
  // [express][express][express]


  var doit3 = function doit3(expressArray) {
    var newExpressArray = [],
        temp = [];

    for (var i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '[') {
        temp = [];
      } else if (expressArray[i] == ']') {
        newExpressArray.push(evalValue(temp));
      } else {
        temp.push(expressArray[i]);
      }
    }

    return newExpressArray;
  }; // 获取路径数组(核心是归约的思想)


  function toPath(target, expressArray, scope) {
    var newExpressArray = doit1(target, expressArray); // 其实无法就三类
    // 第一类：[express][express][express]express
    // 第二类：express
    // 第三类：[express][express][express]

    var path; // 第二类

    if (newExpressArray[0] != '[') {
      path = [evalValue(newExpressArray)];
    } // 第三类
    else if (newExpressArray[newExpressArray.length - 1] == ']') {
        path = doit3(newExpressArray);
      } // 第一类
      else {
          var lastIndex = newExpressArray.lastIndexOf(']');
          var tempPath = doit3(newExpressArray.slice(0, lastIndex + 1));
          var tempArray = newExpressArray.slice(lastIndex + 1);
          tempArray.unshift(calcValue(target, tempPath, scope));
          path = [evalValue(tempArray)];
        }

    return path;
  }

  /*!
   * 🔪 - 设置或获取指定对象上字符串表达式对应的值
   * https://github.com/hai2007/algorithm.js/blob/master/value.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */
  /**
   * express举例子：
   *
   * [00]  ["a"].b[c]
   * [01]  a
   * [02]  [0]['value-index'][index+1]
   *
   * 如果是getValue,express还可以包含运算符：
   *  + - * / %  数值运算符
   *  && || !    逻辑运算符
   *
   * [03]  flag+10
   * [04]  a.b[index+1]-10
   * [05]  (a+b)/10-c[d]
   * [06]  [((a+b)-c)*f]+d
   *
   * [07]  !flag
   * [08]  (a>0 && b<=1) || !flag
   * [09]  '(flag)' == "("+temp+")"
   * [10]  a>10?"flag1":"flag2"
   *
   */
  // 解析一段表达式

  var evalExpress = function evalExpress(target, express, scope) {
    if (arguments.length < 3) scope = {};
    var expressArray = analyseExpress(target, express, scope);
    var path = toPath(target, expressArray, scope); // 如果不是表达式

    if (path.length > 1) throw new Error("Illegal expression : " + express + "\nstep='evalExpress',path=" + path + ",expressArray=" + expressArray);
    return path[0];
  }; // 获取

  var getValue = function getValue(target, express, scope) {
    if (arguments.length < 3) scope = {};
    var expressArray = analyseExpress(target, express, scope);
    var path = toPath(target, expressArray, scope);
    return calcValue(target, path, scope);
  }; // 设置

  var setValue = function setValue(target, express, value, scope) {
    if (arguments.length < 3) scope = {};
    var expressArray = analyseExpress(target, express, scope);
    var path = toPath(target, expressArray, scope);
    var _target = target;

    for (var i = 0; i < path.length - 1; i++) {
      // 如果需要补充
      if (!(path[i] in _target)) _target[path[i]] = isArray$1(_target) ? [] : {}; // 拼接下一个

      _target = _target[path[i]];
    }

    _target[path[path.length - 1]] = value;
    return target;
  };

  function toNode(tagname) {
    if (['svg', 'circle', 'path', 'rect', 'ellipse', 'line', 'polyline', 'polygon', 'text'].indexOf(tagname) > -1) {
      return document.createElementNS('http://www.w3.org/2000/svg', tagname);
    } else {
      return document.createElement(tagname);
    }
  }

  function mountComponent(target, Component, module) {
    var component = new Component();
    var hadWillUpdate = false;

    var observeFunction = function observeFunction() {
      if (!hadWillUpdate) {
        hadWillUpdate = true;
        setTimeout(function () {
          if (isFunction(component.$beforeUpdate)) component.$beforeUpdate(); // 触发指令

          var _iterator = _createForOfIteratorHelper(component.__directives),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var directiveInstance = _step.value;

              if (isFunction(directiveInstance.instance.$update)) {
                directiveInstance.instance.$update(directiveInstance.el, {
                  type: directiveInstance.type,
                  exp: directiveInstance.exp,
                  value: directiveInstance.exp ? evalExpress(component, directiveInstance.exp) : undefined,
                  target: component
                });
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if (isFunction(component.$updated)) component.$updated();
          hadWillUpdate = false;
        }, 0);
      }
    };

    if (isFunction(component.$setup)) {
      // 获取当前组件需要双向绑定的数据、方法等
      var instance = component.$setup();

      for (var key in instance) {
        isValidKey(key); // ref

        if (instance[key].type == 'ref') {
          watcher(component, instance[key], key, observeFunction);
        } // reactive
        else if (instance[key].type == 'reactive') {
            proxy(component, instance[key], key, observeFunction);
          } // 方法
          else if (isFunction(instance[key])) {
              component[key] = instance[key];
            }
      }
    } // 记录子组件


    component.__children = []; // 记录指令

    component.__directives = [];
    var templateObj = component.__template__;

    (function createElement(index, pEl) {
      var vnode = templateObj[index],
          el = null;

      if (vnode.type == 'tag') {
        // 如果是组件
        if (vnode.name in module.__component__) {
          // 编译子组件并登记
          component.__children.push(mountComponent(pEl, module.__component__[vnode.name], module));
        } // 否则就是普通的标签
        else {
            el = toNode(vnode.name);

            for (var attrKey in vnode.attrs) {
              var attrKeys = (attrKey + ":").split(':'); // 指令

              if (attrKeys[0] in module.__directive__) {
                (function () {
                  var directiveInstance = new module.__directive__[attrKeys[0]]();
                  var type = attrKeys[1];
                  var exp = vnode.attrs[attrKey];

                  if (isFunction(directiveInstance.$inserted)) {
                    setTimeout(function () {
                      directiveInstance.$inserted(el, {
                        type: type,
                        exp: exp,
                        value: exp ? evalExpress(component, exp) : undefined,
                        target: component
                      });
                    });
                  }

                  component.__directives.push({
                    instance: directiveInstance,
                    el: el,
                    type: type,
                    exp: exp
                  });
                })();
              } // 普通属性
              else {
                  el.setAttribute(attrKey, vnode.attrs[attrKey]);
                }
            }

            if (component.__uniqueId__ != null) {
              // 配置唯一标识
              el.setAttribute(component.__uniqueId__, "");
            } // 追加孩子


            var _iterator2 = _createForOfIteratorHelper(vnode.childNodes),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var subVnode = _step2.value;
                createElement(subVnode, el);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
      } else if (vnode.type == 'text') {
        el = document.createTextNode("");
        el.textContent = vnode.content.replace(/↵/g, '\n') // 特殊转义字符进行校对
        .replace(/\&lt;/g, '<').replace(/\&gt;/g, '>').replace(/\&amp;/g, '&');
      }

      if (el != null) {
        // 追加到父亲结点
        pEl.appendChild(el);
      }
    })(0, target);

    if (isFunction(component.$mounted)) component.$mounted();
    return component;
  }

  function platform (options) {
    // 样式生效
    addStylesClient(options.styles || []); // 记录根组件

    var rootComponent = null;
    return {
      bootstrap: function bootstrap(Module) {
        var module = new Module(); // 在所有的指令和组件中登记所在模块

        var allList = _objectSpread2(_objectSpread2({}, module.__component__), module.__directive__);

        for (var key in allList) {
          allList[key].prototype._module = module;
        } // 通过启动组件，启动


        rootComponent = mountComponent(options.el, module.__bootstrapComponent__, module);
        return {
          // 根组件
          rootComponent: rootComponent,
          // 当前模块对象
          module: module
        };
      }
    };
  }

  function ref (data) {
    // 如果是定义的数据，不好监听，嵌套一层壳
    return {
      value: data,
      type: 'ref'
    };
  }

  function reactive (data) {
    // 如果是对象
    if (isObject(data)) {
      return {
        value: data,
        type: 'reactive'
      };
    } // 否则，还是用ref
    else {
        return ref(data);
      }
  }

  /**
   * 整理好对象并对外暴露调用接口
   */

  var Nefbl = {
    // 装饰器
    Module: Module,
    Component: Component,
    Directive: Directive,
    // 核心方法
    platform: platform,
    mountComponent: mountComponent,
    evalExpress: evalExpress,
    getValue: getValue,
    setValue: setValue,
    // 暴露的一些有用的方法
    ref: ref,
    reactive: reactive
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = Nefbl;
  } else {
    window.Nefbl = Nefbl;
  }

}());


        __etcpack__scope_bundle__.default= module.exports;

        
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/style.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['4']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n .open-web-word{\n\nwidth: 100%;\n\nheight: 100%;\n\nline-height: 1.15;\n\n}\n\n .open-web-word *{\n\nbox-sizing: border-box;\n\n}\n\n .open-web-word ::-ms-clear, .open-web-word ::-ms-reveal{\n\ndisplay: none;\n\n}\n\n .open-web-word img{\n\ndisplay: inline-block;\n\n}\n\n .open-web-word html{\n\nfont-family: sans-serif;\n\n}\n\n .open-web-word a{\n\ntext-decoration: none;\n\n}\n\n .open-web-word li{\n\nlist-style-type: none;\n\n}\n/* 去掉不喜欢的间距 */\n .open-web-word ul, .open-web-word ol, .open-web-word li, .open-web-word p, .open-web-word h1, .open-web-word h2, .open-web-word h3, .open-web-word h4, .open-web-word h5, .open-web-word h6{\n\n-webkit-margin-before: 0;\n\n-webkit-margin-after: 0;\n\n-webkit-padding-start: 0;\n/* 去掉不喜欢的间距，针对火狐浏览器等 */\nmargin-block-end: 0;\n\nmargin-block-start: 0;\n\npadding-inline-start: 0;\n/* 修改IE和其它浏览器不一致问题 */\npadding: 0;\n\nmargin: 0;\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/Promise.js
/*****************************************************************/
window.__etcpack__bundleSrc__['5']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * ✔️ - Promise
 * https://github.com/hai2007/polyfill.js/blob/master/Promise.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_args__=window.__etcpack__getBundle('6');
var globalNAMESPACE =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('7');
var isFunction=__etcpack__scope_args__.isFunction;
var isObject=__etcpack__scope_args__.isObject;
var isArray=__etcpack__scope_args__.isArray;

__etcpack__scope_args__=window.__etcpack__getBundle('17');
var doResolve=__etcpack__scope_args__.doResolve;
var changeState=__etcpack__scope_args__.changeState;
var triggerEvent=__etcpack__scope_args__.triggerEvent;


function Promise(doback) {

    if (!(this instanceof Promise)) {

        // 所有的报错方式和内容我们都尽力和原生的保持一致，下同
        throw new TypeError('undefined is not a promise');
    }

    if (!(isFunction(doback))) {
        throw new TypeError('Promise resolver ' + doback + ' is not a function');
    }

    /**
     * 参数初始化
     */

    // 当前的值
    this.__value = undefined;

    // 记录着由于then，catch或finally登记的方法
    // Array<onFulfilled|undefined, onRejected|undefined, callback|undefined>
    this.__hocks = [];

    // 状态
    this.__state = 'pending';

    /**
     * 准备完毕以后，开始处理
     */
    doResolve(doback, this);
}

// 添加辅助方法
Promise.prototype.$$changeState = changeState;
Promise.prototype.$$triggerEvent = triggerEvent;

/**
 * 原型上的方法
 */

// 添加解决(fulfillment)和拒绝(rejection)回调到当前 promise,
// 返回一个新的 promise,
// 将以回调的返回值来resolve。
Promise.prototype.then = function (onFulfilled, onRejected) {

    this.__hocks.push([onFulfilled, onRejected, undefined]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;

};

// 添加一个拒绝(rejection) 回调到当前 promise, 返回一个新的promise。
// 当这个回调函数被调用，
// 新 promise 将以它的返回值来resolve，
// 否则如果当前promise 进入fulfilled状态，
// 则以当前promise的完成结果作为新promise的完成结果。
Promise.prototype.catch = function (onRejected) {

    this.__hocks.push([undefined, onRejected, undefined]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;

};

// 添加一个事件处理回调于当前promise对象，
// 并且在原promise对象解析完毕后，
// 返回一个新的promise对象。
// 回调会在当前promise运行完毕后被调用，
// 无论当前promise的状态是完成(fulfilled)还是失败(rejected)。
Promise.prototype.finally = function (callback) {

    this.__hocks.push([undefined, undefined, callback]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;


};

/**
 * 静态方法
 */

// 返回一个状态由给定value决定的Promise对象。
// 如果该值是thenable(即，带有then方法的对象)，
// 返回的Promise对象的最终状态由then方法执行决定；
// 否则的话(该value为空，基本类型或者不带then方法的对象),
// 返回的Promise对象状态为fulfilled，
// 并且将该value传递给对应的then方法。
// 通常而言，如果您不知道一个值是否是Promise对象，使用Promise.resolve(value) 来返回一个Promise对象,
// 这样就能将该value以Promise对象形式使用。
Promise.resolve = function (value) {

    if (isObject(value) && value.constructor === Promise) {
        return value;
    }

    return new Promise(function (resolve) {
        resolve(value);
    });

};

// 返回一个状态为失败的Promise对象，
// 并将给定的失败信息传递给对应的处理方法。
Promise.reject = function (reason) {

    return new Promise(function (resolve, reject) {
        reject(reason);
    });

};

// 这个方法返回一个新的promise对象，
// 该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功，
// 一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。
// 这个新的promise对象在触发成功状态以后，
// 会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值，
// 顺序跟iterable的顺序保持一致；
// 如果这个新的promise对象触发了失败状态，
// 它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息。
// Promise.all方法常被用于处理多个promise对象的状态集合.
Promise.all = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var resultData = Array.prototype.slice.call(iterable), num = 0;

        if (resultData.length == 0) resolve([]);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                if (item.__state == 'rejected') {

                    // 如果遇到第一个失败的，拒绝即可
                    reject(item.__value);
                } else {

                    resultData[index] = item.__value;

                    if (num == resultData.length) {
                        resolve(resultData);
                    }
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < resultData.length; i++) {
            doHelp(i, resultData[i]);
        }

    });

};

// 等到所有promises都已敲定（settled）（每个promise都已兑现（fulfilled）或已拒绝（rejected））。
// 返回一个promise，该promise在所有promise完成后完成。并带有一个对象数组，每个对象对应每个promise的结果。
Promise.allSettled = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var resultData = Array.prototype.slice.call(iterable), num = 0;

        if (resultData.length == 0) resolve([]);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                resultData[index] = {
                    status: item.__state
                };

                if (item.__state == 'fulfilled') {
                    resultData[index].value = item.__value;
                } else {
                    resultData[index].reason = item.__value;
                }

                if (num == resultData.length) {
                    resolve(resultData);
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < resultData.length; i++) {
            doHelp(i, resultData[i]);
        }

    });

};
// 收一个Promise对象的集合，
// 当其中的一个 promise 成功，
// 就返回那个成功的promise的值。
Promise.any = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var num = 0;

        if (iterable.length == 0) resolve(undefined);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                if (item.__state == 'rejected') {

                    if (num == iterable.length) {

                        // 为了兼容性，我们放弃AggregateError
                        return reject(new Error('All promises were rejected'));
                    }

                } else {

                    // 遇到第一个成功的，标记解决即可
                    resolve(item.__value);

                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < iterable.length; i++) {
            doHelp(i, iterable[i]);
        }

    });
};

// 当iterable参数里的任意一个子promise被成功或失败后，
// 父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，
// 并返回该promise对象。
Promise.race = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        if (iterable.length == 0) resolve(undefined);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                if (item.__state == 'rejected') {
                    reject(item.__value);
                } else {
                    resolve(item.__value);
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < iterable.length; i++) {
            doHelp(i, iterable[i]);
        }

    });
};

// 如果Promise不存在
if (!('Promise' in globalNAMESPACE)) {
    globalNAMESPACE['Promise'] = Promise;
}

// 由于不同浏览器对一些具体的方法兼容不一样
// （比如一些浏览器支持Promise，可是不支持某个方法，需要对该方法进行兼容）
// 需要进一步嗅探
// 推迟支持

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/.inner/globalNAMESPACE.js
/*****************************************************************/
window.__etcpack__bundleSrc__['6']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var globalNAMESPACE = (function () {

    // 浏览器环境
    if (typeof window !== 'undefined') return window;

    // nodejs环境
    if (typeof global !== 'undefined') return global;

    throw new Error('The current environment is not known!');

})();

// 获取当前环境的全局变量
__etcpack__scope_bundle__.default= globalNAMESPACE;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/type.js
/*****************************************************************/
window.__etcpack__bundleSrc__['7']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var _isObject =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('9');
var _isBoolean =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('11');
var _isNumber =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('12');
var _isString =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('13');
var _isSymbol =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('14');
var _isFunction =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('15');
var _isError =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('16');
var _isPlainObject =__etcpack__scope_args__.default;


var domTypeHelp = function (types, value) {
    return value !== null && typeof value === 'object' &&
        types.indexOf(value.nodeType) > -1 &&
        !_isPlainObject(value);
};

/*!
 * 💡 - 值类型判断方法
 * https://github.com/hai2007/tool.js/blob/master/type.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2020-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_bundle__.isObject = _isObject;

// 基本类型
__etcpack__scope_bundle__.isUndefined = function (input) { return input === undefined };
__etcpack__scope_bundle__.isNull = function (input) { return input === null };
__etcpack__scope_bundle__.isBoolean = _isBoolean;
__etcpack__scope_bundle__.isNumber = _isNumber;
__etcpack__scope_bundle__.isString = _isString;
__etcpack__scope_bundle__.isSymbol = _isSymbol;

// 引用类型
__etcpack__scope_bundle__.isFunction = _isFunction;
__etcpack__scope_bundle__.isArray = function (input) { return Array.isArray(input) };
__etcpack__scope_bundle__.isError = _isError;
__etcpack__scope_bundle__.isPlainObject = _isPlainObject;

// 结点类型
__etcpack__scope_bundle__.isElement = function (input) { return domTypeHelp([1, 9, 11], input) };
__etcpack__scope_bundle__.isAttribute = function (input) { return domTypeHelp([2], input) };
__etcpack__scope_bundle__.isText = function (input) { return domTypeHelp([3], input) };
__etcpack__scope_bundle__.isComment = function (input) { return domTypeHelp([8], input) };

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isObject.js
/*****************************************************************/
window.__etcpack__bundleSrc__['8']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /**
 * 判断一个值是不是Object。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Object返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return value != null && (type === 'object' || type === 'function');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isBoolean.js
/*****************************************************************/
window.__etcpack__bundleSrc__['9']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('10');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是Boolean。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Boolean返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    return value === true || value === false ||
        (value !== null && typeof value === 'object' && getType(value) === '[object Boolean]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/getType.js
/*****************************************************************/
window.__etcpack__bundleSrc__['10']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var toString = Object.prototype.toString;

/**
 * 获取一个值的类型字符串[object type]
 *
 * @param {*} value 需要返回类型的值
 * @returns {string} 返回类型字符串
 */
__etcpack__scope_bundle__.default= function (value) {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    return toString.call(value);
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isNumber.js
/*****************************************************************/
window.__etcpack__bundleSrc__['11']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('10');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是number。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是number返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    return typeof value === 'number' || (
        value !== null && typeof value === 'object' &&
        getType(value) === '[object Number]'
    );
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isString.js
/*****************************************************************/
window.__etcpack__bundleSrc__['12']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('10');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是String。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是String返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return type === 'string' || (type === 'object' && value != null && !Array.isArray(value) && getType(value) === '[object String]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isSymbol.js
/*****************************************************************/
window.__etcpack__bundleSrc__['13']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('10');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是symbol。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是symbol返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return type === 'symbol' || (type === 'object' && value !== null && getType(value) === '[object Symbol]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isFunction.js
/*****************************************************************/
window.__etcpack__bundleSrc__['14']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('10');
var getType =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('8');
var isObject =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是Function。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Function返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    if (!isObject(value)) {
        return false;
    }

    var type = getType(value);
    return type === '[object Function]' || type === '[object AsyncFunction]' ||
        type === '[object GeneratorFunction]' || type === '[object Proxy]';
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isError.js
/*****************************************************************/
window.__etcpack__bundleSrc__['15']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('16');
var isPlainObject =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('10');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是错误对象。
 * `Error`, `EvalError`, `RangeError`, `ReferenceError`,`SyntaxError`, `TypeError`, or `URIError`
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是错误对象返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    if (value === null || typeof value !== 'object') {
        return false;
    }

    var type = getType(value);
    return type === '[object Error]' || type === '[object DOMException]' ||
        (typeof value.message === 'string' && typeof value.name === 'string' && !isPlainObject(value));
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isPlainObject.js
/*****************************************************************/
window.__etcpack__bundleSrc__['16']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('10');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是一个朴素的'对象'
 * 所谓"纯粹的对象"，就是该对象是通过"{}"或"new Object"创建的
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是朴素的'对象'返回true，否则返回false
 */

__etcpack__scope_bundle__.default= function (value) {
    if (value === null || typeof value !== 'object' || getType(value) != '[object Object]') {
        return false;
    }

    // 如果原型为null
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }

    var proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/.inner/Promise/doResolve.js
/*****************************************************************/
window.__etcpack__bundleSrc__['17']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('7');
var isFunction=__etcpack__scope_args__.isFunction;
var isObject=__etcpack__scope_args__.isObject;


__etcpack__scope_bundle__.changeState = function (data, state) {

    // 更改状态
    this.__state = state;
    this.__value = data;

    // 由于状态改变了，触发对then，finnaly，catch等的执行更新
    this.$$triggerEvent();

};

__etcpack__scope_bundle__.triggerEvent = function () {

    // 这个方法的任务就是把__hocks中记录的方法依次执行了
    // 什么时候会停止？两种情况：
    // 1.队列执行完了
    // 2.遇到其中一个执行方法返回Promise

    var currentHock = null;

    // 同意状态就去寻找下一个onFulfilled
    // 拒绝状态就去寻找下一个onRejected
    // 数组下标0和1分别记录这两个状态，因此先根据状态确定下标即可
    var index = this.__state == 'fulfilled' ? 0 : 1, i;

    // 可能找到，可能到结尾都没有找到
    while (this.__hocks.length > 0) {

        if (isFunction(this.__hocks[0][index])) {
            currentHock = this.__hocks.shift();
            break;
        }

        // 对于路过的finally执行一下
        else if (isFunction(this.__hocks[0][2])) {
            this.__hocks[0][2]();
        }

        this.__hocks.shift();

    }

    // 如果找到了
    if (currentHock !== null) {
        var result = currentHock[index](this.__value);

        // 如果是Promise
        if (isObject(result) && result.constructor === this.constructor) {
            for (var i = 0; i < this.__hocks.length; i++) {
                result.__hocks.push(this.__hocks[i]);
                if (result.__state != 'pending') result.$$triggerEvent();
            }

            this.then = function (onFulfilled, onRejected) {

                result.then(onFulfilled, onRejected);
            };
            this.catch = function (onRejected) {

                result.catch(onRejected);
            };
            this.finally = function (callback) {

                result.finally(callback);
            };

        }

        // 否则
        else {

            this.__value = result;
            this.__state = "fulfilled";
            this.$$triggerEvent();

        }

    }

};

__etcpack__scope_bundle__.doResolve = function (doback, that) {

    // 防止重复修改状态
    var done = false;

    try {
        doback(function (value) {
            if (done) return; done = true;
            that.$$changeState(value, 'fulfilled');

        }, function (reason) {
            if (done) return; done = true;
            that.$$changeState(reason, 'rejected');

        });
    } catch (error) {
        if (done) return; done = true;
        that.$$changeState(error, 'rejected');
    }

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/app.module.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['18']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__etcpack__scope_args__=window.__etcpack__getBundle('2');
var Module=__etcpack__scope_args__.Module;
 // 组件

__etcpack__scope_args__=window.__etcpack__getBundle('19');
var AppComponent =__etcpack__scope_args__.default;
 // 指令

__etcpack__scope_args__=window.__etcpack__getBundle('23');
var uiBind =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('24');
var uiModel =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('26');
var uiOn =__etcpack__scope_args__.default;


var _class = (_dec = Module({
  declarations: [AppComponent, uiBind, uiModel, uiOn],
  imports: [],
  exports: [],
  bootstrap: AppComponent
}), _dec(_class2 = /*#__PURE__*/_createClass(function _class2() {
  _classCallCheck(this, _class2);
})) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['19']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

__etcpack__scope_args__=window.__etcpack__getBundle('2');
var Component=__etcpack__scope_args__.Component;
var ref=__etcpack__scope_args__.ref;

__etcpack__scope_args__=window.__etcpack__getBundle('20');
var ColorsPicker =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('21');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('22');
var template =__etcpack__scope_args__.default;


var _class = (_dec = Component({
  selector: "app-root",
  template: template,
  styles: [style]
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);

    _defineProperty(this, "fontColor", void 0);
  }

  _createClass(_class2, [{
    key: "$setup",
    value: // 文字颜色
    function $setup() {
      return {
        fontColor: ref('#000')
      };
    } // 选择颜色

  }, {
    key: "selectColor",
    value: function selectColor(e) {
      var _this = this;

      ColorsPicker.openPicker(this.fontColor, function (color) {
        _this.fontColor = color;
        e.target.style.backgroundColor = color;
      }, '选择文字颜色');
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/colors-picker/dist/colors-picker.min.js
/*****************************************************************/
window.__etcpack__bundleSrc__['20']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

        var module={
            exports:{}
        };
        var exports=module.exports;

        /*!
 * Colors Picker - 一个类似浏览器调试工具中颜色选择器的H5版本的小组件。
 * git+https://github.com/hai2007/colors-picker.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 0.3.1
 *
 * Copyright (c) 2021 hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Wed Dec 01 2021 22:53:20 GMT+0800 (GMT+08:00)
 */
(function(){"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function(obj){return typeof obj}}else{_typeof=function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread()}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter)}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _createForOfIteratorHelper(o,allowArrayLike){var it=typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;var F=function(){};return{s:F,n:function(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]}},e:function(e){throw e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var normalCompletion=true,didErr=false,err;return{s:function(){it=it.call(o)},n:function(){var step=it.next();normalCompletion=step.done;return step},e:function(e){didErr=true;err=e},f:function(){try{if(!normalCompletion&&it.return!=null)it.return()}finally{if(didErr)throw err}}}}var REGEXP={whitespace:"[\\x20\\t\\r\\n\\f]"};function getStyle(dom,name){var allStyle=document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(dom,null):dom.currentStyle;return typeof name==="string"?allStyle.getPropertyValue(name):allStyle}
/*!
   * 🌐 - 颜色格式化
   * https://github.com/hai2007/browser.js/blob/master/formatColor.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2021-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */function formatColor(color){var colorNode=document.getElementsByTagName("head")[0];colorNode.style["color"]=color;var rgba=getStyle(colorNode,"color");var rgbaArray=rgba.replace(/^rgba?\(([^)]+)\)$/,"$1").split(new RegExp("\\,"+REGEXP.whitespace));return[+rgbaArray[0],+rgbaArray[1],+rgbaArray[2],rgbaArray[3]==undefined?1:+rgbaArray[3]]}
/*!
   * 🌐 - 提供常用的DOM操作方法
   * https://github.com/hai2007/browser.js/blob/master/xhtml.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2021-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */var namespace={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};var xhtml={stopPropagation:function stopPropagation(event){event=event||window.event;if(event.stopPropagation){event.stopPropagation()}else{event.cancelBubble=true}},preventDefault:function preventDefault(event){event=event||window.event;if(event.preventDefault){event.preventDefault()}else{event.returnValue=false}},isNode:function isNode(param){return param&&(param.nodeType===1||param.nodeType===9||param.nodeType===11)},bind:function bind(dom,eventType,callback){if(dom.constructor===Array||dom.constructor===NodeList||dom.constructor===HTMLCollection){for(var i=0;i<dom.length;i++){this.bind(dom[i],eventType,callback)}return}if(window.attachEvent)dom.attachEvent("on"+eventType,callback);else dom.addEventListener(eventType,callback,false)},unbind:function unbind(dom,eventType,handler){if(dom.constructor===Array||dom.constructor===NodeList||dom.constructor===HTMLCollection){for(var i=0;i<dom.length;i++){this.unbind(dom[i],eventType,handler)}return}if(window.detachEvent)dom.detachEvent("on"+eventType,handler);else dom.removeEventListener(eventType,handler,false)},find:function find(context,selectFun,tagName){if(!this.isNode(context))return[];var nodes=context.getElementsByTagName(tagName||"*");var result=[];for(var i=0;i<nodes.length;i++){if(this.isNode(nodes[i])&&(typeof selectFun!="function"||selectFun(nodes[i])))result.push(nodes[i])}return result},children:function children(dom,selectFun){var nodes=dom.childNodes;var result=[];for(var i=0;i<nodes.length;i++){if(this.isNode(nodes[i])&&(typeof selectFun!="function"||selectFun(nodes[i])))result.push(nodes[i])}return result},hasClass:function hasClass(dom,clazzs,notStrict){if(clazzs.constructor!==Array)clazzs=[clazzs];var class_str=" "+(dom.getAttribute("class")||"")+" ";for(var i=0;i<clazzs.length;i++){if(class_str.indexOf(" "+clazzs[i]+" ")>=0){if(notStrict)return true}else{if(!notStrict)return false}}return true},removeClass:function removeClass(dom,clazz){var oldClazz=" "+(dom.getAttribute("class")||"")+" ";var newClazz=oldClazz.replace(" "+clazz.trim()+" "," ");dom.setAttribute("class",newClazz.trim())},addClass:function addClass(dom,clazz){if(this.hasClass(dom,clazz))return;var oldClazz=dom.getAttribute("class")||"";dom.setAttribute("class",oldClazz+" "+clazz)},toNode:function toNode(template,isSvg){var frame;if(isSvg)frame=document.createElementNS(namespace.svg,"svg");else{var frameTagName="div";if(/^<tr[> ]/.test(template)){frameTagName="tbody"}else if(/^<th[> ]/.test(template)||/^<td[> ]/.test(template)){frameTagName="tr"}else if(/^<thead[> ]/.test(template)||/^<tbody[> ]/.test(template)){frameTagName="table"}frame=document.createElement(frameTagName)}frame.innerHTML=template;var childNodes=frame.childNodes;for(var i=0;i<childNodes.length;i++){if(this.isNode(childNodes[i]))return childNodes[i]}},trigger:function trigger(dom,eventType){if(document.createEventObject){dom.fireEvent("on"+eventType,document.createEventObject())}else{var _event=document.createEvent("HTMLEvents");_event.initEvent(eventType,true,false);dom.dispatchEvent(_event)}},getStyle:function getStyle(dom,name){var allStyle=document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(dom,null):dom.currentStyle;return typeof name==="string"?allStyle.getPropertyValue(name):allStyle},offsetPosition:function offsetPosition(dom){var left=0;var top=0;top=dom.offsetTop;left=dom.offsetLeft;dom=dom.offsetParent;while(dom){top+=dom.offsetTop;left+=dom.offsetLeft;dom=dom.offsetParent}return{left:left,top:top}},mousePosition:function mousePosition(dom,event){var bounding=dom.getBoundingClientRect();if(!event||!event.clientX)throw new Error("Event is necessary!");return{x:event.clientX-bounding.left,y:event.clientY-bounding.top}},remove:function remove(dom){dom.parentNode.removeChild(dom)},setStyles:function setStyles(dom,styles){for(var key in styles){dom.style[key]=styles[key]}},size:function size(dom,type){var elemHeight,elemWidth;if(type=="content"){elemWidth=dom.clientWidth-(this.getStyle(dom,"padding-left")+"").replace("px","")-(this.getStyle(dom,"padding-right")+"").replace("px","");elemHeight=dom.clientHeight-(this.getStyle(dom,"padding-top")+"").replace("px","")-(this.getStyle(dom,"padding-bottom")+"").replace("px","")}else if(type=="padding"){elemWidth=dom.clientWidth;elemHeight=dom.clientHeight}else if(type=="border"){elemWidth=dom.offsetWidth;elemHeight=dom.offsetHeight}else if(type=="scroll"){elemWidth=dom.scrollWidth;elemHeight=dom.scrollHeight}else{elemWidth=dom.offsetWidth;elemHeight=dom.offsetHeight}return{width:elemWidth,height:elemHeight}},append:function append(el,template){var node=this.isNode(template)?template:this.toNode(template);el.appendChild(node);return node},prepend:function prepend(el,template){var node=this.isNode(template)?template:this.toNode(template);el.insertBefore(node,el.childNodes[0]);return node},after:function after(el,template){var node=this.isNode(template)?template:this.toNode(template);el.parentNode.insertBefore(node,el.nextSibling);return node},before:function before(el,template){var node=this.isNode(template)?template:this.toNode(template);el.parentNode.insertBefore(node,el);return node}};function getColorByDeep(deep){var distDeep=1/6;var r,g,b;if(deep<=distDeep){r=255;g=0;b=deep/distDeep*255}else if(deep<=2*distDeep){r=(distDeep*2-deep)/distDeep*255;g=0;b=255}else if(deep<=3*distDeep){r=0;g=(deep-2*distDeep)/distDeep*255;b=255}else if(deep<=4*distDeep){r=0;g=255;b=(distDeep*4-deep)/distDeep*255}else if(deep<=5*distDeep){r=(deep-distDeep*4)/distDeep*255;g=255;b=0}else{r=255;g=(distDeep*6-deep)/distDeep*255;b=0}return[+r.toFixed(0),+g.toFixed(0),+b.toFixed(0)]}function getColorByPosition(r,g,b,x,y){var width=300,height=160;var _r=x/width*(r-255)+255;var _g=x/width*(g-255)+255;var _b=x/width*(b-255)+255;_r=(160-y)/height*_r;_g=(160-y)/height*_g;_b=(160-y)/height*_b;return[_r.toFixed(0),_g.toFixed(0),_b.toFixed(0)]}function drawColorCanvas(r,g,b){var canvas=document.getElementById("colors-picker-dialog_canvas0");var width=300,height=160;var painter=canvas.getContext("2d");for(var i=0;i<width;i++){for(var j=0;j<height;j++){var rgb=getColorByPosition(r,g,b,i,j);painter.fillStyle="rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")";painter.fillRect(i,j,1,1)}}}function calcDeepWidthColor(r,g,b){var distDeep=1/6;if(r==255&&g==0){return b/255*distDeep}else if(g==0&&b==255){return 2*distDeep-r/255*distDeep}else if(r==0&&b==255){return 2*distDeep+g/255*distDeep}else if(r==0&&g==255){return 4*distDeep-b/255*distDeep}else if(g==255&&b==0){return 4*distDeep+r/255*distDeep}else{return 6*distDeep-g/255*distDeep}}function updateColor(dialog){var color_rgb=getColorByPosition.apply(void 0,_toConsumableArray(dialog._colors_picker_.color_rgb).concat(_toConsumableArray(dialog._colors_picker_.pointer_position)));var color_rgba=[].concat(_toConsumableArray(color_rgb),[dialog._colors_picker_.color_alpha]);dialog._colors_picker_.target._color_=color_rgba;var color="rgba("+color_rgba[0]+","+color_rgba[1]+","+color_rgba[2]+","+color_rgba[3]+")";document.getElementById("colors-picker-dialog_color").style.backgroundColor=color;document.getElementById("colors-picker-dialog_canvas0_btn").style.backgroundColor=color}function dragdrop(){var el=document.getElementById("colors-picker-dialog_move");xhtml.bind(el,"mousedown",(function mousedown(event){el.setCapture&&el.setCapture();var _el=el.parentNode;var lf=event.clientX;var tp=event.clientY;var left=xhtml.getStyle(_el,"left").replace("px","");var top=xhtml.getStyle(_el,"top").replace("px","");function mousemove(event){_el.style.left=left- -event.clientX-lf+"px";_el.style.top=top- -event.clientY-tp+"px"}xhtml.bind(document,"mousemove",mousemove);xhtml.bind(document,"mouseup",(function(event){xhtml.unbind(document,"mousemove",mousemove);_el.releaseCapture&&_el.releaseCapture();return false}))}))}function mount(target,color,callback,title){var dialog=document.getElementById("colors-picker-dialog"),doit;target._color_=color;var updateColorCanvas=true;if(!dialog){(function(){xhtml.append(document.body,"<div id='colors-picker-dialog'\n                style='\n                    position: fixed;\n                    box-shadow: 0 0 7px 1px #9393a0;\n                    border-radius: 5px;\n                    background-color: white;\n                    font-size:0;\n                    user-select: none;\n                '>\n            <div id='colors-picker-dialog_move' style='\n                font-size: 16px;\n                text-align: center;\n                cursor: move;\n                border-radius: 5px 5px 0 0;\n                line-height: 30px;\n                background-color: #ffffff;\n                color: #252020;\n            '></div>\n            <div style='position: relative; overflow: hidden;' id='colors-picker-dialog_canvas0_frame'>\n                <canvas\n                    id='colors-picker-dialog_canvas0'\n                    style='width:300px;height:160px;'\n                    width='300px'\n                    height='160px'>\n                        非常抱歉，您的浏览器不支持canvas!\n                </canvas>\n                <span\n                    style='\n                        position: absolute;\n                        position: absolute;\n                        width: 12px;\n                        height: 12px;\n                        border-radius: 50%;\n                        right: -6px;\n                        top: -6px;\n                        box-shadow: 0 0 5px 3px #75757e;\n                        cursor:pointer;\n                    ' id='colors-picker-dialog_canvas0_btn'></span>\n            </div>\n            <div style='text-align:center;margin:20px 0;'>\n                <div\n                    id='colors-picker-dialog_color'\n                    style='\n                        display:inline-block;\n                        width:40px;\n                        height:40px;\n                        box-shadow: rgb(117, 117, 126) 0px 0px 9px 0px;\n                        border-radius:50%;\n                        margin-right:25px;\n                '></div>\n                <div style='display:inline-block;'>\n                    <div style='position: relative;' id='colors-picker-dialog_canvas1_frame'>\n                        <div id='colors-picker-dialog_canvas1'\n                            style='\n                                width:200px;\n                                height:16px;\n                                background-image: linear-gradient(to right, #f00, #f0f,#00f,#0ff,#0f0,#ff0,#f00); '>\n                        </div>\n                        <span\n                            style='\n                                position: absolute;\n                                width: 22px;\n                                height: 22px;\n                                display: inline-block;\n                                border-radius: 50%;\n                                right: -11px;\n                                top: -3.5px;\n                                cursor:pointer;\n                                box-shadow: 0 0 2px 0px grey;\n                                background: #faf8f8;'\n                            id='colors-picker-dialog_canvas1_btn'></span>\n                    </div>\n                    <div style='margin-top:10px;position: relative;' id='colors-picker-dialog_canvas2_frame'>\n                        <div id='colors-picker-dialog_canvas2'\n                            style='\n                                width:200px;\n                                height:16px;\n                                background-image: linear-gradient(to right, #f000, red); '>\n                        </div>\n                        <span\n                            style='\n                                position: absolute;\n                                width: 22px;\n                                height: 22px;\n                                box-shadow: 0 0 2px 0px grey;\n                                display: inline-block;\n                                border-radius: 50%;\n                                right: -11px;\n                                top: -3.5px;\n                                cursor:pointer;\n                                background: #faf8f8;'\n                            id='colors-picker-dialog_canvas2_btn'></span>\n                    </div>\n                </div>\n            </div>\n            <div style='text-align:center;padding:10px;'>\n                <button\n                    id='colors-picker-dialog_btn_cancel'\n                    style='\n                        margin-right:30px;\n                        background-color:white;\n                        width:90px;\n                        border-radius:5px;\n                        cursor:pointer;\n                    '>取消</button>\n                <button\n                    id='colors-picker-dialog_btn_checked'\n                    style='\n                        background-color:#449cf6;\n                        color:white;width:90px;\n                        border-radius:5px;\n                        cursor:pointer;\n                    '>确定</button>\n            </div>\n        </div>");dragdrop();dialog=document.getElementById("colors-picker-dialog");dialog.style.display="none";var btn_flag=-1;xhtml.bind(document.getElementById("colors-picker-dialog_canvas0_btn"),"mousedown",(function(){btn_flag=0}));xhtml.bind(document.getElementById("colors-picker-dialog_canvas1_btn"),"mousedown",(function(){btn_flag=1}));xhtml.bind(document.getElementById("colors-picker-dialog_canvas2_btn"),"mousedown",(function(){btn_flag=2}));var doMousemove=function doMousemove(event){if([0,1,2].indexOf(btn_flag)>-1){var position=xhtml.mousePosition(document.getElementById("colors-picker-dialog_canvas"+btn_flag+"_frame"),event);var btn=document.getElementById("colors-picker-dialog_canvas"+btn_flag+"_btn");if(btn_flag===0){if(position.y>160||position.y<0||position.x<0||position.x>300)return;btn.style.left=position.x-6+"px";btn.style.top=position.y-6+"px";dialog._colors_picker_.pointer_position=[position.x,position.y];updateColor(dialog)}else{if(position.x<0||position.x>200)return;btn.style.left=position.x-11+"px";if(btn_flag===1){var color_rgb=getColorByDeep(position.x/200);document.getElementById("colors-picker-dialog_canvas2").style.backgroundImage="linear-gradient(to right, #f000, rgb("+color_rgb[0]+","+color_rgb[1]+","+color_rgb[2]+"))";if(updateColorCanvas){updateColorCanvas=false;setTimeout((function(){drawColorCanvas.apply(void 0,_toConsumableArray(color_rgb));updateColorCanvas=true;dialog._colors_picker_.color_rgb=color_rgb;updateColor(dialog)}),10)}}else{dialog._colors_picker_.color_alpha=position.x/200;updateColor(dialog)}}}};var _loop=function _loop(canvasIndex){xhtml.bind(document.getElementById("colors-picker-dialog_canvas"+canvasIndex),"click",(function(event){btn_flag=canvasIndex;doMousemove(event);btn_flag=-1}))};for(var canvasIndex=0;canvasIndex<3;canvasIndex++){_loop(canvasIndex)}xhtml.bind(document.body,"mousemove",doMousemove);xhtml.bind(document.body,"mouseup",(function(){btn_flag=-1}));xhtml.bind(document.getElementById("colors-picker-dialog_btn_cancel"),"click",(function(){dialog.style.display="none"}));xhtml.bind(document.getElementById("colors-picker-dialog_btn_checked"),"click",(function(){dialog.style.display="none";var colorArray=dialog._colors_picker_.target._color_;dialog._colors_picker_.callback("rgba("+colorArray[0]+","+colorArray[1]+","+colorArray[2]+","+colorArray[3]+")")}))})()}doit=function doit(){dialog._colors_picker_={callback:callback,target:target,color_rgb:[target._color_[0],target._color_[1],target._color_[2]],color_alpha:target._color_[3],pointer_position:[300,0]};var winSize={width:window.innerWidth,height:window.innerHeight};dialog.style.left=winSize.width*.5-150+"px";dialog.style.top=winSize.height*.5-142.5+"px";var rgba=dialog._colors_picker_.target._color_;drawColorCanvas.apply(void 0,_toConsumableArray(rgba));document.getElementById("colors-picker-dialog_canvas2").style.backgroundImage="linear-gradient(to right, #f000, rgb("+rgba[0]+","+rgba[1]+","+rgba[2]+"))";document.getElementById("colors-picker-dialog_canvas1_btn").style.left=calcDeepWidthColor.apply(void 0,_toConsumableArray(rgba))*200-11+"px";document.getElementById("colors-picker-dialog_canvas2_btn").style.left=rgba[3]*200-11+"px";document.getElementById("colors-picker-dialog_color").style.backgroundColor="rgba("+rgba[0]+","+rgba[1]+","+rgba[2]+","+rgba[3]+")";document.getElementById("colors-picker-dialog_move").innerText=title;dialog.style.display="block"};xhtml.bind(target,"click",doit)}var ColorsPicker=function ColorsPicker(el,initColor){var title=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"选择颜色";var target=el;var color=formatColor(initColor);var callbacks=[];var ColorsPickerInstance={then:function then(callback){callbacks.push(callback);return ColorsPickerInstance}};mount(target,color,(function(_color){var _iterator=_createForOfIteratorHelper(callbacks),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var callback=_step.value;callback(_color)}}catch(err){_iterator.e(err)}finally{_iterator.f()}}),title);return ColorsPickerInstance};var helpEl=null,doback;ColorsPicker.openPicker=function(initColor,_doback){var title=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"选择颜色";doback=_doback;if(helpEl===null){helpEl=document.createElement("button");ColorsPicker(helpEl,initColor,title).then((function(color){doback(color)}))}else{var color=formatColor(initColor);var dialog=document.getElementById("colors-picker-dialog");document.getElementById("colors-picker-dialog_move").innerText=title;dialog._colors_picker_.color_rgb=[color[0],color[1],color[2]];dialog._colors_picker_.color_alpha=color[3];dialog._colors_picker_.target._color_=color}helpEl.click()};if((typeof module==="undefined"?"undefined":_typeof(module))==="object"&&_typeof(module.exports)==="object"){module.exports=ColorsPicker}else{window.ColorsPicker=ColorsPicker}})();

        __etcpack__scope_bundle__.default= module.exports;

        
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/index.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['21']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n .open-web-word{\n\nbackground-color: #eff2f2;\n\n}\n\n .open-web-word>div.menu{\n\nborder-bottom: 1px solid #cccccc;\n\nheight: 30px;\n\n}\n\n .open-web-word>div.menu>.logo{\n\nbackground-image: url('./image/logo.png');\n\npadding-left: 30px;\n\npadding-right: 10px;\n\nheight: 30px;\n\nline-height: 30px;\n\ndisplay: inline-block;\n\nvertical-align: top;\n\nbackground-size: auto 70%;\n\nbackground-repeat: no-repeat;\n\nbackground-position: 5px center;\n\nfont-size: 12px;\n\ncursor: pointer;\n\ncolor: rgb(0, 0, 0);\n\nfont-weight: 800;\n\n}\n\n .open-web-word>div.menu>.logo:hover{\n\ntext-decoration: underline;\n\n}\n\n .open-web-word>div.menu>span{\n\nheight: 30px;\n\nline-height: 30px;\n\ndisplay: inline-block;\n\nvertical-align: top;\n\n}\n\n .open-web-word>div.menu>span.line{\n\nwidth: 1px;\n\nbackground-color: #cccccc;\n\n}\n\n .open-web-word>div.menu>span.btn{\n\nfont-size: 0px;\n\nwidth: 30px;\n\ncursor: pointer;\n\nbackground-position: center;\n\nbackground-repeat: no-repeat;\n\n}\n\n .open-web-word>div.menu>span.btn.format{\n\nbackground-image: url('./image/format.png');\n\n}\n\n .open-web-word>div.menu>span.btn.weight{\n\nbackground-image: url('./image/weight.png');\n\n}\n\n .open-web-word>div.menu>span.btn.italic{\n\nbackground-image: url('./image/italic.png');\n\n}\n\n .open-web-word>div.menu>span.btn.underline{\n\nbackground-image: url('./image/underline.png');\n\n}\n\n .open-web-word>div.menu>span.btn.line-through{\n\nbackground-image: url('./image/line-through.png');\n\n}\n\n .open-web-word>div.menu>span.btn.left{\n\nbackground-image: url('./image/left.png');\n\n}\n\n .open-web-word>div.menu>span.btn.center{\n\nbackground-image: url('./image/center.png');\n\n}\n\n .open-web-word>div.menu>span.btn.right{\n\nbackground-image: url('./image/right.png');\n\n}\n\n .open-web-word>div.menu>span.btn.color>i{\n\ndisplay: inline-block;\n\nwidth: 14px;\n\nheight: 14px;\n\noutline: 1px solid rgb(255, 255, 255);\n\nmargin: 8px;\n\nbackground-color: #000;\n\n}\n\n .open-web-word>div.menu>span.btn.img{\n\nbackground-image: url('./image/img.png');\n\n}\n\n .open-web-word>div.menu>span.btn.link{\n\nbackground-image: url('./image/link.png');\n\n}\n\n .open-web-word>div.content{\n\nheight: calc(100% - 30px);\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['22']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class=\"open-web-word\">\n\n    <!-- 顶部菜单 -->\n    <div class=\"menu\">\n\n        <a class=\"logo\" target=\"_blank\" href='https://github.com/hai2007/Open-Web-Word'>\n            Open Web Word\n        </a>\n\n        <span class=\"line\"></span>\n\n        <span class='btn format'>格式刷</span>\n\n        <span class=\"line\"></span>\n\n        <span class=\"btn weight\">粗体</span>\n        <span class=\"btn italic\">斜体</span>\n        <span class=\"btn underline\">下划线</span>\n        <span class=\"btn line-through\">下划线</span>\n\n        <span class=\"line\"></span>\n\n        <span class='btn left'>左对齐</span>\n        <span class='btn center'>居中</span>\n        <span class='btn right'>右对齐</span>\n\n        <span class=\"line\"></span>\n\n        <span class=\"btn color\">\n            <i ui-on:click='selectColor'>颜色</i>\n        </span>\n        <span class=\"btn size\">大小</span>\n        <span class=\"btn family\">字体</span>\n\n        <span class=\"line\"></span>\n\n        <span class=\"btn img\">图片</span>\n        <span class=\"btn link\">跳转</span>\n\n    </div>\n\n    <!-- 内容区域 -->\n    <div class=\"content\">\n\n    </div>\n\n</div>\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/sprout-ui/nefbl/directive/ui-bind.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['23']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

__etcpack__scope_args__=window.__etcpack__getBundle('2');
var Directive=__etcpack__scope_args__.Directive;

__etcpack__scope_args__=window.__etcpack__getBundle('7');
var isString=__etcpack__scope_args__.isString;


var update = function update(el, binding) {
  // 如果有type表示给属性赋值
  if (isString(binding.type) && binding.type.length > 0) {
    if (el.getAttribute(binding.type) != binding.value) {
      el.setAttribute(binding.type, binding.value);
    }
  } // 否则是设置内容或值
  else {
    if (el.value != binding.value || el.textContent != binding.value) {
      el.value = el.textContent = binding.value;
    }
  }
};

var _class = (_dec = Directive({
  selector: "ui-bind"
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);
  }

  _createClass(_class2, [{
    key: "$inserted",
    value: function $inserted(el, binding) {
      update(el, binding);
    }
  }, {
    key: "$update",
    value: function $update(el, binding) {
      update(el, binding);
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/sprout-ui/nefbl/directive/ui-model.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['24']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

__etcpack__scope_args__=window.__etcpack__getBundle('2');
var Directive=__etcpack__scope_args__.Directive;
var setValue=__etcpack__scope_args__.setValue;

__etcpack__scope_args__=window.__etcpack__getBundle('25');
var xhtml =__etcpack__scope_args__.default;


var _class = (_dec = Directive({
  selector: "ui-model"
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);
  }

  _createClass(_class2, [{
    key: "$inserted",
    value: function $inserted(el, binding) {
      el.value = binding.value;
      xhtml.bind(el, 'input', function () {
        setValue(binding.target, "." + binding.exp, el.value);
      });
    }
  }, {
    key: "$update",
    value: function $update(el, binding) {
      el.value = binding.value;
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/browser/xhtml.js
/*****************************************************************/
window.__etcpack__bundleSrc__['25']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * 🌐 - 提供常用的DOM操作方法
 * https://github.com/hai2007/browser.js/blob/master/xhtml.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

// 命名空间路径
var namespace = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};

/**
 * 结点操作补充
 */

__etcpack__scope_bundle__.default= {

    // 阻止冒泡
    "stopPropagation": function (event) {
        event = event || window.event;
        if (event.stopPropagation) { //这是其他非IE浏览器
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    // 阻止默认事件
    "preventDefault": function (event) {
        event = event || window.event;
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    // 判断是否是结点
    "isNode": function (param) {
        return param && (param.nodeType === 1 || param.nodeType === 9 || param.nodeType === 11);
    },

    // 绑定事件
    "bind": function (dom, eventType, callback) {

        if (dom.constructor === Array || dom.constructor === NodeList || dom.constructor === HTMLCollection) {
            for (var i = 0; i < dom.length; i++) {
                this.bind(dom[i], eventType, callback);
            }
            return;
        }

        if (window.attachEvent)
            dom.attachEvent("on" + eventType, callback);
        else
            dom.addEventListener(eventType, callback, false);
    },
    // 去掉绑定事件
    "unbind": function (dom, eventType, handler) {

        if (dom.constructor === Array || dom.constructor === NodeList || dom.constructor === HTMLCollection) {
            for (var i = 0; i < dom.length; i++) {
                this.unbind(dom[i], eventType, handler);
            }
            return;
        }

        if (window.detachEvent)
            dom.detachEvent('on' + eventType, handler);
        else
            dom.removeEventListener(eventType, handler, false);

    },

    // 在当前上下文context上查找结点
    // selectFun可选，返回boolean用以判断当前面对的结点是否保留
    "find": function (context, selectFun, tagName) {
        if (!this.isNode(context)) return [];
        var nodes = context.getElementsByTagName(tagName || '*');
        var result = [];
        for (var i = 0; i < nodes.length; i++) {
            if (this.isNode(nodes[i]) && (typeof selectFun != "function" || selectFun(nodes[i])))
                result.push(nodes[i]);
        }
        return result;
    },

    // 寻找当前结点的孩子结点
    // selectFun可选，返回boolean用以判断当前面对的结点是否保留
    "children": function (dom, selectFun) {
        var nodes = dom.childNodes;
        var result = [];
        for (var i = 0; i < nodes.length; i++) {
            if (this.isNode(nodes[i]) && (typeof selectFun != "function" || selectFun(nodes[i])))
                result.push(nodes[i]);
        }
        return result;
    },

    // 判断结点是否有指定class
    // clazzs可以是字符串或数组字符串
    // notStrict可选，boolean值，默认false表示结点必须包含全部class,true表示至少包含一个即可
    "hasClass": function (dom, clazzs, notStrict) {
        if (clazzs.constructor !== Array) clazzs = [clazzs];

        var class_str = " " + (dom.getAttribute('class') || "") + " ";
        for (var i = 0; i < clazzs.length; i++) {
            if (class_str.indexOf(" " + clazzs[i] + " ") >= 0) {
                if (notStrict) return true;
            } else {
                if (!notStrict) return false;
            }
        }
        return true;
    },

    // 删除指定class
    "removeClass": function (dom, clazz) {
        var oldClazz = " " + (dom.getAttribute('class') || "") + " ";
        var newClazz = oldClazz.replace(" " + clazz.trim() + " ", " ");
        dom.setAttribute('class', newClazz.trim());
    },

    // 添加指定class
    "addClass": function (dom, clazz) {
        if (this.hasClass(dom, clazz)) return;
        var oldClazz = dom.getAttribute('class') || "";
        dom.setAttribute('class', oldClazz + " " + clazz);
    },

    // 字符串变成结点
    // isSvg可选，boolean值，默认false表示结点是html，为true表示svg类型
    "toNode": function (template, isSvg) {
        var frame;

        // html和svg上下文不一样
        if (isSvg) frame = document.createElementNS(namespace.svg, 'svg');
        else {

            var frameTagName = 'div';

            // 大部分的标签可以直接使用div作为容器
            // 部分特殊的需要特殊的容器标签

            if (/^<tr[> ]/.test(template)) {

                frameTagName = "tbody";

            } else if (/^<th[> ]/.test(template) || /^<td[> ]/.test(template)) {

                frameTagName = "tr";

            } else if (/^<thead[> ]/.test(template) || /^<tbody[> ]/.test(template)) {

                frameTagName = "table";

            }

            frame = document.createElement(frameTagName);
        }

        // 低版本浏览器svg没有innerHTML，考虑是vue框架中，没有补充
        frame.innerHTML = template;

        var childNodes = frame.childNodes;
        for (var i = 0; i < childNodes.length; i++) {
            if (this.isNode(childNodes[i])) return childNodes[i];
        }
    },

    // 主动触发事件
    "trigger": function (dom, eventType) {

        //创建event的对象实例。
        if (document.createEventObject) {
            // IE浏览器支持fireEvent方法
            dom.fireEvent('on' + eventType, document.createEventObject());
        }

        // 其他标准浏览器使用dispatchEvent方法
        else {
            var _event = document.createEvent('HTMLEvents');
            // 3个参数：事件类型，是否冒泡，是否阻止浏览器的默认行为
            _event.initEvent(eventType, true, false);
            dom.dispatchEvent(_event);
        }

    },

    // 获取样式
    "getStyle": function (dom, name) {
        // 获取结点的全部样式
        var allStyle = document.defaultView && document.defaultView.getComputedStyle ?
            document.defaultView.getComputedStyle(dom, null) :
            dom.currentStyle;

        // 如果没有指定属性名称，返回全部样式
        return typeof name === 'string' ?
            allStyle.getPropertyValue(name) :
            allStyle;
    },

    // 获取元素位置
    "offsetPosition": function (dom) {
        var left = 0;
        var top = 0;
        top = dom.offsetTop;
        left = dom.offsetLeft;
        dom = dom.offsetParent;
        while (dom) {
            top += dom.offsetTop;
            left += dom.offsetLeft;
            dom = dom.offsetParent;
        }
        return {
            "left": left,
            "top": top
        };
    },

    // 获取鼠标相对元素位置
    "mousePosition": function (dom, event) {
        var bounding = dom.getBoundingClientRect();
        if (!event || !event.clientX)
            throw new Error('Event is necessary!');
        return {
            "x": event.clientX - bounding.left,
            "y": event.clientY - bounding.top
        };
    },

    // 删除结点
    "remove": function (dom) {
        dom.parentNode.removeChild(dom);
    },

    // 设置多个样式
    "setStyles": function (dom, styles) {
        for (var key in styles)
            dom.style[key] = styles[key];
    },

    // 获取元素大小
    "size": function (dom, type) {
        var elemHeight, elemWidth;
        if (type == 'content') { //内容
            elemWidth = dom.clientWidth - ((this.getStyle(dom, 'padding-left') + "").replace('px', '')) - ((this.getStyle(dom, 'padding-right') + "").replace('px', ''));
            elemHeight = dom.clientHeight - ((this.getStyle(dom, 'padding-top') + "").replace('px', '')) - ((this.getStyle(dom, 'padding-bottom') + "").replace('px', ''));
        } else if (type == 'padding') { //内容+内边距
            elemWidth = dom.clientWidth;
            elemHeight = dom.clientHeight;
        } else if (type == 'border') { //内容+内边距+边框
            elemWidth = dom.offsetWidth;
            elemHeight = dom.offsetHeight;
        } else if (type == 'scroll') { //滚动的宽（不包括border）
            elemWidth = dom.scrollWidth;
            elemHeight = dom.scrollHeight;
        } else {
            elemWidth = dom.offsetWidth;
            elemHeight = dom.offsetHeight;
        }
        return {
            width: elemWidth,
            height: elemHeight
        };
    },

    // 在被选元素内部的结尾插入内容
    "append": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.appendChild(node);
        return node;
    },

    // 在被选元素内部的开头插入内容
    "prepend": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.insertBefore(node, el.childNodes[0]);
        return node;
    },

    // 在被选元素之后插入内容
    "after": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.parentNode.insertBefore(node, el.nextSibling);
        return node;
    },

    // 在被选元素之前插入内容
    "before": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.parentNode.insertBefore(node, el);
        return node;
    }

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/sprout-ui/nefbl/directive/ui-on.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['26']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

__etcpack__scope_args__=window.__etcpack__getBundle('2');
var Directive=__etcpack__scope_args__.Directive;

__etcpack__scope_args__=window.__etcpack__getBundle('25');
var xhtml =__etcpack__scope_args__.default;

/**
 * [可以使用的修饰符]
 * .prevent 阻止默认事件
 * .stop    阻止冒泡
 * .once    只执行一次
 */

var _class = (_dec = Directive({
  selector: "ui-on"
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);
  }

  _createClass(_class2, [{
    key: "$inserted",
    value: function $inserted(el, binding) {
      var types = binding.type.split('.'),
          modifier = {
        "prevent": false,
        "stop": false,
        "once": false
      },
          callback = function callback(event) {
        if (modifier.stop) xhtml.stopPropagation(event);
        if (modifier.prevent) xhtml.preventDefault(event);
        binding.value.apply(binding.target, [event]);

        if (modifier.once) {
          xhtml.unbind(el, types[0], callback);
        }
      };

      for (var i = 1; i < types.length; i++) {
        modifier[types[i]] = true;
      }

      xhtml.bind(el, types[0], callback);
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

window.__etcpack__bundleSrc__['0']();