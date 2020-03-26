/*
 * @Author: yuanchengyong
 * @Date: 2020-01-15 09:24:28
 * @Last Modified by: zyycy_love@126.com
 * @Last Modified time: 2020-03-25 15:24:22
 */
import { message } from "antd";

export default function(config = {}) {
  const { callBack = () => {}, listSelected = [] } = config;
  if (listSelected.length === 0) {
    message.warn("请选择！");
    return false;
  }
  message.warning("暂时无法导出！");
  callBack();
}
