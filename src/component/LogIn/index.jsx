import React from 'react'

import { Layout, Card, Link, Space, Tabs} from '@arco-design/web-react';
// import { IconWechat } from '@arco-design/web-react/icon';
import { Form, Input, Button } from '@arco-design/web-react';


import './style.css';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const Content = Layout.Content;


export default function LogIn() {
  return (
    <div className='layout-basic-login' style={{minWidth: '800px'}}>
      <Layout style={{ height: '100vh' }}>
        <Content>
        <Tabs className='index-module__loginCard--w1Ov0' defaultActiveTab='1' style={{ width: 500, margin:' auto' }}>
          <TabPane key='1' title='登录' >
            <Space
                
                size='large'
            >
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
                            <Button type='primary'>登录</Button>
                            <Button type='text'>注册</Button>
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
                            <Button type='primary' htmlType='submit' long>登录/注册</Button>
                        
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
