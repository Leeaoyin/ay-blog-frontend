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
                    <div style={{width: '100%',height: '40px',lineHeight: '40px',display: 'flex',justifyContent: 'space-between',marginBottom: '10px'}}>
                    
                        {/* <Space size='large' style={{width: '100%'}}> */}
                            <Input ref={inputRef} allowClear style={{width: '100%',marginRight: '10px'}}  status='warning'  onChange={inputTitle} placeholder='标题' maxLength={20} showWordLimit />
                            <InputTag allowClear placeholder='输入标签按回车确认'  onChange={inputTags}  status='warning' />
                            {/* <Input allowClear style={{width: '100%'}}  status='warning'  onChange={inputTitle} placeholder='介绍' maxLength={20} showWordLimit /> */}
                            <Button type="text" icon={<IconCheck />} onClick={submitArticle} loading={completeLoading}> 发布 </Button>
                        {/* </Space> */}
                    </div>
                    <div id="vditor"/>
                </>
            )
        }
    </div>

  )
}