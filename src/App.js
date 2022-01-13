
import login_icon from './Icons/login_icon.png'
import profile_icon from './Icons/profile_icon.png'
import hamburger_icon from './Icons/Hamburger_Icon.png'
import './App.css';
import React, {useState, useEffect} from 'react'
import { Button, Container, Modal, Nav, Navbar, Row, Card} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './pages/Signup/Signup.js';
import Login from './pages/Login/Login';
import { site } from './site';
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/custom.scss';
import jwt_decode from "jwt-decode";
import ProfileGlance from './pages/ProfileGlance';
import RecipePage from './pages/Recipe/RecipePage';
import RecipesNew from './pages/Recipe/Sorts/RecipesNew';

function App() {

  const [user, setUser] = useState(null)
  const [showLogin, setShowLogin] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  const openLogin = () => {
    setShowLogin(true)
    setShowSignUp(false)
  }
  const closeLogin = () => setShowLogin(false)

  const openSignUp = () => {
    setShowSignUp(true)
    setShowLogin(false)
  }

  const closeSignUp = () => setShowSignUp(false)

  function login()
  {
    var check_token = localStorage.getItem('AUTH_TOKEN') || '' || null
    if (check_token != null && check_token.length > 0 && user == null)
    {
      
      let data = {token: check_token}
      let awt = {method: "POST", headers: {"Content-Type": "application/json"},body: JSON.stringify(data)}
      fetch(site + "/retrieve",awt)
      .then(resp => resp.json())
      .then(resp => {
        if (resp.message == "Success")
        {
          setUser(resp.user)
          
        }
      })
    }
  }

  useEffect(() => {
    login()
  },[])
  function handleLogin() {
    login()
    closeLogin()
    closeSignUp()
    
  }

  function handleLogOut(e) {
    localStorage.setItem('AUTH_TOKEN', '')
    setUser(null)
  }
  return (
    <div className="App">
      <Navbar expand="lg" variant="light" bg="primary">
        <Container>
          
          <Navbar.Brand textColor='#000000'><img src = {hamburger_icon} width="30" height="30"/>minMACROS</Navbar.Brand>
          <Navbar.Brand>
            {user != null ? 
            <Button type="dark" onClick={handleLogOut}>Logout</Button> :
            <Button type="dark" onClick={openSignUp}>Sign Up</Button>
            }
            {user != null ? <img src = {profile_icon} width="30" height="30" /> : <img src = {login_icon} width="30" height="30"  onClick={openLogin}/>}
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        {user != null ? <ProfileGlance user={user} /> : null}
      </Container>
      <Modal show={showLogin} onHide={closeLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login login={() => handleLogin()}/>
        </Modal.Body>
      </Modal>
      <Modal show={showSignUp} onHide={closeSignUp}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signup login={() => handleLogin()}/>
        </Modal.Body>
      </Modal>
     
      <Router>
        <Routes>
          <Route path="recipes" element={<RecipePage/>}>
            
          </Route>
        </Routes>
          
      </Router>
    </div>
  );
}

export default App;
