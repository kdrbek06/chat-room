import {useState} from "react";
import axios from "axios";

const LoginForm = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();


        //authanticate all the specific data
        const authObject = {
            'Project-ID': "c6868c85-147a-468c-9b22-bfe21187626b", 'User-Name': username, 'User-Secret': password
        }


        //username / password >> chatengine >> give messages
        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});
            // if works >> log in

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {
            // else error >> try again

        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Room</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>

            </div>

        </div>

    )
}

export default LoginForm