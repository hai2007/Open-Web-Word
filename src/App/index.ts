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

    $setup() {
        return {
            fontColor: ref('#000')
        }
    }

    // 选择颜色
    selectColor(e) {
        ColorsPicker.openPicker(this.fontColor, color => {
            this.fontColor = color
            e.target.style.backgroundColor = color;
        }, '选择文字颜色')
    }

}
