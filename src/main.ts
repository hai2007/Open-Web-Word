import { platform } from 'nefbl'
import style from "./style.scss"

// 引入主模块
import appModule from "./app.module"

export default el => {

    // 先获取平台实例
    platform({

        // 框架管理的区域
        el,

        // 全局样式
        styles: [style]

    })

        // 然后启动主模块
        .bootstrap(appModule)
}
