import { useEffect, useState } from 'react'
import { PageHeader, Button } from 'antd';
import './Navbar.module.css'
import { Link } from 'react-router-dom'
import PubSub from 'pubsub-js'
import { ShoppingCartOutlined } from '@ant-design/icons'

function Navbar() {

    const [state, setState] = useState({})

    useEffect(() => {

        PubSub.subscribe('token', (_, stateObj) => {
            setState(stateObj)
        })

    }, [])

    const logOut = () => {
        localStorage.removeItem('token')
        setState({})
    }
    return (
        <div className='site-page-header-ghost-wrapper'>
            <PageHeader
                ghost={false}
                title={
                    <img src='img/logo.jpg' width='230px' />}
                extra={[
                    <Button key="10" type="ghost"><Link to="/">Accueil</Link></Button>,
                    <Button key="9"><Link to="/menu">Menu</Link></Button>,
                    <Button key="8"><Link to="/entrées">Entrées</Link></Button>,
                    <Button key="7"><Link to="/plats">Plats</Link></Button>,
                    <Button key="6"><Link to="/desserts">Desserts</Link></Button>,
                    <Button key="5"><Link to="/boissons">Boissons</Link></Button>,
                    <Button key="4"><Link to="/où">On vous livre où ?</Link></Button>,
                    <Button key="3" onClick={logOut} style={{ display: (!state.token) && 'none' }}><Link to="/">Logout</Link></Button>,
                    <Button key="2" style={{ display: (state.token) && 'none' }}><Link to="/inscription">S'inscrire</Link></Button>,
                    <Button key="1" style={{ display: (state.token) && 'none' }}><Link to="/login">Se Connecter</Link></Button>,
                    <Button key="0"><Link to="/panier"><ShoppingCartOutlined /></Link></Button>,


                ]}>
            </PageHeader>
        </div >
    )
}

export default Navbar
