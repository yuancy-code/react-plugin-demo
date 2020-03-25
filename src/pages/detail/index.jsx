/*
 * @Author: yuanchengyong 
 * @Date: 2020-01-09 10:00:15 
 * @Last Modified by: zyycy_love@126.com
 * @Last Modified time: 2020-03-25 10:32:45
 */
import React from "react";
import { Col, Row, Button, Card, Tabs } from "antd";
import { callPlugin } from "react-plugin-system";

import "./index.less";

const { TabPane } = Tabs;

function Detail(props) {
    const { match = {} } = props;
    const { params } = match;
    const { id } = params;
    /**
     * 编辑
     */
    const edit = async function () {
        let path = (callPlugin('edit'));
        let plugin = await import("@plugins/" + path);
        (plugin.default)({ id });
    };
    /**
     * 删除
     */
    const del = async function () {
        let path = (callPlugin('listDel'));
        let plugin = await import("@plugins/" + path);
        (plugin.default)({ id });
    }
    /**
     * 送审
     */
    const examine = async function () {
        let path = (callPlugin('examine'));
        let plugin = await import("@plugins/" + path);
        (plugin.default)({ id });
    }

    // Declare a new state variable, which we'll call "count"
    return (
        <div className="list-detail">
            <div className="title-area">
                <div className="title-info">
                    <Row className="title">
                        <Col span={12}>
                            <h3>担保详情</h3>
                        </Col>
                        <Col span={12}>
                            <div className="button-list">
                                <Button onClick={() => { edit() }}>编辑</Button>
                                <Button type="danger" onClick={() => { del() }}>删除</Button>
                                <Button type="primary" onClick={() => { examine() }}>送审</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="cont-info">
                    <Card>
                        <Row className="info-t">
                            <Col span={24}>
                                担保合同编号：<span className="blue-font">DC-1030-010000111</span>
                            </Col>
                        </Row>
                        <Row className="info-item">
                            <Col span={8}>
                                <p>合同担保名称：担保_MX_00100212</p>
                                <p>担保责任范围：全额担保</p>
                                <p>创建人：A市投资控股集团</p>
                            </Col>
                            <Col span={8}>
                                <p>担保企业名称：A市投资控股集团有限公司</p>
                                <p>担保责任形式：一般担保</p>
                                <p>创建时间：2020-01-12 11:13:21</p>
                            </Col>
                            <Col span={8}>
                                <p>担保企业全称：A人民政府国有资产管理委员会</p>
                                <p>担保责任金额（原币）：<span className="blue-font">1212.12</span>元</p>
                                <p>操作时间：2020-11-12 16:13:21</p>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </div>
            <div className="content-area">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="担保合同信息" key="1">
                        担保合同信息相关信息
                    </TabPane>
                    <TabPane tab="债务信息" key="2">
                        债务信息相关信息
                    </TabPane>
                    <TabPane tab="担保物信息" key="3">
                        担保物信息相关信息
                    </TabPane>
                    <TabPane tab="反担保信息" key="4">
                        反担保信息相关信息
                    </TabPane>
                </Tabs>
            </div>
        </div >
    );
}
export default Detail;