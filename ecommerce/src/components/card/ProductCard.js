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
            <div className="card">
                <img
                    className="card-img-top "
                    src={props.image}
                    alt="Cardimagecap"
                    style={{ height: '100px',width:"100px",backgroundColor:"beige",
                    marginLeft:"5rem",marginTop:"10px" }}
                />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h5>Price:</h5>
                    {localStorage.token ? (
                    <h5 className="card-text">{props.price}</h5>):
                    (<h5 className="card-text" style={{ filter: 'blur(4px)'}}>{props.price}</h5>)}

                    <button
                        className="btn btn-warning btn-sm mt-2 me-2"
                        onClick={() => navigate(`/productsdetail/${props.id}`)}
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
                    <Login show={show} setShow={setShow} />
                </div>
            </div>
    );
}
export default ProductCard;
