import images2 from './../../images/images2.jpg';
import './productdetail.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { base_url } from '../../Constants';

function ProductDetail() {
    const id =useParams();
    // console.log(id);
    const[productDetail,setProductDetail]=useState([]);
    // console.log("api not loading");
    // console.log(id);
    useEffect(()=>{
        axios.get(base_url+"products/"+id.id)
        .then((res)=>{
            console.log(res.data);
            setProductDetail(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    console.log(productDetail);
    
    return (
        <div>
            <div class="container my-5">
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <img
                            class="img-fluid details-img"
                            src={productDetail.image}
                            alt="imagehere"
                        />
                    </div>
                    <div class="col-md-6 col-sm-12 description-container">
                        <div class="main-description">
                            <p class="product-category mb-0">Graphite</p>
                            <h3>{productDetail.title}</h3>
                            <p class="product-price">${productDetail.price}</p>

                            <p class="product-title mt-4 mb-1">
                                About this product
                            </p>
                            <p class="product-description mb-4">
                                {productDetail.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductDetail;