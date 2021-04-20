import React from 'react'
import { PageHeader, Button} from 'antd';
import className from './Navbar.module.css'

function Navbar() {

    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                title="FoodChéri"
                extra={[
                    <Button key="9" type="primary">Accueil</Button>,
                    <Button key="8">Menu</Button>,
                    <Button key="7">Entrées</Button>,
                    <Button key="6">Plats</Button>,
                    <Button key="5">Desserts</Button>,
                    <Button key="4">Boissons</Button>,
                    <Button key="3">On vous livre où ?</Button>,
                    <Button key="2">S'inscrire</Button>,
                    <Button key="1">
                        Se Connecter
        </Button>,
                ]}
            >
                {/* <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
                    <Descriptions.Item label="Association">
                        <a>421421</a>
                    </Descriptions.Item>
                    <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
                    <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
                    <Descriptions.Item label="Remarks">
                        Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
                </Descriptions> */}
            </PageHeader>
        </div>
    )
}

export default Navbar
