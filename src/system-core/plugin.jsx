/*
 * @Author: yuanchengyong
 * @Date: 2020-01-15 10:12:19
 * @Last Modified by: zyycy_love@126.com
 * @Last Modified time: 2020-01-16 13:39:42
 * @Des 插件组件
 */
import React from "react";
import AsyncComponent from "./async-component";
import plugins from "./plugins"
function Plugin(props = {}) {
    const { id = '' } = props
    let plugin = {};
    for (let i = 0; i < plugins.length; i++) {
        if (id === plugins[i].id) {
            plugin = plugins[i];
            break;
        }
    }
    if (!plugin.id) {
        console.warn("The plugin you called does not exist!");
        return false;
    }
    let path = plugin.index.replace(/^(.\/)*/g, "");
    const P = AsyncComponent(() => import("@plugins/" + path));
    return (
        <>
            <P {...props} />
        </>
    );
}
export default Plugin;