import React from 'react'
import { Button,
        Space,
        Input,
        Result,
        Form,
        Grid,
        Select,
        Card,
        Modal  } from '@arco-design/web-react';
        
import { IconCheck,IconUndo } from '@arco-design/web-react/icon';
        
import { Navigate, useNavigate  } from 'react-router-dom';
import { getUserName } from '../../utils/Storeutil';
        
import Vditor from 'vditor';
import 'vditor/dist/index.css';
import './style.css';

export default function EditUp() {

    const [vd, setVd] = React.useState(); // markdown edit
    const [success, setSuccess] = React.useState(false);
    const [visible, setVisible] = React.useState(false);
    const [completeLoading, setCompleteLoading] = React.useState(false);
    const [articleInfo, setArticleInfo] = React.useState({});  //object for submit article api
    const inputRef = React.useRef();
    // form obj
    const FormItem = Form.Item;
    const [form] = Form.useForm();
    // Grid obj
    const Row = Grid.Row;
    const Col = Grid.Col;
    // select obj
    const Option = Select.Option;

    const options = ['后端', '前端', 'test', 'Shenzhen', 'Chengdu', 'Wuhan'];


    const navigate=useNavigate()

    React.useEffect(() => {
      const vditor = new Vditor("vditor", {
        after: () => {
          setVd(vditor);
        },
        "counter": {
            "enable": true,
            "type": "text",
            "max": 1000
          },
        height: '600px',
        mode: 'sv'

      });
      inputRef.current.focus();
    }, []);

    React.useEffect(()=>{
        if(!getUserName()){
            setVisible(!visible)
            
        }
    },[]);

    const submitArticle = (e)=>{
        if(!getUserName()){
            setVisible(!visible)
            
        }else{
            let content = vd.getHTML();
        setArticleInfo({...articleInfo,content});
        setCompleteLoading(!completeLoading);
        setTimeout(()=>{
            setSuccess(!success);
            },1000);  
        }
         
    }


    const inputTitle = (title,e)=>{
        setArticleInfo({...articleInfo,title});
    }




  return (
    <div>
        <Modal
        title='提示'
        visible={visible}
        onOk={() => navigate('/login')}
        onCancel={() => navigate(-1)}
      >
        <p>
          未登录~
        </p>
      </Modal>
        <Card style={{borderRadius: '0px'}}>
            <Row className='grid-gutter-demo' gutter={24} style={{width:'1200px'}}>
                <Col span={24}>
                {
                    success ? 
                    (
                        <Result
                            status='success'
                            title='发布成功！'
                            subTitle='内容已经成功发布~'
                            extra={[
                            <Button key='back' type='primary' onClick={()=>navigate('/index/recommend')}>
                                去查看
                            </Button>,
                            ]}
                        ></Result>
                    )
                    :
                    (
                            <Form layout='vertical' form={form} size='large' onValuesChange={(v, vs) => {
                                console.log(v, vs);
                            }}
                            onSubmit={(v) => {
                                submitArticle();
                                console.log(v);
                            }}>
                                <FormItem label='标题' field='title' rules={[{ required: true,message: '标题不能为空哦~' }]}>
                                    <Input ref={inputRef} allowClear style={{marginRight: '10px'}}    onChange={inputTitle} placeholder='标题' maxLength={20} showWordLimit />
                                </FormItem>
                                <FormItem label='描述' field='describe' rules={[{ required: true,message: '描述不能为空哦~' }]}>
                                    <Input  allowClear style={{marginRight: '10px'}} onChange={inputTitle} placeholder='简单介绍一下' maxLength={40} showWordLimit />
                                </FormItem>
                                <FormItem label='标签' field='tags' rules={[{ required: true,message: '标签不能为空哦~' }]}>
                                    <Select mode={'multiple'} size={'large'} placeholder='选择标签' showSearch style={{ width: 345 }} >
                                        {options.map((option) => (
                                        <Option key={option} value={option}>
                                            {option}
                                        </Option>
                                        ))}
                                    </Select>
                                </FormItem>
                                <FormItem label={<div>内容 <span style={{fontSize: '12px',color: '#7d8186'}}>（全屏编辑体验更佳）</span></div>} field='content' >
                                    <div id="vditor" style={{height: '100%'}}/>
                                </FormItem>
                                <FormItem wrapperCol={{ offset: 10 }}>
                                    <Space size="large">
                                        <Button type='primary' htmlType='submit' icon={<IconCheck />} loading={completeLoading}>发布</Button>
                                        <Button type='outline' icon={<IconUndo />} onClick={() => {form.resetFields();}}>重置</Button>
                                    </Space>
                                </FormItem>

                            </Form>
                    )
                }
                </Col>
                {/* <Col span={2}></Col> */}
                
            </Row>
        </Card>
        
    </div>

  )
}