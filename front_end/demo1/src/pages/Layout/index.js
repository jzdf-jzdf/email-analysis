import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, DatePicker,  } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import './index.scss'
import {
  HomeOutlined,
  MailOutlined,
  EditOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
const { Header, Content, Sider } = Layout;
const items = [
  {
    label: '首页',
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: '邮件管理',
    key: '/manage',
    icon: <MailOutlined />,
  },
  {
    label: '上传邮件',
    key: '/upload',
    icon: <EditOutlined />,
  },
]

;
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const MailLayout = () => {
  const location = useLocation()
  const selectedKey = location.pathname
  const navigate = useNavigate()
  const menuClick = (route) => {
      navigate(route.key)
  }
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
          onClick={menuClick}
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
            padding: '24px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
          className="layout-content"
        >
          <Sider className='sider'
            style={{
              background: colorBgContainer,
              height:'500px'
            }}
            width={200}
          >
            <Menu
            
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
              }}
              items={items}
              onClick={menuClick}
            />
          </Sider>
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
            <Outlet />
            
            
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};
export default MailLayout;