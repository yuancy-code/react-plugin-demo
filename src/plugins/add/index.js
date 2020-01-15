/*
 * @Author: yuanchengyong
 * @Date: 2020-01-15 09:24:28
 * @Last Modified by: zyycy_love@126.com
 * @Last Modified time: 2020-01-15 15:25:45
 */
import { message } from "antd";

export default function(config = {}) {
  const { calllBack = () => {} } = config;
  message.success("添加成功！");
  calllBack();
}
