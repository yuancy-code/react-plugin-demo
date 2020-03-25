/*
 * @Author: yuanchengyong
 * @Date: 2020-01-15 09:24:28
 * @Last Modified by: zyycy_love@126.com
 * @Last Modified time: 2020-03-25 11:38:56
 */
import { message, Modal } from "antd";
const { confirm } = Modal;
export default function (config = {}) {
  const { onOk = () => { }, onCancel = () => { } } = config;
  confirm({
    title: "您确定要送审吗?",
    okText: "确定",
    cancelText: "取消",
    onOk() {
      message.success("送审成功...");
      onOk("Ok");
    },
    onCancel() {
      onCancel("Cancel");
    }
  });
}
