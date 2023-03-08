import React from 'react';
import ProductDetail from '../../pages/productdetail/ProductDetail';
import {Link, useNavigate} from "react-router-dom";
import { ToastContainer,Toast, toast } from"react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Login from '../../component/LoginModal';

function ProductCard(props) {
    const navigate=useNavigate();
    const notify=()=>toast.success(' Added to Cart Succesfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });;
    const checkLogin=()=>{
        console.log("add to cart cliked");
        if(localStorage.token)
        {
            notify();
        }
        else{
            console.log("Need to Login");
            navigate(`/login`);
        }
    }
    return (
        <div>
            <div className="card" style={{width:"30%"}}>
                <img className="card-img-top" src={props.image} alt="Cardimagecap"  style={{height:"100px"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                       {props.description}
                    </p>
                    <button
                            className="btn btn-warning btn-sm mt-2 me-2"
                            onClick={() => navigate(`/productsdetail`)}
                        >
                            View
                        </button>
                    <button
                    className="btn btn-primary btn-sm mt-2 me-2"
                    onClick={checkLogin}
                    >
                        Add to Cart
                    </button>
                    <ToastContainer limit={1}></ToastContainer>
                </div>
            </div>
        </div>
    );
}
export default ProductCard;
