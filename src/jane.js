import React from 'react'
import { ChatEngine } from 'react-chat-engine';
import LoginForm from "./components/LoginForm";


export default function Jane() {

    if(!localStorage.getItem('username')) return <LoginForm/>

    return (
        <ChatEngine
            projectID='c6868c85-147a-468c-9b22-bfe21187626b'
            userName='bot'
            userSecret='P@ssw0rd'
            height = '100vh'

        />
    )
}
