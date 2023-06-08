import React,{useState} from 'react'
import { Carousel,Image } from '@arco-design/web-react';


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
                indicatorType={'line'}
                indicatorPosition={'bottom'}
                showArrow='hover'
                style={{}}
                
            >
                
                <div>
                    <Image alt='' src={require('../../static/banner/world_Banner.png')} width={'100%'} 
                    />
                </div>
                <div>
                    <Image alt='' src={require('../../static/banner/zhixing_Banner.png')} width={'100%'}
                    />
                </div>
                
            </Carousel>
      
    </div>
  )
}
