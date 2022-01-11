import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";


function Signup(props) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passConfirm, setPassConfirm] = useState('')

    function handleEmail(e) {
        var val = e.target.value
        setEmail(val)
        console.log(val)
    }

    function handleUsername(e) {
        var val = e.target.value
        setUsername(val)
        console.log(val)
    }

    function handlePassword(e) {
        var val = e.target.value
        setPassword(val)
    }

    function handlePassConfirm(e) {
        var val = e.target.value
        setPassConfirm(val)
    }

    function handleSubmit(e) {

    }
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} placeholder="Enter email" onChange={handleEmail}/>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" value={username} placeholder="Pick a username" onChange={handleUsername}/>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} placeholder="Password" onChange={handlePassword}/>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" value={passConfirm} placeholder="Confirm Password" onChange={handlePassConfirm}/>
                    
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form.Group>
            </Form>
        </div>
        
    )

}

export default Signup