/*
 * @Author: yuanchengyong 
 * @Date: 2020-01-09 10:00:15 
 * @Last Modified by: zyycy_love@126.com
 * @Last Modified time: 2020-01-14 15:47:19
 */
import React from "react";
import { Form, Row, Col, Input, Button, Icon } from 'antd';
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 10 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};

class AdvancedSearchForm extends React.Component {
    state = {
        expand: false,
        searchList: [
            {
                key: "number",
                label: '合同编号'
            },
            {
                key: "name",
                label: '担保企业名称'
            },
            {
                key: "range",
                label: '担保责任范围'
            },
            {
                key: "shape",
                label: '担保责任形式'
            },
            {
                key: "performance",
                label: '履约状态'
            },
            {
                key: "status",
                label: '状态'
            },
            {
                key: "time",
                label: '操作日期'
            }
        ]
    };

    // To generate mock Form.Item
    getFields() {
        const { searchList } = this.state;
        const searchListLength = searchList.length;
        const count = this.state.expand ? searchListLength : 6;
        const { getFieldDecorator } = this.props.form;
        const children = [];
        for (let i = 0; i < searchListLength; i++) {
            children.push(
                <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
                    <Form.Item label={`${searchList[i].label}`}>
                        {getFieldDecorator(`${searchList[i].key}`, {
                            rules: [
                                {
                                    required: true,
                                    message: 'Input something!',
                                },
                            ],
                        })(<Input placeholder="请输入" />)}
                    </Form.Item>
                </Col>
            );
        }
        return children;
    }

    handleSearch = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
        });
    };

    handleReset = () => {
        this.props.form.resetFields();
    };

    toggle = () => {
        const { expand } = this.state;
        this.setState({ expand: !expand });
    };

    render() {
        return (
            <Form {...formItemLayout} className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                <Row gutter={24}>{this.getFields()}</Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">
                            搜索</Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                            清除</Button>
                        <span style={{ marginLeft: 8, fontSize: 12, cursor: "pointer" }} onClick={this.toggle}>
                            展开 <Icon type={this.state.expand ? 'up' : 'down'} />
                        </span>
                    </Col>
                </Row>
            </Form>
        );
    }
}

const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);

export default WrappedAdvancedSearchForm;
