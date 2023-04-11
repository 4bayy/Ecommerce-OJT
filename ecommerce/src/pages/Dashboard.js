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
import { BsFillHeartFill } from 'react-icons/bs';
import img1 from './../images/img1.png';
import img2 from './../images/img2.png';
import img3 from './../images/img3.png';
import img4 from './../images/img4.png';
import img5 from './../images/index-6.png';
import img6 from './../images/img6.jpg';
import img7 from './../images/img7.jpg';
import luisquintero from './../images/luis-quintero.jpg';
import maxfitcher from './../images/max-fischer.jpg';
import melikebenli from './../images/melike-benli.jpg';
import { addWishlist } from '../redux/CartSlice';
import { useSelector } from 'react-redux';
import { removeWishlist } from '../redux/CartSlice';
import { useLocation } from 'react-router-dom';
import { error } from 'jquery';

function Shop() {
    const [productdata, setProductData] = useState([]);
    const [category, setCategory] = useState([]);
    const [filteredList, setFilteredList] = new useState(productdata);
    const state = useSelector((state) => state.carts);

    //add if else
    // useEffect(() => {
    //     axios
    //         .get(base_url + 'products')
    //         .then((res) => {
    //             console.log(res.data);
    //             setProductData(res.data);
    //             setFilteredList(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    //     axios
    //         .get(base_url + 'products/categories')
    //         .then((res) => {
    //             console.log(res);
    //             setCategory(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);
    // const [show, setShow] = useState(false);
    // const dispatch = useDispatch();

    // const filterSearch = (event) => {
    //     const query = event.target.value;
    //     const filteredData = productdata.filter((item) => {
    //         return item.title.toLowerCase().includes(query.toLowerCase());
    //     });
    //     setFilteredList(filteredData);
    //     if (filteredList.length() === 0) {
    //         return <h1>not found</h1>;
    //     }
    // };

    // const getCategoryWise = (category) => {
    //     axios
    //         .get(base_url + 'products/category/' + category)
    //         .then((res) => {
    //             console.log(res.data);
    //             setFilteredList(res.data);
    //         })
    //         .catch((err) => {
    //             toast.error('something went wrong', {
    //                 position: 'top-right',
    //                 autoClose: 3000,
    //                 hideProgressBar: false,
    //                 theme: 'light'
    //             });
    //         });
    // };
    useEffect(() => {
        axios
            .get(base_url + `Category`)
            .then((res) => {
                console.log(res.data);
                setCategory(res.data);
                console.log(category);
            })
            .catch((err) => {
                console.log('error from category', err);
            });
    }, []);
    return (
        <div className="shop-container">
            <Header />
            <div
                style={{
                    padding: ' 10px',
                    marginLeft: '5px',
                    marginRight: '5px',
                    borderRadius: '8px',
                    // backgroundColor: '#09203F'
                }}
            >
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded"
                            width={200}
                            height={400}
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
                            // width={90}
                            height={400}
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
                            width={200}
                            height={400}
                            src={img3}
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
                            width={200}
                            height={400}
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
            <div class="topnav mt-4 ">
                <input
                    type="text"
                    placeholder="Search jewelleries,watches,bags,tops..."
                    className="form-control mb-2 w-50 "
                    style={{ margin: '15px auto', borderRadius: '10px' }}
                    //onchange
                />
            </div>
            <div
                className="product-home-brandsec"
                style={{ paddingTop: '100px', paddingLeft: '30px' }}
            >
                <div>
                    <h2 style={{fontweight:"bold",fontFamily:"sans-serif"}}>DEALS ON TOP BRAND </h2>
                </div>
                <div
                    class="product-home-brandsec-div"
                    style={{ paddingTop: '30px' }}
                >
                    <div class="product-home-brandsec-card">
                        <img
                            src={img5}
                            alt="Snow"
                            style={{
                                width: '100%',
                                height: '12em',
                                width: '11em',
                                borderRadius: '8px'
                            }}
                        />
                    </div>
                    <div class="product-home-brandsec-card">
                        <img
                            src={luisquintero}
                            alt="Forest"
                            style={{
                                width: '100%',
                                height: '12em',
                                width: '11em',
                                borderRadius: '8px'
                            }}
                        />
                    </div>
                    <div class="product-home-brandsec-card">
                        <img
                            src={maxfitcher}
                            alt="Mountains"
                            style={{
                                width: '100%',
                                height: '12em',
                                width: '11em',
                                borderRadius: '8px'
                            }}
                        />
                    </div>
                    <div class="product-home-brandsec-card">
                        <img
                            src={melikebenli}
                            alt="Mountains"
                            style={{
                                width: '100%',
                                height: '12em',
                                width: '11em',
                                borderRadius: '8px'
                            }}
                        />
                    </div>
                    <div class="product-home-brandsec-card">
                        <img
                            src={img6}
                            alt="Mountains"
                            style={{
                                width: '100%',
                                height: '12em',
                                width: '11em',
                                borderRadius: '8px'
                            }}
                        />
                    </div>
                    <div class="product-home-brandsec-card">
                        <img
                            src={img7}
                            alt="Mountains"
                            style={{
                                width: '100%',
                                height: '12em',
                                width: '11em',
                                borderRadius: '8px'
                            }}
                        />
                    </div>
                </div>
            </div>
            <section class="products-shop section">
            <h2  className='ps-4' style={{fontweight:"bold",fontFamily:"sans-serif"}}>CATEGORIES TO BAG</h2>
            <div className="producthome-category d-flex">
                {category.map((i,idx) => (
                    <div className="categories-container pl-5">
                        <div className="categories">
                            <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" />
                            <h5>{i.name}</h5>
                        </div>
                    </div>
                ))}
            </div>
            </section>
        </div>
    );
}
export default Shop;
