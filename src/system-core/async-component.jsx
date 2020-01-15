/*
 * @Author: yuanchengyong 
 * @Date: 2020-01-15 17:11:34 
 * @Last Modified by: zyycy_love@126.com
 * @Last Modified time: 2020-01-15 17:21:07
 */
import React, { Component } from 'react';
const asyncComponent = (importComponent) => {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                component: null
            }
        }
        componentDidMount() {
            importComponent()
                .then(cmp => {
                    this.setState({ component: cmp.default });
                });
        }
        render() {
            const C = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    }
};

export default asyncComponent;