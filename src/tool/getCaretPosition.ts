// 获取包含HTML内容的contentEditable区域中的插入符（光标）位置

export default function (node) {
    let range = window.getSelection().getRangeAt(0),

        preCaretRange = range.cloneRange(),

        caretPosition,

        tmp = document.createElement("div")

    preCaretRange.selectNodeContents(node)

    preCaretRange.setEnd(range.endContainer, range.endOffset)

    tmp.appendChild(preCaretRange.cloneContents())

    caretPosition = tmp.innerHTML.length

    return caretPosition
}
