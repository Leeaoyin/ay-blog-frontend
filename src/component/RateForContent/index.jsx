import React from 'react'


import { Rate } from '@arco-design/web-react';
import { IconHeartFill } from '@arco-design/web-react/icon';

export default function RateForContent({widths}) {

    function TextWrapper(props) {
        return (
          <div
            style={{
              width: 34,
              lineHeight: '24px',
              textAlign: 'center',
              fontSize: 16,
              fontWeight: 'bold',
            }}
          >
            {props.text}
          </div>
        );
      }

  return (
    <div>
      <Rate
        style={{ width:widths,margin:'0px auto' }}
        defaultValue={2.5}
        allowHalf
        character={
          <TextWrapper
            text={
              <IconHeartFill
                style={{
                  fontSize: 18,
                }}
              />
            }
          />
        }
      />
    </div>
  )
}
