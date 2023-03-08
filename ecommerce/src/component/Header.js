import Container from 'react-bootstrap/Container';
import {Nav,Navbar,} from 'react-bootstrap';
import images from "../../src/images/images.jpg"
import Login from './LoginModal';
import { useState } from 'react';
import AddProduct from './AddProductModal';
import axios from 'axios';
function Header() {
    const [show, setShow] = useState(false);
    const [showProduct, setShowProduct] = useState(false);
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
            <Nav.Link onClick={()=>{setShowProduct(true)}}>Add product</Nav.Link>
            
          </Nav>
        </Container>
        <Login show={show} setShow={setShow}/>
        <AddProduct show={showProduct} setShow={setShowProduct}/>
      </Navbar>
    </>
  );
}

export default Header;