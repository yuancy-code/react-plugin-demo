/*
 * @Author: yuanchengyong
 * @Date: 2020-01-15 09:24:28
 * @Last Modified by: zyycy_love@126.com
 * @Last Modified time: 2020-01-15 17:43:48
 */
import React from "react";
import { Button, notification } from "antd";



export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  clickHandle = () => {
    const { onClose = () => { } } = this.props;
    notification['info']({
      message: '项目信息',
      description:
        '这是通知的内容。这是通知的内容。这是通知的内容。',
      onClose: () => {
        onClose('User Close')
      }
    });
  }
  render() {
    return <Button icon="info-circle" onClick={this.clickHandle}>信息</Button>;
  }
}
