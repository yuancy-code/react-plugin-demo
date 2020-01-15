/*
 * @Author: yuanchengyong
 * @Date: 2020-01-15 09:15:48
 * @Last Modified by: zyycy_love@126.com
 * @Last Modified time: 2020-01-15 15:21:58
 */
import { message, Modal } from "antd";
const { confirm } = Modal;

export default function(config = {}) {
  const { onOk = () => {}, onCancel = () => {} } = config;
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
