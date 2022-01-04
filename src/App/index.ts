import { Component, ref } from 'nefbl'

import ColorsPicker from 'colors-picker'

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

    $setup() {
        return {
            fontWeight: ref(false),
            fontItalic: ref(false),
            underline: ref(false),
            lineThrough: ref(false),
            fontAlign: ref('left'),
            fontColor: ref('#000'),
            fontSize: ref(14),
            fontFamily: ref('serif')
        }
    }

    // 选择颜色
    selectColor(e) {
        ColorsPicker.openPicker(this.fontColor, color => {
            this.fontColor = color
            e.target.style.backgroundColor = color
        }, '选择文字颜色')
    }

    // 修改值
    changeValue(e) {
        let key = e.target.getAttribute('key')
        let value = e.target.getAttribute('value')

        // 设置新值
        this[key] = value ? value : !this[key]

    }

    // 输入控制
    doInput(e) {
        let el = e.target

    }

}
