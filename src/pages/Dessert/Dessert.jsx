import React from 'react'
import DessertItem from '../DessertItem/DessertItem'
import { Row, Col, Divider } from 'antd';
import classNames from './Dessert.module.css';
import {useState,useEffect} from 'react'

const Dessert = () => {

    const [dessert, setDessert] = useState([])

    const fetchDessert = async () => {
        const response = await fetch('http://localhost:5000/dessert')
        const data = await response.json()
        console.log(data)
        setDessert(data)
    }

    useEffect(() => {
        fetchDessert()
    }, [])

    return (
        <div>
            <Divider orientation="left" className={classNames.AppDessert}>La liste des desserts </Divider>
            <Row justify="space-around" className={classNames.AppDessert}>
                {
                    dessert.map(desserts =>
                        <Col span={4} className={classNames.AppDessertItem}>
                            <DessertItem dessertInfo={desserts} /></Col>)
                }
            </Row>

        </div>
    )
}

export default Dessert

