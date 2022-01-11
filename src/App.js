import logo from './logo.svg';
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Signup from './Signup/Signup';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" variant="light" bg="dark">
        <Container>
          <Navbar.Brand href="#">Test</Navbar.Brand>
          
        </Container>
      </Navbar>
      <div>
        <Signup></Signup>
      </div>
    </div>
  );
}

export default App;
