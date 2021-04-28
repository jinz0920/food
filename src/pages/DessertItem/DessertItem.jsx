import React from 'react'
import { Card, Button } from 'antd';


const DessertItem = ({ dessertInfo }) => {
    
    const { Meta } = Card;
    
    const addToCart = async () => {
        const reponse = await fetch('http://localhost:5000/panier', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: dessertInfo.id,
                name: dessertInfo.name

            })
        })

        // const data = await response.json()
    }
    return (
        <div>

            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={dessertInfo.picture} style={{ width: '240px', height: '240px' }} />}
            >
                <Meta title={dessertInfo.name} description={dessertInfo.price} style={{ paddingBottom: '5px' }} />
                <Button type="ghost" shape="round" onClick={addToCart}>
                    commander
                </Button>
            </Card>

        </div>
    )
}

export default DessertItem
