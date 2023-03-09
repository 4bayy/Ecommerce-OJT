import images2 from './../../images/images2.jpg';
import './productdetail.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { base_url } from '../../Constants';

function ProductDetail() {
    const id =useParams();
    console.log(id);
    const[productDetail,setProductDetail]=useState();
    console.log("api not loading");
    console.log(id);
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/1`)
        .then((res)=>{
            console.log(res.data);
            setProductDetail(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    
    return (
        <div>
            <div class="container my-5">
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <img
                            class="img-fluid details-img"
                            src="https://source.unsplash.com/5Tm4YRqnNcM"
                            alt="imagehere"
                        />
                    </div>
                    <div class="col-md-6 col-sm-12 description-container">
                        <div class="main-description">
                            <p class="product-category mb-0">Graphite</p>
                            <h3>iPhone 7 Graphite - 256GB</h3>
                            <p class="product-price">$1199.00</p>

                            <p class="product-title mt-4 mb-1">
                                About this product
                            </p>
                            <p class="product-description mb-4">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Quis assumenda voluptatem
                                tempore dolor quod. Expedita, id, minus
                                similique dolor sed adipisci aliquam natus amet
                                doloremque delectus cupiditate? Sint, quasi, ad
                                necessitatibus omnis quaerat tenetur corporis
                                porro aut, natus ex ab id vel odit veniam fugiat
                                temporibus aperiam quia rem minima!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductDetail;
