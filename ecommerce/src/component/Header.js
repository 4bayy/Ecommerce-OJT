import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import images from "../../src/images/images.jpg";
import Login from "./LoginModal";
import { useState } from "react";
import AddProduct from "./AddProductModal";
import { ToastContainer, Toast, toast } from "react-toastify";
import { BsCart4} from 'react-icons/bs';
import axios from "axios";
function Header() {
  const [show, setShow] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const logOut = () => {
    console.log(localStorage.token);
    localStorage.clear();
    toast.success("successfully logged out", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      theme: "light",
    });
    window.location.reload(false);
  };
  const checkLogin = () => {
    if (localStorage.token) {
      setShowProduct(true);
    } else {
      setShow(true);
    }
  };
  return (
    <>
    <ToastContainer />
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={images}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="Logo"
              style={{borderRadius:"50%"}}
            />
          </Navbar.Brand>
          <Nav className="justify-content-end">
          <Nav.Link onClick={() => checkLogin()}>Add product</Nav.Link>
            {localStorage.token ? (
              <div  style={{display:"flex"}}>
                <Nav.Link ><BsCart4/></Nav.Link>
              <Nav.Link onClick= {()=> logOut()}>Logout</Nav.Link>
              
              </div>
            ) : (
              <Nav.Link onClick={() => setShow(true)}>Login</Nav.Link>
            )}
            
          </Nav>
        </Container>
        <Login show={show} setShow={setShow} />
        <AddProduct show={showProduct} setShow={setShowProduct} />
      </Navbar>
    </>
  );
}

export default Header;
