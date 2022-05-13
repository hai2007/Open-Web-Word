export default el => {
    let style = {}
    for (let i = 0; i < el.style.length; i++) {
        style[el.style[i]] = el.style[el.style[i]]
    }
    return style
}