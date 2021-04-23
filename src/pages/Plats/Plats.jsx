import {useState,useEffect} from 'react'
import PlatItem from '../PlatItem/PlatItem'
import { Row, Col, Divider } from 'antd';
import classNames from './Plats.module.css';

function Plats(/* { plats } */) {
    const [courses, setCourses] = useState([])

    useEffect(() => {
       fetchCourses()
    }, [])

    const fetchCourses = async () => {
        const response = await fetch('http://localhost:5000/courses')
        const data = await response.json()
        console.log(data)
        setCourses(data)
    }
    return (

        <div>
            <Divider orientation="left" className={classNames.AppPlat}>La liste des plats </Divider>

            <Row justify="space-around">
                {
                    courses.map(plat => <Col span={12} className={classNames.AppPlatItem}> <PlatItem platInfo={plat} key={plat.id} /></Col>)
                }
            </Row>

        </div>



    )
}

export default Plats
