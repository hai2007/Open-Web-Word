import render from './main'
import { isElement } from '@hai2007/tool/type';

import templateToJson from './tool/templateToJson'
import jsonToTemplate from './tool/jsonToTemplate'

let oww = function (options) {

    return new Promise((resolve, reject) => {

        if (!(this instanceof oww)) {
            throw new Error('Open-Web-Word is a constructor and should be called with the `new` keyword');
        }

        if (isElement(options.el)) {
            render(options.el)

            setTimeout(() => {

                let targetId = options.el.children[0].children[0].getAttribute('target-id')
                let targetEl = document.getElementById(targetId)

                resolve({

                    valueOf(content) {

                        // 设置
                        if (arguments.length > 0) {
                            targetEl.innerHTML = jsonToTemplate(content)
                        }

                        // 获取
                        else {
                            return templateToJson(targetEl)
                        }

                    },

                    template(content) {


                        // 设置
                        if (arguments.length > 0) {
                            targetEl.innerHTML = content
                            for (let i = 0; i < targetEl.children.length; i++) {
                                targetEl.children[i].setAttribute('_oww_updatestyle_', 'yes')
                            }
                        }

                        // 获取
                        else {
                            return jsonToTemplate(templateToJson(targetEl), true)
                        }

                    }

                })

            })

        } else {
            reject()
        }

    })

}

if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = oww;
} else {
    window.OpenWebWord = oww;
}
