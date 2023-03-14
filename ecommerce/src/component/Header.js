import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import images from "../../src/images/images.jpg";
import Login from "./LoginModal";
import { useState } from "react";
import AddProduct from "./AddProductModal";
import { ToastContainer, Toast, toast } from "react-toastify";
import { BsCart4} from 'react-icons/bs';
import axios from "axios";
import { BsFillCartFill } from "react-icons/bs";
import "jquery/dist/jquery.slim.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
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
    <nav class="navbar navbar-expand-lg navbar-light bg-white w-100 navigation" id="navbar">
        <Container>
          <Navbar.Brand href="#home" className="font-weight-bold">
            Home
          </Navbar.Brand>
          <Nav className="justify-content-end font-weight-bold">
          <Nav.Link onClick={() => checkLogin()}>Add product</Nav.Link>
            {localStorage.token ? (
              <div style ={{display:"flex"}}>
              <Nav.Link onClick= {()=> logOut()}>Logout</Nav.Link>
              <Nav.Link ><BsFillCartFill></BsFillCartFill></Nav.Link>
              </div>
            ) : (
              <Nav.Link onClick={() => setShow(true)}>Login</Nav.Link>
            )}
            
          </Nav>
        </Container>
        <Login show={show} setShow={setShow} />
        <AddProduct show={showProduct} setShow={setShowProduct} />
      </nav>
    </>
  );
}

export default Header;
