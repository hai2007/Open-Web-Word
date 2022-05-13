
import { isString } from '@hai2007/tool/type'

let jsonToStyle = json => {
    let style = ""
    for (let key in json) {
        style += key + ":" + json[key] + ";"
    }
    return style
}

export default (json, isOuter) => {
    let template = ""

    for (let row of json.content) {

        template += "<div "

        // 对外的话，不需要这个标志
        if (!isOuter) template += "_oww_updateStyle_='yes' "

        template += "style='" + jsonToStyle(row.style) + "'>"

        for (let col of row.content) {

            if (isString(col)) {
                template += col
            } else {
                template += "<" + col.tagName + " "

                for (let attrKey in col.attr) {
                    template += attrKey + "='" + col.attr[attrKey] + "'"
                }

                template += " style='" + jsonToStyle(col.style) + "'>"
                template += col.content
                template += "</" + col.tagName + ">"
            }

        }

        template += "</div>"
    }

    return template
}