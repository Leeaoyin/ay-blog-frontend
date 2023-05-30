import React from 'react'
import { Message } from '@arco-design/web-react';

import { Space , Link, Divider } from '@arco-design/web-react';

export default function Foot() {
  return (
    <div>
      <Space split={<Divider type='vertical' />} style={{margin: '0 auto'}}>
            <Link style={{fontSize: '12px'}} onClick={()=>Message.info('敬请期待')}>动态</Link>
            <Link style={{fontSize: '12px'}}>安全协议</Link>
            <Link href='https://beian.miit.gov.cn/#/Integrated/index' target='_blank' style={{fontSize: '12px'}}>
              ICP备案号：鄂ICP备2023006270号
            </Link>
          </Space>
    </div>
  )
}
