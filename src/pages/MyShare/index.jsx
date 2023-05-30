import React from 'react'
import { Empty } from '@arco-design/web-react';

export default function MyShare() {
  return (
    <div>
      <Empty
        style={{marginTop: '100px'}}
        imgSrc={require('../../static/pageImg/no_share.png')}
        description={
          <span>暂时无内容哦~~</span>
        }
      />
    </div>
  )
}
