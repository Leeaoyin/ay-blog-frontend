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
        Typography ,
        Carousel ,
        List,
        Rate 
    } from '@arco-design/web-react'
import { IconDoubleDown,IconArrowRight,IconBook,IconHeartFill  } from '@arco-design/web-react/icon';

import './style.css';

import RecomContent from './RecomContent';
import {recommend_info} from '../../static/fake';

const InputSearch = Input.Search;
const Row = Grid.Row;
const Col = Grid.Col;
const { Meta } = Card;
const imageSrc = [
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
  ];


export default function Recommend() {

    const [articleList, setArticleList] = useState(recommend_info);

  const doSearch = (e)=>{
    Message.success(`向后台搜索${e}`);
  }

  return (
        <div style={{ }} className="recommend-content">
            <Divider style={{borderBottomStyle: 'dashed'}} orientation='center'><IconDoubleDown /></Divider>
            
            <Row  className='grid-demo' gutter={24} >
                <Col span={6}>
                    {/* <Affix offsetTop={20}> */}
                        <Space direction='vertical' style={{width: '100%'}}>
                        <Carousel autoPlay={true} showArrow='hover' style={{ width: 280 }}>
                                {imageSrc.map((src, index) => (
                                    <div key={index}>
                                    <img
                                        src={src}
                                        style={{ width: '100%' }}
                                    />
                                    </div>
                                ))}
                            </Carousel>
                            <Calendar
                                panel
                                panelWidth={'280px'}
                                panelTodayBtn
                                style={{ margin: '0px auto' }}
                                onChange={(a) => console.log(a)}
                            />
                            
                        </Space>
                    {/* </Affix> */}
                </Col>
                <Col span={12}>
                    <Space direction='vertical' style={{width: '100%'}}>
                        
                        
                        <InputSearch
                            allowClear={true}
                            placeholder='请输入搜索内容'
                            style={{ width: '600px', marginBottom: '10px' }}
                            // height= {}
                            searchButton={true}
                            onSearch={doSearch}
                        />
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
                    </Space>
                </Col>
                <Col span={6}>
                    <Affix offsetTop={20}>
                    <Space direction='vertical' >

                            <Card
                                // className='card-with-icon-hover'
                                hoverable
                                style={{ width: '280px' }}
                            >
                                <Space>
                                    <Space>
                                        <Avatar
                                        style={{
                                            backgroundColor: '#165DFF',
                                        }}
                                        size={28}
                                        >
                                        <img alt='avatar' src={require('../../static/my-avatar.jpg')}/>
                                        </Avatar>
                                        <Typography.Text>联系我~</Typography.Text>
                                    </Space>
                                        <span className='icon-hover'>
                                        
                                            <IconArrowRight
                                            style={{
                                                cursor: 'pointer',
                                            }}
                                            onClick={()=>window.open('https://github.com/Leeaoyin', "_blank")}
                                            />
                                        </span>
                                </Space>
                            </Card>
                    
                        <Card style={{ width: '280px' }} hoverable
                            // title='热门'
                            // extra={<Link>立即查看</Link>}
                        >
                            <List
                                style={{ width: '100%',border: 'none' }}
                                size={'small'}
                                header={<Space><IconBook /><span style={{fontSize: '14px'}}>推荐读物</span></Space>}
                                dataSource={[
                                
                                'java工程师成神之路',
                                '代码大全',
                                '时间管理大师',
                                ]}
                                render={(item, index) => <List.Item key={index}><Link href='#' icon>{item}</Link></List.Item>}
                            />
                        </Card>
                    
                        
                        <Card
                            hoverable
                            style={{ width: '280px' }}
                            cover={
                                <div style={{ height: 204, overflow: 'hidden' }}>
                                <img
                                    style={{ width: '100%', transform: 'translateY(-20px)' }}
                                    alt='dessert'
                                    src='https://mdn.alipayobjects.com/huamei_0prmtq/afts/img/A*ksNSS7r2V5gAAAAAAAAAAAAADvuFAQ/original'
                                />
                                </div>
                            }
                            >
                            <Meta
                                title='关注微信公众号'
                                description={
                                <>
                                    
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

            <Divider style={{borderBottomStyle: 'dashed'}} orientation='center'><span>到底啦~~</span></Divider>
        </div>
  )
}
