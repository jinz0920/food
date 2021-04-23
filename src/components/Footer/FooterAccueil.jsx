import { Layout } from 'antd';

function FooterAccueil() {
    const {Footer} = Layout;
 
    return (
        <div>
            <Layout>
            <Footer style={{ textAlign: 'center'}}>Projet React ©{new Date().getFullYear()} Created by Bérangère Nicolas et Jin</Footer>
            </Layout>
        </div>
    )
}

export default FooterAccueil
