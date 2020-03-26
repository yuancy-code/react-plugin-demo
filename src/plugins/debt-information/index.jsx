/*
 * @Author: yuanchengyong
 * @Date: 2020-01-15 09:15:48
 * @Last Modified by: zyycy_love@126.com
 * @Last Modified time: 2020-03-26 09:42:29
 * @Des 债务信息
 */
import React from "react";
import { Table } from "antd";

import "./index.less";
const columns = [
  {
    title: "序号",
    dataIndex: "a",
    key: "a",
    width: 140,
    render: (text, record, i) => {
      return i + 1;
    }
  },
  {
    title: "债务编码",
    dataIndex: "b",
    key: "b"
  },
  {
    title: "债务名称",
    dataIndex: "c",
    key: "c"
  },
  {
    title: "融资类型",
    dataIndex: "d",
    key: "d"
  },
  {
    title: "本金偿还方式",
    dataIndex: "e",
    key: "e"
  },
  {
    title: "币种",
    dataIndex: "f",
    key: "f"
  },
  {
    title: "起息日",
    dataIndex: "g",
    key: "g"
  },
  {
    title: "执行利率(%)",
    dataIndex: "h",
    key: "h"
  },
  {
    title: "到期日",
    dataIndex: "i",
    key: "i"
  },
  {
    title: "期限(月)",
    dataIndex: "j",
    key: "j"
  },
  {
    title: "担保债务本金余额(原币)",
    dataIndex: "k",
    key: "k"
  },
  {
    title: "已代偿总金额(原币)",
    dataIndex: "l",
    key: "l"
  },
  {
    title: "备注",
    dataIndex: "m",
    key: "m"
  }
];
const data = [
  {
    id: 1,
    b: "DC-199-12",
    c: "皮冻-001",
    d: "地方债券",
    e: "到期偿还",
    f: "人民币",
    g: "2019-09-21",
    h: "0.12",
    i: "2020-09-21",
    j: "12",
    k: "125,121,455,450.00",
    l: "35,121,455,450.00",
    m: "无"
  },
  {
    id: 2,
    b: "DC-199-21",
    c: "皮冻-021",
    d: "地方债券",
    e: "到期偿还",
    f: "人民币",
    g: "2019-09-21",
    h: "0.12",
    i: "2020-09-21",
    j: "12",
    k: "125,121,455,450.00",
    l: "35,121,455,450.00",
    m: "无"
  }
];
export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="debt-info-plugin">
        <div className="title">
          <span>债务信息</span>
        </div>
        <div className="info">
          <Table columns={columns} rowKey={(record) => { return record.id }} dataSource={data} scroll={{ x: 2200 }} />
        </div>
      </div>
    );
  }
}
