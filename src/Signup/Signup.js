import React, {useState} from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { site } from "../App";


function Signup(props) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passConfirm, setPassConfirm] = useState('')
    const [passMatch, setPassMatch] = useState(true)

    function handleEmail(e) {
        var val = e.target.value
        setEmail(val)
    }

    function handleUsername(e) {
        var val = e.target.value
        setUsername(val)
    }

    function handlePassword(e) {
        var val = e.target.value
        
        setPassword(val)
    }

    function handlePassConfirm(e) {
        var val = e.target.value
        setPassMatch(val == password)
        setPassConfirm(val)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!passMatch)
        {
            return
        }

        let data = {email: email, username: username, password:password}
        let awt = {method: "POST", headers: {"Content-Type": "application/json"},body: JSON.stringify(data)}
        fetch(site + "/user",awt)
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
        })

        //check that passwords match
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} placeholder="Enter email" onChange={handleEmail}/>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" value={username} placeholder="Pick a username" onChange={handleUsername}/>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} placeholder="Password" onChange={handlePassword}/>
                    {passMatch ? null : <Alert variant="danger" >Passwords Must Match</Alert>}
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