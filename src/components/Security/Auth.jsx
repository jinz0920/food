import React, { Children } from 'react'
import {useEffect} from 'react'
import PubSub from 'pubsub-js'

function Auth({children}) {
    useEffect(() => {
        const token2 = localStorage.getItem('token')
        console.log(token2)
        if (token2) {
            PubSub.publish('token', {token: token2})
        }
    }, [])

    return children


    
}

export default Auth
