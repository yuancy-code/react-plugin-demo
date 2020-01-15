/*
 * @Author: yuanchengyong 
 * @Date: 2020-01-14 15:51:18 
 * @Last Modified by: zyycy_love@126.com
 * @Last Modified time: 2020-01-15 17:41:55
 */
import React from "react";
import { Button } from 'antd';
import { callPlugin, Plugin } from "@core";

class ButtonBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    /**
     * 新增
     */
    addHandle = () => {
        // 调用插件
        callPlugin('listAdd', { a: 1 });
    }
    /**
     * 删除
     */
    delHandle = () => {
        callPlugin('listDel', { b: 1 });
    }
    /**
     * 导出
     */
    exportHandle = () => {
        callPlugin('listExport', { c: 1 });
    }
    /**
     * 信息点击关闭
     */
    infoCloseHandel = (data) => {
        console.log(data)
    }
    render() {
        return <div className="button-box">
            <Button icon="plus" onClick={this.addHandle}>新增</Button>
            <Button icon="delete" onClick={this.delHandle}>删除</Button>
            <Button icon="export" onClick={this.exportHandle}>导出</Button>
            <Plugin id="listInfo" onClose={this.infoCloseHandel}></Plugin>
        </div>
    }
}

export default ButtonBox;