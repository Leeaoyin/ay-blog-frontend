import React, { useState } from 'react'
import { NavLink, useNavigate, Outlet, useLocation  } from 'react-router-dom';

import { Layout, Menu, Avatar,  Space, Divider, Icon, Button,Popover, Typography,Badge } from '@arco-design/web-react';
import { IconArrowRight,IconUser} from '@arco-design/web-react/icon';

import './style.css'
import Foot from './Foot';


const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;
const MenuItem = Menu.Item;
const IconFont = Icon.addFromIconFontCn({src: '//at.alicdn.com/t/c/font_4105517_zr4ddg9i7a.js'});


export default function Index() {
  const navigate = useNavigate();
  const location = useLocation();
  const [islogin, setIsLogin] = useState(false);


  const loginOn = ()=>{
    setIsLogin(!islogin);
    navigate('/login');
  }




  const ContentCard = ({ children }) => {
    return (
      <Space
        style={{
          display: 'flex',
          alignItems: 'center',
          
          justifyContent: 'space-between',
          margin: 'auto 30px'
        }}
      >
        
          {
            islogin ? (
              <Space>
                <Avatar style={{backgroundColor: '#165DFF'}} size={28}>
                  <img alt='avatar' src={require('../../static/my-avatar.jpg')}/>
                </Avatar>
                 
                 <div style={{width: '70px',height: '20px'}}>
                 <Typography.Paragraph heading={1} ellipsis={{ wrapper: 'span' }}>
                      L.AY
                  </Typography.Paragraph>
                 </div>
                 
                 <Popover position='right' title='' content={<span>退出</span>}>
                    <Button onClick={()=>setIsLogin(!islogin)}><IconArrowRight/></Button>
                 </Popover>
              </Space>
            ):
            (
              <Space>
                  <Badge
                                count={5}
                                dot
                                dotStyle={{ width: 5, height: 5 }}
                            >
                <Avatar
                  style={{
                    backgroundColor: '#165DFF',
                  }}
                  size={30}
                >
                  <IconUser />
                </Avatar>
                </Badge>
              <Button type='primary' shape='round' onClick={loginOn}>
                <span style={{fontSize:'12px'}}>登录/注册</span>
              </Button>
              </Space>
            )
          }
        
      </Space>
    );
  };

  return (
    <div className='layout-basic-demo' >
        
        
      <Layout style={{ minHeight: '400px' }}>
          
          <div className='head-root'>
          <Header style={{width: '100%'}} id="head-up">
            
            <div className='menu-demo'>
              <Menu mode='horizontal'  defaultSelectedKeys={['/index/home']} selectedKeys={location.pathname} width={50} theme='dark' style={{borderRadius: '10px'}}>
                
              <MenuItem
                  key='0'
                  style={{ padding: 0, marginRight: 38, }}
                  disabled
                >
                  
                  <div
                    style={{
                      width: 80,
                      height: 30,
                      borderRadius: 10,
                      // background: 'rgb(var(--arcoblue-1))',
                      cursor: 'text',
                    }}
                  >
                    {/* iconfront */}
                    <svg t="1685080892571" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1089" width="32" height="32"><path d="M512 556.3c-9 0-17.9-1.9-26.2-5.5L170.6 411.9c-22.1-9.7-36-30.2-36.3-53.5-0.3-23.2 13-44 34.7-54.3l315.2-149.4c17.4-8.2 38.2-8.2 55.6 0L854.6 304c21.7 10.3 35 31.1 34.7 54.3-0.3 23.2-14.2 43.7-36.3 53.4L538.2 550.8c-8.3 3.6-17.2 5.5-26.2 5.5zM197.3 357.5l312.8 137.9c1.1 0.5 2.6 0.5 3.7 0l312.5-137.8-312.4-148.2c-1.1-0.5-2.7-0.5-3.8 0L197.3 357.5z m632.1 1.6h0.1-0.1zM512.1 874.8c-8.7 0-17.6-2-25.8-5.9L181.4 737c-15.3-6.6-22.4-24.4-15.7-39.7 6.6-15.3 24.4-22.4 39.7-15.7l306 132.4 291.8-132.1c15.2-6.9 33.1-0.2 40 15 6.9 15.2 0.2 33.1-15 40L537 869.1c-7.7 3.8-16.3 5.7-24.9 5.7z m0 0" fill="#e6e6e6" p-id="1090"></path><path d="M815.6 514.6l-304 132.1-303.7-131.8v62.2c0 11.6 6.9 22 17.5 26.6l254.8 109.2c10 4.8 20.7 7.2 31.4 7.2s21.4-2.4 31.4-7.2l255.1-109.4c10.6-4.6 17.5-15 17.5-26.6v-62.3z m0 0" fill="#e6e6e6" p-id="1091"></path></svg>
                  </div>
                </MenuItem>
                <Space size={40}>
                
                    <NavLink to={'home'}><MenuItem key='/index/home'>主页 </MenuItem></NavLink>
                    <NavLink to={'recommend'}><MenuItem key='/index/recommend'>推荐 </MenuItem></NavLink>
                    <NavLink to={'share'}><MenuItem key='/index/share'>分享 </MenuItem></NavLink>
                    <NavLink to={'edit'}><MenuItem key='/index/edit'>发布 </MenuItem></NavLink>
                </Space>
              </Menu>
            </div>
                <ContentCard/>
          </Header>
          </div>

         
          
          <Content style={{paddingTop: '10px'}}>
              <Outlet />
          </Content>
          <Footer>
            <Foot/>
          </Footer>
          
          
      </Layout>
      
    </div>
  )
}
