import React,{useState} from 'react'
import { Carousel } from '@arco-design/web-react';
const imageSrc = [
  'http://static.leeay.cn/banner/welcome.png',
  'http://static.leeay.cn/banner/black.png',
  'http://static.leeay.cn/banner/self-driver.png'
];

export default function Banner() {
  return (
    <div>

            <Carousel
                autoPlay
                indicatorType={'slider'}
                indicatorPosition={'bottom'}
                showArrow='never'
                style={{ width: '100%',marginLeft: '10px'}}
            >
                {imageSrc.map((src, index) => (
                <div key={index}>
                    <img alt='' src={src} style={{ width: '100%'}}
                    />
                </div>
                ))}
            </Carousel>
      
    </div>
  )
}
