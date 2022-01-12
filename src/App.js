import logo from './logo.svg';
import login_icon from './Icons/login_icon.png'
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/custom.scss';


function App() {
  return (
    <div className="App">
      <Navbar expand="lg" variant="light" bg="primary">
        <Container>
          <Navbar.Brand href="#">Meal Prep App</Navbar.Brand>
          <Navbar.Brand href="/signup">
            <img src = {login_icon} width="30" height="30" />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
