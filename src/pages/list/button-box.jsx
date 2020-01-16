/*
 * @Author: yuanchengyong 
 * @Date: 2020-01-14 15:51:18 
 * @Last Modified by: zyycy_love@126.com
 * @Last Modified time: 2020-01-16 16:13:38
 */
import React from "react";
import { Button } from 'antd';
import { callPlugin, Plugin } from "react-plugin-system";

class ButtonBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    /**
     * 新增
     */
    addHandle = async () => {
        // 调用插件
        let path = (callPlugin('listAdd'));
        let plugin = await import("@plugins/" + path);
        (plugin.default)({ a: 1 });

    }
    /**
     * 删除
     */
    delHandle = async () => {
        // 调用插件
        let path = (callPlugin('listDel'));
        let plugin = await import("@plugins/" + path);
        (plugin.default)({ b: 1 });
    }
    /**
     * 导出
     */
    exportHandle = async () => {
        // 调用插件
        let path = (callPlugin('listExport'));
        let plugin = await import("@plugins/" + path);
        (plugin.default)({ c: 1 });
    }
    /**
     * 信息点击关闭
     */
    infoCloseHandel = (data) => {
        console.log(data)
    }
    render() {
        let path = (callPlugin('listInfo'));
        return <div className="button-box">
            <Button icon="plus" onClick={this.addHandle}>新增</Button>
            <Button icon="delete" onClick={this.delHandle}>删除</Button>
            <Button icon="export" onClick={this.exportHandle}>导出</Button>
            <Plugin importComponent={() => { return import("@plugins/" + path) }} onClose={this.infoCloseHandel} />
        </div>
    }
}

export default ButtonBox;