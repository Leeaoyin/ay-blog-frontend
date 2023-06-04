import React from 'react'
import { Button,
        Space,
        Input,
        Result,
        Alert  } from '@arco-design/web-react';
import { IconCheck,IconClose } from '@arco-design/web-react/icon';
        
import { useNavigate  } from 'react-router-dom';
        
import Vditor from 'vditor';
import 'vditor/dist/index.css';
import './style.css';

export default function EditUp() {

    const [vd, setVd] = React.useState();
    const [success, setSuccess] = React.useState(false);
    const [completeLoading, setCompleteLoading] = React.useState(false);

    const navigate=useNavigate()

    React.useEffect(() => {
      const vditor = new Vditor("vditor", {
        after: () => {
          setVd(vditor);
        },
        "counter": {
            "enable": true,
            "type": "text",
            "max": 800
          },
        height: '90%',
        mode: 'sv'

      });
    }, []);

    const handleMarkdown = (e)=>{
        console.log(vd.getHTML());
        setCompleteLoading(!completeLoading);
        setTimeout(()=>{
            //   Message.success('登陆成功');
            setSuccess(!success);
            },1000);
        
    }

    const goDetailed = ()=>{
        navigate('/index/recommend');
    }
  return (
    <div style={{width: '100%'}}>
        {
            success ? 
            (
                <Result
                    status='success'
                    title='发布成功！'
                    subTitle='内容已经成功发布~'
                    extra={[
                    
                    <Button key='back' type='primary' onClick={goDetailed}>
                        去查看
                    </Button>,
                    ]}
                ></Result>
            )
            :
            (
                <>
                <Alert content='图片功能正在完善中，暂不支持~' closable />
                    <div style={{width: '100%',height: '40px'}}>
                    
                        <Space>
                            <Input style={{ width: 600 }} status='warning' placeholder='请输入标题' maxLength={50} showWordLimit/>
                            <Button type="primary" icon={<IconCheck />} onClick={handleMarkdown} loading={completeLoading}> 发布 </Button>
                            <Button type="text" icon={<IconClose />}> 取消 </Button>
                            
                        </Space>
                    </div>
                    <div id="vditor"/>
                </>
            )
        }
    </div>

  )
}