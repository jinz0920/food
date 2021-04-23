import React from 'react'
import { PageHeader, Button } from 'antd';
import './Navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar({fetchCourses}) {

    return (
        <div className='site-page-header-ghost-wrapper'>
            <PageHeader
                ghost={false}
                title={
                    <img src='img/logo.jpg' width='230px'/>}
                extra={[
                    <Button key="9" type="ghost"><Link to="/">Accueil</Link></Button>,
                    <Button key="8"><Link to="/menu">Menu</Link></Button>,
                    <Button key="7"><Link to="/entrées">Entrées</Link></Button>,
                    <Button key="6" onClick={fetchCourses}><Link to="/plats">Plats</Link></Button>,
                    <Button key="5"><Link to="/desserts">Desserts</Link></Button>,
                    <Button key="4"><Link to="/boissons">Boissons</Link></Button>,
                    <Button key="3"><Link to="/où">On vous livre où ?</Link></Button>,
                    <Button key="2"><Link to="/inscription">S'inscrire</Link></Button>,
                    <Button key="1"><Link to="/login">Se Connecter</Link></Button>,
                ]}>

            </PageHeader>
        </div >
    )
}

export default Navbar
