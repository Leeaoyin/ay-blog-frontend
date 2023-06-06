import React,{useState} from 'react'
import { Space, Card, Avatar, Typography, Modal, Form, Input, Message } from '@arco-design/web-react';
import { IconArrowRight,IconPlus,IconAt } from '@arco-design/web-react/icon';
import { site_info } from '../../static/fake';
import './style.css'
import Banner from '../../component/Banner';



const FormItem = Form.Item;

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
      <Space wrap size={'large'} align='center' style={{margin: 'auto 100px'}}>
        {/* <Banner/> */}
      
      {
        site_info.map((item)=> {
          return (
            <Card
              key={item.id}
              className='card-custom-hover-style'
              hoverable
              style={{ width: 300,borderRadius: '10px'}}
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
              style={{ width: 300,borderRadius: '10px' }}
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
                  <Avatar
                    style={{
                      backgroundColor: '#165DFF',
                    }}
                    size={28}
                  >
                    <IconAt />
                  </Avatar>
                  <Typography.Text>   添加    </Typography.Text>
                </Space>
                  <span className='icon-hover'>
                    <IconPlus
                      style={{
                        cursor: 'pointer',
                      }}
                    />
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
          
    </div>
  )
}
