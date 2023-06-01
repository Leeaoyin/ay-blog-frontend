import React from 'react'

import { Input, 
        Message, 
        Empty, 
        List, 
        Avatar, 
        Space,
        Button,
        Divider
    } from '@arco-design/web-react'
// import { IconHeart, IconMessage, IconStar } from '@arco-design/web-react/icon';

import './style.css';

import RecomContent from './RecomContent';
import {recommend_info} from '../../static/fake';

const InputSearch = Input.Search;


export default function Recommend() {

  const doSearch = (e)=>{
    Message.success(`向后台搜索${e}`);
  }

  return (
    <div>
      <Space direction='vertical' >
                <InputSearch
                    allowClear={true}
                    placeholder='请输入搜索内容'
                    style={{ minWidth: '700px',width: '700px', marginBottom: '10px',color: 'white' }}
                    // height= {}
                    searchButton={true}
                    onSearch={doSearch}
                />
                <Divider/>
        
          
                {
                    recommend_info.length!= 0 ? 
                    recommend_info.map((recommends)=>{
                        return (
                            <RecomContent
                                key={recommends.id} 
                                title={recommends.article_info.title} 
                                time={recommends.article_info.time} 
                                id={recommends.article_info.id} 
                                tags={recommends.article_info.tags}
                                content={recommends.article_info.content}
                                author={recommends.author.name}
                            />
                        )
                    }) 

                    
                    :

                        (
                            <Empty
                                    style={{marginTop: '100px'}}
                                    imgSrc={require('../../static/pageImg/no_recommend.png')}
                                    description={<span>暂时无内容哦~~</span>}
                            />
                        )
                    
                }
          
      </Space>

      
    </div>
  )
}
