import React from 'react';

import { Card, 
        Link, 
        Message,
        Tag,
        Typography,
        Button,
        Avatar,
        Space
    } from '@arco-design/web-react';

import { IconThumbUp, IconShareInternal, IconMore } from '@arco-design/web-react/icon';

import './style.css';

const { Meta } = Card;

export default function RecomContent({id, title, time, tags}) {


  return (
    <>

        <Card
            style={{ minWidth: '700px',width: '700px', marginBottom: '10px' }}
            className='card-hover-style'
            title={
                    <Space>
                        <Typography.Paragraph copyable style={{fontWeight: 'bold',marginTop: '10px'}}>{title}</Typography.Paragraph>
                        
                    </Space>
                }
            hoverable
            extra={
                    tags.map((item,index)=>{
                        return (
                            <Tag key={index} color='green' style={{ margin: '0 5px' }}>{item}</Tag>
                        )
                    })
                }
                actions={[
                    <span>{time}</span>,
                    <span className='icon-hover'>
                      <IconThumbUp />
                    </span>,
                    <span className='icon-hover'>
                      <IconShareInternal />
                    </span>,
                    <span className='icon-hover'>
                      <IconMore />
                    </span>,
                    
                  ]}
        >
           
            Card content
        </Card>
      
    </>
  )
}