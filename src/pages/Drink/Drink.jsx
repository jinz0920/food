import React from 'react'
import DrinkItem from '../DrinkItem/DrinkItem'
import { Row, Col, Divider } from 'antd';
import classNames from './Drink.module.css';
import { useState, useEffect } from 'react'

function Drink({addToCart}) {
    const [drink, setDrink] = useState([])

    const fetchDrink = async () => {
        const response = await fetch('http://localhost:5000/drink')
        const data = await response.json()
        // console.log(data)
        setDrink(data)
    }

    useEffect(() => {
        fetchDrink()
    }, [])
    return (

        <div>
            <Divider orientation="left" className={classNames.AppDrink}>La liste des boissons </Divider>
            <Row justify="space-around" className={classNames.AppDrink}>
                {
                    drink.map(drink =>
                        <Col span={4} className={classNames.AppDrinkItem}>
                            <DrinkItem drinkInfo={drink} addToCart={addToCart}/></Col>)
                }
            </Row>

        </div>
    )
}

export default Drink