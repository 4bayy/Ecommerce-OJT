import "./productdetail.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../../Constants";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/CartSlice";
import { ToastContainer, Toast, toast } from "react-toastify";
import Header from "../../component/Header";

function ProductDetail(props) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const id = useParams();

  // console.log(id);
  const [productDetail, setProductDetail] = useState([]);
  // console.log("api not loading");
  // console.log(id);
  useEffect(() => {
    axios
      .get(base_url + "products/" + id.id)
      .then((res) => {
        console.log(res.data);
        setProductDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(productDetail);
  const checkLogin = (item) => {
    console.log("add to cart cliked");
    if (localStorage.token) {
      console.log(item);
      dispatch(addCart(item));
    } else {
      console.log("Need to Login");
      setShow(true);
    }
  };

  return (
    <div>
      <ToastContainer />
      <Header />
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
              <p class="product-title mt-4 mb-1">About this product</p>
              <p class="product-description mb-4">
                {productDetail.description}
              </p>
            </div>
          </div>
          <div class="btn-group">
            <div class="btn ">
              <a onClick={() => checkLogin(productDetail)}>
                ADD TO <i class="tf-ion-android-cart"></i>
              </a>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
