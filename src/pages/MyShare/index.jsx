import React from 'react'
import { Empty,Space,Message,Card,Link,Grid, Divider } from '@arco-design/web-react';

import RecomContent from '../Recommend/RecomContent';
import {recommend_info} from '../../static/fake';

import { IconDoubleDown  } from '@arco-design/web-react/icon';

const Row = Grid.Row;
const Col = Grid.Col;

export default function MyShare() {

    const [articleList, setArticleList] = React.useState(recommend_info);

  return (
    <div>
      {/* <Empty
        style={{marginTop: '100px'}}
        imgSrc={require('../../static/pageImg/no_share.png')}
        description={
          <span>正在快马加鞭的赶来~~</span>
        }
      /> */}

    {/* <Divider style={{borderBottomStyle: 'dashed'}} orientation='center'><IconDoubleDown /></Divider> */}
    <Row className='grid-gutter-demo' gutter={24} style={{width:'1200px'}}>
            {/* <Col span={3}></Col> */}
            <Col span={24} style={{}}>
            
                    <Space direction='vertical' style={{width: '100%'}}>
                        
                        {
                            articleList.length!= 0 ? 
                            (
                                <>
                                {
                                    articleList.map((recommends)=>{
                                        return (
                                            <>
                                            <RecomContent
                                                width={'100%'}
                                                key={recommends.id} 
                                                title={recommends.article_info.title} 
                                                time={recommends.article_info.time} 
                                                id={recommends.article_info.id} 
                                                tags={recommends.article_info.tags}
                                                content={recommends.article_info.content}
                                                author={recommends.author.name}
                                            />
                                            </>
                                        )
                                    })
                                }
                            
                            <Card style={{ width: '100%' }} hoverable onClick={()=>Message.success('hi~hi~')}>
                                <Space style={{margin: '0px auto'}}>
                                    <Link>查看更多。。。</Link>
                                </Space>
                            </Card>
                            </>
                            )

                            
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
            </Col>
            {/* <Col span={3} style={{border: '1px solid red'}}>
            <div>col - 12</div>
            </Col> */}
        </Row>
        <Divider style={{borderBottomStyle: 'dashed'}} orientation='center'><span>到底啦~~</span></Divider>

    </div>
  )
}
