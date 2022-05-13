
import getStyleFromEl from "./getStyleFromEl"

export default el => {

    let result = []

    //  一行行解析
    for (let i = 0; i < el.childNodes.length; i++) {
        let rowEl = el.children[i]

        let row = {
            style: getStyleFromEl(rowEl),
            content: []
        }

        if (rowEl.nodeType == '1') {

            // 一列列解析
            for (let j = 0; j < rowEl.childNodes.length; j++) {
                let colEl = rowEl.childNodes[j]

                // 如果是结点
                if (colEl.nodeType == '1') {

                    let attr = {}

                    // 链接
                    if (colEl.tagName == 'A') {
                        attr = {
                            href: colEl.getAttribute('href'),
                            target: "_blank",
                            contenteditable: "false"
                        }
                    }

                    // 图片
                    else if (colEl.tagName == 'IMG') {
                        attr = {
                            src: colEl.getAttribute('src')
                        }
                    }

                    row.content.push({
                        tagName: colEl.tagName,
                        style: getStyleFromEl(colEl),
                        attr,
                        content: colEl.innerText
                    })
                }

                // 如果是文本
                else if (colEl.nodeType == '3') {
                    row.content.push(colEl.textContent)
                }
            }

        }
        result.push(row)
    }

    return {

        // 数据格式版本，为后续升级提前做好准备
        version: "1.0.0",

        // 内容
        content: result
    }
}