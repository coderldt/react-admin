import React from 'react';
import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom'
import './index.less'
import { useSelector } from '@/redux';
import DefaultMenu from './menu'
import DefaultHeader from "./header";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const { isCollapse } = useSelector((state) => state.menu);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="layout-container">
      <Sider trigger={null} collapsible collapsed={isCollapse}>
        <div className="demo-logo-vertical" />
        <DefaultMenu />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <DefaultHeader/>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;