import React from 'react'
import { Card, Button } from 'antd';




function DrinkItem({ drinkInfo, addToCart }) {
    const { Meta } = Card;
  
    return (
        <div>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={drinkInfo.picture} style={{ width: '240px', height: '240px' }} />}
            >
                <Meta title={drinkInfo.name} description={drinkInfo.price} style={{ paddingBottom: '5px' }} />
                <Button type="ghost" shape="round" onClick={() => { addToCart(drinkInfo) }}>
                    commander
                </Button>
            </Card>
        </div>

    )
}

export default DrinkItem;