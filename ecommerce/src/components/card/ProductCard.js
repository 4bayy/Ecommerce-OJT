import React, { useState } from 'react';
import ProductDetail from '../../pages/productdetail/ProductDetail';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, Toast, toast } from 'react-toastify';
import Login from '../../component/LoginModal';
import './productcard.css';
import { Button } from 'react-bootstrap';
import { addCart, addWishlist } from '../../redux/CartSlice';
import { useDispatch } from 'react-redux';
import {BsFillHeartFill} from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { removeWishlist } from '../../redux/CartSlice';
import { useLocation } from 'react-router-dom';
import {CiCircleRemove} from 'react-icons/ci';
import {AiOutlineHeart} from 'react-icons/ai';

function ProductCard(props) {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [addWish, setAddWish] = useState(true);
    const dispatch =useDispatch();
    const [showWishlist, setShowWishlist] = useState(false);
    const state = useSelector((state) => state.carts);
    const location = useLocation();

    const checkLogin = (item) => {
        console.log('add to wishlist clicked');
        if (localStorage.token) {
            
            console.log(item);
            if (!state.wishList.includes(item)) {
                
                dispatch(addWishlist(item));
                setAddWish(false);
            } else {
                
                dispatch(removeWishlist(item));
                setAddWish(true);
            }
        } else {
            console.log('Need to Login');
            setShow(true);
        }
    };
    const handleMouseEnter = () =>{
        setShowWishlist(true);
    }
    const handleMouseLeave = () =>{
        setShowWishlist(false);
    }
    const onclickText = () =>{
        if(localStorage.token){
            navigate(`/productsdetail/${props.id}`)
        }
        else{
            setShow(true);
        }
    }
    const moveToCart = (item) =>{
        dispatch(addCart(item));
        dispatch(removeWishlist(item));
    }
    return (
        <div class="product">
            <div class="container " >
                
                <div class="card " >
            {location.pathname === '/WishList' ? (<div style={{marginLeft:"250px"}}  onClick={()=>dispatch(removeWishlist(props.item))}><CiCircleRemove></CiCircleRemove></div>):("")}

                    <img src={props.image} alt="" onClick={onclickText} />

                    <div class="card-body" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{height:"250px"}}>
                        <div class="row" >
                            
                            <div class="card-title">
                                <h4 className='card-text' onClick={onclickText}>{props.title}</h4>
                                <span class="price">
                                    {localStorage.token ? (
                                        <h5 className="card-text-price">
                                            ${props.price}
                                        </h5>
                                    ) : (
                                        <h5
                                            className="card-text-price"
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
                        {location.pathname === '/WishList' ? (<div class="btn" style={{width:"280px",height:"50px",borderColor:"ButtonShadow",color:"#fb4570"} }onClick={()=>moveToCart(props.item)}>Move to Cart</div>):("")}

                        {location.pathname === '/' && showWishlist &&  <div class="btn " onClick = {()=>checkLogin(props.item)}  style={{width:"280px",height:"50px",borderColor:"ButtonShadow"}}>
                                                {addWish?(<><AiOutlineHeart style={{color:"red",fontSize:"25px"}}/> WISHLIST </> ):(<>< BsFillHeartFill style={{color:"red",fontSize:"25px"}} ></BsFillHeartFill> WISHLISTED</>)}
                           
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductCard;
