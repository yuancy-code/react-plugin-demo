/*
 * @Author: yuanchengyong
 * @Date: 2020-01-15 09:15:48
 * @Last Modified by: yuanchengyong
 * @Last Modified time: 2020-02-20 13:47:04
 * @Des 反担保信息
 */
import React from "react";
import { Table } from "antd";

import "./index.less";
const columns = [
  {
    title: "序号",
    dataIndex: "a",
    key: "a",
    render: (text, record, i) => {
      return i + 1;
    }
  },
  {
    title: "反担保类型",
    dataIndex: "b",
    key: "b"
  },
  {
    title: "反担保保证人全称",
    dataIndex: "c",
    key: "c"
  },
  {
    title: "反担保资产类型",
    dataIndex: "d",
    key: "d"
  },
  {
    title: "反担保质押物编码",
    dataIndex: "e",
    key: "e"
  },
  {
    title: "反担保质押物价值",
    dataIndex: "f",
    key: "f"
  },
  {
    title: "反担保金额",
    dataIndex: "g",
    key: "g"
  },
  {
    title: "反担保到期日",
    dataIndex: "h",
    key: "h"
  },
  {
    title: "备注",
    dataIndex: "i",
    key: "i"
  }
];
const data = [
  {
    id: 1,
    b: "连带责任担保",
    c: "xx市A集团A1分公司",
    d: "连带责任担保",
    e: "DD-001-9121",
    f: "102,787,121,224.00",
    g: "544,444,787.00",
    h: "2020-12-20",
    i: "无",
  },
  {
    id: 2,
    b: "连带责任担保",
    c: "xx市B集团B1分公司",
    d: "连带责任担保",
    e: "DD-001-3121",
    f: "12,787,121,224.00",
    g: "44,444,787.00",
    h: "2020-12-20",
    i: "无",
  }
];
export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="counter-collateral-plugin">
        <div className="title">
          <span>反担保信息</span>
        </div>
        <div className="info">
          <Table
            columns={columns}
            rowKey={record => {
              return record.id;
            }}
            dataSource={data}
          />
        </div>
      </div>
    );
  }
}
