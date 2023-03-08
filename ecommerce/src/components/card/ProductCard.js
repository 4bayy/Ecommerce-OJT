import React from 'react';
import ProductDetail from '../../pages/productdetail/ProductDetail';
import {Link, useNavigate} from "react-router-dom";

function ProductCard(props) {
    const navigate=useNavigate();

    return (
        <div>
            <div className="card" style={{width:"30%"}}>
                <img className="card-img-top" src={props.image} alt="Card image cap"  style={{height:"100px"}}/>
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
                    <a href="#" className="btn btn-primary ms-3">
                        Add to Cart
                    </a>
                </div>
            </div>
        </div>
    );
}
export default ProductCard;
