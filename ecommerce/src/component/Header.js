import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavLink } from 'react-bootstrap';
import images from '../../src/images/images.jpg';
import Login from './LoginModal';
import { useState } from 'react';
import AddProduct from './AddProductModal';
import { ToastContainer, Toast, toast } from 'react-toastify';
import { BsCart4 } from 'react-icons/bs';
import axios from 'axios';
import { BsFillCartFill } from 'react-icons/bs';
import 'jquery/dist/jquery.slim.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {BsHeart} from 'react-icons/bs'

function Header() {
    const [show, setShow] = useState(false);
    const [showProduct, setShowProduct] = useState(false);
    const navigate = useNavigate();
    const state = useSelector((state) => state.carts);
    const location = useLocation();
    const logOut = () => {
        console.log(localStorage.token);
        navigate("/");
        localStorage.clear();
        toast.success('successfully logged out', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            theme: 'light'
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
            <nav
                class="navbar navbar-expand-lg navbar-light bg-white w-100 navigation  "
                id="navbar"
                style={{marginTop:"-30px"}}
            >
                <Container>
                    <Navbar.Brand href="#home" className="font-weight-bold">
                    𝓒𝓵𝓸𝓾𝓭𝓩𝓮𝓻𝓸
                    </Navbar.Brand>
                    <Nav className="justify-content-end ">
                        {location.pathname === '/' && (
                            <Nav.Link style={{color:"black"}} onClick={() => checkLogin()}>
                                Add product
                            </Nav.Link>
                        )}
                        {localStorage.token  ? (
                            <div style={{ display: 'flex' }}>
                                <Nav.Link style={{color:"black"}} onClick={() => logOut()}>
                                    Logout
                                </Nav.Link>
                                {location.pathname !== '/cartpage'&&(
                                    
                                <Nav.Link onClick={() => navigate(`/cartpage`)}>
                                    <BsFillCartFill  style={{color:"black"}} ></BsFillCartFill>
                                    <h5
                                        style={{
                                            verticalAlign: 'text-top',
                                            display: 'inline'
                                        }}
                                    >
                                        {state.count}
                                    </h5>
                                </Nav.Link>
                                
                                )}
                                {location.pathname !== '/WishList'&&(
                                <Nav.Link onClick={() => navigate(`/WishList`)}>
                                    <BsHeart style={{color:"red"}}/></Nav.Link>)}
                            </div>
                        ) : (
                            !localStorage.token && (
                                <div className='d-inline-flex '>
                                <Nav.Link style={{color:"black"}} onClick={() => setShow(true)}>
                                    Login
                                </Nav.Link>
                                {/* Added Dummy register button */}
                                 <Nav.Link style={{color:"black"}} >
                                 <button className='btn-primary' style={{borderRadius:"8px"}} onClick={()=>navigate(`/register`)}>Signup</button>
                               </Nav.Link>
                              </div>
                            )
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
