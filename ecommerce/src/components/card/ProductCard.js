import React, { useState } from 'react';
import ProductDetail from '../../pages/productdetail/ProductDetail';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, Toast, toast } from 'react-toastify';
import Login from '../../component/LoginModal';
import './productcard.css';
import { Button } from 'react-bootstrap';
import { addCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

function ProductCard(props) {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const dispatch =useDispatch()

    const notify = () =>
        toast.success(' Added to Cart Succesfully', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light'
        });
    const checkLogin = (item) => {
        console.log('add to cart cliked');
        if (localStorage.token) {
            notify();
            console.log(item);
            dispatch(addCart(item));
        } else {
            console.log('Need to Login');
            setShow(true);
        }
    };
    return (
        <div class="product">
            {/* <div class="product-wrap">
        <img class="img-fluid w-100 mb-3 img-first" src={props.image} alt="product-img" />
        
        </div>

        <span class="onsale">Sale</span>
        <div class="product-hover-overlay">
        <a href="#"><i class="tf-ion-android-cart" onClick={checkLogin}></i></a>
        <a onClick={() => navigate(`/productsdetail/${props.id}`)}><i class="tf-ion-ios-eye" ></i></a>
            </div>

        <div class="product-info">
        <h2 class="product-title h5 mb-0"><a href="/product-single">{props.title}</a></h2>
        Price:<span class="price">
        {localStorage.token ? (
                    <h5 className="card-text">{props.price}</h5>):
                    (<h5 className="card-text" style={{ filter: 'blur(4px)'}}>{props.price}</h5>)}
        </span>
        <ToastContainer limit={1}></ToastContainer>
                    <Login show={show} setShow={setShow} />
        </div> */}
            <div class="container ">
                <div class="card ">
                    <img src={props.image} alt="" onClick={checkLogin} />
                    <div class="card-body">
                        <div class="row">
                            <div class="card-title">
                                <h4>{props.title}</h4>
                                <span class="price">
                                    {localStorage.token ? (
                                        <h5 className="card-text">
                                            ${props.price}
                                        </h5>
                                    ) : (
                                        <h5
                                            className="card-text"
                                            style={{ filter: 'blur(4px)' }}
                                        >
                                            {props.price}
                                        </h5>
                                    )}
                                </span>
                                <Login show={show} setShow={setShow} />
                            </div>
                        </div>
                        <hr />
                        <div class="btn-group">
                            <div class="btn ">
                                <a onClick={()=>checkLogin(props.item)}>
                                    ADD TO<i class="tf-ion-android-cart"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductCard;
