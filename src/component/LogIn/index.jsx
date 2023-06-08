import React,{useState} from 'react'

import { Layout,
         Card, 
         Link, 
         Space, 
         Tabs,
         Message,
         Form,
         Input,
         Button,
         Icon
        } from '@arco-design/web-react';

import { useNavigate  } from 'react-router-dom';
import { IconUser,IconEmail } from '@arco-design/web-react/icon';



import './style.css';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const Content = Layout.Content;
const IconFont = Icon.addFromIconFontCn({src: '//at.alicdn.com/t/c/font_4105517_tu7ydspe7w8.js'});


export default function LogIn() {
  const [loginLoding,setLoginLoding] = useState(false);
  const navigate=useNavigate();
  const [form] = Form.useForm();

  const checkLogin = ()=>{
    form.validate().then((res) => {
        setLoginLoding(!loginLoding);
        setTimeout(() => {
          Message.success(JSON.stringify(res));
          setLoginLoding(!loginLoding);
          navigate('/index/home');
        }, 1500);
      }).catch((error)=>{
        console.log('====================================');
        console.log(error);
        console.log('====================================');
      });

  }

  return (
    <div className='layout-basic-login' style={{minWidth: '800px'}}>
      <Layout style={{ height: '100vh' }}>
        <Content>
            <Space direction='vertical' style={{width: 400, margin:'auto'}}>
                <div className="login-img">
                {/* <img src="https://mdn.alipayobjects.com/huamei_0prmtq/afts/img/A*IVdnTJqUp6gAAAAAAAAAAAAADvuFAQ/original" alt="语雀" class="theme-image index-module_logo_iT2c+" style={{height: '62px'}}/> */}
                </div>
            <Tabs type="rounded" className='index-module__loginCard--w1Ov0' defaultActiveTab='1' style={{ width: 400, margin:'auto' }}>
                    <TabPane key='1' title={<span><IconUser style={{ marginRight: 6 }}/>账号</span>} >
                        
                            <Space size='large'>
                                <Form form={form} style={{ width: 350,margin: '0 auto'}} autoComplete='off' onSubmit={checkLogin}>
                                    <Space direction='vertical'>
                                    <FormItem label='' rules={[{ required: true,message: '账号不能为空' }]}>
                                        <Input size='large' width={200} placeholder='账号' allowClear />
                                    </FormItem>
                                    <FormItem label='' rules={[{ required: true,message: '密码不能为空' }]}>
                                        <Input.Password placeholder='密码' allowClear />
                                    </FormItem>
                                    <FormItem wrapperCol={{ offset: 4 }}>
                                        <Space size={40}>
                                        <Button type='primary' htmlType='submit' onClick={checkLogin} loading={loginLoding}>登录</Button>
                                        <Button type='text' onClick={()=>{Message.info('注册功能暂未开放')}}>注册</Button>
                                        </Space>
                                    </FormItem>  
                                    <FormItem wrapperCol={{ offset: 4 }}>
                                        <Space direction='vertical'>
                                            
                                            <div style={{textAlign: 'center'}}>
                                                <Space>
                                                    <IconFont type='icon-web_wx' style={{ fontSize: 30, marginRight: 10 }} />
                                                    <IconFont type='icon-dingtalk' style={{ fontSize: 30, marginRight: 10 }} />
                                                    <IconFont type='icon-QQ' style={{ fontSize: 30, marginRight: 10 }}/>
                                                </Space>
                                            </div>
                                            <span>登录即代表同意本站<Link href='#'>用户协议</Link></span>
                                        </Space>
                                    </FormItem>
                                    </Space>
                                </Form>
                            </Space>
                    
                </TabPane>
                <TabPane key='2' title={<span><IconEmail style={{ marginRight: 6 }}/>邮箱</span>}>
                    <Space
                        size='large'
                        >
                            <Space size='large'>
                                <Form style={{ width: 350,margin: '0 auto'}} autoComplete='off'>
                                    <Space direction='vertical'>
                                    <FormItem label='' rules={[{ required: true,message: '邮箱不能为空' }]}>
                                        <Input placeholder='邮箱' allowClear  />
                                    </FormItem>
                                    <FormItem label='' rules={[{ required: true,message: '验证码不能为空' }]}>
                                        <Input placeholder='验证码' allowClear addAfter={<Button type='text'>发送</Button>}/>
                                    </FormItem>
                                    <FormItem >
                                        <Button type='primary' htmlType='submit' long onClick={()=>{Message.info('邮箱功能暂未开放~')}}>登录/注册</Button>
                                    </FormItem>  
                                    <FormItem wrapperCol={{ offset: 4 }}>
                                    <Space direction='vertical'>
                                            <div style={{textAlign: 'center'}}>
                                                <Space>
                                                <IconFont type='icon-web_wx' style={{ fontSize: 30, marginRight: 10 }} onClick={()=>Message.info('微信功能暂未开放')}/>
                                                <IconFont type='icon-dingtalk' style={{ fontSize: 30, marginRight: 10 }} />
                                                <IconFont type='icon-QQ' style={{ fontSize: 30, marginRight: 10 }}/>
                                                </Space>
                                            </div>
                                            <span>登录即代表同意本站<Link href='#'>用户协议</Link></span>
                                        </Space>
                                    </FormItem>
                                    </Space>
                                </Form>
                            </Space>
                        </Space>
                </TabPane>
                </Tabs>

            </Space>

        



        </Content>
      </Layout>
      
    </div>
  )
}
