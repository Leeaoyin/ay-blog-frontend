import React from 'react'

import { Input, Message, Empty, List, Avatar, Space } from '@arco-design/web-react'
// import { IconHeart, IconMessage, IconStar } from '@arco-design/web-react/icon';

import './style.css';

const InputSearch = Input.Search;


export default function Recommend() {

  const doSearch = (e)=>{
    Message.success(`向后台搜索${e}`);
  }

  return (
    <div>

      {/* <InputSearch
                allowClear={true}
                placeholder='请输入搜索内容'
                style={{ width: '80%', margin: '10px auto' }}
                // height= {}
                searchButton={true}
                onSearch={doSearch}
              /> */}
      
    

        <Empty
          style={{marginTop: '100px'}}
          imgSrc={require('../../static/pageImg/no_recommend.png')}
          description={
            <span>暂时无内容哦~~</span>
          }
        />

      
    </div>
  )
}
