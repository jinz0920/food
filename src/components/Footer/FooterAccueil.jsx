import { Layout } from 'antd';

function FooterAccueil() {
    const {Footer} = Layout;
 
    return (
        <div>
            <Layout>
            <Footer style={{ textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </div>
    )
}

export default FooterAccueil
