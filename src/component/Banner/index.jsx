import React,{useState} from 'react'
import { Carousel } from '@arco-design/web-react';


const imageSrc = [
  'http://static.leeay.cn/banner/welcome.png',
  'http://static.leeay.cn/banner/black.png',
  'http://static.leeay.cn/banner/self-driver.png'
];
const image_online = [
    
]

export default function Banner() {
  return (
    <div style={{ width: '100%'}}>

            <Carousel
                autoPlay
                indicatorType={'slider'}
                indicatorPosition={'bottom'}
                showArrow='never'
                style={{}}
                
            >
                
                <div>
                    <img alt='' src={require('../../static/banner/world_Banner.png')} style={{ width: '100%',height: 200}}
                    />
                </div>
                <div>
                    <img alt='' src={require('../../static/banner/zhixing_Banner.png')} style={{ width: '100%',height: 200}}
                    />
                </div>
                
            </Carousel>
      
    </div>
  )
}
