import React, {useState} from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { site, alg} from "../../site";
import jwt_decode from "jwt-decode";


const Login = (props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showAlert, setShowAlert] = useState(false)

    function handleUsername(e) {
        var val = e.target.value
        setUsername(val)
    }

    function handlePassword(e) {
        var val = e.target.value
        setPassword(val)
    }
    function handleSubmit(e) {
        e.preventDefault()
        let data = {username: username, password: password}
        let awt = {method: "POST", headers: {"Content-Type": "application/json"},body: JSON.stringify(data)}
        fetch(site + "/auth",awt)
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp.message)
            if (resp.message == "Success")
            {
                console.log(jwt_decode(resp.token))
                localStorage.setItem('AUTH_TOKEN',resp.token)
                props.login()
            } else {
                setShowAlert(true)
            }
            
        }) 
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {showAlert ? <Alert variant="danger">Incorrect Username or Password</Alert> : null}
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" value={username} placeholder="Enter Username" onChange={handleUsername}/>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} placeholder="Enter Password" onChange={handlePassword}/>
                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                </Form.Group>  
            </Form>
        </div>
    )
}

export default Login