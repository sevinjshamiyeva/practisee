import React, { Children, useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
 UserAddOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Flex } from 'antd';
import Users from '../../admin/Users/index';

const { Header, Sider, Content } = Layout;

const Home: React.FC = ({children}) => {
  // const [menu1, setMenu] = useState('1');
  // const [menu2, setMenu2]=useState('2');
    const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{height:"100vh"}}>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{background: "rgb(2,0,36)",
        background: "linear-gradient(90deg, rgba(2,0,36,1) 1%, rgba(3,3,70,1) 76%)"}} >
        <div className="demo-logo-vertical" />
        <Menu
        style={{background: "rgb(2,0,36)",
        background: "linear-gradient(90deg, rgba(2,0,36,1) 1%, rgba(3,3,70,1) 76%)", color:"white"}}
        //   theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined style={{color:"white"}}/>,
              
              label: 'Users',
              onClick:()=>{
                navigate("/users")
              }
            },
            {
              key: '2',
              icon:<UserAddOutlined  style={{color:"white"}}/>,
              label: 'addUser',
              onClick:()=>{
              
                navigate("/addUser")
              }
  
            },
            {
              key: '3',
              icon: <UploadOutlined style={{color:"white"}} />,
              label: 'Out',
              onClick:()=>{
                navigate("/")
              }
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ color:"white", padding: 0,background: "rgb(2,0,36)",background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)" ,display:"flex", justifyContent:'space-between'}}>
          <Button 
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              height: 64,
              color:"white"
            }}
          ></Button>
          <div style={{fontSize:"16px",paddingRight:"10px"}}>Admin Panel</div>
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
         {children}
         {/* <Users/>
       <Login/> */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;