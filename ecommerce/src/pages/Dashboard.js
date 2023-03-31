import Header from '../component/Header';
import ProductCard from '../components/card/ProductCard';
import './dashboard.css';
import { base_url } from '../Constants';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductDetail from './productdetail/ProductDetail';
import { ToastContainer, Toast, toast } from 'react-toastify';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch } from 'react-redux';
import {BsFillHeartFill} from 'react-icons/bs'
import img1 from "./../images/img1.png"
import img2 from "./../images/img2.png"
import img3 from "./../images/img3.png"
import img4 from "./../images/img4.png"
import { addWishlist } from '../redux/CartSlice'
import { useSelector } from 'react-redux';
import {removeWishlist} from '../redux/CartSlice';
import { useLocation } from 'react-router-dom';


function Shop() {
    const [productdata, setProductData] = useState([]);
    const [category, setCategory] = useState([]);
    const [filteredList, setFilteredList] = new useState(productdata);
    const state = useSelector((state) => state.carts);
    
    //add if else
    useEffect(() => {
        axios
            .get(base_url + 'products')
            .then((res) => {
                console.log(res.data);
                setProductData(res.data);
                setFilteredList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        axios
            .get(base_url + 'products/categories')
            .then((res) => {
                console.log(res);
                setCategory(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const [show, setShow] = useState(false);
    const dispatch =useDispatch()
   
    
        

    const filterSearch = (event) => {
        const query = event.target.value;
        const filteredData = productdata.filter((item) => {
            return item.title.toLowerCase().includes(query.toLowerCase());
        });
        setFilteredList(filteredData);
        if (filteredList.length() === 0) {
            return <h1>not found</h1>;
        }
    };

    const getCategoryWise = (category) => {
        axios
            .get(base_url + 'products/category/' + category)
            .then((res) => {
                console.log(res.data);
                setFilteredList(res.data);
            })
            .catch((err) => {
                toast.error('something went wrong', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    theme: 'light'
                });
            });
    };
    
    console.log(filteredList);
    return (
        <div className="shop-container">
            <Header />
            <div style={{paddingTop:"5px"}}>
            <Carousel variant="dark">
            <Carousel.Item>
            <img
          className="d-block w-100"
          width={200} height={300}
          src={img1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5> </h5>
          <p> </p>
        </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            
        <img
          className="d-block w-100"
          width={200} height={300}
          src={img2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5> </h5>
          <p> </p>
        </Carousel.Caption>
      </Carousel.Item>
     
      <Carousel.Item>
        <img
          className="d-block w-100"
          width={200} height={300}
          src={img3}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5> </h5>
          <p> </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
            <img
          className="d-block w-100"
          width={200} height={300}
          src={img4}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5> </h5>
          <p> </p>
        </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            </div>
            <div class="topnav mt-4">
                <input
                    type="text"
                    placeholder="Search jewelleries,watches,bags,tops..."
                    className="form-control mb-2 w-50 "
                    style={{ margin: '10px auto' }}
                    onChange={filterSearch}
                />
            </div>

            <section class="products-shop section">
                <div class="container">
                    <div class="row">
                        <div >
                            <div class="row align-items-center">
                                <div class="col-lg-12 mb-4 mb-lg-0">
                                    <div class="section-title">
                                        <h2 class="d-block text-left-sm">
                                            Shop
                                        </h2>
                                        <div class="heading d-flex justify-content-between mb-5">
                                            <p class="result-count mb-0">
                                                {' '}
                                                Showing 1 - 6 of 17 results
                                            </p>
                                            <form
                                                class="ordering "
                                                method="get"
                                            >
                                                <select
                                                    name="orderby"
                                                    class="orderby form-control"
                                                    aria-label="Shop order"
                                                >
                                                    <option
                                                        value="-1"
                                                    >
                                                        Select Category
                                                    </option>
                                                    {category.map(
                                                        (item, index) => (
                                                            <option
                                                                value={item}
                                                                onClick={() =>
                                                                    getCategoryWise(
                                                                        `${item}`
                                                                    )
                                                                }
                                                            >
                                                                {item}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                                <input
                                                    type="hidden"
                                                    name="paged"
                                                    value="1"
                                                />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                {filteredList.length > 0 ? (
                                    filteredList.map((i, idx) => (
                                        <div class="col-lg-4 mb-8"  >
                                            
                                            <ProductCard
                                                item={i}
                                                id={i.id}
                                                title={i.title}
                                                price={i.price}
                                                description={i.description}
                                                image={i.image}
                                                rating={i.rating.rate}
                                            ></ProductCard>
                                           
                                          
                                        </div>
                                    ))
                                ) : (
                                    <h1
                                        style={{
                                            textAlign: 'center',
                                            marginTop: '50px'
                                        }}
                                    >
                                        Not Found!
                                    </h1>
                                )}
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Shop;
