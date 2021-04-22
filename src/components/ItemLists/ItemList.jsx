import { Row, Col, Divider } from 'antd'
import ItemMenu from '../Items/ItemMenu'
import Img from'../Img/Img'



function ItemList() {
    const titles = [
        { nom: "Le secret d'un repas réussi", buttonText: "Menu", src: 'https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/elle-a-table/fiches-cuisine/tous-les-themes/plats/45279226-4-fre-FR/Recettes-Plats.jpg' },
        { nom: "Plûtot tartinable ou velouté", buttonText: "Entrée", src: 'img/01.jpg' },
        { nom: "Garantis anti fringales", buttonText: "Plat", src: 'https://static.emilehenry.com/866768-large_default/plat-a-four-ovale.jpg' },
        { nom: "Du plus léger au plus gourmand", buttonText: "Dessert" }
    ]
    const titles2 = [
        { nom: 'Dry drink', buttonText: 'Boissons', src: 'https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/elle-a-table/fiches-cuisine/tous-les-themes/plats/45279226-4-fre-FR/Recettes-Plats.jpg' },

    ]

    return (
        <div>
            <Divider orientation="left"></Divider>
            <Row justify="space-around">
                {
                    titles.map((title, index) => <Col span={4}><ItemMenu key={index} info={title} /></Col>)

                }
            </Row>
            <Row justify="space-around">
                {
                    titles2.map((title, index) => <Col span={4}><ItemMenu key={index} info={title} /></Col>)

                }
                <Col span={16}><Img /></Col>
            </Row>

        </div>
    )
}

export default ItemList
