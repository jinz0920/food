import React from 'react'
import { Carousel } from 'antd';



const Header = () => {
    const contentStyle = {
        height: '360px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <div>
            <Carousel autoplay>
                <div>
                    <img height='360px' width='100%' src='img/img1.jpg' alt='ex' />
                </div>
                <div>
                    <img height='360px' width='100%' src='img/img2.jpg' alt='ex' />
                </div>
                <div>
                    <img height='360px' width='100%' src='img/img3.jpg' alt='ex' />
                </div>
                <div>
                    <img height='360px' width='100%' src='img/img4.jpg' alt='ex' />
                </div>
            </Carousel>
        </div>
    )
}

export default Header
