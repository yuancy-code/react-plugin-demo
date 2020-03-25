/*
 * @Author: yuanchengyong
 * @Date: 2020-01-15 09:15:48
 * @Last Modified by: yuanchengyong
 * @Last Modified time: 2020-02-19 17:52:57
 * @Des 担保合同信息
 */
import React from "react";
import { Row, Col } from "antd";
import "./index.less";
export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseInfo: {
        show: true,
        data: [
          {
            key: "1",
            title: "担保企业名称",
            value: "xx市投资担保集团"
          },
          {
            key: "2",
            title: "担保企业统一社会信用代码",
            value: "9582214545412"
          },
          {
            key: "3",
            title: "担保合同号",
            value: "DC-1000-1289"
          },
          {
            key: "4",
            title: "担保合同名称",
            value: "地产-1000-1289"
          },
          {
            key: "5",
            title: "担保责任范围",
            value: "全额担保"
          },
          {
            key: "6",
            title: "担保责任形式",
            value: "连带责任保证"
          },
          {
            key: "7",
            title: "担保批准单位",
            value: "国土局"
          },
          {
            key: "8",
            title: "担保批准文号",
            value: "DNB-PW-1212"
          },
          {
            key: "9",
            title: "担保批准日期",
            value: "2020-01-22"
          }
        ]
      },
      guaranteeInfo: {
        show: true,
        data: [
          {
            key: "1",
            title: "担保总金额（原币）",
            value: "128,128,128,890.00"
          },
          {
            key: "2",
            title: "担保债务余额（原币）",
            value: "584,954,125,578.00"
          },
          {
            key: "3",
            title: "担保物价值/保证责任金额",
            value: "455,854,423,123.00"
          },
          {
            key: "4",
            title: "担保起始日",
            value: "2019-12-19"
          },
          {
            key: "5",
            title: "担保到期日",
            value: "2020-08-15"
          }
        ]
      },
      enterpriseInfo: {
        show: true,
        data: [
          {
            key: "1",
            title: "担保企业名称",
            value: "xx市A集团A1子公司"
          },
          {
            key: "2",
            title: "企业统一社会信用代码",
            value: "201925441122"
          },
          {
            key: "3",
            title: "担保类型",
            value: "对外担保"
          },
          {
            key: "4",
            title: "是否下辖国企",
            value: "是"
          },
          {
            key: "5",
            title: "被担保企业信用评级",
            value: "AA+"
          },
          {
            key: "6",
            title: "担保企业是否上市",
            value: "AA+"
          },
          {
            key: "7",
            title: "担保企业注册资本",
            value: "455,998,888,154,621.00"
          },
          {
            key: "8",
            title: "被担保企业规模",
            value: "中型企业"
          },
          {
            key: "9",
            title: "被担保企业经营状况",
            value: "存续"
          },
          {
            key: "10",
            title: "被担保企业类型",
            value: "02-国有控股企业"
          },
          {
            key: "11",
            title: "被担保企业所在行业",
            value: "P 教育/83"
          },
          {
            key: "12",
            title: "是否涉诉",
            value: "否"
          }
        ]
      },
      fulfillInfo: {
        show: true,
        data: [
          {
            key: "1",
            title: "履约状态",
            value: "履约中"
          },
          {
            key: "2",
            title: "担保责任解除日期",
            value: "2020-09-08"
          }
        ]
      },
      noteInfo: {
        show: true,
        data: [
          {
            key: "1",
            title: "备注信息",
            value: "暂无"
          },
         
        ]
      }
    };
  }
  /**
   * 点击
   */
  downClick(type) {
    let info = this.state[type];
    info.show = !this.state[type].show;
    this.setState({
      [type]: info
    });
  }
  render() {
    const {
      baseInfo = {},
      guaranteeInfo = {},
      enterpriseInfo = {},
      fulfillInfo = {},
      noteInfo = {}
    } = this.state;
    return (
      <div className="contract-info-plugin">
        <div className="list">
          <div className="title">
            <span>基本信息</span>
            <span
              className={`antion ${
                baseInfo.show ? "antion-down" : "antion-up"
              }`}
              onClick={() => {
                this.downClick("baseInfo");
              }}
            ></span>
          </div>
          {baseInfo.show ? (
            <div className="info">
              <Row gutter={20} className="item">
                {baseInfo.data.map(item => {
                  return (
                    <Col span={8} key={item.key}>
                      <span className="item-title">{item.title}</span>
                      <span className="item-value">{item.value}</span>
                    </Col>
                  );
                })}
              </Row>
            </div>
          ) : null}
        </div>
        <div className="list">
          <div className="title">
            <span>担保金额、期限信息</span>
            <span
              className={`antion ${
                guaranteeInfo.show ? "antion-down" : "antion-up"
              }`}
              onClick={() => {
                this.downClick("guaranteeInfo");
              }}
            ></span>
          </div>
          {guaranteeInfo.show ? (
            <div className="info">
              <Row gutter={20} className="item">
                {guaranteeInfo.data.map(item => {
                  return (
                    <Col span={8} key={item.key}>
                      <span className="item-title">{item.title}</span>
                      <span className="item-value">{item.value}</span>
                    </Col>
                  );
                })}
              </Row>
            </div>
          ) : null}
        </div>
        <div className="list">
          <div className="title">
            <span>担保企业信息</span>
            <span
              className={`antion ${
                enterpriseInfo.show ? "antion-down" : "antion-up"
              }`}
              onClick={() => {
                this.downClick("enterpriseInfo");
              }}
            ></span>
          </div>
          {enterpriseInfo.show ? (
            <div className="info">
              <Row gutter={20} className="item">
                {enterpriseInfo.data.map(item => {
                  return (
                    <Col span={8} key={item.key}>
                      <span className="item-title">{item.title}</span>
                      <span className="item-value">{item.value}</span>
                    </Col>
                  );
                })}
              </Row>
            </div>
          ) : null}
        </div>
        <div className="list">
          <div className="title">
            <span>担保履约状态</span>
            <span
              className={`antion ${
                fulfillInfo.show ? "antion-down" : "antion-up"
              }`}
              onClick={() => {
                this.downClick("fulfillInfo");
              }}
            ></span>
          </div>
          {fulfillInfo.show ? (
            <div className="info">
              <Row gutter={20} className="item">
                {fulfillInfo.data.map(item => {
                  return (
                    <Col span={8} key={item.key}>
                      <span className="item-title">{item.title}</span>
                      <span className="item-value">{item.value}</span>
                    </Col>
                  );
                })}
              </Row>
            </div>
          ) : null}
        </div>
        <div className="list">
          <div className="title">
            <span>备注</span>
            <span
              className={`antion ${
                noteInfo.show ? "antion-down" : "antion-up"
              }`}
              onClick={() => {
                this.downClick("noteInfo");
              }}
            ></span>
          </div>
          {noteInfo.show ? (
            <div className="info">
              <Row gutter={20} className="item">
                {noteInfo.data.map(item => {
                  return (
                    <Col span={8} key={item.key}>
                      <span className="item-title">{item.title}</span>
                      <span className="item-value">{item.value}</span>
                    </Col>
                  );
                })}
              </Row>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
