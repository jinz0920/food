import { useState, useEffect } from 'react'
import { Form, Input, Button, message } from 'antd';
import { useHistory } from "react-router-dom"
import PubSub from 'pubsub-js'

function FormLogin() {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 10 },
    };


    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!'

        }
    };

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('')
    const [token, setToken] = useState({})


    const onChangeHandler = (event) => {
        // console.dir(event)
        setEmail(event.target.value)

    }
    const onChangeHandlerPass = (event) => {
        // console.dir(event)
        setPassword(event.target.value)
    }

    const history = useHistory();

    const onFinish = async () => {
        // event.preventDefault()

        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const data = await response.json()
        if (data.error) {
            setError('Email ou Password erroné')
        } else {
            history.push("/")
        }
        setToken(data)

        localStorage.setItem('token', data.token);
        console.log(data.token)
        PubSub.publish('token', data)


    }
    // useEffect(() => {
    //     const token2 = localStorage.getItem('token')
    //     console.log(token2)
    //     if (token2) {
    //         setToken(token2)
    //         PubSub.publish('token', token2)
    //     }
    // }, [])


    return (
        <div>
            <Form {...layout} name="nest-messages" validateMessages={validateMessages} onFinish={onFinish} /* onSubmit={onSubmitHandler} */>
                <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }, { required: true }]}>
                    <Input type="email" id="email" name="email" value={email} onChange={onChangeHandler} />
                </Form.Item>
                <Form.Item name={['user', 'password']} label="Password" rules={[{ required: true }]}>
                    <Input type="password" id="password" value={password} onChange={onChangeHandlerPass} />
                </Form.Item>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        se connecter
        </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default FormLogin

