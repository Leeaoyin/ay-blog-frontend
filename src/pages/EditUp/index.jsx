import React from 'react'
import { Button,
        Space,
        Input,
        Result,
        Alert,
        InputTag  } from '@arco-design/web-react';
        
import { IconCheck,IconClose } from '@arco-design/web-react/icon';
        
import { useNavigate  } from 'react-router-dom';
        
import Vditor from 'vditor';
import 'vditor/dist/index.css';
import './style.css';

export default function EditUp() {

    const [vd, setVd] = React.useState(); // markdown edit
    const [success, setSuccess] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [tags, setTags] = React.useState([]);
    const [completeLoading, setCompleteLoading] = React.useState(false);
    const [articleInfo, setArticleInfo] = React.useState({});  //object for submit article api
    const inputRef = React.useRef();


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
      inputRef.current.focus();
    }, []);


    const submitArticle = (e)=>{
        let content = vd.getHTML();
        setArticleInfo({...articleInfo,content});
        setCompleteLoading(!completeLoading);
        setTimeout(()=>{
            setSuccess(!success);
            },1000);   
    }


    const inputTitle = (title,e)=>{
        setArticleInfo({...articleInfo,title});
    }

    const inputTags = (tags,reason)=>{
        setArticleInfo({...articleInfo,tags});
    }

    const clearAllInput = ()=>{
        setTitle('');
        setTags([]);
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
                    <Button key='back' type='primary' onClick={()=>navigate('/index/recommend')}>
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
                    
                        <Space size='large'>
                            <Input ref={inputRef} allowClear style={{ width: 550 }} status='warning'  onChange={inputTitle} placeholder='请输入标题' maxLength={30} showWordLimit />
                            <InputTag allowClear placeholder='输入标签按回车确认'  onChange={inputTags} style={{ width: 550 }} status='warning' />
                            <Button type="text" icon={<IconCheck />} onClick={submitArticle} loading={completeLoading}> 发布 </Button>
                            {/* <Button type="text" icon={<IconClose />} onClick={clearAllInput}> 清空 </Button> */}
                            
                            
                        </Space>
                    </div>
                    <div id="vditor"/>
                </>
            )
        }
    </div>

  )
}