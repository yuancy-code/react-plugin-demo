/*
 * @Author: yuanchengyong
 * @Date: 2020-01-09 10:00:15
 * @Last Modified by: yuanchengyong
 * @Last Modified time: 2020-03-25 23:49:48
 */
import React from "react";
// import { useState } from "react";
import { Row, Col, Tabs, Button } from "antd";
import { callPlugin, Plugin } from "react-plugin-system";
import "./index.less";
const { TabPane } = Tabs;
function Detail(props) {
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(0);
  const contractPath = callPlugin("contractInfo");
  const debtPath = callPlugin("debtInfo");
  const collateralPath = callPlugin("collateralInfo");
  const counterCollateralPath = callPlugin("counterCollateralInfo");
  const { match = {} } = props;
  const { params } = match;
  const { id } = params;
  /**
   * 编辑
   */
  const edit = async function() {
    let path = callPlugin("edit");
    let plugin = await import("@plugins/" + path);
    plugin.default({ id });
  };
  /**
   * 删除
   */
  const del = async function() {
    let path = callPlugin("listDel");
    let plugin = await import("@plugins/" + path);
    plugin.default({ id });
  };
  /**
   * 送审
   */
  const examine = async function() {
    let path = callPlugin("examine");
    let plugin = await import("@plugins/" + path);
    plugin.default({ id });
  };
  return (
    <div className="content-detail">
      <div className="title-info">
        <Row className="title">
          <Col span={12}>
            <h3>担保详情</h3>
          </Col>
          <Col span={12}>
            <div className="button-list">
              <Button
                onClick={() => {
                  edit();
                }}
              >
                编辑
              </Button>
              <Button
                type="danger"
                onClick={() => {
                  del();
                }}
              >
                删除
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  examine();
                }}
              >
                送审
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <div className="big-title-warp">
        <div className="title-conetent">
          <div className="group-button"></div>
          <div className="group-title">企业债务详情</div>
        </div>
        <div className="top-base-content">
          <div className="code-item">
            <span>企业债务编码：</span>
            <span className="fc-blue">pd-001</span>
          </div>
          <div className="top-info-item">
            <Row gutter={30}>
              <Col span={8} className="item">
                <p>
                  <span>债务名称</span>
                  <span>：</span>
                  <span>皮冻-001</span>
                </p>
                <p>
                  <span>协议金额（原币）</span>
                  <span>：</span>
                  <span className="fc-blue mr10">1.00</span>
                  <span>元</span>
                </p>
                <p>
                  <span>创建人</span>
                  <span>：</span>
                  <span>xx市投资集团有限公司</span>
                </p>
              </Col>
              <Col span={8} className="item">
                <p>
                  <span>担保企业名称</span>
                  <span>：</span>
                  <span>XX市投资集团有限公司</span>
                </p>
                <p>
                  <span>担保责任形式</span>
                  <span>：</span>
                  <span>连带责任担保</span>
                </p>
                <p>
                  <span>创建时间</span>
                  <span>：</span>
                  <span>2020-01-02 09:30:20</span>
                </p>
              </Col>
              <Col span={8}>
                <p>
                  <span>担保企业全称</span>
                  <span>：</span>
                  <span>XX市A集团A2分公司</span>
                </p>
                <p>
                  <span>担保债务余额</span>
                  <span>：</span>
                  <span className="fc-blue mr10">212,1.00</span>
                  <span>元</span>
                </p>
                <p>
                  <span>操作时间</span>
                  <span>：</span>
                  <span>2020-01-02 09:30:20</span>
                </p>
              </Col>
            </Row>
          </div>
        </div>
        <div className="detail-content">
          <Tabs defaultActiveKey="1">
            <TabPane tab="担保合同信息" key="1">
              <Plugin
                importComponent={() => {
                  return import("@plugins/" + contractPath);
                }}
              />
            </TabPane>
            <TabPane tab="债务信息" key="2">
              <Plugin
                importComponent={() => {
                  return import("@plugins/" + debtPath);
                }}
              />
            </TabPane>
            <TabPane tab="担保物信息" key="3">
              <Plugin
                importComponent={() => {
                  return import("@plugins/" + collateralPath);
                }}
              />
            </TabPane>
            <TabPane tab="反担保信息" key="4">
              <Plugin
                importComponent={() => {
                  return import("@plugins/" + counterCollateralPath);
                }}
              />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
export default Detail;
