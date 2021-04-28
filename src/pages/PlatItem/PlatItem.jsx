import React from 'react'
import { Card,Button } from 'antd';



function PlatItem({ platInfo }) {

  const addToCart = async () => {
    const reponse = await fetch('http://localhost:5000/panier', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: platInfo.id,
        name: platInfo.name,
        picture: platInfo.picture,
        price: platInfo.price

      })
    })

    // const data = await response.json()
  }
  const { Meta } = Card;
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={platInfo.picture} style={{width:'240px',height:'240px'}}/>}
    >
      <Meta title={platInfo.name} description={platInfo.price} />
      <Button type="ghost" shape="round" onClick={addToCart}>
            commander
        </Button>
    </Card>



  )
}

export default PlatItem
