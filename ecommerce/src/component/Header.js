import Container from 'react-bootstrap/Container';
import {Nav,Navbar,} from 'react-bootstrap';
import images from "../../src/images/images.jpg"
import Login from './LoginModal';
import { useState } from 'react';
  
function Header() {
    const [show, setShow] = useState(false);
    const logOut=()=>{
      console.log(localStorage.token);
      localStorage.clear();
    }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
            <img
              src={images}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link onClick={()=>{setShow(true)}}>Login</Nav.Link>
            <Nav.Link onClick={()=>{logOut()}}>Logout</Nav.Link>
            <Nav.Link href="#features">Add product</Nav.Link>
            
          </Nav>
        </Container>
        <Login show={show} setShow={setShow}/>
      </Navbar>
    </>
  );
}

export default Header;