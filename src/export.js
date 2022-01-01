import render from './main'
import { isElement } from '@hai2007/tool/type';

let oww = function (options) {

    if (!(this instanceof oww)) {
        throw new Error('Open-Web-Word is a constructor and should be called with the `new` keyword');
    }

    if (isElement(options.el)) {
        render(options.el)
    }

}

if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = oww;
} else {
    window.OpenWebWord = oww;
}
