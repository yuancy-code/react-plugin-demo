/*
 * @Author: yuanchengyong
 * @Date: 2020-01-15 09:15:48
 * @Last Modified by: zyycy_love@126.com
 * @Last Modified time: 2020-03-25 15:22:04
 */
import { message, Modal } from "antd";
const { confirm } = Modal;

export default function(config) {
  const { onOk = () => {}, onCancel = () => {}, listSelected = [] } = config;
  if (listSelected.length === 0) {
    message.warn("请选择！");
    return false;
  }
  confirm({
    title: "您确定要删除吗?",
    content: "删除后将无法恢复，请再次确认！",
    okText: "确定",
    cancelText: "取消",
    onOk() {
      message.success("删除成功！");
      onOk("Ok");
    },
    onCancel() {
      onCancel("Cancel");
    }
  });
}
