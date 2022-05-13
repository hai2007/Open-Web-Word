<p align='center'>
    <a href='https://hai2007.github.io/Open-Web-Word/'>
        <img src='https://hai2007.github.io/Open-Web-Word/logo.png' />
    </a>
</p>

# [Open-Web-Word](https://hai2007.github.io/Open-Web-Word/) - Web版本的可扩展文字编辑器

<p>
  <a href="https://hai2007.gitee.io/npm-downloads?interval=7&packages=open-web-word"><img src="https://img.shields.io/npm/dm/open-web-word.svg" alt="downloads"></a>
  <a href="https://www.jsdelivr.com/package/npm/open-web-word"><img src="https://data.jsdelivr.com/v1/package/npm/open-web-word/badge" alt="CDN"></a>
  <a href="https://www.npmjs.com/package/open-web-word"><img src="https://img.shields.io/npm/v/open-web-word.svg" alt="Version"></a>
  <a href="https://github.com/hai2007/Open-Web-Word/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/open-web-word.svg" alt="License"></a>
  <a href="https://github.com/hai2007/Open-Web-Word" target='_blank'>
        <img alt="GitHub repo stars" src="https://img.shields.io/github/stars/hai2007/Open-Web-Word?style=social">
    </a>
</p>

> 温馨提示：使用过程中，你可以查看 [版本历史](./CHANGELOG) 来了解是否需要升级！

> 兼容Chrome、Safari、Edge、Firefox、Opera和IE(9+)等常见浏览器！

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/hai2007/Open-Web-Word/issues)，欢迎参与维护！

- 你可以查看[在线用例](https://hai2007.github.io/Open-Web-Word/)来快速体验！

## 如何引入

我们推荐你使用npm的方式安装和使用：

```bash
npm install --save open-web-word
```

当然，你也可以通过CDN的方式引入：

```html
<script src="https://cdn.jsdelivr.net/npm/open-web-word@0"></script>
```

## 如何使用

- 特别注意：当前最后一个可用版本（非beta和alpha版本）请查看master分支的说明！

```js
import OpenWebWord from 'open-web-word';

new OpenWebWord({

    // 编辑器挂载点(必选)
    el: document.getElementById('oww')

}).then(oww => {

    // todo

});
```

返回的oww里面挂载着后续可控方法：

- 获取或设置内容

```js
// 如果content传递了，就是设置内容
oww.valueOf([content]);
```

- 获取或设置html

```js
// 如果content传递了，就是设置html
oww.template([content]);
```

开源协议
---------------------------------------
[MIT](https://github.com/hai2007/Open-Web-Word/blob/master/LICENSE)

Copyright (c) 2021-2022 [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
