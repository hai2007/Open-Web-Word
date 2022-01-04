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

    fontColor: string // 文字颜色
    fontSize: number // 文字大小
    fontFamily: string // 文字字体

    $setup() {
        return {
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

}
