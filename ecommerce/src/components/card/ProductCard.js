import React, { useState } from 'react';
import ProductDetail from '../../pages/productdetail/ProductDetail';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, Toast, toast } from 'react-toastify';
import Login from '../../component/LoginModal';

function ProductCard(props) {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

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
    const checkLogin = () => {
        console.log('add to cart cliked');
        if (localStorage.token) {
            notify();
        } else {
            console.log('Need to Login');
            setShow(true);
        }
    };
    return (
        <div class="product">
        <div class="product-wrap">
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
        </div>
    </div>
    );
}
export default ProductCard;
