import React from 'react'
import { Empty } from '@arco-design/web-react';

export default function MyShare() {
  return (
    <div>
      <Empty
        style={{marginTop: '100px'}}
        imgSrc={require('../../static/pageImg/no_share.png')}
        description={
          <span>正在快马加鞭的赶来~~</span>
        }
      />
    </div>
  )
}
