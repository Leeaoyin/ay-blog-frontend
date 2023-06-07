import React, { useState } from 'react'
import { NavLink, useNavigate, Outlet, useLocation  } from 'react-router-dom';

import { Layout, Menu, Avatar,  Space, Icon, Button,Popover, Typography,Badge,BackTop } from '@arco-design/web-react';
import { IconArrowRight,IconUser} from '@arco-design/web-react/icon';

import './style.css'
import Foot from './Foot';


const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;
const MenuItem = Menu.Item;
const IconFont = Icon.addFromIconFontCn({src: '//at.alicdn.com/t/c/font_4105517_tu7ydspe7w8.js'});


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
                  <Badge count={5} dot dotStyle={{ width: 5, height: 5 }} >
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
    <div className='layout-basic-demo'>
        <BackTop visibleHeight={30} style={{marginBottom:'40px'}}/>
        
        
      <Layout style={{ minHeight: '400px' }}>
          
          <div className='head-root'>
          <Header id='index-header' style={{width: '100%'}} id="head-up">
            
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
                    <IconFont type='icon-fenlei' style={{ fontSize: 35 }} />
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
