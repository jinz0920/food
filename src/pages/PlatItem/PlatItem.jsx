import React from 'react'
import { Card } from 'antd';
import ButtonMenu from '../../components/Buttons/ButtonMenu';


function PlatItem({platInfo}) {
    const { Meta } = Card;
    return (
        <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={platInfo.picture} />}
  >
    <Meta title={platInfo.name} description={platInfo.price} />
    <ButtonMenu textContent="commander" />
  </Card>
       
           
     
    )
}

export default PlatItem
