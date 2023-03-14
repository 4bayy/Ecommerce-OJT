import React, { useState } from 'react';
import ProductDetail from '../../pages/productdetail/ProductDetail';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, Toast, toast } from 'react-toastify';
import Login from '../../component/LoginModal';
import './productcard.css';
import { Button } from 'react-bootstrap';
import { addCart } from '../../redux/CartSlice';
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
            <div class="container ">
                <div class="card ">
                    <img src={props.image} alt="" onClick={()=>navigate(`/productsdetail/${props.id}`)} />
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
                                <hr></hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductCard;
