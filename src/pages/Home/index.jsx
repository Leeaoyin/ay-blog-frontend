import React,{useState} from 'react'
import { Space, Card, Avatar, Typography, Modal, Form, Input, Message,Grid,Divider } from '@arco-design/web-react';
import { IconArrowRight,IconPlus,IconAt,IconDoubleDown } from '@arco-design/web-react/icon';
import { site_info } from '../../static/fake';
import './style.css'
import Banner from '../../component/Banner';



const FormItem = Form.Item;
const Row = Grid.Row;
const Col = Grid.Col;
const { Meta } = Card;

export default function Home() {

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();


  const onOk =()=> {
    form.validate().then((res) => {
      setConfirmLoading(true);
      setTimeout(() => {
        Message.success(JSON.stringify(res));
        setVisible(false);
        setConfirmLoading(false);
      }, 1500);
    }).catch((error)=>{
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    });
    
  }

  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  };
  


  const openUrl = (url)=>{
    window.open(url, "_blank");
  }
    
  return (
    <div>
        
        {/* <div style={{width: '1100px'}}></div> */}
        {/* <Banner/> */}
        <Row className='grid-gutter-demo' gutter={24} style={{width:'1200px' ,marginTop: '10px'}}>
            
            <Col span={5}>
            <Divider orientation={'center'}><span style={{color: '#7d8186'}}>常用站点</span></Divider>
            <Space direction='vertical' size={'large'} align='center' style={{width: '100%'}}> 
                
                {
                    site_info.map((item)=> {
                    return (
                        <Card
                        key={item.id}
                        className='card-custom-hover-style'
                        hoverable
                        style={{ width: 200,borderRadius: '10px'}}
                        onClick={()=>openUrl(item.url)}
                    >
                        <Space
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                        >
                            <Space>
                            <Avatar
                                size={30}
                                style={{
                                backgroundColor: 'white',
                                }}
                            >
                                <img defaultValue={'adsd'} src={item.url+'/favicon.ico'} alt="" />
                            </Avatar>
                            <Typography.Text>{item.url_title}</Typography.Text>
                            </Space>
                            <span className='icon-hover'>
                                <IconArrowRight
                                style={{
                                    cursor: 'pointer',
                                }}
                                />
                            </span>
                        </Space>
                    </Card>
                    )
                    })
                }

                        <Card
                        className='card-custom-hover-style'
                        hoverable
                        style={{ width: 200,borderRadius: '10px' }}
                        onClick={() => setVisible(true)}
                    >
                            <Space
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                            >
                                <Space>
                                <Avatar style={{backgroundColor: '#165DFF',}} size={28}>
                                    <IconAt />
                                </Avatar>
                                <Typography.Text>   添加    </Typography.Text>
                                </Space>
                                <span className='icon-hover'>
                                    <IconPlus style={{cursor: 'pointer'}}/>
                                </span>
                            </Space>
                    </Card>

                    <Modal
                        title={
                        <>
                        <IconAt />
                        <span>添加站点</span>
                        </>
                        }
                        visible={visible}
                        onOk={onOk}
                        confirmLoading={confirmLoading}
                        onCancel={() => setVisible(false)}
                    >
                        <Form
                        {...formItemLayout}
                        form={form}
                        labelCol={{
                            style: { flexBasis: 90 },
                        }}
                        wrapperCol={{
                            style: { flexBasis: 'calc(100% - 90px)' },
                        }}
                        >
                        <FormItem label='名称' field='name' rules={[{ required: true }]}>
                        <Input placeholder='' />
                        </FormItem>
                        <FormItem label='地址' field='address' rules={[{ required: true }]}>
                        <Input placeholder='' />
                        </FormItem>
                        </Form>
                    </Modal>
                
                
                </Space>
               
            </Col>
            <Col span={14}>
            <Divider orientation={'center'}><IconDoubleDown /></Divider>
                <Banner/>
                <Card hoverable style={{ width: '100%',height: '400px',marginTop: '10px' }}
                      cover={
                        <div className='sider-right' style={{ height: 300, overflow: 'hidden' }}>
                        
                        </div>
                            }
                >
                                <Meta
                                    title='关于我'
                                    // description={<>公测中</>}
                                />
                </Card>
                <Card hoverable style={{ width: '100%',marginTop: '10px'  }}
                      cover={
                        <div className='sider-right' style={{ height: 200, overflow: 'hidden' }}>
                        
                        </div>
                            }
                >
                                <Meta
                                    title='近期计划'
                                    // description={<>公测中</>}
                                />
                </Card>
                
            </Col>
            <Col span={5}>
            <Divider orientation={'center'}><span style={{color: '#7d8186'}}>信息速看</span></Divider>
            <Card hoverable style={{ width: '100%' }}
                      cover={
                        <div className='sider-right' style={{ height: 200, overflow: 'hidden' }}>
                        
                        </div>
                            }
                >
                                <Meta
                                    title='公告'
                                    description={<>公测中</>}
                                />
                </Card>
            
            </Col>
        </Row>
      
          
    </div>
  )
}
