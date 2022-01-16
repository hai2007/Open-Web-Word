import { Component, ref } from 'nefbl'

import ColorsPicker from 'colors-picker'
import { isElement } from '@hai2007/tool/type'
import xhtml from '@hai2007/browser/xhtml'

import style from './index.scss'
import template from './index.html'

@Component({
    selector: "app-root",
    template,
    styles: [style]
})
export default class {

    fontWeight: boolean // 是否加粗
    fontItalic: boolean // 是否斜体
    underline: boolean // 是否有下划线
    lineThrough: boolean // 是否有中划线
    fontAlign: string // 文字水平对齐方式
    fontColor: string // 文字颜色
    fontSize: number // 文字大小
    fontFamily: string // 文字字体

    curEl: Element | null | Node

    $setup() {
        return {
            fontWeight: ref(false),
            fontItalic: ref(false),
            underline: ref(false),
            lineThrough: ref(false),
            fontAlign: ref('left'),
            fontColor: ref('#000'),
            fontSize: ref(14),
            fontFamily: ref('serif'),
            curEl: ref(null)
        }
    }

    // 选择颜色
    selectColor(e) {
        ColorsPicker.openPicker(this.fontColor, color => {
            this.fontColor = color
            e.target.style.backgroundColor = color
            this.updateStyle()
        }, '选择文字颜色')
    }

    // 修改值
    changeValue(e) {
        let key = e.target.getAttribute('key')
        let value = e.target.getAttribute('value')

        // 设置新值
        this[key] = value ? value : !this[key]

        if (key == 'underline' && this.underline) this.lineThrough = false
        else if (key == 'lineThrough' && this.lineThrough) this.underline = false

        this.updateStyle()

    }

    updateStyle() {
        if (this.curEl == null) return

        xhtml.setStyles(this.curEl, {
            "font-weight": this.fontWeight ? 800 : 400, // 是否加粗
            "font-style": this.fontItalic ? "italic" : "normal",// 是否斜体
            "text-decoration": this.underline ? "underline" : this.lineThrough ? "line-through" : "auto", // 是否有下划线、中划线
            "text-align": this.fontAlign, // 文字水平对齐方式
            "color": this.fontColor, // 文字颜色
            "font-size": this.fontSize + "px", // 文字大小
            "font-family": this.fontFamily, // 文字字体
        })
    }

    // 修改地区光标控制的内容
    updateCurEl() {

        let _curEl = isElement((window.getSelection().anchorNode)) ? window.getSelection().anchorNode : window.getSelection().anchorNode.parentNode
        if (_curEl == this.curEl) return

        this.curEl = _curEl
        this.updateStyle()

    }

}
