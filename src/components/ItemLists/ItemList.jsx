import { useState } from 'react'
import { Row, Col, Divider } from 'antd'
import ItemMenu from '../Items/ItemMenu'


function ItemList() {
    const titles = [
        { nom: "Le secret d'un repas réussi", buttonText: "Menu" },
        { nom: "Plûtot tartinable ou velouté", buttonText: "Entrée" },
        { nom: "Garantis anti fringales", buttonText: "Plat" },
        { nom: "Du plus léger au plus gourmand", buttonText: "Dessert" }
    ]

    return (
        <div>
            <Divider orientation="left"></Divider>
            <Row justify="space-around">
                {
                    titles.map(title => <Col span={4}><ItemMenu info={title} /></Col>
                    )
                }
            </Row>
        </div>
    )
}

export default ItemList
