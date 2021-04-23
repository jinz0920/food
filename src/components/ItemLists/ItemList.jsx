import { Row, Col, Divider } from 'antd'
import ItemMenu from '../Items/ItemMenu'
import Img from '../Img/Img'
import classNames from './ItemList.module.css';



function ItemList() {
    const titles = [
        { nom: "Le secret d'un repas réussi", buttonText: "Menu", src: 'img/img5.jpg' },
        { nom: "Plûtot tartinable ou velouté", buttonText: "Entrée", src: 'img/img6.jpg' },
        { nom: "Garantis anti fringales", buttonText: "Plat", src: 'img/img7.jpg' },
        { nom: "Du plus léger au plus gourmand", buttonText: "Dessert", src: 'img/img8.jpg' }
    ]
    const titles2 = [
        { nom: 'Dry drink', buttonText: 'Boissons', src: 'img/img9.jpg' },

    ]

    return (
        <div>
            <Divider orientation="left"></Divider>
            <Row justify="space-around"className={classNames.AppBox}>
                {
                    titles.map((title, index) => <Col span={4}><ItemMenu key={index} info={title} /></Col>)

                }
            </Row>
            <Row justify="space-around"className={classNames.AppBox2}>
                {
                    titles2.map((title, index) => <Col span={4}><ItemMenu key={index} info={title} /></Col>)

                }
                <Col span={16} className={classNames.Plan}>
                    <Row>
                        <Col span={12} >
                            <Img/>
                        </Col>
                        <Col span={8} className={classNames.Paristexte}>
                            <h3>Paris et Île de France</h3>
                            <p>Paris, Neuilly-sur-Seine, Levallois, Boulogne-Billancourt,
                            Issy-les-Moulineaux, Vanves, Vincennes, La Défense, Puteaux,
                            Nanterre, Courbevoie, La Garenne-Colombes, Asnières-sur-Seine,
                            Boissy-Saint-Léger, Bonneuil-sur-Marne, Colombes, Suresnes,
                            Saint-Cloud.
                        </p>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </div>
    )
}

export default ItemList
