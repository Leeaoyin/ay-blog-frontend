import React from 'react';

import { Card, 
        Link, 
        Message,
        Tag,
        Typography,
        Button,
        Space
    } from '@arco-design/web-react';

import { IconThumbUp, IconShareInternal, IconMore,IconArrowRight } from '@arco-design/web-react/icon';

import './style.css';

const { Meta } = Card;
const COLORS = [

    'green',
    'orange',
    'gold',
    'lime',
    'cyan',
    'blue',
    'arcoblue',
    'purple',
    'pinkpurple',
    'magenta',
    'gray',
  ];

const ellipsisConfig = {
                        rows: '2',
                        ellipsis: 'true',
                        ellipsisStr: '......'
                    };

export default function RecomContent(props) {



    const {id, title, time, tags, content, author} = props;
    

    
  return (
      
    <>

        <Card
            style={{ minWidth: '700px',width: '90%',margin: '0px auto' }}
            className='card-hover-style'
            title={
                    <Space>
                        <Typography.Paragraph copyable style={{fontWeight: 'bold',marginTop: '10px'}}>
                            <Link onClick={()=>Message.success(`${id}`)}>{title}</Link>
                        </Typography.Paragraph>
                    </Space>
                }
            hoverable
            extra={
                    tags.map((item,index)=>{
                        return (
                            <Tag key={index} color={COLORS[index]} style={{ margin: '0 5px' }}>{item}</Tag>
                        )
                    })
                }
                actions={[
                            <Space>
                                    <span style={{fontSize: '12px',fontColor:'#F7F8FA'}}>{author||'未知'}</span>
                                    {/* <span>/</span> */}
                                    <span style={{fontSize: '12px',fontColor:'#F7F8FA'}}>{time}</span>
                                    {/* <span>/</span> */}
                                    <span style={{fontSize: '12px',fontColor:'#F7F8FA'}}>124次</span>
                                    {/* <Link type='text' onClick={()=>Message.success(`${id}`)}>更多</Link> */}
                                    {/* <IconArrowRight /> */}
                            </Space>
                        ]}
        >
           
            <Typography.Paragraph ellipsis={ellipsisConfig}>   
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{content}
            </Typography.Paragraph>
            
        </Card>
      
    </>
  )
}