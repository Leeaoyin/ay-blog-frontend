import React, {useState} from 'react'

import { Input, 
        Message, 
        Empty, 
        Grid, 
        Avatar, 
        Space,
        Button,
        Divider,
        Calendar,
        Affix,
        Card,
        Link ,
        Pagination ,
        BackTop
    } from '@arco-design/web-react'
// import { IconHeart, IconMessage, IconStar } from '@arco-design/web-react/icon';

import './style.css';

import RecomContent from './RecomContent';
import {recommend_info} from '../../static/fake';

const InputSearch = Input.Search;
const Row = Grid.Row;
const Col = Grid.Col;
const { Meta } = Card;


export default function Recommend() {

    const [articleList, setArticleList] = useState(recommend_info);

  const doSearch = (e)=>{
    Message.success(`向后台搜索${e}`);
  }

  return (
        <div style={{ width: '100%'}}>
            
            <Row  className='grid-demo' gutter={24}>
                <Col span={6}>
                    <Affix offsetTop={20}>
                        <Space direction='vertical' style={{width: '100%'}}>
                            <InputSearch
                                    allowClear={true}
                                    placeholder='请输入搜索内容'
                                    // style={{ width: '260px', margin: '0px auto' }}
                                    // height= {}
                                    searchButton={true}
                                    onSearch={doSearch}
                            />
                            <Calendar
                                panel
                                panelWidth={260}
                                panelTodayBtn
                                style={{ margin: '0px auto' }}
                                onChange={(a) => console.log(a)}
                            />
                        </Space>
                    </Affix>
                </Col>
                <Col span={12}>
                <Space direction='vertical' style={{width: '100%'}}>
                        {/* <InputSearch
                            allowClear={true}
                            placeholder='请输入搜索内容'
                            style={{ minWidth: '700px',width: '100%', marginBottom: '10px' }}
                            // height= {}
                            searchButton={true}
                            onSearch={doSearch}
                        />
                        <Divider/>  */}
                        {
                            articleList.length!= 0 ? 
                            articleList.map((recommends)=>{
                                return (
                                    <>
                                    <RecomContent
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

                            
                            :

                                (
                                    <Empty
                                            style={{marginTop: '100px'}}
                                            imgSrc={require('../../static/pageImg/no_recommend.png')}
                                            description={<span>暂时无内容哦~~</span>}
                                    />
                                )
                        }
                        {/* <Pagination simple total={articleList.length} size='small' pageSize={2} /> */}
                    </Space>
                </Col>
                <Col span={6}>
                    <Affix offsetTop={20}>
                    <Space direction='vertical' style={{width: '100%'}}>
                        
                        <Card style={{ width: 260,margin: '0px auto' }}
                            title='热门'
                            extra={<Link>立即查看</Link>}
                        >
                            ByteDance's core product, Toutiao ('Headlines'), is a content platform in China and around
                            the world. Toutiao started out as a news recommendation engine and gradually evolved into a
                            platform delivering content in various formats.
                        </Card>
                        
                        <Card
                            hoverable
                            style={{ width: 260,margin: '0px auto' }}
                            cover={
                                <div style={{ height: 204, overflow: 'hidden' }}>
                                <img
                                    style={{ width: '100%', transform: 'translateY(-20px)' }}
                                    alt='dessert'
                                    src='//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp'
                                />
                                </div>
                            }
                            >
                            <Meta
                                title='关注微信公众号'
                                description={
                                <>
                                    Card content
                                </>
                                }
                            />
                            </Card>
                    </Space>
                    </Affix>
                
                </Col>
                {/* <Col span={2}>
                </Col> */}
            </Row>
        </div>
  )
}
