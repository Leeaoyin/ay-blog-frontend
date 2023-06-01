import React,{useState} from 'react'

import { Layout,
         Card, 
         Link, 
         Space, 
         Tabs,
         Message,
         Form,
         Input,
         Button
        } from '@arco-design/web-react';

import { useNavigate  } from 'react-router-dom';
// import { IconWechat } from '@arco-design/web-react/icon';



import './style.css';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const Content = Layout.Content;


export default function LogIn() {
  const [loginLoding,setLoginLoding] = useState(false);
  const navigate=useNavigate()

  const checkLogin = ()=>{
    setLoginLoding(!loginLoding);
    setTimeout(()=>{
      Message.success('登陆成功');
      setLoginLoding(!loginLoding);
      navigate('/index/home');
      
    },1000);

  }

  return (
    <div className='layout-basic-login' style={{minWidth: '800px'}}>
      <Layout style={{ height: '100vh' }}>
        <Content>
        <Tabs className='index-module__loginCard--w1Ov0' defaultActiveTab='1' style={{ width: 500, margin:'auto' }}>
          <TabPane key='1' title='账号' >
            <Space size='large'>
                <Space size='large'>
                    <Form style={{ width: 350,margin: '0 auto'}} autoComplete='off'>
                        <Space direction='vertical'>
                          <FormItem label='' wrapperCol={{ offset: 2 }}>
                            <Input placeholder='账号' allowClear />
                          </FormItem>
                          <FormItem label='' wrapperCol={{ offset: 2 }}>
                            <Input.Password placeholder='密码' allowClear />
                          </FormItem>
                          <FormItem wrapperCol={{ offset: 8 }}>
                            <Space size={40}>
                            <Button type='primary' onClick={checkLogin} loading={loginLoding}>登录</Button>
                            <Button type='text' onClick={()=>{Message.info('注册功能完善中~')}}>注册</Button>
                            </Space>
                          </FormItem>  
                          <FormItem wrapperCol={{ offset: 7 }}>
                            <span>登录即代表同意本站<Link href='#'>用户协议</Link></span>
                          </FormItem>
                        </Space>
                    </Form>
                </Space>
        </Space>
      </TabPane>
      <TabPane key='2' title='邮箱'>
          <Space
              size='large'
            >
                <Space size='large'>
                    <Form style={{ width: 350,margin: '0 auto'}} autoComplete='off'>
                        <Space direction='vertical'>
                          <FormItem label='' wrapperCol={{ offset: 2 }}>
                            <Input placeholder='邮箱' allowClear  />
                          </FormItem>
                          <FormItem label='' wrapperCol={{ offset: 2 }}>
                            <Input placeholder='验证码' allowClear addAfter={<Button type='text'>发送</Button>}/>
                          </FormItem>
                          <FormItem wrapperCol={{ offset: 2 }}>
                            <Button type='primary' htmlType='submit' long onClick={()=>{Message.info('邮箱功能完善中~')}}>登录/注册</Button>
                        
                          </FormItem>  
                          <FormItem wrapperCol={{ offset: 7 }}>
                            <span>登录即代表同意本站<Link href='#'>用户协议</Link></span>
                          </FormItem>
                        </Space>
                    </Form>
                </Space>
            </Space>
      </TabPane>
    </Tabs>

        



        </Content>
      </Layout>
      
    </div>
  )
}
