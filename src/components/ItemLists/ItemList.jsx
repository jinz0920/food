import { useState } from 'react'
import { Row, Col, Divider } from 'antd'
import ItemMenu from '../Items/ItemMenu'


function ItemList() {
    let [titles, setTitles] = useState([])
    titles = setTitles = ([{ nom: "Le secret d'un repas réussi" },
    { nom: "Plûtot tartinable ou velouté" },
    { nom: "Garantis anti fringales" },
    { nom: "Du plus léger au plus gourmand" }
])
    

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
