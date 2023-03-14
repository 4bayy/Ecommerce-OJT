import Header from '../component/Header';
import ProductCard from '../components/card/ProductCard';
import './dashboard.css';

import { base_url } from '../Constants';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductDetail from './productdetail/ProductDetail';

import { ToastContainer, Toast, toast } from 'react-toastify';
function Shop() {
    const [productdata, setProductData] = useState([]);
    const [category, setCategory] = useState([]);
    const [filteredList, setFilteredList] = new useState(productdata);

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
    return (
        <div className="shop-container">
            <Header />
            <section class="page-header">
                <div class="overly"></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="content text-center">
                                <h1 class="mb-3">Shop</h1>
                                <p>
                                    "What you wear is how you present yourself
                                    to the world, especially today, when human
                                    contacts are so quick. Fashion is instant
                                    language."
                                </p>

                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb bg-transparent justify-content-center"></ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="topnav">
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
                        <div class="col-md-9">
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
                                                        value=""
                                                        selected="selected"
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
                                        <div class="col-lg-3 col-10 col-md-7 col-sm-10 mb-5">
                                            <ProductCard
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
                        <div class="col-md-3">
                            <form class="mb-5"></form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Shop;
