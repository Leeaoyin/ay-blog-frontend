import React from 'react'
import { Button,
        Space,
        Input } from '@arco-design/web-react';
import Vditor from 'vditor';
import 'vditor/dist/index.css';
import './style.css';

export default function EditUp() {

    const [vd, setVd] = React.useState();
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
        height: '95%',
        mode: 'sv'

      });
    }, []);

    const handleMarkdown = (e)=>{
        console.log(vd.getHTML());
    }
  return (
    <div style={{width: '100%'}}>
        <div style={{width: '100%',height: '40px'}}>
            <Space>
                <Input style={{ width: 600 }} status='warning' placeholder='请输入标题' />
                <Button type="primary" onClick={handleMarkdown}> 保存 </Button>
                <Button type="text"> 取消 </Button>
            </Space>
        </div>
        <div id="vditor"/>
    </div>

  )
}