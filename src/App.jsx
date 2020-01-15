/*
 * @Author: yuanchengyong 
 * @Date: 2020-01-13 09:46:07 
 * @Last Modified by: zyycy_love@126.com
 * @Last Modified time: 2020-01-14 10:33:04
 */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import routes from "./routes";
import './App.less';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
function App() {
  return (
    <div className="app">
      <Router>
        <Layout>
          <Header className="header">
            <div className="logo" >My System</div>
            {/* <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><Link to="/index">Home</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/list">List</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/detail">Detail</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/user">User</Link></Menu.Item>
            </Menu> */}
            <div className="user-info">
              <Icon type="user" />
              <span className="user-name">Teacher Yuan</span>
            </div>
          </Header>
          <Layout className="container">
            <Sider width={200} style={{ background: '#fff', overflow: "auto" }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                // defaultOpenKeys={['userCenter']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <Menu.Item key="1"><Link to="/index"><Icon type="home" />Home</Link></Menu.Item>
                <SubMenu
                  key="userCenter"
                  title={
                    <span>
                      <Icon type="user" />
                      User Center
              </span>
                  }
                >
                  <Menu.Item key="2"><Link to="/user">User</Link></Menu.Item>
                </SubMenu>
                <SubMenu
                  key="list"
                  title={
                    <span>
                      <Icon type="unordered-list" />
                      List View
              </span>
                  }
                >
                  <Menu.Item key="3"><Link to="/list">List</Link></Menu.Item>
                </SubMenu>
                <SubMenu
                  key="detail"
                  title={
                    <span>
                      <Icon type="layout" />
                      Detail View
              </span>
                  }
                >
                  <Menu.Item key="4"><Link to="/detail">Detail</Link></Menu.Item>
                </SubMenu>


              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  overflow: "auto"
                }}
              >
                <Switch>
                  <Redirect from="/" exact to="/index" />
                  {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                  ))}
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
