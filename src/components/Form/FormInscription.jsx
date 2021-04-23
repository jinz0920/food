import { useState } from 'react'
import { Form, Input, Button } from 'antd';

function FormInscription() {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 10 },
    };

    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            // number: '${label} is not a valid number!',
        },
        // number: {
        //     range: '${label} must be between ${min} and ${max}',
        // },
    };

    const [state, setState] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })

    const changeGlobalState = (event) => {
        // console.log(event.target)
        setState({
            ...state,
            [event.target.id]: event.target.value
        })
    }
    // const onSubmitHandler = async (event) => {
    //     event.preventDefault()
    //     const response = await fetch('http://localhost:5000/users', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(
    //             {
    //                 firstname: state.firstname,
    //                 lastname: state.firstname,
    //                 email: state.email,
    //                 password: state.password
    //             }

    //         )
    //     })
    //     const data = await response.json()
    //     console.log(data)
    // }
    const onFinish = async (event) => {
        // event.preventDefault()
        const response = await fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    firstname: state.firstname,
                    lastname: state.firstname,
                    email: state.email,
                    password: state.password
                }

            )
             
    })
    if (!response.ok) {
		const errorMessage = await response.text();
		throw new Error(errorMessage);
	}
    const data = await response.json()
    console.log(data)
}

return (
    <div>
        <Form {...layout} name="nest-messages" validateMessages={validateMessages} onFinish={onFinish} /* onSubmit={onSubmitHandler} */>
            <Form.Item name={['user', 'firstname']} label="Firstame" >
                <Input type="text" id="firstname" name="firstname" value={state.firstname} onChange={changeGlobalState} />
            </Form.Item>
            <Form.Item name={['user', 'lastname']} label="Lastname">
                <Input type="text" id="lastname" name="lastname" value={state.lastname} onChange={changeGlobalState} />
            </Form.Item>
            <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }, { required: true }]}>
                <Input type="email" id="email" name="email" value={state.email} onChange={changeGlobalState} />
            </Form.Item>
            <Form.Item name={['user', 'password']} label="Password" rules={[{ required: true }]}>
                <Input type="password" id="password" value={state.password} onChange={changeGlobalState} />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Inscription
        </Button>
            </Form.Item>
        </Form>
    </div>
)
}

export default FormInscription
