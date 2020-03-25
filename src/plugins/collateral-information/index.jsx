/*
 * @Author: yuanchengyong
 * @Date: 2020-01-15 09:15:48
 * @Last Modified by: yuanchengyong
 * @Last Modified time: 2020-02-20 13:41:45
 * @Des 担保物信息
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
    title: "担保方式",
    dataIndex: "b",
    key: "b"
  },
  {
    title: "担保物编号",
    dataIndex: "c",
    key: "c"
  },
  {
    title: "担保物名称",
    dataIndex: "d",
    key: "d"
  },
  {
    title: "担保物类型",
    dataIndex: "e",
    key: "e"
  },
  {
    title: "担保物价值/保证责任金额",
    dataIndex: "f",
    key: "f"
  },
  {
    title: "备注",
    dataIndex: "g",
    key: "g"
  }
];
const data = [
  {
    id: 1,
    b: "连带责任担保",
    c: "PD-001",
    d: "xx区10000平面房产",
    e: "房产",
    f: "102,787,121,224.00",
    g: "无"
  },
  {
    id: 2,
    b: "连带责任担保",
    c: "PD-002",
    d: "xx区20000平面房产",
    e: "房产",
    f: "202,787,121,224.00",
    g: "无"
  }
];
export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="collateral-info-plugin">
        <div className="title">
          <span>担保物信息</span>
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
