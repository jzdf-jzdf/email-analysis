import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import './index.scss'
import {
    HomeOutlined,
    MailOutlined,
    FileSearchOutlined,
  } from '@ant-design/icons'
const { Header, Content } = Layout;
const items = [
    {
      label: '首页',
      key: '/',
      icon: <HomeOutlined />,
    },
    {
        label: '邮件分析',
        key: '/analysis',
        icon: <FileSearchOutlined />,
    },
    {
      label: '邮件管理',
      key: '/manage',
      icon: <MailOutlined />,
    },
   
  ]
const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center', 
          justifyContent:'flex-end',
        }}
      >
        <div className="demo-logo" />
        <Menu 
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            // flex: 1,
            // minWidth: 0,
            marginRight:"60px"
          }}
        //   onClick={menuClick}
        />
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{
            background: colorBgContainer,
            padding: 24,
            borderRadius: borderRadiusLG,
            minHeight:'600px'
          }}
        >
          Content
        </Layout>
      </Content>
    </Layout>
  );
};
export default Home;