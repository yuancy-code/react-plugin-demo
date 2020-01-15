/*
 * @Author: yuanchengyong
 * @Date: 2020-01-15 09:24:28
 * @Last Modified by: zyycy_love@126.com
 * @Last Modified time: 2020-01-15 16:44:06
 */
import { message } from "antd";

export default function(config = {}) {
  const { callBack = () => {} } = config;
  message.warning("暂时无法导出！");
  callBack();
}
